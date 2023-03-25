"use strict";(self.webpackChunkmebiusbox_docusaurus=self.webpackChunkmebiusbox_docusaurus||[]).push([[3975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},A="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),A=o(n),m=l,d=A["".concat(i,".").concat(m)]||A[m]||s[m]||r;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[A]="string"==typeof e?e:l,p[1]=c;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>A,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={layout:"post",title:"Eclipse\uff1aC++\u9759\u7684\u30c1\u30a7\u30c3\u30af\u74b0\u5883",category:"note",tags:["eclipse"],authors:["mebiusbox"]},p=void 0,c={permalink:"/Cartoon-Street/blog/2016/06/26/eclipse-cpp-code-analyze",source:"@site/blog/2016-06-26-eclipse-cpp-code-analyze.md",title:"Eclipse\uff1aC++\u9759\u7684\u30c1\u30a7\u30c3\u30af\u74b0\u5883",description:"Eclipse \u306e C++ \u958b\u767a\u74b0\u5883\u306b\u9759\u7684\u30b3\u30fc\u30c9\u89e3\u6790\u3092\u3044\u304f\u3064\u304b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u3053\u3067\u89e3\u8aac\u3059\u308b\u65b9\u6cd5\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5358\u4f4d\u3067\u306f\u306a\u304f\uff11\u30d5\u30a1\u30a4\u30eb\u5358\u4f4d\u3067\u306e\u89e3\u6790\u3068\u306a\u308a\u307e\u3059\u3002",date:"2016-06-26T00:00:00.000Z",formattedDate:"2016\u5e746\u670826\u65e5",tags:[{label:"eclipse",permalink:"/Cartoon-Street/blog/tags/eclipse"}],readingTime:5.075,hasTruncateMarker:!1,authors:[{name:"Ishikawa Masashi",title:"enginner",url:"https://github.com/Ishikawa-Masashi",imageURL:"https://github.com/Ishikawa-Masashi.png",key:"mebiusbox"}],frontMatter:{layout:"post",title:"Eclipse\uff1aC++\u9759\u7684\u30c1\u30a7\u30c3\u30af\u74b0\u5883",category:"note",tags:["eclipse"],authors:["mebiusbox"]},prevItem:{title:"Eclipse\uff1a\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\u306bBOM(UTF-8)\u3092\u3064\u3051\u308b",permalink:"/Cartoon-Street/blog/2016/06/27/eclipse-add-bom"},nextItem:{title:"Blender\uff1a\u30ab\u30e1\u30e9\u306e\u64cd\u4f5c\u3092Maya\u3068\u540c\u3058\u306b\u3059\u308b",permalink:"/Cartoon-Street/blog/2016/06/24/blender-maya-camera"}},i={authorsImageUrls:[void 0]},o=[{value:"cpplint",id:"cpplint",level:2},{value:"cppcheck",id:"cppcheck",level:2},{value:"SourceMonitor",id:"sourcemonitor",level:2},{value:"\u5b9f\u884c\u3057\u3066\u307f\u308b",id:"\u5b9f\u884c\u3057\u3066\u307f\u308b",level:2},{value:"CPPLINT.cfg",id:"cpplintcfg",level:2},{value:"SourceMonitor\u304c\u8d77\u52d5\u3057\u306a\u3044\u5834\u5408",id:"sourcemonitor\u304c\u8d77\u52d5\u3057\u306a\u3044\u5834\u5408",level:2},{value:"\u30e1\u30c8\u30ea\u30af\u30b9\u8a08\u6e2c\u306b\u3064\u3044\u3066",id:"\u30e1\u30c8\u30ea\u30af\u30b9\u8a08\u6e2c\u306b\u3064\u3044\u3066",level:2},{value:"metriculator",id:"metriculator",level:2}],u={toc:o};function A(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Eclipse \u306e C++ \u958b\u767a\u74b0\u5883\u306b\u9759\u7684\u30b3\u30fc\u30c9\u89e3\u6790\u3092\u3044\u304f\u3064\u304b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u3053\u3067\u89e3\u8aac\u3059\u308b\u65b9\u6cd5\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5358\u4f4d\u3067\u306f\u306a\u304f\uff11\u30d5\u30a1\u30a4\u30eb\u5358\u4f4d\u3067\u306e\u89e3\u6790\u3068\u306a\u308a\u307e\u3059\u3002\n\u8ffd\u52a0\u3059\u308b\u306e\u306f\u30b9\u30bf\u30a4\u30eb\u30c1\u30a7\u30c3\u30af\u3084\u30e1\u30c8\u30ea\u30af\u30b9\u89e3\u6790\u306a\u3069\u3067\u3001\u6b21\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cpplint"),(0,l.kt)("li",{parentName:"ul"},"cppcheck"),(0,l.kt)("li",{parentName:"ul"},"SourceMonitor")),(0,l.kt)("p",null,"\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u304b\u3089 ",(0,l.kt)("inlineCode",{parentName:"p"},"Run > External Tools > External Tools Configurations...")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"001",src:n(41420).Z,width:"672",height:"612"})),(0,l.kt)("p",null,"\u30c4\u30fc\u30eb\u30d0\u30fc\u304b\u3089\u9078\u629e\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"002",src:n(61727).Z,width:"284",height:"144"})),(0,l.kt)("h2",{id:"cpplint"},"cpplint"),(0,l.kt)("p",null,"\u307e\u305a\u306f cpplint \u3092\u767b\u9332\u3057\u307e\u3059\u3002\ncpplint \u306f\u4ee5\u4e0b\u306e\u5834\u6240\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("i",{class:"fa fa-external-link"}),"[cpplint](https://github.com/google/styleguide/tree/gh-pages/cpplint)",(0,l.kt)("p",null,"cpplint \u3092\u5b9f\u884c\u3059\u308b\u306b\u306f python \u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u9069\u5f53\u306a\u5834\u6240\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u3053\u3067\u306f cpplint.py \u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"E:\\cpplint.py"),"\u3001python \u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"E:\\python27")," \u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u5de6\u4e0b\u306b\u3042\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"Program")," \u3092\u9078\u629e\u3059\u308b\u3068\u305d\u306e\u4e0a\u306b\u3042\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"New")," \u30a2\u30a4\u30b3\u30f3\u304c\u30af\u30ea\u30c3\u30af\u51fa\u6765\u308b\u3088\u3046\u306b\u306a\u308b\u306e\u3067\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"003",src:n(53949).Z,width:"786",height:"633"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Name")," \u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"cpplint")," \u3068\u5165\u529b\u3057\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Location")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"Arguments")," \u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"Location\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"E:\\python27\\python.exe"),(0,l.kt)("br",{parentName:"p"}),"\n","Arguments\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"E:\\cpplint.py ${resource_loc}")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"004",src:n(2495).Z,width:"582",height:"695"})),(0,l.kt)("p",null,"\u6b21\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"Common")," \u30bf\u30d6\u3092\u9078\u629e\u3057\u3066\u3001Display in favorites menu \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"Externals Tools")," \u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u307e\u3059\u3002\n\u307e\u305f\u3001Launch in background \u306f\u30c1\u30a7\u30c3\u30af\u3092\u306f\u305a\u3057\u307e\u3059\u3002\u8a2d\u5b9a\u304c\u7d42\u308f\u3063\u305f\u3089 ",(0,l.kt)("inlineCode",{parentName:"p"},"Apply")," \u3092\u62bc\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"005",src:n(71194).Z,width:"582",height:"695"})),(0,l.kt)("p",null,"\u3053\u308c\u3067\u8a2d\u5b9a\u7d42\u4e86\u3067\u3059\u3002"),(0,l.kt)("h2",{id:"cppcheck"},"cppcheck"),(0,l.kt)("p",null,"\u540c\u3058\u3088\u3046\u306a\u624b\u9806\u3067\u3001cppcheck \u3092\u767b\u9332\u3057\u307e\u3059\u3002\ncppcheck \u306f\u4ee5\u4e0b\u306e\u5834\u6240\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("i",{class:"fa fa-external-link"}),"[cppcheck](http://cppcheck.sourceforge.net/)",(0,l.kt)("p",null,"\u3053\u3053\u3067\u306f 1.74 (64bit) \u3092\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u306e\u307e\u307e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"cpplint \u3068\u540c\u3058\u3088\u3046\u306b New \u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u65b0\u898f\u306b\u4f5c\u6210\u3057\u3001Name \u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"cppcheck"),"\u3001Location, Arguments \u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"Location\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Cppcheck\\cppcheck.exe"),(0,l.kt)("br",{parentName:"p"}),"\n","Arguments\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"--enable=all --force ${resource_loc}")),(0,l.kt)("p",null,"cppcheck \u306f\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u304c\u691c\u7d22\u3067\u304d\u306a\u3044\u3068\u30a8\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059\u304c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," \u3067\u5f37\u5236\u7684\u306b\u89e3\u6790\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"sourcemonitor"},"SourceMonitor"),(0,l.kt)("p",null,"SourceMonitor \u306f\u30e1\u30c8\u30ea\u30af\u30b9\u89e3\u6790\u3092\u3084\u3063\u3066\u304f\u308c\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u5834\u6240\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("i",{class:"fa fa-external-link"}),"[SourceMonitor](http://www.campwoodsw.com/sourcemonitor.html)",(0,l.kt)("p",null,"\u3053\u3053\u3067\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u306e\u307e\u307e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3057\u305f\u3002\u3053\u3061\u3089\u306f\u6b21\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"Name\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"SourceMonitor"),(0,l.kt)("br",{parentName:"p"}),"\n","Location\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\SourceMonitor\\SourceMonitor.exe"),(0,l.kt)("br",{parentName:"p"}),"\n","Arguments\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/DC++ ${resource_loc}")),(0,l.kt)("h2",{id:"\u5b9f\u884c\u3057\u3066\u307f\u308b"},"\u5b9f\u884c\u3057\u3066\u307f\u308b"),(0,l.kt)("p",null,"\u8a08\u6e2c\u3057\u305f\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u305f\u72b6\u614b\u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"Run > External Tools...")," \u304b\u3089\u5b9f\u884c\u3057\u305f\u3044\u30c4\u30fc\u30eb\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002\ncpplint \u3068 cppcheck \u306f\u30b3\u30f3\u30bd\u30fc\u30eb\u753b\u9762\u306b\u3001SourceMonitor \u306f\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"cpplintcfg"},"CPPLINT.cfg"),(0,l.kt)("p",null,"cpplint \u306e\u8a2d\u5b9a\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"CPPLINT.cfg")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u4e2d\u3067\u8a18\u8ff0\u3057\u307e\u3059\u3002CPPLINT.cfg \u30d5\u30a1\u30a4\u30eb\u306f\u5bfe\u8c61\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u540c\u3058\u3068\u3053\u308d\u306b\u5165\u308c\u3066\u304a\u304f\u304b\u89aa\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u5165\u308c\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c8\u30c3\u30d7\u30d5\u30a9\u30eb\u30c0\u306b\u5165\u308c\u3066\u304a\u304f\u3068\u697d\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u8a2d\u5b9a\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set noparent\nlinelength=100\nfilter=-whitespace/tab,-whitespace/indent,-whitespace/comment\n")),(0,l.kt)("p",null,"linelength \u3067\u884c\u6570\u3092\u3001filter \u3067\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u7d30\u304b\u3044\u8a2d\u5b9a\u3092\u884c\u3048\u307e\u3059\u3002\n\u8a73\u7d30\u306f\u30de\u30cb\u30e5\u30a2\u30eb\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h2",{id:"sourcemonitor\u304c\u8d77\u52d5\u3057\u306a\u3044\u5834\u5408"},"SourceMonitor\u304c\u8d77\u52d5\u3057\u306a\u3044\u5834\u5408"),(0,l.kt)("p",null,"\u5bfe\u8c61\u306e\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u304c UTF-8 \u306e\u5834\u5408\u3001SourceMonitor \u304c\u8d77\u52d5\u3057\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\u4e00\u5ea6 SourceMonitor \u3092\u76f4\u63a5\u8d77\u52d5\u3057\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"File > Options > Allow parsing of UTF-8 files")," \u306b\u30c1\u30a7\u30c3\u30af\u3092\u3064\u3051\u3066\u518d\u5ea6\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"006",src:n(31784).Z,width:"621",height:"517"})),(0,l.kt)("h2",{id:"\u30e1\u30c8\u30ea\u30af\u30b9\u8a08\u6e2c\u306b\u3064\u3044\u3066"},"\u30e1\u30c8\u30ea\u30af\u30b9\u8a08\u6e2c\u306b\u3064\u3044\u3066"),(0,l.kt)("p",null,"\u8a73\u3057\u304f\u306f\u691c\u7d22\u3057\u3066\u3082\u3089\u3048\u308c\u3070\u6ca2\u5c71\u898b\u3064\u304b\u308b\u3068\u601d\u3044\u307e\u3059\u3002\n\u8907\u96d1\u5ea6\u306e\u6570\u5024\u306b\u3064\u3044\u3066\u306f 10 \u4ee5\u4e0b\u304c\u7406\u60f3\u3068\u3042\u308a\u307e\u3059\u304c\u3001\u500b\u4eba\u7684\u306b\u306f 50 \u4ee5\u4e0b\u3001\u51fa\u6765\u308c\u3070 30 \u4ee5\u4e0b\u3092\u30ad\u30fc\u30d7\u3059\u308c\u3070\u3044\u3044\u304b\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u8907\u96d1\u306a\u6761\u4ef6\u3060\u3089\u3051\u306b\u306a\u308b\u3053\u3068\u3082\u3042\u308b\u306e\u3067\u4f8b\u5916\u306f\u3042\u308b\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"metriculator"},"metriculator"),(0,l.kt)("p",null,"Eclipse \u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u306b metriculator \u3068\u3044\u3046\u30e1\u30c8\u30ea\u30af\u30b9\u8a08\u6e2c\u304c\u3042\u308a\u307e\u3059\u3002\nEclipse Marketplace \u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\uff54\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"007",src:n(72075).Z,width:"547",height:"347"})),(0,l.kt)("p",null,"\u4f7f\u3044\u65b9\u306f Project Explorer \u4e0a\u3067\u30d5\u30a9\u30eb\u30c0\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},"Run C/C++ Code Analysis")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002\n\u3057\u3070\u3089\u304f\u3059\u308b\u3068\u7d50\u679c\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"McCabe"),(0,l.kt)("td",{parentName:"tr",align:null},"cyclomatic complex"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b5\u30a4\u30af\u30ed\u30de\u30c1\u30c3\u30af\u6570\uff08\u8907\u96d1\u5ea6\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NbMembers"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Members per type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30af\u30e9\u30b9\u306e\u30e1\u30f3\u30d0\u30fc\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LSLOC"),(0,l.kt)("td",{parentName:"tr",align:null},"Logical source lines of code"),(0,l.kt)("td",{parentName:"tr",align:null},"\u884c\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EfferentCoupling"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Efferent Couplings per type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30af\u30e9\u30b9\u304c\u53c2\u7167\u3057\u3066\u3044\u308b\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NbParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of parameters per function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e1\u30bd\u30c3\u30c9\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u6570")))))}A.isMDXComponent=!0},41420:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2016-06-26-eclipse-cpp-code-analyze-001-005a4b1a46fb4c038321c1fa7d22e721.png"},61727:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},53949:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2016-06-26-eclipse-cpp-code-analyze-003-b065a267cb2fc2651e436cd66a5046c5.png"},2495:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2016-06-26-eclipse-cpp-code-analyze-004-695b97933ad9806414ba6b063bf4e049.png"},71194:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2016-06-26-eclipse-cpp-code-analyze-005-4ce6386ca8d92171dd1c09eac4cfafe3.png"},31784:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2016-06-26-eclipse-cpp-code-analyze-006-922573a5b4279be25fe5e40b3bd4e365.png"},72075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2016-06-26-eclipse-cpp-code-analyze-007-c6c3ef04aefe01bc8b470b09ae6dff23.png"}}]);