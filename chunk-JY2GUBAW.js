import{a as N,b as he,c as pe,d,g as me,n as ye,o as ge,p as V,q as ve}from"./chunk-GR2PXCGU.js";import{$ as h,$b as de,Aa as te,Ba as ne,Ca as re,Da as oe,Ea as se,Fa as y,Ia as A,La as ie,Na as b,Oa as ae,Pa as T,Qa as x,Ta as ce,Va as F,Vb as g,Wb as le,Xa as ue,Xb as I,Yb as O,Z as H,Zb as U,aa as q,da as m,ea as c,ec as fe,ga as w,ia as J,ua as S,va as X,wa as v,xa as E,ya as Q,za as ee}from"./chunk-X5MK5QQ4.js";import{a as j,b as W}from"./chunk-G5KKTNWD.js";var K=class extends pe{constructor(){super(...arguments),this.supportsDOMEvents=!0}},R=class extends K{static makeCurrent(){he(new R)}onAndCancel(e,o,t){return e.addEventListener(o,t),()=>{e.removeEventListener(o,t)}}dispatchEvent(e,o){e.dispatchEvent(o)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,o){return o=o||this.getDefaultDocument(),o.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,o){return o==="window"?window:o==="document"?e:o==="body"?e.body:null}getBaseHref(e){let o=Ie();return o==null?null:Oe(o)}resetBaseElement(){M=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return me(document.cookie,e)}},M=null;function Ie(){return M=M||document.querySelector("base"),M?M.getAttribute("href"):null}var P;function Oe(s){P=P||document.createElement("a"),P.setAttribute("href",s);let e=P.pathname;return e.charAt(0)==="/"?e:`/${e}`}var z=class{addToWindow(e){m.getAngularTestability=(t,n=!0)=>{let r=e.findTestabilityInTree(t,n);if(r==null)throw new Error("Could not find testability for element.");return r},m.getAllAngularTestabilities=()=>e.getAllTestabilities(),m.getAllAngularRootElements=()=>e.getAllRootElements();let o=t=>{let n=m.getAllAngularTestabilities(),r=n.length,i=!1,a=function(u){i=i||u,r--,r==0&&t(i)};n.forEach(function(u){u.whenStable(a)})};m.frameworkStabilizers||(m.frameworkStabilizers=[]),m.frameworkStabilizers.push(o)}findTestabilityInTree(e,o,t){if(o==null)return null;let n=e.getTestability(o);return n??(t?N().isShadowRoot(o)?this.findTestabilityInTree(e,o.host,!0):this.findTestabilityInTree(e,o.parentElement,!0):null)}},Ne=(()=>{let e=class{build(){return new XMLHttpRequest}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275prov=h({token:e,factory:e.\u0275fac})})(),s})(),Z=new A("EventManagerPlugins"),Te=(()=>{let e=class{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r){return this._findPluginFor(n).addEventListener(t,n,r)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;let r=this._plugins;for(let i=0;i<r.length;i++){let a=r[i];if(a.supports(t))return this._eventNameToPlugin.set(t,a),a}throw new Error(`No event manager plugin found for event ${t}`)}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(Z),c(g))}})(),(()=>{e.\u0275prov=h({token:e,factory:e.\u0275fac})})(),s})(),L=class{constructor(e){this._doc=e}},B="ng-app-id",Me=(()=>{let e=class{constructor(t,n,r,i={}){this.doc=t,this.appId=n,this.nonce=r,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=V(i),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(r=>r.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${B}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(r=>{r.textContent!=null&&n.set(r.textContent,r)}),n}return null}changeUsageCount(t,n){let r=this.styleRef;if(r.has(t)){let i=r.get(t);return i.usage+=n,i.usage}return r.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let r=this.styleNodesInDOM,i=r?.get(n);if(i?.parentNode===t)return r.delete(n),i.removeAttribute(B),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=n,this.platformIsServer&&a.setAttribute(B,this.appId),a}}addStyleToHost(t,n){let r=this.getStyleElement(t,n);t.appendChild(r);let i=this.styleRef,a=i.get(n)?.elements;a?a.push(r):i.set(n,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(d),c(b),c(x,8),c(T))}})(),(()=>{e.\u0275prov=h({token:e,factory:e.\u0275fac})})(),s})(),$={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Y=/%COMP%/g,Re="%COMP%",Pe=`_nghost-${Re}`,Le=`_ngcontent-${Re}`,ke=!1,_e=new A("RemoveStylesOnCompDestory",{providedIn:"root",factory:()=>ke});function je(s){return Le.replace(Y,s)}function He(s){return Pe.replace(Y,s)}function De(s,e){return e.map(o=>o.replace(Y,s))}var Ee=(()=>{let e=class{constructor(t,n,r,i,a,u,l,f=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestory=i,this.doc=a,this.platformId=u,this.ngZone=l,this.nonce=f,this.rendererByCompId=new Map,this.platformIsServer=V(u),this.defaultRenderer=new D(t,a,l,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===w.ShadowDom&&(n=W(j({},n),{encapsulation:w.Emulated}));let r=this.getOrCreateRenderer(t,n);return r instanceof k?r.applyToHost(t):r instanceof C&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,i=r.get(n.id);if(!i){let a=this.doc,u=this.ngZone,l=this.eventManager,f=this.sharedStylesHost,p=this.removeStylesOnCompDestory,_=this.platformIsServer;switch(n.encapsulation){case w.Emulated:i=new k(l,f,n,this.appId,p,a,u,_);break;case w.ShadowDom:return new G(l,f,t,n,a,u,this.nonce,_);default:i=new C(l,f,n,p,a,u,_);break}i.onDestroy=()=>r.delete(n.id),r.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(Te),c(Me),c(b),c(_e),c(d),c(T),c(g),c(x))}})(),(()=>{e.\u0275prov=h({token:e,factory:e.\u0275fac})})(),s})(),D=class{constructor(e,o,t,n){this.eventManager=e,this.doc=o,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,o){return o?this.doc.createElementNS($[o]||o,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,o){(we(e)?e.content:e).appendChild(o)}insertBefore(e,o,t){e&&(we(e)?e.content:e).insertBefore(o,t)}removeChild(e,o){e&&e.removeChild(o)}selectRootElement(e,o){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new Error(`The selector "${e}" did not match any elements`);return o||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,o,t,n){if(n){o=n+":"+o;let r=$[n];r?e.setAttributeNS(r,o,t):e.setAttribute(o,t)}else e.setAttribute(o,t)}removeAttribute(e,o,t){if(t){let n=$[t];n?e.removeAttributeNS(n,o):e.removeAttribute(`${t}:${o}`)}else e.removeAttribute(o)}addClass(e,o){e.classList.add(o)}removeClass(e,o){e.classList.remove(o)}setStyle(e,o,t,n){n&(S.DashCase|S.Important)?e.style.setProperty(o,t,n&S.Important?"important":""):e.style[o]=t}removeStyle(e,o,t){t&S.DashCase?e.style.removeProperty(o):e.style[o]=""}setProperty(e,o,t){e[o]=t}setValue(e,o){e.nodeValue=o}listen(e,o,t){if(typeof e=="string"&&(e=N().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${o}`);return this.eventManager.addEventListener(e,o,this.decoratePreventDefault(t))}decoratePreventDefault(e){return o=>{if(o==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(o)):e(o))===!1&&(o.preventDefault(),o.returnValue=!1)}}};function we(s){return s.tagName==="TEMPLATE"&&s.content!==void 0}var G=class extends D{constructor(e,o,t,n,r,i,a,u){super(e,r,i,u),this.sharedStylesHost=o,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=De(n.id,n.styles);for(let f of l){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,o){return super.appendChild(this.nodeOrShadowRoot(e),o)}insertBefore(e,o,t){return super.insertBefore(this.nodeOrShadowRoot(e),o,t)}removeChild(e,o){return super.removeChild(this.nodeOrShadowRoot(e),o)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},C=class extends D{constructor(e,o,t,n,r,i,a,u){super(e,r,i,a),this.sharedStylesHost=o,this.removeStylesOnCompDestory=n,this.rendererUsageCount=0,this.styles=u?De(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles),this.rendererUsageCount++}destroy(){this.removeStylesOnCompDestory&&(this.sharedStylesHost.removeStyles(this.styles),this.rendererUsageCount--,this.rendererUsageCount===0&&this.onDestroy?.())}},k=class extends C{constructor(e,o,t,n,r,i,a,u){let l=n+"-"+t.id;super(e,o,t,r,i,a,u,l),this.contentAttr=je(l),this.hostAttr=He(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,o){let t=super.createElement(e,o);return super.setAttribute(t,this.contentAttr,""),t}},xe=(()=>{let e=class extends L{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r){return t.addEventListener(n,r,!1),()=>this.removeEventListener(t,n,r)}removeEventListener(t,n,r){return t.removeEventListener(n,r)}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(d))}})(),(()=>{e.\u0275prov=h({token:e,factory:e.\u0275fac})})(),s})(),Se=["alt","control","meta","shift"],Fe={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ue={alt:s=>s.altKey,control:s=>s.ctrlKey,meta:s=>s.metaKey,shift:s=>s.shiftKey},Ve=(()=>{let e=class extends L{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,r){let i=e.parseEventName(n),a=e.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>N().onAndCancel(t,i.domEventName,a))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let i=e._normalizeKey(n.pop()),a="",u=n.indexOf("code");if(u>-1&&(n.splice(u,1),a="code."),Se.forEach(f=>{let p=n.indexOf(f);p>-1&&(n.splice(p,1),a+=f+".")}),a+=i,n.length!=0||i.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(t,n){let r=Fe[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(r=t.code,i="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Se.forEach(a=>{if(a!==r){let u=Ue[a];u(t)&&(i+=a+".")}}),i+=r,i===n)}static eventCallback(t,n,r){return i=>{e.matchEventFullKeyCode(i,t)&&r.runGuarded(()=>n(i))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(d))}})(),(()=>{e.\u0275prov=h({token:e,factory:e.\u0275fac})})(),s})();function Et(s,e){return de(j({rootComponent:s},Be(e)))}function Be(s){return{appProviders:[...Ce,...s?.providers??[]],platformProviders:Ze}}function $e(){R.makeCurrent()}function Ke(){return new F}function ze(){return X(document),document}var Ze=[{provide:T,useValue:ge},{provide:ae,useValue:$e,multi:!0},{provide:d,useFactory:ze,deps:[]}];var Ge=new A(""),Ye=[{provide:I,useClass:z,deps:[]},{provide:le,useClass:O,deps:[g,U,I]},{provide:O,useClass:O,deps:[g,U,I]}],Ce=[{provide:ie,useValue:"root"},{provide:F,useFactory:Ke,deps:[]},{provide:Z,useClass:xe,multi:!0,deps:[d,g,T]},{provide:Z,useClass:Ve,multi:!0,deps:[d]},Ee,Me,Te,{provide:ce,useExisting:Ee},{provide:ve,useClass:Ne,deps:[]},[]],wt=(()=>{let e=class{constructor(t){}static withServerTransition(t){return{ngModule:e,providers:[{provide:b,useValue:t.appId}]}}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(Ge,12))}})(),(()=>{e.\u0275mod=J({type:e})})(),(()=>{e.\u0275inj=q({providers:[...Ce,...Ye],imports:[ye,fe]})})(),s})();function We(){return new qe(c(d))}var qe=(()=>{let e=class{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(d))}})(),(()=>{e.\u0275prov=h({token:e,factory:function(n){let r=null;return n?r=new n:r=We(),r},providedIn:"root"})})(),s})();var Je=(()=>{let e=class{},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275prov=h({token:e,factory:function(n){let r=null;return n?r=new(n||e):r=c(Ae),r},providedIn:"root"})})(),s})();function Xe(s){return new Ae(s.get(d))}var Ae=(()=>{let e=class extends Je{constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case y.NONE:return n;case y.HTML:return E(n,"HTML")?v(n):se(this._doc,String(n)).toString();case y.STYLE:return E(n,"Style")?v(n):n;case y.SCRIPT:if(E(n,"Script"))return v(n);throw new Error("unsafe value used in a script context");case y.URL:return E(n,"URL")?v(n):oe(String(n));case y.RESOURCE_URL:if(E(n,"ResourceURL"))return v(n);throw new Error(`unsafe value used in a resource URL context (see ${H})`);default:throw new Error(`Unexpected SecurityContext ${t} (see ${H})`)}}bypassSecurityTrustHtml(t){return Q(t)}bypassSecurityTrustStyle(t){return ee(t)}bypassSecurityTrustScript(t){return te(t)}bypassSecurityTrustUrl(t){return ne(t)}bypassSecurityTrustResourceUrl(t){return re(t)}},s=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(d))}})(),(()=>{e.\u0275prov=h({token:e,factory:function(n){let r=null;return n?r=new n:r=Xe(c(ue)),r},providedIn:"root"})})(),s})();export{Et as a,wt as b,qe as c,Je as d};