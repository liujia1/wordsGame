(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var na={exports:{}},po={},ta={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),wc=Symbol.for("react.portal"),kc=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),Ic=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Wc=Symbol.for("react.memo"),Nc=Symbol.for("react.lazy"),Bs=Symbol.iterator;function Lc(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var ra={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oa=Object.assign,la={};function vt(e,n,t){this.props=e,this.context=n,this.refs=la,this.updater=t||ra}vt.prototype.isReactComponent={};vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sa(){}sa.prototype=vt.prototype;function Gl(e,n,t){this.props=e,this.context=n,this.refs=la,this.updater=t||ra}var bl=Gl.prototype=new sa;bl.constructor=Gl;oa(bl,vt.prototype);bl.isPureReactComponent=!0;var Vs=Array.isArray,ia=Object.prototype.hasOwnProperty,Jl={current:null},aa={key:!0,ref:!0,__self:!0,__source:!0};function ua(e,n,t){var r,o={},l=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(l=""+n.key),n)ia.call(n,r)&&!aa.hasOwnProperty(r)&&(o[r]=n[r]);var i=arguments.length-2;if(i===1)o.children=t;else if(1<i){for(var a=Array(i),d=0;d<i;d++)a[d]=arguments[d+2];o.children=a}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:ur,type:e,key:l,ref:s,props:o,_owner:Jl.current}}function _c(e,n){return{$$typeof:ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function Pc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ys=/\/+/g;function _o(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Pc(""+e.key):n.toString(36)}function Pr(e,n,t,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ur:case wc:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+_o(s,0):r,Vs(o)?(t="",e!=null&&(t=e.replace(Ys,"$&/")+"/"),Pr(o,n,t,"",function(d){return d})):o!=null&&(Xl(o)&&(o=_c(o,t+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ys,"$&/")+"/")+e)),n.push(o)),1;if(s=0,r=r===""?".":r+":",Vs(e))for(var i=0;i<e.length;i++){l=e[i];var a=r+_o(l,i);s+=Pr(l,n,t,a,o)}else if(a=Lc(e),typeof a=="function")for(e=a.call(e),i=0;!(l=e.next()).done;)l=l.value,a=r+_o(l,i++),s+=Pr(l,n,t,a,o);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function pr(e,n,t){if(e==null)return e;var r=[],o=0;return Pr(e,r,"","",function(l){return n.call(t,l,o++)}),r}function Mc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Mr={transition:null},zc={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:Jl};function ca(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:pr,forEach:function(e,n,t){pr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return pr(e,function(){n++}),n},toArray:function(e){return pr(e,function(n){return n})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=vt;O.Fragment=kc;O.Profiler=Ic;O.PureComponent=Gl;O.StrictMode=Sc;O.Suspense=Cc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc;O.act=ca;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=oa({},e.props),o=e.key,l=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,s=Jl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in n)ia.call(n,a)&&!aa.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&i!==void 0?i[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){i=Array(a);for(var d=0;d<a;d++)i[d]=arguments[d+2];r.children=i}return{$$typeof:ur,type:e.type,key:o,ref:l,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:Tc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xc,_context:e},e.Consumer=e};O.createElement=ua;O.createFactory=function(e){var n=ua.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Ec,render:e}};O.isValidElement=Xl;O.lazy=function(e){return{$$typeof:Nc,_payload:{_status:-1,_result:e},_init:Mc}};O.memo=function(e,n){return{$$typeof:Wc,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=n}};O.unstable_act=ca;O.useCallback=function(e,n){return ge.current.useCallback(e,n)};O.useContext=function(e){return ge.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};O.useEffect=function(e,n){return ge.current.useEffect(e,n)};O.useId=function(){return ge.current.useId()};O.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return ge.current.useMemo(e,n)};O.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};O.useRef=function(e){return ge.current.useRef(e)};O.useState=function(e){return ge.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return ge.current.useTransition()};O.version="18.3.1";ta.exports=O;var F=ta.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=F,Dc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),Rc=Object.prototype.hasOwnProperty,Hc=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fc={key:!0,ref:!0,__self:!0,__source:!0};function da(e,n,t){var r,o={},l=null,s=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)Rc.call(n,r)&&!Fc.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Dc,type:e,key:l,ref:s,props:o,_owner:Hc.current}}po.Fragment=Oc;po.jsx=da;po.jsxs=da;na.exports=po;var S=na.exports,ha={exports:{}},Ne={},fa={exports:{}},pa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,z){var j=C.length;C.push(z);e:for(;0<j;){var Q=j-1>>>1,ne=C[Q];if(0<o(ne,z))C[Q]=z,C[j]=ne,j=Q;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var z=C[0],j=C.pop();if(j!==z){C[0]=j;e:for(var Q=0,ne=C.length,Yn=ne>>>1;Q<Yn;){var be=2*(Q+1)-1,xt=C[be],Je=be+1,_n=C[Je];if(0>o(xt,j))Je<ne&&0>o(_n,xt)?(C[Q]=_n,C[Je]=j,Q=Je):(C[Q]=xt,C[be]=j,Q=be);else if(Je<ne&&0>o(_n,j))C[Q]=_n,C[Je]=j,Q=Je;else break e}}return z}function o(C,z){var j=C.sortIndex-z.sortIndex;return j!==0?j:C.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var a=[],d=[],m=1,p=null,f=3,x=!1,w=!1,T=!1,R=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var z=t(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=C)r(d),z.sortIndex=z.expirationTime,n(a,z);else break;z=t(d)}}function y(C){if(T=!1,h(C),!w)if(t(a)!==null)w=!0,Ln(E);else{var z=t(d);z!==null&&It(y,z.startTime-C)}}function E(C,z){w=!1,T&&(T=!1,c(I),I=-1),x=!0;var j=f;try{for(h(z),p=t(a);p!==null&&(!(p.expirationTime>z)||C&&!U());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,f=p.priorityLevel;var ne=Q(p.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?p.callback=ne:p===t(a)&&r(a),h(z)}else r(a);p=t(a)}if(p!==null)var Yn=!0;else{var be=t(d);be!==null&&It(y,be.startTime-z),Yn=!1}return Yn}finally{p=null,f=j,x=!1}}var N=!1,k=null,I=-1,D=5,_=-1;function U(){return!(e.unstable_now()-_<D)}function J(){if(k!==null){var C=e.unstable_now();_=C;var z=!0;try{z=k(!0,C)}finally{z?q():(N=!1,k=null)}}else N=!1}var q;if(typeof u=="function")q=function(){u(J)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,St=Ge.port2;Ge.port1.onmessage=J,q=function(){St.postMessage(null)}}else q=function(){R(J,0)};function Ln(C){k=C,N||(N=!0,q())}function It(C,z){I=R(function(){C(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Ln(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var j=f;f=z;try{return C()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var j=f;f=C;try{return z()}finally{f=j}},e.unstable_scheduleCallback=function(C,z,j){var Q=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Q+j:Q):j=Q,C){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=j+ne,C={id:m++,callback:z,priorityLevel:C,startTime:j,expirationTime:ne,sortIndex:-1},j>Q?(C.sortIndex=j,n(d,C),t(a)===null&&C===t(d)&&(T?(c(I),I=-1):T=!0,It(y,j-Q))):(C.sortIndex=ne,n(a,C),w||x||(w=!0,Ln(E))),C},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(C){var z=f;return function(){var j=f;f=z;try{return C.apply(this,arguments)}finally{f=j}}}})(pa);fa.exports=pa;var Ac=fa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=F,We=Ac;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ma=new Set,Qt={};function Bn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(Qt[e]=n,e=0;e<n.length;e++)ma.add(n[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qs={},Ks={};function Bc(e){return tl.call(Ks,e)?!0:tl.call(Qs,e)?!1:$c.test(e)?Ks[e]=!0:(Qs[e]=!0,!1)}function Vc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yc(e,n,t,r){if(n===null||typeof n>"u"||Vc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,o,l,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=s}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zl,ql);ue[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zl,ql);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zl,ql);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function es(e,n,t,r){var o=ue.hasOwnProperty(n)?ue[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Yc(n,t,o,r)&&(t=null),r||o===null?Bc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var sn=Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),ns=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),ya=Symbol.for("react.provider"),ga=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),va=Symbol.for("react.offscreen"),Gs=Symbol.iterator;function Et(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,Po;function zt(e){if(Po===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Po=n&&n[1]||""}return`
`+Po+e}var Mo=!1;function zo(e,n){if(!e||Mo)return"";Mo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,i=l.length-1;1<=s&&0<=i&&o[s]!==l[i];)i--;for(;1<=s&&0<=i;s--,i--)if(o[s]!==l[i]){if(s!==1||i!==1)do if(s--,i--,0>i||o[s]!==l[i]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=i);break}}}finally{Mo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?zt(e):""}function Qc(e){switch(e.tag){case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return zt("Suspense");case 19:return zt("SuspenseList");case 0:case 2:case 15:return e=zo(e.type,!1),e;case 11:return e=zo(e.type.render,!1),e;case 1:return e=zo(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Kn:return"Portal";case rl:return"Profiler";case ns:return"StrictMode";case ol:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ga:return(e.displayName||"Context")+".Consumer";case ya:return(e._context.displayName||"Context")+".Provider";case ts:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rs:return n=e.displayName||null,n!==null?n:sl(e.type)||"Memo";case cn:n=e._payload,e=e._init;try{return sl(e(n))}catch{}}return null}function Kc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(n);case 8:return n===ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gc(e){var n=wa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yr(e){e._valueTracker||(e._valueTracker=Gc(e))}function ka(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=wa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function il(e,n){var t=n.checked;return b({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function bs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Tn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Sa(e,n){n=n.checked,n!=null&&es(e,"checked",n,!1)}function al(e,n){Sa(e,n);var t=Tn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ul(e,n.type,t):n.hasOwnProperty("defaultValue")&&ul(e,n.type,Tn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Js(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ul(e,n,t){(n!=="number"||Br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var jt=Array.isArray;function lt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function cl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return b({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(jt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Tn(t)}}function Ia(e,n){var t=Tn(n.value),r=Tn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Zs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function xa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?xa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Ta=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Kt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bc=["Webkit","ms","Moz","O"];Object.keys(Rt).forEach(function(e){bc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Rt[n]=Rt[e]})});function Ea(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Rt.hasOwnProperty(e)&&Rt[e]?(""+n).trim():n+"px"}function Ca(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Ea(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Jc=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,n){if(n){if(Jc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function fl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,st=null,it=null;function qs(e){if(e=hr(e)){if(typeof ml!="function")throw Error(v(280));var n=e.stateNode;n&&(n=wo(n),ml(e.stateNode,e.type,n))}}function Wa(e){st?it?it.push(e):it=[e]:st=e}function Na(){if(st){var e=st,n=it;if(it=st=null,qs(e),n)for(e=0;e<n.length;e++)qs(n[e])}}function La(e,n){return e(n)}function _a(){}var jo=!1;function Pa(e,n,t){if(jo)return e(n,t);jo=!0;try{return La(e,n,t)}finally{jo=!1,(st!==null||it!==null)&&(_a(),Na())}}function Gt(e,n){var t=e.stateNode;if(t===null)return null;var r=wo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var yl=!1;if(tn)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){yl=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{yl=!1}function Xc(e,n,t,r,o,l,s,i,a){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(m){this.onError(m)}}var Ht=!1,Vr=null,Yr=!1,gl=null,Zc={onError:function(e){Ht=!0,Vr=e}};function qc(e,n,t,r,o,l,s,i,a){Ht=!1,Vr=null,Xc.apply(Zc,arguments)}function ed(e,n,t,r,o,l,s,i,a){if(qc.apply(this,arguments),Ht){if(Ht){var d=Vr;Ht=!1,Vr=null}else throw Error(v(198));Yr||(Yr=!0,gl=d)}}function Vn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ma(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ei(e){if(Vn(e)!==e)throw Error(v(188))}function nd(e){var n=e.alternate;if(!n){if(n=Vn(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return ei(o),e;if(l===r)return ei(o),n;l=l.sibling}throw Error(v(188))}if(t.return!==r.return)t=o,r=l;else{for(var s=!1,i=o.child;i;){if(i===t){s=!0,t=o,r=l;break}if(i===r){s=!0,r=o,t=l;break}i=i.sibling}if(!s){for(i=l.child;i;){if(i===t){s=!0,t=l,r=o;break}if(i===r){s=!0,r=l,t=o;break}i=i.sibling}if(!s)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function za(e){return e=nd(e),e!==null?ja(e):null}function ja(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ja(e);if(n!==null)return n;e=e.sibling}return null}var Da=We.unstable_scheduleCallback,ni=We.unstable_cancelCallback,td=We.unstable_shouldYield,rd=We.unstable_requestPaint,ee=We.unstable_now,od=We.unstable_getCurrentPriorityLevel,ls=We.unstable_ImmediatePriority,Oa=We.unstable_UserBlockingPriority,Qr=We.unstable_NormalPriority,ld=We.unstable_LowPriority,Ra=We.unstable_IdlePriority,mo=null,Qe=null;function sd(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:ud,id=Math.log,ad=Math.LN2;function ud(e){return e>>>=0,e===0?32:31-(id(e)/ad|0)|0}var vr=64,wr=4194304;function Dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=t&268435455;if(s!==0){var i=s&~o;i!==0?r=Dt(i):(l&=s,l!==0&&(r=Dt(l)))}else s=t&~o,s!==0?r=Dt(s):l!==0&&(r=Dt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ae(n),o=1<<t,r|=e[t],n&=~o;return r}function cd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Ae(l),i=1<<s,a=o[s];a===-1?(!(i&t)||i&r)&&(o[s]=cd(i,n)):a<=n&&(e.expiredLanes|=i),l&=~i}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ha(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Do(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function hd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ae(t),l=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function ss(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ae(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var A=0;function Fa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Aa,is,Ua,$a,Ba,wl=!1,kr=[],yn=null,gn=null,vn=null,bt=new Map,Jt=new Map,hn=[],fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ti(e,n){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":bt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jt.delete(n.pointerId)}}function Wt(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},n!==null&&(n=hr(n),n!==null&&is(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function pd(e,n,t,r,o){switch(n){case"focusin":return yn=Wt(yn,e,n,t,r,o),!0;case"dragenter":return gn=Wt(gn,e,n,t,r,o),!0;case"mouseover":return vn=Wt(vn,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return bt.set(l,Wt(bt.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Jt.set(l,Wt(Jt.get(l)||null,e,n,t,r,o)),!0}return!1}function Va(e){var n=zn(e.target);if(n!==null){var t=Vn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ma(t),n!==null){e.blockedOn=n,Ba(e.priority,function(){Ua(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=kl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);pl=r,t.target.dispatchEvent(r),pl=null}else return n=hr(t),n!==null&&is(n),e.blockedOn=t,!1;n.shift()}return!0}function ri(e,n,t){zr(e)&&t.delete(n)}function md(){wl=!1,yn!==null&&zr(yn)&&(yn=null),gn!==null&&zr(gn)&&(gn=null),vn!==null&&zr(vn)&&(vn=null),bt.forEach(ri),Jt.forEach(ri)}function Nt(e,n){e.blockedOn===n&&(e.blockedOn=null,wl||(wl=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,md)))}function Xt(e){function n(o){return Nt(o,e)}if(0<kr.length){Nt(kr[0],e);for(var t=1;t<kr.length;t++){var r=kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&Nt(yn,e),gn!==null&&Nt(gn,e),vn!==null&&Nt(vn,e),bt.forEach(n),Jt.forEach(n),t=0;t<hn.length;t++)r=hn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(t=hn[0],t.blockedOn===null);)Va(t),t.blockedOn===null&&hn.shift()}var at=sn.ReactCurrentBatchConfig,Gr=!0;function yd(e,n,t,r){var o=A,l=at.transition;at.transition=null;try{A=1,as(e,n,t,r)}finally{A=o,at.transition=l}}function gd(e,n,t,r){var o=A,l=at.transition;at.transition=null;try{A=4,as(e,n,t,r)}finally{A=o,at.transition=l}}function as(e,n,t,r){if(Gr){var o=kl(e,n,t,r);if(o===null)Yo(e,n,r,br,t),ti(e,r);else if(pd(o,e,n,t,r))r.stopPropagation();else if(ti(e,r),n&4&&-1<fd.indexOf(e)){for(;o!==null;){var l=hr(o);if(l!==null&&Aa(l),l=kl(e,n,t,r),l===null&&Yo(e,n,r,br,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else Yo(e,n,r,null,t)}}var br=null;function kl(e,n,t,r){if(br=null,e=os(r),e=zn(e),e!==null)if(n=Vn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ma(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return br=e,null}function Ya(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case ls:return 1;case Oa:return 4;case Qr:case ld:return 16;case Ra:return 536870912;default:return 16}default:return 16}}var pn=null,us=null,jr=null;function Qa(){if(jr)return jr;var e,n=us,t=n.length,r,o="value"in pn?pn.value:pn.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===o[l-r];r++);return jr=o.slice(e,1<r?1-r:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function oi(){return!1}function Le(e){function n(t,r,o,l,s){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:oi,this.isPropagationStopped=oi,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Le(wt),dr=b({},wt,{view:0,detail:0}),vd=Le(dr),Oo,Ro,Lt,yo=b({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lt&&(Lt&&e.type==="mousemove"?(Oo=e.screenX-Lt.screenX,Ro=e.screenY-Lt.screenY):Ro=Oo=0,Lt=e),Oo)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),li=Le(yo),wd=b({},yo,{dataTransfer:0}),kd=Le(wd),Sd=b({},dr,{relatedTarget:0}),Ho=Le(Sd),Id=b({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),xd=Le(Id),Td=b({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ed=Le(Td),Cd=b({},wt,{data:0}),si=Le(Cd),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _d(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ld[e])?!!n[e]:!1}function ds(){return _d}var Pd=b({},dr,{key:function(e){if(e.key){var n=Wd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Md=Le(Pd),zd=b({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ii=Le(zd),jd=b({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Dd=Le(jd),Od=b({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rd=Le(Od),Hd=b({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fd=Le(Hd),Ad=[9,13,27,32],hs=tn&&"CompositionEvent"in window,Ft=null;tn&&"documentMode"in document&&(Ft=document.documentMode);var Ud=tn&&"TextEvent"in window&&!Ft,Ka=tn&&(!hs||Ft&&8<Ft&&11>=Ft),ai=" ",ui=!1;function Ga(e,n){switch(e){case"keyup":return Ad.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function $d(e,n){switch(e){case"compositionend":return ba(n);case"keypress":return n.which!==32?null:(ui=!0,ai);case"textInput":return e=n.data,e===ai&&ui?null:e;default:return null}}function Bd(e,n){if(bn)return e==="compositionend"||!hs&&Ga(e,n)?(e=Qa(),jr=us=pn=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ka&&n.locale!=="ko"?null:n.data;default:return null}}var Vd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ci(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Vd[e.type]:n==="textarea"}function Ja(e,n,t,r){Wa(r),n=Jr(n,"onChange"),0<n.length&&(t=new cs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var At=null,Zt=null;function Yd(e){iu(e,0)}function go(e){var n=Zn(e);if(ka(n))return e}function Qd(e,n){if(e==="change")return n}var Xa=!1;if(tn){var Fo;if(tn){var Ao="oninput"in document;if(!Ao){var di=document.createElement("div");di.setAttribute("oninput","return;"),Ao=typeof di.oninput=="function"}Fo=Ao}else Fo=!1;Xa=Fo&&(!document.documentMode||9<document.documentMode)}function hi(){At&&(At.detachEvent("onpropertychange",Za),Zt=At=null)}function Za(e){if(e.propertyName==="value"&&go(Zt)){var n=[];Ja(n,Zt,e,os(e)),Pa(Yd,n)}}function Kd(e,n,t){e==="focusin"?(hi(),At=n,Zt=t,At.attachEvent("onpropertychange",Za)):e==="focusout"&&hi()}function Gd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(Zt)}function bd(e,n){if(e==="click")return go(n)}function Jd(e,n){if(e==="input"||e==="change")return go(n)}function Xd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $e=typeof Object.is=="function"?Object.is:Xd;function qt(e,n){if($e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!tl.call(n,o)||!$e(e[o],n[o]))return!1}return!0}function fi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pi(e,n){var t=fi(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fi(t)}}function qa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function eu(){for(var e=window,n=Br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Br(e.document)}return n}function fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zd(e){var n=eu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qa(t.ownerDocument.documentElement,t)){if(r!==null&&fs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=pi(t,l);var s=pi(t,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qd=tn&&"documentMode"in document&&11>=document.documentMode,Jn=null,Sl=null,Ut=null,Il=!1;function mi(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Il||Jn==null||Jn!==Br(r)||(r=Jn,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ut&&qt(Ut,r)||(Ut=r,r=Jr(Sl,"onSelect"),0<r.length&&(n=new cs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Jn)))}function Ir(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionend:Ir("Transition","TransitionEnd")},Uo={},nu={};tn&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function vo(e){if(Uo[e])return Uo[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in nu)return Uo[e]=n[t];return e}var tu=vo("animationend"),ru=vo("animationiteration"),ou=vo("animationstart"),lu=vo("transitionend"),su=new Map,yi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,n){su.set(e,n),Bn(n,[e])}for(var $o=0;$o<yi.length;$o++){var Bo=yi[$o],eh=Bo.toLowerCase(),nh=Bo[0].toUpperCase()+Bo.slice(1);Cn(eh,"on"+nh)}Cn(tu,"onAnimationEnd");Cn(ru,"onAnimationIteration");Cn(ou,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(lu,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ot="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),th=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ot));function gi(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ed(r,n,void 0,e),e.currentTarget=null}function iu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var s=r.length-1;0<=s;s--){var i=r[s],a=i.instance,d=i.currentTarget;if(i=i.listener,a!==l&&o.isPropagationStopped())break e;gi(o,i,d),l=a}else for(s=0;s<r.length;s++){if(i=r[s],a=i.instance,d=i.currentTarget,i=i.listener,a!==l&&o.isPropagationStopped())break e;gi(o,i,d),l=a}}}if(Yr)throw e=gl,Yr=!1,gl=null,e}function B(e,n){var t=n[Wl];t===void 0&&(t=n[Wl]=new Set);var r=e+"__bubble";t.has(r)||(au(n,e,2,!1),t.add(r))}function Vo(e,n,t){var r=0;n&&(r|=4),au(t,e,r,n)}var xr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[xr]){e[xr]=!0,ma.forEach(function(t){t!=="selectionchange"&&(th.has(t)||Vo(t,!1,e),Vo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xr]||(n[xr]=!0,Vo("selectionchange",!1,n))}}function au(e,n,t,r){switch(Ya(n)){case 1:var o=yd;break;case 4:o=gd;break;default:o=as}t=o.bind(null,n,t,e),o=void 0,!yl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Yo(e,n,t,r,o){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;i!==null;){if(s=zn(i),s===null)return;if(a=s.tag,a===5||a===6){r=l=s;continue e}i=i.parentNode}}r=r.return}Pa(function(){var d=l,m=os(t),p=[];e:{var f=su.get(e);if(f!==void 0){var x=cs,w=e;switch(e){case"keypress":if(Dr(t)===0)break e;case"keydown":case"keyup":x=Md;break;case"focusin":w="focus",x=Ho;break;case"focusout":w="blur",x=Ho;break;case"beforeblur":case"afterblur":x=Ho;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=li;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Dd;break;case tu:case ru:case ou:x=xd;break;case lu:x=Rd;break;case"scroll":x=vd;break;case"wheel":x=Fd;break;case"copy":case"cut":case"paste":x=Ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ii}var T=(n&4)!==0,R=!T&&e==="scroll",c=T?f!==null?f+"Capture":null:f;T=[];for(var u=d,h;u!==null;){h=u;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,c!==null&&(y=Gt(u,c),y!=null&&T.push(nr(u,y,h)))),R)break;u=u.return}0<T.length&&(f=new x(f,w,null,t,m),p.push({event:f,listeners:T}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&t!==pl&&(w=t.relatedTarget||t.fromElement)&&(zn(w)||w[rn]))break e;if((x||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,x?(w=t.relatedTarget||t.toElement,x=d,w=w?zn(w):null,w!==null&&(R=Vn(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(T=li,y="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(T=ii,y="onPointerLeave",c="onPointerEnter",u="pointer"),R=x==null?f:Zn(x),h=w==null?f:Zn(w),f=new T(y,u+"leave",x,t,m),f.target=R,f.relatedTarget=h,y=null,zn(m)===d&&(T=new T(c,u+"enter",w,t,m),T.target=h,T.relatedTarget=R,y=T),R=y,x&&w)n:{for(T=x,c=w,u=0,h=T;h;h=Qn(h))u++;for(h=0,y=c;y;y=Qn(y))h++;for(;0<u-h;)T=Qn(T),u--;for(;0<h-u;)c=Qn(c),h--;for(;u--;){if(T===c||c!==null&&T===c.alternate)break n;T=Qn(T),c=Qn(c)}T=null}else T=null;x!==null&&vi(p,f,x,T,!1),w!==null&&R!==null&&vi(p,R,w,T,!0)}}e:{if(f=d?Zn(d):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var E=Qd;else if(ci(f))if(Xa)E=Jd;else{E=Gd;var N=Kd}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=bd);if(E&&(E=E(e,d))){Ja(p,E,t,m);break e}N&&N(e,f,d),e==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ul(f,"number",f.value)}switch(N=d?Zn(d):window,e){case"focusin":(ci(N)||N.contentEditable==="true")&&(Jn=N,Sl=d,Ut=null);break;case"focusout":Ut=Sl=Jn=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,mi(p,t,m);break;case"selectionchange":if(qd)break;case"keydown":case"keyup":mi(p,t,m)}var k;if(hs)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else bn?Ga(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Ka&&t.locale!=="ko"&&(bn||I!=="onCompositionStart"?I==="onCompositionEnd"&&bn&&(k=Qa()):(pn=m,us="value"in pn?pn.value:pn.textContent,bn=!0)),N=Jr(d,I),0<N.length&&(I=new si(I,e,null,t,m),p.push({event:I,listeners:N}),k?I.data=k:(k=ba(t),k!==null&&(I.data=k)))),(k=Ud?$d(e,t):Bd(e,t))&&(d=Jr(d,"onBeforeInput"),0<d.length&&(m=new si("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:d}),m.data=k))}iu(p,n)})}function nr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Jr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Gt(e,t),l!=null&&r.unshift(nr(e,l,o)),l=Gt(e,n),l!=null&&r.push(nr(e,l,o))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vi(e,n,t,r,o){for(var l=n._reactName,s=[];t!==null&&t!==r;){var i=t,a=i.alternate,d=i.stateNode;if(a!==null&&a===r)break;i.tag===5&&d!==null&&(i=d,o?(a=Gt(t,l),a!=null&&s.unshift(nr(t,a,i))):o||(a=Gt(t,l),a!=null&&s.push(nr(t,a,i)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var rh=/\r\n?/g,oh=/\u0000|\uFFFD/g;function wi(e){return(typeof e=="string"?e:""+e).replace(rh,`
`).replace(oh,"")}function Tr(e,n,t){if(n=wi(n),wi(e)!==n&&t)throw Error(v(425))}function Xr(){}var xl=null,Tl=null;function El(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,lh=typeof clearTimeout=="function"?clearTimeout:void 0,ki=typeof Promise=="function"?Promise:void 0,sh=typeof queueMicrotask=="function"?queueMicrotask:typeof ki<"u"?function(e){return ki.resolve(null).then(e).catch(ih)}:Cl;function ih(e){setTimeout(function(){throw e})}function Qo(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Xt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Xt(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Si(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var kt=Math.random().toString(36).slice(2),Ye="__reactFiber$"+kt,tr="__reactProps$"+kt,rn="__reactContainer$"+kt,Wl="__reactEvents$"+kt,ah="__reactListeners$"+kt,uh="__reactHandles$"+kt;function zn(e){var n=e[Ye];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rn]||t[Ye]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Si(e);e!==null;){if(t=e[Ye])return t;e=Si(e)}return n}e=t,t=e.parentNode}return null}function hr(e){return e=e[Ye]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function wo(e){return e[tr]||null}var Nl=[],qn=-1;function Wn(e){return{current:e}}function V(e){0>qn||(e.current=Nl[qn],Nl[qn]=null,qn--)}function $(e,n){qn++,Nl[qn]=e.current,e.current=n}var En={},fe=Wn(En),Se=Wn(!1),Hn=En;function ht(e,n){var t=e.type.contextTypes;if(!t)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function Zr(){V(Se),V(fe)}function Ii(e,n,t){if(fe.current!==En)throw Error(v(168));$(fe,n),$(Se,t)}function uu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(v(108,Kc(e)||"Unknown",o));return b({},t,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Hn=fe.current,$(fe,e),$(Se,Se.current),!0}function xi(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=uu(e,n,Hn),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(fe),$(fe,e)):V(Se),$(Se,t)}var Ze=null,ko=!1,Ko=!1;function cu(e){Ze===null?Ze=[e]:Ze.push(e)}function ch(e){ko=!0,cu(e)}function Nn(){if(!Ko&&Ze!==null){Ko=!0;var e=0,n=A;try{var t=Ze;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ze=null,ko=!1}catch(o){throw Ze!==null&&(Ze=Ze.slice(e+1)),Da(ls,Nn),o}finally{A=n,Ko=!1}}return null}var et=[],nt=0,eo=null,no=0,_e=[],Pe=0,Fn=null,qe=1,en="";function Pn(e,n){et[nt++]=no,et[nt++]=eo,eo=e,no=n}function du(e,n,t){_e[Pe++]=qe,_e[Pe++]=en,_e[Pe++]=Fn,Fn=e;var r=qe;e=en;var o=32-Ae(r)-1;r&=~(1<<o),t+=1;var l=32-Ae(n)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,qe=1<<32-Ae(n)+o|t<<o|r,en=l+e}else qe=1<<l|t<<o|r,en=e}function ps(e){e.return!==null&&(Pn(e,1),du(e,1,0))}function ms(e){for(;e===eo;)eo=et[--nt],et[nt]=null,no=et[--nt],et[nt]=null;for(;e===Fn;)Fn=_e[--Pe],_e[Pe]=null,en=_e[--Pe],_e[Pe]=null,qe=_e[--Pe],_e[Pe]=null}var Ce=null,Ee=null,Y=!1,Fe=null;function hu(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ti(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ce=e,Ee=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ce=e,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Fn!==null?{id:qe,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ce=e,Ee=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _l(e){if(Y){var n=Ee;if(n){var t=n;if(!Ti(e,n)){if(Ll(e))throw Error(v(418));n=wn(t.nextSibling);var r=Ce;n&&Ti(e,n)?hu(r,t):(e.flags=e.flags&-4097|2,Y=!1,Ce=e)}}else{if(Ll(e))throw Error(v(418));e.flags=e.flags&-4097|2,Y=!1,Ce=e}}}function Ei(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Er(e){if(e!==Ce)return!1;if(!Y)return Ei(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!El(e.type,e.memoizedProps)),n&&(n=Ee)){if(Ll(e))throw fu(),Error(v(418));for(;n;)hu(e,n),n=wn(n.nextSibling)}if(Ei(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ee=wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ee=null}}else Ee=Ce?wn(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=Ee;e;)e=wn(e.nextSibling)}function ft(){Ee=Ce=null,Y=!1}function ys(e){Fe===null?Fe=[e]:Fe.push(e)}var dh=sn.ReactCurrentBatchConfig;function _t(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var o=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(s){var i=o.refs;s===null?delete i[l]:i[l]=s},n._stringRef=l,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function Cr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ci(e){var n=e._init;return n(e._payload)}function pu(e){function n(c,u){if(e){var h=c.deletions;h===null?(c.deletions=[u],c.flags|=16):h.push(u)}}function t(c,u){if(!e)return null;for(;u!==null;)n(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function o(c,u){return c=xn(c,u),c.index=0,c.sibling=null,c}function l(c,u,h){return c.index=h,e?(h=c.alternate,h!==null?(h=h.index,h<u?(c.flags|=2,u):h):(c.flags|=2,u)):(c.flags|=1048576,u)}function s(c){return e&&c.alternate===null&&(c.flags|=2),c}function i(c,u,h,y){return u===null||u.tag!==6?(u=el(h,c.mode,y),u.return=c,u):(u=o(u,h),u.return=c,u)}function a(c,u,h,y){var E=h.type;return E===Gn?m(c,u,h.props.children,y,h.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cn&&Ci(E)===u.type)?(y=o(u,h.props),y.ref=_t(c,u,h),y.return=c,y):(y=$r(h.type,h.key,h.props,null,c.mode,y),y.ref=_t(c,u,h),y.return=c,y)}function d(c,u,h,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=nl(h,c.mode,y),u.return=c,u):(u=o(u,h.children||[]),u.return=c,u)}function m(c,u,h,y,E){return u===null||u.tag!==7?(u=Rn(h,c.mode,y,E),u.return=c,u):(u=o(u,h),u.return=c,u)}function p(c,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=el(""+u,c.mode,h),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case mr:return h=$r(u.type,u.key,u.props,null,c.mode,h),h.ref=_t(c,null,u),h.return=c,h;case Kn:return u=nl(u,c.mode,h),u.return=c,u;case cn:var y=u._init;return p(c,y(u._payload),h)}if(jt(u)||Et(u))return u=Rn(u,c.mode,h,null),u.return=c,u;Cr(c,u)}return null}function f(c,u,h,y){var E=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:i(c,u,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case mr:return h.key===E?a(c,u,h,y):null;case Kn:return h.key===E?d(c,u,h,y):null;case cn:return E=h._init,f(c,u,E(h._payload),y)}if(jt(h)||Et(h))return E!==null?null:m(c,u,h,y,null);Cr(c,h)}return null}function x(c,u,h,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(h)||null,i(u,c,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mr:return c=c.get(y.key===null?h:y.key)||null,a(u,c,y,E);case Kn:return c=c.get(y.key===null?h:y.key)||null,d(u,c,y,E);case cn:var N=y._init;return x(c,u,h,N(y._payload),E)}if(jt(y)||Et(y))return c=c.get(h)||null,m(u,c,y,E,null);Cr(u,y)}return null}function w(c,u,h,y){for(var E=null,N=null,k=u,I=u=0,D=null;k!==null&&I<h.length;I++){k.index>I?(D=k,k=null):D=k.sibling;var _=f(c,k,h[I],y);if(_===null){k===null&&(k=D);break}e&&k&&_.alternate===null&&n(c,k),u=l(_,u,I),N===null?E=_:N.sibling=_,N=_,k=D}if(I===h.length)return t(c,k),Y&&Pn(c,I),E;if(k===null){for(;I<h.length;I++)k=p(c,h[I],y),k!==null&&(u=l(k,u,I),N===null?E=k:N.sibling=k,N=k);return Y&&Pn(c,I),E}for(k=r(c,k);I<h.length;I++)D=x(k,c,I,h[I],y),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?I:D.key),u=l(D,u,I),N===null?E=D:N.sibling=D,N=D);return e&&k.forEach(function(U){return n(c,U)}),Y&&Pn(c,I),E}function T(c,u,h,y){var E=Et(h);if(typeof E!="function")throw Error(v(150));if(h=E.call(h),h==null)throw Error(v(151));for(var N=E=null,k=u,I=u=0,D=null,_=h.next();k!==null&&!_.done;I++,_=h.next()){k.index>I?(D=k,k=null):D=k.sibling;var U=f(c,k,_.value,y);if(U===null){k===null&&(k=D);break}e&&k&&U.alternate===null&&n(c,k),u=l(U,u,I),N===null?E=U:N.sibling=U,N=U,k=D}if(_.done)return t(c,k),Y&&Pn(c,I),E;if(k===null){for(;!_.done;I++,_=h.next())_=p(c,_.value,y),_!==null&&(u=l(_,u,I),N===null?E=_:N.sibling=_,N=_);return Y&&Pn(c,I),E}for(k=r(c,k);!_.done;I++,_=h.next())_=x(k,c,I,_.value,y),_!==null&&(e&&_.alternate!==null&&k.delete(_.key===null?I:_.key),u=l(_,u,I),N===null?E=_:N.sibling=_,N=_);return e&&k.forEach(function(J){return n(c,J)}),Y&&Pn(c,I),E}function R(c,u,h,y){if(typeof h=="object"&&h!==null&&h.type===Gn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case mr:e:{for(var E=h.key,N=u;N!==null;){if(N.key===E){if(E=h.type,E===Gn){if(N.tag===7){t(c,N.sibling),u=o(N,h.props.children),u.return=c,c=u;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cn&&Ci(E)===N.type){t(c,N.sibling),u=o(N,h.props),u.ref=_t(c,N,h),u.return=c,c=u;break e}t(c,N);break}else n(c,N);N=N.sibling}h.type===Gn?(u=Rn(h.props.children,c.mode,y,h.key),u.return=c,c=u):(y=$r(h.type,h.key,h.props,null,c.mode,y),y.ref=_t(c,u,h),y.return=c,c=y)}return s(c);case Kn:e:{for(N=h.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){t(c,u.sibling),u=o(u,h.children||[]),u.return=c,c=u;break e}else{t(c,u);break}else n(c,u);u=u.sibling}u=nl(h,c.mode,y),u.return=c,c=u}return s(c);case cn:return N=h._init,R(c,u,N(h._payload),y)}if(jt(h))return w(c,u,h,y);if(Et(h))return T(c,u,h,y);Cr(c,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(t(c,u.sibling),u=o(u,h),u.return=c,c=u):(t(c,u),u=el(h,c.mode,y),u.return=c,c=u),s(c)):t(c,u)}return R}var pt=pu(!0),mu=pu(!1),to=Wn(null),ro=null,tt=null,gs=null;function vs(){gs=tt=ro=null}function ws(e){var n=to.current;V(to),e._currentValue=n}function Pl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ut(e,n){ro=e,gs=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ke=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(ro===null)throw Error(v(308));tt=e,ro.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var jn=null;function ks(e){jn===null?jn=[e]:jn.push(e)}function yu(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ks(n)):(t.next=o.next,o.next=t),n.interleaved=t,on(e,r)}function on(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dn=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,on(e,t)}return o=r.interleaved,o===null?(n.next=n,ks(r)):(n.next=o.next,o.next=n),r.interleaved=n,on(e,t)}function Or(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ss(e,t)}}function Wi(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function oo(e,n,t,r){var o=e.updateQueue;dn=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var a=i,d=a.next;a.next=null,s===null?l=d:s.next=d,s=a;var m=e.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==s&&(i===null?m.firstBaseUpdate=d:i.next=d,m.lastBaseUpdate=a))}if(l!==null){var p=o.baseState;s=0,m=d=a=null,i=l;do{var f=i.lane,x=i.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:x,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var w=e,T=i;switch(f=n,x=t,T.tag){case 1:if(w=T.payload,typeof w=="function"){p=w.call(x,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=T.payload,f=typeof w=="function"?w.call(x,p,f):w,f==null)break e;p=b({},p,f);break e;case 2:dn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[i]:f.push(i))}else x={eventTime:x,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(d=m=x,a=p):m=m.next=x,s|=f;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;f=i,i=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(m===null&&(a=p),o.baseState=a,o.firstBaseUpdate=d,o.lastBaseUpdate=m,n=o.shared.interleaved,n!==null){o=n;do s|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);Un|=s,e.lanes=s,e.memoizedState=p}}function Ni(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(v(191,o));o.call(r)}}}var fr={},Ke=Wn(fr),rr=Wn(fr),or=Wn(fr);function Dn(e){if(e===fr)throw Error(v(174));return e}function Is(e,n){switch($(or,n),$(rr,e),$(Ke,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:dl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=dl(n,e)}V(Ke),$(Ke,n)}function mt(){V(Ke),V(rr),V(or)}function vu(e){Dn(or.current);var n=Dn(Ke.current),t=dl(n,e.type);n!==t&&($(rr,e),$(Ke,t))}function xs(e){rr.current===e&&(V(Ke),V(rr))}var K=Wn(0);function lo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Go=[];function Ts(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var Rr=sn.ReactCurrentDispatcher,bo=sn.ReactCurrentBatchConfig,An=0,G=null,re=null,le=null,so=!1,$t=!1,lr=0,hh=0;function ce(){throw Error(v(321))}function Es(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!$e(e[t],n[t]))return!1;return!0}function Cs(e,n,t,r,o,l){if(An=l,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Rr.current=e===null||e.memoizedState===null?yh:gh,e=t(r,o),$t){l=0;do{if($t=!1,lr=0,25<=l)throw Error(v(301));l+=1,le=re=null,n.updateQueue=null,Rr.current=vh,e=t(r,o)}while($t)}if(Rr.current=io,n=re!==null&&re.next!==null,An=0,le=re=G=null,so=!1,n)throw Error(v(300));return e}function Ws(){var e=lr!==0;return lr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function De(){if(re===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var n=le===null?G.memoizedState:le.next;if(n!==null)le=n,re=e;else{if(e===null)throw Error(v(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function sr(e,n){return typeof n=="function"?n(e):n}function Jo(e){var n=De(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=re,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var i=s=null,a=null,d=l;do{var m=d.lane;if((An&m)===m)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(i=a=p,s=r):a=a.next=p,G.lanes|=m,Un|=m}d=d.next}while(d!==null&&d!==l);a===null?s=r:a.next=i,$e(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,G.lanes|=l,Un|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Xo(e){var n=De(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);$e(l,n.memoizedState)||(ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function wu(){}function ku(e,n){var t=G,r=De(),o=n(),l=!$e(r.memoizedState,o);if(l&&(r.memoizedState=o,ke=!0),r=r.queue,Ns(xu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,ir(9,Iu.bind(null,t,r,o,n),void 0,null),se===null)throw Error(v(349));An&30||Su(t,n,o)}return o}function Su(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Iu(e,n,t,r){n.value=t,n.getSnapshot=r,Tu(n)&&Eu(e)}function xu(e,n,t){return t(function(){Tu(n)&&Eu(e)})}function Tu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!$e(e,t)}catch{return!0}}function Eu(e){var n=on(e,1);n!==null&&Ue(n,e,1,-1)}function Li(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},n.queue=e,e=e.dispatch=mh.bind(null,G,e),[n.memoizedState,e]}function ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Cu(){return De().memoizedState}function Hr(e,n,t,r){var o=Ve();G.flags|=e,o.memoizedState=ir(1|n,t,void 0,r===void 0?null:r)}function So(e,n,t,r){var o=De();r=r===void 0?null:r;var l=void 0;if(re!==null){var s=re.memoizedState;if(l=s.destroy,r!==null&&Es(r,s.deps)){o.memoizedState=ir(n,t,l,r);return}}G.flags|=e,o.memoizedState=ir(1|n,t,l,r)}function _i(e,n){return Hr(8390656,8,e,n)}function Ns(e,n){return So(2048,8,e,n)}function Wu(e,n){return So(4,2,e,n)}function Nu(e,n){return So(4,4,e,n)}function Lu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _u(e,n,t){return t=t!=null?t.concat([e]):null,So(4,4,Lu.bind(null,n,e),t)}function Ls(){}function Pu(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Es(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Mu(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Es(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function zu(e,n,t){return An&21?($e(t,n)||(t=Ha(),G.lanes|=t,Un|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t)}function fh(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=bo.transition;bo.transition={};try{e(!1),n()}finally{A=t,bo.transition=r}}function ju(){return De().memoizedState}function ph(e,n,t){var r=In(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Du(e))Ou(n,t);else if(t=yu(e,n,t,r),t!==null){var o=ye();Ue(t,e,r,o),Ru(t,n,r)}}function mh(e,n,t){var r=In(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Ou(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,i=l(s,t);if(o.hasEagerState=!0,o.eagerState=i,$e(i,s)){var a=n.interleaved;a===null?(o.next=o,ks(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=yu(e,n,o,r),t!==null&&(o=ye(),Ue(t,e,r,o),Ru(t,n,r))}}function Du(e){var n=e.alternate;return e===G||n!==null&&n===G}function Ou(e,n){$t=so=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ru(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ss(e,t)}}var io={readContext:je,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},yh={readContext:je,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:_i,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Hr(4194308,4,Lu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Hr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Hr(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ve();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ph.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:Li,useDebugValue:Ls,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Li(!1),n=e[0];return e=fh.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,o=Ve();if(Y){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),se===null)throw Error(v(349));An&30||Su(r,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,_i(xu.bind(null,r,l,e),[e]),r.flags|=2048,ir(9,Iu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ve(),n=se.identifierPrefix;if(Y){var t=en,r=qe;t=(r&~(1<<32-Ae(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=hh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},gh={readContext:je,useCallback:Pu,useContext:je,useEffect:Ns,useImperativeHandle:_u,useInsertionEffect:Wu,useLayoutEffect:Nu,useMemo:Mu,useReducer:Jo,useRef:Cu,useState:function(){return Jo(sr)},useDebugValue:Ls,useDeferredValue:function(e){var n=De();return zu(n,re.memoizedState,e)},useTransition:function(){var e=Jo(sr)[0],n=De().memoizedState;return[e,n]},useMutableSource:wu,useSyncExternalStore:ku,useId:ju,unstable_isNewReconciler:!1},vh={readContext:je,useCallback:Pu,useContext:je,useEffect:Ns,useImperativeHandle:_u,useInsertionEffect:Wu,useLayoutEffect:Nu,useMemo:Mu,useReducer:Xo,useRef:Cu,useState:function(){return Xo(sr)},useDebugValue:Ls,useDeferredValue:function(e){var n=De();return re===null?n.memoizedState=e:zu(n,re.memoizedState,e)},useTransition:function(){var e=Xo(sr)[0],n=De().memoizedState;return[e,n]},useMutableSource:wu,useSyncExternalStore:ku,useId:ju,unstable_isNewReconciler:!1};function Re(e,n){if(e&&e.defaultProps){n=b({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ml(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:b({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Io={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),o=In(e),l=nn(r,o);l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,o),n!==null&&(Ue(n,e,o,r),Or(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),o=In(e),l=nn(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,o),n!==null&&(Ue(n,e,o,r),Or(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=In(e),o=nn(t,r);o.tag=2,n!=null&&(o.callback=n),n=kn(e,o,r),n!==null&&(Ue(n,e,r,t),Or(n,e,r))}};function Pi(e,n,t,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):n.prototype&&n.prototype.isPureReactComponent?!qt(t,r)||!qt(o,l):!0}function Hu(e,n,t){var r=!1,o=En,l=n.contextType;return typeof l=="object"&&l!==null?l=je(l):(o=Ie(n)?Hn:fe.current,r=n.contextTypes,l=(r=r!=null)?ht(e,o):En),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Io,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function Mi(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Io.enqueueReplaceState(n,n.state,null)}function zl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Ss(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=je(l):(l=Ie(n)?Hn:fe.current,o.context=ht(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Ml(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Io.enqueueReplaceState(o,o.state,null),oo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function yt(e,n){try{var t="",r=n;do t+=Qc(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function Zo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function jl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var wh=typeof WeakMap=="function"?WeakMap:Map;function Fu(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){uo||(uo=!0,Vl=r),jl(e,n)},t}function Au(e,n,t){t=nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){jl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){jl(e,n),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function zi(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new wh;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=zh.bind(null,e,n,t),n.then(e,e))}function ji(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Di(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e)}var kh=sn.ReactCurrentOwner,ke=!1;function me(e,n,t,r){n.child=e===null?mu(n,null,t,r):pt(n,e.child,t,r)}function Oi(e,n,t,r,o){t=t.render;var l=n.ref;return ut(n,o),r=Cs(e,n,t,r,l,o),t=Ws(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,ln(e,n,o)):(Y&&t&&ps(n),n.flags|=1,me(e,n,r,o),n.child)}function Ri(e,n,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!Rs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Uu(e,n,l,r,o)):(e=$r(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&o)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:qt,t(s,r)&&e.ref===n.ref)return ln(e,n,o)}return n.flags|=1,e=xn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Uu(e,n,t,r,o){if(e!==null){var l=e.memoizedProps;if(qt(l,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ke=!0);else return n.lanes=e.lanes,ln(e,n,o)}return Dl(e,n,t,r,o)}function $u(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(ot,Te),Te|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(ot,Te),Te|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,$(ot,Te),Te|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,$(ot,Te),Te|=r;return me(e,n,o,t),n.child}function Bu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Dl(e,n,t,r,o){var l=Ie(t)?Hn:fe.current;return l=ht(n,l),ut(n,o),t=Cs(e,n,t,r,l,o),r=Ws(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,ln(e,n,o)):(Y&&r&&ps(n),n.flags|=1,me(e,n,t,o),n.child)}function Hi(e,n,t,r,o){if(Ie(t)){var l=!0;qr(n)}else l=!1;if(ut(n,o),n.stateNode===null)Fr(e,n),Hu(n,t,r),zl(n,t,r,o),r=!0;else if(e===null){var s=n.stateNode,i=n.memoizedProps;s.props=i;var a=s.context,d=t.contextType;typeof d=="object"&&d!==null?d=je(d):(d=Ie(t)?Hn:fe.current,d=ht(n,d));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==r||a!==d)&&Mi(n,s,r,d),dn=!1;var f=n.memoizedState;s.state=f,oo(n,r,s,o),a=n.memoizedState,i!==r||f!==a||Se.current||dn?(typeof m=="function"&&(Ml(n,t,m,r),a=n.memoizedState),(i=dn||Pi(n,t,i,r,f,a,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),s.props=r,s.state=a,s.context=d,r=i):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,gu(e,n),i=n.memoizedProps,d=n.type===n.elementType?i:Re(n.type,i),s.props=d,p=n.pendingProps,f=s.context,a=t.contextType,typeof a=="object"&&a!==null?a=je(a):(a=Ie(t)?Hn:fe.current,a=ht(n,a));var x=t.getDerivedStateFromProps;(m=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==p||f!==a)&&Mi(n,s,r,a),dn=!1,f=n.memoizedState,s.state=f,oo(n,r,s,o);var w=n.memoizedState;i!==p||f!==w||Se.current||dn?(typeof x=="function"&&(Ml(n,t,x,r),w=n.memoizedState),(d=dn||Pi(n,t,d,r,f,w,a)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,a)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),s.props=r,s.state=w,s.context=a,r=d):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Ol(e,n,t,r,l,o)}function Ol(e,n,t,r,o,l){Bu(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return o&&xi(n,t,!1),ln(e,n,l);r=n.stateNode,kh.current=n;var i=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=pt(n,e.child,null,l),n.child=pt(n,null,i,l)):me(e,n,i,l),n.memoizedState=r.state,o&&xi(n,t,!0),n.child}function Vu(e){var n=e.stateNode;n.pendingContext?Ii(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ii(e,n.context,!1),Is(e,n.containerInfo)}function Fi(e,n,t,r,o){return ft(),ys(o),n.flags|=256,me(e,n,t,r),n.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yu(e,n,t){var r=n.pendingProps,o=K.current,l=!1,s=(n.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),$(K,o&1),e===null)return _l(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,l?(r=n.mode,l=n.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Eo(s,r,0,null),e=Rn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Hl(t),n.memoizedState=Rl,e):_s(n,s));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return Sh(e,n,s,r,i,o,t);if(l){l=r.fallback,s=n.mode,o=e.child,i=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=xn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?l=xn(i,l):(l=Rn(l,s,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,s=e.child.memoizedState,s=s===null?Hl(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~t,n.memoizedState=Rl,r}return l=e.child,e=l.sibling,r=xn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function _s(e,n){return n=Eo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wr(e,n,t,r){return r!==null&&ys(r),pt(n,e.child,null,t),e=_s(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sh(e,n,t,r,o,l,s){if(t)return n.flags&256?(n.flags&=-257,r=Zo(Error(v(422))),Wr(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,o=n.mode,r=Eo({mode:"visible",children:r.children},o,0,null),l=Rn(l,o,s,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&pt(n,e.child,null,s),n.child.memoizedState=Hl(s),n.memoizedState=Rl,l);if(!(n.mode&1))return Wr(e,n,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(v(419)),r=Zo(l,r,void 0),Wr(e,n,s,r)}if(i=(s&e.childLanes)!==0,ke||i){if(r=se,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,on(e,o),Ue(r,e,o,-1))}return Os(),r=Zo(Error(v(421))),Wr(e,n,s,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=jh.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,Ee=wn(o.nextSibling),Ce=n,Y=!0,Fe=null,e!==null&&(_e[Pe++]=qe,_e[Pe++]=en,_e[Pe++]=Fn,qe=e.id,en=e.overflow,Fn=n),n=_s(n,r.children),n.flags|=4096,n)}function Ai(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Pl(e.return,n,t)}function qo(e,n,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function Qu(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(me(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ai(e,t,n);else if(e.tag===19)Ai(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(K,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&lo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),qo(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}qo(n,!0,t,null,l);break;case"together":qo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Un|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=xn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=xn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ih(e,n,t){switch(n.tag){case 3:Vu(n),ft();break;case 5:vu(n);break;case 1:Ie(n.type)&&qr(n);break;case 4:Is(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;$(to,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?Yu(e,n,t):($(K,K.current&1),e=ln(e,n,t),e!==null?e.sibling:null);$(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Qu(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,$u(e,n,t)}return ln(e,n,t)}var Ku,Fl,Gu,bu;Ku=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fl=function(){};Gu=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Dn(Ke.current);var l=null;switch(t){case"input":o=il(e,o),r=il(e,r),l=[];break;case"select":o=b({},o,{value:void 0}),r=b({},r,{value:void 0}),l=[];break;case"textarea":o=cl(e,o),r=cl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}hl(t,r);var s;t=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var i=o[d];for(s in i)i.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qt.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var a=r[d];if(i=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&a!==i&&(a!=null||i!=null))if(d==="style")if(i){for(s in i)!i.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in a)a.hasOwnProperty(s)&&i[s]!==a[s]&&(t||(t={}),t[s]=a[s])}else t||(l||(l=[]),l.push(d,t)),t=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,i=i?i.__html:void 0,a!=null&&i!==a&&(l=l||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qt.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&B("scroll",e),l||i===a||(l=[])):(l=l||[]).push(d,a))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};bu=function(e,n,t,r){t!==r&&(n.flags|=4)};function Pt(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function xh(e,n,t){var r=n.pendingProps;switch(ms(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Ie(n.type)&&Zr(),de(n),null;case 3:return r=n.stateNode,mt(),V(Se),V(fe),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(Kl(Fe),Fe=null))),Fl(e,n),de(n),null;case 5:xs(n);var o=Dn(or.current);if(t=n.type,e!==null&&n.stateNode!=null)Gu(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return de(n),null}if(e=Dn(Ke.current),Er(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ye]=n,r[tr]=l,e=(n.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Ot.length;o++)B(Ot[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":bs(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":Xs(r,l),B("invalid",r)}hl(t,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var i=l[s];s==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Tr(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Tr(r.textContent,i,e),o=["children",""+i]):Qt.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&B("scroll",r)}switch(t){case"input":yr(r),Js(r,l,!0);break;case"textarea":yr(r),Zs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Xr)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[Ye]=n,e[tr]=r,Ku(e,n,!1,!1),n.stateNode=e;e:{switch(s=fl(t,r),t){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ot.length;o++)B(Ot[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":bs(e,r),o=il(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=b({},r,{value:void 0}),B("invalid",e);break;case"textarea":Xs(e,r),o=cl(e,r),B("invalid",e);break;default:o=r}hl(t,o),i=o;for(l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="style"?Ca(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ta(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Kt(e,a):typeof a=="number"&&Kt(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Qt.hasOwnProperty(l)?a!=null&&l==="onScroll"&&B("scroll",e):a!=null&&es(e,l,a,s))}switch(t){case"input":yr(e),Js(e,r,!1);break;case"textarea":yr(e),Zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?lt(e,!!r.multiple,l,!1):r.defaultValue!=null&&lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)bu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=Dn(or.current),Dn(Ke.current),Er(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ye]=n,(l=r.nodeValue!==t)&&(e=Ce,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ye]=n,n.stateNode=r}return de(n),null;case 13:if(V(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ee!==null&&n.mode&1&&!(n.flags&128))fu(),ft(),n.flags|=98560,l=!1;else if(l=Er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Ye]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),l=!1}else Fe!==null&&(Kl(Fe),Fe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?oe===0&&(oe=3):Os())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return mt(),Fl(e,n),e===null&&er(n.stateNode.containerInfo),de(n),null;case 10:return ws(n.type._context),de(n),null;case 17:return Ie(n.type)&&Zr(),de(n),null;case 19:if(V(K),l=n.memoizedState,l===null)return de(n),null;if(r=(n.flags&128)!==0,s=l.rendering,s===null)if(r)Pt(l,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=lo(e),s!==null){for(n.flags|=128,Pt(l,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(K,K.current&1|2),n.child}e=e.sibling}l.tail!==null&&ee()>gt&&(n.flags|=128,r=!0,Pt(l,!1),n.lanes=4194304)}else{if(!r)if(e=lo(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Pt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Y)return de(n),null}else 2*ee()-l.renderingStartTime>gt&&t!==1073741824&&(n.flags|=128,r=!0,Pt(l,!1),n.lanes=4194304);l.isBackwards?(s.sibling=n.child,n.child=s):(t=l.last,t!==null?t.sibling=s:n.child=s,l.last=s)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ee(),n.sibling=null,t=K.current,$(K,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return Ds(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Te&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function Th(e,n){switch(ms(n),n.tag){case 1:return Ie(n.type)&&Zr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),V(Se),V(fe),Ts(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return xs(n),null;case 13:if(V(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(K),null;case 4:return mt(),null;case 10:return ws(n.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var Nr=!1,he=!1,Eh=typeof WeakSet=="function"?WeakSet:Set,W=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Z(e,n,r)}else t.current=null}function Al(e,n,t){try{t()}catch(r){Z(e,n,r)}}var Ui=!1;function Ch(e,n){if(xl=Gr,e=eu(),fs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,i=-1,a=-1,d=0,m=0,p=e,f=null;n:for(;;){for(var x;p!==t||o!==0&&p.nodeType!==3||(i=s+o),p!==l||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===e)break n;if(f===t&&++d===o&&(i=s),f===l&&++m===r&&(a=s),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}t=i===-1||a===-1?null:{start:i,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tl={focusedElem:e,selectionRange:t},Gr=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var T=w.memoizedProps,R=w.memoizedState,c=n.stateNode,u=c.getSnapshotBeforeUpdate(n.elementType===n.type?T:Re(n.type,T),R);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){Z(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return w=Ui,Ui=!1,w}function Bt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Al(n,t,l)}o=o.next}while(o!==r)}}function xo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ul(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ju(e){var n=e.alternate;n!==null&&(e.alternate=null,Ju(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ye],delete n[tr],delete n[Wl],delete n[ah],delete n[uh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xu(e){return e.tag===5||e.tag===3||e.tag===4}function $i(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for($l(e,n,t),e=e.sibling;e!==null;)$l(e,n,t),e=e.sibling}function Bl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bl(e,n,t),e=e.sibling;e!==null;)Bl(e,n,t),e=e.sibling}var ie=null,He=!1;function un(e,n,t){for(t=t.child;t!==null;)Zu(e,n,t),t=t.sibling}function Zu(e,n,t){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(mo,t)}catch{}switch(t.tag){case 5:he||rt(t,n);case 6:var r=ie,o=He;ie=null,un(e,n,t),ie=r,He=o,ie!==null&&(He?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(He?(e=ie,t=t.stateNode,e.nodeType===8?Qo(e.parentNode,t):e.nodeType===1&&Qo(e,t),Xt(e)):Qo(ie,t.stateNode));break;case 4:r=ie,o=He,ie=t.stateNode.containerInfo,He=!0,un(e,n,t),ie=r,He=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Al(t,n,s),o=o.next}while(o!==r)}un(e,n,t);break;case 1:if(!he&&(rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(i){Z(t,n,i)}un(e,n,t);break;case 21:un(e,n,t);break;case 22:t.mode&1?(he=(r=he)||t.memoizedState!==null,un(e,n,t),he=r):un(e,n,t);break;default:un(e,n,t)}}function Bi(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Eh),n.forEach(function(r){var o=Dh.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,s=n,i=s;e:for(;i!==null;){switch(i.tag){case 5:ie=i.stateNode,He=!1;break e;case 3:ie=i.stateNode.containerInfo,He=!0;break e;case 4:ie=i.stateNode.containerInfo,He=!0;break e}i=i.return}if(ie===null)throw Error(v(160));Zu(l,s,o),ie=null,He=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(d){Z(o,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qu(n,e),n=n.sibling}function qu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),Be(e),r&4){try{Bt(3,e,e.return),xo(3,e)}catch(T){Z(e,e.return,T)}try{Bt(5,e,e.return)}catch(T){Z(e,e.return,T)}}break;case 1:Oe(n,e),Be(e),r&512&&t!==null&&rt(t,t.return);break;case 5:if(Oe(n,e),Be(e),r&512&&t!==null&&rt(t,t.return),e.flags&32){var o=e.stateNode;try{Kt(o,"")}catch(T){Z(e,e.return,T)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=t!==null?t.memoizedProps:l,i=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Sa(o,l),fl(i,s);var d=fl(i,l);for(s=0;s<a.length;s+=2){var m=a[s],p=a[s+1];m==="style"?Ca(o,p):m==="dangerouslySetInnerHTML"?Ta(o,p):m==="children"?Kt(o,p):es(o,m,p,d)}switch(i){case"input":al(o,l);break;case"textarea":Ia(o,l);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?lt(o,!!l.multiple,x,!1):f!==!!l.multiple&&(l.defaultValue!=null?lt(o,!!l.multiple,l.defaultValue,!0):lt(o,!!l.multiple,l.multiple?[]:"",!1))}o[tr]=l}catch(T){Z(e,e.return,T)}}break;case 6:if(Oe(n,e),Be(e),r&4){if(e.stateNode===null)throw Error(v(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(T){Z(e,e.return,T)}}break;case 3:if(Oe(n,e),Be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Xt(n.containerInfo)}catch(T){Z(e,e.return,T)}break;case 4:Oe(n,e),Be(e);break;case 13:Oe(n,e),Be(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(zs=ee())),r&4&&Bi(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(he=(d=he)||m,Oe(n,e),he=d):Oe(n,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(W=e,m=e.child;m!==null;){for(p=W=m;W!==null;){switch(f=W,x=f.child,f.tag){case 0:case 11:case 14:case 15:Bt(4,f,f.return);break;case 1:rt(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(T){Z(r,t,T)}}break;case 5:rt(f,f.return);break;case 22:if(f.memoizedState!==null){Yi(p);continue}}x!==null?(x.return=f,W=x):Yi(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,i.style.display=Ea("display",s))}catch(T){Z(e,e.return,T)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(T){Z(e,e.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oe(n,e),Be(e),r&4&&Bi(e);break;case 21:break;default:Oe(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Xu(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kt(o,""),r.flags&=-33);var l=$i(e);Bl(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,i=$i(e);$l(e,i,s);break;default:throw Error(v(161))}}catch(a){Z(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Wh(e,n,t){W=e,ec(e)}function ec(e,n,t){for(var r=(e.mode&1)!==0;W!==null;){var o=W,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Nr;if(!s){var i=o.alternate,a=i!==null&&i.memoizedState!==null||he;i=Nr;var d=he;if(Nr=s,(he=a)&&!d)for(W=o;W!==null;)s=W,a=s.child,s.tag===22&&s.memoizedState!==null?Qi(o):a!==null?(a.return=s,W=a):Qi(o);for(;l!==null;)W=l,ec(l),l=l.sibling;W=o,Nr=i,he=d}Vi(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,W=l):Vi(e)}}function Vi(e){for(;W!==null;){var n=W;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:he||xo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!he)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Re(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Ni(n,l,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ni(n,s,t)}break;case 5:var i=n.stateNode;if(t===null&&n.flags&4){t=i;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Xt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}he||n.flags&512&&Ul(n)}catch(f){Z(n,n.return,f)}}if(n===e){W=null;break}if(t=n.sibling,t!==null){t.return=n.return,W=t;break}W=n.return}}function Yi(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var t=n.sibling;if(t!==null){t.return=n.return,W=t;break}W=n.return}}function Qi(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{xo(4,n)}catch(a){Z(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){Z(n,o,a)}}var l=n.return;try{Ul(n)}catch(a){Z(n,l,a)}break;case 5:var s=n.return;try{Ul(n)}catch(a){Z(n,s,a)}}}catch(a){Z(n,n.return,a)}if(n===e){W=null;break}var i=n.sibling;if(i!==null){i.return=n.return,W=i;break}W=n.return}}var Nh=Math.ceil,ao=sn.ReactCurrentDispatcher,Ps=sn.ReactCurrentOwner,ze=sn.ReactCurrentBatchConfig,H=0,se=null,te=null,ae=0,Te=0,ot=Wn(0),oe=0,ar=null,Un=0,To=0,Ms=0,Vt=null,we=null,zs=0,gt=1/0,Xe=null,uo=!1,Vl=null,Sn=null,Lr=!1,mn=null,co=0,Yt=0,Yl=null,Ar=-1,Ur=0;function ye(){return H&6?ee():Ar!==-1?Ar:Ar=ee()}function In(e){return e.mode&1?H&2&&ae!==0?ae&-ae:dh.transition!==null?(Ur===0&&(Ur=Ha()),Ur):(e=A,e!==0||(e=window.event,e=e===void 0?16:Ya(e.type)),e):1}function Ue(e,n,t,r){if(50<Yt)throw Yt=0,Yl=null,Error(v(185));cr(e,t,r),(!(H&2)||e!==se)&&(e===se&&(!(H&2)&&(To|=t),oe===4&&fn(e,ae)),xe(e,r),t===1&&H===0&&!(n.mode&1)&&(gt=ee()+500,ko&&Nn()))}function xe(e,n){var t=e.callbackNode;dd(e,n);var r=Kr(e,e===se?ae:0);if(r===0)t!==null&&ni(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ni(t),n===1)e.tag===0?ch(Ki.bind(null,e)):cu(Ki.bind(null,e)),sh(function(){!(H&6)&&Nn()}),t=null;else{switch(Fa(r)){case 1:t=ls;break;case 4:t=Oa;break;case 16:t=Qr;break;case 536870912:t=Ra;break;default:t=Qr}t=ac(t,nc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function nc(e,n){if(Ar=-1,Ur=0,H&6)throw Error(v(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=Kr(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ho(e,r);else{n=r;var o=H;H|=2;var l=rc();(se!==e||ae!==n)&&(Xe=null,gt=ee()+500,On(e,n));do try{Ph();break}catch(i){tc(e,i)}while(!0);vs(),ao.current=l,H=o,te!==null?n=0:(se=null,ae=0,n=oe)}if(n!==0){if(n===2&&(o=vl(e),o!==0&&(r=o,n=Ql(e,o))),n===1)throw t=ar,On(e,0),fn(e,r),xe(e,ee()),t;if(n===6)fn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lh(o)&&(n=ho(e,r),n===2&&(l=vl(e),l!==0&&(r=l,n=Ql(e,l))),n===1))throw t=ar,On(e,0),fn(e,r),xe(e,ee()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:Mn(e,we,Xe);break;case 3:if(fn(e,r),(r&130023424)===r&&(n=zs+500-ee(),10<n)){if(Kr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cl(Mn.bind(null,e,we,Xe),n);break}Mn(e,we,Xe);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var s=31-Ae(r);l=1<<s,s=n[s],s>o&&(o=s),r&=~l}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nh(r/1960))-r,10<r){e.timeoutHandle=Cl(Mn.bind(null,e,we,Xe),r);break}Mn(e,we,Xe);break;case 5:Mn(e,we,Xe);break;default:throw Error(v(329))}}}return xe(e,ee()),e.callbackNode===t?nc.bind(null,e):null}function Ql(e,n){var t=Vt;return e.current.memoizedState.isDehydrated&&(On(e,n).flags|=256),e=ho(e,n),e!==2&&(n=we,we=t,n!==null&&Kl(n)),e}function Kl(e){we===null?we=e:we.push.apply(we,e)}function Lh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!$e(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fn(e,n){for(n&=~Ms,n&=~To,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),r=1<<t;e[t]=-1,n&=~r}}function Ki(e){if(H&6)throw Error(v(327));ct();var n=Kr(e,0);if(!(n&1))return xe(e,ee()),null;var t=ho(e,n);if(e.tag!==0&&t===2){var r=vl(e);r!==0&&(n=r,t=Ql(e,r))}if(t===1)throw t=ar,On(e,0),fn(e,n),xe(e,ee()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Mn(e,we,Xe),xe(e,ee()),null}function js(e,n){var t=H;H|=1;try{return e(n)}finally{H=t,H===0&&(gt=ee()+500,ko&&Nn())}}function $n(e){mn!==null&&mn.tag===0&&!(H&6)&&ct();var n=H;H|=1;var t=ze.transition,r=A;try{if(ze.transition=null,A=1,e)return e()}finally{A=r,ze.transition=t,H=n,!(H&6)&&Nn()}}function Ds(){Te=ot.current,V(ot)}function On(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,lh(t)),te!==null)for(t=te.return;t!==null;){var r=t;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:mt(),V(Se),V(fe),Ts();break;case 5:xs(r);break;case 4:mt();break;case 13:V(K);break;case 19:V(K);break;case 10:ws(r.type._context);break;case 22:case 23:Ds()}t=t.return}if(se=e,te=e=xn(e.current,null),ae=Te=n,oe=0,ar=null,Ms=To=Un=0,we=Vt=null,jn!==null){for(n=0;n<jn.length;n++)if(t=jn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}t.pending=r}jn=null}return e}function tc(e,n){do{var t=te;try{if(vs(),Rr.current=io,so){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}so=!1}if(An=0,le=re=G=null,$t=!1,lr=0,Ps.current=null,t===null||t.return===null){oe=1,ar=n,te=null;break}e:{var l=e,s=t.return,i=t,a=n;if(n=ae,i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,m=i,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=ji(s);if(x!==null){x.flags&=-257,Di(x,s,i,l,n),x.mode&1&&zi(l,d,n),n=x,a=d;var w=n.updateQueue;if(w===null){var T=new Set;T.add(a),n.updateQueue=T}else w.add(a);break e}else{if(!(n&1)){zi(l,d,n),Os();break e}a=Error(v(426))}}else if(Y&&i.mode&1){var R=ji(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Di(R,s,i,l,n),ys(yt(a,i));break e}}l=a=yt(a,i),oe!==4&&(oe=2),Vt===null?Vt=[l]:Vt.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var c=Fu(l,a,n);Wi(l,c);break e;case 1:i=a;var u=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Sn===null||!Sn.has(h)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=Au(l,i,n);Wi(l,y);break e}}l=l.return}while(l!==null)}lc(t)}catch(E){n=E,te===t&&t!==null&&(te=t=t.return);continue}break}while(!0)}function rc(){var e=ao.current;return ao.current=io,e===null?io:e}function Os(){(oe===0||oe===3||oe===2)&&(oe=4),se===null||!(Un&268435455)&&!(To&268435455)||fn(se,ae)}function ho(e,n){var t=H;H|=2;var r=rc();(se!==e||ae!==n)&&(Xe=null,On(e,n));do try{_h();break}catch(o){tc(e,o)}while(!0);if(vs(),H=t,ao.current=r,te!==null)throw Error(v(261));return se=null,ae=0,oe}function _h(){for(;te!==null;)oc(te)}function Ph(){for(;te!==null&&!td();)oc(te)}function oc(e){var n=ic(e.alternate,e,Te);e.memoizedProps=e.pendingProps,n===null?lc(e):te=n,Ps.current=null}function lc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Th(t,n),t!==null){t.flags&=32767,te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(t=xh(t,n,Te),t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);oe===0&&(oe=5)}function Mn(e,n,t){var r=A,o=ze.transition;try{ze.transition=null,A=1,Mh(e,n,t,r)}finally{ze.transition=o,A=r}return null}function Mh(e,n,t,r){do ct();while(mn!==null);if(H&6)throw Error(v(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(hd(e,l),e===se&&(te=se=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Lr||(Lr=!0,ac(Qr,function(){return ct(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=ze.transition,ze.transition=null;var s=A;A=1;var i=H;H|=4,Ps.current=null,Ch(e,t),qu(t,e),Zd(Tl),Gr=!!xl,Tl=xl=null,e.current=t,Wh(t),rd(),H=i,A=s,ze.transition=l}else e.current=t;if(Lr&&(Lr=!1,mn=e,co=o),l=e.pendingLanes,l===0&&(Sn=null),sd(t.stateNode),xe(e,ee()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(uo)throw uo=!1,e=Vl,Vl=null,e;return co&1&&e.tag!==0&&ct(),l=e.pendingLanes,l&1?e===Yl?Yt++:(Yt=0,Yl=e):Yt=0,Nn(),null}function ct(){if(mn!==null){var e=Fa(co),n=ze.transition,t=A;try{if(ze.transition=null,A=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,co=0,H&6)throw Error(v(331));var o=H;for(H|=4,W=e.current;W!==null;){var l=W,s=l.child;if(W.flags&16){var i=l.deletions;if(i!==null){for(var a=0;a<i.length;a++){var d=i[a];for(W=d;W!==null;){var m=W;switch(m.tag){case 0:case 11:case 15:Bt(8,m,l)}var p=m.child;if(p!==null)p.return=m,W=p;else for(;W!==null;){m=W;var f=m.sibling,x=m.return;if(Ju(m),m===d){W=null;break}if(f!==null){f.return=x,W=f;break}W=x}}}var w=l.alternate;if(w!==null){var T=w.child;if(T!==null){w.child=null;do{var R=T.sibling;T.sibling=null,T=R}while(T!==null)}}W=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,W=s;else e:for(;W!==null;){if(l=W,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Bt(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,W=c;break e}W=l.return}}var u=e.current;for(W=u;W!==null;){s=W;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,W=h;else e:for(s=u;W!==null;){if(i=W,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:xo(9,i)}}catch(E){Z(i,i.return,E)}if(i===s){W=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,W=y;break e}W=i.return}}if(H=o,Nn(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(mo,e)}catch{}r=!0}return r}finally{A=t,ze.transition=n}}return!1}function Gi(e,n,t){n=yt(t,n),n=Fu(e,n,1),e=kn(e,n,1),n=ye(),e!==null&&(cr(e,1,n),xe(e,n))}function Z(e,n,t){if(e.tag===3)Gi(e,e,t);else for(;n!==null;){if(n.tag===3){Gi(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=yt(t,e),e=Au(n,e,1),n=kn(n,e,1),e=ye(),n!==null&&(cr(n,1,e),xe(n,e));break}}n=n.return}}function zh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,se===e&&(ae&t)===t&&(oe===4||oe===3&&(ae&130023424)===ae&&500>ee()-zs?On(e,0):Ms|=t),xe(e,n)}function sc(e,n){n===0&&(e.mode&1?(n=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):n=1);var t=ye();e=on(e,n),e!==null&&(cr(e,n,t),xe(e,t))}function jh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),sc(e,t)}function Dh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),sc(e,t)}var ic;ic=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)ke=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ke=!1,Ih(e,n,t);ke=!!(e.flags&131072)}else ke=!1,Y&&n.flags&1048576&&du(n,no,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fr(e,n),e=n.pendingProps;var o=ht(n,fe.current);ut(n,t),o=Cs(null,n,r,e,o,t);var l=Ws();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ie(r)?(l=!0,qr(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ss(n),o.updater=Io,n.stateNode=o,o._reactInternals=n,zl(n,r,e,t),n=Ol(null,n,r,!0,l,t)):(n.tag=0,Y&&l&&ps(n),me(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fr(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Rh(r),e=Re(r,e),o){case 0:n=Dl(null,n,r,e,t);break e;case 1:n=Hi(null,n,r,e,t);break e;case 11:n=Oi(null,n,r,e,t);break e;case 14:n=Ri(null,n,r,Re(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Dl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Hi(e,n,r,o,t);case 3:e:{if(Vu(n),e===null)throw Error(v(387));r=n.pendingProps,l=n.memoizedState,o=l.element,gu(e,n),oo(n,r,null,t);var s=n.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=yt(Error(v(423)),n),n=Fi(e,n,r,t,o);break e}else if(r!==o){o=yt(Error(v(424)),n),n=Fi(e,n,r,t,o);break e}else for(Ee=wn(n.stateNode.containerInfo.firstChild),Ce=n,Y=!0,Fe=null,t=mu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),r===o){n=ln(e,n,t);break e}me(e,n,r,t)}n=n.child}return n;case 5:return vu(n),e===null&&_l(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,El(r,o)?s=null:l!==null&&El(r,l)&&(n.flags|=32),Bu(e,n),me(e,n,s,t),n.child;case 6:return e===null&&_l(n),null;case 13:return Yu(e,n,t);case 4:return Is(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=pt(n,null,r,t):me(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Oi(e,n,r,o,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,l=n.memoizedProps,s=o.value,$(to,r._currentValue),r._currentValue=s,l!==null)if($e(l.value,s)){if(l.children===o.children&&!Se.current){n=ln(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){s=l.child;for(var a=i.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=nn(-1,t&-t),a.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?a.next=a:(a.next=m.next,m.next=a),d.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Pl(l.return,t,n),i.lanes|=t;break}a=a.next}}else if(l.tag===10)s=l.type===n.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(v(341));s.lanes|=t,i=s.alternate,i!==null&&(i.lanes|=t),Pl(s,t,n),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===n){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}me(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,ut(n,t),o=je(o),r=r(o),n.flags|=1,me(e,n,r,t),n.child;case 14:return r=n.type,o=Re(r,n.pendingProps),o=Re(r.type,o),Ri(e,n,r,o,t);case 15:return Uu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Fr(e,n),n.tag=1,Ie(r)?(e=!0,qr(n)):e=!1,ut(n,t),Hu(n,r,o),zl(n,r,o,t),Ol(null,n,r,!0,e,t);case 19:return Qu(e,n,t);case 22:return $u(e,n,t)}throw Error(v(156,n.tag))};function ac(e,n){return Da(e,n)}function Oh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new Oh(e,n,t,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rh(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ts)return 11;if(e===rs)return 14}return 2}function xn(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $r(e,n,t,r,o,l){var s=2;if(r=e,typeof e=="function")Rs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gn:return Rn(t.children,o,l,n);case ns:s=8,o|=8;break;case rl:return e=Me(12,t,n,o|2),e.elementType=rl,e.lanes=l,e;case ol:return e=Me(13,t,n,o),e.elementType=ol,e.lanes=l,e;case ll:return e=Me(19,t,n,o),e.elementType=ll,e.lanes=l,e;case va:return Eo(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ya:s=10;break e;case ga:s=9;break e;case ts:s=11;break e;case rs:s=14;break e;case cn:s=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=Me(s,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function Rn(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function Eo(e,n,t,r){return e=Me(22,e,r,n),e.elementType=va,e.lanes=t,e.stateNode={isHidden:!1},e}function el(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function nl(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Hh(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hs(e,n,t,r,o,l,s,i,a){return e=new Hh(e,n,t,i,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Me(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ss(l),e}function Fh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function uc(e){if(!e)return En;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ie(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(Ie(t))return uu(e,t,n)}return n}function cc(e,n,t,r,o,l,s,i,a){return e=Hs(t,r,!0,e,o,l,s,i,a),e.context=uc(null),t=e.current,r=ye(),o=In(t),l=nn(r,o),l.callback=n??null,kn(t,l,o),e.current.lanes=o,cr(e,o,r),xe(e,r),e}function Co(e,n,t,r){var o=n.current,l=ye(),s=In(o);return t=uc(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(l,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kn(o,n,s),e!==null&&(Ue(e,o,s,l),Or(e,o,s)),s}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bi(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Fs(e,n){bi(e,n),(e=e.alternate)&&bi(e,n)}function Ah(){return null}var dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function As(e){this._internalRoot=e}Wo.prototype.render=As.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));Co(e,n,null,null)};Wo.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$n(function(){Co(null,e,null,null)}),n[rn]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var n=$a();e={blockedOn:null,target:e,priority:n};for(var t=0;t<hn.length&&n!==0&&n<hn[t].priority;t++);hn.splice(t,0,e),t===0&&Va(e)}};function Us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ji(){}function Uh(e,n,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=fo(s);l.call(d)}}var s=cc(n,r,e,0,null,!1,!1,"",Ji);return e._reactRootContainer=s,e[rn]=s.current,er(e.nodeType===8?e.parentNode:e),$n(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var d=fo(a);i.call(d)}}var a=Hs(e,0,!1,null,null,!1,!1,"",Ji);return e._reactRootContainer=a,e[rn]=a.current,er(e.nodeType===8?e.parentNode:e),$n(function(){Co(n,a,t,r)}),a}function Lo(e,n,t,r,o){var l=t._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var i=o;o=function(){var a=fo(s);i.call(a)}}Co(n,s,e,o)}else s=Uh(t,n,e,o,r);return fo(s)}Aa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Dt(n.pendingLanes);t!==0&&(ss(n,t|1),xe(n,ee()),!(H&6)&&(gt=ee()+500,Nn()))}break;case 13:$n(function(){var r=on(e,1);if(r!==null){var o=ye();Ue(r,e,1,o)}}),Fs(e,1)}};is=function(e){if(e.tag===13){var n=on(e,134217728);if(n!==null){var t=ye();Ue(n,e,134217728,t)}Fs(e,134217728)}};Ua=function(e){if(e.tag===13){var n=In(e),t=on(e,n);if(t!==null){var r=ye();Ue(t,e,n,r)}Fs(e,n)}};$a=function(){return A};Ba=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};ml=function(e,n,t){switch(n){case"input":if(al(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=wo(r);if(!o)throw Error(v(90));ka(r),al(r,o)}}}break;case"textarea":Ia(e,t);break;case"select":n=t.value,n!=null&&lt(e,!!t.multiple,n,!1)}};La=js;_a=$n;var $h={usingClientEntryPoint:!1,Events:[hr,Zn,wo,Wa,Na,js]},Mt={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bh={bundleType:Mt.bundleType,version:Mt.version,rendererPackageName:Mt.rendererPackageName,rendererConfig:Mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=za(e),e===null?null:e.stateNode},findFiberByHostInstance:Mt.findFiberByHostInstance||Ah,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{mo=_r.inject(Bh),Qe=_r}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$h;Ne.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Us(n))throw Error(v(200));return Fh(e,n,null,t)};Ne.createRoot=function(e,n){if(!Us(e))throw Error(v(299));var t=!1,r="",o=dc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Hs(e,1,!1,null,null,t,!1,r,o),e[rn]=n.current,er(e.nodeType===8?e.parentNode:e),new As(n)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=za(n),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return $n(e)};Ne.hydrate=function(e,n,t){if(!No(n))throw Error(v(200));return Lo(null,e,n,!0,t)};Ne.hydrateRoot=function(e,n,t){if(!Us(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",s=dc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=cc(n,null,e,1,t??null,o,!1,l,s),e[rn]=n.current,er(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Wo(n)};Ne.render=function(e,n,t){if(!No(n))throw Error(v(200));return Lo(null,e,n,!1,t)};Ne.unmountComponentAtNode=function(e){if(!No(e))throw Error(v(40));return e._reactRootContainer?($n(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};Ne.unstable_batchedUpdates=js;Ne.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!No(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return Lo(e,n,t,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hc)}catch(e){console.error(e)}}hc(),ha.exports=Ne;var Vh=ha.exports,fc,Xi=Vh;fc=Xi.createRoot,Xi.hydrateRoot;const $s=e=>e.match(/\w+'\w+|\w+|[^\w\s]/g)||[],Zi=e=>{const n=[...e];for(let t=n.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[n[t],n[r]]=[n[r],n[t]]}return n},qi=(e,n=10)=>{const t=[];for(let r=0;r<n;r++){const o=Math.floor(Math.random()*e.length);t.push(e[o])}return t},Yh=(e,n)=>{const t=$s(n),r=e.map(o=>o.word);if(r.length!==t.length)return!1;for(let o=0;o<r.length;o++)if(r[o]!==t[o])return!1;return!0},ea=()=>{try{window.audioContext||(window.audioContext=new(window.AudioContext||window.webkitAudioContext));const e=window.audioContext;e.state==="suspended"&&e.resume();const n=e.createOscillator(),t=e.createGain();n.connect(t),t.connect(e.destination),n.type="square",n.frequency.setValueAtTime(800,e.currentTime),n.frequency.exponentialRampToValueAtTime(100,e.currentTime+.05),t.gain.setValueAtTime(.5,e.currentTime),t.gain.exponentialRampToValueAtTime(.01,e.currentTime+.1),n.start(e.currentTime),n.stop(e.currentTime+.1)}catch(e){console.log("Click sound failed:",e)}},Qh=({word:e,status:n,onClick:t,disabled:r})=>{const i=`px-4 py-2 rounded-lg text-lg font-medium cursor-pointer transition-all duration-200 select-none card-hover ${{available:"bg-white border-2 border-gray-300 text-gray-700 shadow-sm word-card-available",placed:"bg-blue-500 border-2 border-blue-600 text-white shadow-md"}[n]} ${r?"opacity-50 cursor-not-allowed":""}`;return S.jsx("div",{className:i,onClick:r?null:t,children:e})},Kh=({word:e,onClick:n,disabled:t})=>S.jsx("div",{className:`px-3 py-1.5 rounded-lg text-base font-medium cursor-pointer transition-all duration-200 select-none bg-blue-500 border-2 border-blue-600 text-white shadow-md answer-card card-hover ${t?"opacity-50 cursor-not-allowed":""}`,onClick:t?null:n,children:e}),Gh=({sentence:e,slideIndex:n,isSubmitted:t=!1,isCorrect:r=!1,onAnswerChange:o,initialAnswer:l=null,onRestartGame:s,onNextQuestion:i,autoSwitch:a=!1,onAutoSwitchChange:d,hasModified:m=!1})=>{const p=$s(e),[f,x]=F.useState(()=>Zi(p.map((k,I)=>({word:k,originalIndex:I})))),[w,T]=F.useState([]),[R,c]=F.useState(f.map(()=>"available"));F.useEffect(()=>{if(a&&m&&w.length===p.length&&w.length>0){const k=setTimeout(()=>{i&&i()},500);return()=>clearTimeout(k)}},[w,p.length,a,m,i]),F.useEffect(()=>{if(l&&l.length>0){T(l);const k=f.map(()=>"available");l.forEach(I=>{const D=f.findIndex(_=>_.originalIndex===I.originalIndex);D!==-1&&(k[D]="placed")}),c(k)}else T([]),c(f.map(()=>"available"))},[l]),F.useEffect(()=>{const k=Zi(p.map((I,D)=>({word:I,originalIndex:D})));if(x(k),l&&l.length>0){T(l);const I=k.map(()=>"available");l.forEach(D=>{const _=k.findIndex(U=>U.originalIndex===D.originalIndex);_!==-1&&(I[_]="placed")}),c(I)}else T([]),c(k.map(()=>"available"))},[e,n]);const u=F.useCallback((k,I)=>{if(t)return;setTimeout(()=>ea(),0);const D=f.findIndex(J=>J.originalIndex===I);if(D===-1)return;if(R[D]==="placed"){const J=w.findIndex(q=>q.originalIndex===I);if(J!==-1){const q=w.filter((St,Ln)=>Ln!==J);T(q);const Ge=[...R];Ge[D]="available",c(Ge),o&&o(n,q)}return}const _=[...w,{word:k,originalIndex:I}],U=[...R];if(U[D]="placed",_.length===f.length-1){const J=U.findIndex(q=>q==="available");if(J!==-1){const q=f[J].word,Ge=f[J].originalIndex;_.push({word:q,originalIndex:Ge}),U[J]="placed"}}T(_),c(U),o&&o(n,_)},[t,o,n,w,f,R]),h=F.useCallback(k=>{if(t)return;if(setTimeout(()=>ea(),0),k<0||k>=w.length){console.error("Invalid answer index:",k);return}const I=w[k];if(!I||I.originalIndex===void 0){console.error("Invalid answer item at index:",k,I);return}const D=I.originalIndex,_=f.findIndex(J=>J.originalIndex===D),U=w.filter((J,q)=>q!==k);T(U),_!==-1&&c(J=>{const q=[...J];return q[_]="available",q}),o&&o(n,U)},[t,o,n,w,f]),y=F.useCallback(()=>{t||(T([]),c(f.map(()=>"available")),o&&o(n,[]))},[t,o,n,f]),E=()=>f.map((k,I)=>S.jsx(Qh,{word:k.word,status:R[I],onClick:()=>u(k.word,k.originalIndex),disabled:t},`word-${I}`)),N=()=>{const k=[];for(let I=0;I<f.length;I++)I<w.length?k.push(S.jsx(Kh,{word:w[I].word,onClick:()=>h(I),disabled:t},`answer-${I}`)):k.push(S.jsx("div",{className:"w-16 h-10 border-b-2 border-gray-400 flex items-center justify-center"},`slot-${I}`));return k};return S.jsxs("div",{className:"flex flex-col h-full p-6",children:[S.jsxs("div",{className:"flex-1 overflow-auto mb-4",children:[S.jsxs("div",{className:"flex justify-between items-center mb-4",children:[S.jsx("h3",{className:"text-xl font-bold text-gray-600 text-center flex-1",children:"你的答案"}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:y,disabled:t,className:`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${t?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-orange-500 text-white hover:bg-orange-600 shadow-md"}`,children:"🗑️ 清空"}),S.jsx("button",{onClick:s,className:"px-4 py-2 rounded-lg font-medium bg-primary text-white hover:bg-red-500 shadow-md transition-all duration-200",children:"🔄 再来一次"})]})]}),S.jsx("div",{className:"flex flex-wrap justify-center items-center min-h-[120px] bg-blue-50 rounded-xl p-4 border-2 border-blue-200 gap-3",children:N()}),t&&S.jsxs("div",{className:`mt-4 p-4 rounded-lg text-center ${r?"bg-green-100 border-2 border-green-400":"bg-red-100 border-2 border-red-400"}`,children:[S.jsx("p",{className:`text-xl font-bold ${r?"text-green-700":"text-red-700"}`,children:r?"🎉 太棒了！完全正确！":"❌ 再想想看哦~"}),!r&&S.jsxs("p",{className:"text-gray-600 mt-2",children:["正确答案：",S.jsx("span",{className:"font-bold text-secondary",children:e})]})]})]}),S.jsxs("div",{className:"flex-none",children:[S.jsxs("div",{className:"flex justify-between items-center mb-4",children:[S.jsx("h3",{className:"text-xl font-bold text-gray-600 text-center",children:"点击下面的单词按顺序组成句子"}),S.jsx("div",{className:"flex items-center gap-2",children:S.jsxs("label",{className:"flex items-center cursor-pointer",children:[S.jsxs("div",{className:"relative",children:[S.jsx("input",{type:"checkbox",className:"sr-only",checked:a,onChange:k=>d&&d(k.target.checked),disabled:t}),S.jsx("div",{className:`block w-14 h-8 rounded-full transition-colors ${a?"bg-blue-500":"bg-gray-300"} ${t?"opacity-50":""}`}),S.jsx("div",{className:`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${a?"transform translate-x-6":""}`})]}),S.jsx("span",{className:"ml-2 text-sm font-medium text-gray-600",children:"自动切换"})]})})]}),S.jsx("div",{className:"flex flex-wrap justify-center items-center min-h-[100px] bg-white rounded-xl p-4 shadow-inner gap-2",children:E()})]})]})},bh=`\uFEFF\uFEFFMy favorite day of the week is Saturday.
In the morning, I always make my bed.
Then, I usually go to the movie theater in the afternoon.
What do you do on Saturdays?
We are shopping at the department store.
My aunt is a salesperson at the store.
She likes nice clothes and shoes.
I do too.
I'm walking to my cousin's home.
We always have fun.
Yesterday, it was rainy.
We were at the museum.
We can go to the pool.
Today is May 1st.
My uncle and I are making a cake.
He's making a fruit salad too.
The party is at 6 o'clock.
See you then.
There are 1,000 grams in a kilogram.
There are 100 centimeters in a meter.
There are 1,000 meters in a kilometer.
Work with your partner.
Work with your group.
Write your name at the top of the page.
Write your answer on the board.
Let's hike up the hill.
Let's eat first and then hike.
Let's grill hamburgers.
Look, Dad, I can climb.
Don't go too high.
Don't canoe there, Mike.
Watch out.
Do you want to fish with me?
I think I have a fish.
Can you help me?
Please be quiet.
The birds don't like noise.
Can you see that bird in the tree?
You need to be quiet when you watch birds.
Oh, I see it now.
What is he like doing?
He likes climbing.
What is she like doing?
She likes climbing.
Does he like climbing?
Yes, he likes it a lot.
Does she like climbing?
Yes, she likes it a lot.
No, he doesn't like it at all.
No, she doesn't like it at all.
Is he good at skiing?
Is she good at skiing?
I can help you.
You can do it.
Yes, I can.
The girls are going very fast.
Emma, be careful.
Watch out everybody.
When you go snowboarding, always wear a helmet.
When you go to the beach, always put on sunscreen.
Drink water and wear a hat too.
When you go canoeing on the river, always wear a life jacket.
Never stand up in the canoe.
Be safe.
Look at the hippopotamus.
Why is it in the water?
I think it likes to swim.
Look, Julie.
It looks just like my toy panda at home.
But this one is a lot bigger.
James, look at the butterfly.
I can't see it.
I don't like bees.
I don't see it.
Ah, stop.
Alex, look at that gorilla.
It looks so strong.
It does look strong.
Can it learn to fly?
Now, let's go see the hippopotamus.
The hippopotamus is bigger than the panda.
The hippopotamus is the biggest.
Which one is the smallest?
The bee is the smallest.
The eel is as long as the seal.
Is the eel as long as the seal?
Yes, it is.
Mike and Leo are at the aquarium with their mom.
Which one would you like?
I'd like the smallest one please.
I'd like the biggest one please.
Mike's dad is at work.
He likes caps.
Which one would he like?
Do you like it Dad?
Thanks boys, this is the best cap.
Can I help you?
I have very long hair.
Can you cut it?
First, look at these magazines.
Then let's talk about it.
Which hairstyle would you like, Anne?
Can I have that one?
That girl has shoulder length hair.
You can't have blonde hair.
My hair is brown, and it's curly too.
I like my hair.
You have nice hair.
You have very nice hair too.
What would you like to do?
I'd like to have really short hair, please.
Like that.
First, let's wash it.
Then I can cut it.
I like your straight hair, Julie.
Oh, look at that picture.
That woman is so pretty.
Yes, I love her hair.
What does he look like?
He has short black hair and brown eyes.
What does she look like?
She has short black hair and glasses.
He has short black hair and a beard.
Which one is your brother?
Which one is your sister?
What does the watch look like?
What do the earrings look like?
They are new and black.
Which watch does he want to wear?
He wants to wear the black one.
Which watch does she want to wear?
She wants to wear the black one.
Which gloves does he want to wear?
He wants to wear the black ones.
Which gloves does she want to wear?
She wants to wear the black ones.
It's the day of the school play.
Good luck with the play.
What can I do now?
You can share mine.
Mike and his mother are watching the play.
Which one is Emma?
She's the one wearing black and white socks.
Who's that wearing the red t-shirt?
The caterpillar is the same color as the stick.
The caterpillar is the same shape as the stick.
The shape and color of some insects and animals help them to be safe.
They can hide from other animals.
Can you find the caterpillar?
Birds can't see this one.
This butterfly is hard to see.
It looks like the leaf.
This snake is the same color and shape as the grass.
This fish is good at hiding in the sand.
Sharks can't find it.
Look at number 22.
I like her blue bike.
Her name is Olivia.
Her bike is small and new.
Oh, look at Karen.
Oh, I see them.
His name is John.
Number 39 is strong.
I know.
Is he thirsty?
Let's ride our bikes too.
The girl is tall.
The boy is taller.
The man is short.
The woman is shorter.
The woman is old.
The man is older.
The boy is young.
The girl is younger.
The boy is strong.
The girl is stronger.
The boy is weak.
The girl is weaker.
Danny is taller.
Mike is older.
Leo is younger.
Emma is stronger.
Anne is weaker.
The red socks are thicker than the blue socks.
The blue socks are thinner than the red socks.
The white t-shirt is cleaner than the pink t-shirt.
The pink t-shirt is dirtier than the white t-shirt.
The purple hat is prettier than the brown hat.
The brown hat is uglier than the purple hat.
Is the red sweater thicker than the blue sweater?
Is the red sweater thinner than the blue sweater?
Julie and Emma are shopping.
Look at her shirt.
I like her boots.
I like this shirt.
We can wear cool clothes too.
I want to be older.
I like your shoes.
Which one is harder?
The marble is harder.
Which one is softer?
The sofa is softer.
Which one is heavier?
The book is heavier.
Which one is lighter?
The box is lighter.
Do you?
I make my bed in the morning.
I walk the dog in the afternoon.
Do you have a dog?
My grandmother does.
She has a nice dog.
I walk her dog in the afternoon.
My mom doesn't like dirty rooms.
I do laundry in the morning.
When do you do laundry?
I do laundry in the evening.
I make my bed before school.
I do laundry after school.
I walk the dog before school.
When does he make his bed?
He makes his bed before school.
When does she make her bed?
She makes her bed before school.
When does he walk the dog?
He walks the dog before school.
When does she walk the dog?
She walks the dog before school.
When does he do laundry?
He does laundry before school.
When does she set the table?
When does he clean his room?
When does she wash the dishes?
I usually take out the garbage.
What are his chores?
What are her chores?
She never takes out the garbage.
Mike and Danny are at school.
Do you want to come over?
Oh, my brother's birthday party is today.
Don't run.
Mike and Danny have a great idea.
Their milk is great.
My name is Luke.
I go to school at 8.30 in the morning.
Hello, my name is Brian.
I do my homework in the afternoon.
My name is Allison.
I help my family on the farm.
After breakfast, I go to school.
I come home in the afternoon at 3.30.
After school, I watch TV and eat a snack.
I love popcorn.
We have carrots, tomatoes, and peas.
We have dinner at 7 o'clock.
After dinner, I do my homework.
Finally, I go to bed at 9.30.
I'm Laura, and this is my family.
My brother takes out the garbage.
Oh look!
What do you like here?
The amusement park is cool.
The rides are fast.
I like that.
The fish in the aquarium are so pretty.
There are big fish and little fish.
I can swim in the big pool too.
I like the museum.
There is very pretty art.
The hotel is great.
Everybody is helpful and nice.
Can we go to the hotel now?
Let's go.
Where was he yesterday?
He was at the beach.
Where was she yesterday?
She was at the beach.
Was he at the beach yesterday?
Yes, he was.
He was at the aquarium.
Was she at the beach yesterday?
Yes, she was.
She was at the aquarium.
Where were they yesterday?
They were at the bookstore.
Were they at the bookstore yesterday?
Yes, they were.
They were at the pharmacy.
The class is at the amusement park today.
Class, let's meet here at five o'clock.
Okay, see you then.
Where are Mike and Danny?
Do we have time for ice cream?
Yes we do.
Where were you?
We were...
It's time for a new watch, Mike.
Let's meet here before school.
See you at 7.15.
Okay, be on time.
Let's meet here in the afternoon.
See you at 1 o'clock.
Let's meet here at 5 o'clock.
See you at 5 o'clock.
How was the weather yesterday?
It was sunny.
How was the weather on Monday?
We're at the beach in Mexico.
Turkey is nice.
On Thursday, it was cloudy.
How are you?
Yesterday, it was stormy.
My family was in South Korea.
How was the weather?
It was cold.
On Friday, it was snowy.
Is that my new lunch box?
Do you like it?
Dad, can I borrow the stapler?
I don't know.
Oh, there it is.
I need a dictionary today, too.
Where is it?
It was on the table yesterday.
Oh, look.
Where was the folder?
It was on the table.
What was on the table?
A folder was on the table.
There were some magazines on the table.
Were there any magazines on the table?
Yes, there were.
My desk is next to my bed.
My favorite subject is math.
I'm listening to music.
We eat dinner at 7 o'clock.
I want spaghetti.
When do you eat dinner?
I'm playing my new video game in the living room.
I like karate.
I go to karate class on Mondays.
When do you go to English class?
Look, purple flowers.
My favorite color is purple.
I'm wearing a purple shirt and a purple skirt.
I'm wearing purple shoes too.
What are you wearing?
Study for a test.
Take a test.
Danny, do you like peanuts?
Sure, I like peanuts.
Okay, let's share.
Mom, can I have gum, please?
Are you thirsty?
Mike, I don't want popcorn.
What do you want, Leo?
Is that chocolate?
Do you have potato chips?
Yes, here you are.
Can I have a soda, too, please?
I want some gum.
I don't want any gum.
He wants some gum.
He doesn't want any gum.
She wants some gum.
She doesn't want any gum.
What do you want?
What does he want?
What does she want?
Do you need any carrots?
Yes, we do.
What do they need?
They need a carrot.
They need some carrots.
Mike and Leo are hungry.
I want french fries.
Just try it, Leo.
Vegetables are very good for you.
Yeah, I like vegetables.
But I want french fries.
Just try it.
But I want french fries, french fries, french fries.
I want to make an omelette.
I need some eggs and some milk.
I want to make a smoothie.
I need some bananas and some yogurt.
I want to make a fruit salad.
I need some oranges and some peaches.
I want to make a milkshake.
I need some milk and some ice cream.
Where are we going, Mike?
We're going to the park.
Look, there are Mike and Leo.
Mike is wearing an orange t-shirt.
Now I see them.
Mom, can we see a movie?
Maybe we can go on Sunday.
Where can I get some eggs?
The supermarket is on this street.
Can you see the post office?
Then the supermarket is second.
I see it.
Come on, Danny.
I need a new shirt.
Are we going to the department store next to the post office?
Yes, we are.
He's shopping.
She's shopping.
What are they doing at the department store?
They're shopping.
What are they doing at the supermarket?
They're buying groceries.
What are they doing at the movie theater?
They're watching a movie.
What are they doing at the park?
What are they doing at the post office?
What are they doing at the library?
The man is lost.
Yes, the school is across from the supermarket.
Ah, I see it.
I see the post office.
I see the restaurant.
I see the supermarket.
Let's make a town.
What colors do you like?
What shapes can you see?
Can your house stand?
My name is Stephanie.
My friends and I go to the movie theater on Saturdays.
We like watching movies.
We eat popcorn too.
Are you the librarian?
Yes, I am.
I'm looking for a great book.
Okay, let's see.
Is she a salesperson mom?
I think so.
Hi, can I help you?
Yes, we like that purple sofa.
Do you work here?
This is for my grandmother.
My name is Jeff.
Can I have the steak, please?
My dog is sick.
I can help.
Danny, give the groceries to the cashier.
Here you are.
Who works at the supermarket?
The cashier works at the supermarket.
Who works at the library?
The librarian works at the library.
Who works at the post office?
The postal worker works at the post office.
Who works at the department store?
The salesperson works at the department store.
Who works at the restaurant?
The server works at the restaurant.
Who works at the animal hospital?
The vet works at the animal hospital.
Where does the cashier work?
Where does the server work?
Where does the salesperson work?
Where does the librarian work?
Where does the vet work?
Where does the postal worker work?
What does the cook do?
The cook makes food.
What does the salesperson do?
The salesperson sells things.
What does the vet do?
The vet helps sick animals.
What does the bus driver do?
What does the pilot do?
What does the firefighter do?
Does the cook make food?
Yes, he does.
Does the cook sell things?
Does the vet fly planes?
Does the firefighter fight fires?
Yes, she does.
Does the pilot drive buses?
Does the salesperson sell things?
Does the bus driver help sick animals?
Emma and Anne are shopping for a birthday present for Mom.
How much is this sweater?
How much are these shoes?
It's time to go home.
Emma, we don't have a present for Mom.
We can make a present.
Mom, these are for you.
Excuse me how much is this sweater?
Excuse me how much is this coat?
Excuse me how much is this pen?
How much is this bike?
How much is this pen?
Matt is sick.
He has a cold.
He's eating soup.
Maggie is sick.
She has a fever.
The doctor can help her.
This is Nick.
He has a stomach ache.
This is Kelly.
She's sleeping.
She has a headache.
This is my family.
These are my grandparents.
My grandfather really likes baseball.
My grandmother really likes flowers.
Here are my parents.
My mother is wearing a purple dress.
And my father is wearing a white shirt.
My sister is standing next to me.
My mother has a brother.
He's wearing an orange t-shirt.
She's next to him, and is wearing a pink shirt.
Do you see his t-shirt?
He likes karate.
She has a doll.
Who are they?
I can sing.
Can you dance?
I can draw.
I can write in my new notebook.
Please read this.
This is a good book.
I'm reading.
I'm not writing.
He's reading.
He isn't writing.
She's reading.
She isn't writing.
What are you doing?
We're eating.
We aren't drinking.
They're eating.
They aren't drinking.
What are they doing?
I have a new game.
Let's play.
Can I play too?
We're playing.
Let's dance.
We're dancing.
Can I dance too?
Let's eat.
Can I eat too?
Is he playing the guitar?
Yes, he is.
Is she playing the guitar?
Yes, she is.
Are they playing the guitar?
Yes, they are.
Your new books are under the table.
Mike, your cat is under the sofa.
The clock is in the box.
Let's play a game.
The books are on the bookshelf.
Is there a bed next to the bookshelf?
Yes, there is.
There are two beds in the bedroom.
Are there two beds in the bedroom?
Yes, there are.
Let's clean up.
There are books under the table.
The living room's messy, let's clean up.
We have fingers, we have hands, we can clean up, yes we can.
The bathroom's messy, let's clean up.
The bedroom's messy, let's clean up.
How many pencils are there?
There are 24 pencils.
How many markers are there?
There are 18 markers.
How many crayons are there?
There are 64 crayons.
How many cards are there?
There are 52 cards.
How many red pencils are there?
There are 8 red pencils.
How many blue pencils are there?
There are 16 blue pencils.
How many yellow pencils are there?
There are 9 yellow pencils.
There are 33 pencils.
How many pink books are there?
There are 10 pink books.
How many orange books are there?
There are 7 orange books.
How many green books are there?
There are 11 green books.
How many books are there?
There are 28 books.
The sheep is on the chair.
The whale has a wheel.
There are three phones.
Let's play a game of... one o'clock.
I can see that clock.
How many clocks are there?
There are 20 clocks.
What time is it?
When do you eat breakfast?
I eat breakfast at 7 o'clock.
We eat breakfast at 7 o'clock.
When does he eat breakfast?
He eats breakfast at 7 o'clock.
When does she eat breakfast?
She eats breakfast at 7 o'clock.
I eat breakfast at 7:15.
I like eggs and juice.
When do you eat lunch?
I eat lunch at noon.
I like soup and salad.
I eat dinner at 6:45.
Let's play, Dad.
Let's play, Mike.
Good night, what time is it?
It's time for bed, good night what time is it?
When does he wake up?
When does she wake up?
He eats breakfast at 7:30 in the morning.
He goes to school at 8:15 in the morning.
He eats lunch at 12:30 in the afternoon.
He eats a snack at 3:15 in the afternoon.
He plays soccer at 3:45 in the afternoon.
He comes home at 5 o'clock in the afternoon.
He plays the guitar at 5:45 in the evening.
He watches TV at 6:30 in the evening.
He eats dinner at 7:15 in the evening.
He does homework at 8 o'clock at night.
He goes to bed at 9:45 at night.
Look at this spider.
I like science.
Look at these.
I like social studies.
I like art.
I like math.
I have a soccer ball.
I like PE.
I like music.
His favorite subject is science.
Her favorite subject is science.
Danny goes to karate class on Mondays.
Julie goes to dance class on Tuesdays.
Mike goes to swimming class on Wednesdays.
Jay goes to English class on Thursdays.
Emma goes to swimming class on Fridays.
Carla goes to dance class on Saturdays.
When does he go to karate class?
He goes to karate class on Tuesdays.
When does she go to karate class?
She goes to karate class on Tuesdays.
Do you speak English?
Yes, I do.
Can you play soccer?
See you.
My name is Danny.
I have a sister.
I like green.
I like pizza.
I don't like green pizza.
I have a brother and a sister.
My name is Julie.
I have two brothers.
I can play soccer.
I like soccer.
I have a brother.
I have a bike.
I like my bike.
Today is Sunday.
There are seven days in the week.
What day is it today?
Today is Monday.
Today is Tuesday.
Today is Wednesday.
Today is Thursday.
Today is Friday.
Today is Saturday.
My hands are cold.
Are you happy?
Yes I am.
Are you sad?
Are you hungry?
Are you cold?
Are you hot?
Is he sick?
Yes he is.
Is he excited?
Is he tired?
Is she tired?
Is she bored?
Yes she is.
Ready, set, go!
Are you okay?
I think so!
What can he see?
He can see a bird.
What can she see?
She can see a bird.
What can he hear?
He can hear a car.
What can he smell?
He can smell a flower.
What can he taste?
He can taste ice cream.
What can he touch?
He can touch a ball.
What can you see?
I can see a pen.
I can touch it too.
What can you hear?
I can hear a dog.
I like dogs.
What can you smell?
I can smell bread.
I can taste it too.
I can see pizza.
I can smell it.
I can hear a bus.
What can you touch?
I can touch a flower.
I can smell it too.
This is my mother.
This is my father.
Are you a doctor?
My name is Mr. Smith.
My name is Jay.
My name is Carla.
Is he a doctor?
Is she a doctor?
They are police officers.
They are firefighters.
Are they police officers?
Are they soccer players?
Look at me.
I like trees.
Danny, be careful.
May I borrow your phone?
Excuse me, may I borrow your phone?
Sure here you are.
Please, may I borrow your phone?
Excuse me, may I borrow your pen?
Please, may I borrow your pen?
Excuse me, may I borrow your book?
Please, may I borrow your book?
May I borrow your pen?
May I borrow your marker?
The girl is in the cave.
The hippo is on the jug.
I can see six kittens.
I like steak.
I don't like steak.
I like spaghetti.
I like soup.
Look, salad.
I like salad.
What are those?
Those are eggs.
Are those french fries?
I want soup.
I don't want soup.
He wants soup.
He doesn't want soup.
She wants soup.
She doesn't want soup.
I have apples.
I don't have apples.
He has apples.
He doesn't have apples.
She has apples.
She doesn't have apples.
Do you have apples?
Does he have apples?
Does she have apples?
Do you want an apple?
Do you want an apple, Anne?
I have an apple.
Do you want an orange?
Do you want a peach?
Do you want a banana?
Do you like milk?
Do you like yogurt?
Do you like cheese?
Do you like butter?
I have a yellow shirt and green pants.
He has green shoes.
I have a purple skirt.
I have gray socks.
She has red shoes.
I have blue pants and gray shoes.
She has a red dress.
I have a green dress.
She has a white shirt.
He's wearing a shirt.
She's wearing a shirt.
What's he wearing?
He's wearing a white shirt and gray pants.
What's she wearing?
She's wearing a white shirt and gray pants.
I'm wearing a cap.
We're wearing caps.
I'm wearing a red cap and green shorts.
We're wearing red caps and green shorts.
I'm wearing a blue t-shirt.
I'm wearing orange shorts.
I'm wearing green sneakers and a red cap on my head.
I can't find my mother.
She's wearing a pink t-shirt and black pants.
This is my friend.
Sarah likes cats.
Where is your eye?
This is your eye.
I want my t-shirt.
I wear a t-shirt.
This is my desk.
I like drawing.
I play in the house.
We see bugs.
I am happy.
We have squares.
It is sunny today.
It is hot.
Let's go!
It is time for school.
I go by truck.
I walk to school.
There are cans.
Halloween is fun.
Trick or Treat.
It is Christmas Day.
We are at the concert.
There is an ice piano.
This is my music box.
This is my kangaroo.
We are camping.
We see many stars.
Let's make a salad.
We are at the water park.
Paper planes are fun!
Mr. Brown is a good neighbor.
We like our bike.
Let's make shadow art.
Night animals are up too.
The Moon is up.
I see with my eyes.
I hear with my ears.
I taste the pepper.
It is hot!
I am wearing a wool hat.
We are at the beach.
I am at the playground.
We play tag.
This is my town.
There is a parade today.
My street is noisy.
Today is show and tell.
Music class is fun.
I hold things every day.
I have three neighbors.
Let's play ping pong.
There are many sports balls.
Let's wash our hands.
We are in safety class.
Look for the crosswalk.
My mom plays the piano.
My uncle plays the guitar.
My dad plays the drums.
My mom is the singer.
Today is Sports Day.
My family likes sports.
I have a penpal.
Her name is Mika.
She lives in Japan.
These are my friends.
Mia wants to be a singer.
I want to be a pilot.
We go on a picnic.
We meet a lot of food.
I want to make a new drink.
I get a big bowl.
The jungle is big and green.
Many animals live there.
My mom and I go to the pet shop.
Sue loves swimming.
Let's play soccer.
Today is Father's day.
Patty is an artist.
She loves to paint faces.
Welcome to my birthday party!
Mom and Dad come home.
She is a baby.
Time to go to school.
Will likes numbers.
His favorite subject is math.
It is fall.
It is time to start school.
Bob is hungry and he meows.
I feed him.
I play with my little brother.
We play hide and seek.
Every day is fun at school.
Monday is art day.
Yay! It is the weekend!
We can watch TV!
Bunny sees a green sprout.
Plants are living things.
Welcome to the museum.
Please don't touch things.
Tommy uses a tissue.
Tommy always washes his hands.
We visit the Christmas Market.
We are very excited.
It is Chinese New Year's Day.
It is Festival Time.
Lizzy and Maggie make bracelets.
They make friendship bracelets.
Let's make a pot.
What is this animal in the sea?
It is a dolphin.
Let's go snorkeling.
We go to the monkey forest.
Crow is very greedy.
Fox is very clever.
Tom is painting a wall.
Hi, Nurse Ned.
I don't feel so good.
My throat is tickly.
My head is hot.
My nose is runny.
It is time for class!
I open my book and read!
Mike is at the library.
He reads quietly.
Mum is very happy.
Let's make a string phone.
We go to the pumpkin patch.
We pick pumpkins.
I help my grandparents on the farm.
Spring is here.
Flowers bloom on the tree.
We go to the treehouse every day.
What animal am I?
I am a desert fox.
Is this our home, Mama?
Cicadas and fireflies are insects.
The grasshopper plays every day.
The ant works every day.
Mr. Winkle is my neighbor.
I like to help him.
Our house has too many sounds.
This is my mom.
This is my dad.
This is my sister.
This is my dog.
I love my family.
My brother has eyes.
I have eyes.
My brother has hands.
I have hands.
My brother has legs.
I have legs.
My brother has arms.
I have arms.
We draw pictures.
We jump together.
We read books.
Sarah likes birds.
Sarah likes fish.
Sarah likes frogs too.
This is red.
This is green.
This is yellow.
This is blue.
Here is red.
Here is white.
It is pink.
I want orange.
It is purple.
It is orange.
Where is my t-shirt?
Where is my skirt?
Where is my hat?
Where is my bag?
Mom has my bag.
I wear shorts.
I wear socks.
I wear shoes.
This is my pencil.
This is my eraser.
This is my book.
This is not my pencil.
I draw a watermelon.
I draw apples.
I draw oranges.
I draw bananas.
I play in the kitchen.
I play in the bathroom.
I play in the bedroom.
I see one bug.
She sees two bugs.
We see three bugs.
We see four bugs.
I am tired.
I am angry.
I am sad.
We have rectangles.
We have circles.
I only have triangles.
It is sunny and hot.
It is snowy and cold.
Let's run!
Let's walk!
Let's jump!
It is raining.
I go with dad.
I go by car.
I go with mom.
I go by bus.
I go with friends.
I see garbage every day.
There are cups.
There are bottles.
I pick garbage here.
I pick garbage there.
You are a monster.
Here is your candy.
You are a ghost.
You are a witch.
It is cold.
We like sledding.
We like hot drinks.
We like Santa.
We like swimming.
We like cold drinks.
Wow! Everything is ice!
There is an ice cello.
There is an ice flute.
There is an ice harp.
Let's dance together.
What is in it?
A ballerina.
She can sing.
She can dance.
She can go round and round.
Look at the ears.
Look at the nose.
Look at the paws.
Look at the tail.
Look at the pouch.
What is in the pouch?
A baby kangaroo.
Let's hop together.
I hear a bee.
I hear a bear.
I hear a lion.
He is snoring.
We have tomatoes.
Put them in the bowl.
We have carrots.
We have lettuce.
We have corn.
Put some dressing.
Mix everything.
Have an apple.
Have a carrot.
Have a banana.
Have an avocado.
It's yummy.
Have an orange.
Have a tomato.
Have a cucumber.
Have a peach.
We are in the pool.
We ride the slide.
I see a tube.
My brother sees a ball.
We see a unicorn.
We make big planes.
We make small planes.
We make fast planes.
We make slow planes.
It is time to fly!
We fly the paper planes!
He helps everyone.
He helps the gardener.
He helps the baker.
He helps the mailman.
He helps the cat too.
We ride to the pool.
We ride to the library.
We ride to the market.
We ride to the pet shop.
We ride home together.
The sun is up.
There is a shadow.
We trace the tree.
We trace the bike.
We trace the bench.
The sun is down.
Look at our shadow art.
It is dark.
Owls have good eyes.
Foxes have good ears.
Raccoons have good noses.
Night animals go to bed.
I am scared.
I am not scared.
I am very happy.
I taste the lemon.
It is sour!
I taste the coffee.
It is bitter!
I taste the cupcake.
It is sweet!
We eat the cupcakes.
I am wearing a scarf.
I am wearing mittens.
I am wearing boots.
I am in the snow.
I move my arms.
I move my legs.
I make a snow angel.
We look for crabs.
We look for starfish.
We look for seashells.
We jump in the water.
I splash my dad.
I splash my mom.
I splash my sister.
I play on the swing.
This is not fun.
I play on the tires.
I see Sam.
We play on the seesaw.
I go down.
Sam goes up.
This is fun.
We run on the grass.
I am it.
I run after Mia.
I touch her arm.
Mia is it.
She touches his back.
Ben is it.
He touches my shoulder.
The parade goes by the playground.
People clap.
The parade goes by the school.
The parade goes by the bank.
I go by the candy store.
I am in the parade.
The cars honk.
I move my body.
The bus beeps.
The people talk.
The birds sing.
My street makes music.
Patty shows a doll.
It is special.
David shows a baseball.
Tina and Terry show a book.
I show our class picture.
We are special.
We sing and play.
It has black and white keys.
It makes music.
It has two sticks.
It has four strings.
Let's make music together.
I hold many things.
I hold the window.
I hold the door.
I hold the gate.
I hold hands.
Betty has three dogs.
She needs help.
We walk together.
Jim has a baby sister.
He needs help.
We play together.
Lisa has a pretty garden.
We dig together.
We are good friends.
We take out the net.
We take out the ball.
We take out the paddles.
Ted hits the ball.
I hit the ball.
Oops, I miss.
Ted gets a point.
This is a basketball.
It is big and orange.
It feels bumpy.
This is a tennis ball.
It is small and green.
It feels fuzzy.
This is a soccer ball.
It is black and white.
It feels smooth.
My mom washes her hands.
I wash my hands.
My mom uses soap.
I use soap.
My mom uses warm water.
My mom uses a towel.
We have clean hands.
Let's cross the street safely.
We cross here.
Look for the red man.
We stop and wait.
Look for the green man.
We stop and look.
Look to the left.
Look to the right.
No cars then cross the street.
My mom plays the piano quietly.
My uncle plays the guitar quietly.
My dad plays the drums quietly.
She sings loudly.
My mom plays with my dad.
They play tennis.
My mom wins.
My sister plays with my brother.
They play badminton.
My sister wins.
I play with my dog.
We play catch.
We are happy.
I live in Canada.
She eats with chopsticks.
I eat with a fork.
She likes sushi.
She sleeps on a mat.
I sleep on a bed.
We are different.
We are best friends.
We are in art class.
She makes a microphone.
Jack wants to be a tennis player.
He makes a tennis ball.
I make a paper plane.
We are kids now.
We play.
We meet sandwiches.
Joy brings four sandwiches.
We meet cookies.
Justin brings ten cookies.
We meet oranges.
Carl brings five oranges.
There are so many ants.
They are hungry too.
We meet more food.
I get some juice.
I put the juice in the bowl.
I get some tomatoes.
I put the tomatoes in the bowl.
I get some grapes.
I put the grapes in the bowl.
I mix everything together.
Try it.
Is it good?
Can you see the animals?
Snakes live in the jungle.
They are long and green.
Monkeys live in the jungle.
They are cute and brown.
Tigers live in the jungle.
They are orange and black.
Can you live in the jungle?
We look at the pets.
Can we get six puppies?
My mom says no.
Can we get nine kittens?
Can we get one fish?
My mom says yes.
We take our new fish home.
She swims everywhere.
Sue goes to the ocean.
She loves swimming in the ocean.
Sue goes to the lake.
She loves swimming in the lake.
Sue goes to the river.
She loves swimming in the river.
Sue goes home.
She loves swimming in the bathtub.
What do we need?
We need a soccer ball.
Let's find a soccer ball.
We need a soccer field.
Let's find a soccer field.
We need two goals.
Let's find two goals.
We need players.
We have you and me.
Now we can play soccer.
Kay and I have a surprise.
Kay takes the blue chalk.
She draws a blue sky.
I take the red chalk.
I draw a red plane.
Kay and I take the white chalk.
We draw clouds.
Dad comes home.
He is surprised.
Happy Father's Day Dad.
She paints a tiger face.
It is really scary.
She paints a cat face.
It is really cute.
She paints a dog face.
It is really funny.
She paints on faces.
Patty loves to paint on faces.
My friends have presents for me.
Jack gives me one present.
Aimee gives me two presents.
Greg and Lisa give me three presents.
I surprise my friends.
I give them each a present.
How many presents do we have?
They bring my new sister.
I am not a baby.
She cries loudly.
I hold her in my arms.
She smiles happily.
She sleeps quietly.
I am her big brother.
Shary likes books.
Her favorite subject is reading.
Billy likes sports.
His favorite subject is PE.
Jenny likes singing.
Her favorite subject is music.
Paul likes numbers, books, sports, and singing.
Paul loves school.
We need pencils and books.
It is winter.
It is time to wear warm clothes.
We need coats and hats.
It is spring.
It is time to plant a garden.
We need flowers and dirt.
It is summer.
It is time to go on vacation.
Bob is thirsty and he meows.
I give him water.
Bob is bored and he meows.
I play with him.
Bob is scared and he meows.
I hug him.
Bob is sleepy.
He jumps on my bed.
He sleeps on my head.
Sweet dreams Bob.
I count to ten.
I open my eyes.
Where is my brother?
Is he in the bedroom?
Is he behind the door?
Is he in the living room?
Is he behind the curtains?
Oh, there he is.
He is in the kitchen.
He is eating cookies.
We make crafts.
Tuesday is story day.
We listen to stories.
Wednesday is music day.
We sing songs.
We dance.
Thursday is sports day.
We play baseball.
We play soccer.
Friday is game day.
What can we do?
We can watch cartoons!
We can bake cookies!
We can bake chocolate cookies!
We can play outside!
We can play catch!
We can ride our bikes!
We can ride our scooters!
We love the weekend!
Bunny pulls the sprout.
The sprout does not come out.
Squirrel helps bunny.
Skunk helps squirrel and bunny.
Hedgehog helps skunk, squirrel and bunny.
The sprout comes out.
A big orange carrot comes out too.
They grow everywhere.
Some plants are big and strong.
Some plants are small and weak.
Trees are plants.
They have a trunk.
They have roots.
They have many branches.
They have many leaves.
Flowers are plants.
They have a stem.
They have leaves.
They have many colors.
Please follow the rules.
Please don't touch things in the museum.
Please look with your eyes.
Please don't run in the museum.
Please walk with quiet steps.
Please don't shout in the museum.
Please talk with low voices.
Please don't eat in the museum.
Please eat outside.
Thank you for visiting the museum.
Please come again.
Tommy uses a tissue for his runny nose.
Tommy has a cough.
Tommy uses a mask.
Tommy uses a mask for his cough.
Tommy has good health manners.
Look at the ornaments.
They are colorful and pretty.
Look at the cookies.
They are sweet and yummy.
Look at the lights.
They are bright and shiny.
Look at the trees.
They are tall and pointy.
There are so many things.
We love the Christmas Market.
There are colorful dragons.
They spin and jump in the street.
There are fun parades.
Dancers walk and dance in the parades.
There are loud fireworks.
They pop and light up in the sky.
There are happy faces.
People smile and laugh at the festival.
The festival is exciting.
Lizzy picks three strings.
She picks pink, blue and green.
She braids the strings.
Maggie picks three strings.
She picks yellow, orange and red.
Maggie gives her bracelet to Lizzy.
Lizzy gives her bracelet to Maggie.
They like their friendship bracelets very much.
First pick up some clay.
It feels thick and cold.
Next pat it with your hands.
It feels thin and flat.
Then roll it around on the table.
It feels smooth and round.
Finally press it with your thumbs.
It feels mushy and soft.
It is time to dry the pot.
Dry it on the shelf.
It jumps very high.
It can swim and surf too.
It makes many sounds.
It can whistle and click too.
It plays with friends.
It can play with people too.
It splashes around.
It can make waves too.
Can you guess this animal?
Let's get ready to snorkel.
Put the goggles over your eyes.
They help you see.
Put the tube in your mouth.
It helps you breathe.
Put the fins on your feet.
They help you swim.
Are you ready to see the fish?
Are you ready to see the coral too?
Yes, I'm ready to snorkel.
Pam eats a cookie in the forest.
The monkeys take the cookie.
Harry says, don't eat.
Pam runs in the forest.
The monkeys run too.
Harry says, don't run.
Pam shouts in the forest.
The monkey shouts too.
Harry says, don't shout.
Pam stops eating, running and shouting.
The monkeys are happy now.
Crow does not share the cheese.
Fox wants the cheese.
Crow, you are so handsome.
You are strong too.
Crow is happy.
He smiles.
Crow, you are so smart.
You are kind too.
He laughs.
The cheese falls to the ground.
Fox takes the cheese.
Thank you, Crow.
Tom waves to Mary.
Mary come and paint with me.
Mary paints a tall green tree.
Tom waves to Jack.
Jack come and paint with me.
Jack paints three blue birds.
Tom waves to Sarah.
Sarah come and paint with me.
Sarah paints many colorful flowers.
They paint the wall together.
The wall is beautiful.
What's wrong?
Nurse Ned gives me throat candy.
Nurse Ned gives me a cool towel.
Nurse Ned gives me a tissue.
I eat the throat candy.
I put the cool towel on my head.
I blow my nose.
I feel better.
Thank you, Nurse Ned.
It is 9 o'clock!
It is 10 o'clock!
It is time for recess!
I run outside and play!
It is 12 o'clock!
It is time for lunch!
I go to the cafeteria and eat!
It is 3 o'clock!
It is time to go home!
I go home and rest!
Mike talks loudly.
The librarian shakes her head.
No talking in the library.
Mike sings loudly.
No singing in the library.
Mike eats a cookie.
No eating in the library.
Mike runs around.
No running in the library.
Mike sits down.
He picks up a book.
The librarian is happy.
I have a paper cup.
You have a paper cup.
I make a hole in the cup.
You make a hole in the cup.
I put the string through the hole.
You put the string through the hole.
I go to this room.
You go to that room.
Can you hear me?
Yes, I can hear you.
Wow, it really works.
Molly picks a pumpkin.
It is small and flat.
I like my pumpkin.
Todd picks a pumpkin.
It is big and round.
Jessa picks a pumpkin.
It is long and thin.
I pick a pumpkin.
It is square and bumpy.
We like our pumpkins.
Fall is a busy time.
We go to the field.
We pick the corn.
We put it in the basket.
We go to the orchard.
We pick the apples.
We put them in the basket.
We go to the garden.
We pick the beets.
We go to the market.
Everyone likes our corn, apples and beets.
They are white and pink.
They are pretty.
Summer is here.
Cherries grow on the tree.
They are red and yellow.
They are yummy.
Fall is here.
Leaves fall from the tree.
They are red and brown.
They are beautiful.
Winter is here.
The leaves are on the tree.
They are all gone.
See you next spring.
We bring books on Monday.
We read books together.
We bring paper and crayons on Tuesday.
We draw pictures together.
We bring pizza on Wednesday.
We eat pizza together.
We bring a ukulele on Thursday.
We sing songs together.
We bring board games on Friday.
We play games together.
It rains on Saturday and Sunday.
We stay home.
I have big ears.
They are large and pointy.
I can hear very well.
I have big eyes.
They are black and round.
I can see very well.
I have small feet.
They are small and hairy.
I can walk on hot sand.
I have thick fur.
It is soft and fluffy.
I can feel warm at night.
No, it isn't.
This is a cactus.
We see a dark black hole.
This is our home.
Mama and I love our new home.
Cicadas and fireflies are alike.
They have three body parts.
They have two pairs of wings.
They have six legs.
Cicadas and fireflies are different.
Cicadas like trees.
They make loud sounds.
They make sounds during the day.
Fireflies like grass.
They make bright lights.
They make lights at night.
Cicadas and fireflies are alike and different.
The grasshopper sings every day.
The grasshopper sleeps every day.
The grasshopper dances every day.
Winter comes.
The grasshopper is cold and hungry.
The ant is warm and full.
Come inside, let's eat together.
The ant shares food with the grasshopper.
The box is heavy.
I carry the box for him.
Mr. Winkle says thank you.
The dog is bored.
I make a toy for his dog.
The garden is big.
I water the flowers for him.
Mr. Winkle is happy.
I am happy too.
Mom is in the bathroom.
Mom gives Teddy a bath.
It is too loud.
Dad is in the kitchen.
Dad washes the pots.
Edna is in the living room.
Edna plays the piano.
I yell.
Be quiet.
Everyone stops.
It is too quiet.
`,Jh=()=>{const[e,n]=F.useState([]),[t,r]=F.useState([]),[o,l]=F.useState({}),[s,i]=F.useState({}),[a,d]=F.useState(0),[m,p]=F.useState(!1),[f,x]=F.useState(0),[w,T]=F.useState(!1),[R,c]=F.useState(!1),[u,h]=F.useState(!1),[y,E]=F.useState(0),[N,k]=F.useState(!1),[I,D]=F.useState(!1),[_,U]=F.useState({}),[J,q]=F.useState(0),[Ge,St]=F.useState(!1);F.useEffect(()=>{try{const g=bh.split(`
`).map(L=>L.trim()).filter(L=>L.length>0);g.length===0?(console.warn("句子文件为空，使用默认句子"),n(["I love you.","She is a teacher.","They play basketball.","He reads a book.","We go to school."])):n(g)}catch(g){console.error("加载句子文件失败:",g),n(["I love you.","She is a teacher.","They play basketball.","He reads a book.","We go to school."])}},[]),F.useEffect(()=>{if(m&&t.length>0&&f===t.length-1){const g=t.every((X,pe)=>{const an=o[pe];return an&&an.length>0}),L=o[f],P=t[f]?$s(t[f]):[],M=L&&L.length===P.length;if(console.log("检查提交按钮动画条件:",{gameStarted:m,questionsLength:t.length,currentSlide:f,allAnswered:g,userAnswersKeys:Object.keys(o),userAnswersLength:Object.keys(o).length,lastSlideFilled:M,lastSlideAnswerLength:L==null?void 0:L.length,lastSlideWordsLength:P.length}),g&&M){console.log("触发提交按钮动画"),St(!0);const X=setTimeout(()=>{St(!1)},1500);return()=>clearTimeout(X)}}},[f,o,t,m]);const Ln=()=>{if(e.length===0)return;const g=qi(e,10);r(g),l({}),i({}),d(0),x(0),p(!0)},It=(g,L)=>{l(P=>({...P,[g]:L})),U(P=>({...P,[g]:!0}))},C=g=>{try{const L=new(window.AudioContext||window.webkitAudioContext),P=523.25,M=[];g===1?(M.push([0,P]),M.push([.15,P*1.25]),M.push([.3,P*1.5])):g>=10?(M.push([0,P]),M.push([.1,P*1.25]),M.push([.2,P*1.5]),M.push([.3,P*2]),M.push([.4,P*2.5])):g>=5?(M.push([0,P]),M.push([.15,P*1.25]),M.push([.3,P*1.5]),M.push([.45,P*2])):(M.push([0,P]),M.push([.1,P*1.25]),M.push([.2,P*1.5])),M.forEach(([X,pe])=>{const an=L.createOscillator(),Tt=L.createGain();an.connect(Tt),Tt.connect(L.destination),an.type="triangle",an.frequency.setValueAtTime(pe,L.currentTime+X),Tt.gain.setValueAtTime(0,L.currentTime+X),Tt.gain.linearRampToValueAtTime(.4,L.currentTime+X+.1),Tt.gain.exponentialRampToValueAtTime(.01,L.currentTime+X+.6),an.start(L.currentTime+X),an.stop(L.currentTime+X+.8)})}catch(L){console.log("Combo sound failed:",L)}},z=g=>{try{if("speechSynthesis"in window){window.speechSynthesis.cancel();let L="",P="en-US";g===1?L="First Blood!":g===2?L="Double Kill!":g===3?L="Triple Kill!":g===4?L="Quadra Kill!":g===5?L="Penta Kill!":g===6?L="Killing Spree!":g===7?L="Rampage!":g===8?L="Unstoppable!":g===9?L="Godlike!":g>=10&&(L="Legendary!");const M=new SpeechSynthesisUtterance(L);M.lang=P,M.rate=.9,M.pitch=1.2,M.volume=1,window.speechSynthesis.speak(M)}}catch(L){console.log("Combo speech failed:",L)}},j=()=>{try{const g=new(window.AudioContext||window.webkitAudioContext);[523.25,659.25,783.99,1046.5].forEach((P,M)=>{const X=g.createOscillator(),pe=g.createGain();X.connect(pe),pe.connect(g.destination),X.type="sine",X.frequency.setValueAtTime(P,g.currentTime),pe.gain.setValueAtTime(0,g.currentTime),pe.gain.linearRampToValueAtTime(.3,g.currentTime+.1),pe.gain.exponentialRampToValueAtTime(.01,g.currentTime+.8),X.start(g.currentTime+M*.05),X.stop(g.currentTime+1)})}catch(g){console.log("Audio playback failed:",g)}},Q=()=>{try{const g=new(window.AudioContext||window.webkitAudioContext),L=g.createOscillator(),P=g.createGain();L.connect(P),P.connect(g.destination),L.type="sawtooth",L.frequency.setValueAtTime(800,g.currentTime),L.frequency.exponentialRampToValueAtTime(100,g.currentTime+.8),P.gain.setValueAtTime(.3,g.currentTime),P.gain.exponentialRampToValueAtTime(.01,g.currentTime+.8),L.start(g.currentTime),L.stop(g.currentTime+.8)}catch(g){console.log("Deflate sound failed:",g)}},ne=()=>{try{if("speechSynthesis"in window){window.speechSynthesis.cancel();const g=new SpeechSynthesisUtterance("请再接再厉");g.lang="zh-CN",g.rate=.9,g.pitch=1.1,g.volume=1,window.speechSynthesis.speak(g)}}catch(g){console.log("Speech synthesis failed:",g)}},Yn=()=>{let g=0;const L={};t.forEach((P,M)=>{const X=o[M]||[],pe=Yh(X,P);L[M]={submitted:!0,correct:pe},pe&&(g+=10)}),i(L),d(g),g===100?(T(!0),c(!0),j(),E(P=>{const M=P+1;return console.log("连击数:",M),M>=1&&(C(M),z(M)),M}),setTimeout(()=>{c(!1)},3e3)):(T(!1),E(0),k(!1),Q(),h(!0),setTimeout(()=>{ne()},500),setTimeout(()=>{h(!1)},2500))},be=()=>{if(e.length===0)return;"speechSynthesis"in window&&window.speechSynthesis.cancel();const g=qi(e,10);r(g),l({}),U({}),i({}),d(0),x(0),T(!1),c(!1),h(!1),q(L=>L+1)},xt=g=>{x(g)},Je=()=>{f>0&&(U(g=>({...g,[f]:!1})),x(f-1))},_n=()=>{f<t.length-1&&(U(g=>({...g,[f]:!1})),x(f+1))},pc=({combo:g})=>{const L=()=>g>=10?"from-yellow-400 via-red-500 to-pink-500":g===5?"from-purple-400 via-pink-500 to-red-500":g===4?"from-green-400 via-cyan-500 to-blue-500":g===3?"from-blue-400 via-green-500 to-cyan-500":g===2?"from-orange-400 to-red-500":"from-red-400 via-orange-500 to-yellow-500",P=()=>g>=10?"🔥 LEGENDARY! 🔥":g===9?"⚡ GODLIKE! ⚡":g===8?"💥 UNSTOPPABLE! 💥":g===7?"🌪️ RAMPAGE! 🌪️":g===6?"🔥 KILLING SPREE! 🔥":g===5?"🔥 PENTA KILL! 🔥🔥":g===4?"🔥 QUADRA KILL! 🔥":g===3?"🔥 TRIPLE KILL! 🔥":g===2?"⚡ DOUBLE KILL! ⚡":g===1?"🩸 FIRST BLOOD! 🩸":`${g} KILL STREAK!`;return S.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:[S.jsxs("div",{className:"text-center animate-bounce",children:[S.jsx("div",{className:"text-6xl mb-4 animate-pulse"}),S.jsx("div",{className:`text-5xl md:text-6xl font-bold text-white drop-shadow-lg bg-gradient-to-r ${L()} px-8 py-4 rounded-2xl animate-pulse`,children:P()}),S.jsxs("div",{className:"text-3xl text-yellow-300 mt-4 drop-shadow-lg",children:["⭐ x ",g," ⭐"]})]}),S.jsx("style",{children:`
          @keyframes combo-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
        `})]})},mc=()=>{const g=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#ffeaa7","#dfe6e9","#fd79a8","#a29bfe"];return S.jsxs("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:[Array.from({length:100}).map((P,M)=>{const X={left:`${Math.random()*100}%`,top:"-20px",animation:`fall ${2+Math.random()*3}s linear ${Math.random()*2}s forwards`,backgroundColor:g[Math.floor(Math.random()*g.length)],width:`${8+Math.random()*8}px`,height:`${8+Math.random()*8}px`,borderRadius:Math.random()>.5?"50%":"0",transform:`rotate(${Math.random()*360}deg)`};return S.jsx("div",{className:"absolute",style:X},M)}),S.jsx("style",{children:`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
        `})]})},yc=()=>S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:S.jsxs("div",{className:"text-center animate-bounce",children:[S.jsx("div",{className:"text-8xl mb-4",children:"🎉"}),S.jsx("div",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg",children:"满分！"}),S.jsx("div",{className:"text-4xl font-bold text-red-600 mt-4 drop-shadow-lg",children:"100 分！太棒了！"}),S.jsx("div",{className:"text-2xl text-yellow-300 mt-2 drop-shadow-lg",children:"⭐⭐⭐⭐⭐"})]})}),gc=()=>S.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl m-4 p-8",children:[S.jsx("h2",{className:"text-5xl font-bold text-gray-700 mb-4",children:"🎓 英语句子练习"}),S.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-lg mb-8 max-w-md",children:[S.jsx("h3",{className:"font-bold text-lg mb-3 text-gray-700",children:"📋 游戏规则："}),S.jsxs("ul",{className:"space-y-2 text-gray-600",children:[S.jsx("li",{children:"✅ 共有 10 道题目"}),S.jsx("li",{children:"✅ 点击单词放入答案区"}),S.jsx("li",{children:"✅ 点击答案区的单词可以移除"}),S.jsx("li",{children:"✅ 每题 10 分，满分 100 分"}),S.jsx("li",{children:"✅ 提交后可以看到正确答案"})]})]}),S.jsx("button",{onClick:Ln,className:"bg-primary hover:bg-red-500 text-white text-2xl font-bold px-12 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105",children:"🚀 开始游戏"})]}),vc=()=>{var g,L;return t.length===0?null:S.jsxs("div",{className:"flex flex-col h-[calc(100vh-80px)]",children:[u&&S.jsxs("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-fade-out",children:[S.jsxs("div",{className:"bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl px-6 py-3 shadow-lg text-center animate-pulse",children:[S.jsx("p",{className:"text-lg font-bold text-gray-700",children:"💪 请再接再厉！"}),S.jsx("p",{className:"text-sm text-gray-600 mt-1",children:a>=80?"已经很棒了，继续加油！":a>=60?"继续努力，你可以做得更好！":"不要气馁，多练习就会进步！"})]}),S.jsx("style",{children:`
          @keyframes fade-out {
            0% {
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          .animate-fade-out {
            animation: fade-out 1.5s ease-in-out forwards;
          }
        `})]}),S.jsx("div",{className:"flex-1 p-4 bg-white",children:S.jsx(Gh,{sentence:t[f],slideIndex:f,isSubmitted:((g=s[f])==null?void 0:g.submitted)||!1,isCorrect:((L=s[f])==null?void 0:L.correct)||!1,onAnswerChange:It,initialAnswer:o[f]||null,onRestartGame:be,onNextQuestion:_n,autoSwitch:I,onAutoSwitchChange:D,hasModified:!!_[f]},`${J}-${f}-${t[f]}`)}),S.jsx("div",{className:"flex flex-col items-center gap-2 p-4 bg-white border-t",children:S.jsx("div",{className:"flex justify-center gap-2 mb-2",children:t.map((P,M)=>{var X,pe;return S.jsx("button",{onClick:()=>xt(M),className:`
                  w-3 h-3 rounded-full transition-all
                  ${M===f?"bg-primary scale-125":"bg-gray-300 hover:bg-gray-400"}
                  ${(X=s[M])!=null&&X.submitted?(pe=s[M])!=null&&pe.correct?"bg-green-500":"bg-red-500":""}
                `,title:`第 ${M+1} 题`},M)})})}),S.jsxs("div",{className:"flex flex-wrap justify-between items-center p-4 bg-white border-t gap-2",children:[S.jsx("button",{onClick:Je,disabled:f===0,className:`
              px-6 py-3 rounded-lg font-bold text-lg transition-all flex-shrink-0
              ${f===0?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-primary text-white hover:bg-red-500 hover:scale-105"}
            `,children:"⬅️ 上一题"}),S.jsx("div",{className:"w-full flex justify-center order-first md:order-none md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2",children:S.jsxs("div",{className:"flex flex-col items-center",children:[S.jsxs("p",{className:"text-lg font-bold text-gray-700",children:["第 ",f+1," / ",t.length," 题"]}),Object.values(s).some(P=>P.submitted)&&S.jsxs("div",{className:`
                  mt-1 px-3 py-1 rounded-full text-sm font-bold transition-all
                  ${w?"bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white":"bg-gray-100 text-primary"}
                `,children:[""," 得分：",a," / 100 ",""]}),y>=1&&S.jsx("div",{className:"mt-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 text-white animate-pulse",children:y===1?"🩸 FIRST BLOOD!":y===2?"⚡ DOUBLE KILL!":y===3?"🔥 TRIPLE KILL!":y===4?"🔥 QUADRA KILL!":y===5?"🔥 PENTA KILL!":y===6?"🔥 KILLING SPREE!":y===7?"🌪️ RAMPAGE!":y===8?"💥 UNSTOPPABLE!":y===9?"⚡ GODLIKE!":y>=10?"🔥 LEGENDARY!":`${y} KILL STREAK`})]})}),S.jsx("div",{className:"flex-shrink-0",children:f<t.length-1?S.jsx("button",{onClick:_n,className:"px-6 py-3 rounded-lg font-bold text-lg transition-all bg-secondary text-white hover:bg-cyan-500 hover:scale-105",children:"下一题 ➡️"}):!Object.values(s).some(P=>P.submitted)&&S.jsxs(S.Fragment,{children:[S.jsx("style",{children:`
                    @keyframes submit-button-pulse {
                      0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                      }
                      50% {
                        transform: scale(1.1);
                        box-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6);
                      }
                    }
                    .animate-submit-button {
                      animation: submit-button-pulse 0.5s ease-in-out infinite;
                    }
                  `}),S.jsx("button",{onClick:Yn,className:`bg-success hover:bg-green-400 text-white text-xl font-bold px-6 py-3 rounded-lg shadow-lg transform transition-all hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed ${Ge?"animate-submit-button":""}`,disabled:Object.keys(o).length<t.length||Object.values(o).some(P=>!P||P.length===0),children:"✅ 提交答案"})]})})]})]})};return S.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 pt-4",children:[R&&S.jsx(mc,{}),R&&S.jsx(yc,{}),N&&S.jsx(pc,{combo:y}),S.jsx("div",{className:"container mx-auto pb-4",children:m?vc():gc()})]})};fc(document.getElementById("root")).render(S.jsx(F.StrictMode,{children:S.jsx(Jh,{})}));
