(self.webpackChunkashley_yetman_portfolio=self.webpackChunkashley_yetman_portfolio||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},9832:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,o,i,a,c=n(7294),u=function(){return c.createElement("div",{className:"footer-module--footer--2-hg1"},c.createElement("div",null,"© 2021 Ashley Yetman. All Rights Reserved."))},l=n(5697),s=n.n(l),f=n(4839),p=n.n(f),d=n(2993),y=n.n(d),g=n(6494),m=n.n(g),T="bodyAttributes",A="htmlAttributes",h="titleAttributes",I={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},M=(Object.keys(I).map((function(e){return I[e]})),"charset"),C="cssText",b="href",v="http-equiv",E="innerHTML",w="itemprop",N="name",S="property",x="rel",O="src",D="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",k="defer",P="encodeSpecialCharacters",z="onChangeClientState",U="titleTemplate",Y=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),R=[I.NOSCRIPT,I.SCRIPT,I.STYLE],B="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=$(e,I.TITLE),n=$(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},J=function(e){return $(e,z)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Q({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[I.BASE]})).map((function(e){return e[I.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==E&&c!==C&&c!==w||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(I.BODY,r),le(I.HTML,o),ue(f,p);var d={baseTag:se(I.BASE,n),linkTags:se(I.LINK,i),metaTags:se(I.META,a),noscriptTags:se(I.NOSCRIPT,c),scriptTags:se(I.SCRIPT,l),styleTags:se(I.STYLE,s)},y={},g={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(g[e]=d[e].oldTags)})),t&&t(),u(e,y,g)},ce=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),le(I.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(I.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case I.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=pe(n,r),[c.createElement(I.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=fe(n),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case T:case A:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===E||n===C){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===E||e===C)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:de(I.BASE,t,r),bodyAttributes:de(T,n,r),htmlAttributes:de(A,o,r),link:de(I.LINK,i,r),meta:de(I.META,a,r),noscript:de(I.NOSCRIPT,c,r),script:de(I.SCRIPT,u,r),style:de(I.STYLE,l,r),title:de(I.TITLE,{title:f,titleAttributes:p},r)}},ge=p()((function(e){return{baseTag:W([b,D],e),bodyAttributes:V(T,e),defer:$(e,k),encode:$(e,P),htmlAttributes:V(A,e),linkTags:X(I.LINK,[x,b],e),metaTags:X(I.META,[N,M,v,S,w],e),noscriptTags:X(I.NOSCRIPT,[E],e),onChangeClientState:J(e),scriptTags:X(I.SCRIPT,[O,E],e),styleTags:X(I.STYLE,[C],e),title:Z(e),titleAttributes:V(h,e)}}),(function(e){ie&&re(ie),e.defer?ie=ne((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),ye)((function(){return null})),me=(o=ge,a=i=function(e){function t(){return _(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case I.SCRIPT:case I.NOSCRIPT:return{innerHTML:t};case I.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Q({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case I.TITLE:return Q({},o,((t={})[r.type]=a,t.titleAttributes=Q({},i),t));case I.BODY:return Q({},o,{bodyAttributes:Q({},i)});case I.HTML:return Q({},o,{htmlAttributes:Q({},i)})}return Q({},o,((n={})[r.type]=Q({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Q({},t);return Object.keys(e).forEach((function(t){var r;n=Q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case I.LINK:case I.META:case I.NOSCRIPT:case I.SCRIPT:case I.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=Q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},G(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var Te=n.p+"static/favicon-e4f2037e4c9b8cd64ef05bea78f9153b.ico",Ae="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSI0ODEuNDE5IDIxNy44MzQgNzEuMTYxIDk0LjMzMyIgd2lkdGg9IjcxLjE2MSIgaGVpZ2h0PSI5NC4zMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4xLCAwLCAwLCAtMC4xLCA0MDkuMDMwNjcsIDM4Mi42NjY0MTIpIiBmaWxsPSIjNzIxNkY0IiBzdHJva2U9Im5vbmUiPgogICAgPHBhdGggZD0iTTg3NSAxNjQwIGMtMyAtNiAxIC0xMiA5IC0xNSA5IC0zIDIzIC03IDMxIC0xMCAxMiAtNCAxNSAtMjYgMTUgLTEyMyBsMCAtMTIwIC0zMCAtMTIgYy0zNyAtMTUgLTExMiAtOTUgLTEzOCAtMTQ2IC05MCAtMTc2IC0xNSAtMzkyIDE2NiAtNDgxIDUwIC0yNSA2OCAtMjggMTUyIC0yOCA4NCAwIDEwMiAzIDE1MiAyOCAxODAgODggMjU1IDMwNiAxNjYgNDgwIC0yNiA1MyAtMTAxIDEzMiAtMTM5IDE0NyBsLTMwIDEzIDMgMTIwIGMzIDExNyA0IDEyMSAyNiAxMjcgMTMgMyAyMyAxMCAyMyAxNSAtMSAxNCAtMzk3IDE5IC00MDYgNXogbTMyNSAtMTUwIGwwIC0xMzAgMzggLTE5IGM4MiAtNDIgMTU1IC0xNDkgMTY4IC0yNDUgbDcgLTQ2IC01OSAwIGMtMzIgMCAtMTE1IC0xNCAtMTg0IC0zMSAtMTQ0IC0zNiAtMTk0IC0zNSAtMzExIDYgLTQwIDE0IC04MSAyNSAtOTIgMjUgLTE4IDAgLTE5IDUgLTEzIDQ2IDEzIDk2IDg2IDIwMyAxNjggMjQ1IGwzOCAxOSAwIDEzMCAwIDEzMCAxMjAgMCAxMjAgMCAwIC0xMzB6IG00IC01NDEgYzI1IC0yMCAzMyAtNTMgMTggLTc1IC0xNSAtMjMgLTUwIC0zNCAtNzUgLTI1IC00NSAxOCAtNDggODggLTUgMTA5IDMxIDE1IDMyIDE1IDYyIC05eiIvPgogICAgPHBhdGggZD0iTTEwMjMgMTMzNCBjLTMgLTggMiAtMjMgMTEgLTMyIDE1IC0xNSAxNyAtMTUgMzIgMCAyMSAyMSAxMSA0OCAtMTYgNDggLTExIDAgLTIzIC03IC0yNyAtMTZ6Ii8+CiAgICA8cGF0aCBkPSJNMTExMyAxMjE0IGMtMyAtOCAxIC0yMiA5IC0zMCAxMiAtMTIgMTcgLTEyIDMzIC0xIDIzIDE3IDE0IDQ3IC0xNSA0NyAtMTEgMCAtMjMgLTcgLTI3IC0xNnoiLz4KICAgIDxwYXRoIGQ9Ik0xMDI0IDExMjUgYy00IC05IC0yIC0yMSA0IC0yNyAxNiAtMTYgNDcgLTUgNDcgMTcgMCAyNiAtNDIgMzQgLTUxIDEweiIvPgogICAgPHBhdGggZD0iTTExNDQgOTE1IGMtNCAtOSAtMiAtMjEgNCAtMjcgMTYgLTE2IDQ3IC01IDQ3IDE3IDAgMjYgLTQyIDM0IC01MSAxMHoiLz4KICA8L2c+Cjwvc3ZnPg==",he=function(e){var t=e.pageTitle,n=void 0===t?"Untitled":t,r=e.metaDescription,o=void 0===r?"Ashley Yetman's Portfolio":r,i=e.metaKeywords,a=void 0===i?["ashley yetman"]:i,u=e.bNoIndex,l=void 0!==u&&u;return c.createElement("div",null,c.createElement(me,{htmlAttributes:{lang:"en"}},l&&c.createElement("meta",{name:"robots",content:"noindex"}),c.createElement("title",null,n),c.createElement("meta",{name:"description",content:o}),c.createElement("meta",{name:"keywords",content:a.join(", ")}),c.createElement("link",{rel:"icon",type:"image/svg+xml",href:Ae}),c.createElement("link",{rel:"alternate icon",href:Te}),c.createElement("link",{rel:"shortcut icon",type:"image/jpg",href:Te}),c.createElement("link",{rel:"mask-icon",href:Ae,color:"#ff8a01"})))},Ie=function(e){var t=e.children;return c.createElement("main",{className:"main-module--main--1FvNJ"},t)},Me=n(5444),Ce=function(){return c.createElement("div",{className:"navbar-module--headerContainer--3cgSU"},c.createElement("div",{className:"navbar-module--headerItem--38Dz2"},c.createElement("nav",{className:"navbar-module--navbar--1YtV1"},c.createElement("ul",{className:"navbar-module--navbar_items--3pCki"},c.createElement("li",null,c.createElement(Me.rU,{to:"/"},"Home")),c.createElement("li",null,c.createElement(Me.rU,{to:"/contact"},"Contact"))))))},be=function(e){var t=e.pageTitle,n=e.metaDescription,r=e.metaKeywords,o=e.bNavbar,i=void 0===o||o,a=e.bNoIndex,l=e.children;return c.createElement("div",{className:"layout-module--container--YM7Lx"},c.createElement(he,{pageTitle:t,metaKeywords:r,metaDescription:n,bNoIndex:a}),i&&c.createElement(Ce,null),c.createElement(Ie,{pageTitle:t,children:l}),c.createElement(u,null))}}}]);
//# sourceMappingURL=commons-9341b3792dc59ac031b5.js.map