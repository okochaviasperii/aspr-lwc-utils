import{init as f,load as u}from"./1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_8_9/s/94525900c64b14fa49f2a93a681e5bce8422c510/bundle_lwr_esmLoader.js";import"./1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F2_17_0/s/2439e6c0109924ba313211e725999a3634e7c550/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as _}from"./1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_8_9/s/d4e8a886e79511b25e69b2b5721465a0f9034e72/bundle_lwr_profiler.js";import{createElement as h}from"./1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_17_0/s/eb5fb838f568a4f15fbd89a3681e7c3688548766/bundle_lwc.js";const w=globalThis.LWR;globalThis.LWR.define?globalThis.LWR=Object.freeze({define:globalThis.LWR.define}):delete globalThis.LWR;function g(){return w}const C="lwr.bootstrap.",F=`${C}end`;function m(e,o){return h(e,{is:o})}function p(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,o=>`-${o.toLowerCase()}`)}const y=/-([a-z])/g;function E(e){return e.replace(y,o=>o[1].toUpperCase())}function L(e){if(typeof customElements!="undefined"&&typeof document!="undefined"){const o=document.querySelector("[lwr-root]");e.forEach(([r,s])=>{const l=p(r);let i=document.body.querySelector(l);i?document.querySelectorAll(l).forEach(n=>{const t=m(l,s);for(const{name:a,value:d}of n.attributes){t.setAttribute(a,d);const c=E(a);c in t&&(t[c]=d)}for(;n.childNodes.length>0;)t.appendChild(n.childNodes[0]);n.parentElement.replaceChild(t,n)}):(i=m(l,s),o?o.appendChild(i):document.body.appendChild(i))})}_({id:F})}const b=g(),{imports:R,index:S,importMappings:T,endpoints:v}=b;f({imports:R,index:S,importMappings:T,endpoints:v});const{rootComponents:A,ssrProps:U}=b;Promise.all(A.map(async e=>{const o=p(e);return u(e,"@lwrjs/app-service/demo/module/esm/v/0_8_9").then(({default:r})=>{L([[o,r]])})}));
