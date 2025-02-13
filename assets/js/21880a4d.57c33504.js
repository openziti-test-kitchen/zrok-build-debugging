"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[749],{7392:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/vpn/vpn","title":"zrok VPN Guide","description":"zrok VPN backend allows for simple host-to-host VPN setup.","source":"@site/../docs/guides/vpn/vpn.md","sourceDirName":"guides/vpn","slug":"/guides/vpn/","permalink":"/docs/guides/vpn/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/vpn/vpn.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"VPN"},"sidebar":"tutorialSidebar","previous":{"title":"Drives","permalink":"/docs/guides/drives"},"next":{"title":"myzrok","permalink":"/docs/category/myzrok"}}');var a=s(4848),o=s(8453);const t={sidebar_label:"VPN"},i="zrok VPN Guide",c={},d=[{value:"Operating System Requirements",id:"operating-system-requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"Start the VPN Server",id:"start-the-vpn-server",level:2},{value:"Reserve a VPN Share Token",id:"reserve-a-vpn-share-token",level:2},{value:"Access the VPN Share",id:"access-the-vpn-share",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"zrok-vpn-guide",children:"zrok VPN Guide"})}),"\n",(0,a.jsx)(n.p,{children:"zrok VPN backend allows for simple host-to-host VPN setup."}),"\n",(0,a.jsx)(n.h2,{id:"operating-system-requirements",children:"Operating System Requirements"}),"\n",(0,a.jsx)(n.p,{children:"zrok VPN requires elevated privileges to manage network devices."}),"\n",(0,a.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,a.jsxs)(n.p,{children:["On Windows, you must run zrok VPN commands as an administrator and install Wintun by placing ",(0,a.jsx)(n.code,{children:"wintun.dll"})," (",(0,a.jsx)(n.a,{href:"https://www.wintun.net/",children:"download link"}),") in the same directory as the ",(0,a.jsx)(n.code,{children:"zrok.exe"})," executable."]}),"\n",(0,a.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,a.jsxs)(n.p,{children:["On Linux, the simplest way to grant the necessary privileges is to run zrok VPN commands as root. You can enable a separate environment for root by also running ",(0,a.jsx)(n.code,{children:"zrok enable"})," as the root user, or you can prefix the commands like ",(0,a.jsx)(n.code,{children:"sudo -E"})," to allow zrok running as root to use the zrok environment owned by the current user. The minimum privilege is runing zrok VPN commands and the ",(0,a.jsx)(n.code,{children:"ip"})," command with the ",(0,a.jsx)(n.code,{children:"NET_ADMIN"})," kernel capability. The ",(0,a.jsx)(n.code,{children:"zrok-share.service"})," unit has a commented example to grant ",(0,a.jsx)(n.code,{children:"NET_ADMIN"})," as an Ambient Capability."]}),"\n",(0,a.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,a.jsxs)(n.p,{children:["On macOS, you must run zrok VPN commands as root. You can prefix the zrok command with ",(0,a.jsx)(n.code,{children:"sudo -E"})," to allow zrok running as root to use the zrok environment owned by the current user."]}),"\n",(0,a.jsx)(n.h2,{id:"start-the-vpn-server",children:"Start the VPN Server"}),"\n",(0,a.jsxs)(n.p,{children:["VPN is shared through the ",(0,a.jsx)(n.code,{children:"vpn"})," backend of ",(0,a.jsx)(n.code,{children:"zrok"})," command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"eugene@hermes $ sudo -E zrok share private --headless --backend-mode vpn\n[   0.542]    INFO sdk-golang/ziti.(*listenerManager).createSessionWithBackoff: {session token=[589d443c-f59d-4fc8-8c48-76609b7fb402]} new service session\n[   0.705]    INFO main.(*sharePrivateCommand).run: allow other to access your share with the following command:\nzrok access private 3rq7torslq3n\n[   0.705]    INFO zrok/endpoints/vpn.(*Backend).Run: started\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"VPN share",src:s(3827).A+"",width:"1626",height:"1314"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"sudo"})," or equivalent invocation is required because VPN mode needs to create a virtual network device (",(0,a.jsx)(n.code,{children:"tun"}),")\n",(0,a.jsx)(n.code,{children:"-E"})," option allows ",(0,a.jsx)(n.code,{children:"zrok"})," to find your zrok configuration files (in your ",(0,a.jsx)(n.code,{children:"$HOME/.zrok"}),")"]}),"\n",(0,a.jsxs)(n.p,{children:["By default ",(0,a.jsx)(n.code,{children:"vpn"})," backend uses subnet ",(0,a.jsx)(n.code,{children:"10.122.0.0/16"})," and assigns ",(0,a.jsx)(n.code,{children:"10.122.0.1"})," to the host that stared VPN share."]}),"\n",(0,a.jsxs)(n.p,{children:["Example output from ",(0,a.jsx)(n.code,{children:"ifconfig"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"tun0: flags=4305<UP,POINTOPOINT,RUNNING,NOARP,MULTICAST>  mtu 16384\n        inet 10.122.0.1  netmask 255.255.0.0  destination 10.122.0.1\n        inet6 fe80::705f:24e4:dcfc:a6b2  prefixlen 64  scopeid 0x20<link>\n        inet6 fd00:7a72:6f6b::1  prefixlen 64  scopeid 0x0<global>\n        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 500  (UNSPEC)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 27  bytes 3236 (3.2 KB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Default IP/subnet setting can be overridden by adding ",(0,a.jsx)(n.code,{children:"<target>"})," parameter:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -E zrok share private --headless --backend-mode vpn 192.168.42.12/24\n"})}),"\n",(0,a.jsx)(n.h2,{id:"reserve-a-vpn-share-token",children:"Reserve a VPN Share Token"}),"\n",(0,a.jsx)(n.p,{children:"As with all backend modes, you can reserve a share token for a VPN share."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"eugene@hermes $ zrok reserve private --backend-mode vpn\n[   0.297]    INFO main.(*reserveCommand).run: your reserved share token is 'k77y2cl7jmjl'\n\neugene@hermes $ sudo -E zrok share reserved k77y2cl7jmjl --headless\n[   0.211]    INFO main.(*shareReservedCommand).run: sharing target: '10.122.0.1/16'\n[   0.211]    INFO main.(*shareReservedCommand).run: using existing backend target: 10.122.0.1/16\n[   0.463]    INFO sdk-golang/ziti.(*listenerManager).createSessionWithBackoff: {session token=[22c5708d-e2f2-41aa-a507-454055f8bfcc]} new service session\n[   0.641]    INFO main.(*shareReservedCommand).run: use this command to access your zrok share: 'zrok access private k77y2cl7jmjl'\n[\n"})}),"\n",(0,a.jsx)(n.h2,{id:"access-the-vpn-share",children:"Access the VPN Share"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"eugene@calculon % sudo -E zrok access private --headless k77y2cl7jmjl\n[   0.201]    INFO main.(*accessPrivateCommand).run: allocated frontend '50B5hloP1s1X'\n[   0.662]    INFO main.(*accessPrivateCommand).run: access the zrok share at the following endpoint: VPN:\n[   0.662]    INFO main.(*accessPrivateCommand).run: 10.122.0.1 -> CONNECTED Welcome to zrok VPN\n[   0.662]    INFO zrok/endpoints/vpn.(*Frontend).Run: connected:Welcome to zrok VPN\n"})}),"\n",(0,a.jsxs)(n.p,{children:['zrok creates a virtual network device, i.e., a "tun" interface, when you run ',(0,a.jsx)(n.code,{children:"zrok access"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Example output from ",(0,a.jsx)(n.code,{children:"ifconfig"})," run on a VPN client device:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"utun5: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1500\n        inet 10.122.0.3 --\x3e 10.122.0.1 netmask 0xff000000\n        inet6 fe80::ce08:faff:fe8a:7b25%utun5 prefixlen 64 scopeid 0x14\n        nd6 options=201<PERFORMNUD,DAD>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["At this point a VPN tunnel is active between your server and client.\nIn the example above server is ",(0,a.jsx)(n.code,{children:"hermes(10.122.0.1)"})," and client is ",(0,a.jsx)(n.code,{children:"calculon(10.122.0.3)"}),".\nAll devices in the VPN can access one another by IP address."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"eugene@calculon ~ % ssh eugene@10.122.0.1\nWelcome to Ubuntu 23.10 (GNU/Linux 6.5.0-27-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/pro\n\n0 updates can be applied immediately.\n\nLast login: Tue Apr 16 09:27:13 2024 from 127.0.0.1\n\neugene@hermes:~$ who am i\neugene   pts/8        2024-04-16 10:04 (10.122.0.3)\n\neugene@hermes:~$\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also make a reverse(server-to-client) connection:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"eugene@hermes:~$ ssh 10.122.0.3\nLast login: Tue Apr 16 09:57:28 2024\n\neugene@calculon ~ % who am i\neugene           ttys008      Apr 16 10:06 (10.122.0.1)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},3827:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/vpn-share-077094eabd79a2e072ee4c40f8e0fd31.png"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var r=s(6540);const a={},o=r.createContext(a);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);