webpackJsonp([94],{3:function(n,a,s){"use strict";s(7),s(6);var t=Math.floor(window.devicePixelRatio||1);t>=2&&document.querySelector("html").classList.add("pixel-ratio-"+t)},6:function(n,a){},7:function(n,a){},22:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(p){a.indexOf(p)!==-1?s[p]=n[p]:t[p]=n[p]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},54:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function e(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):e(n,a))}function i(n){return"string"==typeof n}function r(n){return i(n.type)&&E(n.props.children)?g.cloneElement(n,{},n.props.children.split("").join(" ")):i(n)?(E(n)&&(n=n.split("").join(" ")),g.createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var k=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},f=function(){function n(n,a){var s=[],t=!0,p=!1,e=void 0;try{for(var o,c=n[Symbol.iterator]();!(t=(o=c.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){p=!0,e=l}finally{try{!t&&c["return"]&&c["return"]()}finally{if(p)throw e}}return s}return function(a,s){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=s(1),g=p(d),m=s(2),y=t(m),h=s(43),v=t(h),b=s(22),w=t(b),j=/^[\u4e00-\u9fa5]{2}$/,E=j.test.bind(j),O=function(n){function a(){c(this,a);for(var s=arguments.length,t=Array(s),p=0;p<s;p++)t[p]=arguments[p];var e=l(this,n.call.apply(n,[this].concat(t)));return e.onClick=function(){e.props.onClick(e)},e}return u(a,n),a.prototype.render=function(){var n,a=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),s=f(a,2),t=s[0],p=t.children,e=t.className,c=t.prefixCls,l=t.type,u=t.size,i=t.ghost,d=t.inline,m=t.disabled,h=t.htmlType,b=t.icon,j=t.loading,E=s[1],O=(0,y["default"])((n={},o(n,e,e),o(n,c,!0),o(n,c+"-primary","primary"===l),o(n,c+"-ghost",i),o(n,c+"-warning","warning"===l),o(n,c+"-small","small"===u&&d),o(n,c+"-loading",j),o(n,c+"-inline",d),o(n,c+"-disabled",m),n)),C=j?"loading":b,N=g.Children.map(p,r);return g.createElement("button",k({},E,{type:h||"button",className:O,disabled:m,onClick:this.onClick}),C?g.createElement(v["default"],{type:C}):null,N)},a}(g.Component);a["default"]=O,O.propTypes={prefixCls:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),icon:d.PropTypes.bool},O.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=a["default"]},56:function(n,a,s){"use strict";s(3),s(61),s(59)},59:function(n,a){},139:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function e(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):e(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},r=function(){function n(n,a){var s=[],t=!0,p=!1,e=void 0;try{for(var o,c=n[Symbol.iterator]();!(t=(o=c.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){p=!0,e=l}finally{try{!t&&c["return"]&&c["return"]()}finally{if(p)throw e}}return s}return function(a,s){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=s(1),f=p(k),d=s(2),g=t(d),m=s(43),y=t(m),h=s(22),v=t(h),b=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=(0,v["default"])(this.props,["prefixCls","children","mode","className","iconName","leftContent","rightContent","onLeftClick"]),s=r(a,2),t=s[0],p=t.prefixCls,e=t.children,c=t.mode,l=t.className,u=t.iconName,k=t.leftContent,d=t.rightContent,m=t.onLeftClick,h=s[1],b=(0,g["default"])((n={},o(n,l,l),o(n,p,!0),o(n,p+"-"+c,!0),n));return f.createElement("div",i({},h,{className:b}),f.createElement("div",{className:p+"-left",onClick:m},u?f.createElement("span",{className:p+"-left-icon"},f.createElement(y["default"],{type:u})):null,f.createElement("span",{className:p+"-left-content"},k)),f.createElement("div",{className:p+"-title"},e),f.createElement("div",{className:p+"-right"},d))},a}(f.Component);a["default"]=b,b.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=a["default"]},140:function(n,a,s){"use strict";s(3),s(171)},171:function(n,a){},727:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(56),s(54)),e=t(p),o=(s(140),s(139)),c=t(o),l=s(1),u=t(l),i=s(4);t(i);n.exports={content:[["p","\u4e3b\u6309\u94ae\u548c\u6b21\u6309\u94ae\u53ef\u72ec\u7acb\u4f7f\u7528\uff0c\u9700\u8981\u5f3a\u5f15\u5bfc\u7528\u4e3b\u6309\u94ae\u3002"],["p","\u5728\u6709\u591a\u4e2a\u64cd\u4f5c\u540c\u65f6\u51fa\u73b0\u65f6\uff0c\u9700\u8981\u533a\u5206\u4e3b\u6b21\u4f18\u5148\u7ea7\uff0c\u4e3b\u6309\u94ae\u5728\u540c\u4e00\u4e2a\u64cd\u4f5c\u533a\u57df\u5efa\u8bae\u6700\u591a\u51fa\u73b0\u4e00\u6b21\u3002"]],meta:{order:0,title:"\u7c7b\u578b/type",filename:"components/button/demo/basic.web.md",id:"components-button-demo-basic.web"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// \u6b64\u5904\u7528\u4f5cdemo\u5c55\u793a\uff0c\u4e0d\u8981\u7528\u5728\u751f\u4ea7\u73af\u5883</span>\n<span class="token keyword" >this</span><span class="token punctuation" >.</span>customNavFlag <span class="token operator" >=</span> <span class="token boolean" >true</span><span class="token punctuation" >;</span>\n\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> NavBar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ButtonExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      dark<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >switchDark</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> dark<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>dark <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>button-container<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> backgroundColor<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>dark <span class="token operator" >?</span> <span class="token string" >\'black\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'white\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token string" >\'100%\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >rightContent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>\n          <span class="token operator" >&lt;</span>span\n            style<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> cursor<span class="token punctuation" >:</span> <span class="token string" >\'pointer\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>switchDark<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>dark <span class="token operator" >?</span> <span class="token string" >\'\u767d\u5929\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u591c\u95f4\'</span><span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n          <span class="token punctuation" >)</span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          \u7c7b\u578b<span class="token operator" >/</span>type\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'0 8px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-p<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>type<span class="token operator" >=</span><span class="token string" >"primary"</span> <span class="token operator" >-</span> \u7528\u4e8e\u4e3b\u8981\u64cd\u4f5c\u6216\u5fc5\u987b\u70b9\u51fb\u624d\u80fd\u5b8c\u6210\u6d41\u7a0b\u7684\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>e <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>primary\u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-p<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9ed8\u8ba4type <span class="token operator" >-</span> \u7528\u4e8e\u8f83\u8f7b\u6216\u4e0d\u5e0c\u671b\u5f15\u5bfc\u7528\u6237\u4f7f\u7528\u7684\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span><span class="token keyword" >default</span> \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-p<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u63d0\u9192\u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>warning \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-p<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6dfb\u52a0 loading \u5c5e\u6027\u5373\u53ef\u8ba9\u6309\u94ae\u5904\u4e8e\u52a0\u8f7d\u72b6\u6001<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >loading</span><span class="token punctuation" >></span></span>loading \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ButtonExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){this.customNavFlag=!0;var n=u["default"].createClass({displayName:"ButtonExample",getInitialState:function(){return{dark:!1}},switchDark:function(){this.setState({dark:!this.state.dark})},render:function(){return u["default"].createElement("div",{className:"button-container",style:{backgroundColor:this.state.dark?"black":"white",height:"100%"}},u["default"].createElement(c["default"],{iconName:!1,rightContent:u["default"].createElement("span",{style:{cursor:"pointer"},onClick:this.switchDark},this.state.dark?"\u767d\u5929":"\u591c\u95f4")},"\u7c7b\u578b/type"),u["default"].createElement("div",{style:{margin:"0 8px"}},u["default"].createElement("div",{style:{margin:"32px 0"}},u["default"].createElement("p",{className:"demo-p"},'type="primary" - \u7528\u4e8e\u4e3b\u8981\u64cd\u4f5c\u6216\u5fc5\u987b\u70b9\u51fb\u624d\u80fd\u5b8c\u6210\u6d41\u7a0b\u7684\u64cd\u4f5c'),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{type:"primary",onClick:function(n){return console.log(n)}},"primary\u6309\u94ae")),u["default"].createElement("div",{style:{margin:"32px 0"}},u["default"].createElement("p",{className:"demo-p"},"\u9ed8\u8ba4type - \u7528\u4e8e\u8f83\u8f7b\u6216\u4e0d\u5e0c\u671b\u5f15\u5bfc\u7528\u6237\u4f7f\u7528\u7684\u64cd\u4f5c"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],null,"default \u6309\u94ae")),u["default"].createElement("div",{style:{margin:"32px 0"}},u["default"].createElement("p",{className:"demo-p"},"\u63d0\u9192\u6309\u94ae"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{type:"warning"},"warning \u6309\u94ae")),u["default"].createElement("div",{style:{margin:"32px 0"}},u["default"].createElement("p",{className:"demo-p"},"\u6dfb\u52a0 loading \u5c5e\u6027\u5373\u53ef\u8ba9\u6309\u94ae\u5904\u4e8e\u52a0\u8f7d\u72b6\u6001"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{loading:!0},"loading \u6309\u94ae"))))}});return u["default"].createElement(n,null)}}}});