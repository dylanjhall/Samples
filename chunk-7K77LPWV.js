import{$ as y,I as l,O as w,T as U,U as $,W as b,e as c,n as u,o as d,q as m,x as p}from"./chunk-X5MK5QQ4.js";import{a as o,b as f,h as n}from"./chunk-G5KKTNWD.js";var A=import("./chance-DYYR3VLV.js").then(t=>t).then(({default:t})=>new t);var M=(()=>{let a=class{constructor(){this.flush$=new c,this.updatedUsers$=new c,this.allUsers$=this.flush$.pipe(m(()=>this.updatedUsers$),$([]),U({bufferSize:1,refCount:!1})),this.admins$=this.allUsers$.pipe(d(s=>s.filter(e=>e.isAdmin))),this.users$=this.allUsers$.pipe(d(s=>s.filter(e=>!e.isAdmin))),this.flushCache()}addUsers(s){return n(this,null,function*(){let e=yield u(this.allUsers$),r=e.length,i=yield Promise.all(Array.from({length:s}).map((h,x)=>n(this,null,function*(){return o({id:r+x},yield v())})));this.updatedUsers$.next(e.concat(i))})}saveUser(s){return n(this,null,function*(){let e=yield this.allUsers$.pipe(l(1)).toPromise(),r=e.findIndex(i=>i.id===s.id);if(r>-1)Object.assign(e[r],s);else{let i;for(;!i||e.findIndex(h=>h.id===i)>-1;)i=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);e.unshift(f(o({},s),{id:i}))}this.updatedUsers$.next(e)})}deleteUser(s){return n(this,null,function*(){let e=(yield this.allUsers$.pipe(w()).toPromise()).filter(r=>r.id!==s.id);this.updatedUsers$.next(e)})}flushCache(){return n(this,null,function*(){let s=yield A;yield new Promise(e=>setTimeout(e)),this.flush$.next(),p(0,250).pipe(b(()=>this.addUsers(s.integer({min:100,max:400}))),l(20)).subscribe()})}},t=a;return(()=>{a.\u0275fac=function(e){return new(e||a)}})(),(()=>{a.\u0275prov=y({token:a,factory:a.\u0275fac,providedIn:"root"})})(),t})();function v(){return n(this,null,function*(){let t=yield A;return{userState:t.integer({min:0,max:3}),username:t.name(),isAdmin:t.bool(),isActive:t.bool(),email:t.email()}})}export{M as a};