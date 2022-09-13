"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35741],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"Registering Existing Clusters",weight:6},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",title:"Registering Existing Clusters",description:"The cluster registration feature replaced the feature to import clusters.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md",tags:[],version:"current",lastUpdatedAt:1663039602,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Registering Existing Clusters",weight:6},sidebar:"tutorialSidebar",previous:{title:"Rancher Agents",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"},next:{title:"Kubernetes Resources",permalink:"/pages-for-subheaders/kubernetes-resources-setup"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Kubernetes Node Roles",id:"kubernetes-node-roles",level:3},{value:"Permissions",id:"permissions",level:3},{value:"EKS Clusters",id:"eks-clusters",level:3},{value:"Registering a Cluster",id:"registering-a-cluster",level:2},{value:"Configuring a K3s Cluster to Enable Registration in Rancher",id:"configuring-a-k3s-cluster-to-enable-registration-in-rancher",level:3},{value:"Configuring an Imported EKS Cluster with Terraform",id:"configuring-an-imported-eks-cluster-with-terraform",level:3},{value:"Management Capabilities for Registered Clusters",id:"management-capabilities-for-registered-clusters",level:2},{value:"Features for All Registered Clusters",id:"features-for-all-registered-clusters",level:3},{value:"Additional Features for Registered K3s Clusters",id:"additional-features-for-registered-k3s-clusters",level:3},{value:"Additional Features for Registered EKS and GKE Clusters",id:"additional-features-for-registered-eks-and-gke-clusters",level:3},{value:"Configuring K3s Cluster Upgrades",id:"configuring-k3s-cluster-upgrades",level:2},{value:"Debug Logging and Troubleshooting for Registered K3s Clusters",id:"debug-logging-and-troubleshooting-for-registered-k3s-clusters",level:2},{value:"Authorized Cluster Endpoint Support for RKE2 and K3s Clusters",id:"authorized-cluster-endpoint-support-for-rke2-and-k3s-clusters",level:2},{value:"<strong>Manual steps to be taken on the control plane of each downstream cluster to enable ACE:</strong>",id:"manual-steps-to-be-taken-on-the-control-plane-of-each-downstream-cluster-to-enable-ace",level:6},{value:"Annotating Registered Clusters",id:"annotating-registered-clusters",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The cluster registration feature replaced the feature to import clusters."),(0,i.kt)("p",null,"The control that Rancher has to manage a registered cluster depends on the type of cluster. For details, see ",(0,i.kt)("a",{parentName:"p",href:"#management-capabilities-for-registered-clusters"},"Management Capabilities for Registered Clusters.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"kubernetes-node-roles"},"Kubernetes Node Roles"),(0,i.kt)("p",null,"Registered RKE Kubernetes clusters must have all three node roles - etcd, controlplane and worker. A cluster with only controlplane components cannot be registered in Rancher."),(0,i.kt)("p",null,"For more information on RKE node roles, see the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/checklist-for-production-ready-clusters#cluster-architecture"},"best practices.")),(0,i.kt)("h3",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"If your existing Kubernetes cluster already has a ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," role defined, you must have this ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," privilege to register the cluster in Rancher."),(0,i.kt)("p",null,"In order to apply the privilege, you need to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create clusterrolebinding cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user [USER_ACCOUNT]\n")),(0,i.kt)("p",null,"before running the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command to register the cluster."),(0,i.kt)("p",null,"By default, GKE users are not given this privilege, so you will need to run the command before registering GKE clusters. To learn more about role-based access control for GKE, please click ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control"},"here"),"."),(0,i.kt)("p",null,"If you are registering a K3s cluster, make sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," is readable. It is protected by default. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"#configuring-a-k3s-cluster-to-enable-registration-in-rancher"},"Configuring a K3s cluster to enable importation to Rancher.")),(0,i.kt)("h3",{id:"eks-clusters"},"EKS Clusters"),(0,i.kt)("p",null,"EKS clusters must have at least one managed node group to be imported into Rancher or provisioned from Rancher successfully."),(0,i.kt)("h2",{id:"registering-a-cluster"},"Registering a Cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, ",(0,i.kt)("strong",{parentName:"li"},"Import Existing"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose the type of cluster."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,i.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,i.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,i.kt)("li",{parentName:"ol"},"If you are importing a generic Kubernetes cluster in Rancher, perform the following steps for setup:",(0,i.kt)("br",null),"\na. Click ",(0,i.kt)("strong",{parentName:"li"},"Agent Environment Variables")," under ",(0,i.kt)("strong",{parentName:"li"},"Cluster Options")," to set environment variables for ",(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"},"rancher cluster agent"),". The environment variables can be set using key value pairs. If rancher agent requires use of proxy to communicate with Rancher server, ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NO_PROXY")," environment variables can be set using agent environment variables.",(0,i.kt)("br",null),"\nb. Enable Project Network Isolation to ensure the cluster supports Kubernetes ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkPolicy")," resources. Users can select the ",(0,i.kt)("strong",{parentName:"li"},"Project Network Isolation")," option under the ",(0,i.kt)("strong",{parentName:"li"},"Advanced Options")," dropdown to do so."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"The prerequisite for ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-admin")," privileges is shown (see ",(0,i.kt)("strong",{parentName:"li"},"Prerequisites")," above), including an example command to fulfil the prerequisite."),(0,i.kt)("li",{parentName:"ol"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," command to your clipboard and run it on a node where kubeconfig is configured to point to the cluster you want to import. If you are unsure it is configured correctly, run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get nodes")," to verify before running the command shown in Rancher."),(0,i.kt)("li",{parentName:"ol"},"If you are using self-signed certificates, you will receive the message ",(0,i.kt)("inlineCode",{parentName:"li"},"certificate signed by unknown authority"),". To work around this validation, copy the command starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"curl")," displayed in Rancher to your clipboard. Then run the command on a node where kubeconfig is configured to point to the cluster you want to import."),(0,i.kt)("li",{parentName:"ol"},"When you finish running the command(s) on your node, click ",(0,i.kt)("strong",{parentName:"li"},"Done"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your cluster is registered and assigned a state of ",(0,i.kt)("strong",{parentName:"li"},"Pending"),". Rancher is deploying resources to manage your cluster."),(0,i.kt)("li",{parentName:"ul"},"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"li"},"Active"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," clusters are assigned two Projects: ",(0,i.kt)("inlineCode",{parentName:"li"},"Default")," (containing the namespace ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),") and ",(0,i.kt)("inlineCode",{parentName:"li"},"System")," (containing the namespaces ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system"),", if present).")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can not re-register a cluster that is currently active in a Rancher setup."))),(0,i.kt)("h3",{id:"configuring-a-k3s-cluster-to-enable-registration-in-rancher"},"Configuring a K3s Cluster to Enable Registration in Rancher"),(0,i.kt)("p",null,"The K3s server needs to be configured to allow writing to the kubeconfig file."),(0,i.kt)("p",null,"This can be accomplished by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--write-kubeconfig-mode 644")," as a flag during installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644\n")),(0,i.kt)("p",null,"The option can also be specified using the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_KUBECONFIG_MODE"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" sh -s -\n')),(0,i.kt)("h3",{id:"configuring-an-imported-eks-cluster-with-terraform"},"Configuring an Imported EKS Cluster with Terraform"),(0,i.kt)("p",null,"You should define ",(0,i.kt)("strong",{parentName:"p"},"only")," the minimum fields that Rancher requires when importing an EKS cluster with Terraform. This is important as Rancher will overwrite what was in the EKS cluster with any config that the user has provided."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Even a small difference between the current EKS cluster and a user-provided config could have unexpected results."))),(0,i.kt)("p",null,"The minimum config fields required by Rancher to import EKS clusters with Terraform using ",(0,i.kt)("inlineCode",{parentName:"p"},"eks_config_v2")," are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cloud_credential_id"),(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"region"),(0,i.kt)("li",{parentName:"ul"},"imported (this field should always be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," for imported clusters)")),(0,i.kt)("p",null,"Example YAML configuration for imported EKS clusters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'resource "rancher2_cluster" "my-eks-to-import" {\n  name        = "my-eks-to-import"\n  description = "Terraform EKS Cluster"\n  eks_config_v2 {\n    cloud_credential_id = rancher2_cloud_credential.aws.id\n    name                = var.aws_eks_name\n    region              = var.aws_region\n    imported            = true\n  }\n}\n')),(0,i.kt)("h2",{id:"management-capabilities-for-registered-clusters"},"Management Capabilities for Registered Clusters"),(0,i.kt)("p",null,"The control that Rancher has to manage a registered cluster depends on the type of cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-5-8-features-for-all-registered-clusters"},"Features for All Registered Clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-5-8-additional-features-for-registered-k3s-clusters"},"Additional Features for Registered K3s Clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#additional-features-for-registered-eks-and-gke-clusters"},"Additional Features for Registered EKS and GKE Clusters"))),(0,i.kt)("h3",{id:"features-for-all-registered-clusters"},"Features for All Registered Clusters"),(0,i.kt)("p",null,"After registering a cluster, the cluster owner can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Manage cluster access")," through role-based access control"),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/pages-for-subheaders/monitoring-and-alerting"},"monitoring, alerts and notifiers")),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/pages-for-subheaders/logging"},"logging")),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/pages-for-subheaders/istio"},"Istio")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"pipelines")),(0,i.kt)("li",{parentName:"ul"},"Manage projects and workloads")),(0,i.kt)("h3",{id:"additional-features-for-registered-k3s-clusters"},"Additional Features for Registered K3s Clusters"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"K3s")," is a lightweight, fully compliant Kubernetes distribution."),(0,i.kt)("p",null,"When a K3s cluster is registered in Rancher, Rancher will recognize it as K3s. The Rancher UI will expose the features for ",(0,i.kt)("a",{parentName:"p",href:"#features-for-all-registered-clusters"},"all registered clusters,")," in addition to the following features for editing and upgrading the cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ability to ",(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"upgrade the K3s version")),(0,i.kt)("li",{parentName:"ul"},"The ability to configure the maximum number of nodes that will be upgraded concurrently"),(0,i.kt)("li",{parentName:"ul"},"The ability to see a read-only version of the K3s cluster's configuration arguments and environment variables used to launch each node in the cluster")),(0,i.kt)("h3",{id:"additional-features-for-registered-eks-and-gke-clusters"},"Additional Features for Registered EKS and GKE Clusters"),(0,i.kt)("p",null,"Registering an Amazon EKS cluster or GKE cluster allows Rancher to treat it as though it were created in Rancher."),(0,i.kt)("p",null,"Amazon EKS clusters and GKE clusters can now be registered in Rancher. For the most part, these registered clusters are treated the same way as clusters created in the Rancher UI, except for deletion."),(0,i.kt)("p",null,"When you delete an EKS cluster or GKE cluster that was created in Rancher, the cluster is destroyed. When you delete a cluster that was registered in Rancher, it is disconnected from the Rancher server, but it still exists and you can still access it in the same way you did before it was registered in Rancher."),(0,i.kt)("p",null,"The capabilities for registered clusters are listed in the table on ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"this page.")),(0,i.kt)("h2",{id:"configuring-k3s-cluster-upgrades"},"Configuring K3s Cluster Upgrades"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is a Kubernetes best practice to back up the cluster before upgrading. When upgrading a high-availability K3s cluster with an external database, back up the database in whichever way is recommended by the relational database provider."))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"concurrency")," is the maximum number of nodes that are permitted to be unavailable during an upgrade. If number of unavailable nodes is larger than the ",(0,i.kt)("strong",{parentName:"p"},"concurrency,")," the upgrade will fail. If an upgrade fails, you may need to repair or remove failed nodes before the upgrade can succeed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Controlplane concurrency:")," The maximum number of server nodes to upgrade at a single time; also the maximum unavailable server nodes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Worker concurrency:")," The maximum number worker nodes to upgrade at the same time; also the maximum unavailable worker nodes")),(0,i.kt)("p",null,"In the K3s documentation, controlplane nodes are called server nodes. These nodes run the Kubernetes master, which maintains the desired state of the cluster. In K3s, these controlplane nodes have the capability to have workloads scheduled to them by default."),(0,i.kt)("p",null,"Also in the K3s documentation, nodes with the worker role are called agent nodes. Any workloads or pods that are deployed in the cluster can be scheduled to these nodes by default."),(0,i.kt)("h2",{id:"debug-logging-and-troubleshooting-for-registered-k3s-clusters"},"Debug Logging and Troubleshooting for Registered K3s Clusters"),(0,i.kt)("p",null,"Nodes are upgraded by the system upgrade controller running in the downstream cluster. Based on the cluster configuration, Rancher deploys two ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller#example-upgrade-plan"},"plans")," to upgrade K3s nodes: one for controlplane nodes and one for workers. The system upgrade controller follows the plans and upgrades the nodes."),(0,i.kt)("p",null,"To enable debug logging on the system upgrade controller deployment, edit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/blob/50a4c8975543d75f1d76a8290001d87dc298bdb4/manifests/system-upgrade-controller.yaml#L32"},"configmap")," to set the debug environment variable to true. Then restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," pod."),(0,i.kt)("p",null,"Logs created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," can be viewed by running this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-system system-upgrade-controller\n")),(0,i.kt)("p",null,"The current status of the plans can be viewed with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get plans -A -o yaml\n")),(0,i.kt)("p",null,"If the cluster becomes stuck in upgrading, restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller"),"."),(0,i.kt)("p",null,"To prevent issues when upgrading, the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/"},"Kubernetes upgrade best practices")," should be followed."),(0,i.kt)("h2",{id:"authorized-cluster-endpoint-support-for-rke2-and-k3s-clusters"},"Authorized Cluster Endpoint Support for RKE2 and K3s Clusters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.6.3")),(0,i.kt)("p",null,"Authorized Cluster Endpoint (ACE) support has been added for registered RKE2 and K3s clusters. This support includes manual steps you will perform on the downstream cluster to enable the ACE. For additional information on the authorized cluster endpoint, click ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"here"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These steps only need to be performed on the control plane nodes of the downstream cluster. You must configure each control plane node individually.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following steps will work on both RKE2 and K3s clusters registered in v2.6.x as well as those registered (or imported) from a previous version of Rancher with an upgrade to v2.6.x.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These steps will alter the configuration of the downstream RKE2 and K3s clusters and deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-api-authn-webhook"),". If a future implementation of the ACE requires an update to the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-api-authn-webhook"),", then this would also have to be done manually. For more information on this webhook, click ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint#about-the-kube-api-auth-authentication-webhook"},"here"),"."))))),(0,i.kt)("h6",{id:"manual-steps-to-be-taken-on-the-control-plane-of-each-downstream-cluster-to-enable-ace"},(0,i.kt)("strong",{parentName:"h6"},"Manual steps to be taken on the control plane of each downstream cluster to enable ACE:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/{rke2,k3s}/kube-api-authn-webhook.yaml")," with the following contents:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Config\nclusters:\n- name: Default\n  cluster:\n    insecure-skip-tls-verify: true\n    server: http://127.0.0.1:6440/v1/authenticate\nusers:\n- name: Default\n  user:\n    insecure-skip-tls-verify: true\ncurrent-context: webhook\ncontexts:\n- name: webhook\n  context:\n    user: Default\n    cluster: Default\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the following to the config file (or create one if it doesn\u2019t exist); note that the default location is ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/{rke2,k3s}/config.yaml"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kube-apiserver-arg:\n    - authentication-token-webhook-config-file=/var/lib/rancher/{rke2,k3s}/kube-api-authn-webhook.yaml\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the following commands:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"sudo systemctl stop {rke2,k3s}-server\nsudo systemctl start {rke2,k3s}-server\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, you ",(0,i.kt)("strong",{parentName:"p"},"must")," go back to the Rancher UI and edit the imported cluster there to complete the ACE enablement. Click on ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > Edit Config"),", then click the ",(0,i.kt)("strong",{parentName:"p"},"Networking")," tab under Cluster Configuration. Finally, click the ",(0,i.kt)("strong",{parentName:"p"},"Enabled")," button for ",(0,i.kt)("strong",{parentName:"p"},"Authorized Endpoint"),". Once the ACE is enabled, you then have the option of entering a fully qualified domain name (FQDN) and certificate information."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("b",null,"FQDN")," field is optional, and if one is entered, it should point to the downstream cluster. Certificate information is only needed if there is a load balancer in front of the downstream cluster that is using an untrusted certificate. If you have a valid certificate, then nothing needs to be added to the ",(0,i.kt)("b",null,"CA Certificates")," field."))),(0,i.kt)("h2",{id:"annotating-registered-clusters"},"Annotating Registered Clusters"),(0,i.kt)("p",null,"For all types of registered Kubernetes clusters except for K3s Kubernetes clusters, Rancher doesn't have any information about how the cluster is provisioned or configured."),(0,i.kt)("p",null,"Therefore, when Rancher registers a cluster, it assumes that several capabilities are disabled by default. Rancher assumes this in order to avoid exposing UI options to the user even when the capabilities are not enabled in the registered cluster."),(0,i.kt)("p",null,"However, if the cluster has a certain capability, such as the ability to use a pod security policy, a user of that cluster might still want to select pod security policies for the cluster in the Rancher UI. In order to do that, the user will need to manually indicate to Rancher that pod security policies are enabled for the cluster."),(0,i.kt)("p",null,"By annotating a registered cluster, it is possible to indicate to Rancher that a cluster was given a pod security policy, or another capability, outside of Rancher."),(0,i.kt)("p",null,"This example annotation indicates that a pod security policy is enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"capabilities.cattle.io/pspEnabled": "true"\n')),(0,i.kt)("p",null,"The following annotation indicates Ingress capabilities. Note that that the values of non-primitive objects need to be JSON encoded, with quotations escaped."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"capabilities.cattle.io/ingressCapabilities": "[\n  {\n    "customDefaultBackend":true,\n    "ingressProvider":"asdf"\n  }\n]"\n')),(0,i.kt)("p",null,"These capabilities can be annotated for the cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressCapabilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadBalancerCapabilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodePoolScalingSupported")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodePortRange")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pspEnabled")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"taintSupport"))),(0,i.kt)("p",null,"All the capabilities and their type definitions can be viewed in the Rancher API view, at ",(0,i.kt)("inlineCode",{parentName:"p"},"[Rancher Server URL]/v3/schemas/capabilities"),"."),(0,i.kt)("p",null,"To annotate a registered cluster,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the custom cluster you want to annotate and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,i.kt)("li",{parentName:"ol"},"Expand the ",(0,i.kt)("strong",{parentName:"li"},"Labels & Annotations")," section."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Annotation"),"."),(0,i.kt)("li",{parentName:"ol"},"Add an annotation to the cluster with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"capabilities/<capability>: <value>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the cluster capability that will be overridden by the annotation. In this scenario, Rancher is not aware of any capabilities of the cluster until you add the annotation."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The annotation does not give the capabilities to the cluster, but it does indicate to Rancher that the cluster has those capabilities."))}h.isMDXComponent=!0}}]);