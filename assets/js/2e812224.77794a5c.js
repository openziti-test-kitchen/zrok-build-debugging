"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8471],{8611:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guides/docker-share/docker_public_share_guide","title":"Docker Compose Public Share","description":"Goal","source":"@site/../docs/guides/docker-share/docker_public_share_guide.md","sourceDirName":"guides/docker-share","slug":"/guides/docker-share/docker_public_share_guide","permalink":"/docs/guides/docker-share/docker_public_share_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/docker-share/docker_public_share_guide.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Docker Compose Public Share","sidebar_position":10,"sidebar_label":"Public Share"},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started with Docker","permalink":"/docs/guides/docker-share/"},"next":{"title":"Private Share","permalink":"/docs/guides/docker-share/docker_private_share_guide"}}');var o=n(4848),i=n(8453);const t={title:"Docker Compose Public Share",sidebar_position:10,sidebar_label:"Public Share"},a=void 0,c={},d=[{value:"Goal",id:"goal",level:2},{value:"Overview",id:"overview",level:2},{value:"Walkthrough Video",id:"walkthrough-video",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"Create the Docker Project",id:"create-the-docker-project",level:2},{value:"Proxy Any Web Server",id:"proxy-any-web-server",level:2},{value:"Require Authentication",id:"require-authentication",level:2},{value:"OAuth Email",id:"oauth-email",level:3},{value:"Caddy is Powerful",id:"caddy-is-powerful",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"goal",children:"Goal"}),"\n",(0,o.jsx)(r.p,{children:"Publicly share a Docker Compose service with a separate zrok environment and a permanent zrok share URL."}),"\n",(0,o.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(r.p,{children:"With zrok, you can publicly share a service that's running in Docker. You need a zrok public share running somewhere that it can reach the service you're sharing. As long as that public share is running and your service is available, anyone with the address can use your service."}),"\n",(0,o.jsxs)(r.p,{children:["Here's a short article with an overview of ",(0,o.jsx)(r.a,{href:"/docs/concepts/sharing-public",children:"public sharing with zrok"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"walkthrough-video",children:"Walkthrough Video"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ycov--9ZtB4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,o.jsx)(r.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,o.jsx)(r.p,{children:"The Docker Compose project uses your zrok account token to reserve a public subdomain and keep sharing the backend\ntarget."}),"\n",(0,o.jsx)(r.p,{children:"When the project runs it will:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["enable a zrok environment unless ",(0,o.jsx)(r.code,{children:"/mnt/.zrok/environment.json"})," exists in the ",(0,o.jsx)(r.code,{children:"zrok_env"})," volume"]}),"\n",(0,o.jsxs)(r.li,{children:["reserve a public subdomain for the service unless ",(0,o.jsx)(r.code,{children:"/mnt/.zrok/reserved.json"})," exists"]}),"\n",(0,o.jsxs)(r.li,{children:["start sharing the target specified in the ",(0,o.jsx)(r.code,{children:"ZROK_TARGET"})," environment variable"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"create-the-docker-project",children:"Create the Docker Project"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Make a folder on your computer to use as a Docker Compose project for your zrok public share with a reserved subdomain and switch to the new directory in your terminal."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Download ",(0,o.jsxs)(r.a,{href:"pathname:///zrok-public-reserved/compose.yml",children:["the reserved public share ",(0,o.jsx)(r.code,{children:"compose.yml"})," project file"]})," into the same directory."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Copy your zrok account's enable token from the zrok web console to your clipboard and paste it in a file named ",(0,o.jsx)(r.code,{children:".env"})," in the same folder like this:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",metastring:'title=".env"',children:'ZROK_ENABLE_TOKEN="8UL9-48rN0ua"\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Name the Share"}),"\n",(0,o.jsxs)(r.p,{children:["This unique name becomes part of the domain name of the share, e.g. ",(0,o.jsx)(r.code,{children:"https://my-prod-app.in.zrok.io"}),". A random name is generated if you don't specify one."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",metastring:'title=".env"',children:'ZROK_UNIQUE_NAME="my-prod-app"\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Run the Compose project to start sharing the built-in demo web server. Be sure to ",(0,o.jsx)(r.code,{children:"--detach"})," so the project runs in the background if you want it to auto-restart when your computer reboots."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose up --detach\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Get the public share URL from the output of the ",(0,o.jsx)(r.code,{children:"zrok-share"})," service or by peeking in the zrok console where the share will appear in the graph."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose logs zrok-share\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-buttonless",metastring:'title="Output"',children:"zrok-public-share-1  |  https://w6r1vesearkj.in.zrok.io/\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"This concludes the minimum steps to begin sharing the demo web server. Read on to learn how to pivot to sharing any website or web service by leveraging additional zrok backend modes."}),"\n",(0,o.jsx)(r.h2,{id:"proxy-any-web-server",children:"Proxy Any Web Server"}),"\n",(0,o.jsxs)(r.p,{children:["The simplest way to share your existing HTTP server is to set ",(0,o.jsx)(r.code,{children:"ZROK_TARGET"})," (e.g. ",(0,o.jsx)(r.code,{children:"https://example.com"}),") in the environment of the ",(0,o.jsx)(r.code,{children:"docker compose up"})," command. When you restart the share will auto-configure for that URL."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",metastring:'title=".env"',children:'ZROK_TARGET="http://example.com:8080"\n'})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose down && docker compose up\n"})}),"\n",(0,o.jsx)(r.h2,{id:"require-authentication",children:"Require Authentication"}),"\n",(0,o.jsx)(r.p,{children:"You can require a password or an OAuth login with certain email addresses."}),"\n",(0,o.jsx)(r.h3,{id:"oauth-email",children:"OAuth Email"}),"\n",(0,o.jsxs)(r.p,{children:["You can allow specific email addresse patterns by setting ",(0,o.jsx)(r.code,{children:"ZROK_OAUTH_PROVIDER"})," to ",(0,o.jsx)(r.code,{children:"github"})," or ",(0,o.jsx)(r.code,{children:"google"})," and\n",(0,o.jsx)(r.code,{children:"ZROK_OAUTH_EMAILS"}),". Read more about the OAuth features in ",(0,o.jsx)(r.a,{href:"https://blog.openziti.io/the-zrok-oauth-public-frontend",children:"this blog\npost"}),"."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",metastring:'title=".env"',children:'ZROK_OAUTH_PROVIDER="github"\nZROK_OAUTH_EMAILS="alice@example.com *@acme.example.com"\n'})}),"\n",(0,o.jsx)(r.h2,{id:"caddy-is-powerful",children:"Caddy is Powerful"}),"\n",(0,o.jsxs)(r.p,{children:["The reserved public share project uses zrok's default backend mode, ",(0,o.jsx)(r.code,{children:"proxy"}),". Another backend mode, ",(0,o.jsx)(r.code,{children:"caddy"}),", accepts a path to ",(0,o.jsx)(r.a,{href:"https://caddyserver.com/docs/caddyfile",children:"a Caddyfile"})," as the value of ",(0,o.jsx)(r.code,{children:"ZROK_TARGET"})," (",(0,o.jsx)(r.a,{href:"https://github.com/openziti/zrok/tree/main/etc/caddy",children:"zrok Caddyfile examples"}),")."]}),"\n",(0,o.jsxs)(r.p,{children:["Caddy is the most powerful and flexible backend mode in zrok. You must reserve a new public subdomain whenever you switch the backend mode, so using ",(0,o.jsx)(r.code,{children:"caddy"})," reduces the risk that you'll have to share a new frontend URL with your users."]}),"\n",(0,o.jsx)(r.p,{children:"With Caddy, you can balance the workload for websites or web services or share static sites and files or all of the above at the same time. You can update the Caddyfile and restart the Docker Compose project to start sharing the new configuration with the same reserved public subdomain."}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Create a Caddyfile. This example demonstrates proxying two HTTP servers with a weighted round-robin load balancer."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-console",metastring:'title="Caddyfile"',children:"http:// {\n  # zrok requires this bind address template\n  bind {{ .ZrokBindAddress }}\n  reverse_proxy /* {\n    to http://httpbin1:8080 http://httpbin2:8080\n    lb_policy weighted_round_robin 3 2\n  }\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Create a file ",(0,o.jsx)(r.code,{children:"compose.override.yml"}),". This example adds two ",(0,o.jsx)(r.code,{children:"httpbin"})," containers for load balancing, and mounts the Caddyfile into the container."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",metastring:'title="compose.override.yml"',children:"services:\n  httpbin1:\n    image: mccutchen/go-httpbin\n    expose: 8080\n  httpbin2:\n    image: mccutchen/go-httpbin\n    expose: 8080\n  zrok-share:\n    volumes:\n      - ./Caddyfile:/mnt/.zrok/Caddyfile\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Start a new Docker Compose project or delete the existing state volume."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose down --volumes\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["If you prefer to keep using the same zrok environment with the new share then delete ",(0,o.jsx)(r.code,{children:"/mnt/.zrok/reserved.json"})," instead of the entire volume."]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Run the project to load the new configuration."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose up --detach\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Note the new reserved share URL from the log."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose logs zrok-share\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-buttonless",metastring:'title="Output"',children:"INFO: zrok public URL: https://88s803f2qvao.in.zrok.io/\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);