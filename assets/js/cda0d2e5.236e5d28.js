"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5889],{8854:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>k,contentTitle:()=>x,default:()=>f,frontMatter:()=>b,metadata:()=>v,toc:()=>j});var s=n(5893),i=n(1151),t=n(7294),o=n(4866),a=n(5518);const l=function(e){const[r,n]=(0,t.useState)(null);return(0,t.useEffect)((()=>{["Mac OS","Windows"].includes(a.BF)?n("Docker"):n("Linux")}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{...e,defaultValue:r,children:e.children})})};var d=n(5162),c=n(1326),h=n(2753);function p(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"goal",children:"Goal"}),"\n",(0,s.jsx)(r.p,{children:"Proxy a reserved public subdomain to a backend target with an always-on Linux system service."}),"\n",(0,s.jsx)(r.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"zrok-share"})," package creates a ",(0,s.jsx)(r.code,{children:"zrok-share.service"})," unit in systemd. The administrator edits the service's configuration file to specify the:"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"zrok environment enable token"}),"\n",(0,s.jsxs)(r.li,{children:["target URL or files to be shared and backend mode, e.g. ",(0,s.jsx)(r.code,{children:"proxy"})]}),"\n",(0,s.jsx)(r.li,{children:"authentication options, if wanted"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"When the service starts it will:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["enable the zrok environment unless ",(0,s.jsx)(r.code,{children:"/var/lib/zrok-share/.zrok/environment.json"})," exists"]}),"\n",(0,s.jsxs)(r.li,{children:["reserve a public subdomain for the service unless ",(0,s.jsx)(r.code,{children:"/var/lib/zrok-share/.zrok/reserved.json"})," exists"]}),"\n",(0,s.jsxs)(r.li,{children:["start sharing the target specified as ",(0,s.jsx)(r.code,{children:"ZROK_TARGET"})," in the environment file"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Set up ",(0,s.jsx)(r.code,{children:"zrok"}),"'s Linux package repository by following ",(0,s.jsx)(r.a,{href:"/docs/guides/install/linux#install-zrok-from-the-repository",children:"the Linux install guide"}),", or run this one-liner to complete the repo setup and install packages."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"curl -sSLf https://get.openziti.io/install.bash \\\n| sudo bash -s zrok-share\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["If you set up the repository by following the guide, then also install the ",(0,s.jsx)(r.code,{children:"zrok-share"})," package. This package provides the systemd service."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="Ubuntu, Debian"',children:"sudo apt install zrok-share\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="Fedora, Rocky"',children:"sudo dnf install zrok-share\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Ansible Playbook"}),(0,s.jsxs)(h.Z,{title:"Set up package repository and install zrok-share",children:[c.Z,"\n- name: Install zrok-share package\n  gather_facts: false\n  hosts: all \n  become: true\n  tasks:\n  - name: Install zrok-share\n    ansible.builtin.package:\n      name: zrok-share\n      state: present\n\n  - name: Copy env config from Ansible controller to target\n    copy:\n      dest: /opt/openziti/etc/zrok/zrok-share.env\n      src: /opt/openziti/etc/zrok/zrok-share.env\n\n  - name: Enable and restart service\n    systemd:\n      name: zrok-share\n      enabled: yes\n      state: restarted\n      daemon_reload: yes\n\n  - name: Wait for service\n    systemd:\n      name: zrok-share\n      state: started\n    register: service_status\n    until: service_status.status.ActiveState == 'active'\n    retries: 30\n    delay: 1\n"]})]}),"\n",(0,s.jsx)(r.h2,{id:"enable",children:"Enable"}),"\n",(0,s.jsx)(r.p,{children:"Save the enable token from the zrok console in the configuration file."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_ENABLE_TOKEN="14cbfca9772f"\n'})}),"\n",(0,s.jsx)(r.h2,{id:"name-your-share",children:"Name your Share"}),"\n",(0,s.jsxs)(r.p,{children:["This unique name becomes part of the domain name of the share, e.g. ",(0,s.jsx)(r.code,{children:"https://my-prod-app.in.zrok.io"}),". A random name is generated if you don't specify one."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_UNIQUE_NAME="my-prod-app"\n'})}),"\n",(0,s.jsx)(r.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsxs)(r.p,{children:["You may change the target for the current backend mode, e.g. ",(0,s.jsx)(r.code,{children:"proxy"}),", by editing the configuration file and restarting the service. The reserved subdomain will remain the same."]}),"\n",(0,s.jsxs)(r.p,{children:["You may switch between backend modes or change authentication options by deleting ",(0,s.jsx)(r.code,{children:"/var/lib/zrok-share/.zrok/reserved.json"})," and restarting the service. A new subdomain will be reserved."]}),"\n",(0,s.jsx)(r.h3,{id:"proxy-a-web-server",children:"Proxy a Web Server"}),"\n",(0,s.jsx)(r.p,{children:"Proxy a reserved subdomain to an existing web server. The web server could be on a private network or on the same host as zrok."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_TARGET="http://127.0.0.1:3000"\nZROK_BACKEND_MODE="proxy"\n'})}),"\n",(0,s.jsxs)(r.p,{children:["If your HTTPS server has an unverifiable TLS server certificate then you must set ",(0,s.jsx)(r.code,{children:"--insecure"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_INSECURE="--insecure"\n'})}),"\n",(0,s.jsx)(r.h3,{id:"serve-static-files",children:"Serve Static Files"}),"\n",(0,s.jsxs)(r.p,{children:["Run zrok's embedded web server to serve the files in a directory. If there's an ",(0,s.jsx)(r.code,{children:"index.html"})," file in the directory then visitors will see that web page in their browser, otherwise they'll see a generated index of the files. The directory must be readable by 'other', e.g. ",(0,s.jsx)(r.code,{children:"chmod -R o+rX /var/www/html"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_TARGET="/var/www/html"\nZROK_BACKEND_MODE="web"\n'})}),"\n",(0,s.jsx)(r.h3,{id:"caddy-server",children:"Caddy Server"}),"\n",(0,s.jsx)(r.p,{children:"Use zrok's built-in Caddy server to serve static files or as a reverse proxy to multiple web servers with various HTTP routes or as a load-balanced set. A sample Caddyfile is available in the path shown."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_TARGET="/opt/openziti/etc/zrok/multiple_upstream.Caddyfile"\nZROK_BACKEND_MODE="caddy"\n'})}),"\n",(0,s.jsx)(r.h3,{id:"network-drive",children:"Network Drive"}),"\n",(0,s.jsxs)(r.p,{children:["This uses zrok's ",(0,s.jsx)(r.code,{children:"drive"})," backend mode to serve a directory of static files as a virtual network drive. The directory must be readable by 'other', e.g. ",(0,s.jsx)(r.code,{children:"chmod -R o+rX /usr/share/doc"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_TARGET="/usr/share/doc"\nZROK_BACKEND_MODE="drive"\n'})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://blog.openziti.io/zrok-drives-an-early-preview",children:"Learn more about this feature in this blog post"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(r.p,{children:"You can limit access to certain email addresses with OAuth or require a password."}),"\n",(0,s.jsx)(r.h3,{id:"oauth",children:"OAuth"}),"\n",(0,s.jsx)(r.p,{children:"You can require that visitors authenticate with an email address that matches at least one of the suffixes you specify. Add the following to the configuration file."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_OAUTH_PROVIDER="github"  # or google\nZROK_OAUTH_EMAILS="alice@example.com *@acme.example.com"\n'})}),"\n",(0,s.jsx)(r.h3,{id:"password",children:"Password"}),"\n",(0,s.jsx)(r.p,{children:"Enable HTTP basic authentication by adding the following to the configuration file."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',children:'ZROK_BASIC_AUTH="user:passwd"\n'})}),"\n",(0,s.jsx)(r.h2,{id:"start-the-service",children:"Start the Service"}),"\n",(0,s.jsx)(r.p,{children:"Start the service, and check the zrok console or the service log for the reserved subdomain."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="run now and at startup"',children:"sudo systemctl enable --now zrok-share.service\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="run now"',children:"sudo systemctl restart zrok-share.service\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"journalctl -u zrok-share.service\n"})}),"\n",(0,s.jsx)(r.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(r.p,{children:["The Linux distribution must have a package manager that understands the ",(0,s.jsx)(r.code,{children:".deb"})," or ",(0,s.jsx)(r.code,{children:".rpm"})," format and be running systemd v232 or newer. The service was tested with:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Ubuntu 20.04, 22.04, 23.04"}),"\n",(0,s.jsx)(r.li,{children:"Debian 11 12"}),"\n",(0,s.jsx)(r.li,{children:"Rocky 8, 9"}),"\n",(0,s.jsx)(r.li,{children:"Fedora 37, 38"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"package-contents",children:"Package Contents"}),"\n",(0,s.jsxs)(r.p,{children:["The files included in the ",(0,s.jsx)(r.code,{children:"zrok-share"})," package are sourced ",(0,s.jsx)(r.a,{href:"https://github.com/openziti/zrok/tree/main/nfpm",children:"here in GitHub"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}var m=n(9965),g=n(4996);const b={title:"zrok frontdoor",sidebar_label:"frontdoor",sidebar_position:20,hide_table_of_contents:!0},x=void 0,v={id:"guides/frontdoor",title:"zrok frontdoor",description:"zrok frontdoor is the heavy-duty front door to your app or site. It makes your website or app available to your online audience through the shield of zrok.io's hardened, managed frontends.",source:"@site/../docs/guides/frontdoor.mdx",sourceDirName:"guides",slug:"/guides/frontdoor",permalink:"/docs/guides/frontdoor",draft:!1,unlisted:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/frontdoor.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"zrok frontdoor",sidebar_label:"frontdoor",sidebar_position:20,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/guides/install/windows"},next:{title:"Permission Modes",permalink:"/docs/guides/permission-modes"}},k={},j=[{value:"Overview",id:"overview",level:2},{value:"Choose your OS",id:"choose-your-os",level:2},{value:"Goal",id:"goal",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"Installation",id:"installation",level:2},{value:"Enable",id:"enable",level:2},{value:"Name your Share",id:"name-your-share",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Proxy a Web Server",id:"proxy-a-web-server",level:3},{value:"Serve Static Files",id:"serve-static-files",level:3},{value:"Caddy Server",id:"caddy-server",level:3},{value:"Network Drive",id:"network-drive",level:3},{value:"Authentication",id:"authentication",level:2},{value:"OAuth",id:"oauth",level:3},{value:"Password",id:"password",level:3},{value:"Start the Service",id:"start-the-service",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Package Contents",id:"package-contents",level:2},{value:"Concepts",id:"concepts",level:2}];function y(e){const r={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"zrok frontdoor"})," is the heavy-duty front door to your app or site. It makes your website or app available to your online audience through the shield of zrok.io's hardened, managed frontends."]}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/5Vi8GKuTi_I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(r.p,{children:["zrok frontends are the parts of zrok that proxy incoming public web traffic to zrok backend shares via OpenZiti. When you use zrok with a ",(0,s.jsx)(r.code,{children:"zrok.io"})," frontend, you're using ",(0,s.jsx)(r.strong,{children:"zrok frontdoor"}),". ",(0,s.jsx)(r.code,{children:"zrok.io"})," is zrok-as-a-service by NetFoundry, the team behind OpenZiti. You need a free account to use ",(0,s.jsx)(r.strong,{children:"zrok frontdoor"}),"."]}),"\n",(0,s.jsx)(m.Z,{alt:"frontdoor diagram",sources:{light:(0,g.Z)("/img/zrok-frontdoor-light-mode.svg"),dark:(0,g.Z)("/img/zrok-frontdoor-dark-mode.svg")}}),"\n",(0,s.jsx)(r.h2,{id:"choose-your-os",children:"Choose your OS"}),"\n",(0,s.jsx)(r.p,{children:"Choose between installing the Linux package or running zrok with Docker (Linux, macOS, or Windows)."}),"\n","\n",(0,s.jsxs)(l,{queryString:"os",values:[{label:"Linux",value:"Linux"},{label:"Docker",value:"Docker"}],children:[(0,s.jsxs)(d.Z,{value:"Linux",children:[(0,s.jsxs)(r.p,{children:["On Linux, zrok frontdoor is implemented natively as a system service provided by the ",(0,s.jsx)(r.code,{children:"zrok-share"})," DEB or RPM package."]}),(0,s.jsx)(u,{})]}),(0,s.jsx)(d.Z,{value:"Docker",children:(0,s.jsxs)(r.p,{children:["On macOS and Windows, zrok frontdoor is implemented as a Docker Compose project which reserves a public subdomain for your website or service and manages a zrok environment that's separate from the Docker host. ",(0,s.jsx)(r.a,{href:"/docs/guides/docker-share/docker_public_share_guide",children:"Link to the Docker Public Share Guide"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"concepts",children:"Concepts"}),"\n",(0,s.jsxs)(r.p,{children:["Overview of ",(0,s.jsx)(r.a,{href:"/docs/concepts/sharing-reserved",children:"zrok reserved shares"})]})]})}function f(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},2753:(e,r,n)=>{n.d(r,{Z:()=>o});n(7294);var s=n(1272),i=n(9286),t=n(5893);const o=e=>{let{title:r,children:n}=e;const o=n.map((e=>"string"==typeof e?e.trim():s.ZP.dump(e).trim())).join("\n\n");return(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{language:"yaml",title:r,children:o})})}},1326:(e,r,n)=>{n.d(r,{Z:()=>s});const s=[{name:"Set up zrok Package Repo",gather_facts:!0,hosts:"all",become:!0,tasks:[{name:"Set up apt repo",when:'ansible_os_family == "Debian"',block:[{name:"Install playbook dependencies","ansible.builtin.package":{name:["gnupg"],state:"present"}},{name:"Fetch armored pubkey","ansible.builtin.uri":{url:"https://get.openziti.io/tun/package-repos.gpg",return_content:"yes"},register:"armored_pubkey"},{name:"Dearmor pubkey","ansible.builtin.shell":'gpg --dearmor --output /usr/share/keyrings/openziti.gpg <<< "{{ armored_pubkey.content }}"\n',args:{creates:"/usr/share/keyrings/openziti.gpg",executable:"/bin/bash"}},{name:"Set pubkey filemode","ansible.builtin.file":{path:"/usr/share/keyrings/openziti.gpg",mode:"a+rX"}},{name:"Install OpenZiti repo deb source","ansible.builtin.copy":{dest:"/etc/apt/sources.list.d/openziti-release.list",content:"deb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable debian main\n"}},{name:"Refresh Repo Sources","ansible.builtin.apt":{update_cache:"yes",cache_valid_time:3600}}]},{name:"Set up yum repo",when:'ansible_os_family == "RedHat"',block:[{name:"Install OpenZiti repo rpm source","ansible.builtin.yum_repository":{name:"OpenZitiRelease",description:"OpenZiti Release",baseurl:"https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat/$basearch",enabled:"yes",gpgkey:"https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat/$basearch/repodata/repomd.xml.key",repo_gpgcheck:"yes",gpgcheck:"no"}}]}]}]}}]);