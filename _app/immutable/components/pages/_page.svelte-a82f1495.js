import{S as X,i as Y,s as Z,l as g,m as b,p as I,h as f,q as _,b as D,n as P,J as W,a as w,u as $,c as x,v as C,K as T,H as u,L as de,w as M,M as me,f as B,t as N,d as _e,e as ie,g as pe,x as ve,y as ge,z as be,A as ke}from"../../chunks/index-535f3838.js";function oe(a,t,l){const e=a.slice();return e[4]=t[l],e}function ae(a){let t,l,e,s,o,n=a[4].name+"",i,c,v,m;function p(){return a[3](a[4])}return{c(){t=g("div"),l=g("img"),s=w(),o=g("div"),i=$(n),c=w(),this.h()},l(E){t=b(E,"DIV",{class:!0});var d=I(t);l=b(d,"IMG",{src:!0,alt:!0,class:!0}),s=x(d),o=b(d,"DIV",{class:!0});var r=I(o);i=C(r,n),r.forEach(f),c=x(d),d.forEach(f),this.h()},h(){T(l.src,e="https://ddragon.leagueoflegends.com/cdn/"+a[0]+"/img/champion/"+a[4].id+".png")||_(l,"src",e),_(l,"alt",""),_(l,"class","group-hover:outline group-hover:outline-3 group-hover:outline-white group-hover:cursor-pointer group-hover:rotate-z-3 transition-transform"),_(o,"class","mb-4 w-full text-center leading-tight"),_(t,"class","mx-4 group")},m(E,d){D(E,t,d),u(t,l),u(t,s),u(t,o),u(o,i),u(t,c),v||(m=de(t,"click",p),v=!0)},p(E,d){a=E,d&5&&!T(l.src,e="https://ddragon.leagueoflegends.com/cdn/"+a[0]+"/img/champion/"+a[4].id+".png")&&_(l,"src",e),d&4&&n!==(n=a[4].name+"")&&M(i,n)},d(E){E&&f(t),v=!1,m()}}}function Ie(a){let t,l=a[2],e=[];for(let s=0;s<l.length;s+=1)e[s]=ae(oe(a,l,s));return{c(){t=g("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=b(s,"DIV",{class:!0});var o=I(t);for(let n=0;n<e.length;n+=1)e[n].l(o);o.forEach(f),this.h()},h(){_(t,"class","flex flex-wrap justify-center")},m(s,o){D(s,t,o);for(let n=0;n<e.length;n+=1)e[n].m(t,null)},p(s,[o]){if(o&7){l=s[2];let n;for(n=0;n<l.length;n+=1){const i=oe(s,l,n);e[n]?e[n].p(i,o):(e[n]=ae(i),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=l.length}},i:P,o:P,d(s){s&&f(t),W(e,s)}}}function Ee(a,t,l){let{version:e}=t,{selectChampion:s}=t,o=[];fetch(`https://ddragon.leagueoflegends.com/cdn/${e}/data/pt_BR/champion.json`).then(i=>i.json()).then(i=>{l(2,o=Object.values(i.data).sort((c,v)=>c.name>v.name?1:-1)),console.log(o)});const n=i=>s(i);return a.$$set=i=>{"version"in i&&l(0,e=i.version),"selectChampion"in i&&l(1,s=i.selectChampion)},[e,s,o,n]}class ye extends X{constructor(t){super(),Y(this,t,Ee,Ie,Z,{version:0,selectChampion:1})}}function ce(a,t,l){const e=a.slice();return e[5]=t[l],e}function re(a,t,l){const e=a.slice();return e[5]=t[l],e}function De(a){let t,l;return{c(){t=g("div"),l=$("Carregando..."),this.h()},l(e){t=b(e,"DIV",{class:!0});var s=I(t);l=C(s,"Carregando..."),s.forEach(f),this.h()},h(){_(t,"class","text-center")},m(e,s){D(e,t,s),u(t,l)},p:P,d(e){e&&f(t)}}}function Ve(a){let t,l,e,s,o,n,i,c,v,m=a[1].ally,p=[];for(let r=0;r<m.length;r+=1)p[r]=fe(re(a,m,r));let E=a[1].enemy,d=[];for(let r=0;r<E.length;r+=1)d[r]=he(ce(a,E,r));return{c(){t=g("div"),l=g("div"),e=$("Aliado:"),s=w();for(let r=0;r<p.length;r+=1)p[r].c();o=w(),n=g("div"),i=g("div"),c=$("Inimigo:"),v=w();for(let r=0;r<d.length;r+=1)d[r].c();this.h()},l(r){t=b(r,"DIV",{class:!0});var k=I(t);l=b(k,"DIV",{class:!0});var h=I(l);e=C(h,"Aliado:"),h.forEach(f),s=x(k);for(let j=0;j<p.length;j+=1)p[j].l(k);k.forEach(f),o=x(r),n=b(r,"DIV",{});var V=I(n);i=b(V,"DIV",{class:!0});var q=I(i);c=C(q,"Inimigo:"),q.forEach(f),v=x(V);for(let j=0;j<d.length;j+=1)d[j].l(V);V.forEach(f),this.h()},h(){_(l,"class","text-2xl text-white"),_(t,"class","mb-5"),_(i,"class","text-2xl text-white")},m(r,k){D(r,t,k),u(t,l),u(l,e),u(t,s);for(let h=0;h<p.length;h+=1)p[h].m(t,null);D(r,o,k),D(r,n,k),u(n,i),u(i,c),u(n,v);for(let h=0;h<d.length;h+=1)d[h].m(n,null)},p(r,k){if(k&2){m=r[1].ally;let h;for(h=0;h<m.length;h+=1){const V=re(r,m,h);p[h]?p[h].p(V,k):(p[h]=fe(V),p[h].c(),p[h].m(t,null))}for(;h<p.length;h+=1)p[h].d(1);p.length=m.length}if(k&2){E=r[1].enemy;let h;for(h=0;h<E.length;h+=1){const V=ce(r,E,h);d[h]?d[h].p(V,k):(d[h]=he(V),d[h].c(),d[h].m(n,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=E.length}},d(r){r&&f(t),W(p,r),r&&f(o),r&&f(n),W(d,r)}}}function we(a){let t,l;return{c(){t=g("div"),l=$(a[2]),this.h()},l(e){t=b(e,"DIV",{class:!0});var s=I(t);l=C(s,a[2]),s.forEach(f),this.h()},h(){_(t,"class","text-center")},m(e,s){D(e,t,s),u(t,l)},p(e,s){s&4&&M(l,e[2])},d(e){e&&f(t)}}}function fe(a){let t,l,e,s=a[5]+"",o;return{c(){t=g("hr"),l=w(),e=g("div"),o=$(s),this.h()},l(n){t=b(n,"HR",{class:!0}),l=x(n),e=b(n,"DIV",{class:!0});var i=I(e);o=C(i,s),i.forEach(f),this.h()},h(){_(t,"class","bg-gray opacity-50"),_(e,"class","text-sm")},m(n,i){D(n,t,i),D(n,l,i),D(n,e,i),u(e,o)},p(n,i){i&2&&s!==(s=n[5]+"")&&M(o,s)},d(n){n&&f(t),n&&f(l),n&&f(e)}}}function he(a){let t,l,e,s=a[5]+"",o;return{c(){t=g("hr"),l=w(),e=g("div"),o=$(s),this.h()},l(n){t=b(n,"HR",{class:!0}),l=x(n),e=b(n,"DIV",{class:!0});var i=I(e);o=C(i,s),i.forEach(f),this.h()},h(){_(t,"class","bg-gray opacity-50"),_(e,"class","text-sm")},m(n,i){D(n,t,i),D(n,l,i),D(n,e,i),u(e,o)},p(n,i){i&2&&s!==(s=n[5]+"")&&M(o,s)},d(n){n&&f(t),n&&f(l),n&&f(e)}}}function xe(a){let t,l,e,s,o,n,i,c,v,m,p,E=a[0].name+"",d,r,k,h,V=a[0].title+"",q,j,F,S,J,Q,z,U,ee;document.title=t=a[0].name+" - loldicas";function te(y,A){return y[2]?we:y[1]?Ve:De}let K=te(a),R=K(a);return{c(){l=w(),e=g("div"),s=g("span"),o=g("div"),n=w(),i=g("span"),c=$("back"),v=w(),m=g("div"),p=g("div"),d=$(E),r=w(),k=g("div"),h=$("- "),q=$(V),j=$("-"),F=w(),S=g("img"),Q=w(),z=g("div"),R.c(),this.h()},l(y){me('[data-svelte="svelte-1r4ty57"]',document.head).forEach(f),l=x(y),e=b(y,"DIV",{class:!0});var G=I(e);s=b(G,"SPAN",{class:!0});var L=I(s);o=b(L,"DIV",{class:!0}),I(o).forEach(f),n=x(L),i=b(L,"SPAN",{});var le=I(i);c=C(le,"back"),le.forEach(f),L.forEach(f),v=x(G),m=b(G,"DIV",{class:!0});var H=I(m);p=b(H,"DIV",{class:!0});var ne=I(p);d=C(ne,E),ne.forEach(f),r=x(H),k=b(H,"DIV",{class:!0});var O=I(k);h=C(O,"- "),q=C(O,V),j=C(O,"-"),O.forEach(f),F=x(H),S=b(H,"IMG",{src:!0,alt:!0,class:!0}),H.forEach(f),Q=x(G),z=b(G,"DIV",{class:!0});var se=I(z);R.l(se),se.forEach(f),G.forEach(f),this.h()},h(){_(o,"class","i-eva-arrow-back-outline"),_(s,"class","text-2xl text-white absolute top-2 left-2 flex items-center cursor-pointer"),_(p,"class","text-2xl font-500 text-center"),_(k,"class","text-xs text-center mb-2 text-gray-3"),T(S.src,J=`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${a[0].id}_0.jpg`)||_(S,"src",J),_(S,"alt",""),_(S,"class","h-1/2"),_(m,"class","mx-5"),_(z,"class","md:w-1/3 w-4/5 md:text-left text-center h-1/2 text-gray-3"),_(e,"class","h-full flex items-center justify-center flex-wrap")},m(y,A){D(y,l,A),D(y,e,A),u(e,s),u(s,o),u(s,n),u(s,i),u(i,c),u(e,v),u(e,m),u(m,p),u(p,d),u(m,r),u(m,k),u(k,h),u(k,q),u(k,j),u(m,F),u(m,S),u(e,Q),u(e,z),R.m(z,null),U||(ee=de(s,"click",a[4]),U=!0)},p(y,[A]){A&1&&t!==(t=y[0].name+" - loldicas")&&(document.title=t),A&1&&E!==(E=y[0].name+"")&&M(d,E),A&1&&V!==(V=y[0].title+"")&&M(q,V),A&1&&!T(S.src,J=`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${y[0].id}_0.jpg`)&&_(S,"src",J),K===(K=te(y))&&R?R.p(y,A):(R.d(1),R=K(y),R&&(R.c(),R.m(z,null)))},i:P,o:P,d(y){y&&f(l),y&&f(e),R.d(),U=!1,ee()}}}function $e(a,t,l){let{champion:e}=t,{version:s}=t,o,n;console.log(`https://ddragon.leagueoflegends.com/cdn/${s}/data/pt_BR/champion/${e.id}.json`),fetch(`https://ddragon.leagueoflegends.com/cdn/${s}/data/pt_BR/champion/${e.id}.json`).then(c=>c.json()).then(c=>{l(1,o={ally:c.data[e.id].allytips,enemy:c.data[e.id].enemytips}),o.ally.length===0&&o.enemy.length===0&&l(2,n="Infelizmente, a Riot Games n\xE3o informa dicas para esse campe\xE3o :("),console.log(o)});const i=()=>window.location.reload();return a.$$set=c=>{"champion"in c&&l(0,e=c.champion),"version"in c&&l(3,s=c.version)},[e,o,n,s,i]}class Ce extends X{constructor(t){super(),Y(this,t,$e,xe,Z,{champion:0,version:3})}}function ue(a){let t,l,e,s;const o=[Re,je],n=[];function i(c,v){return c[1]?0:1}return t=i(a),l=n[t]=o[t](a),{c(){l.c(),e=ie()},l(c){l.l(c),e=ie()},m(c,v){n[t].m(c,v),D(c,e,v),s=!0},p(c,v){let m=t;t=i(c),t===m?n[t].p(c,v):(pe(),N(n[m],1,1,()=>{n[m]=null}),_e(),l=n[t],l?l.p(c,v):(l=n[t]=o[t](c),l.c()),B(l,1),l.m(e.parentNode,e))},i(c){s||(B(l),s=!0)},o(c){N(l),s=!1},d(c){n[t].d(c),c&&f(e)}}}function je(a){let t,l;return t=new ye({props:{version:a[0],selectChampion:a[2]}}),{c(){ve(t.$$.fragment)},l(e){ge(t.$$.fragment,e)},m(e,s){be(t,e,s),l=!0},p(e,s){const o={};s&1&&(o.version=e[0]),s&2&&(o.selectChampion=e[2]),t.$set(o)},i(e){l||(B(t.$$.fragment,e),l=!0)},o(e){N(t.$$.fragment,e),l=!1},d(e){ke(t,e)}}}function Re(a){let t,l;return t=new Ce({props:{champion:a[1],version:a[0]}}),{c(){ve(t.$$.fragment)},l(e){ge(t.$$.fragment,e)},m(e,s){be(t,e,s),l=!0},p(e,s){const o={};s&2&&(o.champion=e[1]),s&1&&(o.version=e[0]),t.$set(o)},i(e){l||(B(t.$$.fragment,e),l=!0)},o(e){N(t.$$.fragment,e),l=!1},d(e){ke(t,e)}}}function Ae(a){let t,l,e,s,o,n,i=a[0]&&ue(a);return{c(){t=w(),l=g("div"),e=g("div"),s=$("loldicas"),o=w(),i&&i.c(),this.h()},l(c){me('[data-svelte="svelte-1rz7oyy"]',document.head).forEach(f),t=x(c),l=b(c,"DIV",{class:!0});var m=I(l);e=b(m,"DIV",{class:!0});var p=I(e);s=C(p,"loldicas"),p.forEach(f),o=x(m),i&&i.l(m),m.forEach(f),this.h()},h(){document.title="loldicas",_(e,"class","w-full text-center text-2xl font-500 py-4"),_(l,"class","w-full h-full font-poppins text-white flex flex-col")},m(c,v){D(c,t,v),D(c,l,v),u(l,e),u(e,s),u(l,o),i&&i.m(l,null),n=!0},p(c,[v]){c[0]?i?(i.p(c,v),v&1&&B(i,1)):(i=ue(c),i.c(),B(i,1),i.m(l,null)):i&&(pe(),N(i,1,1,()=>{i=null}),_e())},i(c){n||(B(i),n=!0)},o(c){N(i),n=!1},d(c){c&&f(t),c&&f(l),i&&i.d()}}}function Se(a,t,l){let e,s;return fetch("https://ddragon.leagueoflegends.com/api/versions.json").then(n=>n.json()).then(n=>{l(0,e=n[0])}),[e,s,n=>l(1,s=n)]}class ze extends X{constructor(t){super(),Y(this,t,Se,Ae,Z,{})}}export{ze as default};
