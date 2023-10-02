import{j as l,a as P}from"./jsx-runtime-29545a09.js";import{r as M}from"./index-76fb7be0.js";import{o as S,s as G,t as q,d as v,e as C,v as x}from"./factory-693455ee.js";import{f as h}from"./forward-ref-8b7d2a6f.js";import{a as J}from"./use-component-style-3d3df90d.js";import{o as K,a as b,d as R}from"./theme-d25050a9.js";const[Q,_]=S({strict:!1,name:"FormControlContext"}),[U,g]=S({strict:!1,name:"FormControlStyleContext"}),as=h(({id:a,...s},i)=>{const[r,o]=J("FormControl",s),{className:t,isRequired:n=!1,isDisabled:d=!1,isInvalid:u=!1,isReadOnly:m=!1,isReplace:c=!0,label:e,helperMessage:f,errorMessage:y,children:F,requiredIndicator:B,optionalIndicator:H,...L}=K(o);a=a??M.useId();const[O,I]=M.useState(!1),p=G(F),[j]=q(p,D),[A]=q(p,E),[V]=q(p,N),w=!!j,k=!!A,T=!!V,z={...r.container};return l(Q,{value:{id:a,isFocused:O,isRequired:n,isDisabled:d,isInvalid:u,isReadOnly:m,isReplace:c,onFocus:()=>I(!0),onBlur:()=>I(!1)},children:l(U,{value:r,children:P(v.div,{ref:i,className:C("ui-form-control",t),role:"group",__css:z,...L,children:[!w&&e?l(D,{requiredIndicator:B,optionalIndicator:H,children:e}):null,F,!k&&f?l(E,{children:f}):null,!T&&y?l(N,{children:y}):null]})})})}),is=a=>{const s=_(),i=a.id??(s==null?void 0:s.id),r=a.disabled??a.isDisabled??(s==null?void 0:s.isDisabled),o=a.readOnly??a.isReadOnly??(s==null?void 0:s.isReadOnly),t=a.required??a.isRequired??(s==null?void 0:s.isRequired),n=a.isInvalid??(s==null?void 0:s.isInvalid);return{id:i,isDisabled:r,isReadOnly:o,isRequired:t,isInvalid:n}},rs=({id:a,disabled:s,readOnly:i,required:r,isDisabled:o,isReadOnly:t,isRequired:n,isInvalid:d,onFocus:u,onBlur:m,...c})=>{const e=_();return s=s??o??(e==null?void 0:e.isDisabled),r=r??n??(e==null?void 0:e.isRequired),i=i??t??(e==null?void 0:e.isReadOnly),d=d??(e==null?void 0:e.isInvalid),{id:a??(e==null?void 0:e.id),disabled:s,required:r,readOnly:i,"aria-disabled":b(s),"aria-readonly":b(i),"aria-required":b(r),"aria-invalid":b(d),onFocus:x(e==null?void 0:e.onFocus,u),onBlur:x(e==null?void 0:e.onBlur,m),...s||i?{_hover:{},_active:{},_focus:{},_invalid:{},_focusVisible:{}}:{},...c}},os=["disabled","required","readOnly","aria-disabled","aria-readonly","aria-required","aria-invalid","onFocus","onBlur","_hover","_active","_focus","_invalid","_focusVisible"],D=h(({className:a,htmlFor:s,requiredIndicator:i=l(W,{}),optionalIndicator:r=null,children:o,...t},n)=>{const{id:d,isRequired:u,isFocused:m,isDisabled:c,isInvalid:e,isReadOnly:f}=_()??{},y=g()??{},F={display:"block",pointerEvents:f?"none":void 0,...y.label};return P(v.label,{ref:n,className:C("ui-form-label",a),"data-focus":R(m),"data-disabled":R(c),"data-readonly":R(f),"data-invalid":R(e),htmlFor:s??d,__css:F,style:{cursor:c?"not-allowed":void 0},...t,children:[o,u?i:r]})}),W=h(({className:a,...s},i)=>{const o={...(g()??{}).requiredIndicator};return l(v.span,{ref:i,className:C("ui-form-required-indicator",a),role:"presentation","aria-hidden":!0,__css:o,...s,children:"*"})}),E=h(({className:a,...s},i)=>{const{isInvalid:r,isReplace:o}=_()??{},t=g()??{};if(o&&r)return null;const n={...t.helperMessage};return l(v.div,{ref:i,className:C("ui-form-helper-message",a),__css:n,...s})}),N=h(({className:a,...s},i)=>{const{isInvalid:r}=_()??{},o=g()??{};if(!r)return null;const t={...o.errorMessage};return l(v.div,{ref:i,className:C("ui-form-error-message",a),"aria-live":"polite",__css:t,...s})});export{N as E,as as F,E as H,D as L,is as a,os as f,rs as u};
//# sourceMappingURL=form-control-758fc5f1.js.map