"use strict";(self.webpackChunkmebiusbox_docusaurus=self.webpackChunkmebiusbox_docusaurus||[]).push([[8651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,b=s["".concat(p,".").concat(c)]||s[c]||u[c]||o;return n?r.createElement(b,l(l({ref:t},m),{},{components:n})):r.createElement(b,l({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={layout:"post",title:"Eclipse\uff1a\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\u306bBOM(UTF-8)\u3092\u3064\u3051\u308b",category:"note",tags:["eclipse"],authors:["mebiusbox"]},l=void 0,i={permalink:"/Cartoon-Street/blog/2016/06/27/eclipse-add-bom",source:"@site/blog/2016-06-27-eclipse-add-bom.md",title:"Eclipse\uff1a\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\u306bBOM(UTF-8)\u3092\u3064\u3051\u308b",description:"Eclipse \u3067\u65b0\u898f\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3068 Workspace \u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30a8\u30f3\u30b3\u30fc\u30c9\u3067\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002",date:"2016-06-27T00:00:00.000Z",formattedDate:"2016\u5e746\u670827\u65e5",tags:[{label:"eclipse",permalink:"/Cartoon-Street/blog/tags/eclipse"}],readingTime:1.8,hasTruncateMarker:!1,authors:[{name:"Ishikawa Masashi",title:"enginner",url:"https://github.com/Ishikawa-Masashi",imageURL:"https://github.com/Ishikawa-Masashi.png",key:"mebiusbox"}],frontMatter:{layout:"post",title:"Eclipse\uff1a\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\u306bBOM(UTF-8)\u3092\u3064\u3051\u308b",category:"note",tags:["eclipse"],authors:["mebiusbox"]},prevItem:{title:"rar\u5f62\u5f0f\u304b\u3089zip\u5f62\u5f0f\u306b\u4e00\u62ec\u5909\u63db\u3059\u308b\u30d0\u30c3\u30c1\u30d5\u30a1\u30a4\u30eb",permalink:"/Cartoon-Street/blog/2016/06/28/rar2zip"},nextItem:{title:"Eclipse\uff1aC++\u9759\u7684\u30c1\u30a7\u30c3\u30af\u74b0\u5883",permalink:"/Cartoon-Street/blog/2016/06/26/eclipse-cpp-code-analyze"}},p={authorsImageUrls:[void 0]},d=[{value:"AddBom.rb",id:"addbomrb",level:2},{value:"AddBom.py",id:"addbompy",level:2},{value:"eclipse \u306b\u5916\u90e8\u30c4\u30fc\u30eb\u3068\u3057\u3066\u767b\u9332\u3059\u308b",id:"eclipse-\u306b\u5916\u90e8\u30c4\u30fc\u30eb\u3068\u3057\u3066\u767b\u9332\u3059\u308b",level:2},{value:"AddBom.rb \u306e\u5834\u5408",id:"addbomrb-\u306e\u5834\u5408",level:3},{value:"AddBom.py \u306e\u5834\u5408",id:"addbompy-\u306e\u5834\u5408",level:3},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Eclipse \u3067\u65b0\u898f\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3068 Workspace \u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30a8\u30f3\u30b3\u30fc\u30c9\u3067\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\n\u6587\u5b57\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092 UTF-8 \u306b\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u3001\u65b0\u898f\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u3082 BOM \u306f\u4ed8\u304d\u307e\u305b\u3093\u3002\n\u305d\u3053\u3067\u3001BOM \u3092\u4ed8\u52a0\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f8\u304d\u307e\u3057\u305f\u3002Ruby \u7248\u3068 Python \u7248\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"addbomrb"},"AddBom.rb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'#! /usr/bin/env ruby\n\npath = ARGV[0]\nputs "Add BOM to #{path}"\nsrc = File.read(path)\nbom = "\\xEF\\xBB\\xBF"\nif src.index(bom) == 0\n    raise "BOM already exists"\nend\n\nFile.open(path, "w") do |io|\n    io << bom\n    io << src\nend\n')),(0,a.kt)("h2",{id:"addbompy"},"AddBom.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding:utf-8\nimport os\nimport sys\n\ndef main(path):\n    f = open(path, mode=\'rb\')\n    data = f.read()\n    f.close()\n\n    utf8bom = "\\xef\\xbb\\xbf"\n    if len(data) >= 3:\n        if data[0:3] == utf8bom:\n            print "BOM already exists " + path\n            return 0\n\n    f = open(path, mode="wb")\n    f.write(utf8bom)\n    f.write(data)\n    f.close()\n    print "Add BOM to " + path\n    return 0\n\nif __name__ == \'__main__\':\n    if len(sys.argv) < 2:\n         print sys.argv\n         print "addbom <path>"\n         sys.exit(0)\n    else:\n        sys.exit(main(sys.argv[1]))\n')),(0,a.kt)("h2",{id:"eclipse-\u306b\u5916\u90e8\u30c4\u30fc\u30eb\u3068\u3057\u3066\u767b\u9332\u3059\u308b"},"eclipse \u306b\u5916\u90e8\u30c4\u30fc\u30eb\u3068\u3057\u3066\u767b\u9332\u3059\u308b"),(0,a.kt)("p",null,"\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u304b\u3089 ",(0,a.kt)("inlineCode",{parentName:"p"},"Run > External Tools > External Tools Configurations...")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002\n\u65b0\u898f\u4f5c\u6210\u3057\u3001AddBom.rb \u3082\u3057\u304f\u306f AddBom.py \u3092\u767b\u9332\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"addbomrb-\u306e\u5834\u5408"},"AddBom.rb \u306e\u5834\u5408"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8a2d\u5b9a"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"AddBom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Location"),(0,a.kt)("td",{parentName:"tr",align:null},"ruby.exe \u306e\u30d1\u30b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Arguments"),(0,a.kt)("td",{parentName:"tr",align:null},"\\<AddBom.rb\u306e\u30d1\u30b9",">"," ${resource_loc}")))),(0,a.kt)("h3",{id:"addbompy-\u306e\u5834\u5408"},"AddBom.py \u306e\u5834\u5408"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8a2d\u5b9a"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"AddBom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Location"),(0,a.kt)("td",{parentName:"tr",align:null},"python.exe \u306e\u30d1\u30b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Arguments"),(0,a.kt)("td",{parentName:"tr",align:null},"\\<AddBom.py\u306e\u30d1\u30b9",">"," ${resource_loc}")))),(0,a.kt)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,a.kt)("p",null,"\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u305f\u72b6\u614b\u3067 AddBom \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\nBOM \u304c\u306a\u3051\u308c\u3070\u8ffd\u52a0\u3055\u308c\u3001\u3059\u3067\u306b\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308c\u3070\u4f55\u3082\u3057\u307e\u305b\u3093\u3002\n\u307e\u305f\u3001\u7a7a\u30d5\u30a1\u30a4\u30eb\u3067\u306a\u304f\u3066\u3082\u554f\u984c\u306a\u304f\u52d5\u4f5c\u3057\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);