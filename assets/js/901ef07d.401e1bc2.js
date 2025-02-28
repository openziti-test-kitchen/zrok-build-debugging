"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9033],{8628:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"guides/self-hosting/metrics-and-limits/configuring-metrics","title":"Configuring Metrics","description":"A fully configured, production-scale zrok service instance looks like this:","source":"@site/versioned_docs/version-0.4/guides/self-hosting/metrics-and-limits/configuring-metrics.md","sourceDirName":"guides/self-hosting/metrics-and-limits","slug":"/guides/self-hosting/metrics-and-limits/configuring-metrics","permalink":"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/versioned_docs/version-0.4/guides/self-hosting/metrics-and-limits/configuring-metrics.md","tags":[],"version":"0.4","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"tutorialSidebar","previous":{"title":"Metrics and Limits","permalink":"/docs/category/metrics-and-limits"},"next":{"title":"Configuring Limits","permalink":"/docs/guides/self-hosting/metrics-and-limits/configuring-limits"}}');var r=i(4848),o=i(8453);const s={sidebar_position:20},c="Configuring Metrics",l={},a=[{value:"Configuring the OpenZiti Controller",id:"configuring-the-openziti-controller",level:2},{value:"Configuring the zrok Metrics Bridge",id:"configuring-the-zrok-metrics-bridge",level:2},{value:"RabbitMQ",id:"rabbitmq",level:3},{value:"Configuring zrok Metrics",id:"configuring-zrok-metrics",level:2},{value:"Testing Metrics",id:"testing-metrics",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configuring-metrics",children:"Configuring Metrics"})}),"\n",(0,r.jsxs)(n.p,{children:["A fully configured, production-scale ",(0,r.jsx)(n.code,{children:"zrok"})," service instance looks like this:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"zrok Metrics Architecture",src:i(3907).A+"",width:"381",height:"492"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"zrok"})," metrics builds on top of the ",(0,r.jsx)(n.code,{children:"fabric.usage"})," event type from OpenZiti. The OpenZiti controller has a number of way to emit events. The ",(0,r.jsx)(n.code,{children:"zrok"})," controller has several ways to consume ",(0,r.jsx)(n.code,{children:"fabric.usage"})," events. Smaller installations could be configured in these ways:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"zrok simplified metrics architecture",src:i(9620).A+"",width:"522",height:"322"})}),"\n",(0,r.jsxs)(n.p,{children:["Environments that horizontally scale the ",(0,r.jsx)(n.code,{children:"zrok"}),' control plane with multiple controllers should use an AMQP-based queue to "fan out" the metrics workload across the entire control plane. Simpler installations that use a single ',(0,r.jsx)(n.code,{children:"zrok"})," controller can collect ",(0,r.jsx)(n.code,{children:"fabric.usage"}),' events from the OpenZiti controller by "tailing" the events log file, or collecting them from the OpenZiti controller\'s websocket implementation.']}),"\n",(0,r.jsx)(n.h2,{id:"configuring-the-openziti-controller",children:"Configuring the OpenZiti Controller"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This requires a version of OpenZiti with a ",(0,r.jsx)(n.code,{children:"fabric"})," dependency of ",(0,r.jsx)(n.code,{children:"v0.22.52"})," or newer, which is satisfed by the ",(0,r.jsx)(n.code,{children:"v0.27.6"})," release of OpenZiti Controller."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Emitting ",(0,r.jsx)(n.code,{children:"fabric.usage"})," events to a file is currently the most reliable mechanism to capture usage events into ",(0,r.jsx)(n.code,{children:"zrok"}),". We're going to configure the OpenZiti controller to append ",(0,r.jsx)(n.code,{children:"fabric.usage"})," events to a file, by adding this stanza to the OpenZiti controller configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"events:\n  jsonLogger:\n    subscriptions:\n      - type: fabric.usage\n        version: 3\n    handler:\n      type: file\n      format: json\n      path: /tmp/fabric-usage.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You'll want to adjust the ",(0,r.jsx)(n.code,{children:"events/jsonLogger/handler/path"})," to wherever you would like to send these events for ingestion into ",(0,r.jsx)(n.code,{children:"zrok"}),". There are additional OpenZiti options that control file rotation. Be sure to consult the OpenZiti docs to tune these settings to be appropriate for your environment."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the OpenZiti events infrastructure reports and batches events in 1 minute buckets. 1 minute is too large of an interval to provide a snappy ",(0,r.jsx)(n.code,{children:"zrok"})," metrics experience. So, let's increase the frequency to every 5 seconds. Add this to the ",(0,r.jsx)(n.code,{children:"network"})," stanza of your OpenZiti controller's configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"network:\n  intervalAgeThreshold: 5s \n  metricsReportInterval: 5s\n"})}),"\n",(0,r.jsx)(n.p,{children:"And you'll want to add this stanza to the tail-end of the router configuration for every router on your OpenZiti network:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"metrics:\n  reportInterval: 5s\n  intervalAgeThreshold: 5s\n"})}),"\n",(0,r.jsx)(n.p,{children:"Be sure to restart all of the components of your OpenZiti network after making these configuration changes."}),"\n",(0,r.jsx)(n.h2,{id:"configuring-the-zrok-metrics-bridge",children:"Configuring the zrok Metrics Bridge"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"zrok"}),' currently uses a "metrics bridge" component (running as a separate process) to consume the ',(0,r.jsx)(n.code,{children:"fabric.usage"})," events from the OpenZiti controller, and publish them onto an AMQP queue. Add a stanza like the following to your ",(0,r.jsx)(n.code,{children:"zrok"})," controller configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"bridge:\n  source:\n    type:           fileSource\n    path:           /tmp/fabric-usage.json\n  sink:\n    type:           amqpSink\n    url:            amqp://guest:guest@localhost:5672\n    queue_name:     events\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This configuration consumes the ",(0,r.jsx)(n.code,{children:"fabric.usage"})," events from the file we previously specified in our OpenZiti controller configuration, and publishes them onto an AMQP queue."]}),"\n",(0,r.jsx)(n.h3,{id:"rabbitmq",children:"RabbitMQ"}),"\n",(0,r.jsxs)(n.p,{children:["For this example, we're going to use RabbitMQ as our AMQP implementation. The stock, default RabbitMQ configuration, launched as a ",(0,r.jsx)(n.code,{children:"docker"})," container will work just fine:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.11-management\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once RabbitMQ is running, you can start the ",(0,r.jsx)(n.code,{children:"zrok"})," metrics bridge by pointing it at your ",(0,r.jsx)(n.code,{children:"zrok"})," controller configuration, like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ zrok ctrl metrics bridge <path/to/zrok-controller.yaml>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuring-zrok-metrics",children:"Configuring zrok Metrics"}),"\n",(0,r.jsxs)(n.p,{children:["Configure the ",(0,r.jsx)(n.code,{children:"metrics"})," section of your ",(0,r.jsx)(n.code,{children:"zrok"})," controller. Here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'metrics:\n  agent:\n    source:\n      type:         amqpSource\n      url:          amqp://guest:guest@localhost:5672\n      queue_name:   events\n  influx:\n    url:            "http://127.0.0.1:8086"\n    bucket:         zrok  # the bucket and org must be\n    org:            zrok  # created in advance in InfluxDB\n    token:          "<secret token>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This configures the ",(0,r.jsx)(n.code,{children:"zrok"})," controller to consume usage events from the AMQP queue, and configures the InfluxDB metrics store. The InfluxDB organization and bucket must be created in advance. The ",(0,r.jsx)(n.code,{children:"zrok"})," controller will not create these for you."]}),"\n",(0,r.jsx)(n.h2,{id:"testing-metrics",children:"Testing Metrics"}),"\n",(0,r.jsxs)(n.p,{children:["With all of the components configured and running, either use ",(0,r.jsx)(n.code,{children:"zrok test loop"})," or manually create share(s) to generate traffic on the ",(0,r.jsx)(n.code,{children:"zrok"})," instance. If everything is working correctly, you should see log messages from the controller like the following, which indicate that that the controller is processing OpenZiti usage events, and generating ",(0,r.jsx)(n.code,{children:"zrok"})," metrics:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[5339.658]    INFO zrok/controller/metrics.(*influxWriter).Handle: share: 736z80mr4syu, circuit: Ad1V-6y48 backend {rx: 4.5 kB, tx: 4.6 kB} frontend {rx: 4.6 kB, tx: 4.5 kB}\n[5349.652]    INFO zrok/controller/metrics.(*influxWriter).Handle: share: 736z80mr4syu, circuit: Ad1V-6y48 backend {rx: 2.5 kB, tx: 2.6 kB} frontend {rx: 2.6 kB, tx: 2.5 kB}\n[5354.657]    INFO zrok/controller/metrics.(*influxWriter).Handle: share: 5a4u7lqxb7pa, circuit: iG1--6H4S backend {rx: 13.2 kB, tx: 13.3 kB} frontend {rx: 13.3 kB, tx: 13.2 kB}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"zrok"})," web console should also be showing activity for your share(s) like the following:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"zrok web console activity",src:i(2472).A+"",width:"1920",height:"1230"})}),"\n",(0,r.jsxs)(n.p,{children:["With metrics configured, you might be interested in ",(0,r.jsx)(n.a,{href:"/docs/guides/self-hosting/metrics-and-limits/configuring-limits",children:"configuring limits"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9620:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/metrics-architecture-simple-15902678f75b6a41fc6d26c1b6165d48.png"},3907:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/metrics-architecture-abc07e1548198a0d2176bbfea70521fa.png"},2472:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/zrok-console-activity-5e11ec1f9f3e58b54566c42a213e4ee5.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);