(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{137:function(t,e,n){"use strict";var r=u("start"),i=u("end");function o(t){return{start:r(t),end:i(t)}}function u(t){return e.displayName=t,e;function e(e){var n=e&&e.position&&e.position[t]||{};return{line:n.line||null,column:n.column||null,offset:isNaN(n.offset)?null:n.offset}}}t.exports=o,o.start=r,o.end=i},138:function(t,e,n){"use strict";t.exports=function(t,e,n){var r=e&&e.type,i=o.call(t.handlers,r)?t.handlers[r]:t.unknownHandler;if(!r)throw new Error("Expected node, got `"+e+"`");return("function"==typeof i?i:u)(t,e,n)};var r=n(38),i=n(36),o={}.hasOwnProperty;function u(t,e){return function(t){var e=t.data||{};if(o.call(e,"hName")||o.call(e,"hProperties")||o.call(e,"hChildren"))return!1;return"value"in t}(e)?t.augment(e,r("text",e.value)):t(e,"div",i(t,e))}},139:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"hr")}},140:function(t,e,n){"use strict";t.exports=function(t,e){var n,o,u={},s=e.ordered?"ol":"ul",a=-1;"number"==typeof e.start&&1!==e.start&&(u.start=e.start);n=i(t,e),o=n.length;for(;++a<o;)if(n[a].properties.className&&-1!==n[a].properties.className.indexOf("task-list-item")){u.className=["contains-task-list"];break}return t(e,s,u,r(n,!0))};var r=n(57),i=n(36)},141:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.footnoteOrder,i=String(e.identifier);-1===n.indexOf(i)&&n.push(i);return t(e.position,"sup",{id:"fnref-"+i},[t(e,"a",{href:"#fn-"+i,className:["footnote-ref"]},[r("text",e.label||i)])])};var r=n(38)},142:function(t,e,n){"use strict";t.exports=function(t,e){var n,o,u,s=e.referenceType,a="]";"collapsed"===s?a+="[]":"full"===s&&(a+="["+(e.label||e.identifier)+"]");if("imageReference"===e.type)return r("text","!["+e.alt+a);n=i(t,e),(o=n[0])&&"text"===o.type?o.value="["+o.value:n.unshift(r("text","["));(u=n[n.length-1])&&"text"===u.type?u.value+=a:n.push(r("text",a));return n};var r=n(38),i=n(36)},319:function(t,e,n){"use strict";t.exports=n(320)},320:function(t,e,n){"use strict";t.exports=function(t,e){var n=function(t,e){var n=e||{};void 0===n.allowDangerousHTML||p||(p=!0,console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));var r=n.allowDangerousHtml||n.allowDangerousHTML,a={};return d.dangerous=r,d.definition=s(t,n),d.footnoteById=a,d.footnoteOrder=[],d.augment=c,d.handlers=Object.assign({},l,n.handlers),d.unknownHandler=n.unknownHandler,i(t,"footnoteDefinition",(function(t){var e=String(t.identifier).toUpperCase();f.call(a,e)||(a[e]=t)})),d;function c(t,e){var n,r;return t&&"data"in t&&(n=t.data,"element"===e.type&&n.hName&&(e.tagName=n.hName),"element"===e.type&&n.hProperties&&(e.properties=Object.assign({},e.properties,n.hProperties)),e.children&&n.hChildren&&(e.children=n.hChildren)),r=t&&t.position?t:{position:t},u(r)||(e.position={start:o.start(r),end:o.end(r)}),e}function d(t,e,n,r){return null==r&&"object"==typeof n&&"length"in n&&(r=n,n={}),c(t,{type:"element",tagName:e,properties:n||{},children:r||[]})}}(t,e),d=a(n,t),h=c(n);h&&(d.children=d.children.concat(r("text","\n"),h));return d};var r=n(38),i=n(65),o=n(137),u=n(321),s=n(322),a=n(138),c=n(323),l=n(324),f={}.hasOwnProperty,p=!1},321:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t?t:{}}t.exports=function(t){var e=r(r(t).position),n=r(e.start),i=r(e.end);return!(n.line&&n.column&&i.line&&i.column)}},322:function(t,e,n){"use strict";var r=n(65);t.exports=function(t,e){return function(t){return function(e){var n=e&&o(e);return n&&i.call(t,n)?t[n]:null}}(function(t,e){var n={};if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return r(t,"definition",e&&e.commonmark?function(t){var e=o(t.identifier);i.call(n,e)||(n[e]=t)}:function(t){n[o(t.identifier)]=t}),n}(t,e))};var i={}.hasOwnProperty;function o(t){return t.toUpperCase()}},323:function(t,e,n){"use strict";t.exports=function(t){var e,n,u,s,a=t.footnoteById,c=t.footnoteOrder,l=c.length,f=-1,p=[];for(;++f<l;)(e=a[c[f].toUpperCase()])&&(u=e.children.concat(),s=u[u.length-1],n={type:"link",url:"#fnref-"+e.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]},s&&"paragraph"===s.type||(s={type:"paragraph",children:[]},u.push(s)),s.children.push(n),p.push({type:"listItem",data:{hProperties:{id:"fn-"+e.identifier}},children:u,position:e.position}));if(0===p.length)return null;return t(null,"div",{className:["footnotes"]},o([r(t),i(t,{type:"list",ordered:!0,children:p})],!0))};var r=n(139),i=n(140),o=n(57)},324:function(t,e,n){"use strict";function r(){return null}t.exports={blockquote:n(325),break:n(326),code:n(327),delete:n(329),emphasis:n(330),footnoteReference:n(141),footnote:n(331),heading:n(332),html:n(333),imageReference:n(334),image:n(335),inlineCode:n(336),linkReference:n(337),link:n(338),listItem:n(339),list:n(140),paragraph:n(340),root:n(341),strong:n(342),table:n(343),text:n(344),thematicBreak:n(139),toml:r,yaml:r,definition:r,footnoteDefinition:r}},325:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"blockquote",r(i(t,e),!0))};var r=n(57),i=n(36)},326:function(t,e,n){"use strict";t.exports=function(t,e){return[t(e,"br"),r("text","\n")]};var r=n(38)},327:function(t,e,n){"use strict";t.exports=function(t,e){var n=e.value?r(e.value+"\n"):"",o=e.lang&&e.lang.match(/^[^ \t]+(?=[ \t]|$)/),u={};o&&(u.className=["language-"+o]);return t(e.position,"pre",[t(e,"code",u,[i("text",n)])])};var r=n(328),i=n(38)},328:function(t,e,n){"use strict";t.exports=function(t,e){var n,i,o="string"==typeof t,u=o&&t.length,s=0,a=-1,c=-1,l=e||4,f=[];if(!o)throw new Error("detab expected string");for(;++a<u;)9===(n=t.charCodeAt(a))?(c+=i=l-(c+1)%l,f.push(t.slice(s,a)+r(" ",i)),s=a+1):10===n||13===n?c=-1:c++;return f.push(t.slice(s)),f.join("")};var r=n(33)},329:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"del",r(t,e))};var r=n(36)},330:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"em",r(t,e))};var r=n(36)},331:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.footnoteById,i=t.footnoteOrder,o=1;for(;o in n;)o++;return o=String(o),i.push(o),n[o]={type:"footnoteDefinition",identifier:o,children:[{type:"paragraph",children:e.children}],position:e.position},r(t,{type:"footnoteReference",identifier:o,position:e.position})};var r=n(141)},332:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"h"+e.depth,r(t,e))};var r=n(36)},333:function(t,e,n){"use strict";t.exports=function(t,e){return t.dangerous?t.augment(e,r("raw",e.value)):null};var r=n(38)},334:function(t,e,n){"use strict";t.exports=function(t,e){var n,o=t.definition(e.identifier);if(!o)return i(t,e);n={src:r(o.url||""),alt:e.alt},null!==o.title&&void 0!==o.title&&(n.title=o.title);return t(e,"img",n)};var r=n(70),i=n(142)},335:function(t,e,n){"use strict";var r=n(70);t.exports=function(t,e){var n={src:r(e.url),alt:e.alt};null!==e.title&&void 0!==e.title&&(n.title=e.title);return t(e,"img",n)}},336:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"code",[i("text",r(e.value))])};var r=n(67),i=n(38)},337:function(t,e,n){"use strict";t.exports=function(t,e){var n,u=t.definition(e.identifier);if(!u)return i(t,e);n={href:r(u.url||"")},null!==u.title&&void 0!==u.title&&(n.title=u.title);return t(e,"a",n,o(t,e))};var r=n(70),i=n(142),o=n(36)},338:function(t,e,n){"use strict";var r=n(70),i=n(36);t.exports=function(t,e){var n={href:r(e.url)};null!==e.title&&void 0!==e.title&&(n.title=e.title);return t(e,"a",n,i(t,e))}},339:function(t,e,n){"use strict";t.exports=function(t,e,n){var s,a,c,l,f,p=e.children[0],d=o(t,e),h=n?function(t){var e=t.spread,n=t.children,r=n.length,i=-1;for(;!e&&++i<r;)e=u(n[i]);return e}(n):u(e),v={};if(h)s=d;else for(s=[],l=d.length,c=-1;++c<l;)"p"===(f=d[c]).tagName?s=s.concat(f.children):s.push(f);"boolean"==typeof e.checked&&(!h||p&&"paragraph"===p.type||s.unshift(t(null,"p",[])),0!==(a=h?s[0].children:s).length&&a.unshift(r("text"," ")),a.unshift(t(null,"input",{type:"checkbox",checked:e.checked,disabled:!0})),v.className=["task-list-item"]);h&&0!==s.length&&(s=i(s,!0));return t(e,"li",v,s)};var r=n(38),i=n(57),o=n(36);function u(t){var e=t.spread;return null==e?t.children.length>1:e}},340:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"p",r(t,e))};var r=n(36)},341:function(t,e,n){"use strict";t.exports=function(t,e){return t.augment(e,r("root",i(o(t,e))))};var r=n(38),i=n(57),o=n(36)},342:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"strong",r(t,e))};var r=n(36)},343:function(t,e,n){"use strict";t.exports=function(t,e){var n,u,s,a,c,l=e.children,f=l.length,p=e.align,d=p.length,h=[];for(;f--;){for(u=l[f].children,a=0===f?"th":"td",n=d,s=[];n--;)c=u[n],s[n]=t(c,a,{align:p[n]},c?o(t,c):[]);h[f]=t(l[f],"tr",i(s,!0))}return t(e,"table",i([t(h[0].position,"thead",i([h[0]],!0)),t({start:r.start(h[1]),end:r.end(h[h.length-1])},"tbody",i(h.slice(1),!0))],!0))};var r=n(137),i=n(57),o=n(36)},344:function(t,e,n){"use strict";t.exports=function(t,e){return t.augment(e,r("text",i(e.value)))};var r=n(38),i=n(345)},345:function(t,e,n){"use strict";t.exports=function(t){return String(t).replace(r,"\n")};var r=/[ \t]*\n+[ \t]*/g},36:function(t,e,n){"use strict";t.exports=function(t,e){var n,i,o=e.children||[],u=o.length,s=[],a=-1;for(;++a<u;)(n=r(t,o[a],e))&&(a&&"break"===o[a-1].type&&(n.value&&(n.value=n.value.replace(/^\s+/,"")),(i=n.children&&n.children[0])&&i.value&&(i.value=i.value.replace(/^\s+/,""))),s=s.concat(n));return s};var r=n(138)},38:function(t,e,n){"use strict";t.exports=function(t,e,n){var r;null!=n||"object"==typeof e&&!Array.isArray(e)||(n=e,e={});r=Object.assign({type:String(t)},e),Array.isArray(n)?r.children=n:null!=n&&(r.value=String(n));return r}},57:function(t,e,n){"use strict";t.exports=function(t,e){var n=[],i=-1,o=t.length;e&&n.push(r("text","\n"));for(;++i<o;)i&&n.push(r("text","\n")),n.push(t[i]);e&&0!==t.length&&n.push(r("text","\n"));return n};var r=n(38)},70:function(t,e,n){"use strict";var r={};function i(t,e,n){var o,u,s,a,c,l="";for("string"!=typeof e&&(n=e,e=i.defaultChars),void 0===n&&(n=!0),c=function(t){var e,n,i=r[t];if(i)return i;for(i=r[t]=[],e=0;e<128;e++)n=String.fromCharCode(e),/^[0-9a-z]$/i.test(n)?i.push(n):i.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)i[t.charCodeAt(e)]=t[e];return i}(e),o=0,u=t.length;o<u;o++)if(s=t.charCodeAt(o),n&&37===s&&o+2<u&&/^[0-9a-f]{2}$/i.test(t.slice(o+1,o+3)))l+=t.slice(o,o+3),o+=2;else if(s<128)l+=c[s];else if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&o+1<u&&(a=t.charCodeAt(o+1))>=56320&&a<=57343){l+=encodeURIComponent(t[o]+t[o+1]),o++;continue}l+="%EF%BF%BD"}else l+=encodeURIComponent(t[o]);return l}i.defaultChars=";/?:@&=+$,-_.!~*'()#",i.componentChars="-_.!~*'()",t.exports=i},89:function(t,e,n){"use strict";var r=n(319);t.exports=function(t,e){t&&!t.process&&(e=t,t=null);return t?function(t,e){return function(n,i,o){t.run(r(n,e),i,(function(t){o(t)}))}}(t,e):function(t){return function(e){return r(e,t)}}(e)}}}]);