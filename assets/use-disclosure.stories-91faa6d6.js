import{j as a,F as l,a as o}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-48b20c9b.js";import{D as B}from"./dialog-0233e056.js";import{B as m}from"./button-139bace1.js";import{T as x}from"./text-c933cc10.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-94a21dd6.js";import"./index-f5d80254.js";import"./index-d0666609.js";import"./theme-provider-8a6e6dcc.js";import"./tslib.es6-90f6c3e8.js";import"./slide-5ba45e96.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./utils-5a106adf.js";import"./forward-ref-8b7d2a6f.js";import"./fade-69a890d9.js";import"./close-button-a6cf2d96.js";import"./use-component-style-9258d34a.js";import"./icon-78aec9fa.js";import"./index-79f0243f.js";import"./container-portal-306d6d47.js";import"./index-d3ea75b5.js";import"./extends-90dea224.js";import"./slide-fade-66ef0613.js";import"./scale-fade-7f41862b.js";import"./loading-9f71b7cc.js";const Y={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:n}=p();return a(l,{children:[o(m,{onClick:s,children:"Open Dialog"}),o(B,{isOpen:e,onClose:n,header:"孫悟空",cancel:"わけない",onCancel:n,success:"わける",onSuccess:n,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[o(m,{onClick:s,children:"Please Click"}),e?o(x,{children:"Hey!"}):null]})},c=()=>{const{isOpen:e,onOpen:s,onClose:n}=p({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return a(l,{children:[o(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),o(B,{isOpen:e,onClose:()=>n("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>n("This is arg"),success:"わける",onSuccess:()=>n("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header="孫悟空" cancel="わけない" onCancel={onClose} success="わける" onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var d,h,O;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var T,D,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure({
    onOpen: (...args: string[]) => {
      console.log("Args:", args);
    },
    onClose: (...args: string[]) => {
      console.log("Args:", args);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={() => onClose("This is arg")} header="孫悟空" cancel="わけない" onCancel={() => onClose("This is arg")} success="わける" onSuccess={() => onClose("This is arg")}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const Z=["basic","useToggle","withChain"];export{Z as __namedExportsOrder,r as basic,Y as default,i as useToggle,c as withChain};
//# sourceMappingURL=use-disclosure.stories-91faa6d6.js.map