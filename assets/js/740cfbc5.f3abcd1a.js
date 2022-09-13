"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86229],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(t),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},58785:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"About rancher-selinux"},c=void 0,s={unversionedId:"reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",id:"version-2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",title:"About rancher-selinux",description:"To allow Rancher to work with SELinux, some functionality has to be manually enabled for the SELinux nodes. To help with that, Rancher provides a SELinux RPM.",source:"@site/versioned_docs/version-2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md",sourceDirName:"reference-guides/rancher-security/selinux-rpm",slug:"/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",permalink:"/v2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md",tags:[],version:"2.5",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"About rancher-selinux"},sidebar:"tutorialSidebar",previous:{title:"SELinux RPM",permalink:"/v2.5/pages-for-subheaders/selinux-rpm"},next:{title:"About rke2-selinux",permalink:"/v2.5/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"}},u={},p=[{value:"Installing the rancher-selinux RPM",id:"installing-the-rancher-selinux-rpm",level:2},{value:"1. Set up the yum repo",id:"1-set-up-the-yum-repo",level:3},{value:"2. Installing the RPM",id:"2-installing-the-rpm",level:3},{value:"Configuring the Logging Application to Work with SELinux",id:"configuring-the-logging-application-to-work-with-selinux",level:2}],h={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To allow Rancher to work with SELinux, some functionality has to be manually enabled for the SELinux nodes. To help with that, Rancher provides a SELinux RPM. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM only contains policies for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/dev-v2.5/charts/rancher-logging"},"rancher-logging application.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," GitHub repository is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-selinux"},"here.")),(0,i.kt)("h2",{id:"installing-the-rancher-selinux-rpm"},"Installing the rancher-selinux RPM"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Requirement:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The rancher-selinux RPM was tested with CentOS 7 and 8."))),(0,i.kt)("h3",{id:"1-set-up-the-yum-repo"},"1. Set up the yum repo"),(0,i.kt)("p",null,"Set up the yum repo to install ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," directly on all hosts in the cluster."),(0,i.kt)("p",null,"In order to use the RPM repository, on a CentOS 7 or RHEL 7 system, run the following bash snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# cat << EOF > /etc/yum.repos.d/rancher.repo \n[rancher] \nname=Rancher \nbaseurl=https://rpm.rancher.io/rancher/production/centos/7/noarch\nenabled=1 \ngpgcheck=1 \ngpgkey=https://rpm.rancher.io/public.key \nEOF\n")),(0,i.kt)("p",null,"In order to use the RPM repository, on a CentOS 8 or RHEL 8 system, run the following bash snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# cat << EOF > /etc/yum.repos.d/rancher.repo \n[rancher] \nname=Rancher \nbaseurl=https://rpm.rancher.io/rancher/production/centos/8/noarch\nenabled=1 \ngpgcheck=1 \ngpgkey=https://rpm.rancher.io/public.key \nEOF\n")),(0,i.kt)("h3",{id:"2-installing-the-rpm"},"2. Installing the RPM"),(0,i.kt)("p",null,"Install the RPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yum -y install rancher-selinux\n")),(0,i.kt)("h2",{id:"configuring-the-logging-application-to-work-with-selinux"},"Configuring the Logging Application to Work with SELinux"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Requirement:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Logging v2 was tested with SELinux on RHEL/CentOS 7 and 8."))),(0,i.kt)("p",null,"Applications do not automatically work once the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM is installed on the host. They need to be configured to run in an allowed SELinux container domain provided by the RPM. "),(0,i.kt)("p",null,"To configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-logging")," chart to be SELinux aware, change ",(0,i.kt)("inlineCode",{parentName:"p"},"global.seLinux.enabled")," to true in the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," when installing the chart."))}d.isMDXComponent=!0}}]);