import{j as g,a as k}from"./jsx-runtime-29545a09.js";import{u as P}from"./index-db546e9e.js";import{v as x}from"./number-cdadea8f.js";import{o as C,d as h,e as w,y as R}from"./factory-693455ee.js";import{f as T}from"./forward-ref-8b7d2a6f.js";import{a as _}from"./use-component-style-3d3df90d.js";import{o as j}from"./theme-d25050a9.js";const[F,S]=C({name:"ProgressStylesContext",errorMessage:`useProgress returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),B=T((t,i)=>{const[s,n]=_("Progress",t),{className:r,children:e,value:o,min:a,max:m,hasStripe:c,isStripeAnimation:l,isAnimation:u,speed:d,borderRadius:f,rounded:y,...v}=j(n),p=f??y??s.track.borderRadius,b={w:"100%",overflow:"hidden",pos:"relative",...s.track};return g(F,{value:s,children:k(h.div,{ref:i,className:w("ui-progress",r),__css:b,borderRadius:p,...R(v,["filledTrackColor"]),children:[g($,{min:a,max:m,value:o,hasStripe:c,isStripeAnimation:l,isAnimation:u,speed:d,borderRadius:p}),e]})})}),$=({value:t=0,min:i=0,max:s=100,hasStripe:n,isStripeAnimation:r,isAnimation:e,speed:o="1.4s",...a})=>{const m=x(t,i,s),c=S(),l=P({keyframes:{"0%":{bgPosition:"1rem 0"},"100%":{bgPosition:"0 0"}},duration:typeof o=="string"?o:`${o}s`,iterationCount:"infinite",timingFunction:"linear"}),u=P({keyframes:{"0%":{left:"-40%"},"100%":{left:"100%"}},duration:typeof o=="string"?o:`${o}s`,iterationCount:"infinite",timingFunction:"ease"});r=!e&&n&&r;const d={...r?{animation:l}:{},...e?{position:"absolute",willChange:"left",minWidth:"50%",animation:u}:{}},f={w:`${m}%`,h:"100%",...c.filledTrack};return g(h.div,{css:d,__css:f,...a})};export{B as P};
//# sourceMappingURL=progress-df8e52c2.js.map