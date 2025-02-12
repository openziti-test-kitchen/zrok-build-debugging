
# Releasing zrok

## Manual Steps

1. Push a tag to GitHub like `v*.*.*`.
    1. Linux packages are uploaded to Artifactory as pre-releases.
    1. Docker images are uploaded to Docker Hub as pre-releases.
    1. A release is drafted in GitHub.
1. Edit the draft release as needed and finalize as a pre-release.
    1. The one-time GitHub "published" event fires, and binaries are available in GitHub.
1. Edit the pre-release to mark it as a stable release (`isPrerelease: false`). Marking it as "latest" has no side effects.
    1. The one-time GitHub "released" event fires.
    1. Linux packages are promoted to "stable" in Artifactory.
    1. Docker images are promoted to `:latest` in Docker Hub.
    1. Homebrew formulae are built and released.
    1. Python wheels are built and released to PyPi.
    1. Node.js packages are built and released to NPM.

## Rolling Back Downstreams

The concepts, tools, and procedures for managing existing downstream artifacts in Artifactory and Docker Hub are identical for zrok and ziti. Here's the [RELEASING.md document for ziti](https://github.com/openziti/ziti/blob/main/RELEASING.md#rolling-back-downstreams).
