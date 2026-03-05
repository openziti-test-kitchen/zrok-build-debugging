# HANDOFF.md — zrok2 Documentation Rewrite

Branch: `downstream-tweaks` (rebased onto `origin/main`)
Plan: `debug/downstream-tweaks-plan:PLAN.md`

## Goals

Rewrite the zrok documentation for the v2.0 release:

1. **zrok2 rename** — binary renamed from `zrok` to `zrok2`, packages are `zrok2`, `zrok2-controller`, `zrok2-frontend`, `zrok2-metrics`, `zrok2-agent`
2. **dynamicProxy architecture** — replaces legacy `publicProxy` (`zrok access public`). Uses AMQP (RabbitMQ) for real-time mapping updates and gRPC over Ziti for controller-to-frontend communication
3. **Namespaces** — new v2.0 concept. Shares are addressed by name within namespaces (e.g., `public:myapp`)
4. **Production deployment patterns** — PostgreSQL (default), InfluxDB metrics, metrics bridge, systemd services, TLS, bootstrap automation
5. **Naming convention** — plain "zrok" for the project generically, backtick-wrapped `zrok2` for executables/packages/services

## Progress

### Completed

| Task | Files |
|------|-------|
| Rebased downstream-tweaks onto origin/main (resolved 4 conflict rounds) | goreleaser YAMLs, Dockerfile, nfpm scripts |
| Rewrote Linux self-hosting guide for v2.0 dynamicProxy | `website/docs/guides/self-hosting/linux/index.mdx` |
| Created idempotent bootstrap script (17 steps) | `nfpm/zrok2-bootstrap.bash` |
| Bootstrap: PostgreSQL default (sqlite3 override) | `nfpm/zrok2-bootstrap.bash` step 2 |
| Bootstrap: InfluxDB install + setup | `nfpm/zrok2-bootstrap.bash` step 3 |
| Bootstrap: OpenZiti events configuration | `nfpm/zrok2-bootstrap.bash` step 5 |
| Bootstrap: metrics bridge service | `nfpm/zrok2-bootstrap.bash` step 16 |
| Deleted frontdoor docs (replaced by agent guide) | Deleted `frontdoor.mdx`, `_frontdoor-linux.mdx`, `_linux-share-install.mdx` |
| Deleted old Docker named-volume share guides | Deleted `docker_public_share_guide.md`, `docker_private_share_guide.md` |
| Rewrote Docker guide with bind-mount + self-contained approaches | `website/docs/guides/docker-share/index.mdx` |
| Deleted NGINX TLS guide (zrok2 has built-in TLS) | Deleted `website/docs/guides/self-hosting/linux/nginx.mdx` |
| Applied consistent zrok/`zrok2` naming convention | All modified docs |
| Updated Homebrew formula to `zrok2` | `website/docs/guides/install/_homebrew.mdx` |
| Deleted AUR section (not updated for zrok2) | `website/docs/guides/install/linux.mdx` |
| Fixed frontdoor/docker references in other docs | `personalized-frontend.md`, `install/linux.mdx` |
| Fixed README.md "Docusaurus 2" → "Docusaurus" | `website/README.md` |
| Removed walkthrough video from Linux guide | `website/docs/guides/self-hosting/linux/index.mdx` |

### Staged but not committed

All doc changes and the bootstrap script are staged in the working tree. The latest bootstrap and Linux guide edits (PostgreSQL/InfluxDB/metrics additions) are unstaged modifications on top of that.

## Known Issues — Must Fix

### 1. install.bash argument in Linux install guide

**File:** `website/docs/guides/install/linux.mdx` line 19
```
curl -sSf https://get.openziti.io/install.bash | sudo bash -s zrok
```
Should be `bash -s zrok2`. The `install.bash` script uses this argument to determine which package to install from the repo.

### 2. Ansible playbook package name

**File:** `website/docs/guides/install/linux.mdx` lines 38-41
```yaml
- name: Install zrok
  ansible.builtin.package:
    name: zrok
    state: present
```
Should be `name: zrok2`. The Ansible snippet title also says "install zrok" not "install zrok2".

### 3. InfluxData apt repo GPG key method

The bootstrap script and Linux guide use the `influxdata-archive_compat.key` URL. This should be verified against current InfluxData documentation — the key URL and signing method may have changed.

### 4. `FABRIC_USAGE_PATH` coordination

The bootstrap script writes `fabric-usage.json` to `/var/lib/ziti-controller/` and configures both the Ziti controller events stanza and the bridge source to read/write this path. The Ziti controller service user must be able to write to this path and the zrok2-metrics user must be able to read it. The permissions handling in the script (`chmod o+r`) works but is coarse — a shared group would be cleaner.

### 5. Branch divergence with origin

`git status` shows the local branch has diverged from `origin/downstream-tweaks` (32 local vs 19 remote commits due to the rebase). A force push will be needed to update the remote.

