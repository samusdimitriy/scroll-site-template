import{s as Ee,x as ke,n as Se,r as Me,o as je,e as ze}from"../chunks/scheduler.W2pu3yam.js";import{S as De,i as Le,e as a,s as g,b as He,c as l,d as j,y as H,h as v,g as w,f as Ce,o as n,j as Ie,k as s,z as q,A as Z,l as Pe}from"../chunks/index.DMApaUjc.js";import"../chunks/paths.DmapFm_2.js";const G={_origin:"https://api.emailjs.com"},Ve=(t,e="https://api.emailjs.com")=>{G._userID=t,G._origin=e},Te=(t,e,r)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class we{constructor(e){this.status=e.status,this.text=e.responseText}}const xe=(t,e,r={})=>new Promise((i,c)=>{const d=new XMLHttpRequest;d.addEventListener("load",({target:o})=>{const h=new we(o);h.status===200||h.text==="OK"?i(h):c(h)}),d.addEventListener("error",({target:o})=>{c(new we(o))}),d.open("POST",G._origin+t,!0),Object.keys(r).forEach(o=>{d.setRequestHeader(o,r[o])}),d.send(e)}),Ae=(t,e,r,i)=>{const c=i||G._userID;return Te(c,t,e),xe("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:c,service_id:t,template_id:e,template_params:r}),{"Content-type":"application/json"})},Ue=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Fe=(t,e,r,i)=>{const c=i||G._userID,d=Ue(r);Te(c,t,e);const o=new FormData(d);return o.append("lib_version","3.2.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",c),xe("/api/v1.0/email/send-form",o)},qe={init:Ve,send:Ae,sendForm:Fe};function ye(t){let e,r="Thank you! Your message has been sent.";return{c(){e=a("p"),e.textContent=r,this.h()},l(i){e=l(i,"P",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1kv2rbu"&&(e.textContent=r),this.h()},h(){n(e,"class","success-message svelte-1smkp50")},m(i,c){Ie(i,e,c)},d(i){i&&w(e)}}}function Re(t){let e,r,i,c='<img data-speed=".6" class="hero-img" src="/img/hero.png" alt="Hero"/> <div class="container"><div data-speed=".75" class="main-header"><h1 class="main-title">2 KIRSCHEN musikschule</h1></div></div>',d,o,h,b,T,J=`<img class="gallery__item" src="base/img/work/11.jpg" alt="Work 1"/> <div class="text-block gallery__item"><h2 class="text-block__h">Unterrichtssprachen:</h2> <p class="text-block__p">Die Stunden werden auf Deutsch, Englisch, Ukrainisch und Russisch
                angeboten. Durch diese Vielfalt an Sprachen gewährleisten wir, dass sich
                unsere Schüler wohl und sicher fühlen, unabhängig von ihrer Herkunft.
                Unser Ziel ist es, eine offene, einladende Atmosphäre zu schaffen, in der
                jeder die Möglichkeit hat, Musik auf seine eigene Art zu erleben und zu
                lernen.</p></div> <img class="gallery__item" src="base/img/work/2.jpg" alt="Work 2"/> <div class="text-block gallery__item"><h2 class="text-block__h">Preise und Zahlungsmodalitäten:</h2> <p class="text-block__p">Der Preis pro Stunde beträgt ab 45 Euro und variiert je nach Anzahl der
                Stunden pro Woche. Wir bieten flexible Zahlungsoptionen an, darunter
                monatliche oder vierteljährliche Zahlungen, um die finanzielle Belastung
                für unsere Schüler und deren Familien so gering wie möglich zu halten.
                Langfristige Schüler erhalten außerdem Rabatte, um kontinuierliches Lernen
                zu fördern.</p></div> <img class="gallery__item" src="base/img/work/6.jpg" alt="Work 3"/>`,R,u,z,C=`<h2 class="text-block__h">Über die Lehrerin:</h2> <p class="text-block__p">Tauchen Sie ein in die Welt der Musik mit Tatiana Samus. Mit über 15
                Jahren Erfahrung und einer tiefen Leidenschaft für Musik ist Tatiana
                eine inspirierende Lehrerin, die sich auf die individuellen Bedürfnisse
                jedes Schülers einstellt. Ihr Unterrichtsstil ist geprägt von Geduld,
                Professionalität und einem echten Interesse daran, das Beste aus jedem
                Schüler herauszuholen. Egal, ob Sie Anfänger oder fortgeschrittener
                Musiker sind – Sie werden bei ihr den richtigen Unterricht finden.</p>`,O,k,ue,X,P,de=`<h2 class="text-block__h">Standort und Unterrichtsformat:</h2> <p class="text-block__p">Die Unterrichtsstunden finden sowohl in gemieteten Räumlichkeiten in der
                Friedrichstraße als auch bei Ihnen zu Hause statt. Unser flexibler
                Ansatz ermöglicht es Ihnen, den Unterricht in Ihren Alltag zu
                integrieren. Zudem bieten wir Online-Kurse an, die es Ihnen
                ermöglichen, von überall aus an unseren hochwertigen Musikstunden
                teilzunehmen. Ob in einer Einzelstunde oder in einer kleinen Gruppe –
                wir garantieren Ihnen ein individuelles Lernerlebnis.</p>`,Y,V,he,Q,A,me=`<h2 class="text-block__h">Individueller Ansatz und Jährliches Konzert:</h2> <p class="text-block__p">Tatiana bietet jedem Schüler einen individuellen Unterrichtsansatz, der
                auf den jeweiligen Lernstil und die musikalischen Ziele abgestimmt ist.
                Jedes Jahr organisieren wir ein Konzert, bei dem unsere Schüler die
                Möglichkeit haben, vor einem echten Publikum aufzutreten und das
                Gelernte zu präsentieren. Dieses Event ist nicht nur eine großartige
                Gelegenheit, Bühnenerfahrung zu sammeln, sondern auch ein Höhepunkt des
                Jahres, auf den sich unsere Schüler und ihre Familien freuen.</p>`,$,m,U,pe="Kontaktieren Sie uns:",ee,F,fe=`Für weitere Informationen erreichen Sie uns telefonisch oder per
                E-Mail.`,te,se,re,f,y,ne,I,ie,x,ae,D,W=t[4]?"Sending...":"Send",N,le,oe,_e,p=t[3]&&ye();return{c(){e=a("div"),r=a("div"),i=a("header"),i.innerHTML=c,d=g(),o=a("div"),h=a("div"),b=a("main"),T=a("div"),T.innerHTML=J,R=g(),u=a("div"),z=a("div"),z.innerHTML=C,O=g(),k=a("img"),X=g(),P=a("div"),P.innerHTML=de,Y=g(),V=a("img"),Q=g(),A=a("div"),A.innerHTML=me,$=g(),m=a("div"),U=a("h2"),U.textContent=pe,ee=g(),F=a("p"),F.textContent=fe,te=g(),se=a("br"),re=g(),f=a("form"),y=a("input"),ne=g(),I=a("input"),ie=g(),x=a("textarea"),ae=g(),D=a("button"),N=He(W),le=g(),p&&p.c(),this.h()},l(_){e=l(_,"DIV",{class:!0});var E=j(e);r=l(E,"DIV",{class:!0});var B=j(r);i=l(B,"HEADER",{class:!0,"data-svelte-h":!0}),H(i)!=="svelte-1sj8c61"&&(i.innerHTML=c),d=v(B),o=l(B,"DIV",{class:!0});var ge=j(o);h=l(ge,"DIV",{class:!0});var ve=j(h);b=l(ve,"MAIN",{class:!0});var K=j(b);T=l(K,"DIV",{"data-speed":!0,class:!0,"data-svelte-h":!0}),H(T)!=="svelte-813p2r"&&(T.innerHTML=J),R=v(K),u=l(K,"DIV",{"data-speed":!0,class:!0});var S=j(u);z=l(S,"DIV",{class:!0,"data-svelte-h":!0}),H(z)!=="svelte-12srdb7"&&(z.innerHTML=C),O=v(S),k=l(S,"IMG",{class:!0,src:!0,alt:!0}),X=v(S),P=l(S,"DIV",{class:!0,"data-svelte-h":!0}),H(P)!=="svelte-1wwrzd7"&&(P.innerHTML=de),Y=v(S),V=l(S,"IMG",{class:!0,src:!0,alt:!0}),Q=v(S),A=l(S,"DIV",{class:!0,"data-svelte-h":!0}),H(A)!=="svelte-1p8ezz9"&&(A.innerHTML=me),$=v(S),m=l(S,"DIV",{class:!0});var M=j(m);U=l(M,"H2",{class:!0,"data-svelte-h":!0}),H(U)!=="svelte-k2ur2k"&&(U.textContent=pe),ee=v(M),F=l(M,"P",{class:!0,"data-svelte-h":!0}),H(F)!=="svelte-ivmj4q"&&(F.textContent=fe),te=v(M),se=l(M,"BR",{}),re=v(M),f=l(M,"FORM",{class:!0});var L=j(f);y=l(L,"INPUT",{type:!0,placeholder:!0,class:!0}),ne=v(L),I=l(L,"INPUT",{type:!0,placeholder:!0,class:!0}),ie=v(L),x=l(L,"TEXTAREA",{placeholder:!0,class:!0}),j(x).forEach(w),ae=v(L),D=l(L,"BUTTON",{type:!0,class:!0});var be=j(D);N=Ce(be,W),be.forEach(w),L.forEach(w),le=v(M),p&&p.l(M),M.forEach(w),S.forEach(w),K.forEach(w),ve.forEach(w),ge.forEach(w),B.forEach(w),E.forEach(w),this.h()},h(){n(i,"class","hero-section"),n(T,"data-speed",".9"),n(T,"class","gallery__left"),n(z,"class","text-block gallery__item"),n(k,"class","gallery__item"),ke(k.src,ue="base/img/work/4.jpg")||n(k,"src",ue),n(k,"alt","Work 4"),n(P,"class","text-block gallery__item"),n(V,"class","gallery__item"),ke(V.src,he="base/img/work/5.jpg")||n(V,"src",he),n(V,"alt","Work 5"),n(A,"class","text-block gallery__item"),n(U,"class","text-block__h"),n(F,"class","text-block__p"),n(y,"type","text"),n(y,"placeholder","Name"),y.required=!0,n(y,"class","svelte-1smkp50"),n(I,"type","email"),n(I,"placeholder","Email"),I.required=!0,n(I,"class","svelte-1smkp50"),n(x,"placeholder","Your message"),x.required=!0,n(x,"class","svelte-1smkp50"),n(D,"type","submit"),D.disabled=t[4],n(D,"class","svelte-1smkp50"),n(f,"class","contact-form svelte-1smkp50"),n(m,"class","text-block gallery__item"),n(u,"data-speed","1.1"),n(u,"class","gallery__right"),n(b,"class","gallery"),n(h,"class","container"),n(o,"class","portfolio"),n(r,"class","content"),n(e,"class","wrapper")},m(_,E){Ie(_,e,E),s(e,r),s(r,i),s(r,d),s(r,o),s(o,h),s(h,b),s(b,T),s(b,R),s(b,u),s(u,z),s(u,O),s(u,k),s(u,X),s(u,P),s(u,Y),s(u,V),s(u,Q),s(u,A),s(u,$),s(u,m),s(m,U),s(m,ee),s(m,F),s(m,te),s(m,se),s(m,re),s(m,f),s(f,y),q(y,t[0]),s(f,ne),s(f,I),q(I,t[1]),s(f,ie),s(f,x),q(x,t[2]),s(f,ae),s(f,D),s(D,N),t[10](f),s(m,le),p&&p.m(m,null),oe||(_e=[Z(y,"input",t[7]),Z(I,"input",t[8]),Z(x,"input",t[9]),Z(f,"submit",t[6])],oe=!0)},p(_,[E]){E&1&&y.value!==_[0]&&q(y,_[0]),E&2&&I.value!==_[1]&&q(I,_[1]),E&4&&q(x,_[2]),E&16&&W!==(W=_[4]?"Sending...":"Send")&&Pe(N,W),E&16&&(D.disabled=_[4]),_[3]?p||(p=ye(),p.c(),p.m(m,null)):p&&(p.d(1),p=null)},i:Se,o:Se,d(_){_&&w(e),t[10](null),p&&p.d(),oe=!1,Me(_e)}}}function ce(t){return new Promise((e,r)=>{const i=document.createElement("script");i.src=t,i.onload=e,i.onerror=r,document.body.appendChild(i)})}async function Oe(){try{await ce("/lib/gsap.min.js"),await ce("/lib/ScrollTrigger.min.js"),await ce("/lib/ScrollSmoother.min.js"),typeof gsap<"u"&&(gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0}),gsap.fromTo(".hero-section",{opacity:1},{opacity:0,scrollTrigger:{trigger:".hero-section",start:"center",end:"820",scrub:!0}}))}catch(t){console.error("Failed to load GSAP scripts:",t)}}function We(t,e,r){let i="",c="",d="",o=!1,h=!1,b;async function T(C){C.preventDefault();const O={from_name:i,from_email:c,message:d,reply_to:c};r(4,h=!0);try{const k=await qe.send("service_2cccw0f","template_hirju86",O,"Jone0tIVwWAVv1y2I");console.log("SUCCESS!",k.status,k.text),r(3,o=!0),r(4,h=!1),r(0,i=""),r(1,c=""),r(2,d=""),b.scrollIntoView({behavior:"smooth",block:"center"})}catch(k){console.error("FAILED...",k),r(4,h=!1)}}je(()=>{Oe()});function J(){i=this.value,r(0,i)}function R(){c=this.value,r(1,c)}function u(){d=this.value,r(2,d)}function z(C){ze[C?"unshift":"push"](()=>{b=C,r(5,b)})}return[i,c,d,o,h,b,T,J,R,u,z]}class Be extends De{constructor(e){super(),Le(this,e,We,Re,Ee,{})}}export{Be as component};
