import{a as Y}from"./chunk-RPS3TBGS.js";import{a as q,b as B,c as G,d as J}from"./chunk-GLGQNGFM.js";import"./chunk-XZCHICF6.js";import"./chunk-GR2PXCGU.js";import{$ as y,D as C,E as x,Eb as A,F as L,Lb as _,M as k,Mb as H,T as w,W as s,Wa as f,Ya as a,ab as S,bb as P,cb as $,cc as z,db as p,ea as D,eb as m,gb as E,h as g,ha as O,hb as F,i as d,ja as I,jb as R,l as v,mb as T,o as c,pa as M,qa as j,sb as l,tb as V,x as b}from"./chunk-X5MK5QQ4.js";import{h as u}from"./chunk-G5KKTNWD.js";var N=(()=>{let i=class{set seLet(e){this.assign(e)}set seLetObserve(e){this.assign(e)}set seLetOn(e){this.assign(e)}assign(e){this.sub&&this.sub.unsubscribe(),v(e)?this.sub=e.pipe(s(()=>this.cdr.markForCheck())).subscribe(t=>{this.context.$implicit=t,this.context.seLet=t}):(this.context.$implicit=e,this.context.seLet=e)}constructor(e,t,o){this.templateRef=e,this.viewContainer=t,this.cdr=o,this.context={$implicit:void 0,seLet:void 0},this.assign=this.assign.bind(this)}ngOnInit(){this.viewContainer.createEmbeddedView(this.templateRef,this.context)}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}},n=i;return(()=>{i.\u0275fac=function(t){return new(t||i)(a(_),a(H),a(z))}})(),(()=>{i.\u0275dir=I({type:i,selectors:[["","seLet",""]],inputs:{seLet:"seLet",seLetObserve:"seLetObserve",seLetOn:"seLetOn"},standalone:!0})})(),n})();var Q=(()=>{let i=class{constructor(e){this.http=e,this.base="https://pokeapi.co/api/v2"}load(e){return u(this,null,function*(){if(yield q(),!G(e)){let t=yield fetch(e).then(o=>o.json()).catch(o=>{});yield B(e,t)}return J(e)})}init(){console.log("ps init"),this.load(this.base).then(e=>{console.log(e),d(Object.entries(e)).pipe(s(t=>console.log("url",t)),L(([t,o])=>this.getAllPagedData(o).pipe(C((r,h)=>r.concat(h.results),[]),s(r=>console.log("d",r)),c(r=>({name:t,baseUrl:o,data:r})))),x(),s(t=>console.log(t))).subscribe()})}getAllPagedData(e){return d(this.load(`${e}`)).pipe(k(t=>t.next?this.load(t.next):g))}},n=i;return(()=>{i.\u0275fac=function(t){return new(t||i)(D(Y))}})(),(()=>{i.\u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})})(),n})();function U(n,i){if(n&1&&(E(0),p(1,"h1"),l(2),m(),F()),n&2){let W=i.$implicit;f(2),V(W)}}var le=(()=>{let i=class{constructor(e){this.pa=e,this.fakePost$=b(1500).pipe(s(()=>console.log("done")),c(()=>"hello world"),w({refCount:!0,bufferSize:1}))}ngOnInit(){console.log("pokeMain")}},n=i;return(()=>{i.\u0275fac=function(t){return new(t||i)(a(Q))}})(),(()=>{i.\u0275cmp=O({type:i,selectors:[["app-pokemain"]],standalone:!0,features:[A],decls:6,vars:1,consts:[[3,"click"],["save",""],[4,"seLet","seLetObserve"]],template:function(t,o){if(t&1){let r=R();p(0,"p"),l(1,"pokemain works!"),m(),p(2,"button",0,1),T("click",function(){M(r);let X=P(3);return j(X.goSave=!0)}),l(4,"Save"),m(),S(5,U,3,1,"ng-container",2)}t&2&&(f(5),$("seLetObserve",o.fakePost$))},dependencies:[N],encapsulation:2})})(),n})();export{le as PokeMainComponent};