import{a as r,j as n,F as j}from"./jsx-runtime-29545a09.js";import{C as l}from"./collapse-6ccbe620.js";import{u as a}from"./index-d68d7549.js";import{V as u}from"./stack-23c26cc7.js";import{B as i}from"./button-26cd920e.js";import{B as t}from"./box-91731c35.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./utils-2f2a938d.js";import"./factory-1710cdec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./theme-8ffbcb8d.js";import"./loading-2f69458e.js";import"./index-9e3e25b4.js";import"./index-1b18eee5.js";import"./index-93cf4015.js";import"./icon-a96e6c8c.js";import"./use-component-style-41572cdb.js";const Y={title:"Components / Transitions / Collapse",component:l},s=()=>{const[e,{toggle:o}]=a();return r(u,{gap:0,align:"flex-start",children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,children:n(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[e,{toggle:o}]=a();return r(u,{gap:0,align:"flex-start",children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,duration:.7,children:n(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},p=()=>{const[e,{toggle:o}]=a();return r(u,{gap:0,align:"flex-start",children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,unmountOnExit:!0,children:n(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(t,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},d=()=>{const[e,{toggle:o}]=a();return r(u,{gap:0,align:"flex-start",children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,animationOpacity:!1,children:n(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(t,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[e,{toggle:o}]=a();return r(j,{children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,startingHeight:20,children:r(t,{color:"purple.500",children:["私の戦闘力は530000です。",n("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var g,h,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align='flex-start'>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white' mt='md'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var C,x,f;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align='flex-start'>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} duration={0.7}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white' mt='md'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,O,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align='flex-start'>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} unmountOnExit>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white' mt='md'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white' mt='md'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var b,S,P;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align='flex-start'>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} animationOpacity={false}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white' mt='md'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white' mt='md'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(P=(S=d.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var V,y,H;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} startingHeight={20}>
        <Box color='purple.500'>
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>;
}`,...(H=(y=m.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const Z=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{Z as __namedExportsOrder,s as basic,Y as default,d as disabledOpacity,p as exitUnmount,m as startingHeight,c as withDuration};
//# sourceMappingURL=collapse.stories-ada214fc.js.map