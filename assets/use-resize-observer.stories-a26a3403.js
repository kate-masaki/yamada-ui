import{j as l,F as c,a as o}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-d68d7549.js";import{u}from"./index-7e8c8dc3.js";import{B as g}from"./button-139bace1.js";import{T as f}from"./text-c933cc10.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-94a21dd6.js";import"./forward-ref-8b7d2a6f.js";import"./loading-9f71b7cc.js";import"./index-79f0243f.js";import"./theme-provider-8a6e6dcc.js";import"./index-f5d80254.js";import"./index-d0666609.js";import"./icon-78aec9fa.js";import"./use-component-style-9258d34a.js";const E={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} onClick={toggle} w={flg ? "xl" : "sm"} h={flg ? "xl" : "sm"}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const F=["basic"];export{F as __namedExportsOrder,e as basic,E as default};
//# sourceMappingURL=use-resize-observer.stories-a26a3403.js.map