import{a as f}from"./jsx-runtime-03b4ddbf.js";import{u as S}from"./index-3c722384.js";import{A as I}from"./index-033cf86e.js";import{m as R}from"./motion-90200a2f.js";import{M as i,a as T,t as _}from"./utils-593a33c2.js";import{f as v}from"./forward-ref-8b7d2a6f.js";import{d as w,e as P}from"./factory-5c69ebb0.js";const a=(t="right")=>{switch(t){case"right":return i.slideRight;case"left":return i.slideLeft;case"bottom":return i.slideDown;case"top":return i.slideUp}},M={enter:({placement:t,transition:e,transitionEnd:r,delay:s,duration:o,enter:c}={})=>({...a(t).enter,transition:T(e==null?void 0:e.enter)(s,o),transitionEnd:r==null?void 0:r.enter,...c}),exit:({placement:t,transition:e,transitionEnd:r,delay:s,duration:o,exit:c}={})=>({...a(t).exit,transition:_(e==null?void 0:e.exit)(s,o),transitionEnd:r==null?void 0:r.exit,...c})},V={initial:"exit",animate:"enter",exit:"exit",variants:M},q=v(({unmountOnExit:t,isOpen:e,placement:r="right",transition:s,transitionEnd:o,delay:c,duration:p={enter:.4,exit:.3},className:x,__css:u,...d},h)=>{const g=e||t?"enter":"exit",m=S(r),l={placement:m,transition:s,transitionEnd:o,delay:c,duration:p};e=t?e&&t:!0;const{position:A}=a(m),N={position:"fixed",...u,...A};return f(I,{custom:l,children:e?f(w.div,{as:R.div,ref:h,className:P("ui-slide",x),custom:l,...V,animate:g,__css:N,...d}):null})});export{q as S};
//# sourceMappingURL=slide-6e717763.js.map