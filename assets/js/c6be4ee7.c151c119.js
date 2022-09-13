"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1665],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,h=d["".concat(c,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"CLI with Rancher",weight:100},c=void 0,u={unversionedId:"getting-started/quick-start-guides/cli",id:"version-2.0-2.4/getting-started/quick-start-guides/cli",title:"CLI with Rancher",description:"Interact with Rancher using command line interface (CLI) tools from your workstation.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/cli.md",sourceDirName:"getting-started/quick-start-guides",slug:"/getting-started/quick-start-guides/cli",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/cli",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/cli.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"CLI with Rancher",weight:100},sidebar:"tutorialSidebar",previous:{title:"Rancher Deployment Quick Start Guides",permalink:"/v2.0-v2.4/pages-for-subheaders/quick-start-guides"},next:{title:"Deploying Rancher Server",permalink:"/v2.0-v2.4/pages-for-subheaders/deploy-rancher-manager"}},s={},p=[{value:"Rancher CLI",id:"rancher-cli",level:2},{value:"kubectl",id:"kubectl",level:2},{value:"Authentication with kubectl and kubeconfig Tokens with TTL",id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Interact with Rancher using command line interface (CLI) tools from your workstation."),(0,i.kt)("h2",{id:"rancher-cli"},"Rancher CLI"),(0,i.kt)("p",null,"Follow the steps in ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cli-with-rancher"},"rancher cli"),"."),(0,i.kt)("p",null,"Ensure you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher kubectl get pods")," successfully."),(0,i.kt)("h2",{id:"kubectl"},"kubectl"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," utility. See ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"install kubectl"),"."),(0,i.kt)("p",null,"Configure kubectl by visiting your cluster in the Rancher Web UI then clicking on ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubeconfig"),", copying contents and putting into your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," file."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," successfully."),(0,i.kt)("h2",{id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl"},"Authentication with kubectl and kubeconfig Tokens with TTL"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Available as of v2.4.6"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Requirements")),(0,i.kt)("p",null,"If admins have ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/about-the-api/api-tokens#setting-ttl-on-kubeconfig-tokens"},"enforced TTL on kubeconfig tokens"),", the kubeconfig file requires the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/quick-start-guides/cli"},"Rancher cli")," to be present in your PATH when you run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),". Otherwise, you\u2019ll see error like:\n",(0,i.kt)("inlineCode",{parentName:"p"},'Unable to connect to the server: getting credentials: exec: exec: "rancher": executable file not found in $PATH'),"."),(0,i.kt)("p",null,"This feature enables kubectl to authenticate with the Rancher server and get a new kubeconfig token when required. The following auth providers are currently supported:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Local"),(0,i.kt)("li",{parentName:"ol"},"Active Directory"),(0,i.kt)("li",{parentName:"ol"},"FreeIpa, OpenLdap"),(0,i.kt)("li",{parentName:"ol"},"SAML providers - Ping, Okta, ADFS, Keycloak, Shibboleth")),(0,i.kt)("p",null,"When you first run kubectl, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),", it will ask you to pick an auth provider and log in with the Rancher server.\nThe kubeconfig token is cached in the path where you run kubectl under ",(0,i.kt)("inlineCode",{parentName:"p"},"./.cache/token"),". This token is valid till ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/about-the-api/api-tokens#setting-ttl-on-kubeconfig-tokens-period"},"it expires"),", or ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/about-the-api/api-tokens#deleting-tokens"},"gets deleted from the Rancher server"),"\nUpon expiration, the next ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," will ask you to log in with the Rancher server again."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note")),(0,i.kt)("p",null,"As of CLI ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ranchquick-start-guide/cli/releases/tag/v2.4.10"},"v2.4.10"),", the kubeconfig token can be cached at a chosen path with ",(0,i.kt)("inlineCode",{parentName:"p"},"cache-dir")," flag or env var ",(0,i.kt)("inlineCode",{parentName:"p"},"RANCHER_CACHE_DIR"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Current Known Issues"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint")," is enabled for RKE clusters to ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"authenticate directly with downstream cluster")," and Rancher server goes down, all kubectl calls will fail after the kubeconfig token expires. No new kubeconfig tokens can be generated if Rancher server isn't accessible."),(0,i.kt)("li",{parentName:"ol"},"If a kubeconfig token is deleted from Rancher ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/about-the-api/api-tokens#deleting-tokens"},"API tokens")," page, and the token is still cached, cli won't ask you to login again until the token expires or is deleted.\n",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," calls will result into an error like ",(0,i.kt)("inlineCode",{parentName:"li"},"error: You must be logged in to the server (the server has asked for the client to provide credentials"),". Tokens can be deleted using ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher token delete"),".")))}k.isMDXComponent=!0}}]);