"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26353],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"DigitalOcean Node Template Configuration",weight:1},l=void 0,u={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",title:"DigitalOcean Node Template Configuration",description:"Account access information is stored as a cloud credential. Cloud credentials are stored as Kubernetes secrets. Multiple node templates can use the same cloud credential. You can use an existing cloud credential or create a new one.",source:"@site/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean.md",tags:[],version:"current",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"DigitalOcean Node Template Configuration",weight:1},sidebar:"tutorialSidebar",previous:{title:"EC2 Node Template Configuration",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2"},next:{title:"Azure Node Template Configuration",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"}},s={},d=[{value:"Droplet Options",id:"droplet-options",level:3},{value:"Docker Daemon",id:"docker-daemon",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Account access information is stored as a cloud credential. Cloud credentials are stored as Kubernetes secrets. Multiple node templates can use the same cloud credential. You can use an existing cloud credential or create a new one."),(0,a.kt)("h3",{id:"droplet-options"},"Droplet Options"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Droplet Options")," provision your cluster's geographical region and specifications."),(0,a.kt)("h3",{id:"docker-daemon"},"Docker Daemon"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference"))))}f.isMDXComponent=!0}}]);