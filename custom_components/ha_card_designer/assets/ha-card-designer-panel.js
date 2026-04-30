function e(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new o(i,e,r)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,m=globalThis,f=m.trustedTypes,g=f?f.emptyScript:"",y=m.reactiveElementPolyfillSupport,v=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&c(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const o=r?.call(this);n?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...u(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(i)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of r){const r=document.createElement("style"),n=t.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=i.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=r;const o=n.fromAttribute(t,e.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){if(void 0!==e){const o=this.constructor;if(!1===r&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??b)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,y?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=e=>e,S=$.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,T=`<${O}>`,N=document,j=()=>N.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,U="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,L=/>/g,R=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,q=/"/g,D=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Y=new WeakMap,W=N.createTreeWalker(N,129);function K(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,r=[];let n,o=2===t?"<svg>":3===t?"<math>":"",a=M;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===M?"!--"===l[1]?a=H:void 0!==l[1]?a=L:void 0!==l[2]?(D.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=R):void 0!==l[3]&&(a=R):a===R?">"===l[0]?(a=n??M,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?R:'"'===l[3]?q:z):a===q||a===z?a=R:a===H||a===L?a=M:(a=R,n=void 0);const u=a===R&&e[t+1].startsWith("/>")?" ":"";o+=a===M?i+T:c>=0?(r.push(s),i.slice(0,c)+k+i.slice(c)+C+u):i+C+(-2===c?t:u)}return[K(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class Z{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,s=this.parts,[l,c]=G(e,t);if(this.el=Z.createElement(l,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=W.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(k)){const t=c[o++],i=r.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?te:"?"===a[1]?ie:"@"===a[1]?re:ee}),r.removeAttribute(e)}else e.startsWith(C)&&(s.push({type:6,index:n}),r.removeAttribute(e));if(D.test(r.tagName)){const e=r.textContent.split(C),t=e.length-1;if(t>0){r.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],j()),W.nextNode(),s.push({type:2,index:++n});r.append(e[t],j())}}}else if(8===r.nodeType)if(r.data===O)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(C,e+1));)s.push({type:7,index:n}),e+=C.length-1}n++}}static createElement(e,t){const i=N.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,r){if(t===B)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const o=I(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=J(e,n._$AS(e,t.values),n,r)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??N).importNode(t,!0);W.currentNode=r;let n=W.nextNode(),o=0,a=0,s=i[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new X(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ne(n,this,e)),this._$AV.push(t),s=i[++a]}o!==s?.index&&(n=W.nextNode(),o++)}return W.currentNode=N,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),I(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>P(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Q(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new Z(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new X(this.O(j()),this.O(j()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(void 0===n)e=J(this,e,t,0),o=!I(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const r=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=J(this,r[i+a],t,a),s===B&&(s=this._$AH[a]),o||=!I(s)||s!==this._$AH[a],s===V?e=V:e!==V&&(e+=(s??"")+n[a+1]),this._$AH[a]=s}o&&!r&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class re extends ee{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??V)===B)return;const i=this._$AH,r=e===V&&i!==V||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const oe=$.litHtmlPolyfillSupport;oe?.(Z,X),($.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=i?.renderBefore??null;r._$litPart$=n=new X(t.insertBefore(j(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};se._$litElement$=!0,se.finalized=!0,ae.litElementHydrateSupport?.({LitElement:se});const le=ae.litElementPolyfillSupport;le?.({LitElement:se}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:b},ue=(e=de,t,i)=>{const{kind:r,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,n,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];t.call(this,i),this.requestUpdate(r,n,e,!0,i)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return he({...e,state:!0,attribute:!1})}const me=(e,t,i={})=>({name:e,label:t,selector:{entity:i.domain?{domain:i.domain}:{}},required:i.required??!1}),fe=(e,t,i={})=>({name:e,label:t,selector:{text:{multiline:i.multiline??!1}},required:i.required??!1}),ge=(e,t)=>({name:e,label:t,selector:{icon:{}}}),ye=(e,t,i)=>({name:e,label:t,selector:{boolean:{}},default:i}),ve=(e,t,i,r={})=>({name:e,label:t,selector:{select:{options:i}},required:r.required??!1}),_e=(e,t,i={})=>({name:e,label:t,selector:{number:{min:i.min,max:i.max,step:i.step??1,mode:i.mode??"box"}}}),be=(e="theme",t="Theme")=>({name:e,label:t,selector:{theme:{}}}),we=(e,t)=>({name:e,label:t,selector:{ui_action:{}}}),xe=(e,t)=>({name:e,label:t,selector:{template:{}}}),$e=[{value:"default",label:"Default"},{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],Ae=[{value:"default",label:"Default"},{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],Se=[{value:"var(--accent-color)",label:"Accent"},{value:"var(--primary-color)",label:"Primary"},{value:"#e74c3c",label:"Red"},{value:"#2ecc71",label:"Green"},{value:"#3498db",label:"Blue"}],Ee=[{value:"line",label:"Line"},{value:"bar",label:"Bar"}],ke=[{value:"vertical",label:"Vertical (default)"},{value:"horizontal",label:"Horizontal"},{value:"icon_name_state2nd",label:"Icon + name + state"},{value:"name_state2nd",label:"Name + state"}],Ce=[{id:"tile",type:"tile",label:"Tile",category:"stock",description:"A modern compact card that shows entity state and icon.",icon:"mdi:square-rounded",installed:()=>!!customElements.get("hui-tile-card"),defaults:{type:"tile"},yamlOrder:["name","icon","color","vertical","hide_state","state_content"],form:()=>[me("entity","Entity",{required:!0}),fe("name","Name"),ge("icon","Icon"),fe("color","Color (CSS variable or color)"),ye("vertical","Vertical layout",!1),ye("hide_state","Hide state",!1),be(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("icon_tap_action","Icon tap action")]}]},{id:"entities",type:"entities",label:"Entities",category:"stock",description:"A list of entity rows. Add entities by ID in the entities list.",icon:"mdi:format-list-bulleted",installed:()=>!!customElements.get("hui-entities-card"),defaults:{type:"entities",entities:[],show_header_toggle:!1},yamlOrder:["title","icon","entities","show_header_toggle"],form:()=>[fe("title","Title"),be(),{type:"expandable",title:"Options",icon:"mdi:cog",name:"_options",schema:[{name:"show_header_toggle",label:"Show header toggle",selector:{boolean:{}},default:!1}]}]},{id:"stack-vertical",type:"vertical-stack",label:"Vertical Stack",category:"stock",description:"Stack multiple cards vertically.",icon:"mdi:arrow-expand-vertical",installed:()=>!!customElements.get("hui-vertical-stack-card"),defaults:{type:"vertical-stack",cards:[]},yamlOrder:["cards"],form:()=>[]},{id:"stack-horizontal",type:"horizontal-stack",label:"Horizontal Stack",category:"stock",description:"Stack multiple cards side by side.",icon:"mdi:arrow-expand-horizontal",installed:()=>!!customElements.get("hui-horizontal-stack-card"),defaults:{type:"horizontal-stack",cards:[]},yamlOrder:["cards"],form:()=>[]},{id:"stack-grid",type:"grid",label:"Grid",category:"stock",description:"Arrange cards in a CSS grid layout.",icon:"mdi:view-grid",installed:()=>!!customElements.get("hui-grid-card"),defaults:{type:"grid",columns:2,square:!0,cards:[]},yamlOrder:["columns","square","cards"],form:()=>[_e("columns","Columns",{min:1,max:12}),{name:"square",label:"Square cells",selector:{boolean:{}},default:!0}]},{id:"button",type:"button",label:"Button",category:"stock",description:"A clickable button card for triggering actions.",icon:"mdi:button-pointer",installed:()=>!!customElements.get("hui-button-card"),defaults:{type:"button",show_name:!0,show_icon:!0,show_state:!1},yamlOrder:["name","icon","show_name","show_icon","show_state"],form:()=>[me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),ye("show_name","Show name",!0),ye("show_icon","Show icon",!0),ye("show_state","Show state",!1),be(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"gauge",type:"gauge",label:"Gauge",category:"stock",description:"Display a numeric sensor as a dial gauge.",icon:"mdi:gauge",installed:()=>!!customElements.get("hui-gauge-card"),defaults:{type:"gauge",min:0,max:100,needle:!1},yamlOrder:["name","unit","min","max","needle"],form:e=>[me("entity","Entity",{required:!0}),fe("name","Name"),fe("unit","Unit"),_e("min","Min",{mode:"box"}),_e("max","Max",{mode:"box"}),ye("needle","Needle style",!1),be(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action")]}]},{id:"glance",type:"glance",label:"Glance",category:"stock",description:"Show multiple entity states in a compact icon grid.",icon:"mdi:eye",installed:()=>!!customElements.get("hui-glance-card"),defaults:{type:"glance",entities:[],show_name:!0,show_icon:!0,show_state:!0,columns:5},yamlOrder:["title","entities","columns","show_name","show_icon","show_state"],form:()=>[fe("title","Title"),_e("columns","Columns",{min:1,max:10}),ye("show_name","Show names",!0),ye("show_icon","Show icons",!0),ye("show_state","Show states",!0),be()]},{id:"markdown",type:"markdown",label:"Markdown",category:"stock",description:"Display text with Markdown and Jinja2 templating.",icon:"mdi:language-markdown",installed:()=>!!customElements.get("hui-markdown-card"),defaults:{type:"markdown",content:""},yamlOrder:["title","content"],form:()=>[fe("title","Title"),{name:"content",label:"Content (Markdown + Jinja2)",selector:{text:{multiline:!0}},required:!0},be()]},{id:"mushroom-entity",type:"custom:mushroom-entity-card",label:"Mushroom · Entity",category:"mushroom",description:"Versatile entity card from the Mushroom custom card suite.",icon:"mdi:mushroom",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-entity-card"),defaults:{type:"custom:mushroom-entity-card"},yamlOrder:["name","icon","icon_color","layout","fill_container"],form:()=>[me("entity","Entity",{required:!0}),fe("name","Name"),ge("icon","Icon"),fe("icon_color","Icon color"),ve("layout","Layout",$e),ye("fill_container","Fill container",!1),ye("hide_state","Hide state",!1),be(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"mushroom-template",type:"custom:mushroom-template-card",label:"Mushroom · Template",category:"mushroom",description:"Fully customizable Mushroom card driven by Jinja2 templates.",icon:"mdi:mushroom-outline",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-template-card"),defaults:{type:"custom:mushroom-template-card"},yamlOrder:["primary","secondary","icon","icon_color","layout"],form:()=>[xe("primary","Primary (template)"),xe("secondary","Secondary (template)"),ge("icon","Icon"),xe("icon_color","Icon color (template)"),ve("layout","Layout",Ae),ye("fill_container","Fill container",!1),{type:"expandable",title:"Badge",icon:"mdi:badge-account",name:"_badge",schema:[ge("badge_icon","Badge icon"),fe("badge_color","Badge color")]},be(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"mushroom-chips",type:"custom:mushroom-chips-card",label:"Mushroom · Chips",category:"mushroom",description:"A compact row of chip elements (entity, weather, action, menu, …).",icon:"mdi:pokeball",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-chips-card"),defaults:{type:"custom:mushroom-chips-card",chips:[]},yamlOrder:["chips","alignment"],form:()=>[{name:"alignment",label:"Alignment",selector:{select:{options:[{value:"start",label:"Start"},{value:"center",label:"Center"},{value:"end",label:"End"}]}}}]},{id:"mini-graph",type:"custom:mini-graph-card",label:"Mini Graph Card",category:"custom",description:"Sensor history as a line or bar graph with optional statistics.",icon:"mdi:chart-line",resourceUrl:"/hacsfiles/mini-graph-card/mini-graph-card-bundle.js",installed:()=>!!customElements.get("mini-graph-card"),defaults:{type:"custom:mini-graph-card",hours_to_show:24,points_per_hour:.5,line_width:5,font_size:75,animate:!1,show:{fill:!0,icon:!0,name:!0,state:!0,legend:!0}},yamlOrder:["name","icon","unit","entities","hours_to_show","graph_type"],form:e=>[me("entities","Entity",{required:!0}),fe("name","Name"),fe("unit","Unit"),ve("graph_type","Graph type",Ee),_e("hours_to_show","Hours to show",{min:1,max:168,mode:"box"}),_e("points_per_hour","Points per hour",{min:.1,max:10,step:.5,mode:"box"}),_e("line_width","Line width",{min:1,max:10,mode:"slider"}),ve("color","Line color",Se),ye("animate","Animate on load",!1),{type:"expandable",title:"Show / hide elements",icon:"mdi:eye",name:"_show",schema:[ye("show_fill","Fill area",!0),ye("show_icon","Icon",!0),ye("show_name","Name",!0),ye("show_state","State",!0),ye("show_legend","Legend",!0)]}]},{id:"bubble",type:"custom:bubble-card",label:"Bubble Card",category:"custom",description:"Beautiful bubble-style card supporting multiple layout types.",icon:"mdi:circle",resourceUrl:"/hacsfiles/Bubble-Card/bubble-card.js",installed:()=>!!customElements.get("bubble-card"),defaults:{type:"custom:bubble-card",card_type:"button"},yamlOrder:["card_type","entity","name","icon"],form:e=>[ve("card_type","Card type",[{value:"button",label:"Button"},{value:"cover",label:"Cover"},{value:"media-player",label:"Media Player"},{value:"separator",label:"Separator"},{value:"pop-up",label:"Pop-up"}],{required:!0}),me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),fe("icon_color","Icon color"),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"button-card",type:"custom:button-card",label:"Button Card",category:"custom",description:"Highly customizable button (non-template fields only; use YAML for advanced templating).",icon:"mdi:gesture-tap-button",resourceUrl:"/hacsfiles/button-card/button-card.js",installed:()=>!!customElements.get("button-card"),defaults:{type:"custom:button-card",show_name:!0,show_icon:!0,show_state:!1,layout:"vertical"},yamlOrder:["name","icon","color","layout","show_name","show_icon","show_state"],form:()=>[me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),fe("color","Color (CSS / auto)"),ve("layout","Layout",ke),ye("show_name","Show name",!0),ye("show_icon","Show icon",!0),ye("show_state","Show state",!1),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]}];
/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */
function Oe(e){return null==e}var Te={isNothing:Oe,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:Oe(e)?[]:[e]},repeat:function(e,t){var i,r="";for(i=0;i<t;i+=1)r+=e;return r},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var i,r,n,o;if(t)for(i=0,r=(o=Object.keys(t)).length;i<r;i+=1)e[n=o[i]]=t[n];return e}};function Ne(e,t){var i="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+="\n\n"+e.mark.snippet),r+" "+i):r}function je(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Ne(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}je.prototype=Object.create(Error.prototype),je.prototype.constructor=je,je.prototype.toString=function(e){return this.name+": "+Ne(this,e)};var Ie=je,Pe=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Ue=["scalar","sequence","mapping"];var Me=function(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===Pe.indexOf(t))throw new Ie('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach(function(i){e[i].forEach(function(e){t[String(e)]=i})}),t}(t.styleAliases||null),-1===Ue.indexOf(this.kind))throw new Ie('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function He(e,t){var i=[];return e[t].forEach(function(e){var t=i.length;i.forEach(function(i,r){i.tag===e.tag&&i.kind===e.kind&&i.multi===e.multi&&(t=r)}),i[t]=e}),i}function Le(e){return this.extend(e)}Le.prototype.extend=function(e){var t=[],i=[];if(e instanceof Me)i.push(e);else if(Array.isArray(e))i=i.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new Ie("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit))}t.forEach(function(e){if(!(e instanceof Me))throw new Ie("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new Ie("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new Ie("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(e){if(!(e instanceof Me))throw new Ie("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Le.prototype);return r.implicit=(this.implicit||[]).concat(t),r.explicit=(this.explicit||[]).concat(i),r.compiledImplicit=He(r,"implicit"),r.compiledExplicit=He(r,"explicit"),r.compiledTypeMap=function(){var e,t,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function r(e){e.multi?(i.multi[e.kind].push(e),i.multi.fallback.push(e)):i[e.kind][e.tag]=i.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(r);return i}(r.compiledImplicit,r.compiledExplicit),r};var Re=new Le({explicit:[new Me("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),new Me("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),new Me("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})]});var ze=new Me("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var qe=new Me("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function De(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Fe(e){return 48<=e&&e<=55}function Be(e){return 48<=e&&e<=57}var Ve=new Me("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i=e.length,r=0,n=!1;if(!i)return!1;if("-"!==(t=e[r])&&"+"!==t||(t=e[++r]),"0"===t){if(r+1===i)return!0;if("b"===(t=e[++r])){for(r++;r<i;r++)if("_"!==(t=e[r])){if("0"!==t&&"1"!==t)return!1;n=!0}return n&&"_"!==t}if("x"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!De(e.charCodeAt(r)))return!1;n=!0}return n&&"_"!==t}if("o"===t){for(r++;r<i;r++)if("_"!==(t=e[r])){if(!Fe(e.charCodeAt(r)))return!1;n=!0}return n&&"_"!==t}}if("_"===t)return!1;for(;r<i;r++)if("_"!==(t=e[r])){if(!Be(e.charCodeAt(r)))return!1;n=!0}return!(!n||"_"===t)},construct:function(e){var t,i=e,r=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(r=-1),t=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===t){if("b"===i[1])return r*parseInt(i.slice(2),2);if("x"===i[1])return r*parseInt(i.slice(2),16);if("o"===i[1])return r*parseInt(i.slice(2),8)}return r*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!Te.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ye=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var We=/^[-+]?[0-9]+e/;var Ke=new Me("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Ye.test(e)||"_"===e[e.length-1])},construct:function(e){var t,i;return i="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:i*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||Te.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Te.isNegativeZero(e))return"-0.0";return i=e.toString(10),We.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),Ge=Re.extend({implicit:[ze,qe,Ve,Ke]}),Ze=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Je=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var Qe=new Me("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==Ze.exec(e)||null!==Je.exec(e))},construct:function(e){var t,i,r,n,o,a,s,l,c=0,d=null;if(null===(t=Ze.exec(e))&&(t=Je.exec(e)),null===t)throw new Error("Date resolve error");if(i=+t[1],r=+t[2]-1,n=+t[3],!t[4])return new Date(Date.UTC(i,r,n));if(o=+t[4],a=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),l=new Date(Date.UTC(i,r,n,o,a,s,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}});var Xe=new Me("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var tt=new Me("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,r=0,n=e.length,o=et;for(i=0;i<n;i++)if(!((t=o.indexOf(e.charAt(i)))>64)){if(t<0)return!1;r+=6}return r%8==0},construct:function(e){var t,i,r=e.replace(/[\r\n=]/g,""),n=r.length,o=et,a=0,s=[];for(t=0;t<n;t++)t%4==0&&t&&(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)),a=a<<6|o.indexOf(r.charAt(t));return 0===(i=n%4*6)?(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)):18===i?(s.push(a>>10&255),s.push(a>>2&255)):12===i&&s.push(a>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,i,r="",n=0,o=e.length,a=et;for(t=0;t<o;t++)t%3==0&&t&&(r+=a[n>>18&63],r+=a[n>>12&63],r+=a[n>>6&63],r+=a[63&n]),n=(n<<8)+e[t];return 0===(i=o%3)?(r+=a[n>>18&63],r+=a[n>>12&63],r+=a[n>>6&63],r+=a[63&n]):2===i?(r+=a[n>>10&63],r+=a[n>>4&63],r+=a[n<<2&63],r+=a[64]):1===i&&(r+=a[n>>2&63],r+=a[n<<4&63],r+=a[64],r+=a[64]),r}}),it=Object.prototype.hasOwnProperty,rt=Object.prototype.toString;var nt=new Me("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,r,n,o,a=[],s=e;for(t=0,i=s.length;t<i;t+=1){if(r=s[t],o=!1,"[object Object]"!==rt.call(r))return!1;for(n in r)if(it.call(r,n)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==a.indexOf(n))return!1;a.push(n)}return!0},construct:function(e){return null!==e?e:[]}}),ot=Object.prototype.toString;var at=new Me("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,r,n,o,a=e;for(o=new Array(a.length),t=0,i=a.length;t<i;t+=1){if(r=a[t],"[object Object]"!==ot.call(r))return!1;if(1!==(n=Object.keys(r)).length)return!1;o[t]=[n[0],r[n[0]]]}return!0},construct:function(e){if(null===e)return[];var t,i,r,n,o,a=e;for(o=new Array(a.length),t=0,i=a.length;t<i;t+=1)r=a[t],n=Object.keys(r),o[t]=[n[0],r[n[0]]];return o}}),st=Object.prototype.hasOwnProperty;var lt=new Me("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,i=e;for(t in i)if(st.call(i,t)&&null!==i[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),ct=Ge.extend({implicit:[Qe,Xe],explicit:[tt,nt,at,lt]});function dt(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}for(var ut=new Array(256),ht=new Array(256),pt=0;pt<256;pt++)ut[pt]=dt(pt)?1:0,ht[pt]=dt(pt);var mt=Object.prototype.toString,ft=Object.prototype.hasOwnProperty,gt=65279,yt={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},vt=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],_t=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function bt(e){var t,i,r;if(t=e.toString(16).toUpperCase(),e<=255)i="x",r=2;else if(e<=65535)i="u",r=4;else{if(!(e<=4294967295))throw new Ie("code point within a string may not be greater than 0xFFFFFFFF");i="U",r=8}return"\\"+i+Te.repeat("0",r-t.length)+t}function wt(e){this.schema=e.schema||ct,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Te.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var i,r,n,o,a,s,l;if(null===t)return{};for(i={},n=0,o=(r=Object.keys(t)).length;n<o;n+=1)a=r[n],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(l=e.compiledTypeMap.fallback[a])&&ft.call(l.styleAliases,s)&&(s=l.styleAliases[s]),i[a]=s;return i}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function xt(e,t){for(var i,r=Te.repeat(" ",t),n=0,o=-1,a="",s=e.length;n<s;)-1===(o=e.indexOf("\n",n))?(i=e.slice(n),n=s):(i=e.slice(n,o+1),n=o+1),i.length&&"\n"!==i&&(a+=r),a+=i;return a}function $t(e,t){return"\n"+Te.repeat(" ",e.indent*t)}function At(e){return 32===e||9===e}function St(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==gt||65536<=e&&e<=1114111}function Et(e){return St(e)&&e!==gt&&13!==e&&10!==e}function kt(e,t,i){var r=Et(e),n=r&&!At(e);return(i?r:r&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!n)||Et(t)&&!At(t)&&35===e||58===t&&n}function Ct(e,t){var i,r=e.charCodeAt(t);return r>=55296&&r<=56319&&t+1<e.length&&(i=e.charCodeAt(t+1))>=56320&&i<=57343?1024*(r-55296)+i-56320+65536:r}function Ot(e){return/^\n* /.test(e)}function Tt(e,t,i,r,n,o,a,s){var l,c=0,d=null,u=!1,h=!1,p=-1!==r,m=-1,f=function(e){return St(e)&&e!==gt&&!At(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(Ct(e,0))&&function(e){return!At(e)&&58!==e}(Ct(e,e.length-1));if(t||a)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!St(c=Ct(e,l)))return 5;f=f&&kt(c,d,s),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=Ct(e,l)))u=!0,p&&(h=h||l-m-1>r&&" "!==e[m+1],m=l);else if(!St(c))return 5;f=f&&kt(c,d,s),d=c}h=h||p&&l-m-1>r&&" "!==e[m+1]}return u||h?i>9&&Ot(e)?5:a?2===o?5:2:h?4:3:!f||a||n(e)?2===o?5:2:1}function Nt(e,t,i,r,n){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==vt.indexOf(t)||_t.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,i),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),s=r||e.flowLevel>-1&&i>=e.flowLevel;switch(Tt(t,s,e.indent,a,function(t){return function(e,t){var i,r;for(i=0,r=e.implicitTypes.length;i<r;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}(e,t)},e.quotingType,e.forceQuotes&&!r,n)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+jt(t,e.indent)+It(xt(t,o));case 4:return">"+jt(t,e.indent)+It(xt(function(e,t){var i,r,n=/(\n+)([^\n]*)/g,o=(s=e.indexOf("\n"),s=-1!==s?s:e.length,n.lastIndex=s,Pt(e.slice(0,s),t)),a="\n"===e[0]||" "===e[0];var s;for(;r=n.exec(e);){var l=r[1],c=r[2];i=" "===c[0],o+=l+(a||i||""===c?"":"\n")+Pt(c,t),a=i}return o}(t,a),o));case 5:return'"'+function(e){for(var t,i="",r=0,n=0;n<e.length;r>=65536?n+=2:n++)r=Ct(e,n),!(t=yt[r])&&St(r)?(i+=e[n],r>=65536&&(i+=e[n+1])):i+=t||bt(r);return i}(t)+'"';default:throw new Ie("impossible error: invalid scalar style")}}()}function jt(e,t){var i=Ot(e)?String(t):"",r="\n"===e[e.length-1];return i+(r&&("\n"===e[e.length-2]||"\n"===e)?"+":r?"":"-")+"\n"}function It(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Pt(e,t){if(""===e||" "===e[0])return e;for(var i,r,n=/ [^ ]/g,o=0,a=0,s=0,l="";i=n.exec(e);)(s=i.index)-o>t&&(r=a>o?a:s,l+="\n"+e.slice(o,r),o=r+1),a=s;return l+="\n",e.length-o>t&&a>o?l+=e.slice(o,a)+"\n"+e.slice(a+1):l+=e.slice(o),l.slice(1)}function Ut(e,t,i,r){var n,o,a,s="",l=e.tag;for(n=0,o=i.length;n<o;n+=1)a=i[n],e.replacer&&(a=e.replacer.call(i,String(n),a)),(Ht(e,t+1,a,!0,!0,!1,!0)||void 0===a&&Ht(e,t+1,null,!0,!0,!1,!0))&&(r&&""===s||(s+=$t(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function Mt(e,t,i){var r,n,o,a,s,l;for(o=0,a=(n=i?e.explicitTypes:e.implicitTypes).length;o<a;o+=1)if(((s=n[o]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(i?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===mt.call(s.represent))r=s.represent(t,l);else{if(!ft.call(s.represent,l))throw new Ie("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');r=s.represent[l](t,l)}e.dump=r}return!0}return!1}function Ht(e,t,i,r,n,o,a){e.tag=null,e.dump=i,Mt(e,i,!1)||Mt(e,i,!0);var s,l=mt.call(e.dump),c=r;r&&(r=e.flowLevel<0||e.flowLevel>t);var d,u,h="[object Object]"===l||"[object Array]"===l;if(h&&(u=-1!==(d=e.duplicates.indexOf(i))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(n=!1),u&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(h&&u&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),"[object Object]"===l)r&&0!==Object.keys(e.dump).length?(!function(e,t,i,r){var n,o,a,s,l,c,d="",u=e.tag,h=Object.keys(i);if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new Ie("sortKeys must be a boolean or a function");for(n=0,o=h.length;n<o;n+=1)c="",r&&""===d||(c+=$t(e,t)),s=i[a=h[n]],e.replacer&&(s=e.replacer.call(i,a,s)),Ht(e,t+1,a,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,l&&(c+=$t(e,t)),Ht(e,t+1,s,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?c+=":":c+=": ",d+=c+=e.dump));e.tag=u,e.dump=d||"{}"}(e,t,e.dump,n),u&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var r,n,o,a,s,l="",c=e.tag,d=Object.keys(i);for(r=0,n=d.length;r<n;r+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),a=i[o=d[r]],e.replacer&&(a=e.replacer.call(i,o,a)),Ht(e,t,o,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Ht(e,t,a,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+d+" "+e.dump));else if("[object Array]"===l)r&&0!==e.dump.length?(e.noArrayIndent&&!a&&t>0?Ut(e,t-1,e.dump,n):Ut(e,t,e.dump,n),u&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var r,n,o,a="",s=e.tag;for(r=0,n=i.length;r<n;r+=1)o=i[r],e.replacer&&(o=e.replacer.call(i,String(r),o)),(Ht(e,t,o,!1,!1)||void 0===o&&Ht(e,t,null,!1,!1))&&(""!==a&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"}(e,t,e.dump),u&&(e.dump="&ref_"+d+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new Ie("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&Nt(e,e.dump,t,o,c)}null!==e.tag&&"?"!==e.tag&&(s=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s="!"===e.tag[0]?"!"+s:"tag:yaml.org,2002:"===s.slice(0,18)?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function Lt(e,t){var i,r,n=[],o=[];for(Rt(e,n,o),i=0,r=o.length;i<r;i+=1)t.duplicates.push(n[o[i]]);t.usedDuplicates=new Array(r)}function Rt(e,t,i){var r,n,o;if(null!==e&&"object"==typeof e)if(-1!==(n=t.indexOf(e)))-1===i.indexOf(n)&&i.push(n);else if(t.push(e),Array.isArray(e))for(n=0,o=e.length;n<o;n+=1)Rt(e[n],t,i);else for(n=0,o=(r=Object.keys(e)).length;n<o;n+=1)Rt(e[r[n]],t,i)}var zt={dump:function(e,t){var i=new wt(t=t||{});i.noRefs||Lt(e,i);var r=e;return i.replacer&&(r=i.replacer.call({"":r},"",r)),Ht(i,0,r,!0,!0)?i.dump+"\n":""}}.dump;function qt(e,t){const i={};for(const[r,n]of Object.entries(e))if(null!=n&&n!==t[r])if("object"!=typeof n||Array.isArray(n)||null===n)i[r]=n;else{const e=qt(n,t[r]??{});Object.keys(e).length>0&&(i[r]=e)}return i}function Dt(e,t,i=[]){const r=function(e,t){const i={};for(const r of t)r in e&&(i[r]=e[r]);for(const t of Object.keys(e))t in i||(i[t]=e[t]);return i}(qt(e,t),["type","entity","entities",...i]);return zt(r,{noRefs:!0,lineWidth:-1,quotingType:'"',forceQuotes:!1})}let Ft=class extends se{constructor(){super(...arguments),this._search="",this._categories=["stock","mushroom","custom"]}get _filteredCards(){const e=this._search.toLowerCase();return Ce.filter(t=>!e||t.label.toLowerCase().includes(e)||t.category.includes(e))}_selectCard(e){this.dispatchEvent(new CustomEvent("card-selected",{detail:e,bubbles:!0,composed:!0}))}render(){const e=this._filteredCards;return F`
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
    `}};Ft.styles=a`
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
  `,e([he({attribute:!1})],Ft.prototype,"hass",void 0),e([he({type:String})],Ft.prototype,"activeCardId",void 0),e([pe()],Ft.prototype,"_search",void 0),Ft=e([ce("hcd-card-list")],Ft);let Bt=class extends se{constructor(){super(...arguments),this.data={}}_handleValueChanged(e){this.data=e.detail.value,this.dispatchEvent(new CustomEvent("config-changed",{detail:{...this.data,type:this.schema?.type},bubbles:!0,composed:!0}))}render(){if(!this.schema)return F`
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
        <ha-form
          .hass=${this.hass}
          .data=${this.data}
          .schema=${e}
          .computeLabel=${e=>e.label??e.name}
          @value-changed=${this._handleValueChanged}
        ></ha-form>
      </div>
    `}};var Vt,Yt;Bt.styles=a`
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
  `,e([he({attribute:!1})],Bt.prototype,"hass",void 0),e([he({attribute:!1})],Bt.prototype,"schema",void 0),e([he({attribute:!1})],Bt.prototype,"data",void 0),Bt=e([ce("hcd-card-form")],Bt),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Vt||(Vt={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Yt||(Yt={}));var Wt=new Set(["call-service","divider","section","weblink","cast","select"]),Kt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Gt=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return r("hui-error-card",{type:"error",error:e,config:t})},r=function(e,t){var r=window.document.createElement(e);try{if(!r.setConfig)return;r.setConfig(t)}catch(r){return console.error(e,r),i(r.message,t)}return r};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var n=e.type;if(n&&n.startsWith("custom:"))n=n.substr(7);else if(t)if(Wt.has(n))n="hui-"+n+"-row";else{if(!e.entity)return i("Invalid config given.",e);var o=e.entity.split(".",1)[0];n="hui-"+(Kt[o]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return r(n,e);var a=i("Custom element doesn't exist: "+e.type+".",e);a.style.display="None";var s=setTimeout(function(){a.style.display=""},2e3);return customElements.whenDefined(e.type).then(function(){clearTimeout(s),function(e,t,i,r){r=r||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});n.detail=i,e.dispatchEvent(n)}(a,"ll-rebuild",{},a)}),a};let Zt=class extends se{constructor(){super(...arguments),this._loading=!1,this._rendered=!1}updated(e){(e.has("config")||e.has("hass"))&&(clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>this._renderPreview(),150))}async _ensureResourceLoaded(e){if(!document.querySelector(`script[src="${e}"]`))return new Promise((t,i)=>{const r=document.createElement("script");r.type="module",r.src=e,r.onload=()=>t(),r.onerror=()=>i(new Error(`Failed to load: ${e}`)),document.head.appendChild(r)})}async _renderPreview(){if(!this.config||!this.schema)return;const e=this.shadowRoot?.querySelector(".card-slot");if(e){if(this._error=void 0,this.schema.resourceUrl&&!this.schema.installed(this.hass)){this._loading=!0;try{await this._ensureResourceLoaded(this.schema.resourceUrl),await new Promise(e=>setTimeout(e,200))}catch{return this._error=`Could not load card resource. Install ${this.schema.label} via HACS first.`,void(this._loading=!1)}this._loading=!1}try{const t=Gt(this.config);t.hass=this.hass,e.replaceChildren(t),this._rendered=!0}catch(e){this._error=String(e)}}}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._debounceTimer)}render(){return this.config?F`
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
      `}};Zt.styles=a`
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
  `,e([he({attribute:!1})],Zt.prototype,"hass",void 0),e([he({attribute:!1})],Zt.prototype,"schema",void 0),e([he({attribute:!1})],Zt.prototype,"config",void 0),e([pe()],Zt.prototype,"_error",void 0),e([pe()],Zt.prototype,"_loading",void 0),Zt=e([ce("hcd-card-preview")],Zt);let Jt=class extends se{constructor(){super(...arguments),this.yaml="",this._copied=!1}async _copy(){try{await navigator.clipboard.writeText(this.yaml),this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}catch{const e=this.shadowRoot?.querySelector("textarea");e&&(e.select(),document.execCommand("copy"))}}render(){return F`
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
    `}};Jt.styles=a`
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
  `,e([he({type:String})],Jt.prototype,"yaml",void 0),e([pe()],Jt.prototype,"_copied",void 0),Jt=e([ce("hcd-yaml-output")],Jt);let Qt=class extends se{constructor(){super(...arguments),this.narrow=!1,this.route=null,this._config={},this._yaml=""}_onCardSelected(e){const t=e.detail,i=function(e){return Ce.find(t=>t.id===e)}(t);i&&(this._activeCardId=t,this._activeSchema=i,this._config={...i.defaults},this._updateYaml())}_onConfigChanged(e){this._config=e.detail,this._updateYaml()}_updateYaml(){this._activeSchema?this._yaml=Dt(this._config,this._activeSchema.defaults,this._activeSchema.yamlOrder):this._yaml=""}render(){return F`
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
    `}};Qt.styles=a`
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
  `,e([he({attribute:!1})],Qt.prototype,"hass",void 0),e([he({attribute:!1})],Qt.prototype,"narrow",void 0),e([he({attribute:!1})],Qt.prototype,"route",void 0),e([pe()],Qt.prototype,"_activeCardId",void 0),e([pe()],Qt.prototype,"_activeSchema",void 0),e([pe()],Qt.prototype,"_config",void 0),e([pe()],Qt.prototype,"_yaml",void 0),Qt=e([ce("ha-card-designer-panel")],Qt);
