import{j as u}from"./jsx-runtime-X2b_N9AH.js";import{u as c}from"./index-BBt5KR5O.js";import{B as a}from"./button-D4Wm1JBG.js";import{D}from"./dialog-CMcDoGwP.js";import{T as B}from"./text-B7cjXMz4.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-DcjttzXA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-ripple-DGdpgE18.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-CGV1aZSj.js";import"./loading-D2RTdWov.js";import"./icon-i9DNsLAz.js";import"./index-ZcQ9dmS1.js";import"./theme-provider-blvefFsb.js";import"./use-component-style-Bt4oJcRH.js";import"./index-DsuEdmfO.js";import"./index-gtcoX668.js";import"./Combination-nrDmEbEK.js";import"./component-IvP1ueaU.js";import"./slide-BNfjqWCB.js";import"./utils-qy47cExs.js";import"./fade-xHC_S6-f.js";import"./close-button--PP8EEnm.js";import"./container-portal-CZlBTm5D.js";import"./index-CqS9fqXy.js";import"./defineProperty-CD0dYXUn.js";import"./inheritsLoose-BNvgJjam.js";import"./slide-fade-BCrKcD4j.js";import"./scale-fade-DdhoTvDk.js";const uu={title:"Hooks / useDiclosure"},e=()=>{const{isOpen:n,onOpen:s,onClose:o}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Open Dialog"}),u.jsx(D,{isOpen:n,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:n,onToggle:s}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Please Click"}),n?u.jsx(B,{children:"Hey!"}):null]})},i=()=>{const{isOpen:n,onOpen:s,onClose:o}=c({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:()=>s("This is arg"),children:"Open Dialog"}),u.jsx(D,{isOpen:n,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,C,F;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(F=(C=r.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var d,h,O;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const ou=["basic","useToggle","withChain"];export{ou as __namedExportsOrder,e as basic,uu as default,r as useToggle,i as withChain};