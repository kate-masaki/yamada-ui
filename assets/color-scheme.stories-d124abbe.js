import{a as d}from"./jsx-runtime-29545a09.js";import{a as p,b as a}from"./factory-1710cdec.js";import{B as u}from"./box-91731c35.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";const x={title:"System / Styles / Color Scheme"},o=()=>{const{colorMode:e}=p();return d(u,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})},r=()=>{const{colorMode:e}=p(),m=a("blackAlpha.800","whiteAlpha.800"),h=a("whiteAlpha.800","blackAlpha.800");return d(u,{bg:m,p:"md",rounded:"md",color:h,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})};var t,l,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg={['blackAlpha.800', 'whiteAlpha.800']} p='md' rounded='md' color={['whiteAlpha.800', 'blackAlpha.800']} transitionProperty='all' transitionDuration='normal'>
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,n,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
  const color = useColorModeValue('whiteAlpha.800', 'blackAlpha.800');
  return <Box bg={bg} p='md' rounded='md' color={color} transitionProperty='all' transitionDuration='normal'>
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const C=["basic","useHook"];export{C as __namedExportsOrder,o as basic,x as default,r as useHook};
//# sourceMappingURL=color-scheme.stories-d124abbe.js.map