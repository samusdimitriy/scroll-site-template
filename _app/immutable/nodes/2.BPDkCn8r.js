import{s as me,x as oe,n as $,o as _e,r as ge}from"../chunks/scheduler.W2pu3yam.js";import{S as ve,i as be,e as d,s as g,c as h,d as y,y as x,h as v,g as b,o as a,j as R,k as o,m as ce,z as A,A as q}from"../chunks/index.DMApaUjc.js";const V={_origin:"https://api.emailjs.com"},ke=(n,e="https://api.emailjs.com")=>{V._userID=n,V._origin=e},pe=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ue{constructor(e){this.status=e.status,this.text=e.responseText}}const fe=(n,e,t={})=>new Promise((l,r)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:s})=>{const p=new ue(s);p.status===200||p.text==="OK"?l(p):r(p)}),i.addEventListener("error",({target:s})=>{r(new ue(s))}),i.open("POST",V._origin+n,!0),Object.keys(t).forEach(s=>{i.setRequestHeader(s,t[s])}),i.send(e)}),Se=(n,e,t,l)=>{const r=l||V._userID;return pe(r,n,e),fe("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},we=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},ye=(n,e,t,l)=>{const r=l||V._userID,i=we(t);pe(r,n,e);const s=new FormData(i);return s.append("lib_version","3.2.0"),s.append("service_id",n),s.append("template_id",e),s.append("user_id",r),fe("/api/v1.0/email/send-form",s)},xe={init:ke,send:Se,sendForm:ye};function Te(n){let e,t="Thank you! Your message has been sent.";return{c(){e=d("p"),e.textContent=t,this.h()},l(l){e=h(l,"P",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1kv2rbu"&&(e.textContent=t),this.h()},h(){a(e,"class","success-message svelte-1l3fv6w")},m(l,r){R(l,e,r)},p:$,d(l){l&&b(e)}}}function Ie(n){let e,t,l,r,i,s,p,m,f="Send",T,I;return{c(){e=d("form"),t=d("input"),l=g(),r=d("input"),i=g(),s=d("textarea"),p=g(),m=d("button"),m.textContent=f,this.h()},l(c){e=h(c,"FORM",{class:!0});var u=y(e);t=h(u,"INPUT",{type:!0,placeholder:!0,class:!0}),l=v(u),r=h(u,"INPUT",{type:!0,placeholder:!0,class:!0}),i=v(u),s=h(u,"TEXTAREA",{placeholder:!0,class:!0}),y(s).forEach(b),p=v(u),m=h(u,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),x(m)!=="svelte-ah9bu5"&&(m.textContent=f),u.forEach(b),this.h()},h(){a(t,"type","text"),a(t,"placeholder","Name"),t.required=!0,a(t,"class","svelte-1l3fv6w"),a(r,"type","email"),a(r,"placeholder","Email"),r.required=!0,a(r,"class","svelte-1l3fv6w"),a(s,"placeholder","Your message"),s.required=!0,a(s,"class","svelte-1l3fv6w"),a(m,"type","submit"),a(m,"class","svelte-1l3fv6w"),a(e,"class","contact-form svelte-1l3fv6w")},m(c,u){R(c,e,u),o(e,t),A(t,n[0]),o(e,l),o(e,r),A(r,n[1]),o(e,i),o(e,s),A(s,n[2]),o(e,p),o(e,m),T||(I=[q(t,"input",n[6]),q(r,"input",n[7]),q(s,"input",n[8]),q(e,"submit",n[4])],T=!0)},p(c,u){u&1&&t.value!==c[0]&&A(t,c[0]),u&2&&r.value!==c[1]&&A(r,c[1]),u&4&&A(s,c[2])},d(c){c&&b(e),T=!1,ge(I)}}}function de(n){let e;function t(i,s){return i[3]?Te:Ie}let l=t(n),r=l(n);return{c(){r.c(),e=ce()},l(i){r.l(i),e=ce()},m(i,s){r.m(i,s),R(i,e,s)},p(i,s){l===(l=t(i))&&r?r.p(i,s):(r.d(1),r=l(i),r&&(r.c(),r.m(e.parentNode,e)))},d(i){i&&b(e),r.d(i)}}}function Ee(n){let e,t,l,r='<img data-speed=".6" class="hero-img" src="/img/hero.png" alt="Hero"/> <div class="container"><div data-speed=".75" class="main-header"><h1 class="main-title">2 KIRSCHEN musikschule</h1></div></div>',i,s,p,m,f,T='<img class="gallery__item" src="/img/work/11.jpg" alt="Work 1"/> <div class="text-block gallery__item"><h2 class="text-block__h">Unterrichtssprachen:</h2> <p class="text-block__p">Die Stunden werden auf Deutsch, Englisch, Ukrainisch und Russisch angeboten. Durch diese Vielfalt an Sprachen gewährleisten wir, dass sich unsere Schüler wohl und sicher fühlen, unabhängig von ihrer Herkunft. Unser Ziel ist es, eine offene, einladende Atmosphäre zu schaffen, in der jeder die Möglichkeit hat, Musik auf seine eigene Art zu erleben und zu lernen.</p></div> <img class="gallery__item" src="/img/work/2.jpg" alt="Work 2"/> <div class="text-block gallery__item"><h2 class="text-block__h">Preise und Zahlungsmodalitäten:</h2> <p class="text-block__p">Der Preis pro Stunde beträgt ab 45 Euro und variiert je nach Anzahl der Stunden pro Woche. Wir bieten flexible Zahlungsoptionen an, darunter monatliche oder vierteljährliche Zahlungen, um die finanzielle Belastung für unsere Schüler und deren Familien so gering wie möglich zu halten. Langfristige Schüler erhalten außerdem Rabatte, um kontinuierliches Lernen zu fördern.</p></div> <img class="gallery__item" src="/img/work/6.jpg" alt="Work 3"/>',I,c,u,M='<h2 class="text-block__h">Über die Lehrerin:</h2> <p class="text-block__p">Tauchen Sie ein in die Welt der Musik mit Tatiana Samus. Mit über 15 Jahren Erfahrung und einer tiefen Leidenschaft für Musik ist Tatiana eine inspirierende Lehrerin, die sich auf die individuellen Bedürfnisse jedes Schülers einstellt. Ihr Unterrichtsstil ist geprägt von Geduld, Professionalität und einem echten Interesse daran, das Beste aus jedem Schüler herauszuholen. Egal, ob Sie Anfänger oder fortgeschrittener Musiker sind – Sie werden bei ihr den richtigen Unterricht finden.</p>',G,j,Q,N,z,ee='<h2 class="text-block__h">Standort und Unterrichtsformat:</h2> <p class="text-block__p">Die Unterrichtsstunden finden sowohl in gemieteten Räumlichkeiten in der Friedrichstraße als auch bei Ihnen zu Hause statt. Unser flexibler Ansatz ermöglicht es Ihnen, den Unterricht in Ihren Alltag zu integrieren. Zudem bieten wir Online-Kurse an, die es Ihnen ermöglichen, von überall aus an unseren hochwertigen Musikstunden teilzunehmen. Ob in einer Einzelstunde oder in einer kleinen Gruppe – wir garantieren Ihnen ein individuelles Lernerlebnis.</p>',O,D,te,W,C,re='<h2 class="text-block__h">Individueller Ansatz und Jährliches Konzert:</h2> <p class="text-block__p">Tatiana bietet jedem Schüler einen individuellen Unterrichtsansatz, der auf den jeweiligen Lernstil und die musikalischen Ziele abgestimmt ist. Jedes Jahr organisieren wir ein Konzert, bei dem unsere Schüler die Möglichkeit haben, vor einem echten Publikum aufzutreten und das Gelernte zu präsentieren. Dieses Event ist nicht nur eine großartige Gelegenheit, Bühnenerfahrung zu sammeln, sondern auch ein Höhepunkt des Jahres, auf den sich unsere Schüler und ihre Familien freuen.</p>',J,_,L,se="Kontaktieren Sie uns:",B,H,ne="Für weitere Informationen erreichen Sie uns telefonisch oder per E-Mail.",K,Z,X,ie=n[3],w=de(n);return{c(){e=d("div"),t=d("div"),l=d("header"),l.innerHTML=r,i=g(),s=d("div"),p=d("div"),m=d("main"),f=d("div"),f.innerHTML=T,I=g(),c=d("div"),u=d("div"),u.innerHTML=M,G=g(),j=d("img"),N=g(),z=d("div"),z.innerHTML=ee,O=g(),D=d("img"),W=g(),C=d("div"),C.innerHTML=re,J=g(),_=d("div"),L=d("h2"),L.textContent=se,B=g(),H=d("p"),H.textContent=ne,K=g(),Z=d("br"),X=g(),w.c(),this.h()},l(S){e=h(S,"DIV",{class:!0});var P=y(e);t=h(P,"DIV",{class:!0});var U=y(t);l=h(U,"HEADER",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1sj8c61"&&(l.innerHTML=r),i=v(U),s=h(U,"DIV",{class:!0});var le=y(s);p=h(le,"DIV",{class:!0});var ae=y(p);m=h(ae,"MAIN",{class:!0});var F=y(m);f=h(F,"DIV",{"data-speed":!0,class:!0,"data-svelte-h":!0}),x(f)!=="svelte-v6y5vw"&&(f.innerHTML=T),I=v(F),c=h(F,"DIV",{"data-speed":!0,class:!0});var k=y(c);u=h(k,"DIV",{class:!0,"data-svelte-h":!0}),x(u)!=="svelte-b9g5gz"&&(u.innerHTML=M),G=v(k),j=h(k,"IMG",{class:!0,src:!0,alt:!0}),N=v(k),z=h(k,"DIV",{class:!0,"data-svelte-h":!0}),x(z)!=="svelte-1z0rh2f"&&(z.innerHTML=ee),O=v(k),D=h(k,"IMG",{class:!0,src:!0,alt:!0}),W=v(k),C=h(k,"DIV",{class:!0,"data-svelte-h":!0}),x(C)!=="svelte-iwlvhn"&&(C.innerHTML=re),J=v(k),_=h(k,"DIV",{class:!0});var E=y(_);L=h(E,"H2",{class:!0,"data-svelte-h":!0}),x(L)!=="svelte-k2ur2k"&&(L.textContent=se),B=v(E),H=h(E,"P",{class:!0,"data-svelte-h":!0}),x(H)!=="svelte-lzqbgk"&&(H.textContent=ne),K=v(E),Z=h(E,"BR",{}),X=v(E),w.l(E),E.forEach(b),k.forEach(b),F.forEach(b),ae.forEach(b),le.forEach(b),U.forEach(b),P.forEach(b),this.h()},h(){a(l,"class","hero-section"),a(f,"data-speed",".9"),a(f,"class","gallery__left"),a(u,"class","text-block gallery__item"),a(j,"class","gallery__item"),oe(j.src,Q="/img/work/4.jpg")||a(j,"src",Q),a(j,"alt","Work 4"),a(z,"class","text-block gallery__item"),a(D,"class","gallery__item"),oe(D.src,te="/img/work/5.jpg")||a(D,"src",te),a(D,"alt","Work 5"),a(C,"class","text-block gallery__item"),a(L,"class","text-block__h"),a(H,"class","text-block__p"),a(_,"class","text-block gallery__item"),a(c,"data-speed","1.1"),a(c,"class","gallery__right"),a(m,"class","gallery"),a(p,"class","container"),a(s,"class","portfolio"),a(t,"class","content"),a(e,"class","wrapper")},m(S,P){R(S,e,P),o(e,t),o(t,l),o(t,i),o(t,s),o(s,p),o(p,m),o(m,f),o(m,I),o(m,c),o(c,u),o(c,G),o(c,j),o(c,N),o(c,z),o(c,O),o(c,D),o(c,W),o(c,C),o(c,J),o(c,_),o(_,L),o(_,B),o(_,H),o(_,K),o(_,Z),o(_,X),w.m(_,null)},p(S,[P]){P&8&&me(ie,ie=S[3])?(w.d(1),w=de(S),w.c(),w.m(_,null)):w.p(S,P)},i:$,o:$,d(S){S&&b(e),w.d(S)}}}function Y(n){return new Promise((e,t)=>{const l=document.createElement("script");l.src=n,l.onload=e,l.onerror=t,document.body.appendChild(l)})}async function he(){try{await Y("/lib/gsap.min.js"),await Y("/lib/ScrollTrigger.min.js"),await Y("/lib/ScrollSmoother.min.js"),typeof gsap<"u"?(gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0}),gsap.fromTo(".hero-section",{opacity:1},{opacity:0,scrollTrigger:{trigger:".hero-section",start:"center",end:"820",scrub:!0}})):console.warn("GSAP is not defined. Please ensure that the GSAP scripts are loaded.")}catch(n){console.error("Failed to load GSAP scripts:",n)}}function Me(n,e,t){let r="",i="",s="",p=!1;function m(c){c.preventDefault();const u={from_name:r,from_email:i,message:s,reply_to:i};xe.send("service_2cccw0f","template_hirju86",u,"Jone0tIVwWAVv1y2I").then(M=>{console.log("SUCCESS!",M.status,M.text),setTimeout(()=>{t(3,p=!0),he()},500)}).catch(M=>{console.error("FAILED...",M)})}_e(()=>{he()});function f(){r=this.value,t(0,r)}function T(){i=this.value,t(1,i)}function I(){s=this.value,t(2,s)}return[r,i,s,p,m,!0,f,T,I]}class De extends ve{constructor(e){super(),be(this,e,Me,Ee,me,{prerender:5})}get prerender(){return this.$$.ctx[5]}}export{De as component};
