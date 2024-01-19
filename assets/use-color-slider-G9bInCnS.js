import{u as ue}from"./index-G8tKCAl8.js";import{u as le,a as ie,b as me}from"./index-2SwoFfUT.js";import{r}from"./index-4g5l5LRQ.js";import{g as q,e as fe,o as de,w as I,Q as R,K as pe,h as D}from"./factory-cZuM5uc7.js";import{u as be,f as H,g as ge}from"./form-control-ZNxtDnw3.js";import{r as M,c as F,v as ve,p as Ce}from"./number-RReIgE2V.js";const ye=({focusThumbOnChange:d=!0,...V})=>{d||(V.isReadOnly=!0);let{id:E,name:A,value:Q,defaultValue:X,min:c=0,max:l,step:T=1,onChange:G,onChangeStart:J,onChangeEnd:W,thumbColor:B,required:K,disabled:C,readOnly:h,...s}=be(V);const Y=q(J),S=q(W),[Z,w]=ue({value:Q,defaultValue:X??c+(l-c)/2,onChange:G}),a=F(Z,c,l),U=ve(a,c,l),[$,j]=r.useState(!1),P=!(C||h),m=T||(l-c)/100,k=(l-c)/10,z=r.useRef(null),x=r.useRef(null),y=r.useRef(null),o=le({value:a,min:c,max:l,step:T,isInteractive:P,eventSource:null,focusThumbOnChange:d}),b=ie(y),_=r.useCallback(e=>{var O;if(!x.current)return;const{min:t,max:n,step:u}=o.current;o.current.eventSource="pointer";const{left:f,width:ae}=x.current.getBoundingClientRect(),{clientX:se}=((O=e.touches)==null?void 0:O[0])??e;let ce=(se-f)/ae,p=Ce(ce,t,n);return u&&(p=parseFloat(M(p,t,u))),p=F(p,t,n),p},[o]),L=e=>{const{value:t}=o.current,n=_(e);n!=null&&n!==t&&w(n)},ee=r.useCallback(()=>{const{focusThumbOnChange:e}=o.current;e&&setTimeout(()=>{var t;return(t=y.current)==null?void 0:t.focus()})},[o]),i=r.useCallback(e=>{const{isInteractive:t,min:n,max:u}=o.current;t&&(e=parseFloat(M(e,n,m)),e=F(e,n,u),w(e))},[w,o,m]),g=r.useCallback((e=m)=>i(a+e),[i,a,m]),v=r.useCallback((e=m)=>i(a-e),[i,a,m]),N=r.useCallback(e=>{const{min:t,max:n}=o.current,f={ArrowRight:()=>g(),ArrowUp:()=>g(),ArrowLeft:()=>v(),ArrowDown:()=>v(),PageUp:()=>g(k),PageDown:()=>v(k),Home:()=>i(t),End:()=>i(n)}[e.key];f&&(e.preventDefault(),e.stopPropagation(),f(e),o.current.eventSource="keyboard")},[i,o,v,g,k]);me(z,{onSessionStart:e=>{const{isInteractive:t,value:n}=o.current;t&&(j(!0),ee(),L(e),Y(n))},onSessionEnd:()=>{const{isInteractive:e,value:t}=o.current;e&&(j(!1),S(t))},onMove:e=>{const{isInteractive:t}=o.current;t&&L(e)}}),fe(()=>{const{eventSource:e,value:t}=o.current;e==="keyboard"&&S(t)},[a,S]);const te=r.useCallback((e={},t=null)=>{const{width:n}=b??{width:0},u={...e.style,...s.style,paddingInline:`${n/2}px`};return{...e,...de(s,["aria-readonly"]),ref:I(t,z),tabIndex:-1,style:u}},[s,b]),ne=r.useCallback((e={},t=null)=>({...R(s,H),...e,id:E,ref:t,type:"hidden",name:A,value:a,required:K,disabled:C,readOnly:h}),[C,E,A,h,K,s,a]),oe=r.useCallback((e={},t=null)=>({...R(s,ge({omit:["aria-readonly"]})),...e,ref:I(t,x)}),[s]),re=r.useCallback((e={},t=null)=>{const n=U,{width:u}=b??{width:0},f={...e.style,position:"absolute",userSelect:"none",touchAction:"none",left:`calc(${n}% - ${u/2}px)`};return{"aria-label":"Slider thumb",bg:B??`hsl(${a}, 100%, 50%)`,...R(s,H),...e,ref:I(t,y),tabIndex:P&&d?0:void 0,role:"slider","aria-valuenow":a,"aria-valuemin":c,"aria-valuemax":l,"data-active":pe($&&d),onKeyDown:D(e.onKeyDown,N),onFocus:D(e.onFocus,s.onFocus),onBlur:D(e.onBlur,s.onBlur),style:f}},[B,d,$,P,c,l,N,s,U,b,a]);return{value:a,getContainerProps:te,getTrackProps:oe,getInputProps:ne,getThumbProps:re}};export{ye as u};
