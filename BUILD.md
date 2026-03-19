# Build

## Quick start: build with Go

Building zrok requires **Go** (see `go.mod` for the minimum version), **Node.js v18+**, and a **C compiler** (CGO is required for SQLite3). On Windows, [TDM-GCC](https://jmeubank.github.io/tdm-gcc/download/) works well.

```bash
# Build the UI assets (only needed once, or when the UI changes)
(cd ui && npm install && npm run build)
(cd agent/agentUi && npm install && npm run build)

# Build the zrok2 binary
mkdir -p dist
go build -o dist ./cmd/zrok2
```

The binary is written to `dist/zrok2`.

## Build with goreleaser (snapshot)

goreleaser produces the same snapshot packages that CI generates, with embedded UIs:

```bash
goreleaser build --snapshot --clean -f .goreleaser-linux-amd64.yml
```

The binary lands in `dist/zrok2_linux_amd64_v1/zrok2`.

### macOS (Darwin)

The Darwin goreleaser config currently builds **arm64 only**. The amd64 target
is disabled because the transitive dependency
`google/certificate-transparency-go` contains CGO code
(`x509/root_cgo_darwin.go`, constraint: `cgo && !arm64`) that uses deprecated
macOS Security framework symbols removed from recent Xcode SDKs. The arm64
build uses a different code path and is unaffected.

```bash
goreleaser build --snapshot --clean -f .goreleaser-darwin.yml
```

## Build with Docker

For Docker-based builds — including `bin/build.bash`, the `openziti/zrok2`
container image, and cross-compilation for multiple architectures — see the
[Docker build documentation](docker/images/cross-build/README.md).

## Documentation/Website

The doc website uses [Docusaurus](https://docusaurus.io/) and requires `npm`.

```bash
cd website
yarn install   # usually only needed once
yarn start     # development server on port 3000
```

For a production build: `yarn build`.
