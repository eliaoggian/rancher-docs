"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17287],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,o(o({ref:e},c),{},{components:n})):r.createElement(h,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(67294),a=n(86010),i="tabItem_Ymn6";function o(t){var e=t.children,n=t.hidden,o=t.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},e)}},65488:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(87462),a=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",m="tabItem_LNqP";function p(t){var e,n,o=t.lazy,p=t.block,d=t.defaultValue,h=t.values,g=t.groupId,f=t.className,k=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,l.l)(v,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(e=null!=d?d:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:k[0].props.value;if(null!==y&&!v.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),w=b.tabGroupChoices,T=b.setTabGroupChoices,I=(0,a.useState)(y),O=I[0],C=I[1],x=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=w[g];null!=E&&E!==O&&v.some((function(t){return t.value===E}))&&C(E)}var M=function(t){var e=t.currentTarget,n=x.indexOf(e),r=v[n].value;r!==O&&(P(e),C(r),null!=g&&T(g,String(r)))},j=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r,a=x.indexOf(t.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var i,o=x.indexOf(t.currentTarget)-1;n=null!=(i=x[o])?i:x[x.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},v.map((function(t){var e=t.value,n=t.label,o=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:function(t){return x.push(t)},onKeyDown:j,onFocus:M,onClick:M},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":O===e})}),null!=n?n:e)}))),o?(0,a.cloneElement)(k.filter((function(t){return t.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==O})}))))}function d(t){var e=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(e)},t))}},61127:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(65488),l=n(85162),s=["components"],u={title:"CPU and Memory Allocations",weight:1,aliases:["/rancher/v2.5/en/project-admin/istio/configuring-resource-allocations/","/rancher/v2.5/en/project-admin/istio/config/","/rancher/v2.5/en/istio/resources","/rancher/v2.5/en/istio/v2.5/resources","/rancher/v2.x/en/istio/v2.5/resources/"]},c=void 0,m={unversionedId:"explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",id:"version-2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",title:"CPU and Memory Allocations",description:"This section describes the minimum recommended computing resources for the Istio components in a cluster.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",permalink:"/v2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md",tags:[],version:"2.5",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"CPU and Memory Allocations",weight:1,aliases:["/rancher/v2.5/en/project-admin/istio/configuring-resource-allocations/","/rancher/v2.5/en/project-admin/istio/config/","/rancher/v2.5/en/istio/resources","/rancher/v2.5/en/istio/v2.5/resources","/rancher/v2.x/en/istio/v2.5/resources/"]},sidebar:"tutorialSidebar",previous:{title:"Istio",permalink:"/v2.5/pages-for-subheaders/istio"},next:{title:"Role-based Access Control",permalink:"/v2.5/explanations/integrations-in-rancher/istio/rbac-for-istio"}},p={},d=[{value:"Editing the Overlay File",id:"editing-the-overlay-file",level:3}],h={toc:d};function g(t){var e=t.components,n=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the minimum recommended computing resources for the Istio components in a cluster."),(0,i.kt)("p",null,"The CPU and memory allocations for each component are ",(0,i.kt)("a",{parentName:"p",href:"#configuring-resource-allocations"},"configurable.")),(0,i.kt)("p",null,"Before enabling Istio, we recommend that you confirm that your Rancher worker nodes have enough CPU and memory to run all of the components of Istio."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Tip:")," In larger deployments, it is strongly advised that the infrastructure be placed on dedicated nodes in the cluster by adding a node selector for each Istio component.")),(0,i.kt)("p",null,"The table below shows a summary of the minimum recommended resource requests and limits for the CPU and memory of each core Istio component."),(0,i.kt)("p",null,"In Kubernetes, the resource request indicates that the workload will not be deployed on a node unless the node has at least the specified amount of memory and CPU available. If the workload surpasses the limit for CPU or memory, it can be terminated or evicted from the node. For more information on managing resource limits for containers, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"Kubernetes documentation.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"v2.5.6+",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Workload"),(0,i.kt)("th",{parentName:"tr",align:null},"CPU - Request"),(0,i.kt)("th",{parentName:"tr",align:null},"Memory - Request"),(0,i.kt)("th",{parentName:"tr",align:null},"CPU - Limit"),(0,i.kt)("th",{parentName:"tr",align:null},"Memory - Limit"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ingress gateway"),(0,i.kt)("td",{parentName:"tr",align:null},"100m"),(0,i.kt)("td",{parentName:"tr",align:null},"128mi"),(0,i.kt)("td",{parentName:"tr",align:null},"2000m"),(0,i.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"egress gateway"),(0,i.kt)("td",{parentName:"tr",align:null},"100m"),(0,i.kt)("td",{parentName:"tr",align:null},"128mi"),(0,i.kt)("td",{parentName:"tr",align:null},"2000m"),(0,i.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"istiod"),(0,i.kt)("td",{parentName:"tr",align:null},"500m"),(0,i.kt)("td",{parentName:"tr",align:null},"2048mi"),(0,i.kt)("td",{parentName:"tr",align:null},"No limit"),(0,i.kt)("td",{parentName:"tr",align:null},"No limit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"proxy"),(0,i.kt)("td",{parentName:"tr",align:null},"10m"),(0,i.kt)("td",{parentName:"tr",align:null},"10mi"),(0,i.kt)("td",{parentName:"tr",align:null},"2000m"),(0,i.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Totals:")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"710m")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2314Mi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"6000m")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"3072Mi")))))),(0,i.kt)(l.Z,{value:"v2.5.0-v2.5.5",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Workload"),(0,i.kt)("th",{parentName:"tr",align:"right"},"CPU - Request"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Memory - Request"),(0,i.kt)("th",{parentName:"tr",align:"right"},"CPU - Limit"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Mem - Limit"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Configurable"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Istiod"),(0,i.kt)("td",{parentName:"tr",align:"right"},"500m"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2048Mi"),(0,i.kt)("td",{parentName:"tr",align:"right"},"No limit"),(0,i.kt)("td",{parentName:"tr",align:"right"},"No limit"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Istio-Mixer"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1000m"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1000Mi"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4800m"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4000Mi"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Istio-ingressgateway"),(0,i.kt)("td",{parentName:"tr",align:"right"},"100m"),(0,i.kt)("td",{parentName:"tr",align:"right"},"128Mi"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2000m"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1024Mi"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Others"),(0,i.kt)("td",{parentName:"tr",align:"right"},"10m"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Y")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Totals:"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1710m"),(0,i.kt)("td",{parentName:"tr",align:"right"},"3304Mi"),(0,i.kt)("td",{parentName:"tr",align:"right"},">8800m"),(0,i.kt)("td",{parentName:"tr",align:"right"},">6048Mi"),(0,i.kt)("td",{parentName:"tr",align:"right"},"-")))))),(0,i.kt)("h1",{id:"configuring-resource-allocations"},"Configuring Resource Allocations"),(0,i.kt)("p",null,"You can individually configure the resource allocation for each type of Istio component. This section includes the default resource allocations for each component."),(0,i.kt)("p",null,"To make it easier to schedule the workloads to a node, a cluster-admin can reduce the CPU and memory resource requests for the component. However, the default CPU and memory allocations are the minimum that we recommend."),(0,i.kt)("p",null,"You can find more information about Istio configuration in the ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/"},"official Istio documentation"),"."),(0,i.kt)("p",null,"To configure the resources allocated to an Istio component,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Rancher ",(0,i.kt)("strong",{parentName:"li"},"Cluster Explorer"),", navigate to your Istio installation in ",(0,i.kt)("strong",{parentName:"li"},"Apps & Marketplace")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Upgrade")," to edit the base components via changes to the values.yaml or add an ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/configuration-options#overlay-file"},"overlay file"),". For more information about editing the overlay file, see ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations#editing-the-overlay-file"},"this section.")),(0,i.kt)("li",{parentName:"ol"},"Change the CPU or memory allocations, the nodes where each component will be scheduled to, or the node tolerations."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Upgrade.")," to rollout changes")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The resource allocations for the Istio components are updated."),(0,i.kt)("h3",{id:"editing-the-overlay-file"},"Editing the Overlay File"),(0,i.kt)("p",null,"The overlay file can contain any of the values in the ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/istio.operator.v1alpha1/#IstioOperatorSpec"},"Istio Operator spec.")," The overlay file included with the Istio application is just one example of a potential configuration of the overlay file."),(0,i.kt)("p",null,"As long as the file contains ",(0,i.kt)("inlineCode",{parentName:"p"},"kind: IstioOperator")," and the YAML options are valid, the file can be used as an overlay."),(0,i.kt)("p",null,"In the example overlay file provided with the Istio application, the following section allows you to change Kubernetes resources:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#      k8s:\n#        resources:\n#          requests:\n#            cpu: 200m\n")))}g.isMDXComponent=!0}}]);