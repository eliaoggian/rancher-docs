"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[28337],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68304:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),s=["components"],o={title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",weight:3063},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md",tags:[],version:"current",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Kubernetes Registry and Docker Registry",description:"Learn about the Docker registry and Kubernetes registry, their use cases and how to use a private registry with the Rancher UI",weight:3063},sidebar:"tutorialSidebar",previous:{title:"Secrets",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},next:{title:"Helm Charts in Rancher",permalink:"/pages-for-subheaders/helm-charts-in-rancher"}},p={},u=[{value:"Using the Private Registry with the Rancher UI",id:"using-the-private-registry-with-the-rancher-ui",level:3},{value:"Using the Private Registry with kubectl",id:"using-the-private-registry-with-kubectl",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Registries are Kubernetes secrets containing credentials used to authenticate with ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"private Docker registries"),". "),(0,i.kt)("p",null,'The word "registry" can mean two things, depending on whether it is used to refer to a Docker or Kubernetes registry:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"Docker registry")," contains Docker images that you can pull in order to use them in your deployment. The registry is a stateless, scalable server side application that stores and lets you distribute Docker images."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Kubernetes registry")," is an image pull secret that your deployment uses to authenticate with a Docker registry.")),(0,i.kt)("p",null,"Deployments use the Kubernetes registry secret to authenticate with a private Docker registry and then pull a Docker image hosted on it."),(0,i.kt)("p",null,"Currently, deployments pull the private registry credentials automatically only if the workload is created in the Rancher UI and not when it is created via kubectl."),(0,i.kt)("h1",{id:"creating-a-registry-in-namespaces"},"Creating a Registry in Namespaces"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/"},"private registry")," available to use."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the cluster where you want to add a registry and click ",(0,i.kt)("strong",{parentName:"p"},"Explore"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation, click either ",(0,i.kt)("strong",{parentName:"p"},"Storage > Secrets")," or ",(0,i.kt)("strong",{parentName:"p"},"More Resources > Core > Secrets"),". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Registry"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Name")," for the registry."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Kubernetes classifies secrets, certificates, and registries all as ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your registry must have a unique name among all secrets within your workspace.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a namespace for the registry.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the website that hosts your private registry. Then enter credentials that authenticate with the registry. For example, if you use DockerHub, provide your DockerHub username and password.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your secret is added to the namespace you chose."),(0,i.kt)("li",{parentName:"ul"},"You can view the secret in the Rancher UI by clicking either ",(0,i.kt)("strong",{parentName:"li"},"Storage > Secrets")," or ",(0,i.kt)("strong",{parentName:"li"},"More Resources > Core > Secrets"),". "),(0,i.kt)("li",{parentName:"ul"},"Any workload that you create in the Rancher UI will have the credentials to access the registry if the workload is within the registry's scope.")),(0,i.kt)("h1",{id:"creating-a-registry-in-projects"},"Creating a Registry in Projects"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites: ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/"},"private registry")," available to use."))),(0,i.kt)("p",null,"Before v2.6, secrets were required to be in a project scope. Projects are no longer required, and you may use the namespace scope instead. As a result, the Rancher UI was updated to reflect this new functionality. However, you may still create a project-scoped registry if desired. Use the following steps to do so:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Global Settings")," in the dropdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Feature Flags"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"legacy")," feature flag and click ",(0,i.kt)("strong",{parentName:"p"},"Activate"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the cluster where you want to add a registry and click ",(0,i.kt)("strong",{parentName:"p"},"Explore"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation, click either ",(0,i.kt)("strong",{parentName:"p"},"Storage > Secrets")," or ",(0,i.kt)("strong",{parentName:"p"},"More Resources > Core > Secrets"),". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Registry"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the top navigation bar, filter to see only one project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Name")," for the registry."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Kubernetes classifies secrets, certificates, and registries all as ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your registry must have a unique name among all secrets within your workspace.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a namespace for the registry.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the website that hosts your private registry. Then enter credentials that authenticate with the registry. For example, if you use DockerHub, provide your DockerHub username and password.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your secret is added to the individual project you chose."),(0,i.kt)("li",{parentName:"ul"},"You can view the secret in the Rancher UI by clicking either ",(0,i.kt)("strong",{parentName:"li"},"Storage > Secrets")," or ",(0,i.kt)("strong",{parentName:"li"},"More Resources > Core > Secrets"),"."),(0,i.kt)("li",{parentName:"ul"},"Any workload that you create in the Rancher UI will have the credentials to access the registry if the workload is within the registry's scope.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Project-scoped registries on the local cluster are only visible when a single project is selected."))),(0,i.kt)("h1",{id:"using-a-private-registry"},"Using a Private Registry"),(0,i.kt)("p",null,"You can deploy a workload with an image from a private registry through the Rancher UI, or with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("h3",{id:"using-the-private-registry-with-the-rancher-ui"},"Using the Private Registry with the Rancher UI"),(0,i.kt)("p",null,"To deploy a workload with an image from your private registry,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where you want to deploy a workload and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Workload"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the type of workload you want to create."),(0,i.kt)("li",{parentName:"ol"},"Enter a unique name for the workload and choose a namespace."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Container Image")," field, enter the URL of the path to the image in your private registry. For example, if your private registry is on Quay.io, you could use ",(0,i.kt)("inlineCode",{parentName:"li"},"quay.io/<Quay profile name>/<Image name>"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Your deployment should launch, authenticate using the private registry credentials you added in the Rancher UI, and pull the Docker image that you specified."),(0,i.kt)("h3",{id:"using-the-private-registry-with-kubectl"},"Using the Private Registry with kubectl"),(0,i.kt)("p",null,"When you create the workload using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", you need to configure the pod so that its YAML has the path to the image in the private registry. You also have to create and reference the registry secret because the pod only automatically gets access to the private registry credentials if it is created in the Rancher UI."),(0,i.kt)("p",null,"The secret has to be created in the same namespace where the workload gets deployed."),(0,i.kt)("p",null,"Below is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"pod.yml")," for a workload that uses an image from a private registry. In this example, the pod uses an image from Quay.io, and the .yml specifies the path to the image. The pod authenticates with the registry using credentials stored in a Kubernetes secret called ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay"),", which is specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.imagePullSecrets")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: private-reg\nspec:\n  containers:\n  - name: private-reg-container\n    image: quay.io/<Quay profile name>/<image name>\n  imagePullSecrets:\n  - name: testquay\n")),(0,i.kt)("p",null,"In this example, the secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay")," is in the default namespace."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the secret with the private registry credentials. This command creates the secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"testquay"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create secret docker-registry testquay \\\n    --docker-server=quay.io \\\n    --docker-username=<Profile name> \\\n    --docker-password=<password>\n")),(0,i.kt)("p",null,"To see how the secret is stored in Kubernetes, you can use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl get secret testquay --output="jsonpath={.data.\\.dockerconfigjson}" | base64 --decode\n')),(0,i.kt)("p",null,"The result looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"auths":{"quay.io":{"username":"<Profile name>","password":"<password>","auth":"c291bXlhbGo6dGVzdGFiYzEyMw=="}}}\n')),(0,i.kt)("p",null,"After the workload is deployed, you can check if the image was pulled successfully:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get events\n")),(0,i.kt)("p",null,"The result should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'14s         Normal    Scheduled          Pod    Successfully assigned default/private-reg2 to minikube\n11s         Normal    Pulling            Pod    pulling image "quay.io/<Profile name>/<image name>"\n10s         Normal    Pulled             Pod    Successfully pulled image "quay.io/<Profile name>/<image name>"\n')),(0,i.kt)("p",null,"For more information, refer to the Kubernetes documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-pod-that-uses-your-secret"},"creating a pod that uses your secret.")))}m.isMDXComponent=!0}}]);