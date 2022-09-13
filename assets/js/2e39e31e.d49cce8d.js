"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96034],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61665:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Tools for Logging, Monitoring, and More",weight:2033,aliases:["/rancher/v2.0-v2.4/en/toolcluster-admin/tools/notifiers-and-alerts/"]},l=void 0,c={unversionedId:"reference-guides/rancher-cluster-tools",id:"version-2.0-2.4/reference-guides/rancher-cluster-tools",title:"Tools for Logging, Monitoring, and More",description:"Rancher contains a variety of tools that aren't included in Kubernetes to assist in your DevOps operations. Rancher can integrate with external services to help your clusters run more efficiently.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/rancher-cluster-tools.md",sourceDirName:"reference-guides",slug:"/reference-guides/rancher-cluster-tools",permalink:"/v2.0-v2.4/reference-guides/rancher-cluster-tools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/rancher-cluster-tools.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Tools for Logging, Monitoring, and More",weight:2033,aliases:["/rancher/v2.0-v2.4/en/toolcluster-admin/tools/notifiers-and-alerts/"]},sidebar:"tutorialSidebar",previous:{title:"API Tokens",permalink:"/v2.0-v2.4/reference-guides/about-the-api/api-tokens"},next:{title:"Tools for Logging, Monitoring, and More",permalink:"/v2.0-v2.4/pages-for-subheaders/project-tools"}},u={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher contains a variety of tools that aren't included in Kubernetes to assist in your DevOps operations. Rancher can integrate with external services to help your clusters run more efficiently."),(0,a.kt)("h1",{id:"logging"},"Logging"),(0,a.kt)("p",null,"Logging is helpful because it allows you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Capture and analyze the state of your cluster"),(0,a.kt)("li",{parentName:"ul"},"Look for trends in your environment"),(0,a.kt)("li",{parentName:"ul"},"Save your logs to a safe location outside of your cluster"),(0,a.kt)("li",{parentName:"ul"},"Stay informed of events like a container crashing, a pod eviction, or a node dying"),(0,a.kt)("li",{parentName:"ul"},"More easily debugg and troubleshoot problems")),(0,a.kt)("p",null,"Rancher can integrate with Elasticsearch, splunk, kafka, syslog, and fluentd."),(0,a.kt)("p",null,"Refer to the logging documentation ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-logging"},"here.")),(0,a.kt)("h1",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),", a leading open-source monitoring solution."),(0,a.kt)("p",null,"For details, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"Monitoring.")),(0,a.kt)("h1",{id:"alerts"},"Alerts"),(0,a.kt)("p",null,"After monitoring is enabled, you can set up alerts and notifiers that provide the mechanism to receive them."),(0,a.kt)("p",null,"Alerts are rules that trigger notifications. Before you can receive alerts, you must configure one or more notifier in Rancher. The scope for alerts can be set at either the cluster or project level."),(0,a.kt)("p",null,"For details, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-alerts"},"Alerts.")),(0,a.kt)("h1",{id:"notifiers"},"Notifiers"),(0,a.kt)("p",null,"Notifiers are services that inform you of alert events. You can configure notifiers to send alert notifications to staff best suited to take corrective action. Notifications can be sent with Slack, email, PagerDuty, WeChat, and webhooks."),(0,a.kt)("p",null,"For details, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"Notifiers.")),(0,a.kt)("h1",{id:"istio"},"Istio"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.3")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https:cluster-admin/tools/istio.io/"},"Istio")," is an open-source tool that makes it easier for DevOps teams to observe, control, troubleshoot, and secure the traffic within a complex network of microservices."),(0,a.kt)("p",null,"Refer to the Istio documentation ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/istio"},"here.")),(0,a.kt)("h1",{id:"opa-gatekeeper"},"OPA Gatekeeper"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper"},"OPA Gatekeeper")," is an open-source project that provides integration between OPA and Kubernetes to provide policy control via admission controller webhooks. For details on how to enable Gatekeeper in Rancher, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/opa-gatekeeper"},"OPA Gatekeeper section.")),(0,a.kt)("h1",{id:"cis-scans"},"CIS Scans"),(0,a.kt)("p",null,"Rancher can run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark."),(0,a.kt)("p",null,"Refer to the CIS scan documentation ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cis-scans"},"here.")))}d.isMDXComponent=!0}}]);