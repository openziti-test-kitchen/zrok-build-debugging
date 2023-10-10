"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>s});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},k=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=i,s=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(s,a(a({ref:t},k),{},{components:r})):n.createElement(s,a({ref:t},k))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},a=void 0,l={unversionedId:"network/prod/zrok.io-network-skeleton",id:"network/prod/zrok.io-network-skeleton",title:"zrok.io-network-skeleton",description:"* create root ca",source:"@site/../docs/network/prod/zrok.io-network-skeleton.md",sourceDirName:"network/prod",slug:"/network/prod/zrok.io-network-skeleton",permalink:"/docs/network/prod/zrok.io-network-skeleton",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/network/prod/zrok.io-network-skeleton.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Downloads",permalink:"/docs/downloads"},next:{title:"zrok v0.1.x",permalink:"/docs/v0.1_overview"}},p={},c=[],k={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"create root ca"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"pki_create_ca"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ ziti pki create ca --pki-root=/home/ubuntu/local/etc/zrok.io/pki --ca-file=root-ca --ca-name="zrok.io Root CA"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"signing root ca"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"pki_create_ca"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ ziti pki create ca --pki-root=/home/ubuntu/local/etc/zrok.io/pki --ca-file=signing-root-ca --ca-name="zrok.io Signing Root CA"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"intermediate"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"pki_create_intermediate"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ ziti pki create intermediate --pki-root=/home/ubuntu/local/etc/zrok.io/pki --ca-name=root-ca --intermediate-name="zrok.io Intermediate" --intermediate-file=intermediate --max-path-len=1\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"signing intermediate"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"pki_create_intermediate"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ ziti pki create intermediate --pki-root=/home/ubuntu/local/etc/zrok.io/pki --ca-name=intermediate --intermediate-name="zrok.io Signing Intermediate" --intermediate-file=signing-intermediate --max-path-len=1\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"create controller client/server certs:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"pki_client_server"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ ziti pki create server --pki-root=/home/ubuntu/local/etc/zrok.io/pki --ca-name=intermediate --server-file=ctrl-server --dns="ziti.dev.zrok.io,localhost" --ip="0.0.0.0,10.0.0.41,127.0.01" --server-name="zrok.io controller server"\n$ ziti pki create client --pki-root=/home/ubuntu/local/etc/zrok.io/pki --ca-name=intermediate --client-file=ctrl-client --key-file=ctrl-server --client-name="zrok.io controller client"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"create edge router client/server certs:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"pki_client_server"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ ziti pki create server --pki-root=/home/ubuntu/local/etc/zrok.io/pki --ca-name=intermediate --server-file=router0-server --dns="ziti.dev.zrok.io,localhost" --ip="0.0.0.0,10.0.0.41,127.0.01" --server-name="zrok.io router0 server"\n$ ziti pki create client --pki-root=/home/ubuntu/local/etc/zrok.io/pki --ca-name=intermediate --client-file=router0-client --key-file=router0-server --client-name="zrok.io router0 client"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cas.pem"),":"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"createControllerConfig"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ cat local/etc/zrok.io/pki/intermediate/certs/ctrl-server.chain.pem > local/etc/zrok.io/pki/cas.pem\n$ cat local/etc/zrok.io/pki/intermediate/certs/signing-intermediate.cert >> local/etc/zrok.io/pki/cas.pem \n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ziti-controller edge init"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ ~/local/ziti/ziti-controller edge init local/etc/zrok.io/ziti-ctrl.yml\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"start controller")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"create and enroll edge router:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ ziti edge create edge-router router0 -o router0.jwt -t -a "public"\nNew edge router router0 created with id: ZAbNbXUL6A\nEnrollment expires at 2022-08-29T21:56:37.418Z\n\n$ ziti-router enroll local/etc/zrok.io/ziti-router0.yml --jwt router0.jwt \n[   3.561]    INFO edge/router/enroll.(*RestEnroller).Enroll: registration complete\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"configure zrok frontend identity"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ ziti edge create identity device -o ~/.zrok/proxy.jwt proxy\nNew identity proxy created with id: -zbBF8eVb-\nEnrollment expires at 2022-08-10T18:46:16.641Z\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ ziti edge enroll -j ~/.zrok/proxy.jwt -o ~/.zrok/proxy.json\nINFO    generating 4096 bit RSA key                  \nINFO    enrolled successfully. identity file written to: proxy.json\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ ziti edge create erp --edge-router-roles "#all" --identity-roles @proxy\n')))))}m.isMDXComponent=!0}}]);