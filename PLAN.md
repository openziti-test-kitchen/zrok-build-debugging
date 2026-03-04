# Downstream Tweaks Plan

Milestones for the zrok rename/rewrite effort. This plan tracks the documentation
rewrite for Linux self-hosting, informed by a hand-configured zrok2 deployment on
a Linux VPS.

## Milestone Owners

| Area | Owner | ETA |
|------|-------|-----|
| Refactor Python SDK (CI, repos, rename) | Ken | ~1 week |
| Refactor Node.js SDK (CI, repos, rename) | Michael Quigley | TBD |
| Rewrite self-hosting guides (Linux, Docker, K8s) | Ken | ~2 weeks |

---

## Tasks: Linux Self-Hosting Guide Rewrite

Based on observations from the hand-configured zrok2 VPS deployment, the following
tasks capture what needs to change in the Linux self-hosting documentation.

### 1. Review VPS bash history for deployment steps

- [ ] Collect the actual shell commands run during zrok2 deployment on the VPS
- [ ] Identify any steps that diverge from the current guide
- [ ] Note any undocumented prerequisites or gotchas encountered

### 2. Update prerequisites and "Before You Begin" section

- [ ] Verify minimum OS / kernel / package requirements match reality
- [ ] Document required firewall ports based on observed deployment
- [ ] Clarify DNS wildcard setup steps with concrete examples

### 3. Update OpenZiti setup section

- [ ] Verify Ziti Controller install instructions against current package repos
- [ ] Verify Ziti Router install instructions and enrollment flow
- [ ] Update `bootstrap.env` answer file paths and expected values
- [ ] Confirm `ziti edge login` and `ziti edge create edge-router` commands

### 4. Update zrok install section

- [ ] Confirm package repo install command (`install.bash` script) works for zrok2
- [ ] Verify the `zrok2` binary name is used consistently (rename from `zrok`)
- [ ] Update any stale version strings or example output

### 5. Update controller configuration section

- [ ] Validate `ctrl.yml` example against current config schema (v4)
- [ ] Confirm environment variable names (`ZROK2_API_ENDPOINT`, `ZROK2_ADMIN_TOKEN`)
- [ ] Update example ports, passwords, and paths to match zrok2 conventions
- [ ] Verify `zrok2 admin bootstrap` output matches current behavior

### 6. Update frontend configuration section

- [ ] Validate `http-frontend.yml` example against current schema (v3)
- [ ] Confirm `zrok2 access public` command and output
- [ ] Confirm `zrok2 admin create frontend` flow

### 7. Update account creation and environment enablement

- [ ] Verify `zrok2 admin create account` command and output
- [ ] Verify `zrok2 enable` and `zrok2 status` flows
- [ ] Update example tokens and output blocks

### 8. Update NGINX TLS reverse proxy guide

- [ ] Verify certbot/wildcard cert instructions are current
- [ ] Update NGINX config snippets (TLS protocols, proxy settings)
- [ ] Confirm `zrok2 admin list frontends` and `zrok2 admin update frontend` commands

### 9. Update instance configuration guide

- [ ] Confirm default API endpoint (`api-v2.zrok.io`) references are correct
- [ ] Verify `zrok2 config set apiEndpoint` and `zrok2 status` examples

### 10. Add systemd service management section

- [ ] Document running zrok2 controller as a systemd service
- [ ] Document running zrok2 frontend as a systemd service
- [ ] Reference the existing `zrok2-agent.service` for the agent/client side
- [ ] Include journalctl troubleshooting tips

### 11. Install Claude Code on VPS for continuous iteration

- [ ] Install Node.js 18+ on the VPS
- [ ] Install Claude Code globally (`npm install -g @anthropic-ai/claude-code`)
- [ ] Configure API key and persistent tmux session
- [ ] Clone repo and set up `debug` remote for pushing work branches

---

## Approach

1. **Observe**: Review bash history and running config on the VPS to capture ground truth
2. **Diff**: Compare observed steps against current docs to identify gaps
3. **Update**: Rewrite each doc section with verified commands and output
4. **Validate**: Test the updated guide end-to-end on a clean VPS if possible
