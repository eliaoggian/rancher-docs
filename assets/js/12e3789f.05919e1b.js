"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[47547],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(67294),n=a(86010),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(87462),n=a(67294),o=a(86010),l=a(72389),i=a(67392),s=a(7094),c=a(12466),p="tabList__CuJ",h="tabItem_LNqP";function u(e){var t,a,l=e.lazy,u=e.block,d=e.defaultValue,m=e.values,v=e.groupId,g=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,R=y.setTabGroupChoices,C=(0,n.useState)(b),T=C[0],H=C[1],O=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=w[v];null!=x&&x!==T&&k.some((function(e){return e.value===x}))&&H(x)}var D=function(e){var t=e.currentTarget,a=O.indexOf(t),r=k[a].value;r!==T&&(E(t),H(r),null!=v&&R(v,String(r)))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=O.indexOf(e.currentTarget)+1;a=null!=(r=O[n])?r:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;a=null!=(o=O[l])?o:O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},g)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},36113:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(65488),i=a(85162),s=["components"],c={title:"Choosing a Rancher Version",weight:1},p=void 0,h={unversionedId:"getting-started/installation-and-upgrade/resources/choose-a-rancher-version",id:"getting-started/installation-and-upgrade/resources/choose-a-rancher-version",title:"Choosing a Rancher Version",description:"This section describes how to choose a Rancher version.",source:"@site/docs/getting-started/installation-and-upgrade/resources/choose-a-rancher-version.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/choose-a-rancher-version",permalink:"/getting-started/installation-and-upgrade/resources/choose-a-rancher-version",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/choose-a-rancher-version.md",tags:[],version:"current",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Choosing a Rancher Version",weight:1},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/pages-for-subheaders/resources"},next:{title:"Helm Version Requirements",permalink:"/getting-started/installation-and-upgrade/resources/helm-version-requirements"}},u={},d=[{value:"Helm Chart Repositories",id:"helm-chart-repositories",level:3},{value:"Helm Chart Versions",id:"helm-chart-versions",level:3},{value:"Switching to a Different Helm Chart Repository",id:"switching-to-a-different-helm-chart-repository",level:3},{value:"Server Tags",id:"server-tags",level:3}],m={toc:d};function v(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to choose a Rancher version."),(0,o.kt)("p",null,"For a high-availability installation of Rancher, which is recommended for production, the Rancher server is installed using a ",(0,o.kt)("strong",{parentName:"p"},"Helm chart")," on a Kubernetes cluster. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher."),(0,o.kt)("p",null,"For Docker installations of Rancher, which is used for development and testing, you will install Rancher as a ",(0,o.kt)("strong",{parentName:"p"},"Docker image"),"."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Helm Charts",mdxType:"TabItem"},(0,o.kt)("p",null,"When installing, upgrading, or rolling back Rancher Server when it is ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"installed on a Kubernetes cluster"),", Rancher server is installed using a Helm chart on a Kubernetes cluster. Therefore, as you prepare to install or upgrade a high availability Rancher configuration, you must add a Helm chart repository that contains the charts for installing Rancher."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher."),(0,o.kt)("h3",{id:"helm-chart-repositories"},"Helm Chart Repositories"),(0,o.kt)("p",null,"Rancher provides several different Helm chart repositories to choose from. We align our latest and stable Helm chart repositories with the Docker tags that are used for a Docker installation. Therefore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-latest")," repository will contain charts for all the Rancher versions that have been tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest"),". When a Rancher version has been promoted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:stable"),", it will get added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," repository."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Command to Add the Repo"),(0,o.kt)("th",{parentName:"tr",align:null},"Description of the Repo"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-latest"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for the latest versions of Rancher. We recommend using this repo for testing out new Rancher builds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-stable"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for older, stable versions of Rancher. We recommend using this repo for production environments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rancher-alpha"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a repository of Helm charts for alpha versions of Rancher for previewing upcoming releases. These releases are discouraged in production environments. Upgrades ",(0,o.kt)("em",{parentName:"td"},"to")," or ",(0,o.kt)("em",{parentName:"td"},"from")," charts in the rancher-alpha repository to any other chart, regardless or repository, aren't supported.")))),(0,o.kt)("br",null),"Instructions on when to select these repos are available below in [Switching to a Different Helm Chart Repository](#switching-to-a-different-helm-chart-repository).",(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All charts in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," repository will correspond with any Rancher version tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),"."))),(0,o.kt)("h3",{id:"helm-chart-versions"},"Helm Chart Versions"),(0,o.kt)("p",null,"Rancher Helm chart versions match the Rancher version (i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"appVersion"),").  Once you've added the repo you can search it to show available versions with the following command:",(0,o.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"helm search repo --versions")),(0,o.kt)("p",null,"If you have several repos you can specify the repo name, ie. ",(0,o.kt)("inlineCode",{parentName:"p"},"helm search repo rancher-stable/rancher --versions")," ",(0,o.kt)("br",null),"\nFor more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_search_repo/"},"https://helm.sh/docs/helm/helm_search_repo/")),(0,o.kt)("p",null,"To fetch a specific version of your chosen repo, define the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version")," parameter like in the following example:",(0,o.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"helm fetch rancher-stable/rancher --version=2.4.8")),(0,o.kt)("h3",{id:"switching-to-a-different-helm-chart-repository"},"Switching to a Different Helm Chart Repository"),(0,o.kt)("p",null,"After installing Rancher, if you want to change which Helm chart repository to install Rancher from, you will need to follow these steps."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Because the rancher-alpha repository contains only alpha charts, switching between the rancher-alpha repository and the rancher-stable or rancher-latest repository for upgrades is not supported."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,o.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,o.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"List the current Helm chart repositories."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo list\n\nNAME                  URL\nstable                https://charts.helm.sh/stable\nrancher-<CHART_REPO>        https://releases.rancher.com/server-charts/<CHART_REPO>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove the existing Helm Chart repository that contains your charts to install Rancher, which will either be ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-stable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-latest")," depending on what you had initially added."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo remove rancher-<CHART_REPO>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the Helm chart repository that you want to start installing Rancher from."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add rancher-<CHART_REPO> https://releases.rancher.com/server-charts/<CHART_REPO>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Continue to follow the steps to ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"upgrade Rancher")," from the new Helm chart repository.")))),(0,o.kt)(i.Z,{value:"Docker Images",mdxType:"TabItem"},(0,o.kt)("p",null,"When performing ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker installs"),", upgrades, or rollbacks, you can use ",(0,o.kt)("em",{parentName:"p"},"tags")," to install a specific version of Rancher."),(0,o.kt)("h3",{id:"server-tags"},"Server Tags"),(0,o.kt)("p",null,"Rancher Server is distributed as a Docker image, which have tags attached to them. You can specify this tag when entering the command to deploy Rancher. Remember that if you use a tag without an explicit version (like ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),"), you must explicitly pull a new version of that image tag. Otherwise, any image cached on the host will be used."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tag"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:latest")),(0,o.kt)("td",{parentName:"tr",align:null},"Our latest development release. These builds are validated through our CI automation framework. These releases are not recommended for production environments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:stable")),(0,o.kt)("td",{parentName:"tr",align:null},"Our newest stable release. This tag is recommended for production.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher/rancher:<v2.X.X>")),(0,o.kt)("td",{parentName:"tr",align:null},"You can install specific versions of Rancher by using the tag from a previous release. See what's available at DockerHub.")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," tag or any tag with ",(0,o.kt)("inlineCode",{parentName:"li"},"-rc")," or another suffix is meant for the Rancher testing team to validate. You should not use these tags, as these builds are not officially supported."),(0,o.kt)("li",{parentName:"ul"},"Want to install an alpha review for preview? Install using one of the alpha tags listed on our ",(0,o.kt)("a",{parentName:"li",href:"https://forums.rancher.com/c/announcements"},"announcements page")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"v2.2.0-alpha1"),"). Caveat: Alpha releases cannot be upgraded to or from any other release.")))))))}v.isMDXComponent=!0}}]);