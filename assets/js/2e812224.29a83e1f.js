"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7076],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return o.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||n;return t?o.createElement(m,i(i({ref:r},s),{},{components:t})):o.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=h;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7080:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const n={sidebar_position:10,sidebar_label:"Public Share"},i="Docker Public Share",l={unversionedId:"guides/docker-share/docker_public_share_guide",id:"guides/docker-share/docker_public_share_guide",title:"Docker Public Share",description:"With zrok, you can publicly share a server app that's running in another Docker container, or any server that's reachable by the zrok container.",source:"@site/../docs/guides/docker-share/docker_public_share_guide.md",sourceDirName:"guides/docker-share",slug:"/guides/docker-share/docker_public_share_guide",permalink:"/docs/guides/docker-share/docker_public_share_guide",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/docker-share/docker_public_share_guide.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Public Share"},sidebar:"tutorialSidebar",previous:{title:"Docker Share",permalink:"/docs/category/docker-share"},next:{title:"Private Share",permalink:"/docs/guides/docker-share/docker_private_share_guide"}},p={},c=[{value:"Walkthrough Video",id:"walkthrough-video",level:2},{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Public Share with Docker Compose",id:"public-share-with-docker-compose",level:2}],s={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-public-share"},"Docker Public Share"),(0,a.kt)("p",null,"With zrok, you can publicly share a server app that's running in another Docker container, or any server that's reachable by the zrok container."),(0,a.kt)("h2",{id:"walkthrough-video"},"Walkthrough Video"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ycov--9ZtB4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,a.kt)("p",null,"To follow this guide you will need ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"the Docker Compose plugin")," for running ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose")," commands in your terminal."),(0,a.kt)("h2",{id:"public-share-with-docker-compose"},"Public Share with Docker Compose"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make a folder on your computer to use as a Docker Compose project for your zrok public share.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your terminal, change directory to your newly-created project folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download ",(0,a.kt)("a",{parentName:"p",href:"pathname:///zrok-public-share/docker-compose.yml"},"the zrok-public-share Docker Compose project file")," into your new project folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy your zrok environment token from the zrok web console to your clipboard and paste it in a file named ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," in the same folder like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you are self-hosting zrok then it's important to set your API endpoint URL too. If you're using the hosted zrok service then you can skip this step."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# file name ".env"\nZROK_API_ENDPOINT="https://zrok.example.com"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run your Compose project to start sharing the built-in demo web server:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Read the public share URL from the output. One of the last lines is like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"zrok-public-share-1  |  https://w6r1vesearkj.in.zrok.io/\n")),(0,a.kt)("p",{parentName:"li"},'You can swap in a different server app container instead of the demo server, or you could change the Docker network to "host" and share something running on the Docker host\'s localhost interface.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the file ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Replace the following line:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"command: share public --headless http://zrok-test:9090\n")),(0,a.kt)("p",{parentName:"li"},"Replace that line with this to start sharing the HTTPBin server app container instead of the zrok test endpoint."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"command: share public --headless http://httpbin-test:8080\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Re-run your project to load the new server configuration."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up --force-recreate\n")),(0,a.kt)("p",{parentName:"li"},"Now you'll have a new public share URL for the ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin")," API testing server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Run "down" to destroy the Compose project when you\'re done. Then delete the selected zrok environment by clicking "Actions" in the web console.'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down --remove-orphans --volumes\n")))))}u.isMDXComponent=!0}}]);