import{j as E}from"./jsx-runtime-X2b_N9AH.js";import{r as s}from"./index-uCp2LrAq.js";import{B as f}from"./box-DseOx6RT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-DcjttzXA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";const x=["keypress","mousemove","touchmove","click","scroll"],v={events:x,initialState:!0},w=(e,u)=>{const{events:r,initialState:m}={...v,...u},[p,i]=s.useState(m),o=s.useRef(null);return s.useEffect(()=>{const a=()=>{i(!1),o.current&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{i(!0)},e)};return r.forEach(n=>document.addEventListener(n,a)),()=>{r.forEach(n=>document.removeEventListener(n,a))}},[r,e]),p},D={title:"Hooks / useIdle"},t=()=>{const e=w(2e3);return E.jsxs(f,{bg:e?"blue.500":"red.500",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:["Current state: ",e?"idle":"not idle"]})};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const idle = useIdle(2000);
  return <Box bg={idle ? "blue.500" : "red.500"} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      Current state: {idle ? "idle" : "not idle"}
    </Box>;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const L=["basic"];export{L as __namedExportsOrder,t as basic,D as default};