## Next Steps

### Immediate

1. **Fix the two install/linux.mdx issues** (bash -s zrok, Ansible package name) — trivial edits
2. **Stage and commit** all working tree changes
3. **Force-push** the rebased branch to origin

### Short Term

4. **Review Docker compose files** in `docker/compose/` — the existing `zrok-public-reserved/compose.yml` and others still use old v1 env var names (`ZROK_ENABLE_TOKEN`, `ZROK_TARGET`, etc. without the `2` suffix). These should be updated or removed if the new Docker agent guide replaces them.

5. **Review `getting-started.mdx`** — likely has stale references to v1 commands and frontdoor. Needs the same zrok/`zrok2` naming treatment.

6. **Review `v2-migration-guide.md`** — confirm it's accurate and consistent with the new docs.

7. **Test the bootstrap script** on a clean VPS to verify end-to-end: package installs, PostgreSQL setup, InfluxDB setup, Ziti events configuration, metrics bridge startup, and full share lifecycle.

8. **Verify Docusaurus build** — run `yarn build` in the website directory to catch any broken links or MDX errors from the deleted files. The dev server (`yarn start`) may not catch all link issues.

### Medium Term

9. **Ziti router metrics configuration** — the bootstrap script configures the Ziti controller for metrics but does not touch router configs. The metrics docs say routers also need `metrics: reportInterval: 5s`. Consider adding this to the bootstrap or documenting it more prominently.

10. **Email/SMTP configuration** — the bootstrap generates a ctrl.yml without email config. The `invites`, `registration`, and `reset_password` sections reference email sending but the email section is omitted. For a complete production deployment, this needs to be addressed (or invites_open set and documented).

11. **Limits enforcement** — the bootstrap generates limits config with `enforcing: false`. The Linux guide should note that limits require metrics to be working first, then link to the [configuring limits](docs/guides/self-hosting/metrics-and-limits/configuring-limits.md) guide for enabling enforcement.

12. **Windows/macOS agent docs** — the agent guide and Docker guide are Linux-focused. The Windows agent service guide exists but may need zrok2 rename review.

## Architecture Reference

### Key Config Files (production deployment)

| File | Owner | Purpose |
|------|-------|---------|
| `/etc/zrok2/ctrl.yml` | `zrok2-controller:zrok2-controller` (640) | Controller config (admin, bridge, metrics, store, dynamic_proxy_controller) |
| `/etc/zrok2/frontend.yml` | `zrok2-frontend:zrok2-frontend` (640) | Dynamic frontend config (AMQP, TLS, host_match) |
| `/var/lib/zrok2-controller/.zrok2/identities/` | `zrok2-controller` | Ziti identities (ctrl.json, public.json, dynamicProxyController.json) |
| `/var/lib/zrok2-frontend/.zrok2/identities/` | `zrok2-frontend` | Frontend Ziti identity (public.json) |

### Config Schema Versions

- Controller: `v: 4`
- Dynamic frontend: `v: 1`
- Legacy frontend (publicProxy): `v: 3` — deprecated

### Metrics Pipeline

```
Ziti Controller → fabric-usage.json → Metrics Bridge (fileSource→amqpSink)
    → RabbitMQ (events queue) → zrok Controller (amqpSource) → InfluxDB
```

### systemd Services

| Service | Package | Type | User |
|---------|---------|------|------|
| `zrok2-controller` | `zrok2-controller` | system | `zrok2-controller` |
| `zrok2-frontend` | `zrok2-frontend` | system | `zrok2-frontend` |
| `zrok2-metrics` | `zrok2-metrics` | system | `zrok2-metrics` |
| `zrok2-agent` | `zrok2-agent` | user | (login user) |

### Bootstrap Script Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `ZROK2_DNS_ZONE` | yes | — | DNS zone (e.g., `zrok.example.com`) |
| `ZROK2_ADMIN_TOKEN` | yes | — | Admin secret |
| `ZITI_API_ENDPOINT` | yes | — | Ziti management API URL |
| `ZITI_ADMIN_PASSWORD` | yes | — | Ziti admin password |
| `ZROK2_STORE_TYPE` | no | `postgres` | `postgres` or `sqlite3` |
| `ZROK2_DB_PASSWORD` | no | (generated) | PostgreSQL password |
| `ZROK2_INFLUX_TOKEN` | no | (generated) | InfluxDB admin token |
| `ZROK2_TLS_CERT` | no | — | TLS cert path (enables HTTPS) |
| `ZROK2_TLS_KEY` | no | — | TLS key path |
| `ZROK2_CTRL_PORT` | no | `18080` | Controller listen port |
| `ZROK2_AMQP_URL` | no | `amqp://guest:guest@127.0.0.1:5672` | RabbitMQ URL |
| `ZITI_CTRL_CONFIG` | no | (auto-detected) | Ziti controller config path |
