"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12821],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46978:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Creating a Tencent TKE Cluster",shortTitle:"Tencent Kubernetes Engine",weight:2125},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent",title:"Creating a Tencent TKE Cluster",description:"You can use Rancher to create a cluster hosted in Tencent Kubernetes Engine (TKE). Rancher has already implemented and packaged the cluster driver for TKE, but by default, this cluster driver is inactive. In order to launch TKE clusters, you will need to enable the TKE cluster driver. After enabling the cluster driver, you can start provisioning TKE clusters.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent.md",tags:[],version:"current",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Creating a Tencent TKE Cluster",shortTitle:"Tencent Kubernetes Engine",weight:2125},sidebar:"tutorialSidebar",previous:{title:"Creating an Aliyun ACK Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba"},next:{title:"Creating a Huawei CCE Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei"}},p={},c=[{value:"Prerequisites in Tencent",id:"prerequisites-in-tencent",level:2},{value:"Prerequisite in Rancher",id:"prerequisite-in-rancher",level:2},{value:"Create a TKE Cluster",id:"create-a-tke-cluster",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use Rancher to create a cluster hosted in Tencent Kubernetes Engine (TKE). Rancher has already implemented and packaged the ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},"cluster driver")," for TKE, but by default, this cluster driver is ",(0,i.kt)("inlineCode",{parentName:"p"},"inactive"),". In order to launch TKE clusters, you will need to ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers#activating-deactivating-cluster-drivers"},"enable the TKE cluster driver"),". After enabling the cluster driver, you can start provisioning TKE clusters."),(0,i.kt)("h2",{id:"prerequisites-in-tencent"},"Prerequisites in Tencent"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deploying to TKE will incur charges."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure that the account you will be using to create the TKE cluster has the appropriate permissions by referring to the  ",(0,i.kt)("a",{parentName:"p",href:"https://intl.cloud.tencent.com/document/product/598/10600"},"Cloud Access Management")," documentation for details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.tencent.com/capi"},"Cloud API Secret ID and Secret Key"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("a",{parentName:"p",href:"https://intl.cloud.tencent.com/document/product/215/4927"},"Private Network and Subnet")," in the region that you want to deploy your Kubernetes cluster.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("a",{parentName:"p",href:"https://intl.cloud.tencent.com/document/product/213/6092"},"SSH key pair"),". This key is used to access the nodes in the Kubernetes cluster."))),(0,i.kt)("h2",{id:"prerequisite-in-rancher"},"Prerequisite in Rancher"),(0,i.kt)("p",null,"You will need to enable the Tencent TKE cluster driver:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Drivers"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Drivers")," tab, go to the ",(0,i.kt)("strong",{parentName:"li"},"Tencent TKE")," cluster driver and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Activate"),".")),(0,i.kt)("p",null,"When the cluster driver is finished downloading, you will be able to create Tencent TKE clusters in Rancher."),(0,i.kt)("h2",{id:"create-a-tke-cluster"},"Create a TKE Cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Create"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Tencent TKE"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,i.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,i.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure ",(0,i.kt)("strong",{parentName:"p"},"Account Access")," for the TKE cluster. Complete each drop-down and field using the information obtained in ",(0,i.kt)("a",{parentName:"p",href:"#prerequisites-in-tencent"},"Prerequisites"),"."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Region"),(0,i.kt)("td",{parentName:"tr",align:null},"From the drop-down chooses the geographical region in which to build your cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Secret ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter the Secret ID that you obtained from the Tencent Cloud Console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Secret Key"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter the Secret key that you obtained from Tencent Cloud Console."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next: Configure Cluster")," to set your TKE cluster configurations."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("td",{parentName:"tr",align:null},"The TKE only supports Kubernetes version 1.10.5 now.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node Count"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter the amount of worker node you want to purchase for your Kubernetes cluster, up to 100.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VPC"),(0,i.kt)("td",{parentName:"tr",align:null},"Select the VPC name that you have created in the Tencent Cloud Console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Container Network CIDR"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter the CIDR range of your Kubernetes cluster, you may check the available range of the CIDR in the VPC service of the Tencent Cloud Console. Default to 172.16.0.0/16.")))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are editing the cluster in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," instead of the Rancher UI, note that, cluster configuration directives must be nested under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". For more information, refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#config-file-structure-in-rancher"},"the config file structure in Rancher v2.3.0+."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next: Select Instance Type")," to choose the instance type that will use for your TKE cluster."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Availability Zone"),(0,i.kt)("td",{parentName:"tr",align:null},"Choose the availability zone of the VPC region.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Subnet"),(0,i.kt)("td",{parentName:"tr",align:null},"Select the Subnet that you have created within the VPC, and add a new one if you don't have it in the chosen availability zone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Instance Type"),(0,i.kt)("td",{parentName:"tr",align:null},"From the drop-down chooses the VM instance type that you want to use for the TKE cluster, default to S2.MEDIUM4 (CPU 2 Memory 4 GiB)."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next: Configure Instance")," to configure the VM instance that will use for your TKE cluster."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the operating system, currently supports Centos7.2x86_64 or ubuntu16.04.1 LTSx86_64")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Security Group"),(0,i.kt)("td",{parentName:"tr",align:null},"Security group ID, default does not bind any security groups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Root Disk Type"),(0,i.kt)("td",{parentName:"tr",align:null},"System disk type. System disk type restrictions are detailed in the ",(0,i.kt)("a",{parentName:"td",href:"https://cloud.tencent.com/document/product/213/11518"},"CVM instance configuration"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Root Disk Size"),(0,i.kt)("td",{parentName:"tr",align:null},"System disk size. Linux system adjustment range is 20 - 50G, step size is 1.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Disk Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Data disk type, default value to the SSD cloud drive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Disk Size"),(0,i.kt)("td",{parentName:"tr",align:null},"Data disk size (GB), the step size is 10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Band Width Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of bandwidth, PayByTraffic or PayByHour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Band Width"),(0,i.kt)("td",{parentName:"tr",align:null},"Public network bandwidth (Mbps)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key Pair"),(0,i.kt)("td",{parentName:"tr",align:null},"Key id, after associating the key can be used to logging to the VM node"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("p",null,"Your cluster is created and assigned a state of ",(0,i.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,i.kt)("p",null,"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"p"},"Active"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))}m.isMDXComponent=!0}}]);