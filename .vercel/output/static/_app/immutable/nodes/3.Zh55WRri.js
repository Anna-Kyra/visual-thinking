import{s as P,n as I,d as G}from"../chunks/scheduler.CisLO15p.js";import{S as F,i as R,e as $,c as d,a as j,q as W,d as h,r as p,b as v,o as g,s as b,n as w,t as E,B as X,z as Y,f as T,u as U,k as S,l as M,p as O,g as C,h as N,m as q,j as A}from"../chunks/index.twK4Xdmn.js";import{H as Z}from"../chunks/header.RNyCXWo2.js";import{e as L}from"../chunks/each.-oqiv04n.js";import{F as y}from"../chunks/footer.4Ce-n7mO.js";function ee(c){let t,s,a,o="Lees meer";return{c(){t=$("section"),s=$("a"),a=$("button"),a.textContent=o,this.h()},l(n){t=d(n,"SECTION",{});var f=j(t);s=d(f,"A",{href:!0});var r=j(s);a=d(r,"BUTTON",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-q4tk3m"&&(a.textContent=o),r.forEach(h),f.forEach(h),this.h()},h(){p(a,"class","svelte-1fo2wt5"),p(s,"href",c[0])},m(n,f){v(n,t,f),g(t,s),g(s,a)},p(n,[f]){f&1&&p(s,"href",n[0])},i:I,o:I,d(n){n&&h(t)}}}function te(c,t,s){let{page:a}=t;return c.$$set=o=>{"page"in o&&s(0,a=o.page)},[a]}class le extends F{constructor(t){super(),R(this,t,te,ee,P,{page:0})}}function J(c,t,s){const a=c.slice();return a[1]=t[s],a}function K(c,t,s){const a=c.slice();return a[4]=t[s],a}function Q(c){let t,s=c[4].title+"",a,o,n,f=c[4].description.text+"",r;return{c(){t=$("h1"),a=S(s),o=b(),n=$("p"),r=S(f),this.h()},l(u){t=d(u,"H1",{class:!0});var e=j(t);a=M(e,s),e.forEach(h),o=w(u),n=d(u,"P",{class:!0});var i=j(n);r=M(i,f),i.forEach(h),this.h()},h(){p(t,"class","introtitel svelte-15jwtax"),p(n,"class","introtext svelte-15jwtax")},m(u,e){v(u,t,e),g(t,a),v(u,o,e),v(u,n,e),g(n,r)},p(u,e){e&1&&s!==(s=u[4].title+"")&&O(a,s),e&1&&f!==(f=u[4].description.text+"")&&O(r,f)},d(u){u&&(h(t),h(o),h(n))}}}function V(c){let t,s,a,o,n,f=c[1].title+"",r,u,e,i=c[1].description+"",l,k,x,z,H;return x=new le({props:{page:"/artikelen/"+c[1].pageName}}),{c(){t=$("article"),s=$("img"),o=b(),n=$("h2"),r=S(f),u=b(),e=$("p"),l=S(i),k=b(),C(x.$$.fragment),z=b(),this.h()},l(_){t=d(_,"ARTICLE",{class:!0});var m=j(t);s=d(m,"IMG",{src:!0,alt:!0,class:!0}),o=w(m),n=d(m,"H2",{class:!0});var B=j(n);r=M(B,f),B.forEach(h),u=w(m),e=d(m,"P",{class:!0});var D=j(e);l=M(D,i),D.forEach(h),k=w(m),N(x.$$.fragment,m),z=w(m),m.forEach(h),this.h()},h(){G(s.src,a=c[1].img.url)||p(s,"src",a),p(s,"alt","artikelen"),p(s,"class","svelte-15jwtax"),p(n,"class","svelte-15jwtax"),p(e,"class","svelte-15jwtax"),p(t,"class","svelte-15jwtax")},m(_,m){v(_,t,m),g(t,s),g(t,o),g(t,n),g(n,r),g(t,u),g(t,e),g(e,l),g(t,k),q(x,t,null),g(t,z),H=!0},p(_,m){(!H||m&1&&!G(s.src,a=_[1].img.url))&&p(s,"src",a),(!H||m&1)&&f!==(f=_[1].title+"")&&O(r,f),(!H||m&1)&&i!==(i=_[1].description+"")&&O(l,i);const B={};m&1&&(B.page="/artikelen/"+_[1].pageName),x.$set(B)},i(_){H||(E(x.$$.fragment,_),H=!0)},o(_){T(x.$$.fragment,_),H=!1},d(_){_&&h(t),A(x)}}}function ae(c){let t,s,a,o=L(c[0].introTeksts),n=[];for(let e=0;e<o.length;e+=1)n[e]=Q(K(c,o,e));let f=L(c[0].artikelenHomepages),r=[];for(let e=0;e<f.length;e+=1)r[e]=V(J(c,f,e));const u=e=>T(r[e],1,1,()=>{r[e]=null});return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=b(),s=$("section");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){for(let l=0;l<n.length;l+=1)n[l].l(e);t=w(e),s=d(e,"SECTION",{class:!0});var i=j(s);for(let l=0;l<r.length;l+=1)r[l].l(i);i.forEach(h),this.h()},h(){p(s,"class","svelte-15jwtax")},m(e,i){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,i);v(e,t,i),v(e,s,i);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(s,null);a=!0},p(e,[i]){if(i&1){o=L(e[0].introTeksts);let l;for(l=0;l<o.length;l+=1){const k=K(e,o,l);n[l]?n[l].p(k,i):(n[l]=Q(k),n[l].c(),n[l].m(t.parentNode,t))}for(;l<n.length;l+=1)n[l].d(1);n.length=o.length}if(i&1){f=L(e[0].artikelenHomepages);let l;for(l=0;l<f.length;l+=1){const k=J(e,f,l);r[l]?(r[l].p(k,i),E(r[l],1)):(r[l]=V(k),r[l].c(),E(r[l],1),r[l].m(s,null))}for(X(),l=f.length;l<r.length;l+=1)u(l);Y()}},i(e){if(!a){for(let i=0;i<f.length;i+=1)E(r[i]);a=!0}},o(e){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)T(r[i]);a=!1},d(e){e&&(h(t),h(s)),U(n,e),U(r,e)}}}function se(c,t,s){let{data:a}=t;return c.$$set=o=>{"data"in o&&s(0,a=o.data)},[a]}class ne extends F{constructor(t){super(),R(this,t,se,ae,P,{data:0})}}function re(c){let t,s='<section><h4 class="line svelte-h1iypo">Artikelen</h4></section>';return{c(){t=$("header"),t.innerHTML=s},l(a){t=d(a,"HEADER",{"data-svelte-h":!0}),W(t)!=="svelte-1w5kkjo"&&(t.innerHTML=s)},m(a,o){v(a,t,o)},p:I,i:I,o:I,d(a){a&&h(t)}}}class ie extends F{constructor(t){super(),R(this,t,null,re,P,{})}}function oe(c){let t,s,a,o,n,f,r,u;return t=new Z({}),a=new ie({}),n=new ne({props:{data:c[0]}}),r=new y({}),{c(){C(t.$$.fragment),s=b(),C(a.$$.fragment),o=b(),C(n.$$.fragment),f=b(),C(r.$$.fragment)},l(e){N(t.$$.fragment,e),s=w(e),N(a.$$.fragment,e),o=w(e),N(n.$$.fragment,e),f=w(e),N(r.$$.fragment,e)},m(e,i){q(t,e,i),v(e,s,i),q(a,e,i),v(e,o,i),q(n,e,i),v(e,f,i),q(r,e,i),u=!0},p(e,[i]){const l={};i&1&&(l.data=e[0]),n.$set(l)},i(e){u||(E(t.$$.fragment,e),E(a.$$.fragment,e),E(n.$$.fragment,e),E(r.$$.fragment,e),u=!0)},o(e){T(t.$$.fragment,e),T(a.$$.fragment,e),T(n.$$.fragment,e),T(r.$$.fragment,e),u=!1},d(e){e&&(h(s),h(o),h(f)),A(t,e),A(a,e),A(n,e),A(r,e)}}}function ce(c,t,s){let{data:a}=t;return c.$$set=o=>{"data"in o&&s(0,a=o.data)},[a]}class ge extends F{constructor(t){super(),R(this,t,ce,oe,P,{data:0})}}export{ge as component};