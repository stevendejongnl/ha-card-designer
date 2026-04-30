function e(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new n(i,e,r)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,f=m.trustedTypes,g=f?f.emptyScript:"",v=m.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:o}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const n=r?.call(this);o?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(i)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of r){const r=document.createElement("style"),o=t.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=r;const n=o.fromAttribute(t,e.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){if(void 0!==e){const n=this.constructor;if(!1===r&&(o=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??_)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==o||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,v?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=e=>e,S=$.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,T=`<${O}>`,I=document,N=()=>I.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,P="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,D=/>/g,L=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,H=/"/g,q=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Y=new WeakMap,W=I.createTreeWalker(I,129);function K(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,r=[];let o,n=2===t?"<svg>":3===t?"<math>":"",a=R;for(let t=0;t<i;t++){const i=e[t];let s,c,l=-1,d=0;for(;d<i.length&&(a.lastIndex=d,c=a.exec(i),null!==c);)d=a.lastIndex,a===R?"!--"===c[1]?a=U:void 0!==c[1]?a=D:void 0!==c[2]?(q.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=L):void 0!==c[3]&&(a=L):a===L?">"===c[0]?(a=o??R,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?L:'"'===c[3]?H:z):a===H||a===z?a=L:a===U||a===D?a=R:(a=L,o=void 0);const h=a===L&&e[t+1].startsWith("/>")?" ":"";n+=a===R?i+T:l>=0?(r.push(s),i.slice(0,l)+k+i.slice(l)+C+h):i+C+(-2===l?t:h)}return[K(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class Z{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,s=this.parts,[c,l]=G(e,t);if(this.el=Z.createElement(c,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=W.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(k)){const t=l[n++],i=r.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?te:"?"===a[1]?ie:"@"===a[1]?re:ee}),r.removeAttribute(e)}else e.startsWith(C)&&(s.push({type:6,index:o}),r.removeAttribute(e));if(q.test(r.tagName)){const e=r.textContent.split(C),t=e.length-1;if(t>0){r.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],N()),W.nextNode(),s.push({type:2,index:++o});r.append(e[t],N())}}}else if(8===r.nodeType)if(r.data===O)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(C,e+1));)s.push({type:7,index:o}),e+=C.length-1}o++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,r){if(t===B)return t;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const n=j(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e),o._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(t=J(e,o._$AS(e,t.values),o,r)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??I).importNode(t,!0);W.currentNode=r;let o=W.nextNode(),n=0,a=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new X(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new oe(o,this,e)),this._$AV.push(t),s=i[++a]}n!==s?.index&&(o=W.nextNode(),n++)}return W.currentNode=I,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),j(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Q(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new Z(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new X(this.O(N()),this.O(N()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(void 0===o)e=J(this,e,t,0),n=!j(e)||e!==this._$AH&&e!==B,n&&(this._$AH=e);else{const r=e;let a,s;for(e=o[0],a=0;a<o.length-1;a++)s=J(this,r[i+a],t,a),s===B&&(s=this._$AH[a]),n||=!j(s)||s!==this._$AH[a],s===V?e=V:e!==V&&(e+=(s??"")+o[a+1]),this._$AH[a]=s}n&&!r&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class re extends ee{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??V)===B)return;const i=this._$AH,r=e===V&&i!==V||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const ne=$.litHtmlPolyfillSupport;ne?.(Z,X),($.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let o=r._$litPart$;if(void 0===o){const e=i?.renderBefore??null;r._$litPart$=o=new X(t.insertBefore(N(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};se._$litElement$=!0,se.finalized=!0,ae.litElementHydrateSupport?.({LitElement:se});const ce=ae.litElementPolyfillSupport;ce?.({LitElement:se}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_},he=(e=de,t,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,o,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];t.call(this,i),this.requestUpdate(r,o,e,!0,i)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return ue({...e,state:!0,attribute:!1})}const me=(e,t,i={})=>({name:e,label:t,selector:{entity:i.domain?{domain:i.domain}:{}},required:i.required??!1}),fe=(e,t,i={})=>({name:e,label:t,selector:{text:{multiline:i.multiline??!1}},required:i.required??!1}),ge=(e,t)=>({name:e,label:t,selector:{icon:{}}}),ve=(e,t,i)=>({name:e,label:t,selector:{boolean:{}},default:i}),ye=(e,t,i,r={})=>({name:e,label:t,selector:{select:{options:i}},required:r.required??!1}),be=(e,t,i={})=>({name:e,label:t,selector:{number:{min:i.min,max:i.max,step:i.step??1,mode:i.mode??"box"}}}),_e=(e="theme",t="Theme")=>({name:e,label:t,selector:{theme:{}}}),we=(e,t)=>({name:e,label:t,selector:{ui_action:{}}}),xe=(e,t)=>({name:e,label:t,selector:{template:{}}});function $e(e="entities",t="Entities"){return{type:"hcd-sub-form-list",name:e,title:t,addLabel:"Add entity",itemDefaults:{entity:""},itemSchema:[me("entity","Entity"),fe("name","Name (override)"),ge("icon","Icon"),ye("secondary_info","Secondary info",[{value:"",label:"None"},{value:"entity-id",label:"Entity ID"},{value:"last-changed",label:"Last changed"},{value:"last-updated",label:"Last updated"},{value:"last-triggered",label:"Last triggered"},{value:"position",label:"Position"},{value:"tilt-position",label:"Tilt position"},{value:"brightness",label:"Brightness"}])],itemLabel:(e,t)=>e.entity||e.name||`Item ${t+1}`,reorderable:!0}}const Ae=[{value:"default",label:"Default"},{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],Se=[{value:"default",label:"Default"},{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],Ee=[{value:"var(--accent-color)",label:"Accent"},{value:"var(--primary-color)",label:"Primary"},{value:"#e74c3c",label:"Red"},{value:"#2ecc71",label:"Green"},{value:"#3498db",label:"Blue"}],ke=[{value:"line",label:"Line"},{value:"bar",label:"Bar"}],Ce=[{value:"vertical",label:"Vertical (default)"},{value:"horizontal",label:"Horizontal"},{value:"icon_name_state2nd",label:"Icon + name + state"},{value:"name_state2nd",label:"Name + state"}],Oe=[{id:"tile",type:"tile",label:"Tile",category:"stock",description:"A modern compact card that shows entity state and icon.",icon:"mdi:square-rounded",installed:()=>!!customElements.get("hui-tile-card"),defaults:{type:"tile"},yamlOrder:["name","icon","color","vertical","hide_state","state_content"],form:()=>[me("entity","Entity",{required:!0}),fe("name","Name"),ge("icon","Icon"),fe("color","Color (CSS variable or color)"),ve("vertical","Vertical layout",!1),ve("hide_state","Hide state",!1),_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("icon_tap_action","Icon tap action")]}]},{id:"entities",type:"entities",label:"Entities",category:"stock",description:"A list of entity rows. Add entities by ID in the entities list.",icon:"mdi:format-list-bulleted",installed:()=>!!customElements.get("hui-entities-card"),defaults:{type:"entities",entities:[],show_header_toggle:!1},yamlOrder:["entities","title","icon","show_header_toggle"],form:()=>[$e(),fe("title","Title"),_e(),{type:"expandable",title:"Options",icon:"mdi:cog",name:"_options",schema:[{name:"show_header_toggle",label:"Show header toggle",selector:{boolean:{}},default:!1}]}]},{id:"stack-vertical",type:"vertical-stack",label:"Vertical Stack",category:"stock",description:"Stack multiple cards vertically.",icon:"mdi:arrow-expand-vertical",installed:()=>!!customElements.get("hui-vertical-stack-card"),defaults:{type:"vertical-stack",cards:[]},yamlOrder:["cards"],form:()=>[{type:"hcd-card-list",name:"cards",title:"Cards",addLabel:"Add card",reorderable:!0}]},{id:"stack-horizontal",type:"horizontal-stack",label:"Horizontal Stack",category:"stock",description:"Stack multiple cards side by side.",icon:"mdi:arrow-expand-horizontal",installed:()=>!!customElements.get("hui-horizontal-stack-card"),defaults:{type:"horizontal-stack",cards:[]},yamlOrder:["cards"],form:()=>[{type:"hcd-card-list",name:"cards",title:"Cards",addLabel:"Add card",reorderable:!0}]},{id:"stack-grid",type:"grid",label:"Grid",category:"stock",description:"Arrange cards in a CSS grid layout.",icon:"mdi:view-grid",installed:()=>!!customElements.get("hui-grid-card"),defaults:{type:"grid",columns:2,square:!0,cards:[]},yamlOrder:["columns","square","cards"],form:()=>[be("columns","Columns",{min:1,max:12}),{name:"square",label:"Square cells",selector:{boolean:{}},default:!0},{type:"hcd-card-list",name:"cards",title:"Cards",addLabel:"Add card",reorderable:!0}]},{id:"button",type:"button",label:"Button",category:"stock",description:"A clickable button card for triggering actions.",icon:"mdi:button-pointer",installed:()=>!!customElements.get("hui-button-card"),defaults:{type:"button",show_name:!0,show_icon:!0,show_state:!1},yamlOrder:["name","icon","show_name","show_icon","show_state"],form:()=>[me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),ve("show_name","Show name",!0),ve("show_icon","Show icon",!0),ve("show_state","Show state",!1),_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"gauge",type:"gauge",label:"Gauge",category:"stock",description:"Display a numeric sensor as a dial gauge.",icon:"mdi:gauge",installed:()=>!!customElements.get("hui-gauge-card"),defaults:{type:"gauge",min:0,max:100,needle:!1},yamlOrder:["name","unit","min","max","needle"],form:e=>[me("entity","Entity",{required:!0}),fe("name","Name"),fe("unit","Unit"),be("min","Min",{mode:"box"}),be("max","Max",{mode:"box"}),ve("needle","Needle style",!1),_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action")]}]},{id:"glance",type:"glance",label:"Glance",category:"stock",description:"Show multiple entity states in a compact icon grid.",icon:"mdi:eye",installed:()=>!!customElements.get("hui-glance-card"),defaults:{type:"glance",entities:[],show_name:!0,show_icon:!0,show_state:!0,columns:5},yamlOrder:["entities","title","columns","show_name","show_icon","show_state"],form:()=>[$e(),fe("title","Title"),be("columns","Columns",{min:1,max:10}),ve("show_name","Show names",!0),ve("show_icon","Show icons",!0),ve("show_state","Show states",!0),_e()]},{id:"markdown",type:"markdown",label:"Markdown",category:"stock",description:"Display text with Markdown and Jinja2 templating.",icon:"mdi:language-markdown",installed:()=>!!customElements.get("hui-markdown-card"),defaults:{type:"markdown",content:""},yamlOrder:["title","content"],form:()=>[fe("title","Title"),{name:"content",label:"Content (Markdown + Jinja2)",selector:{text:{multiline:!0}},required:!0},_e()]},{id:"mushroom-entity",type:"custom:mushroom-entity-card",label:"Mushroom · Entity",category:"mushroom",description:"Versatile entity card from the Mushroom custom card suite.",icon:"mdi:mushroom",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-entity-card"),defaults:{type:"custom:mushroom-entity-card"},yamlOrder:["name","icon","icon_color","layout","fill_container"],form:()=>[me("entity","Entity",{required:!0}),fe("name","Name"),ge("icon","Icon"),fe("icon_color","Icon color"),ye("layout","Layout",Ae),ve("fill_container","Fill container",!1),ve("hide_state","Hide state",!1),_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"mushroom-template",type:"custom:mushroom-template-card",label:"Mushroom · Template",category:"mushroom",description:"Fully customizable Mushroom card driven by Jinja2 templates.",icon:"mdi:mushroom-outline",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-template-card"),defaults:{type:"custom:mushroom-template-card"},yamlOrder:["primary","secondary","icon","icon_color","layout"],form:()=>[xe("primary","Primary (template)"),xe("secondary","Secondary (template)"),ge("icon","Icon"),xe("icon_color","Icon color (template)"),ye("layout","Layout",Se),ve("fill_container","Fill container",!1),{type:"expandable",title:"Badge",icon:"mdi:badge-account",name:"_badge",schema:[ge("badge_icon","Badge icon"),fe("badge_color","Badge color")]},_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"mushroom-chips",type:"custom:mushroom-chips-card",label:"Mushroom · Chips",category:"mushroom",description:"A compact row of chip elements (entity, weather, action, menu, …).",icon:"mdi:pokeball",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-chips-card"),defaults:{type:"custom:mushroom-chips-card",chips:[]},yamlOrder:["chips","alignment"],form:()=>[{name:"alignment",label:"Alignment",selector:{select:{options:[{value:"start",label:"Start"},{value:"center",label:"Center"},{value:"end",label:"End"}]}}}]},{id:"mini-graph",type:"custom:mini-graph-card",label:"Mini Graph Card",category:"custom",description:"Sensor history as a line or bar graph with optional statistics.",icon:"mdi:chart-line",resourceUrl:"/hacsfiles/mini-graph-card/mini-graph-card-bundle.js",installed:()=>!!customElements.get("mini-graph-card"),defaults:{type:"custom:mini-graph-card",hours_to_show:24,points_per_hour:.5,line_width:5,font_size:75,animate:!1,show:{fill:!0,icon:!0,name:!0,state:!0,legend:!0}},yamlOrder:["name","icon","unit","entities","hours_to_show","graph_type"],form:e=>[me("entities","Entity",{required:!0}),fe("name","Name"),fe("unit","Unit"),ye("graph_type","Graph type",ke),be("hours_to_show","Hours to show",{min:1,max:168,mode:"box"}),be("points_per_hour","Points per hour",{min:.1,max:10,step:.5,mode:"box"}),be("line_width","Line width",{min:1,max:10,mode:"slider"}),ye("color","Line color",Ee),ve("animate","Animate on load",!1),{type:"expandable",title:"Show / hide elements",icon:"mdi:eye",name:"_show",schema:[ve("show_fill","Fill area",!0),ve("show_icon","Icon",!0),ve("show_name","Name",!0),ve("show_state","State",!0),ve("show_legend","Legend",!0)]}]},{id:"bubble",type:"custom:bubble-card",label:"Bubble Card",category:"custom",description:"Beautiful bubble-style card supporting multiple layout types.",icon:"mdi:circle",resourceUrl:"/hacsfiles/Bubble-Card/bubble-card.js",installed:()=>!!customElements.get("bubble-card"),defaults:{type:"custom:bubble-card",card_type:"button"},yamlOrder:["card_type","entity","name","icon"],form:e=>[ye("card_type","Card type",[{value:"button",label:"Button"},{value:"cover",label:"Cover"},{value:"media-player",label:"Media Player"},{value:"separator",label:"Separator"},{value:"pop-up",label:"Pop-up"}],{required:!0}),me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),fe("icon_color","Icon color"),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"button-card",type:"custom:button-card",label:"Button Card",category:"custom",description:"Highly customizable button (non-template fields only; use YAML for advanced templating).",icon:"mdi:gesture-tap-button",resourceUrl:"/hacsfiles/button-card/button-card.js",installed:()=>!!customElements.get("button-card"),defaults:{type:"custom:button-card",show_name:!0,show_icon:!0,show_state:!1,layout:"vertical"},yamlOrder:["name","icon","color","layout","show_name","show_icon","show_state"],form:()=>[me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),fe("color","Color (CSS / auto)"),ye("layout","Layout",Ce),ve("show_name","Show name",!0),ve("show_icon","Show icon",!0),ve("show_state","Show state",!1),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]}];function Te(e){return Oe.find(t=>t.type===e)}
/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function Ie(e){return null==e}var Ne={isNothing:Ie,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:Ie(e)?[]:[e]},repeat:function(e,t){var i,r="";for(i=0;i<t;i+=1)r+=e;return r},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var i,r,o,n;if(t)for(i=0,r=(n=Object.keys(t)).length;i<r;i+=1)e[o=n[i]]=t[o];return e}};function je(e,t){var i="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+="\n\n"+e.mark.snippet),r+" "+i):r}function Me(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=je(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}Me.prototype=Object.create(Error.prototype),Me.prototype.constructor=Me,Me.prototype.toString=function(e){return this.name+": "+je(this,e)};var Pe=Me,Re=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Ue=["scalar","sequence","mapping"];var De=function(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===Re.indexOf(t))throw new Pe('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach(function(i){e[i].forEach(function(e){t[String(e)]=i})}),t}(t.styleAliases||null),-1===Ue.indexOf(this.kind))throw new Pe('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function Le(e,t){var i=[];return e[t].forEach(function(e){var t=i.length;i.forEach(function(i,r){i.tag===e.tag&&i.kind===e.kind&&i.multi===e.multi&&(t=r)}),i[t]=e}),i}function ze(e){return this.extend(e)}ze.prototype.extend=function(e){var t=[],i=[];if(e instanceof De)i.push(e);else if(Array.isArray(e))i=i.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new Pe("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit))}t.forEach(function(e){if(!(e instanceof De))throw new Pe("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new Pe("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new Pe("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(e){if(!(e instanceof De))throw new Pe("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(ze.prototype);return r.implicit=(this.implicit||[]).concat(t),r.explicit=(this.explicit||[]).concat(i),r.compiledImplicit=Le(r,"implicit"),r.compiledExplicit=Le(r,"explicit"),r.compiledTypeMap=function(){var e,t,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function r(e){e.multi?(i.multi[e.kind].push(e),i.multi.fallback.push(e)):i[e.kind][e.tag]=i.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(r);return i}(r.compiledImplicit,r.compiledExplicit),r};var He=new ze({explicit:[new De("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),new De("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),new De("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})]});var qe=new De("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var Fe=new De("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Be(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ve(e){return 48<=e&&e<=55}function Ye(e){return 48<=e&&e<=57}var We=new De("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i=e.length,r=0,o=!1;if(!i)return!1;if("-"!==(t=e[r])&&"+"!==t||(t=e[++r]),"0"===t){if(r+1===i)return!0;if("b"===(t=e[++r])){for(r++;r<i;r++)if("_"!==(t=e[r])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!Be(e.charCodeAt(r)))return!1;o=!0}return o&&"_"!==t}if("o"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!Ve(e.charCodeAt(r)))return!1;o=!0}return o&&"_"!==t}}if("_"===t)return!1;for(;r<i;r++)if("_"!==(t=e[r])){if(!Ye(e.charCodeAt(r)))return!1;o=!0}return!(!o||"_"===t)},construct:function(e){var t,i=e,r=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(r=-1),t=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===t){if("b"===i[1])return r*parseInt(i.slice(2),2);if("x"===i[1])return r*parseInt(i.slice(2),16);if("o"===i[1])return r*parseInt(i.slice(2),8)}return r*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!Ne.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ke=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var Ge=/^[-+]?[0-9]+e/;var Ze=new De("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Ke.test(e)||"_"===e[e.length-1])},construct:function(e){var t,i;return i="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:i*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||Ne.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ne.isNegativeZero(e))return"-0.0";return i=e.toString(10),Ge.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),Je=He.extend({implicit:[qe,Fe,We,Ze]}),Qe=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Xe=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var et=new De("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==Qe.exec(e)||null!==Xe.exec(e))},construct:function(e){var t,i,r,o,n,a,s,c,l=0,d=null;if(null===(t=Qe.exec(e))&&(t=Xe.exec(e)),null===t)throw new Error("Date resolve error");if(i=+t[1],r=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(i,r,o));if(n=+t[4],a=+t[5],s=+t[6],t[7]){for(l=t[7].slice(0,3);l.length<3;)l+="0";l=+l}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),c=new Date(Date.UTC(i,r,o,n,a,s,l)),d&&c.setTime(c.getTime()-d),c},instanceOf:Date,represent:function(e){return e.toISOString()}});var tt=new De("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),it="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var rt=new De("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,r=0,o=e.length,n=it;for(i=0;i<o;i++)if(!((t=n.indexOf(e.charAt(i)))>64)){if(t<0)return!1;r+=6}return r%8==0},construct:function(e){var t,i,r=e.replace(/[\r\n=]/g,""),o=r.length,n=it,a=0,s=[];for(t=0;t<o;t++)t%4==0&&t&&(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)),a=a<<6|n.indexOf(r.charAt(t));return 0===(i=o%4*6)?(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)):18===i?(s.push(a>>10&255),s.push(a>>2&255)):12===i&&s.push(a>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,i,r="",o=0,n=e.length,a=it;for(t=0;t<n;t++)t%3==0&&t&&(r+=a[o>>18&63],r+=a[o>>12&63],r+=a[o>>6&63],r+=a[63&o]),o=(o<<8)+e[t];return 0===(i=n%3)?(r+=a[o>>18&63],r+=a[o>>12&63],r+=a[o>>6&63],r+=a[63&o]):2===i?(r+=a[o>>10&63],r+=a[o>>4&63],r+=a[o<<2&63],r+=a[64]):1===i&&(r+=a[o>>2&63],r+=a[o<<4&63],r+=a[64],r+=a[64]),r}}),ot=Object.prototype.hasOwnProperty,nt=Object.prototype.toString;var at=new De("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,r,o,n,a=[],s=e;for(t=0,i=s.length;t<i;t+=1){if(r=s[t],n=!1,"[object Object]"!==nt.call(r))return!1;for(o in r)if(ot.call(r,o)){if(n)return!1;n=!0}if(!n)return!1;if(-1!==a.indexOf(o))return!1;a.push(o)}return!0},construct:function(e){return null!==e?e:[]}}),st=Object.prototype.toString;var ct=new De("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,r,o,n,a=e;for(n=new Array(a.length),t=0,i=a.length;t<i;t+=1){if(r=a[t],"[object Object]"!==st.call(r))return!1;if(1!==(o=Object.keys(r)).length)return!1;n[t]=[o[0],r[o[0]]]}return!0},construct:function(e){if(null===e)return[];var t,i,r,o,n,a=e;for(n=new Array(a.length),t=0,i=a.length;t<i;t+=1)r=a[t],o=Object.keys(r),n[t]=[o[0],r[o[0]]];return n}}),lt=Object.prototype.hasOwnProperty;var dt=new De("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,i=e;for(t in i)if(lt.call(i,t)&&null!==i[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),ht=Je.extend({implicit:[et,tt],explicit:[rt,at,ct,dt]});function ut(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}for(var pt=new Array(256),mt=new Array(256),ft=0;ft<256;ft++)pt[ft]=ut(ft)?1:0,mt[ft]=ut(ft);var gt=Object.prototype.toString,vt=Object.prototype.hasOwnProperty,yt=65279,bt={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},_t=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],wt=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function xt(e){var t,i,r;if(t=e.toString(16).toUpperCase(),e<=255)i="x",r=2;else if(e<=65535)i="u",r=4;else{if(!(e<=4294967295))throw new Pe("code point within a string may not be greater than 0xFFFFFFFF");i="U",r=8}return"\\"+i+Ne.repeat("0",r-t.length)+t}function $t(e){this.schema=e.schema||ht,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Ne.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var i,r,o,n,a,s,c;if(null===t)return{};for(i={},o=0,n=(r=Object.keys(t)).length;o<n;o+=1)a=r[o],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(c=e.compiledTypeMap.fallback[a])&&vt.call(c.styleAliases,s)&&(s=c.styleAliases[s]),i[a]=s;return i}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function At(e,t){for(var i,r=Ne.repeat(" ",t),o=0,n=-1,a="",s=e.length;o<s;)-1===(n=e.indexOf("\n",o))?(i=e.slice(o),o=s):(i=e.slice(o,n+1),o=n+1),i.length&&"\n"!==i&&(a+=r),a+=i;return a}function St(e,t){return"\n"+Ne.repeat(" ",e.indent*t)}function Et(e){return 32===e||9===e}function kt(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==yt||65536<=e&&e<=1114111}function Ct(e){return kt(e)&&e!==yt&&13!==e&&10!==e}function Ot(e,t,i){var r=Ct(e),o=r&&!Et(e);return(i?r:r&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!o)||Ct(t)&&!Et(t)&&35===e||58===t&&o}function Tt(e,t){var i,r=e.charCodeAt(t);return r>=55296&&r<=56319&&t+1<e.length&&(i=e.charCodeAt(t+1))>=56320&&i<=57343?1024*(r-55296)+i-56320+65536:r}function It(e){return/^\n* /.test(e)}function Nt(e,t,i,r,o,n,a,s){var c,l=0,d=null,h=!1,u=!1,p=-1!==r,m=-1,f=function(e){return kt(e)&&e!==yt&&!Et(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(Tt(e,0))&&function(e){return!Et(e)&&58!==e}(Tt(e,e.length-1));if(t||a)for(c=0;c<e.length;l>=65536?c+=2:c++){if(!kt(l=Tt(e,c)))return 5;f=f&&Ot(l,d,s),d=l}else{for(c=0;c<e.length;l>=65536?c+=2:c++){if(10===(l=Tt(e,c)))h=!0,p&&(u=u||c-m-1>r&&" "!==e[m+1],m=c);else if(!kt(l))return 5;f=f&&Ot(l,d,s),d=l}u=u||p&&c-m-1>r&&" "!==e[m+1]}return h||u?i>9&&It(e)?5:a?2===n?5:2:u?4:3:!f||a||o(e)?2===n?5:2:1}function jt(e,t,i,r,o){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==_t.indexOf(t)||wt.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var n=e.indent*Math.max(1,i),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-n),s=r||e.flowLevel>-1&&i>=e.flowLevel;switch(Nt(t,s,e.indent,a,function(t){return function(e,t){var i,r;for(i=0,r=e.implicitTypes.length;i<r;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}(e,t)},e.quotingType,e.forceQuotes&&!r,o)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Mt(t,e.indent)+Pt(At(t,n));case 4:return">"+Mt(t,e.indent)+Pt(At(function(e,t){var i,r,o=/(\n+)([^\n]*)/g,n=(s=e.indexOf("\n"),s=-1!==s?s:e.length,o.lastIndex=s,Rt(e.slice(0,s),t)),a="\n"===e[0]||" "===e[0];var s;for(;r=o.exec(e);){var c=r[1],l=r[2];i=" "===l[0],n+=c+(a||i||""===l?"":"\n")+Rt(l,t),a=i}return n}(t,a),n));case 5:return'"'+function(e){for(var t,i="",r=0,o=0;o<e.length;r>=65536?o+=2:o++)r=Tt(e,o),!(t=bt[r])&&kt(r)?(i+=e[o],r>=65536&&(i+=e[o+1])):i+=t||xt(r);return i}(t)+'"';default:throw new Pe("impossible error: invalid scalar style")}}()}function Mt(e,t){var i=It(e)?String(t):"",r="\n"===e[e.length-1];return i+(r&&("\n"===e[e.length-2]||"\n"===e)?"+":r?"":"-")+"\n"}function Pt(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Rt(e,t){if(""===e||" "===e[0])return e;for(var i,r,o=/ [^ ]/g,n=0,a=0,s=0,c="";i=o.exec(e);)(s=i.index)-n>t&&(r=a>n?a:s,c+="\n"+e.slice(n,r),n=r+1),a=s;return c+="\n",e.length-n>t&&a>n?c+=e.slice(n,a)+"\n"+e.slice(a+1):c+=e.slice(n),c.slice(1)}function Ut(e,t,i,r){var o,n,a,s="",c=e.tag;for(o=0,n=i.length;o<n;o+=1)a=i[o],e.replacer&&(a=e.replacer.call(i,String(o),a)),(Lt(e,t+1,a,!0,!0,!1,!0)||void 0===a&&Lt(e,t+1,null,!0,!0,!1,!0))&&(r&&""===s||(s+=St(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=c,e.dump=s||"[]"}function Dt(e,t,i){var r,o,n,a,s,c;for(n=0,a=(o=i?e.explicitTypes:e.implicitTypes).length;n<a;n+=1)if(((s=o[n]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(i?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(c=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===gt.call(s.represent))r=s.represent(t,c);else{if(!vt.call(s.represent,c))throw new Pe("!<"+s.tag+'> tag resolver accepts not "'+c+'" style');r=s.represent[c](t,c)}e.dump=r}return!0}return!1}function Lt(e,t,i,r,o,n,a){e.tag=null,e.dump=i,Dt(e,i,!1)||Dt(e,i,!0);var s,c=gt.call(e.dump),l=r;r&&(r=e.flowLevel<0||e.flowLevel>t);var d,h,u="[object Object]"===c||"[object Array]"===c;if(u&&(h=-1!==(d=e.duplicates.indexOf(i))),(null!==e.tag&&"?"!==e.tag||h||2!==e.indent&&t>0)&&(o=!1),h&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(u&&h&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),"[object Object]"===c)r&&0!==Object.keys(e.dump).length?(!function(e,t,i,r){var o,n,a,s,c,l,d="",h=e.tag,u=Object.keys(i);if(!0===e.sortKeys)u.sort();else if("function"==typeof e.sortKeys)u.sort(e.sortKeys);else if(e.sortKeys)throw new Pe("sortKeys must be a boolean or a function");for(o=0,n=u.length;o<n;o+=1)l="",r&&""===d||(l+=St(e,t)),s=i[a=u[o]],e.replacer&&(s=e.replacer.call(i,a,s)),Lt(e,t+1,a,!0,!0,!0)&&((c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?l+="?":l+="? "),l+=e.dump,c&&(l+=St(e,t)),Lt(e,t+1,s,!0,c)&&(e.dump&&10===e.dump.charCodeAt(0)?l+=":":l+=": ",d+=l+=e.dump));e.tag=h,e.dump=d||"{}"}(e,t,e.dump,o),h&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var r,o,n,a,s,c="",l=e.tag,d=Object.keys(i);for(r=0,o=d.length;r<o;r+=1)s="",""!==c&&(s+=", "),e.condenseFlow&&(s+='"'),a=i[n=d[r]],e.replacer&&(a=e.replacer.call(i,n,a)),Lt(e,t,n,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Lt(e,t,a,!1,!1)&&(c+=s+=e.dump));e.tag=l,e.dump="{"+c+"}"}(e,t,e.dump),h&&(e.dump="&ref_"+d+" "+e.dump));else if("[object Array]"===c)r&&0!==e.dump.length?(e.noArrayIndent&&!a&&t>0?Ut(e,t-1,e.dump,o):Ut(e,t,e.dump,o),h&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var r,o,n,a="",s=e.tag;for(r=0,o=i.length;r<o;r+=1)n=i[r],e.replacer&&(n=e.replacer.call(i,String(r),n)),(Lt(e,t,n,!1,!1)||void 0===n&&Lt(e,t,null,!1,!1))&&(""!==a&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"}(e,t,e.dump),h&&(e.dump="&ref_"+d+" "+e.dump));else{if("[object String]"!==c){if("[object Undefined]"===c)return!1;if(e.skipInvalid)return!1;throw new Pe("unacceptable kind of an object to dump "+c)}"?"!==e.tag&&jt(e,e.dump,t,n,l)}null!==e.tag&&"?"!==e.tag&&(s=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s="!"===e.tag[0]?"!"+s:"tag:yaml.org,2002:"===s.slice(0,18)?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function zt(e,t){var i,r,o=[],n=[];for(Ht(e,o,n),i=0,r=n.length;i<r;i+=1)t.duplicates.push(o[n[i]]);t.usedDuplicates=new Array(r)}function Ht(e,t,i){var r,o,n;if(null!==e&&"object"==typeof e)if(-1!==(o=t.indexOf(e)))-1===i.indexOf(o)&&i.push(o);else if(t.push(e),Array.isArray(e))for(o=0,n=e.length;o<n;o+=1)Ht(e[o],t,i);else for(o=0,n=(r=Object.keys(e)).length;o<n;o+=1)Ht(e[r[o]],t,i)}var qt={dump:function(e,t){var i=new $t(t=t||{});i.noRefs||zt(e,i);var r=e;return i.replacer&&(r=i.replacer.call({"":r},"",r)),Lt(i,0,r,!0,!0)?i.dump+"\n":""}}.dump;function Ft(e,t){const i={};for(const r of t)r in e&&(i[r]=e[r]);for(const t of Object.keys(e))t in i||(i[t]=e[t]);return i}const Bt=["type","card_type"];function Vt(e){const t={};for(const[i,r]of Object.entries(e))("entity"===i||""!==r&&null!=r)&&(t[i]=r);return t}function Yt(e,t){const i={};for(const[r,o]of Object.entries(e))if(null!=o&&o!==t[r])if(Array.isArray(o))i[r]="entities"===r?o.map(Vt):"cards"===r?o.map(e=>{if("object"!=typeof e||null===e)return e;const t=e,i=t.type,r=i?Te(i):void 0;if(!r)return e;const o=Yt(t,r.defaults);for(const e of Bt)e in t&&!(e in o)&&(o[e]=t[e]);return o}):o;else if("object"==typeof o&&null!==o){const e=Yt(o,t[r]??{});Object.keys(e).length>0&&(i[r]=e)}else i[r]=o;return i}function Wt(e){return Array.isArray(e.cards)?{...e,cards:e.cards.map(e=>{if("object"!=typeof e||null===e)return e;const t=e.type,i=t?Te(t):void 0;return i?Wt(Ft(e,["type","entity","entities",...i.yamlOrder??[]])):e})}:e}function Kt(e,t,i=[]){const r=Yt(e,t);for(const t of Bt)t in e&&!(t in r)&&(r[t]=e[t]);const o=Wt(Ft(r,["type","entity","entities",...i]));return qt(o,{noRefs:!0,lineWidth:-1,quotingType:'"',forceQuotes:!1})}let Gt=class extends se{constructor(){super(...arguments),this._search="",this._categories=["stock","mushroom","custom"]}get _filteredCards(){const e=this._search.toLowerCase();return Oe.filter(t=>!e||t.label.toLowerCase().includes(e)||t.category.includes(e))}_selectCard(e){this.dispatchEvent(new CustomEvent("card-selected",{detail:e,bubbles:!0,composed:!0}))}render(){const e=this._filteredCards;return F`
      <div class="search">
        <ha-textfield
          .label=${"Search cards"}
          .value=${this._search}
          @input=${e=>{this._search=e.target.value}}
        ></ha-textfield>
      </div>
      <div class="list">
        ${this._categories.map(t=>{const i=e.filter(e=>e.category===t);return i.length?F`
            <div class="category-header">${t}</div>
            ${i.map(e=>{const t=e.installed(this.hass);return F`
                <div
                  class="card-item ${this.activeCardId===e.id?"active":""} ${t?"":"disabled"}"
                  @click=${()=>t&&this._selectCard(e.id)}
                  title=${t?e.description:"Card not installed — install via HACS first"}
                >
                  <ha-icon .icon=${e.icon}></ha-icon>
                  <span class="label">${e.label}</span>
                  ${t?"":F`<span class="not-installed">Not installed</span>`}
                </div>
              `})}
          `:""})}
      </div>
    `}};Gt.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }
    .search {
      padding: 12px;
      border-bottom: 1px solid var(--divider-color);
    }
    ha-textfield {
      width: 100%;
    }
    .list {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0;
    }
    .category-header {
      padding: 8px 16px 4px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
    }
    .card-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      cursor: pointer;
      border-radius: 8px;
      margin: 0 8px;
      transition: background 0.15s;
    }
    .card-item:hover {
      background: var(--secondary-background-color);
    }
    .card-item.active {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }
    .card-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    ha-icon {
      --mdc-icon-size: 20px;
    }
    .label {
      flex: 1;
      font-size: 14px;
    }
    .not-installed {
      font-size: 10px;
      color: var(--warning-color);
    }
  `,e([ue({attribute:!1})],Gt.prototype,"hass",void 0),e([ue({type:String})],Gt.prototype,"activeCardId",void 0),e([pe()],Gt.prototype,"_search",void 0),Gt=e([le("hcd-card-list")],Gt);const Zt=e=>!("type"in e)||"expandable"===e.type||"grid"===e.type;let Jt=class extends se{constructor(){super(...arguments),this.count=0}_dispatchRowMove(e,t){this.dispatchEvent(new CustomEvent("row-move",{detail:{from:e,to:t},bubbles:!1,composed:!1}))}_dispatchRowRemove(e){this.dispatchEvent(new CustomEvent("row-remove",{detail:{index:e},bubbles:!1,composed:!1}))}_onDragStart(e,t){e.target.closest(".drag-handle")?(e.dataTransfer&&(e.dataTransfer.effectAllowed="move"),this._dragIndex=t):e.preventDefault()}_onDragOver(e,t){e.preventDefault();const i=e.currentTarget.getBoundingClientRect(),r=i.top+i.height/2;this._hoverSide=e.clientY<r?"above":"below",this._hoverIndex=t,this.requestUpdate()}_onDrop(e,t){if(e.preventDefault(),void 0===this._dragIndex)return;const i=e.currentTarget.getBoundingClientRect(),r=i.top+i.height/2,o="above"===(e.clientY<r?"above":"below")?t:t+1,n=this._dragIndex;this._dragIndex=void 0,this._hoverIndex=void 0,this._hoverSide=void 0,this._dispatchRowMove(n,o)}_onDragEnd(){this._dragIndex=void 0,this._hoverIndex=void 0,this._hoverSide=void 0,this.requestUpdate()}_renderInsertLine(e){return this._hoverIndex!==e||void 0===this._dragIndex||this._dragIndex===e?F``:F`<div class="insert-line insert-line--${this._hoverSide}"></div>`}_renderRow(e){const t=0===e,i=e===this.count-1;return F`
      <div
        class="row-wrapper"
        data-index="${e}"
        draggable="true"
        @dragstart=${t=>this._onDragStart(t,e)}
        @dragover=${t=>this._onDragOver(t,e)}
        @drop=${t=>this._onDrop(t,e)}
        @dragend=${()=>this._onDragEnd()}
      >
        ${this._renderInsertLine(e)}
        <ha-icon icon="mdi:drag" class="drag-handle" draggable="true"></ha-icon>
        <div class="row-content">
          <slot name="row-${e}"></slot>
        </div>
        <div class="row-controls">
          <ha-icon-button
            class=${t?"control-btn disabled":"control-btn"}
            .disabled=${t}
            @click=${()=>!t&&this._dispatchRowMove(e,e-1)}
            title="Move up"
          >
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            class=${i?"control-btn disabled":"control-btn"}
            .disabled=${i}
            @click=${()=>!i&&this._dispatchRowMove(e,e+1)}
            title="Move down"
          >
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            class="control-btn"
            @click=${()=>this._dispatchRowRemove(e)}
            title="Remove"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}render(){return F`
      <div class="row-list">
        ${Array.from({length:this.count},(e,t)=>this._renderRow(t))}
      </div>
    `}};Jt.styles=a`
    :host {
      display: block;
    }
    .row-list {
      display: flex;
      flex-direction: column;
    }
    .row-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color);
    }
    .drag-handle {
      cursor: grab;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }
    .drag-handle:active {
      cursor: grabbing;
    }
    .row-content {
      flex: 1;
      min-width: 0;
    }
    .row-controls {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    .control-btn {
      color: var(--secondary-text-color);
    }
    .control-btn.disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    .insert-line {
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--primary-color);
      pointer-events: none;
      z-index: 1;
    }
    .insert-line--above {
      top: -1px;
    }
    .insert-line--below {
      bottom: -1px;
    }
  `,e([ue({type:Number})],Jt.prototype,"count",void 0),e([pe()],Jt.prototype,"_dragIndex",void 0),e([pe()],Jt.prototype,"_hoverIndex",void 0),e([pe()],Jt.prototype,"_hoverSide",void 0),Jt=e([le("hcd-sortable-row-list")],Jt);let Qt=class extends se{constructor(){super(...arguments),this.value=[]}_addRow(){const e={...this.node.itemDefaults??{}};this._emit([...this.value,e])}_onRowMove(e){const t=[...this.value],[i]=t.splice(e.detail.from,1);t.splice(e.detail.to,0,i),this._emit(t)}_onRowRemove(e){const t=this.value.filter((t,i)=>i!==e.detail.index);this._emit(t)}_onRowChanged(e,t){const i=this.value.map((i,r)=>r===t?{...i,...e.detail.value}:i);this._emit(i)}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.node.name]:e}},bubbles:!1,composed:!1}))}render(){const e=this.value;return F`
      <div class="sub-form-list">
        ${this.node.title?F`<div class="list-title">${this.node.title}</div>`:""}
        <hcd-sortable-row-list
          .count=${e.length}
          @row-move=${this._onRowMove}
          @row-remove=${this._onRowRemove}
        >
          ${e.map((e,t)=>F`
              <div slot="row-${t}" class="row-form">
                <ha-form
                  .hass=${this.hass}
                  .data=${e}
                  .schema=${this.node.itemSchema}
                  .computeLabel=${e=>e.label??e.name}
                  @value-changed=${e=>this._onRowChanged(e,t)}
                ></ha-form>
              </div>
            `)}
        </hcd-sortable-row-list>
        <div class="add-row">
          <mwc-button @click=${this._addRow}>
            + ${this.node.addLabel??"Add"}
          </mwc-button>
        </div>
      </div>
    `}};Qt.styles=a`
    :host {
      display: block;
    }
    .list-title {
      font-weight: 600;
      font-size: 14px;
      padding-bottom: 8px;
      color: var(--primary-text-color);
    }
    .add-row {
      padding-top: 8px;
    }
    .row-form {
      width: 100%;
    }
    ha-form {
      display: block;
    }
  `,e([ue({attribute:!1})],Qt.prototype,"hass",void 0),e([ue({attribute:!1})],Qt.prototype,"node",void 0),e([ue({attribute:!1})],Qt.prototype,"value",void 0),Qt=e([le("hcd-sub-form-list")],Qt);let Xt=class extends se{constructor(){super(...arguments),this._step="pick",this._draft={}}connectedCallback(){if(super.connectedCallback(),this.draft&&this.draft.type){const e=Te(this.draft.type);e&&(this._selectedSchema=e,this._draft={...this.draft},this._step="edit")}}_selectCard(e){this._selectedSchema=e,this._draft={...e.defaults},this._step="edit"}_backToPick(){void 0!==this.editIndex?this._cancel():(this._step="pick",this._selectedSchema=void 0,this._draft={})}_onDraftChanged(e){e.stopPropagation(),this._draft={...e.detail}}_save(){this.dispatchEvent(new CustomEvent("card-saved",{detail:{config:this._draft},bubbles:!1,composed:!1}))}_cancel(){this.dispatchEvent(new CustomEvent("drawer-closed",{bubbles:!1,composed:!1}))}render(){return"pick"===this._step?this._renderPickStep():this._renderEditStep()}_renderPickStep(){const e=Oe.filter(e=>e.installed(this.hass));return F`
      <div class="drawer-header">
        <ha-icon-button @click=${this._cancel}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
        <span class="header-title">Select card type</span>
      </div>
      <div class="pick-list">
        ${e.map(e=>F`
            <div class="pick-item" @click=${()=>this._selectCard(e)}>
              <ha-icon .icon=${e.icon}></ha-icon>
              <span>${e.label}</span>
            </div>
          `)}
      </div>
    `}_renderEditStep(){return F`
      <div class="drawer-header">
        <ha-icon-button @click=${this._backToPick}>
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </ha-icon-button>
        <span class="header-title">${this._selectedSchema?.label??"Edit card"}</span>
      </div>
      <div class="drawer-form">
        <hcd-card-form
          .hass=${this.hass}
          .schema=${this._selectedSchema}
          .data=${this._draft}
          @config-changed=${this._onDraftChanged}
        ></hcd-card-form>
      </div>
      <div class="drawer-footer">
        <mwc-button @click=${this._save}>Save</mwc-button>
        <mwc-button @click=${this._cancel}>Cancel</mwc-button>
      </div>
    `}};Xt.styles=a`
    :host {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 420px;
      background: var(--card-background-color, var(--primary-background-color));
      box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      z-index: 100;
    }
    .drawer-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color);
      flex-shrink: 0;
    }
    .header-title {
      font-size: 16px;
      font-weight: 500;
      flex: 1;
    }
    .pick-list {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0;
    }
    .pick-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .pick-item:hover {
      background: var(--secondary-background-color);
    }
    .pick-item ha-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }
    .pick-item span {
      font-size: 14px;
    }
    .drawer-form {
      flex: 1;
      overflow-y: auto;
    }
    .drawer-footer {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      padding: 12px 16px;
      border-top: 1px solid var(--divider-color);
      flex-shrink: 0;
    }
  `,e([ue({attribute:!1})],Xt.prototype,"hass",void 0),e([ue({attribute:!1})],Xt.prototype,"draft",void 0),e([ue({type:Number})],Xt.prototype,"editIndex",void 0),e([pe()],Xt.prototype,"_step",void 0),e([pe()],Xt.prototype,"_draft",void 0),e([pe()],Xt.prototype,"_selectedSchema",void 0),Xt=e([le("hcd-card-drawer")],Xt);let ei=class extends se{constructor(){super(...arguments),this.value=[],this._drawerOpen=!1}_rowSummary(e){const t=e.type??"unknown",i=e.entity??e.title??e.name??"";return i?`${t} · ${i}`:t}render(){const e=this.value;return F`
      <div class="cards-widget">
        ${this.node.title?F`<div class="widget-title">${this.node.title}</div>`:""}
        <hcd-sortable-row-list
          .count=${e.length}
          @row-move=${this._onRowMove}
          @row-remove=${this._onRowRemove}
        >
          ${e.map((e,t)=>F`
              <div slot="row-${t}" class="card-row-content">
                <span class="card-summary">${this._rowSummary(e)}</span>
                <ha-icon-button
                  class="edit-btn"
                  @click=${()=>this._openEdit(t)}
                >
                  <ha-icon icon="mdi:pencil"></ha-icon>
                </ha-icon-button>
              </div>
            `)}
        </hcd-sortable-row-list>
        <div class="add-row">
          <mwc-button @click=${this._openAdd}>
            + ${this.node.addLabel??"Add card"}
          </mwc-button>
        </div>
      </div>

      ${this._drawerOpen?F`
            <hcd-card-drawer
              .hass=${this.hass}
              .draft=${this._drawerDraft}
              .editIndex=${this._drawerEditIndex}
              @card-saved=${this._onCardSaved}
              @drawer-closed=${this._closeDrawer}
            ></hcd-card-drawer>
          `:""}
    `}_openAdd(){this._drawerEditIndex=void 0,this._drawerDraft=void 0,this._drawerOpen=!0}_openEdit(e){this._drawerEditIndex=e,this._drawerDraft={...this.value[e]},this._drawerOpen=!0}_closeDrawer(){this._drawerOpen=!1,this._drawerDraft=void 0,this._drawerEditIndex=void 0}_onCardSaved(e){const t=e.detail.config;let i;i=void 0!==this._drawerEditIndex?this.value.map((e,i)=>i===this._drawerEditIndex?t:e):[...this.value,t],this._closeDrawer(),this._emit(i)}_onRowMove(e){const t=[...this.value],[i]=t.splice(e.detail.from,1);t.splice(e.detail.to,0,i),this._emit(t)}_onRowRemove(e){this._emit(this.value.filter((t,i)=>i!==e.detail.index))}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.node.name]:e}},bubbles:!1,composed:!1}))}};ei.styles=a`
    :host {
      display: block;
    }
    .widget-title {
      font-weight: 500;
      padding: 8px 0;
    }
    .card-row-content {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 8px;
    }
    .card-summary {
      flex: 1;
      font-size: 14px;
    }
    .add-row {
      padding-top: 8px;
    }
  `,e([ue({attribute:!1})],ei.prototype,"hass",void 0),e([ue({attribute:!1})],ei.prototype,"node",void 0),e([ue({attribute:!1})],ei.prototype,"value",void 0),e([pe()],ei.prototype,"_drawerOpen",void 0),e([pe()],ei.prototype,"_drawerEditIndex",void 0),e([pe()],ei.prototype,"_drawerDraft",void 0),ei=e([le("hcd-cards-list-widget")],ei);let ti=class extends se{constructor(){super(...arguments),this.data={}}_handleValueChanged(e){this.data={...this.data,...e.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{...this.data,type:this.schema?.type},bubbles:!0,composed:!0}))}render(){if(!this.schema)return F`
        <div class="empty">
          <ha-icon icon="mdi:arrow-left"></ha-icon>
          <span>Select a card type from the list</span>
        </div>
      `;const e=this.schema.form(this.data);return F`
      <div class="header">
        <h2>${this.schema.label}</h2>
        <p>${this.schema.description}</p>
      </div>
      <div class="form-wrapper">
        ${function(e){const t=[];for(const i of e)if(Zt(i)){const e=t[t.length-1];"ha"===e?.kind?e.schema.push(i):t.push({kind:"ha",schema:[i]})}else t.push({kind:"custom",node:i});return t}(e).map(e=>"ha"===e.kind?F`<ha-form
                .hass=${this.hass}
                .data=${this.data}
                .schema=${e.schema}
                .computeLabel=${e=>e.label??e.name}
                @value-changed=${this._handleValueChanged}
              ></ha-form>`:"hcd-sub-form-list"===e.node.type?F`<hcd-sub-form-list
                  .hass=${this.hass}
                  .node=${e.node}
                  .value=${this.data[e.node.name]??[]}
                  @value-changed=${this._handleValueChanged}
                ></hcd-sub-form-list>`:F`<hcd-cards-list-widget
                  .hass=${this.hass}
                  .node=${e.node}
                  .value=${this.data[e.node.name]??[]}
                  @value-changed=${this._handleValueChanged}
                ></hcd-cards-list-widget>`)}
      </div>
    `}};var ii,ri;ti.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }
    .header {
      padding: 16px;
      border-bottom: 1px solid var(--divider-color);
    }
    .header h2 {
      margin: 0 0 4px;
      font-size: 18px;
    }
    .header p {
      margin: 0;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .form-wrapper {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      gap: 12px;
    }
    ha-icon { --mdc-icon-size: 48px; }
  `,e([ue({attribute:!1})],ti.prototype,"hass",void 0),e([ue({attribute:!1})],ti.prototype,"schema",void 0),e([ue({attribute:!1})],ti.prototype,"data",void 0),ti=e([le("hcd-card-form")],ti),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ii||(ii={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ri||(ri={}));var oi=new Set(["call-service","divider","section","weblink","cast","select"]),ni={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},ai=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return r("hui-error-card",{type:"error",error:e,config:t})},r=function(e,t){var r=window.document.createElement(e);try{if(!r.setConfig)return;r.setConfig(t)}catch(r){return console.error(e,r),i(r.message,t)}return r};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var o=e.type;if(o&&o.startsWith("custom:"))o=o.substr(7);else if(t)if(oi.has(o))o="hui-"+o+"-row";else{if(!e.entity)return i("Invalid config given.",e);var n=e.entity.split(".",1)[0];o="hui-"+(ni[n]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return r(o,e);var a=i("Custom element doesn't exist: "+e.type+".",e);a.style.display="None";var s=setTimeout(function(){a.style.display=""},2e3);return customElements.whenDefined(e.type).then(function(){clearTimeout(s),function(e,t,i,r){r=r||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});o.detail=i,e.dispatchEvent(o)}(a,"ll-rebuild",{},a)}),a};let si=class extends se{constructor(){super(...arguments),this._loading=!1,this._rendered=!1}updated(e){(e.has("config")||e.has("hass"))&&(clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>this._renderPreview(),150))}async _ensureResourceLoaded(e){if(!document.querySelector(`script[src="${e}"]`))return new Promise((t,i)=>{const r=document.createElement("script");r.type="module",r.src=e,r.onload=()=>t(),r.onerror=()=>i(new Error(`Failed to load: ${e}`)),document.head.appendChild(r)})}async _renderPreview(){if(!this.config||!this.schema)return;const e=this.shadowRoot?.querySelector(".card-slot");if(e){if(this._error=void 0,this.schema.resourceUrl&&!this.schema.installed(this.hass)){this._loading=!0;try{await this._ensureResourceLoaded(this.schema.resourceUrl),await new Promise(e=>setTimeout(e,200))}catch{return this._error=`Could not load card resource. Install ${this.schema.label} via HACS first.`,void(this._loading=!1)}this._loading=!1}try{const t=ai(this.config);t.hass=this.hass,e.replaceChildren(t),this._rendered=!0}catch(e){this._error=String(e)}}}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._debounceTimer)}render(){return this.config?F`
      <div class="header">Preview · live</div>
      <div class="preview-area">
        ${this._loading?F`<ha-circular-progress active></ha-circular-progress>`:""}
        ${this._error?F`<div class="error">${this._error}</div>`:""}
        <div class="card-slot"></div>
      </div>
    `:F`
        <div class="header">Preview</div>
        <div class="preview-area">
          <div class="empty">
            <ha-icon icon="mdi:card-outline"></ha-icon>
            <span>Configure a card to see the preview</span>
          </div>
        </div>
      `}};si.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .header {
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color);
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .preview-area {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      background: var(--secondary-background-color);
    }
    .card-slot {
      max-width: 400px;
      margin: 0 auto;
    }
    .error {
      padding: 12px;
      background: var(--error-color, #b00020);
      color: white;
      border-radius: 8px;
      font-size: 13px;
      white-space: pre-wrap;
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      gap: 8px;
    }
    ha-icon { --mdc-icon-size: 40px; }
    ha-circular-progress { margin: auto; display: block; }
  `,e([ue({attribute:!1})],si.prototype,"hass",void 0),e([ue({attribute:!1})],si.prototype,"schema",void 0),e([ue({attribute:!1})],si.prototype,"config",void 0),e([pe()],si.prototype,"_error",void 0),e([pe()],si.prototype,"_loading",void 0),si=e([le("hcd-card-preview")],si);let ci=class extends se{constructor(){super(...arguments),this.yaml="",this._copied=!1}async _copy(){try{await navigator.clipboard.writeText(this.yaml),this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}catch{const e=this.shadowRoot?.querySelector("textarea");e&&(e.select(),document.execCommand("copy"))}}render(){return F`
      <div class="toolbar">
        <span class="label">YAML output</span>
        <mwc-button
          ?disabled=${!this.yaml}
          @click=${this._copy}
          dense
        >
          <ha-icon icon=${this._copied?"mdi:check":"mdi:content-copy"}></ha-icon>
          ${this._copied?"Copied!":"Copy YAML"}
        </mwc-button>
      </div>
      <textarea
        readonly
        .value=${this.yaml||"# Select and configure a card to generate YAML"}
        spellcheck="false"
      ></textarea>
    `}};ci.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      border-top: 1px solid var(--divider-color);
      height: 220px;
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      border-bottom: 1px solid var(--divider-color);
    }
    .label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--secondary-text-color);
    }
    textarea {
      flex: 1;
      resize: none;
      border: none;
      outline: none;
      padding: 12px 16px;
      font-family: "Roboto Mono", "Courier New", monospace;
      font-size: 12px;
      background: var(--card-background-color, white);
      color: var(--primary-text-color);
      line-height: 1.5;
    }
    mwc-button ha-icon { --mdc-icon-size: 16px; }
  `,e([ue({type:String})],ci.prototype,"yaml",void 0),e([pe()],ci.prototype,"_copied",void 0),ci=e([le("hcd-yaml-output")],ci);let li=class extends se{constructor(){super(...arguments),this.narrow=!1,this.route=null,this._config={},this._yaml=""}_onCardSelected(e){const t=e.detail,i=function(e){return Oe.find(t=>t.id===e)}(t);i&&(this._activeCardId=t,this._activeSchema=i,this._config={...i.defaults},this._updateYaml())}_onConfigChanged(e){this._config=e.detail,this._updateYaml()}_updateYaml(){this._activeSchema?this._yaml=Kt(this._config,this._activeSchema.defaults,this._activeSchema.yamlOrder):this._yaml=""}render(){return F`
      <div class="topbar">
        <ha-icon icon="mdi:palette"></ha-icon>
        <h1>Card Designer</h1>
      </div>
      <div class="main">
        <div class="sidebar">
          <hcd-card-list
            .hass=${this.hass}
            .activeCardId=${this._activeCardId}
            @card-selected=${this._onCardSelected}
          ></hcd-card-list>
        </div>
        <div class="center">
          <div class="editor-row">
            <hcd-card-form
              .hass=${this.hass}
              .schema=${this._activeSchema}
              .data=${this._config}
              @config-changed=${this._onConfigChanged}
            ></hcd-card-form>
            <hcd-card-preview
              .hass=${this.hass}
              .schema=${this._activeSchema}
              .config=${this._activeCardId?this._config:void 0}
            ></hcd-card-preview>
          </div>
          <hcd-yaml-output .yaml=${this._yaml}></hcd-yaml-output>
        </div>
      </div>
    `}};li.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--primary-background-color);
    }
    .topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 20px;
      background: var(--app-header-background-color, var(--primary-color));
      color: var(--app-header-text-color, white);
      box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
    }
    .topbar ha-icon { --mdc-icon-size: 24px; }
    .topbar h1 { margin: 0; font-size: 20px; font-weight: 400; }
    .main {
      flex: 1;
      display: flex;
      overflow: hidden;
    }
    .sidebar {
      width: 240px;
      flex-shrink: 0;
      border-right: 1px solid var(--divider-color);
      overflow: hidden;
    }
    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .editor-row {
      flex: 1;
      display: flex;
      overflow: hidden;
    }
    hcd-card-form {
      flex: 1;
      border-right: 1px solid var(--divider-color);
    }
    hcd-card-preview {
      flex: 1;
    }
    hcd-yaml-output {
      flex-shrink: 0;
    }
  `,e([ue({attribute:!1})],li.prototype,"hass",void 0),e([ue({attribute:!1})],li.prototype,"narrow",void 0),e([ue({attribute:!1})],li.prototype,"route",void 0),e([pe()],li.prototype,"_activeCardId",void 0),e([pe()],li.prototype,"_activeSchema",void 0),e([pe()],li.prototype,"_config",void 0),e([pe()],li.prototype,"_yaml",void 0),li=e([le("ha-card-designer-panel")],li);
