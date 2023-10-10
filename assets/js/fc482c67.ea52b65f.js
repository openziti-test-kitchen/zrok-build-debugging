"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4537],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,m=p["".concat(c,".").concat(u)]||p[u]||v[u]||s;return t?n.createElement(m,o(o({ref:r},d),{},{components:t})):n.createElement(m,o({ref:r},d))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=u;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7957:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const s={},o="v0.3 Reserved Services",a={unversionedId:"v0.3_reserved_services",id:"v0.3_reserved_services",title:"v0.3 Reserved Services",description:'The v0.3 series introduces a concept of "reserving" services. The intention is that the zrok control plane will support limits on the number of reserved services (and eventually frontendinstances) that an account is allowed to utilize. Service reservations could also be time-limited, or possibly even bandwidth-limited (the reservation expires after a bandwidth threshold is crossed).',source:"@site/../docs/v0.3_reserved_services.md",sourceDirName:".",slug:"/v0.3_reserved_services",permalink:"/docs/v0.3_reserved_services",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/v0.3_reserved_services.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nginx Reverse Proxy for zrok",permalink:"/docs/v0.3_nginx_tls_guide"},next:{title:"v0.3 Self-Hosting Guide",permalink:"/docs/v0.3_self_hosting_guide"}},c={},l=[{value:"Reserved Services Example",id:"reserved-services-example",level:2}],d={toc:l};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"v03-reserved-services"},"v0.3 Reserved Services"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.3"),' series introduces a concept of "reserving" services. The intention is that the ',(0,i.kt)("inlineCode",{parentName:"p"},"zrok")," control plane will support limits on the number of reserved services (and eventually ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend"),"instances) that an account is allowed to utilize. Service reservations could also be time-limited, or possibly even bandwidth-limited (the reservation expires after a bandwidth threshold is crossed)."),(0,i.kt)("h2",{id:"reserved-services-example"},"Reserved Services Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"v0.3")," introduces the ",(0,i.kt)("inlineCode",{parentName:"p"},"zrok reserve")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ zrok reserve private http://localhost:9090\n[   0.047]    INFO main.(*reserveCommand).run: your reserved service token is 'x88xujrpk4k3'\n[   0.048]    INFO main.(*reserveCommand).run: your reserved service frontend is 'http://x88xujrpk4k3.zrok.quigley.com:8080/'\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"reserve")," command creates a service reservation that allows a service to become non-ephemeral. The service token ",(0,i.kt)("inlineCode",{parentName:"p"},"x88xujrpk4k3")," is guaranteed to exist between ",(0,i.kt)("inlineCode",{parentName:"p"},"backend")," executions."),(0,i.kt)("p",null,"Running a ",(0,i.kt)("inlineCode",{parentName:"p"},"backend")," against a service reservation is done like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ zrok share reserved x88xujrpk4k3\n[   0.005]    INFO main.(*shareReservedCommand).run: sharing target endpoint: 'http://localhost:9090'\n[   0.040]    INFO main.(*shareReservedCommand).run: use this command to access your zrok service: 'zrok access private x88xujrpk4k3'\n^C\n$ zrok share reserved x88xujrpk4k3\n[   0.007]    INFO main.(*shareReservedCommand).run: sharing target endpoint: 'http://localhost:9090'\n[   0.047]    INFO main.(*shareReservedCommand).run: use this command to access your zrok service: 'zrok access private x88xujrpk4k3'\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"share reserved")," comand starts a backend process for the service. User-facing and public-facing ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend")," instances are allowed to come and go, just as if the service were ephemeral."),(0,i.kt)("p",null,"Releasing a reserved service is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"zrok release")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ zrok release x88xujrpk4k3\n[   0.056]    INFO main.(*releaseCommand).run: reserved service 'x88xujrpk4k3' released\n")))}p.isMDXComponent=!0}}]);