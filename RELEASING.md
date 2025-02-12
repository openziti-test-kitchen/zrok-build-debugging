
# Releasing zrok

## Manual Steps

1. Create a semver Git tag on main starting with a 'v' character.
1. Push the release tag to GitHub like `v*.*.*`.
    1. Linux packages are uploaded to Artifactory as pre-releases.
    1. Docker images are uploaded to Docker Hub as pre-releases.
    1. A release is drafted in GitHub.
1. Edit the draft release as needed and finalize as a pre-release.
1. Edit the pre-release to mark it as a stable release (`isPrerelease: false`). Marking it as "latest" has no side effect.
    1. The one-time GitHub "released" event fires.
    1. Linux packages are promoted to "stable" in Artifactory.
    1. Docker images are promoted to `:latest` in Docker Hub.

## Rolling Back Downstreams

The concepts, tools, and procedures for managing existing downstream artifacts in Artifactory and Docker Hub are identical for zrok and ziti. Here's the [RELEASING.md document for ziti](https://github.com/openziti/ziti/blob/main/RELEASING.md#rolling-back-downstreams).
