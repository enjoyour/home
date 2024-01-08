"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[303],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),b=a,d=c["".concat(p,".").concat(b)]||c[b]||m[b]||o;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:r,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>b});var n=t(7462),a=t(7294),o=t(6010),l=t(2389),i=t(7392),p=t(7094),s=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:r,block:t,defaultValue:l,values:m,groupId:b,className:d}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),f=(0,i.l)(v,((e,r)=>e.value===r.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:S,setTabGroupChoices:k}=(0,p.U)(),[T,y]=(0,a.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=b){const e=S[b];null!=e&&e!==T&&v.some((r=>r.value===e))&&y(e)}const E=e=>{const r=e.currentTarget,t=N.indexOf(r),n=v[t].value;n!==T&&(O(r),y(n),null!=b&&k(b,String(n)))},R=e=>{let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}r?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},d)},v.map((e=>{let{value:r,label:t,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===r?0:-1,"aria-selected":T===r,key:r,ref:e=>N.push(e),onKeyDown:R,onClick:E},l,{className:(0,o.Z)("tabs__item",c,l?.className,{"tabs__item--active":T===r})}),t??r)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==T})))))}function b(e){const r=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(r)},e))}},526:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905)),o=t(5488),l=t(5162);const i={title:"\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u7684\u6d41\u5f0f\u901a\u4fe1",authors:["xiongchun"],tags:["Dubbo3","Triple","\u6d88\u606f\u63a8\u9001","\u6d41\u5f0f\u901a\u4fe1","\u670d\u52a1\u7aef\u5f00\u53d1"],date:"2023-7-20",hide_table_of_contents:!1,slug:"dubbo/triple/stream_push"},p=void 0,s={permalink:"/home/blog/dubbo/triple/stream_push",source:"@site/blog/\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u6d41\u5f0f\u901a\u4fe1.md",title:"\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u7684\u6d41\u5f0f\u901a\u4fe1",description:"Apache Dubbo \u7684\u5927\u7248\u672c Dubbo3 \u53d1\u5e03\u6709\u4e00\u6bb5\u65f6\u95f4\u4e86\u3002\u6700\u8fd1\u82b1\u65f6\u95f4\u770b\u4e86\u4e00\u4e0b\uff0c\u6700\u4e3a\u4eae\u773c\u7684\u5c31\u662f\u63a8\u51fa\u4e86\u5168\u65b0\u7684\u57fa\u4e8e HTTP/2 \u4e14\u5b8c\u5168\u517c\u5bb9 gRPC \u7684 Triple \u901a\u4fe1\u534f\u8bae\u3002 Triple \u534f\u8bae\u4f7f\u7528 Protocol Buffers \u4f5c\u4e3a\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u4f46 Triple \u5b9e\u73b0\u5e76\u4e0d\u7ed1\u5b9a IDL\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Java Interface \u5b9a\u4e49\u548c\u53d1\u5e03 Triple \u670d\u52a1\u3002\u8fd9\u60f3\u5fc5\u662f\u4e60\u60ef\u4e86\u9762\u5411 Java \u63a5\u53e3\u7f16\u7a0b\u7684\u7528\u6237\u7684\u798f\u97f3\u554a\uff0c\u5426\u5219\u6bcf\u4e2a\u670d\u52a1\u90fd\u5f97\u53bb\u5b9a\u4e49\u4e00\u4e2a IDL \u7684\u8bdd\u5c31\u592a\u7e41\u7410\u4e86\u3002Triple \u534f\u8bae\u5b8c\u5168\u517c\u5bb9 gRPC \u7684\u610f\u601d\u5c31\u662f\u8bf4\uff0cTriple \u6d88\u8d39\u7aef\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u6ce8\u518c\u5230 Dubbo \u670d\u52a1\u4e2d\u5fc3\u7684 gRPC \u63d0\u4f9b\u8005\uff0cgRPC\u7684\u6d88\u8d39\u7aef\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 Triple \u63d0\u4f9b\u8005\u3002\uff08\u6ce8\u610f\uff1aTriple \u534f\u8bae\u81ea\u8eab\u5e76\u4e0d\u4f9d\u8d56 gRPC, \u53ea\u662f\u534f\u8bae\u5b9e\u73b0\u4e0a\u517c\u5bb9\u4e86 gRPC \u89c4\u8303\uff0cTriple \u4ec5\u4f9d\u8d56 protobuf-java \u505a\u5e8f\u5217\u5316\uff09",date:"2023-07-20T00:00:00.000Z",formattedDate:"2023\u5e747\u670820\u65e5",tags:[{label:"Dubbo3",permalink:"/home/blog/tags/dubbo-3"},{label:"Triple",permalink:"/home/blog/tags/triple"},{label:"\u6d88\u606f\u63a8\u9001",permalink:"/home/blog/tags/\u6d88\u606f\u63a8\u9001"},{label:"\u6d41\u5f0f\u901a\u4fe1",permalink:"/home/blog/tags/\u6d41\u5f0f\u901a\u4fe1"},{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/home/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"}],readingTime:7.27,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u5927\u718a",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiong-chun.gitee.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u7684\u6d41\u5f0f\u901a\u4fe1",authors:["xiongchun"],tags:["Dubbo3","Triple","\u6d88\u606f\u63a8\u9001","\u6d41\u5f0f\u901a\u4fe1","\u670d\u52a1\u7aef\u5f00\u53d1"],date:"2023-7-20",hide_table_of_contents:!1,slug:"dubbo/triple/stream_push"},prevItem:{title:"(AIGC) Python \u548c\u5927\u6570\u636e\u5206\u6790\u3001\u4eba\u5de5\u667a\u80fd\u662f\u4ec0\u4e48\u5173\u7cfb",permalink:"/home/blog/aigc-python-bigdata-ai"},nextItem:{title:"\u57fa\u4e8e Zipkin \u548c OpenTelemetry Java Agent \u5b9e\u73b0\u7cfb\u7edf\u8c03\u7528\u94fe\u8def\u8ddf\u8e2a",permalink:"/home/blog/observability/zipkin-opentelemetry-java-agent-tracing-quickstart"}},u={authorsImageUrls:[void 0]},c=[{value:"Triple \u8bf7\u6c42\u6a21\u578b",id:"triple-\u8bf7\u6c42\u6a21\u578b",level:2},{value:"Stream \u6d41\u5f0f\u901a\u4fe1\u5e94\u7528\u573a\u666f",id:"stream-\u6d41\u5f0f\u901a\u4fe1\u5e94\u7528\u573a\u666f",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u76f8\u5173\u7ec4\u4ef6\u4f9d\u8d56\u7248\u672c",id:"\u76f8\u5173\u7ec4\u4ef6\u4f9d\u8d56\u7248\u672c",level:3},{value:"\u5173\u952e\u914d\u7f6e\u4fe1\u606f",id:"\u5173\u952e\u914d\u7f6e\u4fe1\u606f",level:3},{value:"\u670d\u52a1\u63a5\u53e3\u5b9a\u4e49",id:"\u670d\u52a1\u63a5\u53e3\u5b9a\u4e49",level:3},{value:"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\uff08Provider\u7aef\uff09",id:"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0provider\u7aef",level:3},{value:"\u670d\u52a1\u63a5\u53e3\u8c03\u7528\uff08Consumer\u7aef\uff09",id:"\u670d\u52a1\u63a5\u53e3\u8c03\u7528consumer\u7aef",level:3},{value:"\u603b\u7ed3 Q&amp;A",id:"\u603b\u7ed3-qa",level:2},{value:"1.Triple \u534f\u8bae\u4f7f\u7528 protobuf \u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u53d1\u5e03\u670d\u52a1\u9700\u8981\u5b9a\u4e49 .proto IDL \u6587\u4ef6\u5417\uff1f",id:"1triple-\u534f\u8bae\u4f7f\u7528-protobuf-\u8fdb\u884c\u5e8f\u5217\u5316\u53d1\u5e03\u670d\u52a1\u9700\u8981\u5b9a\u4e49-proto-idl-\u6587\u4ef6\u5417",level:4},{value:"2.\u4e0a\u8ff0\u5b9e\u4f8b\u4e2d\u7684\u6d41\u5f0f\u63a8\u9001\u90fd\u662f\u4f7f\u7528 for \u8fed\u4ee3\u8f93\u51fa\u6a21\u62df\u6d41\u5f0f\u6570\u636e\u7684\u63a8\u9001\uff0c\u8fed\u4ee3\u7ed3\u675f\u76f4\u63a5\u5173\u95ed\u6d41\u3002\u5982\u4f55\u5b9e\u73b0\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\u7684\u65e0\u8fb9\u754c\u3001\u5b9a\u671f\u7b49\u7684\u6d41\u5f0f\u63a8\u9001\u529f\u80fd\uff1f",id:"2\u4e0a\u8ff0\u5b9e\u4f8b\u4e2d\u7684\u6d41\u5f0f\u63a8\u9001\u90fd\u662f\u4f7f\u7528-for-\u8fed\u4ee3\u8f93\u51fa\u6a21\u62df\u6d41\u5f0f\u6570\u636e\u7684\u63a8\u9001\u8fed\u4ee3\u7ed3\u675f\u76f4\u63a5\u5173\u95ed\u6d41\u5982\u4f55\u5b9e\u73b0\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\u7684\u65e0\u8fb9\u754c\u5b9a\u671f\u7b49\u7684\u6d41\u5f0f\u63a8\u9001\u529f\u80fd",level:4},{value:"\u6e90\u4ee3\u7801\u83b7\u53d6",id:"\u6e90\u4ee3\u7801\u83b7\u53d6",level:2}],m={toc:c};function b(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cn.dubbo.apache.org/en/"},"Apache Dubbo")," \u7684\u5927\u7248\u672c Dubbo3 \u53d1\u5e03\u6709\u4e00\u6bb5\u65f6\u95f4\u4e86\u3002\u6700\u8fd1\u82b1\u65f6\u95f4\u770b\u4e86\u4e00\u4e0b\uff0c\u6700\u4e3a\u4eae\u773c\u7684\u5c31\u662f\u63a8\u51fa\u4e86\u5168\u65b0\u7684\u57fa\u4e8e HTTP/2 \u4e14\u5b8c\u5168\u517c\u5bb9 gRPC \u7684 Triple \u901a\u4fe1\u534f\u8bae\u3002 Triple \u534f\u8bae\u4f7f\u7528 Protocol Buffers \u4f5c\u4e3a\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u4f46 Triple \u5b9e\u73b0\u5e76\u4e0d\u7ed1\u5b9a IDL\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Java Interface \u5b9a\u4e49\u548c\u53d1\u5e03 Triple \u670d\u52a1\u3002\u8fd9\u60f3\u5fc5\u662f\u4e60\u60ef\u4e86\u9762\u5411 Java \u63a5\u53e3\u7f16\u7a0b\u7684\u7528\u6237\u7684\u798f\u97f3\u554a\uff0c\u5426\u5219\u6bcf\u4e2a\u670d\u52a1\u90fd\u5f97\u53bb\u5b9a\u4e49\u4e00\u4e2a IDL \u7684\u8bdd\u5c31\u592a\u7e41\u7410\u4e86\u3002Triple \u534f\u8bae\u5b8c\u5168\u517c\u5bb9 gRPC \u7684\u610f\u601d\u5c31\u662f\u8bf4\uff0cTriple \u6d88\u8d39\u7aef\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u6ce8\u518c\u5230 Dubbo \u670d\u52a1\u4e2d\u5fc3\u7684 gRPC \u63d0\u4f9b\u8005\uff0cgRPC\u7684\u6d88\u8d39\u7aef\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 Triple \u63d0\u4f9b\u8005\u3002\uff08\u6ce8\u610f\uff1aTriple \u534f\u8bae\u81ea\u8eab\u5e76\u4e0d\u4f9d\u8d56 gRPC, \u53ea\u662f\u534f\u8bae\u5b9e\u73b0\u4e0a\u517c\u5bb9\u4e86 gRPC \u89c4\u8303\uff0cTriple \u4ec5\u4f9d\u8d56 protobuf-java \u505a\u5e8f\u5217\u5316\uff09"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\uff0cDubbo3 \u5b98\u65b9\u652f\u6301\u7684\u901a\u4fe1\u534f\u8bae\u6709\uff1a\u57fa\u4e8e HTTP/2 \u7684 Triple \u534f\u8bae \u548c \u57fa\u4e8e TCP \u7684 Dubbo2 \u534f\u8bae\u3002\u9664\u6b64\u4e4b\u5916\uff0cDubbo \u6846\u67b6\u652f\u6301\u4efb\u610f\u7b2c\u4e09\u65b9\u901a\u4fe1\u534f\u8bae\uff0c\u5982\u5b98\u65b9\u652f\u6301\u7684 gRPC\u3001Thrift\u3001REST\u3001JsonRPC\u3001Hessian2 \u7b49\u3002\u66f4\u591a\u534f\u8bae\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u6269\u5c55\u5b9e\u73b0\u3002\u8fd9\u5bf9\u4e8e\u5fae\u670d\u52a1\u5b9e\u8df5\u4e2d\u7ecf\u5e38\u8981\u5904\u7406\u7684\u591a\u534f\u8bae\u901a\u4fe1\u573a\u666f\u975e\u5e38\u6709\u7528\u3002")),(0,a.kt)("h2",{id:"triple-\u8bf7\u6c42\u6a21\u578b"},"Triple \u8bf7\u6c42\u6a21\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UNARY\uff1a\u4f20\u7edf\u7684 Request/Response \u4e00\u5143\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"SERVER_STREAM\uff1a\u670d\u52a1\u7aef\u6d41\u63a8\u9001\u3002\uff08\u670d\u52a1\u7aef\u50cf\u5ba2\u6237\u7aef\u4f7f\u7528\u6d41\u7684\u65b9\u5f0f\u63a8\u9001\u6570\u636e\uff09"),(0,a.kt)("li",{parentName:"ul"},"CLIENT_STREAM\uff1a\u5ba2\u6237\u7aef\u6d41\u63a8\u9001\u3002\uff08\u5ba2\u6237\u7aef\u50cf\u670d\u52a1\u7aef\u4f7f\u7528\u6d41\u7684\u65b9\u5f0f\u63a8\u9001\u6570\u636e\uff09"),(0,a.kt)("li",{parentName:"ul"},"BIDIRECTIONAL_STREAM\uff1a\u53cc\u5411\u6d41\u63a8\u9001\u3002\uff08\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e92\u76f8\u4f7f\u7528\u6d41\u7684\u65b9\u5f0f\u63a8\u9001\u6570\u636e\uff09")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1aCLIENT_STREAM \u548c BIDIRECTIONAL_STREAM \u662f\u540c\u4e00\u4e2a\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4ece\u540e\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u3002")),(0,a.kt)("h2",{id:"stream-\u6d41\u5f0f\u901a\u4fe1\u5e94\u7528\u573a\u666f"},"Stream \u6d41\u5f0f\u901a\u4fe1\u5e94\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u9700\u8981\u53d1\u9001\u5927\u91cf\u6570\u636e\u3002\u8fd9\u4e9b\u6570\u636e\u65e0\u6cd5\u88ab\u653e\u5728\u4e00\u4e2a RPC \u7684\u8bf7\u6c42\u6216\u54cd\u5e94\u4e2d\uff0c\u9700\u8981\u5206\u6279\u53d1\u9001\uff0c\u4f46\u5e94\u7528\u5c42\u5982\u679c\u6309\u7167\u4f20\u7edf\u7684\u591a\u6b21 RPC \u65b9\u5f0f\u65e0\u6cd5\u89e3\u51b3\u987a\u5e8f\u548c\u6027\u80fd\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6d41\u5f0f\u573a\u666f\u3002\u6570\u636e\u9700\u8981\u6309\u7167\u53d1\u9001\u987a\u5e8f\u5904\u7406, \u6570\u636e\u672c\u8eab\u662f\u6ca1\u6709\u786e\u5b9a\u8fb9\u754c\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u9001\u7c7b\u573a\u666f\uff0c\u591a\u4e2a\u6d88\u606f\u5728\u540c\u4e00\u4e2a\u8c03\u7528\u7684\u4e0a\u4e0b\u6587\u4e2d\u88ab\u53d1\u9001\u548c\u5904\u7406\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5b9e\u4f8b\u4f7f\u7528\u63a5\u53e3\u58f0\u660e\u7684\u65b9\u5f0f\u6765\u5b9a\u4e49\u670d\u52a1\uff0c\u4e0d\u4f7f\u7528 .proto IDL \u6587\u4ef6\u3002")),(0,a.kt)("h3",{id:"\u76f8\u5173\u7ec4\u4ef6\u4f9d\u8d56\u7248\u672c"},"\u76f8\u5173\u7ec4\u4ef6\u4f9d\u8d56\u7248\u672c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SpringBoot: 2.7.16 \u6216 3.X"),(0,a.kt)("li",{parentName:"ul"},"Nacos Server: 2.2.3"),(0,a.kt)("li",{parentName:"ul"},"nacos-config-spring-boot-starter: 2.2.3"),(0,a.kt)("li",{parentName:"ul"},"dubbo-spring-boot-starter: 3.2.7")),(0,a.kt)("h3",{id:"\u5173\u952e\u914d\u7f6e\u4fe1\u606f"},"\u5173\u952e\u914d\u7f6e\u4fe1\u606f"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Provider \u914d\u7f6e",label:"Provider \u914d\u7f6e",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"dubbo:\n  registry:\n    address: nacos://10.141.17.143:8848?namespace=dev\n    username: nacos\n    password: nacos\n  protocol:\n    name: tri\n    port: -1\n"))),(0,a.kt)(l.Z,{value:"Consumer \u914d\u7f6e",label:"Consumer \u914d\u7f6e",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"dubbo:\n  registry:\n    address: nacos://10.141.17.143:8848?namespace=dev\n    username: nacos\n    password: nacos\n  protocol:\n    name: tri\n    port: -1\n  application:\n    qos-port: 22224\n  consumer:\n    check: false\n")))),(0,a.kt)("h3",{id:"\u670d\u52a1\u63a5\u53e3\u5b9a\u4e49"},"\u670d\u52a1\u63a5\u53e3\u5b9a\u4e49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// UNARY \u4f20\u7edf\u4e00\u5143\u8c03\u7528\uff08request / response\uff09\nString greet(String request);\n\n//SERVER_STREAM \u670d\u52a1\u7aef\u63a8\u9001\nvoid greetServerStream(String request, StreamObserver<String> response);\n\n// BIDIRECTIONAL_STREAM / CLIENT_STREAM \u5ba2\u6237\u7aef\u6d41\u63a8\u9001\u548c\u53cc\u5411\u6d41\u63a8\u9001\n// !\u6ce8\u610f \u5165\u53c2\u4e3a\u54cd\u5e94\u6d41 response\uff1b\u51fa\u53c2\u4e3a\u8bf7\u6c42\u6d41 request\nStreamObserver<String> greetStream(StreamObserver<String> response);\n")),(0,a.kt)("h3",{id:"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0provider\u7aef"},"\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\uff08Provider\u7aef\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'@DubboService(version = "1.0", group = "temp_group")\npublic class GreetServiceImpl implements GreetService {\n    //public static Map<String, StreamObserver<String>> observerMap = Maps.newHashMap();\n\n    // UNARY\u8c03\u7528 REQUEST/RESPONSE\n    @Override\n    public String greet(String request) {\n        return "Hi, " + request;\n    }\n\n    // \u670d\u52a1\u5668\u7aef\u54cd\u5e94\u6d41\u63a8\u9001\n    @Override\n    public void greetServerStream(String request, StreamObserver<String> response) {\n        for (int i = 0; i < 10; i++) {\n            response.onNext("\u54cd\u5e94\u6d41\uff1ahello, " + request);\n        }\n        // \u5982\u679c\u60f3\u6301\u7eed\u7684\u5bf9\u5ba2\u6237\u7aef\u63a8\u9001\uff0c\u5219\u522b\u5173\u95ed\u8fd9\u4e2aresponse\u6d41\uff0c\u628aresponse\u4fdd\u5b58\u4e0b\u6765\uff0c\u5728\u9700\u8981\u63a8\u9001\u6570\u636e\u7684\u65f6\u5019\u89e6\u53d1response.onNext(\uff09\u65b9\u6cd5\u5373\u53ef\u3002\n        response.onCompleted();\n    }\n\n    // \u8bf7\u6c42\u6d41\u6216\u53cc\u5411\u6d41\u63a8\u9001\n    @Override\n    public StreamObserver<String> greetStream(StreamObserver<String> response) {\n        // \u8fd9\u91cc new \u7684\u8fd9\u4e2a\u662f\u8bf7\u6c42\u6d41\n        return new StreamObserver<String>() {\n            @Override\n            public void onNext(String data) {\n                response.onNext("\u54cd\u5e94\u6d41: " + data);\n            }\n            @Override\n            public void onError(Throwable throwable) {\n                throwable.printStackTrace();\n            }\n            @Override\n            public void onCompleted() {\n                // \u68c0\u6d4b\u5230 Request \u5173\u95ed\u5219\u628a Response \u4e5f\u5173\u95ed\uff0cBI \u53cc\u5411\u6d41\u7ed3\u675f\u3002\n                response.onCompleted();\n            }\n        };\n    }\n}\n')),(0,a.kt)("h3",{id:"\u670d\u52a1\u63a5\u53e3\u8c03\u7528consumer\u7aef"},"\u670d\u52a1\u63a5\u53e3\u8c03\u7528\uff08Consumer\u7aef\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'@DubboReference(version = "1.0", group = "temp_provider")\nprivate GreetService tempService;\n\n// \u4f20\u7edf\u4e00\u5143\u8c03\u7528\n@RequestMapping ("/greet")\npublic void greet(HttpServletRequest request) {\n    String response = tempService.greet("HY");\n    log.info(response);\n}\n\n// \u670d\u52a1\u7aef\u63a8\u9001\n@PostMapping("/greetServerStream")\npublic void greetServerStream(HttpServletRequest request) {\n    String clientId = System.getProperty("clientId", "N/A");\n    tempService.greetServerStream(clientId, new StdoutStreamObserver<>("greetServerStream"));\n\n}\n\n// \u5ba2\u6237\u7aef\u63a8\u9001 & \u53cc\u5411\u63a8\u9001\n@PostMapping("/greetStream")\npublic void greetStream() {\n    final StreamObserver<String> request = tempService.greetStream(new StdoutStreamObserver<>("greetStream"));\n    for (int i = 0; i < 10; i++) {\n        request.onNext("\u8bf7\u6c42\u6d41\u6d88\u606f\uff1a" +  "Data From Client");\n    }\n    request.onCompleted();\n}\n\n@Slf4j\nstatic class StdoutStreamObserver<T> implements StreamObserver<T>{\n\n    private final String name;\n\n    public StdoutStreamObserver(String name){\n        this.name = name;\n    }\n    @Override\n    public void onNext(T data) {\n        log.info("\u5ba2\u6237\u7aef\u6536\u5230\u6765\u81ea\u670d\u52a1\u7aef\u7684\u63a8\u9001\u4fe1\u606f:{}", data);\n    }\n    @Override\n    public void onError(Throwable throwable) {\n        log.error(throwable.getMessage(), throwable);\n    }\n    @Override\n    public void onCompleted() {\n        log.info("{} stream completed", name);\n    }\n}\n')),(0,a.kt)("h2",{id:"\u603b\u7ed3-qa"},"\u603b\u7ed3 Q&A"),(0,a.kt)("h4",{id:"1triple-\u534f\u8bae\u4f7f\u7528-protobuf-\u8fdb\u884c\u5e8f\u5217\u5316\u53d1\u5e03\u670d\u52a1\u9700\u8981\u5b9a\u4e49-proto-idl-\u6587\u4ef6\u5417"},"1.Triple \u534f\u8bae\u4f7f\u7528 protobuf \u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u53d1\u5e03\u670d\u52a1\u9700\u8981\u5b9a\u4e49 .proto IDL \u6587\u4ef6\u5417\uff1f"),(0,a.kt)("p",null,"\u7b54\uff1a\u53ef\u4ee5\u8fd9\u4e48\u505a\uff0c\u4f46\u662f\u6ca1\u5fc5\u8981\u3002\u8fd9\u6837\u6bd4\u8f83\u7e41\u7410\u4e5f\u4e0d\u7b26\u5408\u6211\u4eecJava\u9762\u5411\u63a5\u53e3\u7684\u5f00\u53d1\u4e60\u60ef\u3002\u4e8b\u5b9e\u4e0a\uff0cDubbo\u6846\u67b6\u5df2\u7ecf\u505a\u4e86\u5305\u88c5\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4e49 Java \u63a5\u53e3\u4f7f\u7528 POJO \u7684\u65b9\u5f0f\u6765\u53d1\u5e03\u670d\u52a1\u3002\u90a3\u4ec0\u4e48\u65f6\u5019\u624d\u9700\u8981\u5b9a\u4e49 .proto IDL \u6587\u4ef6\u5462\uff1f\u5f53\u9700\u8981\u5f02\u6784\u8de8\u8bed\u8a00\u4ea4\u4e92\u8c03\u7528\u7684\u65f6\u5019\u624d\u9700\u8981\u3002\uff08\u4e0a\u8ff0\u8bf4\u6cd5\u540c\u65f6\u9002\u7528 Unary \u8c03\u7528\u548c Stream \u8c03\u7528\uff09"),(0,a.kt)("h4",{id:"2\u4e0a\u8ff0\u5b9e\u4f8b\u4e2d\u7684\u6d41\u5f0f\u63a8\u9001\u90fd\u662f\u4f7f\u7528-for-\u8fed\u4ee3\u8f93\u51fa\u6a21\u62df\u6d41\u5f0f\u6570\u636e\u7684\u63a8\u9001\u8fed\u4ee3\u7ed3\u675f\u76f4\u63a5\u5173\u95ed\u6d41\u5982\u4f55\u5b9e\u73b0\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\u7684\u65e0\u8fb9\u754c\u5b9a\u671f\u7b49\u7684\u6d41\u5f0f\u63a8\u9001\u529f\u80fd"},"2.\u4e0a\u8ff0\u5b9e\u4f8b\u4e2d\u7684\u6d41\u5f0f\u63a8\u9001\u90fd\u662f\u4f7f\u7528 for \u8fed\u4ee3\u8f93\u51fa\u6a21\u62df\u6d41\u5f0f\u6570\u636e\u7684\u63a8\u9001\uff0c\u8fed\u4ee3\u7ed3\u675f\u76f4\u63a5\u5173\u95ed\u6d41\u3002\u5982\u4f55\u5b9e\u73b0\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\u7684\u65e0\u8fb9\u754c\u3001\u5b9a\u671f\u7b49\u7684\u6d41\u5f0f\u63a8\u9001\u529f\u80fd\uff1f"),(0,a.kt)("p",null,"\u7b54\uff1a\u53ea\u9700\u8981\u4fdd\u5b58\u8bf7\u6c42\u6d41\u6216\u54cd\u5e94\u6d41\u5bf9\u8c61\uff0c\u4e0d\u8c03\u7528 onComplete() \u65b9\u6cd5\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u60f3\u63a8\u9001\u6570\u636e\u7684\u65f6\u5019\u8c03\u7528\u5176\u5bf9\u5e94\u7684onNext()\u65b9\u6cd5\u6765\u5b9e\u73b0\u8bf7\u6c42\u6d41\u6216\u54cd\u5e94\u6d41\u7684\u6570\u636e\u63a8\u9001\u529f\u80fd\u3002\uff08\u6bd4\u5982\uff1a\u5f53\u67d0\u4e2a\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u67d0\u4e2a\u5b9a\u65f6\u4efb\u52a1\u6267\u884c\u65f6\u7b49\uff09"),(0,a.kt)("h2",{id:"\u6e90\u4ee3\u7801\u83b7\u53d6"},"\u6e90\u4ee3\u7801\u83b7\u53d6"),(0,a.kt)("p",null,"\u672c\u5b9e\u4f8b\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://pangu.pulanit.com"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u8303\u4f8b\u96c6\u5408\u4e2d\u7684\u4e00\u7ec4\u8303\u4f8b\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u94fe\u63a5\u83b7\u53d6\u5168\u90e8\u8303\u4f8b\u6e90\u4ee3\u7801\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-triple"},"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-triple")))}b.isMDXComponent=!0}}]);