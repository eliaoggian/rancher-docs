"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57166],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=o,v=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9980:function(e,t,r){var n=r(67294),o=r(45697),a=function(e){var t=e.id;return n.createElement("div",{className:"video-responsive"},n.createElement("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/"+t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))};a.propTypes={embedId:r.n(o)().string.isRequired},t.Z=a},29161:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=r(9980),i=["components"],l={title:"Creating a vSphere Cluster",shortTitle:"vSphere",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225},p=void 0,u={unversionedId:"pages-for-subheaders/vsphere",id:"pages-for-subheaders/vsphere",title:"Creating a vSphere Cluster",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",source:"@site/docs/pages-for-subheaders/vsphere.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/vsphere",permalink:"/pages-for-subheaders/vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/vsphere.md",tags:[],version:"current",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Creating a vSphere Cluster",shortTitle:"vSphere",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225},sidebar:"tutorialSidebar",previous:{title:"Creating an Azure Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster"},next:{title:"Provisioning Kubernetes Clusters in vSphere",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"}},c={},h=[{value:"vSphere Enhancements in Rancher v2.3",id:"vsphere-enhancements-in-rancher-v23",level:2},{value:"Self-healing Node Pools",id:"self-healing-node-pools",level:3},{value:"Dynamically Populated Options for Instances and Scheduling",id:"dynamically-populated-options-for-instances-and-scheduling",level:3},{value:"More Supported Operating Systems",id:"more-supported-operating-systems",level:3},{value:"Video Walkthrough of v2.3.3 Node Template Features",id:"video-walkthrough-of-v233-node-template-features",level:3},{value:"Creating a vSphere Cluster",id:"creating-a-vsphere-cluster",level:2},{value:"Provisioning Storage",id:"provisioning-storage",level:2},{value:"Enabling the vSphere Cloud Provider",id:"enabling-the-vsphere-cloud-provider",level:2}],d={toc:h};function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By using Rancher with vSphere, you can bring cloud operations on-premises."),(0,a.kt)("p",null,"Rancher can provision nodes in vSphere and install Kubernetes on them. When creating a Kubernetes cluster in vSphere, Rancher first provisions the specified number of virtual machines by communicating with the vCenter API. Then it installs Kubernetes on top of them."),(0,a.kt)("p",null,"A vSphere cluster may consist of multiple groups of VMs with distinct properties, such as the amount of memory or the number of vCPUs. This grouping allows for fine-grained control over the sizing of nodes for each Kubernetes role."),(0,a.kt)("h2",{id:"vsphere-enhancements-in-rancher-v23"},"vSphere Enhancements in Rancher v2.3"),(0,a.kt)("p",null,"The vSphere node templates have been updated, allowing you to bring cloud operations on-premises with the following enhancements:"),(0,a.kt)("h3",{id:"self-healing-node-pools"},"Self-healing Node Pools"),(0,a.kt)("p",null,"One of the biggest advantages of provisioning vSphere nodes with Rancher is that it allows you to take advantage of Rancher's self-healing node pools, also called the ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace feature,")," in your on-premises clusters. Self-healing node pools are designed to help you replace worker nodes for stateless applications. When Rancher provisions nodes from a node template, Rancher can automatically replace unreachable nodes."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is not recommended to enable node auto-replace on a node pool of master nodes or nodes with persistent volumes attached, because VMs are treated ephemerally. When a node in a node pool loses connectivity with the cluster, its persistent volumes are destroyed, resulting in data loss for stateful applications."))),(0,a.kt)("h3",{id:"dynamically-populated-options-for-instances-and-scheduling"},"Dynamically Populated Options for Instances and Scheduling"),(0,a.kt)("p",null,"Node templates for vSphere have been updated so that when you create a node template with your vSphere credentials, the template is automatically populated with the same options for provisioning VMs that you have access to in the vSphere console."),(0,a.kt)("p",null,"For the fields to be populated, your setup needs to fulfill the ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere#prerequisites"},"prerequisites.")),(0,a.kt)("h3",{id:"more-supported-operating-systems"},"More Supported Operating Systems"),(0,a.kt)("p",null,"You can provision VMs with any operating system that supports ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-init"),". Only YAML format is supported for the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/examples.html"},"cloud config.")),(0,a.kt)("h3",{id:"video-walkthrough-of-v233-node-template-features"},"Video Walkthrough of v2.3.3 Node Template Features"),(0,a.kt)("p",null,"In this YouTube video, we demonstrate how to set up a node template with the new features designed to help you bring cloud operations to on-premises clusters."),(0,a.kt)(s.Z,{id:"dPIwg6x1AlU",mdxType:"YouTube"}),(0,a.kt)("h2",{id:"creating-a-vsphere-cluster"},"Creating a vSphere Cluster"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"},"this section,")," you'll learn how to use Rancher to install an ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in vSphere."),(0,a.kt)("h2",{id:"provisioning-storage"},"Provisioning Storage"),(0,a.kt)("p",null,"For an example of how to provision storage in vSphere using Rancher, refer to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},"this section.")," In order to dynamically provision storage in vSphere, the vSphere provider must be ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/vsphere-cloud-provider"},"enabled.")),(0,a.kt)("h2",{id:"enabling-the-vsphere-cloud-provider"},"Enabling the vSphere Cloud Provider"),(0,a.kt)("p",null,"When a cloud provider is set up in Rancher, the Rancher server can automatically provision new infrastructure for the cluster, including new nodes or persistent storage devices."),(0,a.kt)("p",null,"For details, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/vsphere-cloud-provider"},"enabling the vSphere cloud provider.")))}v.isMDXComponent=!0}}]);