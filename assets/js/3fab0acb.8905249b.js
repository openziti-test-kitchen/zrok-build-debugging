"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[351],{3822:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"myzrok/custom-domains/index","title":"Custom Domains","description":"Overview","source":"@site/versioned_docs/version-0.4/myzrok/custom-domains/index.mdx","sourceDirName":"myzrok/custom-domains","slug":"/myzrok/custom-domains/","permalink":"/docs/myzrok/custom-domains/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/versioned_docs/version-0.4/myzrok/custom-domains/index.mdx","tags":[],"version":"0.4","frontMatter":{"title":"Custom Domains"},"sidebar":"tutorialSidebar","previous":{"title":"myzrok","permalink":"/docs/category/myzrok"}}');var r=n(4848),i=n(8453);const s={title:"Custom Domains"},a=void 0,d={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create Your Custom Domain",id:"create-your-custom-domain",level:3},{value:"Creating DNS Records",id:"creating-dns-records",level:3},{value:"Finalizing Your Custom Domain",id:"finalizing-your-custom-domain",level:3},{value:"Start Sharing!",id:"start-sharing",level:3}];function h(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://myzrok.io",children:"myzrok.io"})," is a hosted zrok-as-a-service offering that provides a way for you bring a custom DNS name for zrok shares.\nFor example, let's say you own the domain ",(0,r.jsx)(o.code,{children:"foo.example.io"}),", you can leverage zrok custom domains to\ncreate ephemeral shares such as: ",(0,r.jsx)(o.code,{children:"https://vw8jbg4ijz5g.foo.example.io"}),"\nor ",(0,r.jsx)(o.a,{href:"/docs/concepts/sharing-reserved",children:"reserved shares"})," such as ",(0,r.jsx)(o.code,{children:"https://myshare.foo.example.io"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Custom domains require a Pro subscription with ",(0,r.jsx)(o.a,{href:"https://myzrok.io",children:"myzrok.io"}),".\nIf you don't already have an account, you can sign up for one ",(0,r.jsx)(o.a,{href:"https://myzrok.io",children:"here"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://myzrok.io",children:"myzrok.io"})," provides a guided setup with just a few easy steps!"]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Bring your own custom domain name"}),"\n",(0,r.jsx)(o.li,{children:"Create DNS records for certificate validation and traffic routing"}),"\n",(0,r.jsx)(o.li,{children:"Wait for zrok to validate your records and finalize configuration"}),"\n",(0,r.jsx)(o.li,{children:"Start sharing!"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Detailed setup instructions are documented below."}),"\n",(0,r.jsx)(o.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["In order to create a custom domain in zrok, ",(0,r.jsx)(o.strong,{children:"you must already own the domain you want to use."})]})}),"\n",(0,r.jsx)(o.p,{children:"During the setup process you will need to create DNS records to validate ownership and to allow a certificate to be issued\non behalf of your domain. Once you have your domain registered, you can begin the process of setting up your custom\ndomain with zrok."}),"\n",(0,r.jsx)(o.h3,{id:"create-your-custom-domain",children:"Create Your Custom Domain"}),"\n",(0,r.jsx)(o.p,{children:"Log into the myzrok console and access the domains page by clicking on the globe icon in the left navigation menu."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"myzrok_domains_page",src:n(564).A+"",width:"1022",height:"581"})}),"\n",(0,r.jsx)(o.p,{children:"Click the CREATE button on the top right of the page to get started.\nWhen you click the create button you\u2019ll be presented with a form to allow you to enable your custom domain.\nEnter your domain into the form field and click CREATE. This will begin the process for setting up your custom domain.\nA new managed TLS certificate will be created to host traffic on your domain's behalf."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"myzrok_add_domain",src:n(8907).A+"",width:"844",height:"344"})}),"\n",(0,r.jsxs)(o.p,{children:["This may take a few minutes.\nYou may close the form at this time and come back when your domain is ",(0,r.jsx)(o.em,{children:"pending validation."}),"\nOnce your certificate is ready, you\u2019ll be presented with instructions on how to set up your DNS records."]}),"\n",(0,r.jsx)(o.h3,{id:"creating-dns-records",children:"Creating DNS Records"}),"\n",(0,r.jsx)(o.p,{children:"zrok will host and manage a TLS certificate for the custom domain on your behalf.\nThis process requires a DNS validation record to be created in order to prove ownership of the domain.\nFollow the prompts in the UI to create a CNAME DNS record with the name and value specified in the UI."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"myzrok_add_cname",src:n(4905).A+"",width:"847",height:"402"})}),"\n",(0,r.jsx)(o.p,{children:"Next, create an A record to direct all DNS requests for your domain to a set of static IPs that are hosted by zrok."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"myzrok_add_a_record",src:n(9852).A+"",width:"830",height:"527"})}),"\n",(0,r.jsx)(o.p,{children:"After you\u2019ve created your records, you can verify that they are configured properly using the instructions provided in the form."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"myzrok_verify_dns",src:n(6128).A+"",width:"829",height:"528"})}),"\n",(0,r.jsxs)(o.p,{children:["If the ",(0,r.jsx)(o.code,{children:"nslookup"})," command returns the IP addresses supplied for the A-record entry, then DNS for your domain is resolving properly."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"nslookup test.foo.example.io\nServer:\t\t192.168.86.194\nAddress:\t192.168.86.194#53\n\nNon-authoritative answer:\nName:\ttest.foo.example.io\nAddress: 99.83.220.186\nName:\ttest.foo.example.io\nAddress: 52.223.6.108\n"})}),"\n",(0,r.jsx)(o.p,{children:"Once you have created your DNS records, it will take zrok a few minutes to validate that they exist.\nYou can safely close the form until your certificate has been issued."}),"\n",(0,r.jsx)(o.h3,{id:"finalizing-your-custom-domain",children:"Finalizing Your Custom Domain"}),"\n",(0,r.jsx)(o.p,{children:"After your records have been validated and your certificate has been issued, click the FINALIZE button within 72 hours to complete your custom domain setup."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"myzrok_finalize",src:n(837).A+"",width:"818",height:"224"})}),"\n",(0,r.jsx)(o.p,{children:"From here, myzrok.io will complete the last few steps of creating your custom domain.\nThis should only take a minute, but if you need to close the form you can find the instructions on how to share your frontend when you return."}),"\n",(0,r.jsx)(o.h3,{id:"start-sharing",children:"Start Sharing!"}),"\n",(0,r.jsx)(o.p,{children:"Once the Finalize stage has completed, you can start sharing with your custom DNS."}),"\n",(0,r.jsxs)(o.p,{children:["In order to create shares that utilize your custom DNS, you will need to specify the ",(0,r.jsx)(o.code,{children:"--frontend"})," flag when creating a share,\nor update your environment configuration to use this new frontend by default."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"zrok share public --frontend foo-example--goPIhgtJtz\n"})}),"\n",(0,r.jsx)(o.p,{children:"You can set the custom frontend as the environment default by running:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"zrok config set defaultFrontend foo-example--goPIhgtJtz\n"})}),"\n",(0,r.jsxs)(o.p,{children:["To validate which frontend is being used, use the ",(0,r.jsx)(o.code,{children:"zrok status"})," command, which will identify the default frontend being used:"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"zrok_status",src:n(2911).A+"",width:"404",height:"220"})})]})}function l(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9852:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/myzrok_add_a_record-550b91f870f6e1df4903220bfa78ae25.png"},4905:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/myzrok_add_cname-3cbbf4526443142174bab2d22224764a.png"},8907:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/myzrok_add_domain-bcf860ac29b46cfe5981db391bcbc521.png"},564:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/myzrok_domains_page-6d92a9076e1bca9640eb301eb6716e5f.png"},837:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/myzrok_finalize-71899efbaf429d9be596363607550730.png"},6128:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/myzrok_verify_dns-2f721e1a96f56f4f09f3b0b16ea8c1c5.png"},2911:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/zrok_status-0ce131c6d8bba0df50b0f2a577707f0a.png"},8453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>a});var t=n(6540);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);