import{a as s,j as a}from"./jsx-runtime-TtYKBvr-.js";import{u as oa}from"./index-BNffvJ1E.js";import{u as ea,A as t}from"./avatar-n0yzirf5.js";import{f as X}from"./forward-ref-6T0UNPU-.js";import{p as sa,i as S,q as na,u as b,a as Z}from"./factory-4UsipNZi.js";import{r as ma}from"./index-IybTgENJ.js";import{u as ia}from"./use-component-style-46I8_shN.js";import{o as ca}from"./theme-provider-gSdpxlBZ.js";import{W as ua}from"./flex-eRxwkj8z.js";import"./index-gWY0u-sb.js";import"./index-TQAHVxfE.js";import"./icon-_M--SPCM.js";import"./index-4xX5BTts.js";import"./use-image-KQ-xtBk1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";const aa=X((e,H)=>{const[n]=ia("Avatar",e),{className:Y,max:o,borderColor:A,gap:m="-sm",borderRadius:f="full",rounded:x="full",children:z,...y}=ca(e);let r=sa(z);const i=S(o)?0:r.length-o;r=S(o)?r:r.slice(0,o),r=r.reverse();const _=r.map((w,ra)=>ma.cloneElement(w,na({marginEnd:ra?m:0,size:e.size,borderColor:w.props.borderColor??A,borderWidth:"2px"})));return s(b.div,{ref:H,className:Z("ui-avatar-group",Y),__css:{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end",alignItems:"center",...n.group},...y,children:[i>0?a(b.span,{className:"ui-avatar__excess",borderRadius:f,rounded:x,ms:m,__css:{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",flexShrink:0,textAlign:"center",textTransform:"uppercase",fontWeight:"medium",borderWidth:"2px",...n.excess},children:`+${i}`}):null,_]})}),da={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},ta=X(({className:e,boxSize:H="1em",placement:n="bottom-end",ping:Y,pingColor:o=["blackAlpha.400","whiteAlpha.500"],pingDuration:A="1.4s",pingCount:m="infinite",pingScale:f=1.8,children:x,...z},y)=>{const r=ea(),i=oa({keyframes:{"75%, 100%":{transform:`scale(${f})`,opacity:0}},fillMode:"forwards",duration:A,timingFunction:"cubic-bezier(0, 0, 0.2, 1)",iterationCount:m}),_={position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",...da[n],...r.badge};return s(b.div,{ref:y,className:Z("ui-avatar__badge",e),boxSize:H,__css:_,...z,children:[x,Y?a(b.div,{className:"ui-avatar__badge__ping",__css:{position:"absolute",boxSize:"full",rounded:"full",opacity:.75,zIndex:-1,bg:o},animation:i}):null]})}),Ca={title:"Components / Media And Icons / Avatar",component:t},c=()=>a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),u=()=>s(ua,{gap:"md",children:[a(t,{size:"2xs",name:"Hirotomo Yamada"}),a(t,{size:"xs",name:"Hirotomo Yamada"}),a(t,{size:"sm",name:"Hirotomo Yamada"}),a(t,{size:"md",name:"Hirotomo Yamada"}),a(t,{size:"lg",name:"Hirotomo Yamada"}),a(t,{size:"xl",name:"Hirotomo Yamada"}),a(t,{size:"2xl",name:"Hirotomo Yamada"})]}),d=()=>a(t,{name:"Hirotomo Yamada"}),p=()=>a(t,{src:"https://avatars.githubusercontent.com/u/84060430?v=4",alt:"Hirotomo Yamada"}),v=()=>a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",children:a(ta,{bg:"primary"})}),l=()=>a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",children:a(ta,{bg:"primary",ping:!0,pingColor:"primary.400"})}),h=()=>s(aa,{children:[a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})]}),g=()=>s(aa,{max:3,children:[a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})]});var C,G,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />;
}`,...(I=(G=c.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var N,W,j;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Avatar size="2xs" name="Hirotomo Yamada" />
      <Avatar size="xs" name="Hirotomo Yamada" />
      <Avatar size="sm" name="Hirotomo Yamada" />
      <Avatar size="md" name="Hirotomo Yamada" />
      <Avatar size="lg" name="Hirotomo Yamada" />
      <Avatar size="xl" name="Hirotomo Yamada" />
      <Avatar size="2xl" name="Hirotomo Yamada" />
    </Wrap>;
}`,...(j=(W=u.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var E,B,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" />;
}`,...(M=(B=d.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var k,P,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Avatar src="https://avatars.githubusercontent.com/u/84060430?v=4" alt="Hirotomo Yamada" />;
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,U,$;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4">
      <AvatarBadge bg="primary" />
    </Avatar>;
}`,...($=(U=v.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var q,D,F;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4">
      <AvatarBadge bg="primary" ping pingColor="primary.400" />
    </Avatar>;
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var O,V,J;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <AvatarGroup>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </AvatarGroup>;
}`,...(J=(V=h.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var K,L,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <AvatarGroup max={3}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </AvatarGroup>;
}`,...(Q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const Ga=["basic","withSize","withName","withImage","withBarge","withPing","useGroup","withGroupMax"];export{Ga as __namedExportsOrder,c as basic,Ca as default,h as useGroup,v as withBarge,g as withGroupMax,p as withImage,d as withName,l as withPing,u as withSize};