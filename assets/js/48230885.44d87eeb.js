"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:50,sidebar_label:"Nginx TLS"},a="Nginx Reverse Proxy for zrok",l={unversionedId:"guides/self-hosting/nginx_tls_guide",id:"guides/self-hosting/nginx_tls_guide",title:"Nginx Reverse Proxy for zrok",description:"Walkthrough Video",source:"@site/../docs/guides/self-hosting/nginx_tls_guide.md",sourceDirName:"guides/self-hosting",slug:"/guides/self-hosting/nginx_tls_guide",permalink:"/docs/guides/self-hosting/nginx_tls_guide",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/nginx_tls_guide.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"Nginx TLS"},sidebar:"tutorialSidebar",previous:{title:"Linux VPS",permalink:"/docs/guides/self-hosting/self_hosting_guide"},next:{title:"Metrics and Limits",permalink:"/docs/category/metrics-and-limits"}},s={},c=[{value:"Walkthrough Video",id:"walkthrough-video",level:2},{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Choose a Reverse Proxy Address",id:"choose-a-reverse-proxy-address",level:2},{value:"Obtain a Wildcard Server Certificate",id:"obtain-a-wildcard-server-certificate",level:2},{value:"Install Nginx",id:"install-nginx",level:2},{value:"Configure Nginx",id:"configure-nginx",level:2},{value:"Restart Nginx",id:"restart-nginx",level:2},{value:"Check the Firewall",id:"check-the-firewall",level:2},{value:"Update the zrok Frontend",id:"update-the-zrok-frontend",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nginx-reverse-proxy-for-zrok"},"Nginx Reverse Proxy for zrok"),(0,o.kt)("h2",{id:"walkthrough-video"},"Walkthrough Video"),(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/870A5dke_u4?start=1080",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,o.kt)("p",null,"I'll assume you have a running zrok controller and public frontend and wish to front both with Nginx providing server TLS. Go back to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/self-hosting/self_hosting_guide"},"Self-Hosting Guide")," if you still need to spin those up."),(0,o.kt)("h2",{id:"choose-a-reverse-proxy-address"},"Choose a Reverse Proxy Address"),(0,o.kt)("p",null,"I'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.zrok.quigley.com:443")," in this example, and assume you already set up wildcard DNS like ",(0,o.kt)("inlineCode",{parentName:"p"},"*.zrok.quigley.com"),". This lets us elect ",(0,o.kt)("inlineCode",{parentName:"p"},"api.zrok.quigley.com")," as the controller DNS name, and forward any other incoming requests to the zrok public frontend."),(0,o.kt)("h2",{id:"obtain-a-wildcard-server-certificate"},"Obtain a Wildcard Server Certificate"),(0,o.kt)("p",null,"You must complete a DNS challenge to obtain a wildcard certificate from Let's Encrypt. I'll assume you know how to create the necessary TXT record in the DNS zone you're using with zrok."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install certbot: ",(0,o.kt)("a",{parentName:"p",href:"https://eff-certbot.readthedocs.io/en/stable/install.html"},"https://eff-certbot.readthedocs.io/en/stable/install.html"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run certbot with the manual plugin: ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/docs/using.html#manual"},"https://certbot.eff.org/docs/using.html#manual")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# install cert for *.zrok.quigley.com in /etc/letsencrypt\nsudo certbot certonly --manual\n")))),(0,o.kt)("h2",{id:"install-nginx"},(0,o.kt)("a",{parentName:"h2",href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"},"Install Nginx")),(0,o.kt)("h2",{id:"configure-nginx"},"Configure Nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server {\n    listen              443 ssl;\n    server_name         api.zrok.quigley.com;\n    ssl_certificate     /etc/letsencrypt/live/zrok.quigley.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/zrok.quigley.com/privkey.pem;\n    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers         HIGH:!aNULL:!MD5;\n\n    location / {\n      proxy_pass      http://127.0.0.1:18080;\n      error_log       /var/log/nginx/zrok-controller.log;\n    }\n\n}\n\nserver {\n    listen              443 ssl;\n    server_name         *.zrok.quigley.com;\n    ssl_certificate     /etc/letsencrypt/live/zrok.quigley.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/zrok.quigley.com/privkey.pem;\n    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers         HIGH:!aNULL:!MD5;\n\n    location / {\n      proxy_pass       http://127.0.0.1:8080;\n      proxy_set_header Host $host;\n      error_log        /var/log/nginx/zrok-frontend.log;\n      proxy_busy_buffers_size   512k;\n      proxy_buffers    4 512k;\n      proxy_buffer_size   256k;\n\n    }\n\n}\n")),(0,o.kt)("h2",{id:"restart-nginx"},"Restart Nginx"),(0,o.kt)("p",null,"Load the new configuration by restarting Nginx. Check the logs to make sure it's happy."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Started A high performance web server and a reverse proxy server.")),(0,o.kt)("h2",{id:"check-the-firewall"},"Check the Firewall"),(0,o.kt)("p",null,"If you followed the non-TLS quickstart then you may have opened 8080,108080/tcp in your firewall. You can go ahead and replace those exceptions with 443/tcp because only Nginx needs to be reachable for zrok to function."),(0,o.kt)("h2",{id:"update-the-zrok-frontend"},"Update the zrok Frontend"),(0,o.kt)("p",null,'List available frontends to obtain the token identifier of the frontend named "public". You may need to set ',(0,o.kt)("inlineCode",{parentName:"p"},"ZROK_ADMIN_TOKEN")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ZROK_API_ENDPOINT")," before running ",(0,o.kt)("inlineCode",{parentName:"p"},"zrok admin"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zrok admin list frontends\n\n TOKEN         ZID        PUBLIC NAME  URL TEMPLATE                              CREATED AT                         UPDATED AT                    \n 2NiDTRYUww18  7DsLh9DXG  public       http://{token}.zrok.quigley.com:8080  2023-01-19 05:29:20.793 +0000 UTC  2023-01-19 06:17:25 +0000 UTC \n")),(0,o.kt)("p",null,"Update the URL template to use Nginx."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zrok admin update frontend 2NiDTRYUww18 --url-template https://{token}.zrok.quigley.com:443\n[   0.028]    INFO main.(*adminUpdateFrontendCommand).run: updated global frontend '2NiDTRYUww18'\n")))}p.isMDXComponent=!0}}]);