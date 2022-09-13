"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8901],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),n=a(86010),i="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,s),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(87462),n=a(67294),i=a(86010),s=a(72389),l=a(67392),o=a(7094),p=a(12466),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,s=e.lazy,m=e.block,c=e.defaultValue,h=e.values,g=e.groupId,k=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.l)(N,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.U)(),w=b.tabGroupChoices,C=b.setTabGroupChoices,x=(0,n.useState)(y),R=x[0],T=x[1],q=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=w[g];null!=P&&P!==R&&N.some((function(e){return e.value===P}))&&T(P)}var D=function(e){var t=e.currentTarget,a=q.indexOf(t),r=N[a].value;r!==R&&(O(t),T(r),null!=g&&C(g,String(r)))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=q.indexOf(e.currentTarget)+1;a=null!=(r=q[n])?r:q[0];break;case"ArrowLeft":var i,s=q.indexOf(e.currentTarget)-1;a=null!=(i=q[s])?i:q[q.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},k)},N.map((function(e){var t=e.value,a=e.label,s=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return q.push(e)},onKeyDown:I,onFocus:D,onClick:D},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":R===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(v.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function c(e){var t=(0,s.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},27443:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=a(65488),l=a(85162),o=["components"],p={title:"2. Collect and Publish Images to your Private Registry",weight:200,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-installation/prepare-private-reg/","/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/prepare-private-registry/","/rancher/v2.0-v2.4/en/installation/air-gap-single-node/prepare-private-registry/","/rancher/v2.0-v2.4/en/installation/air-gap-single-node/config-rancher-for-private-reg/","/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/config-rancher-for-private-reg/","/rancher/v2.0-v2.4/en/installation/options/air-gap-helm2/populate-private-registry","/rancher/v2.x/en/installation/resources/advanced/air-gap-helm2/populate-private-registry/"]},u=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry",title:"2. Collect and Publish Images to your Private Registry",description:"Prerequisites: You must have a private registry available to use.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"2. Collect and Publish Images to your Private Registry",weight:200,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-installation/prepare-private-reg/","/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/prepare-private-registry/","/rancher/v2.0-v2.4/en/installation/air-gap-single-node/prepare-private-registry/","/rancher/v2.0-v2.4/en/installation/air-gap-single-node/config-rancher-for-private-reg/","/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/config-rancher-for-private-reg/","/rancher/v2.0-v2.4/en/installation/options/air-gap-helm2/populate-private-registry","/rancher/v2.x/en/installation/resources/advanced/air-gap-helm2/populate-private-registry/"]},sidebar:"tutorialSidebar",previous:{title:"1. Prepare your Node(s)",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes"},next:{title:"3. Install Kubernetes with RKE (Kubernetes Installs Only)",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/launch-kubernetes"}},m={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"A. Find the required assets for your Rancher version",id:"a-find-the-required-assets-for-your-rancher-version",level:3},{value:"B. Collect all the required images (For Kubernetes Installs using Rancher Generated Self-Signed Certificate)",id:"b-collect-all-the-required-images-for-kubernetes-installs-using-rancher-generated-self-signed-certificate",level:3},{value:"C. Save the images to your workstation",id:"c-save-the-images-to-your-workstation",level:3},{value:"D. Populate the private registry",id:"d-populate-the-private-registry",level:3},{value:"Windows Steps",id:"windows-steps",level:3},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"A. Find the required assets for your Rancher version",id:"a-find-the-required-assets-for-your-rancher-version-1",level:3},{value:"B. Save the images to your Windows Server workstation",id:"b-save-the-images-to-your-windows-server-workstation",level:3},{value:"C. Prepare the Docker daemon",id:"c-prepare-the-docker-daemon",level:3},{value:"D. Populate the private registry",id:"d-populate-the-private-registry-1",level:3},{value:"Linux Steps",id:"linux-steps",level:3},{value:"Prerequisites",id:"prerequisites-2",level:3},{value:"A. Find the required assets for your Rancher version",id:"a-find-the-required-assets-for-your-rancher-version-2",level:3},{value:"B. Collect all the required images",id:"b-collect-all-the-required-images",level:3},{value:"C. Save the images to your workstation",id:"c-save-the-images-to-your-workstation-1",level:3},{value:"D. Populate the private registry",id:"d-populate-the-private-registry-2",level:3},{value:"Next: Kubernetes Installs - Launch a Kubernetes Cluster with RKE",id:"next-kubernetes-installs---launch-a-kubernetes-cluster-with-rke",level:3},{value:"Next: Docker Installs - Install Rancher",id:"next-docker-installs---install-rancher",level:3}],h={toc:c};function g(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/"},"private registry")," available to use."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Populating the private registry with images is the same process for HA and Docker installations, the differences in this section is based on whether or not you are planning to provision a Windows cluster or not.")),(0,i.kt)("p",null,"By default, all images used to ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provision Kubernetes clusters")," or launch any ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-cluster-tools"},"tools")," in Rancher, e.g. monitoring, pipelines, alerts, are pulled from Docker Hub. In an air gap installation of Rancher, you will need a private registry that is located somewhere accessible by your Rancher server. Then, you will load the registry with all the images."),(0,i.kt)("p",null,"This section describes how to set up your private registry so that when you install Rancher, Rancher will pull all the required images from this registry."),(0,i.kt)("p",null,"By default, we provide the steps of how to populate your private registry assuming you are provisioning Linux only clusters, but if you plan on provisioning any ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"Windows clusters"),", there are separate instructions to support the images needed for a Windows cluster."),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Linux Only Clusters",mdxType:"TabItem"},(0,i.kt)("p",null,"For Rancher servers that will only provision Linux clusters, these are the steps to populate your private registry."),(0,i.kt)("p",null,"A. Find the required assets for your Rancher version ",(0,i.kt)("br",null),"\nB. Collect all the required images ",(0,i.kt)("br",null),"\nC. Save the images to your workstation ",(0,i.kt)("br",null),"\nD. Populate the private registry"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"These steps expect you to use a Linux workstation that has internet access, access to your private registry, and at least 20 GB of disk space."),(0,i.kt)("p",null,"If you will use ARM64 hosts, the registry must support manifests. As of April 2020, Amazon Elastic Container Registry does not support manifests."),(0,i.kt)("h3",{id:"a-find-the-required-assets-for-your-rancher-version"},"A. Find the required assets for your Rancher version"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Browse to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"releases page")," and find the Rancher v2.x.x release that you want to install. Don't download releases marked ",(0,i.kt)("inlineCode",{parentName:"p"},"rc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Pre-release"),", as they are not stable for production environments. Click *",(0,i.kt)("em",{parentName:"p"},"Assets"),".*")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the release's ",(0,i.kt)("strong",{parentName:"p"},"Assets")," section, download the following files:"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Release File"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-images.txt")),(0,i.kt)("td",{parentName:"tr",align:null},"This file contains a list of images needed to install Rancher, provision clusters and user Rancher tools.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-save-images.sh")),(0,i.kt)("td",{parentName:"tr",align:null},"This script pulls all the images in the ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-images.txt")," from Docker Hub and saves all of the images as ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-images.tar.gz"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-load-images.sh")),(0,i.kt)("td",{parentName:"tr",align:null},"This script loads images from the ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-images.tar.gz")," file and pushes them to your private registry.")))),(0,i.kt)("h3",{id:"b-collect-all-the-required-images-for-kubernetes-installs-using-rancher-generated-self-signed-certificate"},"B. Collect all the required images (For Kubernetes Installs using Rancher Generated Self-Signed Certificate)"),(0,i.kt)("p",null,"In a Kubernetes Install, if you elect to use the Rancher default self-signed TLS certificates, you must add the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/jetstack/cert-manager"},(0,i.kt)("inlineCode",{parentName:"a"},"cert-manager"))," image to ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," as well. You skip this step if you are using you using your own certificates."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fetch the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," Helm chart and parse the template for image details:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.12.0, please see our ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager/"},"upgrade documentation"),".")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm fetch jetstack/cert-manager --version v0.14.2\nhelm template ./cert-manager-<version>.tgz | grep -oP '(?<=image: \").*(?=\")' >> ./rancher-images.txt\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sort and unique the images list to remove any overlap between the sources:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"sort -u rancher-images.txt -o rancher-images.txt\n")))),(0,i.kt)("h3",{id:"c-save-the-images-to-your-workstation"},"C. Save the images to your workstation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-save-images.sh")," an executable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"chmod +x rancher-save-images.sh\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-save-images.sh")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," image list to create a tarball of all the required images:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-save-images.sh --image-list ./rancher-images.txt\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Result:")," Docker begins pulling the images used for an air gap install. Be patient. This process takes a few minutes. When the process completes, your current directory will output a tarball named ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz"),". Check that the output is in the directory."))),(0,i.kt)("h3",{id:"d-populate-the-private-registry"},"D. Populate the private registry"),(0,i.kt)("p",null,"Move the images in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry using the scripts to load the images. The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," is expected to be on the workstation in the same directory that you are running the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," script."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into your private registry if required:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"docker login <REGISTRY.YOURDOMAIN.COM:PORT>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," an executable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"chmod +x rancher-load-images.sh\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," to extract, tag and push ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"}," ./rancher-load-images.sh --image-list ./rancher-images.txt --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n"))))),(0,i.kt)(l.Z,{value:"Linux and Windows Clusters",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,i.kt)("p",null,"For Rancher servers that will provision Linux and Windows clusters, there are distinctive steps to populate your private registry for the Windows images and the Linux images. Since a Windows cluster is a mix of Linux and Windows nodes, the Linux images pushed into the private registry are manifests."),(0,i.kt)("h3",{id:"windows-steps"},"Windows Steps"),(0,i.kt)("p",null,"The Windows images need to be collected and pushed from a Windows server workstation."),(0,i.kt)("p",null,"A. Find the required assets for your Rancher version ",(0,i.kt)("br",null),"\nB. Save the images to your Windows Server workstation ",(0,i.kt)("br",null),"\nC. Prepare the Docker daemon ",(0,i.kt)("br",null),"\nD. Populate the private registry"),(0,i.kt)("details",null,(0,i.kt)("summary",null,'Collecting and Populating Windows Images into the Private Registry"%}}'),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("p",null,"These steps expect you to use a Windows Server 1809 workstation that has internet access, access to your private registry, and at least 50 GB of disk space."),(0,i.kt)("p",null,"The workstation must have Docker 18.02+ in order to support manifests, which are required when provisioning Windows clusters."),(0,i.kt)("p",null,"Your registry must support manifests. As of April 2020, Amazon Elastic Container Registry does not support manifests."),(0,i.kt)("h3",{id:"a-find-the-required-assets-for-your-rancher-version-1"},"A. Find the required assets for your Rancher version"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Browse to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"releases page")," and find the Rancher v2.x.x release that you want to install. Don't download releases marked ",(0,i.kt)("inlineCode",{parentName:"p"},"rc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Pre-release"),", as they are not stable for production environments.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'From the release\'s "Assets" section, download the following files:'))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Release File"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.txt")),(0,i.kt)("td",{parentName:"tr",align:null},"This file contains a list of Windows images needed to provision Windows clusters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-save-images.ps1")),(0,i.kt)("td",{parentName:"tr",align:null},"This script pulls all the images in the ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.txt")," from Docker Hub and saves all of the images as ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.tar.gz"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-load-images.ps1")),(0,i.kt)("td",{parentName:"tr",align:null},"This script loads the images from the ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.tar.gz")," file and pushes them to your private registry.")))),(0,i.kt)("h3",{id:"b-save-the-images-to-your-windows-server-workstation"},"B. Save the images to your Windows Server workstation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell"),", go to the directory that has the files that were downloaded in the previous step.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-save-images.ps1")," to create a tarball of all the required images:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-save-images.ps1\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step Result:")," Docker begins pulling the images used for an air gap install. Be patient. This process takes a few minutes. When the process completes, your current directory will output a tarball named ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.tar.gz"),". Check that the output is in the directory."))),(0,i.kt)("h3",{id:"c-prepare-the-docker-daemon"},"C. Prepare the Docker daemon"),(0,i.kt)("p",null,"Append your private registry address to the ",(0,i.kt)("inlineCode",{parentName:"p"},"allow-nondistributable-artifacts")," config field in the Docker daemon (",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\ProgramData\\Docker\\config\\daemon.json"),"). Since the base image of Windows images are maintained by the ",(0,i.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com")," registry, this step is required as the layers in the Microsoft registry are missing from Docker Hub and need to be pulled into the private registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  ...\n  "allow-nondistributable-artifacts": [\n    ...\n    "<REGISTRY.YOURDOMAIN.COM:PORT>"\n  ]\n  ...\n}\n')),(0,i.kt)("h3",{id:"d-populate-the-private-registry-1"},"D. Populate the private registry"),(0,i.kt)("p",null,"Move the images in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.tar.gz")," to your private registry using the scripts to load the images. The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.txt")," is expected to be on the workstation in the same directory that you are running the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.ps1")," script."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell"),", log into your private registry if required:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"docker login <REGISTRY.YOURDOMAIN.COM:PORT>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.ps1")," to extract, tag and push the images from ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-load-images.ps1 --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n"))))),(0,i.kt)("h3",{id:"linux-steps"},"Linux Steps"),(0,i.kt)("p",null,"The Linux images needs to be collected and pushed from a Linux host, but ",(0,i.kt)("em",{parentName:"p"},"must be done after")," populating the Windows images into the private registry. These step are different from the Linux only steps as the Linux images that are pushed will actually manifests that support Windows and Linux images."),(0,i.kt)("p",null,"A. Find the required assets for your Rancher version ",(0,i.kt)("br",null),"\nB. Collect all the required images ",(0,i.kt)("br",null),"\nC. Save the images to your Linux workstation ",(0,i.kt)("br",null),"\nD. Populate the private registry"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Collecting and Populating Linux Images into the Private Registry"),(0,i.kt)("h3",{id:"prerequisites-2"},"Prerequisites"),(0,i.kt)("p",null,"You must populate the private registry with the Windows images before populating the private registry with Linux images. If you have already populated the registry with Linux images, you will need to follow these instructions again as they will publish manifests that support Windows and Linux images."),(0,i.kt)("p",null,"These steps expect you to use a Linux workstation that has internet access, access to your private registry, and at least 20 GB of disk space."),(0,i.kt)("p",null,"The workstation must have Docker 18.02+ in order to support manifests, which are required when provisioning Windows clusters."),(0,i.kt)("h3",{id:"a-find-the-required-assets-for-your-rancher-version-2"},"A. Find the required assets for your Rancher version"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Browse to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"releases page")," and find the Rancher v2.x.x release that you want to install. Don't download releases marked ",(0,i.kt)("inlineCode",{parentName:"p"},"rc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Pre-release"),", as they are not stable for production environments.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the release's ",(0,i.kt)("strong",{parentName:"p"},"Assets")," section, download the following files, which are required to install Rancher in an air gap environment:"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Release File"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-images.txt")),(0,i.kt)("td",{parentName:"tr",align:null},"This file contains a list of images needed to install Rancher, provision clusters and user Rancher tools.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.txt")),(0,i.kt)("td",{parentName:"tr",align:null},"This file contains a list of images needed to provision Windows clusters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-save-images.sh")),(0,i.kt)("td",{parentName:"tr",align:null},"This script pulls all the images in the ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-images.txt")," from Docker Hub and saves all of the images as ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-images.tar.gz"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rancher-load-images.sh")),(0,i.kt)("td",{parentName:"tr",align:null},"This script loads images from the ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-images.tar.gz")," file and pushes them to your private registry.")))),(0,i.kt)("h3",{id:"b-collect-all-the-required-images"},"B. Collect all the required images"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Kubernetes Installs using Rancher Generated Self-Signed Certificate:")," In a Kubernetes Install, if you elect to use the Rancher default self-signed TLS certificates, you must add the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/jetstack/cert-manager"},(0,i.kt)("inlineCode",{parentName:"a"},"cert-manager"))," image to ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," as well. You skip this step if you are using you using your own certificates."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fetch the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," Helm chart and parse the template for image details:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.12.0, please see our ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"upgrade documentation"),"."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm fetch jetstack/cert-manager --version v0.14.2\nhelm template ./cert-manager-<version>.tgz | grep -oP '(?<=image: \").*(?=\")' >> ./rancher-images.txt\n")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sort and unique the images list to remove any overlap between the sources:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"sort -u rancher-images.txt -o rancher-images.txt\n")))),(0,i.kt)("h3",{id:"c-save-the-images-to-your-workstation-1"},"C. Save the images to your workstation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-save-images.sh")," an executable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"chmod +x rancher-save-images.sh\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-save-images.sh")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," image list to create a tarball of all the required images:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-save-images.sh --image-list ./rancher-images.txt\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Result:")," Docker begins pulling the images used for an air gap install. Be patient. This process takes a few minutes. When the process completes, your current directory will output a tarball named ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz"),". Check that the output is in the directory."))),(0,i.kt)("h3",{id:"d-populate-the-private-registry-2"},"D. Populate the private registry"),(0,i.kt)("p",null,"Move the images in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh script")," to load the images. The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.txt")," image list is expected to be on the workstation in the same directory that you are running the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," script."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into your private registry if required:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"docker login <REGISTRY.YOURDOMAIN.COM:PORT>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," an executable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"chmod +x rancher-load-images.sh\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," to extract, tag and push the images from ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-load-images.sh --image-list ./rancher-images.txt \\\n  --windows-image-list ./rancher-windows-images.txt \\\n  --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n"))))))),(0,i.kt)("h3",{id:"next-kubernetes-installs---launch-a-kubernetes-cluster-with-rke"},(0,i.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},"Next: Kubernetes Installs - Launch a Kubernetes Cluster with RKE")),(0,i.kt)("h3",{id:"next-docker-installs---install-rancher"},(0,i.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Next: Docker Installs - Install Rancher")))}g.isMDXComponent=!0}}]);