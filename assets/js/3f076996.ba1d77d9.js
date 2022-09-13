"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20175],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67994:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],u={title:"Cluster Autoscaler",weight:1},l=void 0,i={unversionedId:"pages-for-subheaders/install-cluster-autoscaler",id:"version-2.0-2.4/pages-for-subheaders/install-cluster-autoscaler",title:"Cluster Autoscaler",description:"In this section, you'll learn how to install and use the Kubernetes cluster-autoscaler on Rancher custom clusters using AWS EC2 Auto Scaling Groups.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/install-cluster-autoscaler.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/install-cluster-autoscaler",permalink:"/v2.0-v2.4/pages-for-subheaders/install-cluster-autoscaler",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/install-cluster-autoscaler.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Cluster Autoscaler",weight:1},sidebar:"tutorialSidebar",previous:{title:"Restoring a Cluster from Backup",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd"},next:{title:"Cluster Autoscaler with AWS EC2 Auto Scaling Groups",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups"}},c={},p=[{value:"Setting up Cluster Autoscaler on Amazon Cloud Provider",id:"setting-up-cluster-autoscaler-on-amazon-cloud-provider",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this section, you'll learn how to install and use the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/"},"Kubernetes cluster-autoscaler")," on Rancher custom clusters using AWS EC2 Auto Scaling Groups."),(0,s.kt)("p",null,"The cluster autoscaler is a tool that automatically adjusts the size of the Kubernetes cluster when one of the following conditions is true:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There are pods that failed to run in the cluster due to insufficient resources."),(0,s.kt)("li",{parentName:"ul"},"There are nodes in the cluster that have been underutilized for an extended period of time and their pods can be placed on other existing nodes.")),(0,s.kt)("p",null,"To prevent your pod from being evicted, set a ",(0,s.kt)("inlineCode",{parentName:"p"},"priorityClassName: system-cluster-critical")," property on your pod spec."),(0,s.kt)("p",null,"Cluster Autoscaler is designed to run on Kubernetes master nodes. It can run in the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. Cluster Autoscaler doesn't scale down nodes with non-mirrored ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system")," pods running on them."),(0,s.kt)("p",null,"It's possible to run a customized deployment of Cluster Autoscaler on worker nodes, but extra care needs to be taken to ensure that Cluster Autoscaler remains up and running."),(0,s.kt)("h1",{id:"cloud-providers"},"Cloud Providers"),(0,s.kt)("p",null,"Cluster Autoscaler provides support to distinct cloud providers. For more information, go to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler#deployment"},"cluster-autoscaler supported cloud providers.")),(0,s.kt)("h3",{id:"setting-up-cluster-autoscaler-on-amazon-cloud-provider"},"Setting up Cluster Autoscaler on Amazon Cloud Provider"),(0,s.kt)("p",null,"For details on running the cluster autoscaler  on Amazon cloud provider, refer to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups"},"this page.")))}f.isMDXComponent=!0}}]);