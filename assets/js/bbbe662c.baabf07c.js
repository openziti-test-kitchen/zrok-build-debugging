"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4196],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(t),d=o,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||n;return t?a.createElement(u,i(i({ref:r},c),{},{components:t})):a.createElement(u,i({ref:r},c))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[h]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1723:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const n={sidebar_position:20,sidebar_label:"Private Share"},i="Docker Private Share",p={unversionedId:"guides/docker-share/docker_private_share_guide",id:"guides/docker-share/docker_private_share_guide",title:"Docker Private Share",description:"With zrok, you can privately share a server app that's running in Docker, or any server that's reachable by the zrok container. Then, a zrok private access running somewhere else can use the private share. In this guide we'll cover both sides: the private share and the private access.",source:"@site/../docs/guides/docker-share/docker_private_share_guide.md",sourceDirName:"guides/docker-share",slug:"/guides/docker-share/docker_private_share_guide",permalink:"/docs/guides/docker-share/docker_private_share_guide",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/docker-share/docker_private_share_guide.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Private Share"},sidebar:"tutorialSidebar",previous:{title:"Public Share",permalink:"/docs/guides/docker-share/docker_public_share_guide"},next:{title:"Downloads",permalink:"/docs/downloads"}},s={},l=[{value:"Walkthrough Video",id:"walkthrough-video",level:2},{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Private Share with Docker Compose",id:"private-share-with-docker-compose",level:2},{value:"Private Access with Docker Compose",id:"private-access-with-docker-compose",level:2},{value:"Going Further with Private Access",id:"going-further-with-private-access",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2}],c={toc:l};function h(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-private-share"},"Docker Private Share"),(0,o.kt)("p",null,"With zrok, you can privately share a server app that's running in Docker, or any server that's reachable by the zrok container. Then, a zrok private access running somewhere else can use the private share. In this guide we'll cover both sides: the private share and the private access."),(0,o.kt)("h2",{id:"walkthrough-video"},"Walkthrough Video"),(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/HxyvtFAvwUE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,o.kt)("p",null,"To follow this guide you will need ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"the Docker Compose plugin")," for running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose")," commands in your terminal."),(0,o.kt)("p",null,"If you have installed Docker Desktop on macOS or Windows then you are all set."),(0,o.kt)("h2",{id:"private-share-with-docker-compose"},"Private Share with Docker Compose"),(0,o.kt)("p",null,"First, let's create the private share."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a folder on your computer to use as a Docker Compose project for your zrok private share.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your terminal, change directory to your newly-created project folder.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download ",(0,o.kt)("a",{parentName:"p",href:"pathname:///zrok-private-share/docker-compose.yml"},"the zrok-private-share Docker Compose project file")," into your new project folder and make sure it's named ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your zrok environment token from the zrok web console to your clipboard and paste it in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," in the same folder like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are self-hosting zrok then it's important to set your API endpoint URL too. If you're using the hosted zrok service then you can skip this step."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# file name ".env"\nZROK_API_ENDPOINT="https://zrok.example.com"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run your Compose project to start sharing the built-in demo web server:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Read the private share token from the output. One of the last lines is like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zrok-private-share-1  | zrok access private wr3hpf2z5fiy\n")),(0,o.kt)("p",{parentName:"li"},"Keep track of this token so you can use it in your zrok private access project."))),(0,o.kt)("h2",{id:"private-access-with-docker-compose"},"Private Access with Docker Compose"),(0,o.kt)("p",null,"Now that we have a private share we can access it with zrok running in Docker. Next, let's access the demo web server in a web browser."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a folder on your computer to use as a Docker Compose project for your zrok private access.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your terminal, change directory to your newly-created project folder.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download ",(0,o.kt)("a",{parentName:"p",href:"pathname:///zrok-private-access/docker-compose.yml"},"the zrok-private-access Docker Compose project file")," into your new project folder and make sure it's named ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your zrok environment token from the zrok web console to your clipboard and paste it in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," in the same folder like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now copy the zrok private access token from the zrok private share project's output to your clipboard and paste it in the same file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," here in your private share project folder like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\nZROK_ACCESS_TOKEN="wr3hpf2z5fiy"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run your Compose project to start accessing the private share:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up zrok-private-access\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now your zrok private access proxy is ready on ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:9191"},"http://127.0.0.1:9191"),". You can visit the demo web server in your browser."))),(0,o.kt)("h2",{id:"going-further-with-private-access"},"Going Further with Private Access"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try changing the demo web server used in the private share project. One alternative demo server is provided: ",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try accessing the private share from ",(0,o.kt)("em",{parentName:"p"},"inside")," a container running in the private access project. One demo client is provided: ",(0,o.kt)("inlineCode",{parentName:"p"},"demo-client"),". You can run it like this."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up demo-client\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You'll see in the terminal output that the demo-client container is getting a response from the private share indicating the source IP of the request from the perspective of the demo server: ",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin")," that's running in the private share project."))),(0,o.kt)("h2",{id:"cleaning-up"},"Cleaning Up"),(0,o.kt)("p",null,'Run the "down" command in both Compose projects to destroy them when you\'re all done. This will stop the running containers and delete zrok environments\' storage volumes. Then delete the selected zrok environment by clicking "Actions" in the web console.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down --remove-orphans --volumes\n")))}h.isMDXComponent=!0}}]);