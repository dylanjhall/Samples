import{a as q}from"./chunk-3TBQPOQT.js";import{d as F}from"./chunk-BY22MQZX.js";import"./chunk-JY2GUBAW.js";import"./chunk-RPS3TBGS.js";import{j as W,k as B}from"./chunk-GR2PXCGU.js";import{B as C,Eb as T,Gb as A,Hb as D,Kb as H,Nb as M,Ob as O,Qb as R,R as f,Sa as E,V as $,W as u,Wa as _,Ya as k,ab as I,cb as j,db as c,eb as a,f as S,gb as L,ha as w,hb as Q,jb as V,mb as b,nb as v,o as l,p as y,pa as d,qa as h,sb as s,tb as P,w as x}from"./chunk-X5MK5QQ4.js";import{a as m,b as p}from"./chunk-G5KKTNWD.js";var z=["b"];function G(r,n){if(r&1){let t=V();L(0),c(1,"button",1,2),b("click",function(){d(t);let i=v();return h(i.updateCounterWith(-1))}),s(3,"-1"),a(),c(4,"span"),s(5),a(),c(6,"button",1,2),b("click",function(){d(t);let i=v();return h(i.updateCounterWith(1))}),s(8,"+1"),a(),Q()}if(r&2){let t=n.ngIf;_(5),P(t.count)}}var o=class{constructor(n){this.route=n,this.localState$=new S({count:0}),this.id$=this.route.params.pipe(f("id"),l(t=>+t)),this.clicks$=this.localState$.pipe(f("buttons"),C(t=>t instanceof H),l(t=>t.toArray().map(e=>e.nativeElement)),u(t=>t.forEach(e=>console.log(e))),$(t=>x(t,"click")),u(t=>console.log({cl:t}))).subscribe(console.log),this.vm$=y({id:this.id$,state:this.localState$}).pipe(l(t=>({id:t.id,count:t.state.count||0})),u(console.log))}ngOnInit(){}updateCounterWith(n){this.localState$.next(p(m({},this.localState$.value),{count:this.localState$.value.count+n}))}},g=o;(()=>{o.\u0275fac=function(t){return new(t||o)(k(F))}})(),(()=>{o.\u0275cmp=w({type:o,selectors:[["app-ls-home"]],viewQuery:function(t,e){if(t&1&&O(z,5,E),t&2){let i;M(i=R())&&(e.buttons=i)}},standalone:!0,features:[T],decls:4,vars:3,consts:[[4,"ngIf"],[3,"click"],["b",""]],template:function(t,e){t&1&&(c(0,"h2"),s(1," test some state"),a(),I(2,G,9,1,"ng-container",0),A(3,"async")),t&2&&(_(2),j("ngIf",D(3,1,e.vm$)))},dependencies:[W,B],encapsulation:2})})();q([J("localState$")],g.prototype,"buttons",void 0);var it=Symbol("subjectProp");function J(r){return(n,t)=>{Object.defineProperty(n,t,{set:function(e){let i=this[r];e&&i.next(p(m({},i.value),{[t]:e}))},get:function(){throw new Error(`Don't read the "${t}" directly, instead take it from the "${r}" behaviourSubject`)},configurable:!1,enumerable:!0})}}export{g as LsHomeComponent,J as ObservableInput};