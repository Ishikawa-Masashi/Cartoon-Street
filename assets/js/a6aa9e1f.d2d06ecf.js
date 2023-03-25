"use strict";(self.webpackChunkmebiusbox_docusaurus=self.webpackChunkmebiusbox_docusaurus||[]).push([[3089],{92506:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(67294),l=a(86010),r=a(70241),o=a(13488),s=a(83699),i=a(97325);const m="sidebar_re4s",c="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var b=a(53086);function h(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return n.createElement(b.Zo,{component:h,props:e})}function v(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(E,{sidebar:t}):null}function Z(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},9928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(67294),l=a(86010),r=a(39962),o=a(79488),s=a(23702),i=a(92506),m=a(42568),c=a(33647),u=a(88389);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:l,blogTitle:s,permalink:i}=t,m="/"===i?a:s;return n.createElement(n.Fragment,null,n.createElement(o.d,{title:m,description:l}),n.createElement(c.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(i.Z,{sidebar:l},n.createElement(u.Z,{items:a}),n.createElement(m.Z,{metadata:t}))}function p(e){return n.createElement(o.FG,{className:(0,l.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},n.createElement(d,e),n.createElement(g,e))}},42568:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(97325),r=a(23672);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},96400:(e,t,a)=>{a.d(t,{Z:()=>J});var n=a(67294),l=a(86010),r=a(79107),o=a(79524);function s(e){let{children:t,className:a}=e;const{frontMatter:l,assets:s}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),m=s.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&n.createElement("meta",{itemProp:"image",content:i(m,{absolute:!0})}),t)}var i=a(83699);const m="title_f1Hy";function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:c}=a,u=o?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(m,t),itemProp:"headline"},o?c:n.createElement(i.Z,{itemProp:"url",to:s},c))}var u=a(97325),d=a(23777);const g="container_mt6G";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function E(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function b(){return n.createElement(n.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:i}=a;return n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md",t)},n.createElement(E,{date:o,formattedDate:s}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(b,null),n.createElement(p,{readingTime:i})))}function f(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:i,email:m}=t,c=s||m&&`mailto:${m}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(f,{href:c,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(f,{href:c,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const Z="authorCol_Hf19",N="imageOnlyAuthorRow_pa_O",P="imageOnlyAuthorCol_G86a";function _(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?N:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?P:Z),key:t},n.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function k(){return n.createElement("header",null,n.createElement(c,null),n.createElement(h,null),n.createElement(_,null))}var w=a(63905),C=a(64752);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return n.createElement("div",{id:o?w.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(C.Z,null,t))}var y=a(94850),I=a(74597),M=a(87462);const x="readMoreButton_vHrp";function B(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return n.createElement(i.Z,(0,M.Z)({className:(0,l.Z)("padding--sm",x),"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(B,null))}var A=a(16573),L=a(1020),R=a(46616),D=a(87385),O=a(21860),$=a(55390),U=a(39962),z=a(51048),G=a(41209);const H="blogPostFooterDetailsFull_Wr5y",S="shareButton_SIER";function j(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,m=!t&&i,c=a.length>0;if(!(c||m||s))return null;const{siteConfig:u}=(0,U.Z)(),d=48,g=`${u.url}${e.permalink}`,p=`${o} | Mebiusbox`,{disableComments:E}=e.frontMatter;let b=!1;return(0,z.Z)()&&(b="/blog"===window.location.pathname),n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&H)},t&&n.createElement("div",{className:"text--center margin-bottom--sm"},n.createElement(A.Z,{url:g,className:S},n.createElement(L.Z,{size:d,round:!0})),n.createElement(R.Z,{url:g,title:p,className:S},n.createElement(D.Z,{size:d,round:!0})),n.createElement(O.Z,{url:g,title:p,className:S},n.createElement($.Z,{size:d,round:!0}))),!E&&!b&&t&&n.createElement(G.Z,null),c&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":m})},n.createElement(I.Z,{tags:a})),t&&s&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(y.Z,{editUrl:s})),m&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":c})},n.createElement(F,{blogPostTitle:o,to:e.permalink})))}function J(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s,{className:(0,l.Z)(o,a)},n.createElement(k,null),n.createElement(T,null,t),n.createElement(j,null))}},88389:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(79107),r=a(96400);function o(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},79107:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var n=a(67294),l=a(43768);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},23777:(e,t,a)=>{a.d(t,{c:()=>m});var n=a(67294),l=a(39962);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}},41209:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(99861),r=a(9200);function o(){const{colorMode:e}=(0,r.I)();return n.createElement("div",{className:"margin-top--lg margin-bottom--sm"},n.createElement(l.Z,{repo:"mebiusbox/mebiusbox.github.com",repoId:"MDEwOlJlcG9zaXRvcnk2MDQ0OTA3Ng==",category:"Announcements",categoryId:"DIC_kwDOA5phNM4CT08m",mapping:"url",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:e,lang:"ja",loading:"lazy",crossorigin:"anonymous",async:!0}))}}}]);