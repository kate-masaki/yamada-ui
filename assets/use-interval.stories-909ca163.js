import{j as m}from"./jsx-runtime-03b4ddbf.js";import{r as c}from"./index-76fb7be0.js";import{u as p}from"./index-799587d3.js";import{B as u}from"./box-4174d02c.js";import"./_commonjsHelpers-de833af9.js";import"./factory-94a21dd6.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=c.useState(1);return p(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
//# sourceMappingURL=use-interval.stories-909ca163.js.map