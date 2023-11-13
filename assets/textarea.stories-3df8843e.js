import{a as e,j as a,F as l}from"./jsx-runtime-03b4ddbf.js";import{u as le}from"./index.esm-01877ad2.js";import{u as se,F as m}from"./form-control-a4c7bf52.js";import{f as ie}from"./forward-ref-8b7d2a6f.js";import{u as de}from"./use-component-style-9258d34a.js";import{o as ce}from"./theme-provider-8a6e6dcc.js";import{A as ue,d as me,e as he}from"./factory-94a21dd6.js";import{V as oe}from"./stack-8d88e584.js";import{B as te}from"./button-139bace1.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./loading-9f71b7cc.js";import"./index-79f0243f.js";import"./index-f5d80254.js";import"./index-d0666609.js";import"./icon-78aec9fa.js";const r=ie((d,c)=>{const[o,t]=de("Textarea",d);let{className:n,rows:s,resize:i="none",...u}=ce(t);u=se(u);const ne=s?ue(o,["h","minH","height","minHeight"]):o;return e(me.textarea,{ref:c,className:he("ui-textarea",n),resize:i,__css:ne,...u})}),Re={title:"Components / Forms / Textarea",component:r},h=()=>e(r,{placeholder:"basic"}),p=()=>a(l,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),b=()=>a(l,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),f=()=>a(l,{children:[e(r,{resize:"block",placeholder:"block"}),e(r,{resize:"horizontal",placeholder:"horizontal"}),e(r,{resize:"vertical",placeholder:"vertical"}),e(r,{resize:"none",placeholder:"none"})]}),g=()=>a(l,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),x=()=>a(l,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isDisabled:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),v=()=>a(l,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isReadOnly:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),y=()=>a(l,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isInvalid:!0,label:"Feedback",errorMessage:"Feedback is required.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),S=()=>a(l,{children:[e(r,{placeholder:"default placeholder"}),e(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),T=()=>{var s;const{register:d,handleSubmit:c,watch:o,formState:{errors:t}}=le(),n=i=>console.log("submit:",i);return console.log("watch:",o()),a(oe,{as:"form",onSubmit:c(n),children:[e(m,{isInvalid:!!t.textarea,label:"Feedback",errorMessage:(s=t.textarea)==null?void 0:s.message,children:e(r,{placeholder:"your feedback",...d("textarea",{required:{value:!0,message:"This is required."}})})}),e(te,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},k=()=>{var i;const d={textarea:"孫悟空"},{register:c,handleSubmit:o,watch:t,formState:{errors:n}}=le({defaultValues:d}),s=u=>console.log("submit:",u);return console.log("watch:",t()),a(oe,{as:"form",onSubmit:o(s),children:[e(m,{isInvalid:!!n.textarea,label:"Feedback",errorMessage:(i=n.textarea)==null?void 0:i.message,children:e(r,{placeholder:"your feedback",...c("textarea",{required:{value:!0,message:"This is required."}})})}),e(te,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var F,z,w;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic"></Textarea>;
}`,...(w=(z=h.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var D,C,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="extra small size" size="xs" />
      <Textarea placeholder="small size" size="sm" />
      <Textarea placeholder="medium size" size="md" />
      <Textarea placeholder="large size" size="lg" />
    </>;
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,V,B;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(B=(V=b.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var O,q,M;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <Textarea resize="block" placeholder="block" />
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="none" placeholder="none" />
    </>;
}`,...(M=(q=f.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var H,_,W;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(W=(_=g.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var P,j,N;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Textarea isDisabled variant="outline" placeholder="outline" />
      <Textarea isDisabled variant="filled" placeholder="filled" />
      <Textarea isDisabled variant="flushed" placeholder="flushed" />
      <Textarea isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(N=(j=x.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var A,E,G;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <Textarea isReadOnly variant="outline" placeholder="outline" />
      <Textarea isReadOnly variant="filled" placeholder="filled" />
      <Textarea isReadOnly variant="flushed" placeholder="flushed" />
      <Textarea isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(G=(E=v.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var J,K,L;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Textarea isInvalid variant="outline" placeholder="outline" />
      <Textarea isInvalid variant="filled" placeholder="filled" />
      <Textarea isInvalid variant="flushed" placeholder="flushed" />
      <Textarea isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Feedback" errorMessage="Feedback is required.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(L=(K=y.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,X;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default placeholder" />
      <Textarea placeholder="custom placeholder" _placeholder={{
      opacity: 1,
      color: "gray.500"
    }} />
      <Textarea color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...(X=(U=S.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  type Data = {
    textarea: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.textarea} label="Feedback" errorMessage={errors.textarea?.message}>
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          value: true,
          message: "This is required."
        }
      })} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  type Data = {
    textarea: string;
  };
  const defaultValues: Data = {
    textarea: "孫悟空"
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.textarea} label="Feedback" errorMessage={errors.textarea?.message}>
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          value: true,
          message: "This is required."
        }
      })} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ae=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Ve=["basic","withSize","withVariant","withResize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","reactHookForm","reactHookFormWithDefaultValue"];export{Ve as __namedExportsOrder,h as basic,Re as default,x as isDisabled,y as isInvalid,v as isReadonly,T as reactHookForm,k as reactHookFormWithDefaultValue,S as stylingPlaceholder,g as withBorderColor,f as withResize,p as withSize,b as withVariant};
//# sourceMappingURL=textarea.stories-3df8843e.js.map