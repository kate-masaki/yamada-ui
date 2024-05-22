import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as ke,m as Re}from"./fontawesome-icon-DpaxtiZU.js";import{r as be}from"./index-uCp2LrAq.js";import{u as Be}from"./index.esm-TLwx9zN6.js";import{u as _e,f as We,F as v}from"./form-control-BtOL3irc.js";import{c as qe}from"./icon-i9DNsLAz.js";import{l as He,S as Me,_ as Te,Q as Ge,u as d,c as xe,t as Qe,j as Ye,$ as $e}from"./factory-DcjttzXA.js";import{f as I}from"./forward-ref-Dr5Hqd9a.js";import{a as Je}from"./use-component-style-Bt4oJcRH.js";import{o as Ke}from"./theme-provider-blvefFsb.js";import{V as fe}from"./stack-hhk-VzsX.js";import{B as Ce}from"./button-D4Wm1JBG.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ZcQ9dmS1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";import"./use-ripple-DGdpgE18.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-CGV1aZSj.js";import"./loading-D2RTdWov.js";const[Le,Ue]=He({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),a=I((t,i)=>{const[r,s]=Je("NativeSelect",t);let{className:u,children:n,placeholderInOptions:o=!0,color:c,h:je,height:Ae,minH:Ee,minHeight:Oe,items:w=[],placeholder:z,containerProps:ge,iconProps:De,...p}=Ke(s);p=_e(p);const{"aria-readonly":Ze,...V}=Me(p,We),[ye,Ie]=Te(Ge(p,["aria-readonly"]),$e);let P=[];return!n&&w.length&&(P=w.map((h,k)=>{if("value"in h){const{label:O,value:g,...D}=h;return e.jsx(l,{value:g,...D,children:O},k)}else if("items"in h){const{label:O,items:g=[],...D}=h;return e.jsx(y,{label:O,...D,children:g.map(({label:we,value:ze,...Ve},Pe)=>e.jsx(l,{value:ze,...Ve,children:we},Pe))},k)}}).filter(Boolean)),e.jsx(Le,{value:r,children:e.jsxs(d.div,{className:"ui-select",__css:{position:"relative",w:"100%",h:"fit-content",color:c,...r.container},...ye,...ge,...V,children:[e.jsxs(d.select,{ref:i,className:xe("ui-select__field",u),__css:{pe:"2rem",h:je??Ae,minH:Ee??Oe,...r.field},...Ie,children:[z?e.jsx(l,{value:"",hidden:!o,children:z}):null,n??P]}),e.jsx(Xe,{...De,...V})]})})}),Xe=({className:t,children:i,...r})=>{const u={position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)",...Ue().icon},o=Qe(i).map(c=>be.cloneElement(c,{focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}}));return e.jsx(d.div,{className:xe("ui-select__icon",t),__css:u,...r,children:Ye(i)?o:e.jsx(qe,{})})},y=I((t,i)=>e.jsx(d.optgroup,{ref:i,...t})),l=I((t,i)=>e.jsx(d.option,{ref:i,...t})),xa={title:"Components / Forms / NativeSelect",component:a},m=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",children:[e.jsxs(y,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(y,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(a,{placeholder:"キャラクターを選択",items:t,"aria-label":"Native Select"})]})},N=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"extra small size",size:"xs","aria-label":"Native Select"}),e.jsx(a,{placeholder:"small size",size:"sm","aria-label":"Native Select"}),e.jsx(a,{placeholder:"medium size",size:"md","aria-label":"Native Select"}),e.jsx(a,{placeholder:"large size",size:"lg","aria-label":"Native Select"})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"default border color","aria-label":"Native Select"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"custom border color","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color","aria-label":"Native Select"})]}),b=()=>e.jsxs(a,{placeholder:"キャラクターを選択",placeholderInOptions:!1,"aria-label":"Native Select",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(v,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(v,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(v,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"Select notifications"})})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",iconProps:{children:e.jsx(ke,{icon:Re})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),j=()=>{const[t,i]=be.useState("孫悟空");return e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",value:t,onChange:r=>i(r.target.value),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},A=()=>{var n;const{register:t,handleSubmit:i,watch:r,formState:{errors:s}}=Be(),u=o=>console.log("submit:",o);return console.log("watch:",r()),e.jsxs(fe,{as:"form",onSubmit:i(u),children:[e.jsx(v,{isInvalid:!!s.select,label:"Who is your favorite character?",errorMessage:(n=s.select)==null?void 0:n.message,children:e.jsxs(a,{placeholder:"キャラクターを選択",...t("select",{required:{value:!0,message:"This is required."}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(Ce,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},E=()=>{var o;const t={select:"孫悟空"},{register:i,handleSubmit:r,watch:s,formState:{errors:u}}=Be({defaultValues:t}),n=c=>console.log("submit:",c);return console.log("watch:",s()),e.jsxs(fe,{as:"form",onSubmit:r(n),children:[e.jsx(v,{isInvalid:!!u.select,label:"Who is your favorite character?",errorMessage:(o=u.select)==null?void 0:o.message,children:e.jsxs(a,{placeholder:"キャラクターを選択",...i("select",{required:{value:!0,message:"This is required."}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(Ce,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var R,_,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const items: NativeSelectItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <>
      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select">
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select">
        <NativeOptionGroup label="地球人">
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="孫悟飯">孫悟飯</NativeOption>
          <NativeOption value="クリリン">クリリン</NativeOption>
        </NativeOptionGroup>

        <NativeOptionGroup label="フリーザ軍">
          <NativeOption value="フリーザ">フリーザ</NativeOption>
          <NativeOption value="ギニュー">ギニュー</NativeOption>
          <NativeOption value="リクーム">リクーム</NativeOption>
          <NativeOption value="バータ">バータ</NativeOption>
          <NativeOption value="ジース">ジース</NativeOption>
          <NativeOption value="グルド">グルド</NativeOption>
        </NativeOptionGroup>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" items={items} aria-label="Native Select" />
    </>;
}`,...(W=(_=m.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var q,H,M;N.parameters={...N.parameters,docs:{...(q=N.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="extra small size" size="xs" aria-label="Native Select" />
      <NativeSelect placeholder="small size" size="sm" aria-label="Native Select" />
      <NativeSelect placeholder="medium size" size="md" aria-label="Native Select" />
      <NativeSelect placeholder="large size" size="lg" aria-label="Native Select" />
    </>;
}`,...(M=(H=N.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var T,G,Q;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect variant="unstyled" placeholder="unstyled" aria-label="Native Select" />
    </>;
}`,...(Q=(G=S.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Y,$,J;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="default border color" aria-label="Native Select" />
      <NativeSelect focusBorderColor="green.500" placeholder="custom border color" aria-label="Native Select" />
      <NativeSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" aria-label="Native Select" />
    </>;
}`,...(J=($=F.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,L,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <NativeSelect placeholder="キャラクターを選択" placeholderInOptions={false} aria-label="Native Select">
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(U=(L=b.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var X,Z,ee;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isDisabled variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isDisabled variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isDisabled variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isDisabled variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,te;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isReadOnly variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(te=(le=x.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,re,ue;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isInvalid variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isInvalid variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isInvalid variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isInvalid variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ue=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ue.source}}};var ne,oe,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" iconProps={{
      color: "primary"
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>
    </>;
}`,...(se=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ce,de,ve;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" value={value} onChange={e => setValue(e.target.value)}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(ve=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var pe,he,me;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  type Data = {
    select: string;
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
      <FormControl isInvalid={!!errors.select} label="Who is your favorite character?" errorMessage={errors.select?.message}>
        <NativeSelect placeholder="キャラクターを選択" {...register("select", {
        required: {
          value: true,
          message: "This is required."
        }
      })}>
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="ベジータ">ベジータ</NativeOption>
          <NativeOption value="フリーザ">フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(me=(he=A.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var Ne,Se,Fe;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  type Data = {
    select: string;
  };
  const defaultValues: Data = {
    select: "孫悟空"
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
      <FormControl isInvalid={!!errors.select} label="Who is your favorite character?" errorMessage={errors.select?.message}>
        <NativeSelect placeholder="キャラクターを選択" {...register("select", {
        required: {
          value: true,
          message: "This is required."
        }
      })}>
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="ベジータ">ベジータ</NativeOption>
          <NativeOption value="フリーザ">フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Fe=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};const fa=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{fa as __namedExportsOrder,m as basic,j as customControl,C as customIcon,xa as default,b as disabledPlaceholderInOptions,B as isDisabled,f as isInvalid,x as isReadonly,A as reactHookForm,E as reactHookFormWithDefaultValue,F as withBorderColor,N as withSize,S as withVariant};