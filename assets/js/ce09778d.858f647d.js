"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),k=i,f=u["".concat(a,".").concat(k)]||u[k]||p[k]||o;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=k;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:i,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={},c="zrok quickstart",l={unversionedId:"v0.2_quickstart",id:"v0.2_quickstart",title:"zrok quickstart",description:"ziti quickstart",source:"@site/../docs/v0.2_quickstart.md",sourceDirName:".",slug:"/v0.2_quickstart",permalink:"/docs/v0.2_quickstart",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/v0.2_quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Account Request Process",permalink:"/docs/v0.2_account_requests"},next:{title:"Getting Started with zrok v0.3",permalink:"/docs/v0.3_getting_started/getting_started"}},a={},s=[{value:"ziti quickstart",id:"ziti-quickstart",level:2},{value:"configure frontend identity",id:"configure-frontend-identity",level:2},{value:"configure controller identity",id:"configure-controller-identity",level:2},{value:"create metrics service",id:"create-metrics-service",level:2},{value:"create service edge router policy for metrics service",id:"create-service-edge-router-policy-for-metrics-service",level:3},{value:"allow the controller to bind the metrics service",id:"allow-the-controller-to-bind-the-metrics-service",level:3},{value:"allow frontends to dial the metrics service",id:"allow-frontends-to-dial-the-metrics-service",level:3},{value:"start zrok resources",id:"start-zrok-resources",level:2},{value:"create zrok account",id:"create-zrok-account",level:2},{value:"enable zrok for your shell",id:"enable-zrok-for-your-shell",level:2},{value:"tunnel",id:"tunnel",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zrok-quickstart"},"zrok quickstart"),(0,i.kt)("h2",{id:"ziti-quickstart"},"ziti quickstart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ source /dev/stdin <<< "$(wget -qO- https://raw.githubusercontent.com/openziti/ziti/release-next/quickstart/docker/image/ziti-cli-functions.sh)"; expressInstall\n')),(0,i.kt)("h2",{id:"configure-frontend-identity"},"configure frontend identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ziti edge create identity service frontend -o ~/.zrok/identities/frontend.jwt\nNew identity proxy created with id: -zbBF8eVb-\nEnrollment expires at 2022-08-10T18:46:16.641Z\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ziti edge enroll -j ~/.zrok/identities/frontend.jwt -o ~/.zrok/identities/frontend.json\nINFO    generating 4096 bit RSA key                  \nINFO    enrolled successfully. identity file written to: proxy.json\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ziti edge create erp frontend --edge-router-roles "#all" --identity-roles "@frontend"\nNew edge router policy frontend created with id: aOxvtWIanFIAwuU51lF9SU\n')),(0,i.kt)("h2",{id:"configure-controller-identity"},"configure controller identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ziti edge create identity service ctrl -o ~/.zrok/identities/ctrl.jwt \nNew identity ctrl created with id: e8c3tQo3SR\nEnrollment expires at 2022-10-14T19:59:01.908Z\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ziti edge enroll -j ~/.zrok/identities/ctrl.jwt -o ~/.zrok/identities/ctrl.json\nINFO    generating 4096 bit RSA key                  \nINFO    enrolled successfully. identity file written to: /home/michael/.zrok/identities/ctrl.json \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ziti edge create erp ctrl --edge-router-roles "#all" --identity-roles "@ctrl"\nNew edge router policy ctrl created with id: 7OxvtWIanFIAwuU51lF9SU\n')),(0,i.kt)("h2",{id:"create-metrics-service"},"create metrics service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ziti edge create service metrics\nNew service metrics created with id: 56y5AFsKmSsIWLsmFNBeJz\n")),(0,i.kt)("h3",{id:"create-service-edge-router-policy-for-metrics-service"},"create service edge router policy for metrics service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ziti edge create serp ctrl-public --service-roles "@metrics" --edge-router-roles "#all"\n')),(0,i.kt)("h3",{id:"allow-the-controller-to-bind-the-metrics-service"},"allow the controller to bind the metrics service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ziti edge create sp ctrl-bind Bind --identity-roles "@ctrl" --service-roles "@metrics"\nNew service policy ctrl-bind created with id: 3SXgFftSgBnenjgdBENOGR\n')),(0,i.kt)("h3",{id:"allow-frontends-to-dial-the-metrics-service"},"allow frontends to dial the metrics service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ziti edge create sp ctrl-dial Dial --identity-roles "@frontend" --service-roles "@metrics"\nNew service policy ctrl-dial created with id: 6pCe9uGj8oB2JXlWb44x2u\n')),(0,i.kt)("h2",{id:"start-zrok-resources"},"start zrok resources"),(0,i.kt)("p",null,"adjust ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl.yml")," (or create a copy for your environment)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ zrok ctrl etc/ctrl.yml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ zrok proxy ~/.zrok/proxy.json\n")),(0,i.kt)("h2",{id:"create-zrok-account"},"create zrok account"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ zrok create account \nNew Username: michael@quigley.com\nNew Password: \nConfirm Password: \n[   3.122]    INFO main.glob..func1: api token: 9ae56d39a6e96d65a45518b5ea1637a0677581a33ba44bbc3c103f6351ec478fb8185e97a993382ed2daa26720d40b052824dbce5ef38874c82893f33e445b06\n")),(0,i.kt)("h2",{id:"enable-zrok-for-your-shell"},"enable zrok for your shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ zrok enable 9ae56d39a6e96d65a45518b5ea1637a0677581a33ba44bbc3c103f6351ec478fb8185e97a993382ed2daa26720d40b052824dbce5ef38874c82893f33e445b06\n[   0.691]    INFO main.enable: enabled, identity = 'ARjEc8eVA-'\n")),(0,i.kt)("h2",{id:"tunnel"},"tunnel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ zrok http <endpoint>\n")))}u.isMDXComponent=!0}}]);