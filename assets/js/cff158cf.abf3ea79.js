"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55907],{3905:function(n,t,e){e.d(t,{Zo:function(){return p},kt:function(){return m}});var r=e(67294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var l=r.createContext({}),c=function(n){var t=r.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},p=function(n){var t=c(n.components);return r.createElement(l.Provider,{value:t},n.children)},u={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(n,t){var e=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),f=c(e),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return e?r.createElement(d,a(a({ref:t},p),{},{components:e})):r.createElement(d,a({ref:t},p))}));function m(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var o=e.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,a[1]=s;for(var c=2;c<o;c++)a[c]=e[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},41847:function(n,t,e){e.r(t),e.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=e(87462),i=e(63366),o=(e(67294),e(3905)),a=["components"],s={title:"Additional Steps for Installing Istio on an RKE2 Cluster",weight:3},l=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",id:"explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",title:"Additional Steps for Installing Istio on an RKE2 Cluster",description:"When installing or upgrading the Istio Helm chart through Apps & Marketplace,",source:"@site/docs/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",permalink:"/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",tags:[],version:"current",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Additional Steps for Installing Istio on an RKE2 Cluster",weight:3},sidebar:"tutorialSidebar",previous:{title:"Selectors and Scrape Configs",permalink:"/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},next:{title:"Additional Steps for Project Network Isolation",permalink:"/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation"}},p={},u=[],f={toc:u};function m(n){var t=n.components,e=(0,i.Z)(n,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When installing or upgrading the Istio Helm chart through ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace,")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are installing the chart, click ",(0,o.kt)("strong",{parentName:"p"},"Customize Helm options before install")," and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will see options for configuring the Istio Helm chart. On the ",(0,o.kt)("strong",{parentName:"p"},"Components")," tab, check the box next to ",(0,o.kt)("strong",{parentName:"p"},"Enabled CNI"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a custom overlay file specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"cniBinDir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cniConfDir"),". For more information on these options, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/additional-setup/cni/#helm-chart-parameters"},"Istio documentation.")," An example is below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n      k8s:\n        overlays:\n        - apiVersion: "apps/v1"\n          kind: "DaemonSet"\n          name: "istio-cni-node"\n          patches:\n          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged\n            value: true\n  values:\n    cni:\n      image: rancher/mirrored-istio-install-cni:1.9.3\n      excludeNamespaces:\n        - istio-system\n        - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Now you should be able to utilize Istio as desired, including sidecar injection and monitoring via Kiali."))}m.isMDXComponent=!0}}]);