function e(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new n(i,e,o)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,m=globalThis,f=m.trustedTypes,g=f?f.emptyScript:"",v=m.reactiveElementPolyfillSupport,b=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o;const n=r.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const n=this.constructor;if(!1===o&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??_)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,v?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=e=>e,k=$.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+E,T=`<${I}>`,O=document,M=()=>O.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,L="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,D=/>/g,U=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,F=/"/g,q=/^(?:script|style|textarea|title)$/i,H=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),Y=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),V=new WeakMap,W=O.createTreeWalker(O,129);function G(e,t){if(!N(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,o=[];let r,n=2===t?"<svg>":3===t?"<math>":"",a=P;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=R:void 0!==l[1]?a=D:void 0!==l[2]?(q.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=U):void 0!==l[3]&&(a=U):a===U?">"===l[0]?(a=r??P,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?U:'"'===l[3]?F:z):a===F||a===z?a=U:a===R||a===D?a=P:(a=U,r=void 0);const p=a===U&&e[t+1].startsWith("/>")?" ":"";n+=a===P?i+T:c>=0?(o.push(s),i.slice(0,c)+S+i.slice(c)+E+p):i+E+(-2===c?t:p)}return[G(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Z{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const a=e.length-1,s=this.parts,[l,c]=K(e,t);if(this.el=Z.createElement(l,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=W.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=c[n++],i=o.getAttribute(e).split(E),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?te:"?"===a[1]?ie:"@"===a[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(E)&&(s.push({type:6,index:r}),o.removeAttribute(e));if(q.test(o.tagName)){const e=o.textContent.split(E),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],M()),W.nextNode(),s.push({type:2,index:++r});o.append(e[t],M())}}}else if(8===o.nodeType)if(o.data===I)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(E,e+1));)s.push({type:7,index:r}),e+=E.length-1}r++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,o){if(t===Y)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const n=j(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=J(e,r._$AS(e,t.values),r,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);W.currentNode=o;let r=W.nextNode(),n=0,a=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new X(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new re(r,this,e)),this._$AV.push(t),s=i[++a]}n!==s?.index&&(r=W.nextNode(),n++)}return W.currentNode=O,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),j(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new Z(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new X(this.O(M()),this.O(M()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(void 0===r)e=J(this,e,t,0),n=!j(e)||e!==this._$AH&&e!==Y,n&&(this._$AH=e);else{const o=e;let a,s;for(e=r[0],a=0;a<r.length-1;a++)s=J(this,o[i+a],t,a),s===Y&&(s=this._$AH[a]),n||=!j(s)||s!==this._$AH[a],s===B?e=B:e!==B&&(e+=(s??"")+r[a+1]),this._$AH[a]=s}n&&!o&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class oe extends ee{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??B)===Y)return;const i=this._$AH,o=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==B&&(i===B||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const ne=$.litHtmlPolyfillSupport;ne?.(Z,X),($.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new X(t.insertBefore(M(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};se._$litElement$=!0,se.finalized=!0,ae.litElementHydrateSupport?.({LitElement:se});const le=ae.litElementPolyfillSupport;le?.({LitElement:se}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},pe=(e=de,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return he({...e,state:!0,attribute:!1})}const me=(e,t,i={})=>({name:e,label:t,selector:{entity:i.domain?{domain:i.domain}:{}},required:i.required??!1}),fe=(e,t,i={})=>({name:e,label:t,selector:{text:{multiline:i.multiline??!1}},required:i.required??!1}),ge=(e,t)=>({name:e,label:t,selector:{icon:{}}}),ve=(e,t,i)=>({name:e,label:t,selector:{boolean:{}},default:i}),be=(e,t,i,o={})=>({name:e,label:t,selector:{select:{options:i}},required:o.required??!1}),ye=(e,t,i={})=>({name:e,label:t,selector:{number:{min:i.min,max:i.max,step:i.step??1,mode:i.mode??"box"}}}),_e=(e="theme",t="Theme")=>({name:e,label:t,selector:{theme:{}}}),we=(e,t)=>({name:e,label:t,selector:{ui_action:{}}}),xe=(e,t)=>({name:e,label:t,selector:{template:{}}});function $e(e="entities",t="Entities"){return{type:"hcd-sub-form-list",name:e,title:t,addLabel:"Add entity",itemDefaults:{entity:""},itemSchema:[me("entity","Entity"),fe("name","Name (override)"),ge("icon","Icon"),be("secondary_info","Secondary info",[{value:"",label:"None"},{value:"entity-id",label:"Entity ID"},{value:"last-changed",label:"Last changed"},{value:"last-updated",label:"Last updated"},{value:"last-triggered",label:"Last triggered"},{value:"position",label:"Position"},{value:"tilt-position",label:"Tilt position"},{value:"brightness",label:"Brightness"}])],itemLabel:(e,t)=>e.entity||e.name||`Item ${t+1}`,reorderable:!0}}const Ae=[{value:"default",label:"Default"},{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],ke=[{value:"default",label:"Default"},{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],Ce=[{value:"var(--accent-color)",label:"Accent"},{value:"var(--primary-color)",label:"Primary"},{value:"#e74c3c",label:"Red"},{value:"#2ecc71",label:"Green"},{value:"#3498db",label:"Blue"}],Se=[{value:"line",label:"Line"},{value:"bar",label:"Bar"}],Ee=[{value:"vertical",label:"Vertical (default)"},{value:"horizontal",label:"Horizontal"},{value:"icon_name_state2nd",label:"Icon + name + state"},{value:"name_state2nd",label:"Name + state"}],Ie=[{id:"tile",type:"tile",label:"Tile",category:"stock",description:"A modern compact card that shows entity state and icon.",icon:"mdi:square-rounded",installed:()=>!!customElements.get("hui-tile-card"),defaults:{type:"tile"},yamlOrder:["name","icon","color","vertical","hide_state","state_content"],form:()=>[me("entity","Entity",{required:!0}),fe("name","Name"),ge("icon","Icon"),fe("color","Color (CSS variable or color)"),ve("vertical","Vertical layout",!1),ve("hide_state","Hide state",!1),_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("icon_tap_action","Icon tap action")]}]},{id:"entities",type:"entities",label:"Entities",category:"stock",description:"A list of entity rows. Add entities by ID in the entities list.",icon:"mdi:format-list-bulleted",installed:()=>!!customElements.get("hui-entities-card"),defaults:{type:"entities",entities:[],show_header_toggle:!1},yamlOrder:["entities","title","icon","show_header_toggle"],form:()=>[$e(),fe("title","Title"),_e(),{type:"expandable",title:"Options",icon:"mdi:cog",name:"_options",schema:[{name:"show_header_toggle",label:"Show header toggle",selector:{boolean:{}},default:!1}]}]},{id:"stack-vertical",type:"vertical-stack",label:"Vertical Stack",category:"stock",description:"Stack multiple cards vertically.",icon:"mdi:arrow-expand-vertical",installed:()=>!!customElements.get("hui-vertical-stack-card"),defaults:{type:"vertical-stack",cards:[]},yamlOrder:["cards"],form:()=>[{type:"hcd-card-list",name:"cards",title:"Cards",addLabel:"Add card",reorderable:!0}]},{id:"stack-horizontal",type:"horizontal-stack",label:"Horizontal Stack",category:"stock",description:"Stack multiple cards side by side.",icon:"mdi:arrow-expand-horizontal",installed:()=>!!customElements.get("hui-horizontal-stack-card"),defaults:{type:"horizontal-stack",cards:[]},yamlOrder:["cards"],form:()=>[{type:"hcd-card-list",name:"cards",title:"Cards",addLabel:"Add card",reorderable:!0}]},{id:"stack-grid",type:"grid",label:"Grid",category:"stock",description:"Arrange cards in a CSS grid layout.",icon:"mdi:view-grid",installed:()=>!!customElements.get("hui-grid-card"),defaults:{type:"grid",columns:2,square:!0,cards:[]},yamlOrder:["columns","square","cards"],form:()=>[ye("columns","Columns",{min:1,max:12}),{name:"square",label:"Square cells",selector:{boolean:{}},default:!0},{type:"hcd-card-list",name:"cards",title:"Cards",addLabel:"Add card",reorderable:!0}]},{id:"button",type:"button",label:"Button",category:"stock",description:"A clickable button card for triggering actions.",icon:"mdi:button-pointer",installed:()=>!!customElements.get("hui-button-card"),defaults:{type:"button",show_name:!0,show_icon:!0,show_state:!1},yamlOrder:["name","icon","show_name","show_icon","show_state"],form:()=>[me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),ve("show_name","Show name",!0),ve("show_icon","Show icon",!0),ve("show_state","Show state",!1),_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"gauge",type:"gauge",label:"Gauge",category:"stock",description:"Display a numeric sensor as a dial gauge.",icon:"mdi:gauge",installed:()=>!!customElements.get("hui-gauge-card"),defaults:{type:"gauge",min:0,max:100,needle:!1},yamlOrder:["name","unit","min","max","needle"],form:e=>[me("entity","Entity",{required:!0}),fe("name","Name"),fe("unit","Unit"),ye("min","Min",{mode:"box"}),ye("max","Max",{mode:"box"}),ve("needle","Needle style",!1),_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action")]}]},{id:"glance",type:"glance",label:"Glance",category:"stock",description:"Show multiple entity states in a compact icon grid.",icon:"mdi:eye",installed:()=>!!customElements.get("hui-glance-card"),defaults:{type:"glance",entities:[],show_name:!0,show_icon:!0,show_state:!0,columns:5},yamlOrder:["entities","title","columns","show_name","show_icon","show_state"],form:()=>[$e(),fe("title","Title"),ye("columns","Columns",{min:1,max:10}),ve("show_name","Show names",!0),ve("show_icon","Show icons",!0),ve("show_state","Show states",!0),_e()]},{id:"markdown",type:"markdown",label:"Markdown",category:"stock",description:"Display text with Markdown and Jinja2 templating.",icon:"mdi:language-markdown",installed:()=>!!customElements.get("hui-markdown-card"),defaults:{type:"markdown",content:""},yamlOrder:["title","content"],form:()=>[fe("title","Title"),{name:"content",label:"Content (Markdown + Jinja2)",selector:{text:{multiline:!0}},required:!0},_e()]},{id:"mushroom-entity",type:"custom:mushroom-entity-card",label:"Mushroom · Entity",category:"mushroom",description:"Versatile entity card from the Mushroom custom card suite.",icon:"mdi:mushroom",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-entity-card"),defaults:{type:"custom:mushroom-entity-card"},yamlOrder:["name","icon","icon_color","layout","fill_container"],form:()=>[me("entity","Entity",{required:!0}),fe("name","Name"),ge("icon","Icon"),fe("icon_color","Icon color"),be("layout","Layout",Ae),ve("fill_container","Fill container",!1),ve("hide_state","Hide state",!1),_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"mushroom-template",type:"custom:mushroom-template-card",label:"Mushroom · Template",category:"mushroom",description:"Fully customizable Mushroom card driven by Jinja2 templates.",icon:"mdi:mushroom-outline",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-template-card"),defaults:{type:"custom:mushroom-template-card"},yamlOrder:["primary","secondary","icon","icon_color","layout"],form:()=>[xe("primary","Primary (template)"),xe("secondary","Secondary (template)"),ge("icon","Icon"),xe("icon_color","Icon color (template)"),be("layout","Layout",ke),ve("fill_container","Fill container",!1),{type:"expandable",title:"Badge",icon:"mdi:badge-account",name:"_badge",schema:[ge("badge_icon","Badge icon"),fe("badge_color","Badge color")]},_e(),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"mushroom-chips",type:"custom:mushroom-chips-card",label:"Mushroom · Chips",category:"mushroom",description:"A compact row of chip elements (entity, weather, action, menu, …).",icon:"mdi:pokeball",resourceUrl:"/hacsfiles/lovelace-mushroom/mushroom.js",installed:()=>!!customElements.get("mushroom-chips-card"),defaults:{type:"custom:mushroom-chips-card",chips:[]},yamlOrder:["chips","alignment"],form:()=>[{name:"alignment",label:"Alignment",selector:{select:{options:[{value:"start",label:"Start"},{value:"center",label:"Center"},{value:"end",label:"End"}]}}}]},{id:"mini-graph",type:"custom:mini-graph-card",label:"Mini Graph Card",category:"custom",description:"Sensor history as a line or bar graph with optional statistics.",icon:"mdi:chart-line",resourceUrl:"/hacsfiles/mini-graph-card/mini-graph-card-bundle.js",installed:()=>!!customElements.get("mini-graph-card"),defaults:{type:"custom:mini-graph-card",entities:[],hours_to_show:24,points_per_hour:.5,line_width:5,font_size:75,animate:!1,show:{fill:!0,icon:!0,name:!0,state:!0,legend:!0}},yamlOrder:["name","icon","unit","entities","hours_to_show","graph_type"],form:e=>[$e(),fe("name","Name"),fe("unit","Unit"),be("graph_type","Graph type",Se),ye("hours_to_show","Hours to show",{min:1,max:168,mode:"box"}),ye("points_per_hour","Points per hour",{min:.1,max:10,step:.5,mode:"box"}),ye("line_width","Line width",{min:1,max:10,mode:"slider"}),be("color","Line color",Ce),ve("animate","Animate on load",!1),{type:"expandable",title:"Show / hide elements",icon:"mdi:eye",name:"_show",schema:[ve("show_fill","Fill area",!0),ve("show_icon","Icon",!0),ve("show_name","Name",!0),ve("show_state","State",!0),ve("show_legend","Legend",!0)]}]},{id:"bubble",type:"custom:bubble-card",label:"Bubble Card",category:"custom",description:"Beautiful bubble-style card supporting multiple layout types.",icon:"mdi:circle",resourceUrl:"/hacsfiles/Bubble-Card/bubble-card.js",installed:()=>!!customElements.get("bubble-card"),defaults:{type:"custom:bubble-card",card_type:"button"},yamlOrder:["card_type","entity","name","icon"],form:e=>[be("card_type","Card type",[{value:"button",label:"Button"},{value:"cover",label:"Cover"},{value:"media-player",label:"Media Player"},{value:"separator",label:"Separator"},{value:"pop-up",label:"Pop-up"}],{required:!0}),me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),fe("icon_color","Icon color"),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]},{id:"button-card",type:"custom:button-card",label:"Button Card",category:"custom",description:"Highly customizable button (non-template fields only; use YAML for advanced templating).",icon:"mdi:gesture-tap-button",resourceUrl:"/hacsfiles/button-card/button-card.js",installed:()=>!!customElements.get("button-card"),defaults:{type:"custom:button-card",show_name:!0,show_icon:!0,show_state:!1,layout:"vertical"},yamlOrder:["name","icon","color","layout","show_name","show_icon","show_state"],form:()=>[me("entity","Entity"),fe("name","Name"),ge("icon","Icon"),fe("color","Color (CSS / auto)"),be("layout","Layout",Ee),ve("show_name","Show name",!0),ve("show_icon","Show icon",!0),ve("show_state","Show state",!1),{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",name:"_actions",schema:[we("tap_action","Tap action"),we("hold_action","Hold action"),we("double_tap_action","Double tap action")]}]}];function Te(e){return Ie.find(t=>t.type===e)}
/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function Oe(e){return null==e}var Me={isNothing:Oe,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:Oe(e)?[]:[e]},repeat:function(e,t){var i,o="";for(i=0;i<t;i+=1)o+=e;return o},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var i,o,r,n;if(t)for(i=0,o=(n=Object.keys(t)).length;i<o;i+=1)e[r=n[i]]=t[r];return e}};function je(e,t){var i="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+="\n\n"+e.mark.snippet),o+" "+i):o}function Ne(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=je(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}Ne.prototype=Object.create(Error.prototype),Ne.prototype.constructor=Ne,Ne.prototype.toString=function(e){return this.name+": "+je(this,e)};var Le=Ne;function Pe(e,t,i,o,r){var n="",a="",s=Math.floor(r/2)-1;return o-t>s&&(t=o-s+(n=" ... ").length),i-o>s&&(i=o+s-(a=" ...").length),{str:n+e.slice(t,i).replace(/\t/g,"→")+a,pos:o-t+n.length}}function Re(e,t){return Me.repeat(" ",t-e.length)+e}var De=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var i,o=/\r?\n|\r|\0/g,r=[0],n=[],a=-1;i=o.exec(e.buffer);)n.push(i.index),r.push(i.index+i[0].length),e.position<=i.index&&a<0&&(a=r.length-2);a<0&&(a=r.length-1);var s,l,c="",d=Math.min(e.line+t.linesAfter,n.length).toString().length,p=t.maxLength-(t.indent+d+3);for(s=1;s<=t.linesBefore&&!(a-s<0);s++)l=Pe(e.buffer,r[a-s],n[a-s],e.position-(r[a]-r[a-s]),p),c=Me.repeat(" ",t.indent)+Re((e.line-s+1).toString(),d)+" | "+l.str+"\n"+c;for(l=Pe(e.buffer,r[a],n[a],e.position,p),c+=Me.repeat(" ",t.indent)+Re((e.line+1).toString(),d)+" | "+l.str+"\n",c+=Me.repeat("-",t.indent+d+3+l.pos)+"^\n",s=1;s<=t.linesAfter&&!(a+s>=n.length);s++)l=Pe(e.buffer,r[a+s],n[a+s],e.position-(r[a]-r[a+s]),p),c+=Me.repeat(" ",t.indent)+Re((e.line+s+1).toString(),d)+" | "+l.str+"\n";return c.replace(/\n$/,"")},Ue=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ze=["scalar","sequence","mapping"];var Fe=function(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===Ue.indexOf(t))throw new Le('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach(function(i){e[i].forEach(function(e){t[String(e)]=i})}),t}(t.styleAliases||null),-1===ze.indexOf(this.kind))throw new Le('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function qe(e,t){var i=[];return e[t].forEach(function(e){var t=i.length;i.forEach(function(i,o){i.tag===e.tag&&i.kind===e.kind&&i.multi===e.multi&&(t=o)}),i[t]=e}),i}function He(e){return this.extend(e)}He.prototype.extend=function(e){var t=[],i=[];if(e instanceof Fe)i.push(e);else if(Array.isArray(e))i=i.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new Le("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit))}t.forEach(function(e){if(!(e instanceof Fe))throw new Le("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new Le("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new Le("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(e){if(!(e instanceof Fe))throw new Le("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(He.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(i),o.compiledImplicit=qe(o,"implicit"),o.compiledExplicit=qe(o,"explicit"),o.compiledTypeMap=function(){var e,t,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function o(e){e.multi?(i.multi[e.kind].push(e),i.multi.fallback.push(e)):i[e.kind][e.tag]=i.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(o);return i}(o.compiledImplicit,o.compiledExplicit),o};var Ye=new He({explicit:[new Fe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),new Fe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),new Fe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})]});var Be=new Fe("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var Ve=new Fe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function We(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ge(e){return 48<=e&&e<=55}function Ke(e){return 48<=e&&e<=57}var Ze=new Fe("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i=e.length,o=0,r=!1;if(!i)return!1;if("-"!==(t=e[o])&&"+"!==t||(t=e[++o]),"0"===t){if(o+1===i)return!0;if("b"===(t=e[++o])){for(o++;o<i;o++)if("_"!==(t=e[o])){if("0"!==t&&"1"!==t)return!1;r=!0}return r&&"_"!==t}if("x"===t){for(o++;o<i;o++)if("_"!==(t=e[o])){if(!We(e.charCodeAt(o)))return!1;r=!0}return r&&"_"!==t}if("o"===t){for(o++;o<i;o++)if("_"!==(t=e[o])){if(!Ge(e.charCodeAt(o)))return!1;r=!0}return r&&"_"!==t}}if("_"===t)return!1;for(;o<i;o++)if("_"!==(t=e[o])){if(!Ke(e.charCodeAt(o)))return!1;r=!0}return!(!r||"_"===t)},construct:function(e){var t,i=e,o=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(o=-1),t=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===t){if("b"===i[1])return o*parseInt(i.slice(2),2);if("x"===i[1])return o*parseInt(i.slice(2),16);if("o"===i[1])return o*parseInt(i.slice(2),8)}return o*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!Me.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Je=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var Qe=/^[-+]?[0-9]+e/;var Xe=new Fe("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Je.test(e)||"_"===e[e.length-1])},construct:function(e){var t,i;return i="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:i*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||Me.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Me.isNegativeZero(e))return"-0.0";return i=e.toString(10),Qe.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),et=Ye.extend({implicit:[Be,Ve,Ze,Xe]}),tt=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),it=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var ot=new Fe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==tt.exec(e)||null!==it.exec(e))},construct:function(e){var t,i,o,r,n,a,s,l,c=0,d=null;if(null===(t=tt.exec(e))&&(t=it.exec(e)),null===t)throw new Error("Date resolve error");if(i=+t[1],o=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(i,o,r));if(n=+t[4],a=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),l=new Date(Date.UTC(i,o,r,n,a,s,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}});var rt=new Fe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var at=new Fe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,o=0,r=e.length,n=nt;for(i=0;i<r;i++)if(!((t=n.indexOf(e.charAt(i)))>64)){if(t<0)return!1;o+=6}return o%8==0},construct:function(e){var t,i,o=e.replace(/[\r\n=]/g,""),r=o.length,n=nt,a=0,s=[];for(t=0;t<r;t++)t%4==0&&t&&(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)),a=a<<6|n.indexOf(o.charAt(t));return 0===(i=r%4*6)?(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)):18===i?(s.push(a>>10&255),s.push(a>>2&255)):12===i&&s.push(a>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,i,o="",r=0,n=e.length,a=nt;for(t=0;t<n;t++)t%3==0&&t&&(o+=a[r>>18&63],o+=a[r>>12&63],o+=a[r>>6&63],o+=a[63&r]),r=(r<<8)+e[t];return 0===(i=n%3)?(o+=a[r>>18&63],o+=a[r>>12&63],o+=a[r>>6&63],o+=a[63&r]):2===i?(o+=a[r>>10&63],o+=a[r>>4&63],o+=a[r<<2&63],o+=a[64]):1===i&&(o+=a[r>>2&63],o+=a[r<<4&63],o+=a[64],o+=a[64]),o}}),st=Object.prototype.hasOwnProperty,lt=Object.prototype.toString;var ct=new Fe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,o,r,n,a=[],s=e;for(t=0,i=s.length;t<i;t+=1){if(o=s[t],n=!1,"[object Object]"!==lt.call(o))return!1;for(r in o)if(st.call(o,r)){if(n)return!1;n=!0}if(!n)return!1;if(-1!==a.indexOf(r))return!1;a.push(r)}return!0},construct:function(e){return null!==e?e:[]}}),dt=Object.prototype.toString;var pt=new Fe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,o,r,n,a=e;for(n=new Array(a.length),t=0,i=a.length;t<i;t+=1){if(o=a[t],"[object Object]"!==dt.call(o))return!1;if(1!==(r=Object.keys(o)).length)return!1;n[t]=[r[0],o[r[0]]]}return!0},construct:function(e){if(null===e)return[];var t,i,o,r,n,a=e;for(n=new Array(a.length),t=0,i=a.length;t<i;t+=1)o=a[t],r=Object.keys(o),n[t]=[r[0],o[r[0]]];return n}}),ht=Object.prototype.hasOwnProperty;var ut=new Fe("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,i=e;for(t in i)if(ht.call(i,t)&&null!==i[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),mt=et.extend({implicit:[ot,rt],explicit:[at,ct,pt,ut]}),ft=Object.prototype.hasOwnProperty,gt=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,vt=/[\x85\u2028\u2029]/,bt=/[,\[\]\{\}]/,yt=/^(?:!|!!|![a-z\-]+!)$/i,_t=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function wt(e){return Object.prototype.toString.call(e)}function xt(e){return 10===e||13===e}function $t(e){return 9===e||32===e}function At(e){return 9===e||32===e||10===e||13===e}function kt(e){return 44===e||91===e||93===e||123===e||125===e}function Ct(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function St(e){return 120===e?2:117===e?4:85===e?8:0}function Et(e){return 48<=e&&e<=57?e-48:-1}function It(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function Tt(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}function Ot(e,t,i){"__proto__"===t?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:i}):e[t]=i}for(var Mt=new Array(256),jt=new Array(256),Nt=0;Nt<256;Nt++)Mt[Nt]=It(Nt)?1:0,jt[Nt]=It(Nt);function Lt(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||mt,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Pt(e,t){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=De(i),new Le(t,i)}function Rt(e,t){throw Pt(e,t)}function Dt(e,t){e.onWarning&&e.onWarning.call(null,Pt(e,t))}var Ut={YAML:function(e,t,i){var o,r,n;null!==e.version&&Rt(e,"duplication of %YAML directive"),1!==i.length&&Rt(e,"YAML directive accepts exactly one argument"),null===(o=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&Rt(e,"ill-formed argument of the YAML directive"),r=parseInt(o[1],10),n=parseInt(o[2],10),1!==r&&Rt(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=n<2,1!==n&&2!==n&&Dt(e,"unsupported YAML version of the document")},TAG:function(e,t,i){var o,r;2!==i.length&&Rt(e,"TAG directive accepts exactly two arguments"),o=i[0],r=i[1],yt.test(o)||Rt(e,"ill-formed tag handle (first argument) of the TAG directive"),ft.call(e.tagMap,o)&&Rt(e,'there is a previously declared suffix for "'+o+'" tag handle'),_t.test(r)||Rt(e,"ill-formed tag prefix (second argument) of the TAG directive");try{r=decodeURIComponent(r)}catch(t){Rt(e,"tag prefix is malformed: "+r)}e.tagMap[o]=r}};function zt(e,t,i,o){var r,n,a,s;if(t<i){if(s=e.input.slice(t,i),o)for(r=0,n=s.length;r<n;r+=1)9===(a=s.charCodeAt(r))||32<=a&&a<=1114111||Rt(e,"expected valid JSON character");else gt.test(s)&&Rt(e,"the stream contains non-printable characters");e.result+=s}}function Ft(e,t,i,o){var r,n,a,s;for(Me.isObject(i)||Rt(e,"cannot merge mappings; the provided source object is unacceptable"),a=0,s=(r=Object.keys(i)).length;a<s;a+=1)n=r[a],ft.call(t,n)||(Ot(t,n,i[n]),o[n]=!0)}function qt(e,t,i,o,r,n,a,s,l){var c,d;if(Array.isArray(r))for(c=0,d=(r=Array.prototype.slice.call(r)).length;c<d;c+=1)Array.isArray(r[c])&&Rt(e,"nested arrays are not supported inside keys"),"object"==typeof r&&"[object Object]"===wt(r[c])&&(r[c]="[object Object]");if("object"==typeof r&&"[object Object]"===wt(r)&&(r="[object Object]"),r=String(r),null===t&&(t={}),"tag:yaml.org,2002:merge"===o)if(Array.isArray(n))for(c=0,d=n.length;c<d;c+=1)Ft(e,t,n[c],i);else Ft(e,t,n,i);else e.json||ft.call(i,r)||!ft.call(t,r)||(e.line=a||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,Rt(e,"duplicated mapping key")),Ot(t,r,n),delete i[r];return t}function Ht(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):Rt(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Yt(e,t,i){for(var o=0,r=e.input.charCodeAt(e.position);0!==r;){for(;$t(r);)9===r&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&35===r)do{r=e.input.charCodeAt(++e.position)}while(10!==r&&13!==r&&0!==r);if(!xt(r))break;for(Ht(e),r=e.input.charCodeAt(e.position),o++,e.lineIndent=0;32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return-1!==i&&0!==o&&e.lineIndent<i&&Dt(e,"deficient indentation"),o}function Bt(e){var t,i=e.position;return!(45!==(t=e.input.charCodeAt(i))&&46!==t||t!==e.input.charCodeAt(i+1)||t!==e.input.charCodeAt(i+2)||(i+=3,0!==(t=e.input.charCodeAt(i))&&!At(t)))}function Vt(e,t){1===t?e.result+=" ":t>1&&(e.result+=Me.repeat("\n",t-1))}function Wt(e,t){var i,o,r=e.tag,n=e.anchor,a=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),o=e.input.charCodeAt(e.position);0!==o&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,Rt(e,"tab characters must not be used in indentation")),45===o)&&At(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,Yt(e,!0,-1)&&e.lineIndent<=t)a.push(null),o=e.input.charCodeAt(e.position);else if(i=e.line,Zt(e,t,3,!1,!0),a.push(e.result),Yt(e,!0,-1),o=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&0!==o)Rt(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=r,e.anchor=n,e.kind="sequence",e.result=a,!0)}function Gt(e){var t,i,o,r,n=!1,a=!1;if(33!==(r=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&Rt(e,"duplication of a tag property"),60===(r=e.input.charCodeAt(++e.position))?(n=!0,r=e.input.charCodeAt(++e.position)):33===r?(a=!0,i="!!",r=e.input.charCodeAt(++e.position)):i="!",t=e.position,n){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&62!==r);e.position<e.length?(o=e.input.slice(t,e.position),r=e.input.charCodeAt(++e.position)):Rt(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!At(r);)33===r&&(a?Rt(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(t-1,e.position+1),yt.test(i)||Rt(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),bt.test(o)&&Rt(e,"tag suffix cannot contain flow indicator characters")}o&&!_t.test(o)&&Rt(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch(t){Rt(e,"tag name is malformed: "+o)}return n?e.tag=o:ft.call(e.tagMap,i)?e.tag=e.tagMap[i]+o:"!"===i?e.tag="!"+o:"!!"===i?e.tag="tag:yaml.org,2002:"+o:Rt(e,'undeclared tag handle "'+i+'"'),!0}function Kt(e){var t,i;if(38!==(i=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&Rt(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!At(i)&&!kt(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&Rt(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function Zt(e,t,i,o,r){var n,a,s,l,c,d,p,h,u,m=1,f=!1,g=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,n=a=s=4===i||3===i,o&&Yt(e,!0,-1)&&(f=!0,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)),1===m)for(;Gt(e)||Kt(e);)Yt(e,!0,-1)?(f=!0,s=n,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)):s=!1;if(s&&(s=f||r),1!==m&&4!==i||(h=1===i||2===i?t:t+1,u=e.position-e.lineStart,1===m?s&&(Wt(e,u)||function(e,t,i){var o,r,n,a,s,l,c,d=e.tag,p=e.anchor,h={},u=Object.create(null),m=null,f=null,g=null,v=!1,b=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=h),c=e.input.charCodeAt(e.position);0!==c;){if(v||-1===e.firstTabInLine||(e.position=e.firstTabInLine,Rt(e,"tab characters must not be used in indentation")),o=e.input.charCodeAt(e.position+1),n=e.line,63!==c&&58!==c||!At(o)){if(a=e.line,s=e.lineStart,l=e.position,!Zt(e,i,2,!1,!0))break;if(e.line===n){for(c=e.input.charCodeAt(e.position);$t(c);)c=e.input.charCodeAt(++e.position);if(58===c)At(c=e.input.charCodeAt(++e.position))||Rt(e,"a whitespace character is expected after the key-value separator within a block mapping"),v&&(qt(e,h,u,m,f,null,a,s,l),m=f=g=null),b=!0,v=!1,r=!1,m=e.tag,f=e.result;else{if(!b)return e.tag=d,e.anchor=p,!0;Rt(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!b)return e.tag=d,e.anchor=p,!0;Rt(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(v&&(qt(e,h,u,m,f,null,a,s,l),m=f=g=null),b=!0,v=!0,r=!0):v?(v=!1,r=!0):Rt(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=o;if((e.line===n||e.lineIndent>t)&&(v&&(a=e.line,s=e.lineStart,l=e.position),Zt(e,t,4,!0,r)&&(v?f=e.result:g=e.result),v||(qt(e,h,u,m,f,g,a,s,l),m=f=g=null),Yt(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===n||e.lineIndent>t)&&0!==c)Rt(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return v&&qt(e,h,u,m,f,null,a,s,l),b&&(e.tag=d,e.anchor=p,e.kind="mapping",e.result=h),b}(e,u,h))||function(e,t){var i,o,r,n,a,s,l,c,d,p,h,u,m=!0,f=e.tag,g=e.anchor,v=Object.create(null);if(91===(u=e.input.charCodeAt(e.position)))a=93,c=!1,n=[];else{if(123!==u)return!1;a=125,c=!0,n={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=n),u=e.input.charCodeAt(++e.position);0!==u;){if(Yt(e,!0,t),(u=e.input.charCodeAt(e.position))===a)return e.position++,e.tag=f,e.anchor=g,e.kind=c?"mapping":"sequence",e.result=n,!0;m?44===u&&Rt(e,"expected the node content, but found ','"):Rt(e,"missed comma between flow collection entries"),h=null,s=l=!1,63===u&&At(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,Yt(e,!0,t)),i=e.line,o=e.lineStart,r=e.position,Zt(e,t,1,!1,!0),p=e.tag,d=e.result,Yt(e,!0,t),u=e.input.charCodeAt(e.position),!l&&e.line!==i||58!==u||(s=!0,u=e.input.charCodeAt(++e.position),Yt(e,!0,t),Zt(e,t,1,!1,!0),h=e.result),c?qt(e,n,v,p,d,h,i,o,r):s?n.push(qt(e,null,v,p,d,h,i,o,r)):n.push(d),Yt(e,!0,t),44===(u=e.input.charCodeAt(e.position))?(m=!0,u=e.input.charCodeAt(++e.position)):m=!1}Rt(e,"unexpected end of the stream within a flow collection")}(e,h)?g=!0:(a&&function(e,t){var i,o,r,n,a=1,s=!1,l=!1,c=t,d=0,p=!1;if(124===(n=e.input.charCodeAt(e.position)))o=!1;else{if(62!==n)return!1;o=!0}for(e.kind="scalar",e.result="";0!==n;)if(43===(n=e.input.charCodeAt(++e.position))||45===n)1===a?a=43===n?3:2:Rt(e,"repeat of a chomping mode identifier");else{if(!((r=Et(n))>=0))break;0===r?Rt(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?Rt(e,"repeat of an indentation width identifier"):(c=t+r-1,l=!0)}if($t(n)){do{n=e.input.charCodeAt(++e.position)}while($t(n));if(35===n)do{n=e.input.charCodeAt(++e.position)}while(!xt(n)&&0!==n)}for(;0!==n;){for(Ht(e),e.lineIndent=0,n=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&32===n;)e.lineIndent++,n=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),xt(n))d++;else{if(e.lineIndent<c){3===a?e.result+=Me.repeat("\n",s?1+d:d):1===a&&s&&(e.result+="\n");break}for(o?$t(n)?(p=!0,e.result+=Me.repeat("\n",s?1+d:d)):p?(p=!1,e.result+=Me.repeat("\n",d+1)):0===d?s&&(e.result+=" "):e.result+=Me.repeat("\n",d):e.result+=Me.repeat("\n",s?1+d:d),s=!0,l=!0,d=0,i=e.position;!xt(n)&&0!==n;)n=e.input.charCodeAt(++e.position);zt(e,i,e.position,!1)}}return!0}(e,h)||function(e,t){var i,o,r;if(39!==(i=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,o=r=e.position;0!==(i=e.input.charCodeAt(e.position));)if(39===i){if(zt(e,o,e.position,!0),39!==(i=e.input.charCodeAt(++e.position)))return!0;o=e.position,e.position++,r=e.position}else xt(i)?(zt(e,o,r,!0),Vt(e,Yt(e,!1,t)),o=r=e.position):e.position===e.lineStart&&Bt(e)?Rt(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);Rt(e,"unexpected end of the stream within a single quoted scalar")}(e,h)||function(e,t){var i,o,r,n,a,s;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=o=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return zt(e,i,e.position,!0),e.position++,!0;if(92===s){if(zt(e,i,e.position,!0),xt(s=e.input.charCodeAt(++e.position)))Yt(e,!1,t);else if(s<256&&Mt[s])e.result+=jt[s],e.position++;else if((a=St(s))>0){for(r=a,n=0;r>0;r--)(a=Ct(s=e.input.charCodeAt(++e.position)))>=0?n=(n<<4)+a:Rt(e,"expected hexadecimal character");e.result+=Tt(n),e.position++}else Rt(e,"unknown escape sequence");i=o=e.position}else xt(s)?(zt(e,i,o,!0),Vt(e,Yt(e,!1,t)),i=o=e.position):e.position===e.lineStart&&Bt(e)?Rt(e,"unexpected end of the document within a double quoted scalar"):(e.position++,o=e.position)}Rt(e,"unexpected end of the stream within a double quoted scalar")}(e,h)?g=!0:!function(e){var t,i,o;if(42!==(o=e.input.charCodeAt(e.position)))return!1;for(o=e.input.charCodeAt(++e.position),t=e.position;0!==o&&!At(o)&&!kt(o);)o=e.input.charCodeAt(++e.position);return e.position===t&&Rt(e,"name of an alias node must contain at least one character"),i=e.input.slice(t,e.position),ft.call(e.anchorMap,i)||Rt(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],Yt(e,!0,-1),!0}(e)?function(e,t,i){var o,r,n,a,s,l,c,d,p=e.kind,h=e.result;if(At(d=e.input.charCodeAt(e.position))||kt(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(At(o=e.input.charCodeAt(e.position+1))||i&&kt(o)))return!1;for(e.kind="scalar",e.result="",r=n=e.position,a=!1;0!==d;){if(58===d){if(At(o=e.input.charCodeAt(e.position+1))||i&&kt(o))break}else if(35===d){if(At(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Bt(e)||i&&kt(d))break;if(xt(d)){if(s=e.line,l=e.lineStart,c=e.lineIndent,Yt(e,!1,-1),e.lineIndent>=t){a=!0,d=e.input.charCodeAt(e.position);continue}e.position=n,e.line=s,e.lineStart=l,e.lineIndent=c;break}}a&&(zt(e,r,n,!1),Vt(e,e.line-s),r=n=e.position,a=!1),$t(d)||(n=e.position+1),d=e.input.charCodeAt(++e.position)}return zt(e,r,n,!1),!!e.result||(e.kind=p,e.result=h,!1)}(e,h,1===i)&&(g=!0,null===e.tag&&(e.tag="?")):(g=!0,null===e.tag&&null===e.anchor||Rt(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===m&&(g=s&&Wt(e,u))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&Rt(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((p=e.implicitTypes[l]).resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(ft.call(e.typeMap[e.kind||"fallback"],e.tag))p=e.typeMap[e.kind||"fallback"][e.tag];else for(p=null,l=0,c=(d=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,d[l].tag.length)===d[l].tag){p=d[l];break}p||Rt(e,"unknown tag !<"+e.tag+">"),null!==e.result&&p.kind!==e.kind&&Rt(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result,e.tag)?(e.result=p.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):Rt(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||g}function Jt(e){var t,i,o,r,n=e.position,a=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(r=e.input.charCodeAt(e.position))&&(Yt(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==r));){for(a=!0,r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!At(r);)r=e.input.charCodeAt(++e.position);for(o=[],(i=e.input.slice(t,e.position)).length<1&&Rt(e,"directive name must not be less than one character in length");0!==r;){for(;$t(r);)r=e.input.charCodeAt(++e.position);if(35===r){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&!xt(r));break}if(xt(r))break;for(t=e.position;0!==r&&!At(r);)r=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}0!==r&&Ht(e),ft.call(Ut,i)?Ut[i](e,i,o):Dt(e,'unknown document directive "'+i+'"')}Yt(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,Yt(e,!0,-1)):a&&Rt(e,"directives end mark is expected"),Zt(e,e.lineIndent-1,4,!1,!0),Yt(e,!0,-1),e.checkLineBreaks&&vt.test(e.input.slice(n,e.position))&&Dt(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Bt(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,Yt(e,!0,-1)):e.position<e.length-1&&Rt(e,"end of the stream or a document separator is expected")}var Qt={load:function(e,t){var i=function(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var i=new Lt(e,t),o=e.indexOf("\0");for(-1!==o&&(i.position=o,Rt(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)Jt(i);return i.documents}(e,t);if(0!==i.length){if(1===i.length)return i[0];throw new Le("expected a single document in the stream, but found more")}}},Xt=Object.prototype.toString,ei=Object.prototype.hasOwnProperty,ti=65279,ii={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},oi=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],ri=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function ni(e){var t,i,o;if(t=e.toString(16).toUpperCase(),e<=255)i="x",o=2;else if(e<=65535)i="u",o=4;else{if(!(e<=4294967295))throw new Le("code point within a string may not be greater than 0xFFFFFFFF");i="U",o=8}return"\\"+i+Me.repeat("0",o-t.length)+t}function ai(e){this.schema=e.schema||mt,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Me.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var i,o,r,n,a,s,l;if(null===t)return{};for(i={},r=0,n=(o=Object.keys(t)).length;r<n;r+=1)a=o[r],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(l=e.compiledTypeMap.fallback[a])&&ei.call(l.styleAliases,s)&&(s=l.styleAliases[s]),i[a]=s;return i}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function si(e,t){for(var i,o=Me.repeat(" ",t),r=0,n=-1,a="",s=e.length;r<s;)-1===(n=e.indexOf("\n",r))?(i=e.slice(r),r=s):(i=e.slice(r,n+1),r=n+1),i.length&&"\n"!==i&&(a+=o),a+=i;return a}function li(e,t){return"\n"+Me.repeat(" ",e.indent*t)}function ci(e){return 32===e||9===e}function di(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==ti||65536<=e&&e<=1114111}function pi(e){return di(e)&&e!==ti&&13!==e&&10!==e}function hi(e,t,i){var o=pi(e),r=o&&!ci(e);return(i?o:o&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!r)||pi(t)&&!ci(t)&&35===e||58===t&&r}function ui(e,t){var i,o=e.charCodeAt(t);return o>=55296&&o<=56319&&t+1<e.length&&(i=e.charCodeAt(t+1))>=56320&&i<=57343?1024*(o-55296)+i-56320+65536:o}function mi(e){return/^\n* /.test(e)}function fi(e,t,i,o,r,n,a,s){var l,c=0,d=null,p=!1,h=!1,u=-1!==o,m=-1,f=function(e){return di(e)&&e!==ti&&!ci(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(ui(e,0))&&function(e){return!ci(e)&&58!==e}(ui(e,e.length-1));if(t||a)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!di(c=ui(e,l)))return 5;f=f&&hi(c,d,s),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=ui(e,l)))p=!0,u&&(h=h||l-m-1>o&&" "!==e[m+1],m=l);else if(!di(c))return 5;f=f&&hi(c,d,s),d=c}h=h||u&&l-m-1>o&&" "!==e[m+1]}return p||h?i>9&&mi(e)?5:a?2===n?5:2:h?4:3:!f||a||r(e)?2===n?5:2:1}function gi(e,t,i,o,r){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==oi.indexOf(t)||ri.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var n=e.indent*Math.max(1,i),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-n),s=o||e.flowLevel>-1&&i>=e.flowLevel;switch(fi(t,s,e.indent,a,function(t){return function(e,t){var i,o;for(i=0,o=e.implicitTypes.length;i<o;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}(e,t)},e.quotingType,e.forceQuotes&&!o,r)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+vi(t,e.indent)+bi(si(t,n));case 4:return">"+vi(t,e.indent)+bi(si(function(e,t){var i,o,r=/(\n+)([^\n]*)/g,n=(s=e.indexOf("\n"),s=-1!==s?s:e.length,r.lastIndex=s,yi(e.slice(0,s),t)),a="\n"===e[0]||" "===e[0];var s;for(;o=r.exec(e);){var l=o[1],c=o[2];i=" "===c[0],n+=l+(a||i||""===c?"":"\n")+yi(c,t),a=i}return n}(t,a),n));case 5:return'"'+function(e){for(var t,i="",o=0,r=0;r<e.length;o>=65536?r+=2:r++)o=ui(e,r),!(t=ii[o])&&di(o)?(i+=e[r],o>=65536&&(i+=e[r+1])):i+=t||ni(o);return i}(t)+'"';default:throw new Le("impossible error: invalid scalar style")}}()}function vi(e,t){var i=mi(e)?String(t):"",o="\n"===e[e.length-1];return i+(o&&("\n"===e[e.length-2]||"\n"===e)?"+":o?"":"-")+"\n"}function bi(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function yi(e,t){if(""===e||" "===e[0])return e;for(var i,o,r=/ [^ ]/g,n=0,a=0,s=0,l="";i=r.exec(e);)(s=i.index)-n>t&&(o=a>n?a:s,l+="\n"+e.slice(n,o),n=o+1),a=s;return l+="\n",e.length-n>t&&a>n?l+=e.slice(n,a)+"\n"+e.slice(a+1):l+=e.slice(n),l.slice(1)}function _i(e,t,i,o){var r,n,a,s="",l=e.tag;for(r=0,n=i.length;r<n;r+=1)a=i[r],e.replacer&&(a=e.replacer.call(i,String(r),a)),(xi(e,t+1,a,!0,!0,!1,!0)||void 0===a&&xi(e,t+1,null,!0,!0,!1,!0))&&(o&&""===s||(s+=li(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function wi(e,t,i){var o,r,n,a,s,l;for(n=0,a=(r=i?e.explicitTypes:e.implicitTypes).length;n<a;n+=1)if(((s=r[n]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(i?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===Xt.call(s.represent))o=s.represent(t,l);else{if(!ei.call(s.represent,l))throw new Le("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');o=s.represent[l](t,l)}e.dump=o}return!0}return!1}function xi(e,t,i,o,r,n,a){e.tag=null,e.dump=i,wi(e,i,!1)||wi(e,i,!0);var s,l=Xt.call(e.dump),c=o;o&&(o=e.flowLevel<0||e.flowLevel>t);var d,p,h="[object Object]"===l||"[object Array]"===l;if(h&&(p=-1!==(d=e.duplicates.indexOf(i))),(null!==e.tag&&"?"!==e.tag||p||2!==e.indent&&t>0)&&(r=!1),p&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(h&&p&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),"[object Object]"===l)o&&0!==Object.keys(e.dump).length?(!function(e,t,i,o){var r,n,a,s,l,c,d="",p=e.tag,h=Object.keys(i);if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new Le("sortKeys must be a boolean or a function");for(r=0,n=h.length;r<n;r+=1)c="",o&&""===d||(c+=li(e,t)),s=i[a=h[r]],e.replacer&&(s=e.replacer.call(i,a,s)),xi(e,t+1,a,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,l&&(c+=li(e,t)),xi(e,t+1,s,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?c+=":":c+=": ",d+=c+=e.dump));e.tag=p,e.dump=d||"{}"}(e,t,e.dump,r),p&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var o,r,n,a,s,l="",c=e.tag,d=Object.keys(i);for(o=0,r=d.length;o<r;o+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),a=i[n=d[o]],e.replacer&&(a=e.replacer.call(i,n,a)),xi(e,t,n,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),xi(e,t,a,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),p&&(e.dump="&ref_"+d+" "+e.dump));else if("[object Array]"===l)o&&0!==e.dump.length?(e.noArrayIndent&&!a&&t>0?_i(e,t-1,e.dump,r):_i(e,t,e.dump,r),p&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var o,r,n,a="",s=e.tag;for(o=0,r=i.length;o<r;o+=1)n=i[o],e.replacer&&(n=e.replacer.call(i,String(o),n)),(xi(e,t,n,!1,!1)||void 0===n&&xi(e,t,null,!1,!1))&&(""!==a&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"}(e,t,e.dump),p&&(e.dump="&ref_"+d+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new Le("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&gi(e,e.dump,t,n,c)}null!==e.tag&&"?"!==e.tag&&(s=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s="!"===e.tag[0]?"!"+s:"tag:yaml.org,2002:"===s.slice(0,18)?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function $i(e,t){var i,o,r=[],n=[];for(Ai(e,r,n),i=0,o=n.length;i<o;i+=1)t.duplicates.push(r[n[i]]);t.usedDuplicates=new Array(o)}function Ai(e,t,i){var o,r,n;if(null!==e&&"object"==typeof e)if(-1!==(r=t.indexOf(e)))-1===i.indexOf(r)&&i.push(r);else if(t.push(e),Array.isArray(e))for(r=0,n=e.length;r<n;r+=1)Ai(e[r],t,i);else for(r=0,n=(o=Object.keys(e)).length;r<n;r+=1)Ai(e[o[r]],t,i)}var ki=Qt.load,Ci={dump:function(e,t){var i=new ai(t=t||{});i.noRefs||$i(e,i);var o=e;return i.replacer&&(o=i.replacer.call({"":o},"",o)),xi(i,0,o,!0,!0)?i.dump+"\n":""}}.dump;function Si(e,t){const i={};for(const o of t)o in e&&(i[o]=e[o]);for(const t of Object.keys(e))t in i||(i[t]=e[t]);return i}const Ei=["type","card_type"];function Ii(e){const t={};for(const[i,o]of Object.entries(e))("entity"===i||""!==o&&null!=o)&&(t[i]=o);return t}function Ti(e,t){const i={};for(const[o,r]of Object.entries(e))if(null!=r&&!(r===t[o]||Array.isArray(r)&&0===r.length&&Array.isArray(t[o])&&0===t[o].length))if(Array.isArray(r))i[o]="entities"===o?r.map(Ii):"cards"===o?r.map(e=>{if("object"!=typeof e||null===e)return e;const t=e,i=t.type,o=i?Te(i):void 0;if(!o)return e;const r=Ti(t,o.defaults);for(const e of Ei)e in t&&!(e in r)&&(r[e]=t[e]);return r}):r;else if("object"==typeof r&&null!==r){const e=Ti(r,t[o]??{});Object.keys(e).length>0&&(i[o]=e)}else i[o]=r;return i}function Oi(e){return Array.isArray(e.cards)?{...e,cards:e.cards.map(e=>{if("object"!=typeof e||null===e)return e;const t=e.type,i=t?Te(t):void 0;return i?Oi(Si(e,["type","entity","entities",...i.yamlOrder??[]])):e})}:e}function Mi(e,t,i=[]){const o=Ti(e,t);for(const t of Ei)t in e&&!(t in o)&&(o[t]=e[t]);const r=Oi(Si(o,["type","entity","entities",...i]));return Ci(r,{noRefs:!0,lineWidth:-1,quotingType:'"',forceQuotes:!1})}let ji=class extends se{constructor(){super(...arguments),this.narrow=!1,this._search="",this._categories=["stock","mushroom","custom"]}get _filteredCards(){const e=this._search.toLowerCase();return Ie.filter(t=>!e||t.label.toLowerCase().includes(e)||t.category.includes(e))}_selectCard(e){this.dispatchEvent(new CustomEvent("card-selected",{detail:e,bubbles:!0,composed:!0}))}render(){const e=this._filteredCards;return H`
      <div class="search">
        <ha-textfield
          .label=${"Search cards"}
          .value=${this._search}
          @input=${e=>{this._search=e.target.value}}
        ></ha-textfield>
      </div>
      <div class="list">
        ${this._categories.map(t=>{const i=e.filter(e=>e.category===t);return i.length?H`
            <div class="category-header">${t}</div>
            ${i.map(e=>{const t=e.installed(this.hass);return H`
                <div
                  class="card-item ${this.activeCardId===e.id?"active":""} ${t?"":"disabled"}"
                  @click=${()=>t&&this._selectCard(e.id)}
                  title=${t?e.description:"Card not installed — install via HACS first"}
                >
                  <ha-icon .icon=${e.icon}></ha-icon>
                  <span class="label">${e.label}</span>
                  ${t?"":H`<span class="not-installed">Not installed</span>`}
                </div>
              `})}
          `:""})}
      </div>
    `}};ji.styles=a`
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
      -webkit-tap-highlight-color: transparent;
    }
    :host([narrow]) .card-item {
      padding: 12px 16px;
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
    :host([narrow]) .label {
      font-size: 15px;
    }
    .not-installed {
      font-size: 10px;
      color: var(--warning-color);
    }
  `,e([he({attribute:!1})],ji.prototype,"hass",void 0),e([he({type:String})],ji.prototype,"activeCardId",void 0),e([he({type:Boolean,reflect:!0})],ji.prototype,"narrow",void 0),e([ue()],ji.prototype,"_search",void 0),ji=e([ce("hcd-card-list")],ji);const Ni=e=>!("type"in e)||"expandable"===e.type||"grid"===e.type;let Li=class extends se{constructor(){super(...arguments),this.count=0}_dispatchRowMove(e,t){this.dispatchEvent(new CustomEvent("row-move",{detail:{from:e,to:t},bubbles:!1,composed:!1}))}_dispatchRowRemove(e){this.dispatchEvent(new CustomEvent("row-remove",{detail:{index:e},bubbles:!1,composed:!1}))}_onDragStart(e,t){e.target.closest(".drag-handle")?(e.dataTransfer&&(e.dataTransfer.effectAllowed="move"),this._dragIndex=t):e.preventDefault()}_onDragOver(e,t){e.preventDefault();const i=e.currentTarget.getBoundingClientRect(),o=i.top+i.height/2;this._hoverSide=e.clientY<o?"above":"below",this._hoverIndex=t,this.requestUpdate()}_onDrop(e,t){if(e.preventDefault(),void 0===this._dragIndex)return;const i=e.currentTarget.getBoundingClientRect(),o=i.top+i.height/2,r="above"===(e.clientY<o?"above":"below")?t:t+1,n=this._dragIndex;this._dragIndex=void 0,this._hoverIndex=void 0,this._hoverSide=void 0,this._dispatchRowMove(n,r)}_onDragEnd(){this._dragIndex=void 0,this._hoverIndex=void 0,this._hoverSide=void 0,this.requestUpdate()}_renderInsertLine(e){return this._hoverIndex!==e||void 0===this._dragIndex||this._dragIndex===e?H``:H`<div class="insert-line insert-line--${this._hoverSide}"></div>`}_renderRow(e){const t=0===e,i=e===this.count-1;return H`
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
    `}render(){return H`
      <div class="row-list">
        ${Array.from({length:this.count},(e,t)=>this._renderRow(t))}
      </div>
    `}};Li.styles=a`
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
  `,e([he({type:Number})],Li.prototype,"count",void 0),e([ue()],Li.prototype,"_dragIndex",void 0),e([ue()],Li.prototype,"_hoverIndex",void 0),e([ue()],Li.prototype,"_hoverSide",void 0),Li=e([ce("hcd-sortable-row-list")],Li);let Pi=class extends se{constructor(){super(...arguments),this.value=[]}_addRow(){const e={...this.node.itemDefaults??{}};this._emit([...this.value,e])}_onRowMove(e){const t=[...this.value],[i]=t.splice(e.detail.from,1);t.splice(e.detail.to,0,i),this._emit(t)}_onRowRemove(e){const t=this.value.filter((t,i)=>i!==e.detail.index);this._emit(t)}_onRowChanged(e,t){const i=this.value.map((i,o)=>o===t?{...i,...e.detail.value}:i);this._emit(i)}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.node.name]:e}},bubbles:!1,composed:!1}))}render(){const e=this.value;return H`
      <div class="sub-form-list">
        ${this.node.title?H`<div class="list-title">${this.node.title}</div>`:""}
        <hcd-sortable-row-list
          .count=${e.length}
          @row-move=${this._onRowMove}
          @row-remove=${this._onRowRemove}
        >
          ${e.map((e,t)=>H`
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
    `}};Pi.styles=a`
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
  `,e([he({attribute:!1})],Pi.prototype,"hass",void 0),e([he({attribute:!1})],Pi.prototype,"node",void 0),e([he({attribute:!1})],Pi.prototype,"value",void 0),Pi=e([ce("hcd-sub-form-list")],Pi);let Ri=class extends se{constructor(){super(...arguments),this._step="pick",this._draft={}}connectedCallback(){if(super.connectedCallback(),this.draft&&this.draft.type){const e=Te(this.draft.type);e&&(this._selectedSchema=e,this._draft={...this.draft},this._step="edit")}}_selectCard(e){this._selectedSchema=e,this._draft={...e.defaults},this._step="edit"}_backToPick(){void 0!==this.editIndex?this._cancel():(this._step="pick",this._selectedSchema=void 0,this._draft={})}_onDraftChanged(e){e.stopPropagation(),this._draft={...e.detail}}_save(){this.dispatchEvent(new CustomEvent("card-saved",{detail:{config:this._draft},bubbles:!1,composed:!1}))}_cancel(){this.dispatchEvent(new CustomEvent("drawer-closed",{bubbles:!1,composed:!1}))}render(){return"pick"===this._step?this._renderPickStep():this._renderEditStep()}_renderPickStep(){const e=Ie.filter(e=>e.installed(this.hass));return H`
      <div class="drawer-header">
        <ha-icon-button @click=${this._cancel}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
        <span class="header-title">Select card type</span>
      </div>
      <div class="pick-list">
        ${e.map(e=>H`
            <div class="pick-item" @click=${()=>this._selectCard(e)}>
              <ha-icon .icon=${e.icon}></ha-icon>
              <span>${e.label}</span>
            </div>
          `)}
      </div>
    `}_renderEditStep(){return H`
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
    `}};Ri.styles=a`
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
  `,e([he({attribute:!1})],Ri.prototype,"hass",void 0),e([he({attribute:!1})],Ri.prototype,"draft",void 0),e([he({type:Number})],Ri.prototype,"editIndex",void 0),e([ue()],Ri.prototype,"_step",void 0),e([ue()],Ri.prototype,"_draft",void 0),e([ue()],Ri.prototype,"_selectedSchema",void 0),Ri=e([ce("hcd-card-drawer")],Ri);let Di=class extends se{constructor(){super(...arguments),this.value=[],this._drawerOpen=!1}_rowSummary(e){const t=e.type??"unknown",i=e.entity??e.title??e.name??"";return i?`${t} · ${i}`:t}render(){const e=this.value;return H`
      <div class="cards-widget">
        ${this.node.title?H`<div class="widget-title">${this.node.title}</div>`:""}
        <hcd-sortable-row-list
          .count=${e.length}
          @row-move=${this._onRowMove}
          @row-remove=${this._onRowRemove}
        >
          ${e.map((e,t)=>H`
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

      ${this._drawerOpen?H`
            <hcd-card-drawer
              .hass=${this.hass}
              .draft=${this._drawerDraft}
              .editIndex=${this._drawerEditIndex}
              @card-saved=${this._onCardSaved}
              @drawer-closed=${this._closeDrawer}
            ></hcd-card-drawer>
          `:""}
    `}_openAdd(){this._drawerEditIndex=void 0,this._drawerDraft=void 0,this._drawerOpen=!0}_openEdit(e){this._drawerEditIndex=e,this._drawerDraft={...this.value[e]},this._drawerOpen=!0}_closeDrawer(){this._drawerOpen=!1,this._drawerDraft=void 0,this._drawerEditIndex=void 0}_onCardSaved(e){const t=e.detail.config;let i;i=void 0!==this._drawerEditIndex?this.value.map((e,i)=>i===this._drawerEditIndex?t:e):[...this.value,t],this._closeDrawer(),this._emit(i)}_onRowMove(e){const t=[...this.value],[i]=t.splice(e.detail.from,1);t.splice(e.detail.to,0,i),this._emit(t)}_onRowRemove(e){this._drawerEditIndex===e.detail.index&&this._closeDrawer(),this._emit(this.value.filter((t,i)=>i!==e.detail.index))}_emit(e){this.value=e,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.node.name]:e}},bubbles:!1,composed:!1}))}};Di.styles=a`
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
  `,e([he({attribute:!1})],Di.prototype,"hass",void 0),e([he({attribute:!1})],Di.prototype,"node",void 0),e([he({attribute:!1})],Di.prototype,"value",void 0),e([ue()],Di.prototype,"_drawerOpen",void 0),e([ue()],Di.prototype,"_drawerEditIndex",void 0),e([ue()],Di.prototype,"_drawerDraft",void 0),Di=e([ce("hcd-cards-list-widget")],Di);let Ui=class extends se{constructor(){super(...arguments),this.data={},this.narrow=!1}_handleValueChanged(e){this.data={...this.data,...e.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{...this.data,type:this.schema?.type},bubbles:!0,composed:!0}))}render(){if(!this.schema)return H`
        <div class="empty">
          <ha-icon icon="mdi:arrow-left"></ha-icon>
          <span>Select a card type from the list</span>
        </div>
      `;const e=this.schema.form(this.data);return H`
      <div class="header">
        <h2>${this.schema.label}</h2>
        <p>${this.schema.description}</p>
      </div>
      <div class="form-wrapper">
        ${function(e){const t=[];for(const i of e)if(Ni(i)){const e=t[t.length-1];"ha"===e?.kind?e.schema.push(i):t.push({kind:"ha",schema:[i]})}else t.push({kind:"custom",node:i});return t}(e).map(e=>"ha"===e.kind?H`<ha-form
                .hass=${this.hass}
                .data=${this.data}
                .schema=${e.schema}
                .computeLabel=${e=>e.label??e.name}
                @value-changed=${this._handleValueChanged}
              ></ha-form>`:"hcd-sub-form-list"===e.node.type?H`<hcd-sub-form-list
                  .hass=${this.hass}
                  .node=${e.node}
                  .value=${this.data[e.node.name]??[]}
                  @value-changed=${this._handleValueChanged}
                ></hcd-sub-form-list>`:H`<hcd-cards-list-widget
                  .hass=${this.hass}
                  .node=${e.node}
                  .value=${this.data[e.node.name]??[]}
                  @value-changed=${this._handleValueChanged}
                ></hcd-cards-list-widget>`)}
      </div>
    `}};var zi,Fi;Ui.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      min-width: 0;
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
  `,e([he({attribute:!1})],Ui.prototype,"hass",void 0),e([he({attribute:!1})],Ui.prototype,"schema",void 0),e([he({attribute:!1})],Ui.prototype,"data",void 0),e([he({type:Boolean,reflect:!0})],Ui.prototype,"narrow",void 0),Ui=e([ce("hcd-card-form")],Ui),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(zi||(zi={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Fi||(Fi={}));var qi=new Set(["call-service","divider","section","weblink","cast","select"]),Hi={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Yi=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return o("hui-error-card",{type:"error",error:e,config:t})},o=function(e,t){var o=window.document.createElement(e);try{if(!o.setConfig)return;o.setConfig(t)}catch(o){return console.error(e,o),i(o.message,t)}return o};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var r=e.type;if(r&&r.startsWith("custom:"))r=r.substr(7);else if(t)if(qi.has(r))r="hui-"+r+"-row";else{if(!e.entity)return i("Invalid config given.",e);var n=e.entity.split(".",1)[0];r="hui-"+(Hi[n]||"text")+"-entity-row"}else r="hui-"+r+"-card";if(customElements.get(r))return o(r,e);var a=i("Custom element doesn't exist: "+e.type+".",e);a.style.display="None";var s=setTimeout(function(){a.style.display=""},2e3);return customElements.whenDefined(e.type).then(function(){clearTimeout(s),function(e,t,i,o){o=o||{},i=null==i?{}:i;var r=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});r.detail=i,e.dispatchEvent(r)}(a,"ll-rebuild",{},a)}),a};let Bi=class extends se{constructor(){super(...arguments),this.narrow=!1,this._loading=!1,this._darkMode=!1,this._mobileView=!1}updated(e){(e.has("config")||e.has("hass"))&&(clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>this._renderPreview(),150))}async _ensureResourceLoaded(e){if(!document.querySelector(`script[src="${e}"]`))return new Promise((t,i)=>{const o=document.createElement("script");o.type="module",o.src=e,o.onload=()=>t(),o.onerror=()=>i(new Error(`Failed to load: ${e}`)),document.head.appendChild(o)})}async _renderPreview(){if(!this.config||!this.schema)return;const e=this.shadowRoot?.querySelector(".card-slot");if(e){if(this._error=void 0,this.schema.resourceUrl&&!this.schema.installed(this.hass)){this._loading=!0;try{await this._ensureResourceLoaded(this.schema.resourceUrl),await new Promise(e=>setTimeout(e,200))}catch{return this._error=`Could not load card resource. Install ${this.schema.label} via HACS first.`,void(this._loading=!1)}this._loading=!1}try{const t=Yi(this.config);t.hass=this.hass,e.replaceChildren(t)}catch(e){this._error=String(e)}}}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._debounceTimer)}render(){const e=this._mobileView?"mobile":"desktop",t=this._darkMode?"dark":"";return this.config?H`
      <div class="header">
        <span class="header-label">Preview · live</span>
        ${this._toolbar()}
      </div>
      <div class="preview-area ${t}">
        ${this._loading?H`<ha-circular-progress active></ha-circular-progress>`:""}
        ${this._error?H`<div class="error">${this._error}</div>`:""}
        <div class="card-slot ${e}"></div>
      </div>
    `:H`
        <div class="header">
          <span class="header-label">Preview</span>
          ${this._toolbar()}
        </div>
        <div class="preview-area ${t}">
          <div class="empty">
            <ha-icon icon="mdi:card-outline"></ha-icon>
            <span>Configure a card to see the preview</span>
          </div>
        </div>
      `}_toolbar(){return H`
      <div class="toolbar">
        <div class="toolbar-group">
          <button
            class="toolbar-btn ${this._darkMode?"":"active"}"
            title="Light theme"
            @click=${()=>{this._darkMode=!1}}
          >
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
            Light
          </button>
          <button
            class="toolbar-btn ${this._darkMode?"active":""}"
            title="Dark theme"
            @click=${()=>{this._darkMode=!0}}
          >
            <ha-icon icon="mdi:weather-night"></ha-icon>
            Dark
          </button>
        </div>
        <div class="toolbar-group viewport-toggle">
          <button
            class="toolbar-btn ${this._mobileView?"":"active"}"
            title="Desktop viewport"
            @click=${()=>{this._mobileView=!1}}
          >
            <ha-icon icon="mdi:monitor"></ha-icon>
            Desktop
          </button>
          <button
            class="toolbar-btn ${this._mobileView?"active":""}"
            title="Mobile viewport (375px)"
            @click=${()=>{this._mobileView=!0}}
          >
            <ha-icon icon="mdi:cellphone"></ha-icon>
            Mobile
          </button>
        </div>
      </div>
    `}};Bi.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      border-bottom: 1px solid var(--divider-color);
      flex-shrink: 0;
    }
    .header-label {
      padding: 12px 0;
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .toolbar {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .toolbar-group {
      display: flex;
      align-items: center;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
    }
    .toolbar-group + .toolbar-group {
      margin-left: 4px;
    }
    .toolbar-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      color: var(--secondary-text-color);
      white-space: nowrap;
      transition: background 0.15s, color 0.15s;
      -webkit-tap-highlight-color: transparent;
    }
    .toolbar-btn ha-icon {
      --mdc-icon-size: 14px;
    }
    :host([narrow]) .toolbar-btn {
      padding: 8px 12px;
      font-size: 13px;
      min-height: 40px;
    }
    :host([narrow]) .toolbar-btn ha-icon {
      --mdc-icon-size: 18px;
    }
    :host([narrow]) .viewport-toggle {
      display: none;
    }
    .toolbar-btn:hover {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }
    .toolbar-btn.active {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
    }
    .preview-area {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      background: var(--secondary-background-color);
      transition: background 0.2s;
    }
    .preview-area.dark {
      --primary-background-color: #111827;
      --secondary-background-color: #1f2937;
      --card-background-color: #1f2937;
      --ha-card-background: #1f2937;
      --primary-text-color: #f9fafb;
      --secondary-text-color: #9ca3af;
      --text-primary-color: #f9fafb;
      --primary-color: #6366f1;
      --accent-color: #818cf8;
      --divider-color: rgba(255, 255, 255, 0.12);
      --disabled-text-color: #6b7280;
      --error-color: #ef4444;
      --warning-color: #f59e0b;
      --success-color: #22c55e;
      --info-color: #3b82f6;
      --state-icon-color: #9ca3af;
      --paper-item-icon-color: #9ca3af;
      background: #111827;
    }
    .card-slot {
      margin: 0 auto;
      transition: max-width 0.2s ease;
    }
    .card-slot.desktop { max-width: 100%; }
    .card-slot.mobile  { max-width: 375px; }
    .mobile-frame {
      display: none;
    }
    .card-slot.mobile .mobile-frame {
      display: block;
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
  `,e([he({attribute:!1})],Bi.prototype,"hass",void 0),e([he({attribute:!1})],Bi.prototype,"schema",void 0),e([he({attribute:!1})],Bi.prototype,"config",void 0),e([he({type:Boolean,reflect:!0})],Bi.prototype,"narrow",void 0),e([ue()],Bi.prototype,"_error",void 0),e([ue()],Bi.prototype,"_loading",void 0),e([ue()],Bi.prototype,"_darkMode",void 0),e([ue()],Bi.prototype,"_mobileView",void 0),Bi=e([ce("hcd-card-preview")],Bi);let Vi=class extends se{constructor(){super(...arguments),this.yaml="",this.parseError="",this.narrow=!1,this._copied=!1,this._localText="",this._userEditing=!1,this._debounceTimer=null,this._editSuppressTimer=null}updated(e){e.has("yaml")&&!this._userEditing&&(this._localText=this.yaml)}async _copy(){try{await navigator.clipboard.writeText(this._localText),this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}catch{const e=this.shadowRoot?.querySelector("textarea");e&&(e.select(),document.execCommand("copy"))}}_onFocus(){this._userEditing=!0,this._editSuppressTimer&&(clearTimeout(this._editSuppressTimer),this._editSuppressTimer=null)}_onBlur(){this._editSuppressTimer&&clearTimeout(this._editSuppressTimer),this._editSuppressTimer=setTimeout(()=>{this._userEditing=!1,this.parseError||(this._localText=this.yaml)},500)}_onInput(e){this._localText=e.target.value,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("yaml-edited",{detail:this._localText,bubbles:!0,composed:!0}))},300)}render(){const e=this._userEditing?this._localText:this.yaml||"";return H`
      <div class="toolbar">
        <span class="label">YAML</span>
        <mwc-button
          ?disabled=${!e}
          @click=${this._copy}
          ?dense=${!this.narrow}
        >
          <ha-icon icon=${this._copied?"mdi:check":"mdi:content-copy"}></ha-icon>
          ${this._copied?"Copied!":"Copy YAML"}
        </mwc-button>
      </div>
      <div class="textarea-wrap">
        <textarea
          .value=${e||"# Select or import a card to get started"}
          spellcheck="false"
          @focus=${this._onFocus}
          @blur=${this._onBlur}
          @input=${this._onInput}
        ></textarea>
        ${this.parseError?H`<div class="parse-error">${this.parseError}</div>`:""}
      </div>
    `}};Vi.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      border-top: 1px solid var(--divider-color);
      height: 220px;
    }
    :host([narrow]) {
      height: 100%;
      border-top: none;
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
    .textarea-wrap {
      flex: 1;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
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
    /* Prevent iOS Safari from zooming when focusing the textarea */
    :host([narrow]) textarea {
      font-size: 16px;
    }
    .parse-error {
      padding: 4px 16px;
      background: var(--error-color, #b00020);
      color: white;
      font-size: 11px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
    }
    mwc-button ha-icon { --mdc-icon-size: 16px; }
  `,e([he({type:String})],Vi.prototype,"yaml",void 0),e([he({type:String})],Vi.prototype,"parseError",void 0),e([he({type:Boolean,reflect:!0})],Vi.prototype,"narrow",void 0),e([ue()],Vi.prototype,"_copied",void 0),e([ue()],Vi.prototype,"_localText",void 0),e([ue()],Vi.prototype,"_userEditing",void 0),Vi=e([ce("hcd-yaml-output")],Vi);let Wi=class extends se{constructor(){super(...arguments),this._open=!1,this._text="",this._error=""}open(){this._text="",this._error="",this._open=!0}_close(){this._open=!1}async _pasteFromClipboard(){try{this._text=await navigator.clipboard.readText(),this._error=""}catch{this._error="Clipboard access denied. Paste manually below."}}_onFileLoad(e){const t=e.target,i=t.files?.[0];if(!i)return;const o=new FileReader;o.onload=()=>{this._text=o.result??"",this._error=""},o.readAsText(i)}_onImport(){this._text.trim()?this.dispatchEvent(new CustomEvent("yaml-imported",{detail:this._text,bubbles:!0,composed:!0})):this._error="Nothing to import — paste or load a file first."}setError(e){this._error=e}closeDialog(){this._close()}render(){return this._open?H`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog">
          <div class="dialog-header">Import YAML</div>
          <div class="dialog-content">
            <div class="actions-row">
              <mwc-button outlined @click=${this._pasteFromClipboard}>
                Paste from clipboard
              </mwc-button>
              <label class="file-label">
                <mwc-button outlined>Load file</mwc-button>
                <input
                  type="file"
                  accept=".yaml,.yml,.txt,.json"
                  @change=${this._onFileLoad}
                />
              </label>
            </div>
            <textarea
              .value=${this._text}
              placeholder="Paste card YAML here…"
              spellcheck="false"
              @input=${e=>{this._text=e.target.value,this._error=""}}
            ></textarea>
            ${this._error?H`<div class="error">${this._error}</div>`:""}
          </div>
          <div class="dialog-actions">
            <mwc-button @click=${this._close}>Cancel</mwc-button>
            <mwc-button unelevated @click=${this._onImport}>Import</mwc-button>
          </div>
        </div>
      </div>
    `:H``}};Wi.styles=a`
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
    }
    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      box-shadow: var(--shadow-elevation-24dp_-_box-shadow, 0 11px 15px rgba(0,0,0,.2));
      width: 560px;
      max-width: 95vw;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    .dialog-header {
      padding: 20px 24px 12px;
      font-size: 20px;
      font-weight: 400;
      color: var(--primary-text-color);
    }
    .dialog-content {
      padding: 0 24px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .actions-row {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }
    label.file-label {
      cursor: pointer;
    }
    textarea {
      width: 100%;
      height: clamp(160px, 40vh, 240px);
      resize: vertical;
      font-family: "Roboto Mono", "Courier New", monospace;
      font-size: 12px;
      padding: 10px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color);
      line-height: 1.5;
      box-sizing: border-box;
    }
    .error {
      color: var(--error-color, #b00020);
      font-size: 13px;
    }
    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 8px 16px 16px;
      border-top: 1px solid var(--divider-color);
    }
    input[type="file"] {
      display: none;
    }
  `,e([ue()],Wi.prototype,"_open",void 0),e([ue()],Wi.prototype,"_text",void 0),e([ue()],Wi.prototype,"_error",void 0),Wi=e([ce("hcd-import-dialog")],Wi);let Gi=class extends se{constructor(){super(...arguments),this.narrow=!1,this.route=null,this._config={},this._yaml="",this._yamlParseError="",this._isNarrow=!1,this._activeTab="cards",this._stockTypes=["vertical-stack","horizontal-stack","gauge","markdown","glance","entities","grid"],this._stockCardsRegistered=!1,this._mqHandler=e=>{this._isNarrow=e.matches}}connectedCallback(){super.connectedCallback(),this._mq=window.matchMedia("(max-width: 900px)"),this._isNarrow=this._mq.matches,this._mq.addEventListener("change",this._mqHandler)}disconnectedCallback(){super.disconnectedCallback(),this._mq?.removeEventListener("change",this._mqHandler)}updated(e){if(super.updated(e),!this._stockCardsRegistered&&e.has("hass")&&this.hass){this._stockCardsRegistered=!0;for(const e of this._stockTypes)if(!customElements.get(`hui-${e}-card`)){const t=document.createElement("hui-card");t.style.display="none",t.config={type:e},t.hass=this.hass,document.body.appendChild(t)}setTimeout(()=>{const e=this.shadowRoot?.querySelector("hcd-card-list");e?.requestUpdate()},500)}}_onCardSelected(e){const t=e.detail,i=function(e){return Ie.find(t=>t.id===e)}(t);i&&(this._activeCardId=t,this._activeSchema=i,this._config={...i.defaults},this._yamlParseError="",this._updateYaml(),this._isNarrow&&(this._activeTab="form"))}_onConfigChanged(e){this._config=e.detail,this._updateYaml()}_updateYaml(){this._activeSchema?this._yaml=Mi(this._config,this._activeSchema.defaults,this._activeSchema.yamlOrder):this._yaml=""}_loadYaml(e){const t=function(e){let t;try{t=ki(e)}catch(e){return{ok:!1,error:`YAML parse error: ${e.message}`}}if("object"!=typeof t||null===t||Array.isArray(t))return{ok:!1,error:"Expected a YAML mapping at the top level."};const i=t,o=i.type;if("string"!=typeof o||!o)return{ok:!1,error:"Missing required field: type"};const r=Te(o);if(!r){const e=Ie.map(e=>e.type).join(", ");return{ok:!1,error:`Unsupported card type "${o}". Supported: ${e}`}}return{ok:!0,type:o,config:{...r.defaults,...i}}}(e);if(!t.ok)return t;const i=Ie.find(e=>e.type===t.type);return i?(this._activeCardId=i.id,this._activeSchema=i,this._config=t.config,this._yamlParseError="",this._updateYaml(),this._isNarrow&&(this._activeTab="form"),{ok:!0}):{ok:!1,error:`No schema found for type "${t.type}"`}}_onYamlEdited(e){const t=this._loadYaml(e.detail);t.ok||(this._yamlParseError=t.error??"Parse error")}_onYamlImported(e){const t=this._loadYaml(e.detail),i=this.shadowRoot?.querySelector("hcd-import-dialog");t.ok?i?.closeDialog():i?.setError(t.error??"Import failed")}_openImport(){const e=this.shadowRoot?.querySelector("hcd-import-dialog");e?.open()}_topbar(e=!1){return H`
      <div class="topbar">
        <ha-icon icon="mdi:palette"></ha-icon>
        <h1>Card Designer</h1>
        <mwc-button outlined @click=${this._openImport}>
          ${e?"Import":"Import YAML"}
        </mwc-button>
      </div>
    `}_sharedPanes(){return H`
      <hcd-card-list
        .hass=${this.hass}
        .activeCardId=${this._activeCardId}
        .narrow=${this._isNarrow}
        @card-selected=${this._onCardSelected}
      ></hcd-card-list>
      <hcd-card-form
        .hass=${this.hass}
        .schema=${this._activeSchema}
        .data=${this._config}
        .narrow=${this._isNarrow}
        @config-changed=${this._onConfigChanged}
      ></hcd-card-form>
      <hcd-card-preview
        .hass=${this.hass}
        .schema=${this._activeSchema}
        .config=${this._activeCardId?this._config:void 0}
        .narrow=${this._isNarrow}
      ></hcd-card-preview>
      <hcd-yaml-output
        .yaml=${this._yaml}
        .parseError=${this._yamlParseError}
        .narrow=${this._isNarrow}
        @yaml-edited=${this._onYamlEdited}
      ></hcd-yaml-output>
    `}_renderDesktop(){return H`
      ${this._topbar()}
      <div class="main">
        <div class="sidebar">
          <hcd-card-list
            .hass=${this.hass}
            .activeCardId=${this._activeCardId}
            .narrow=${!1}
            @card-selected=${this._onCardSelected}
          ></hcd-card-list>
        </div>
        <div class="center">
          <div class="editor-row">
            <hcd-card-form
              .hass=${this.hass}
              .schema=${this._activeSchema}
              .data=${this._config}
              .narrow=${!1}
              @config-changed=${this._onConfigChanged}
            ></hcd-card-form>
            <hcd-card-preview
              .hass=${this.hass}
              .schema=${this._activeSchema}
              .config=${this._activeCardId?this._config:void 0}
              .narrow=${!1}
            ></hcd-card-preview>
          </div>
          <hcd-yaml-output
            .yaml=${this._yaml}
            .parseError=${this._yamlParseError}
            .narrow=${!1}
            @yaml-edited=${this._onYamlEdited}
          ></hcd-yaml-output>
        </div>
      </div>
      <hcd-import-dialog @yaml-imported=${this._onYamlImported}></hcd-import-dialog>
    `}_renderMobile(){return H`
      ${this._topbar(!0)}
      <div class="mobile-content">
        <div class="pane ${"cards"===this._activeTab?"active":""}">
          <hcd-card-list
            .hass=${this.hass}
            .activeCardId=${this._activeCardId}
            .narrow=${!0}
            @card-selected=${this._onCardSelected}
          ></hcd-card-list>
        </div>
        <div class="pane ${"form"===this._activeTab?"active":""}">
          <hcd-card-form
            .hass=${this.hass}
            .schema=${this._activeSchema}
            .data=${this._config}
            .narrow=${!0}
            @config-changed=${this._onConfigChanged}
          ></hcd-card-form>
        </div>
        <div class="pane ${"preview"===this._activeTab?"active":""}">
          <hcd-card-preview
            .hass=${this.hass}
            .schema=${this._activeSchema}
            .config=${this._activeCardId?this._config:void 0}
            .narrow=${!0}
          ></hcd-card-preview>
        </div>
        <div class="pane ${"yaml"===this._activeTab?"active":""}">
          <hcd-yaml-output
            .yaml=${this._yaml}
            .parseError=${this._yamlParseError}
            .narrow=${!0}
            @yaml-edited=${this._onYamlEdited}
          ></hcd-yaml-output>
        </div>
      </div>
      <nav class="tab-bar">
        ${[{id:"cards",icon:"mdi:view-list",label:"Cards"},{id:"form",icon:"mdi:pencil",label:"Form"},{id:"preview",icon:"mdi:eye",label:"Preview"},{id:"yaml",icon:"mdi:code-braces",label:"YAML"}].map(e=>H`
          <button
            class="tab-btn ${this._activeTab===e.id?"active":""}"
            @click=${()=>{this._activeTab=e.id}}
          >
            <ha-icon .icon=${e.icon}></ha-icon>
            <span>${e.label}</span>
          </button>
        `)}
      </nav>
      <hcd-import-dialog @yaml-imported=${this._onYamlImported}></hcd-import-dialog>
    `}render(){return this._isNarrow?this._renderMobile():this._renderDesktop()}};Gi.styles=a`
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
      padding-top: max(12px, calc(12px + env(safe-area-inset-top)));
      background: var(--app-header-background-color, var(--primary-color));
      color: var(--app-header-text-color, white);
      box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
      flex-shrink: 0;
    }
    .topbar ha-icon { --mdc-icon-size: 24px; }
    .topbar h1 { margin: 0; font-size: 20px; font-weight: 400; flex: 1; }
    .topbar mwc-button {
      --mdc-theme-primary: var(--app-header-text-color, white);
      --mdc-button-outline-color: var(--app-header-text-color, white);
    }

    /* ── Desktop layout ────────────────────────────────── */
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
      min-width: 0;
    }
    hcd-card-preview {
      flex: 1;
      min-width: 0;
    }
    hcd-yaml-output {
      flex-shrink: 0;
    }

    /* ── Mobile layout ─────────────────────────────────── */
    .mobile-content {
      flex: 1;
      position: relative;
      overflow: hidden;
    }
    .pane {
      display: none;
      position: absolute;
      inset: 0;
      flex-direction: column;
      overflow: hidden;
    }
    .pane.active {
      display: flex;
    }
    .pane > * {
      flex: 1;
      min-height: 0;
      width: 100%;
    }
    .tab-bar {
      display: flex;
      flex-shrink: 0;
      background: var(--card-background-color, white);
      border-top: 1px solid var(--divider-color);
      padding-bottom: env(safe-area-inset-bottom);
    }
    .tab-btn {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding: 8px 4px;
      min-height: 56px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--secondary-text-color);
      font-size: 11px;
      font-weight: 500;
      transition: color 0.15s;
      -webkit-tap-highlight-color: transparent;
    }
    .tab-btn ha-icon {
      --mdc-icon-size: 22px;
    }
    .tab-btn.active {
      color: var(--primary-color);
    }
    .tab-btn.active ha-icon {
      --mdc-icon-size: 22px;
    }
  `,e([he({attribute:!1})],Gi.prototype,"hass",void 0),e([he({attribute:!1})],Gi.prototype,"narrow",void 0),e([he({attribute:!1})],Gi.prototype,"route",void 0),e([ue()],Gi.prototype,"_activeCardId",void 0),e([ue()],Gi.prototype,"_activeSchema",void 0),e([ue()],Gi.prototype,"_config",void 0),e([ue()],Gi.prototype,"_yaml",void 0),e([ue()],Gi.prototype,"_yamlParseError",void 0),e([ue()],Gi.prototype,"_isNarrow",void 0),e([ue()],Gi.prototype,"_activeTab",void 0),Gi=e([ce("ha-card-designer-panel")],Gi);
