import{d as G}from"./chunk-JY2GUBAW.js";import{a as W}from"./chunk-RPS3TBGS.js";import{$ as v,C as P,Eb as l,G as L,K as H,Kb as T,Sa as z,T as q,V as c,W as M,Wa as p,Ya as A,b as F,bc as R,cb as I,db as u,e as S,ea as B,eb as h,fb as y,ha as m,j as d,o as a,q as E,qb as w,rb as k,sb as C,tb as x,x as f}from"./chunk-X5MK5QQ4.js";import{a as D,b as $}from"./chunk-G5KKTNWD.js";var b=Symbol("ObsFromEvent");function K(n){return(e,r)=>({get(){return N(this,r).pipe(L(4))},set(o){if(!(o instanceof T)){R()&&console.warn(`obsFromEvent called with ${o.constructor.name} instead of queryList`);return}let t=N(this,r);o.forEach(i=>{if(!(i instanceof z))throw new Error("ObsFromEvent expects a QueryList<ElementRef>");let s=i.nativeElement;s[b]||(s.addEventListener(n,g=>t.next(g)),s[b]=b)})}})}function N(n,e){let r=n[b]=n[b]||{};return r[e]||(r[e]=new S),r[e]}var tt=(()=>{let e=class{},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)}})(),(()=>{e.\u0275cmp=m({type:e,selectors:[["play-button"]],inputs:{isPaused:"isPaused"},standalone:!0,features:[l],decls:5,vars:2,consts:[[3,"hidden"],[1,"fas","fa-fw","fa-pause"],[1,"fas","fa-fw","fa-play"]],template:function(t,i){t&1&&(u(0,"button")(1,"span",0),y(2,"i",1),h(),u(3,"span",0),y(4,"i",2),h()()),t&2&&(p(1),I("hidden",i.isPaused),p(2),I("hidden",!i.isPaused))},encapsulation:2,changeDetection:0})})(),n})();var ot=(()=>{let e=class{constructor(){this.shadow=!0}},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)}})(),(()=>{e.\u0275cmp=m({type:e,selectors:[["quote"]],hostVars:2,hostBindings:function(t,i){t&2&&k("z2",i.shadow)},inputs:{quote:"quote"},standalone:!0,features:[l],decls:5,vars:4,consts:[[1,"quote"],[1,"text"],[1,"who"]],template:function(t,i){t&1&&(u(0,"div",0)(1,"p",1),C(2),h(),u(3,"p",2),C(4),h()()),t&2&&(w("background-image","url("+(i.quote==null?null:i.quote.imgSrc)+")"),p(2),x(i.quote==null?null:i.quote.quote),p(2),x(i.quote==null?null:i.quote.author))},styles:[`[_nghost-%COMP%] {
    display: block;
    margin: 10px;
    width: 400px;
    height: 400px;
    padding: 10px;
    background-color: rgba(171, 201, 53, 0.76);
    border-radius: 10px;
    overflow: hidden;
  }

  .who[_ngcontent-%COMP%] {
    font-style: italic;
    color: white
  }

  .text[_ngcontent-%COMP%] {
    font-weight: bolder;
    color:whitesmoke
  }

  .quote[_ngcontent-%COMP%] {
    height: 100%;
    width: 100%;
    padding: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }`],changeDetection:0})})(),n})();var rt=(()=>{let e=class{set art(o){o&&(this.url=this.san.bypassSecurityTrustStyle(o))}constructor(o){this.san=o,this.shadow=!0}},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)(A(G))}})(),(()=>{e.\u0275cmp=m({type:e,selectors:[["painting"]],hostVars:2,hostBindings:function(t,i){t&2&&k("z2",i.shadow)},inputs:{art:"art"},standalone:!0,features:[l],decls:1,vars:2,consts:[[1,"painting"]],template:function(t,i){t&1&&y(0,"div",0),t&2&&w("background-image",i.url)},styles:[`[_nghost-%COMP%] {
    display: block;
    margin: 10px;
    width: 400px;
    height: 400px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(42, 228, 228);
  }
  .painting[_ngcontent-%COMP%] {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }`],changeDetection:0})})(),n})();var Y="4a3Fxmua",Q=n=>Object.keys(n).reduce((e,r)=>e+=`${r}=${encodeURIComponent(n[r])}&`,""),O=n=>`https://www.rijksmuseum.nl/api/en/collection/?${Q(n)}key=${Y}&format=json`,U=n=>`https://www.rijksmuseum.nl/api/en/collection/${n}?key=${Y}&format=json`,pt=(()=>{let e=class{constructor(o){this.http=o,this.artCount=4e3,this.detailNumber=new S,this.detail$=this.detailNumber.pipe(c(t=>t?this.http.get(U(t)).pipe(a(i=>[i.artObject])):d([]))),this.selection={p:0,ps:1,type:"painting"},this.randomImage$=this.http.get(O(this.selection)).pipe(M(t=>this.artCount=t.count),c(()=>f(0,2e4)),c(()=>this.getArtObject$),c(t=>this.preload(t.webImage.url))),this.getArtObject$=F.create(t=>{t.next($(D({},this.selection),{p:Math.floor(Math.random()*this.artCount)})),t.complete()}).pipe(c(t=>this.http.get(O(t)).pipe(a(i=>i.artObjects[0]),P(()=>f(500).pipe(c(()=>this.getArtObject$))))),c(t=>t.webImage&&t.webImage.url?d(t):this.getArtObject$))}loadDetail(o){this.detailNumber.next(o)}artist(o){return console.log(o,Q({q:o})),this.http.get(O({q:o})).pipe(a(t=>t.artObjects),a(t=>t.reduce((i,s)=>s.hasImage?i.concat(s):i,[])),M(t=>console.log(t)))}preload(o){return new Promise((t,i)=>{let s=()=>t(`url(${o})`),g=document.createElement("img");g.addEventListener("load",s),g.addEventListener("error",i),g.src=o})}},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)(B(W))}})(),(()=>{e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})})(),n})();var dt=(()=>{let e=class{constructor(){this.quotes$=d(V()).pipe(H(2500),q(1)),this.quoteLength$=this.quotes$.pipe(a(o=>o.length),q(1)),this.quoteObs=o=>this.quotes$.pipe(a(t=>t[o])),this.RandomQuoteOnIntervalObs=o=>f(0,o).pipe(E(()=>this.quoteLength$),a(t=>Math.floor(Math.random()*t)),E(this.quoteObs))}},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)}})(),(()=>{e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})})(),n})();function V(){return[{quote:"A noble spirit embiggens the smallest man.",author:"Jebadiah Springfield",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E16/94194.jpg"},{quote:"My eyes! The goggles do nothing!",author:"Rainier Wolfcastle",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E02/966381.jpg"},{quote:"But Marge, valets. For once, maybe someone will call me 'sir' without adding, 'you're making a scene.'",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E14/1162928.jpg"},{quote:"Um... how can I put this delicately? I don't got enough booze in this place to make you look good.",author:"Moe Szyslak",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S14E09/1093551.jpg"},{quote:"Why must i fail in every attempt at masonry?",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S10E19/313846.jpg"},{quote:"It's all over, people! we don't have a prayer!",author:"Reverend Lovejoy",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E14/780879.jpg"},{quote:"Look, buddy, your car was upside down when we got here. And as for your grandma, she shouldn't have mouthed off like that!",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S05E11/701950.jpg"},{quote:"You know the courts might not work anymore but as long as everybody is videotaping everyone else justice will be done.",author:"Marge Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E09/1223154.jpg"},{quote:"Mmm. Alcohol and night swimming. It's a winning combination.",author:"Lenny Leonard",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S12E01/890848.jpg"},{quote:"No, Flanders. It's, uh...a meeting of gay witches for abortion. You wouldn't be interested.",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S16E19/676427.jpg"},{quote:"Well, all i remember about the last two months is giving a guest lecture at villanova -or maybe it was a street corner.",author:"Barney Gumble",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S09E01/252101.jpg"},{quote:"Look! A blue-collar bar. Oh, Smithers, let's go slumming.",author:"Mr Burns",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S03E11/1085359.jpg"},{quote:"Ah, the mirthless laugh of the damned. Hold your nose, Smithers. We're going in.",author:"Mr Burns",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S03E11/1109416.jpg"},{quote:"I'll have you know the contents of that dumpster are private. You stick your nose in, you'll be violating attorney-dumpster confidentiality.",author:"Lionel Hutz",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E23/561410.jpg"},{quote:"You got the brains and talent to go as far as you want and when you do I'll be right there to borrow money.",author:"Bart Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S03E18/1287978.jpg"},{quote:"Stop. We have reached the limits of what rectal probing can teach us.",author:"Kodos",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S08E01/868033.jpg"},{quote:"I've said it before, and i'll say it again: Democracy simply doesn't work.",author:"Kent Brockman",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E14/866081.jpg"},{quote:"Ned, have you thought about one of the other major religions? They're all pretty much the same.",author:"Reverend Lovejoy",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E03/1086634.jpg"},{quote:"Son, we are about to break the surly bonds of gravity and punch the face of God.",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S13E06/329871.jpg"},{quote:"Otto, why don't you get some more gas? Here's the credit card.",author:"Seymour Skinner",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E21/124907.jpg"},{quote:"Ooh, your powers of deduction are exceptional. I simply can't allow you to waste them here when there are so many crimes going unsolved at this very moment. Go! Go! For the good of the city.",author:"Comic Store Guy",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E18/195461.jpg"},{quote:"The Simpsons have come a long way since an old drunk made humans out of his rabbit characters to pay off his gambling debts.",author:"Troy Maclure",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E10/1301249.jpg"}]}export{K as a,tt as b,ot as c,rt as d,pt as e,dt as f};