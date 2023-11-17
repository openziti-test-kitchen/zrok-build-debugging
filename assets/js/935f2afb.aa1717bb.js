"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting Started with zrok","href":"/docs/getting-started","docId":"getting-started"},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Private Shares","href":"/docs/concepts/sharing-private","docId":"concepts/sharing-private"},{"type":"link","label":"Public Shares","href":"/docs/concepts/sharing-public","docId":"concepts/sharing-public"},{"type":"link","label":"Reserved Shares","href":"/docs/concepts/sharing-reserved","docId":"concepts/sharing-reserved"},{"type":"link","label":"Sharing HTTP Servers","href":"/docs/concepts/http","docId":"concepts/http"},{"type":"link","label":"Sharing TCP and UDP Servers","href":"/docs/concepts/tunnels","docId":"concepts/tunnels"},{"type":"link","label":"Sharing Websites and Files","href":"/docs/concepts/files","docId":"concepts/files"},{"type":"link","label":"Open Source","href":"/docs/concepts/opensource","docId":"concepts/opensource"},{"type":"link","label":"Hosting","href":"/docs/concepts/hosting","docId":"concepts/hosting"}],"href":"/docs/concepts/"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Docker Share","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Public Share","href":"/docs/guides/docker-share/docker_public_share_guide","docId":"guides/docker-share/docker_public_share_guide"},{"type":"link","label":"Private Share","href":"/docs/guides/docker-share/docker_private_share_guide","docId":"guides/docker-share/docker_private_share_guide"}],"href":"/docs/category/docker-share"},{"type":"link","label":"Linux Service","href":"/docs/guides/linux-service","docId":"guides/linux-service"},{"type":"category","label":"Self Hosting","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Linux VPS","href":"/docs/guides/self-hosting/self_hosting_guide","docId":"guides/self-hosting/self_hosting_guide"},{"type":"link","label":"Nginx TLS","href":"/docs/guides/self-hosting/nginx_tls_guide","docId":"guides/self-hosting/nginx_tls_guide"},{"type":"category","label":"Metrics and Limits","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuring Metrics","href":"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics","docId":"guides/self-hosting/metrics-and-limits/configuring-metrics"},{"type":"link","label":"Configuring Limits","href":"/docs/guides/self-hosting/metrics-and-limits/configuring-limits","docId":"guides/self-hosting/metrics-and-limits/configuring-limits"}],"href":"/docs/category/metrics-and-limits"},{"type":"category","label":"OAuth","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"OAuth Public Frontend Configuration","href":"/docs/guides/self-hosting/oauth/configuring-oauth","docId":"guides/self-hosting/oauth/configuring-oauth"}],"href":"/docs/category/oauth"}],"href":"/docs/category/self-hosting"}],"href":"/docs/category/guides"},{"type":"link","label":"Downloads","href":"/docs/downloads","docId":"downloads"}]},"docs":{"concepts/files":{"id":"concepts/files","title":"Sharing Websites and Files","description":"With zrok it is possible to share files quickly and easily as well. To share files using zrok use","sidebar":"tutorialSidebar"},"concepts/hosting":{"id":"concepts/hosting","title":"Hosting","description":"Self-Hosted","sidebar":"tutorialSidebar"},"concepts/http":{"id":"concepts/http","title":"Sharing HTTP Servers","description":"zrok can share HTTP and HTTPS resources natively. If you have an existing web server that you want to share with other users, you can use the zrok share command using the --backend-mode proxy flag.","sidebar":"tutorialSidebar"},"concepts/index":{"id":"concepts/index","title":"Concepts","description":"zrok was designed to make sharing local resources both secure and easy. In this section of the zrok documentation, we\'ll tour through all of the most important features.","sidebar":"tutorialSidebar"},"concepts/opensource":{"id":"concepts/opensource","title":"Open Source","description":"It\'s important to the zrok project that it remain free and open source software. The code is available on GitHub","sidebar":"tutorialSidebar"},"concepts/sharing-private":{"id":"concepts/sharing-private","title":"Private Shares","description":"zrok was built to share and access digital resources. A private share allows a resource to be","sidebar":"tutorialSidebar"},"concepts/sharing-public":{"id":"concepts/sharing-public","title":"Public Shares","description":"zrok supports public sharing for web-based (HTTP and HTTPS) resources. These resources are easily shared with the general internet through public access points.","sidebar":"tutorialSidebar"},"concepts/sharing-reserved":{"id":"concepts/sharing-reserved","title":"Reserved Shares","description":"By default a public or private share is assigned a share token when you create a share using the zrok share command. The zrok share command is the bridge between your local environment and the users you are sharing with. When you terminate the zrok share, the bridge is eliminated and the share token is deleted. If you run zrok share again, you will be allocated a brand new share token.","sidebar":"tutorialSidebar"},"concepts/tunnels":{"id":"concepts/tunnels","title":"Sharing TCP and UDP Servers","description":"zrok includes support for sharing low-level TCP and UDP network resources using the tcpTunnel and udpTunnel backend modes.","sidebar":"tutorialSidebar"},"downloads":{"id":"downloads","title":"Downloads","description":"Right now all zrok binaries are delivered from the release page at GitHub.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started with zrok","description":"zrok is a next-generation sharing platform, designed to make sharing network and file resources simple and secure. zrok is a Ziti Native Application, built on top of the OpenZiti programmable zero trust network overlay. zrok is open source, licensed under the Apache v2 license. You can choose to self-host zrok or leverage the free, managed offering provided by NetFoundry at https://zrok.io.","sidebar":"tutorialSidebar"},"guides/docker-share/docker_private_share_guide":{"id":"guides/docker-share/docker_private_share_guide","title":"Docker Private Share","description":"With zrok, you can privately share a server app that\'s running in Docker, or any server that\'s reachable by the zrok container. Then, a zrok private access running somewhere else can use the private share. In this guide we\'ll cover both sides: the private share and the private access.","sidebar":"tutorialSidebar"},"guides/docker-share/docker_public_share_guide":{"id":"guides/docker-share/docker_public_share_guide","title":"Docker Public Share","description":"With zrok and Docker, you can publicly share a web server that\'s running in a local container or anywhere that\'s reachable by the zrok container. The share can be reached through a public URL thats temporary or reserved (reusable).","sidebar":"tutorialSidebar"},"guides/linux-service":{"id":"guides/linux-service","title":"Linux Service","description":"Goal","sidebar":"tutorialSidebar"},"guides/self-hosting/metrics-and-limits/configuring-limits":{"id":"guides/self-hosting/metrics-and-limits/configuring-limits","title":"Configuring Limits","description":"If you have not yet configured metrics, please visit the metrics guide first before working through the limits configuration.","sidebar":"tutorialSidebar"},"guides/self-hosting/metrics-and-limits/configuring-metrics":{"id":"guides/self-hosting/metrics-and-limits/configuring-metrics","title":"Configuring Metrics","description":"A fully configured, production-scale zrok service instance looks like this:","sidebar":"tutorialSidebar"},"guides/self-hosting/nginx_tls_guide":{"id":"guides/self-hosting/nginx_tls_guide","title":"Nginx Reverse Proxy for zrok","description":"Walkthrough Video","sidebar":"tutorialSidebar"},"guides/self-hosting/oauth/configuring-oauth":{"id":"guides/self-hosting/oauth/configuring-oauth","title":"OAuth Public Frontend Configuration","description":"As of v0.4.7, zrok includes OAuth integration for both Google and GitHub for zrok access public public frontends.","sidebar":"tutorialSidebar"},"guides/self-hosting/self_hosting_guide":{"id":"guides/self-hosting/self_hosting_guide","title":"Self-Hosting Guide for Linux","description":"Walkthrough Video","sidebar":"tutorialSidebar"}}}')}}]);