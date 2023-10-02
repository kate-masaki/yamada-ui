import{j as e,a as t,F as d}from"./jsx-runtime-29545a09.js";import{I as _e,b as je}from"./fontawesome-icon-e82242e8.js";import{r as ye}from"./index-76fb7be0.js";import{u as Ce}from"./index.esm-e2e4d158.js";import{u as Te,f as Ee,F as h}from"./form-control-758fc5f1.js";import{o as Ge,z as Ae,P as Qe,l as _,d as p,e as Ie,s as Ue,j as Ye,Q as Je}from"./factory-693455ee.js";import{c as Ke}from"./icon-c50323e0.js";import{f as V}from"./forward-ref-8b7d2a6f.js";import{a as Le}from"./use-component-style-3d3df90d.js";import{o as Xe}from"./theme-d25050a9.js";import{V as we}from"./stack-ac8f3a97.js";import{B as De}from"./button-d7b0a30b.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-3527803c.js";import"./loading-ed892129.js";import"./index-d91aa436.js";import"./index-580b0d9e.js";const[Ze,$e]=Ge({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),l=V((n,r)=>{const[i,u]=Le("Select",n);let{className:o,children:s,placeholderInOptions:c=!0,color:v,h:Fe,height:ze,minH:Pe,minHeight:Ve,options:x=[],value:xe,placeholder:k,containerProps:ke,iconProps:Re,...m}=Xe(u);m=Te(m);const R=Ae(m,Ee),[Be,We]=Qe(m,Je);let B=[];return!s&&x.length&&(B=x.map(({label:W,value:z,...q},H)=>_(z)?e(P,{label:W,...q,children:z.map(({label:qe,value:M,...He},Me)=>_(M)?null:e(a,{value:M,...He,children:qe},Me))},H):e(a,{value:z,...q,children:W},H))),e(Ze,{value:i,children:t(p.div,{className:"ui-native-select",__css:{position:"relative",w:"100%",h:"fit-content",color:v,...i.container},...Be,...ke,...R,children:[t(p.select,{ref:r,className:Ie("ui-native-select-field",o),value:xe,__css:{paddingEnd:"2rem",h:Fe??ze,minH:Pe??Ve,...i.field},...We,children:[k?e(a,{value:"",hidden:!c,children:k}):null,s??B]}),e(el,{...Re,...R})]})})}),el=({className:n,children:r,...i})=>{const o={position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)",...$e().icon},c=Ue(r).map(v=>ye.cloneElement(v,{focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}}));return e(p.div,{className:Ie("ui-native-select-icon",n),__css:o,...i,children:Ye(r)?c:e(Ke,{})})},P=V((n,r)=>e(p.optgroup,{ref:r,...n})),a=V((n,r)=>e(p.option,{ref:r,...n})),Ol={title:"Components / Forms / NativeSelect",component:l},N=()=>t(d,{children:[t(l,{placeholder:"キャラクターを選択",children:[e(a,{value:"孫悟空",children:"孫悟空"}),e(a,{value:"ベジータ",children:"ベジータ"}),e(a,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",children:[t(P,{label:"地球人",children:[e(a,{value:"孫悟空",children:"孫悟空"}),e(a,{value:"孫悟飯",children:"孫悟飯"}),e(a,{value:"クリリン",children:"クリリン"})]}),t(P,{label:"フリーザ軍",children:[e(a,{value:"フリーザ",children:"フリーザ"}),e(a,{value:"ギニュー",children:"ギニュー"}),e(a,{value:"リクーム",children:"リクーム"}),e(a,{value:"バータ",children:"バータ"}),e(a,{value:"ジース",children:"ジース"}),e(a,{value:"グルド",children:"グルド"})]})]}),e(l,{placeholder:"キャラクターを選択",options:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),S=()=>t(d,{children:[e(l,{placeholder:"extra small size",size:"xs"}),e(l,{placeholder:"small size",size:"sm"}),e(l,{placeholder:"medium size",size:"md"}),e(l,{placeholder:"large size",size:"lg"})]}),f=()=>t(d,{children:[e(l,{variant:"outline",placeholder:"outline"}),e(l,{variant:"filled",placeholder:"filled"}),e(l,{variant:"flushed",placeholder:"flushed"}),e(l,{variant:"unstyled",placeholder:"unstyled"})]}),b=()=>t(d,{children:[e(l,{placeholder:"default border color"}),e(l,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),O=()=>t(l,{placeholder:"キャラクターを選択",placeholderInOptions:!1,children:[e(a,{value:"孫悟空",children:"孫悟空"}),e(a,{value:"ベジータ",children:"ベジータ"}),e(a,{value:"フリーザ",children:"フリーザ"})]}),g=()=>t(d,{children:[e(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Select notifications"})})]}),y=()=>t(d,{children:[e(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Select notifications"})})]}),C=()=>t(d,{children:[e(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(l,{placeholder:"Select notifications"})})]}),I=()=>t(d,{children:[t(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(a,{value:"孫悟空",children:"孫悟空"}),e(a,{value:"ベジータ",children:"ベジータ"}),e(a,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",iconProps:{children:e(_e,{icon:je})},children:[e(a,{value:"孫悟空",children:"孫悟空"}),e(a,{value:"ベジータ",children:"ベジータ"}),e(a,{value:"フリーザ",children:"フリーザ"})]})]}),w=()=>{const[n,r]=ye.useState("孫悟空");return t(l,{placeholder:"キャラクターを選択",value:n,onChange:i=>r(i.target.value),children:[e(a,{value:"孫悟空",children:"孫悟空"}),e(a,{value:"ベジータ",children:"ベジータ"}),e(a,{value:"フリーザ",children:"フリーザ"})]})},D=()=>{var s;const{register:n,handleSubmit:r,watch:i,formState:{errors:u}}=Ce(),o=c=>console.log("submit:",c);return console.log("watch:",i()),t(we,{as:"form",onSubmit:r(o),children:[e(h,{isInvalid:!!u.select,label:"Who is your favorite character?",errorMessage:(s=u.select)==null?void 0:s.message,children:t(l,{placeholder:"キャラクターを選択",...n("select",{required:{value:!0,message:"This is required."}}),children:[e(a,{value:"孫悟空",children:"孫悟空"}),e(a,{value:"ベジータ",children:"ベジータ"}),e(a,{value:"フリーザ",children:"フリーザ"})]})}),e(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},F=()=>{var c;const n={select:"孫悟空"},{register:r,handleSubmit:i,watch:u,formState:{errors:o}}=Ce({defaultValues:n}),s=v=>console.log("submit:",v);return console.log("watch:",u()),t(we,{as:"form",onSubmit:i(s),children:[e(h,{isInvalid:!!o.select,label:"Who is your favorite character?",errorMessage:(c=o.select)==null?void 0:c.message,children:t(l,{placeholder:"キャラクターを選択",...r("select",{required:{value:!0,message:"This is required."}}),children:[e(a,{value:"孫悟空",children:"孫悟空"}),e(a,{value:"ベジータ",children:"ベジータ"}),e(a,{value:"フリーザ",children:"フリーザ"})]})}),e(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var j,T,E;N.parameters={...N.parameters,docs:{...(j=N.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const options: UINativeOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
    }]
  }];
  return <>
      <NativeSelect placeholder='キャラクターを選択'>
        <NativeOption value='孫悟空'>孫悟空</NativeOption>
        <NativeOption value='ベジータ'>ベジータ</NativeOption>
        <NativeOption value='フリーザ'>フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder='キャラクターを選択'>
        <NativeOptionGroup label='地球人'>
          <NativeOption value='孫悟空'>孫悟空</NativeOption>
          <NativeOption value='孫悟飯'>孫悟飯</NativeOption>
          <NativeOption value='クリリン'>クリリン</NativeOption>
        </NativeOptionGroup>

        <NativeOptionGroup label='フリーザ軍'>
          <NativeOption value='フリーザ'>フリーザ</NativeOption>
          <NativeOption value='ギニュー'>ギニュー</NativeOption>
          <NativeOption value='リクーム'>リクーム</NativeOption>
          <NativeOption value='バータ'>バータ</NativeOption>
          <NativeOption value='ジース'>ジース</NativeOption>
          <NativeOption value='グルド'>グルド</NativeOption>
        </NativeOptionGroup>
      </NativeSelect>

      <NativeSelect placeholder='キャラクターを選択' options={options} />
    </>;
}`,...(E=(T=N.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var G,A,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder='extra small size' size='xs' />
      <NativeSelect placeholder='small size' size='sm' />
      <NativeSelect placeholder='medium size' size='md' />
      <NativeSelect placeholder='large size' size='lg' />
    </>;
}`,...(Q=(A=S.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var U,Y,J;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant='outline' placeholder='outline' />
      <NativeSelect variant='filled' placeholder='filled' />
      <NativeSelect variant='flushed' placeholder='flushed' />
      <NativeSelect variant='unstyled' placeholder='unstyled' />
    </>;
}`,...(J=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,L,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder='default border color' />
      <NativeSelect focusBorderColor='green.500' placeholder='custom border color' />
      <NativeSelect isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>;
}`,...(X=(L=b.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var Z,$,ee;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <NativeSelect placeholder='キャラクターを選択' placeholderInOptions={false}>
      <NativeOption value='孫悟空'>孫悟空</NativeOption>
      <NativeOption value='ベジータ'>ベジータ</NativeOption>
      <NativeOption value='フリーザ'>フリーザ</NativeOption>
    </NativeSelect>;
}`,...(ee=($=O.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var le,ae,te;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isDisabled variant='outline' placeholder='outline' />
      <NativeSelect isDisabled variant='filled' placeholder='filled' />
      <NativeSelect isDisabled variant='flushed' placeholder='flushed' />
      <NativeSelect isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <NativeSelect placeholder='Select notifications' />
      </FormControl>
    </>;
}`,...(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isReadOnly variant='outline' placeholder='outline' />
      <NativeSelect isReadOnly variant='filled' placeholder='filled' />
      <NativeSelect isReadOnly variant='flushed' placeholder='flushed' />
      <NativeSelect isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <NativeSelect placeholder='Select notifications' />
      </FormControl>
    </>;
}`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,se,ce;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isInvalid variant='outline' placeholder='outline' />
      <NativeSelect isInvalid variant='filled' placeholder='filled' />
      <NativeSelect isInvalid variant='flushed' placeholder='flushed' />
      <NativeSelect isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Which notifications would you like to receive?' errorMessage='This is required.'>
        <NativeSelect placeholder='Select notifications' />
      </FormControl>
    </>;
}`,...(ce=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,ue,ve;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder='キャラクターを選択' iconProps={{
      color: 'primary'
    }}>
        <NativeOption value='孫悟空'>孫悟空</NativeOption>
        <NativeOption value='ベジータ'>ベジータ</NativeOption>
        <NativeOption value='フリーザ'>フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder='キャラクターを選択' iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <NativeOption value='孫悟空'>孫悟空</NativeOption>
        <NativeOption value='ベジータ'>ベジータ</NativeOption>
        <NativeOption value='フリーザ'>フリーザ</NativeOption>
      </NativeSelect>
    </>;
}`,...(ve=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};var pe,he,me;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('孫悟空');
  return <NativeSelect placeholder='キャラクターを選択' value={value} onChange={e => setValue(e.target.value)}>
      <NativeOption value='孫悟空'>孫悟空</NativeOption>
      <NativeOption value='ベジータ'>ベジータ</NativeOption>
      <NativeOption value='フリーザ'>フリーザ</NativeOption>
    </NativeSelect>;
}`,...(me=(he=w.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var Ne,Se,fe;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.select} label='Who is your favorite character?' errorMessage={errors.select?.message}>
        <NativeSelect placeholder='キャラクターを選択' {...register('select', {
        required: {
          value: true,
          message: 'This is required.'
        }
      })}>
          <NativeOption value='孫悟空'>孫悟空</NativeOption>
          <NativeOption value='ベジータ'>ベジータ</NativeOption>
          <NativeOption value='フリーザ'>フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(fe=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var be,Oe,ge;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  type Data = {
    select: string;
  };
  const defaultValues: Data = {
    select: '孫悟空'
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.select} label='Who is your favorite character?' errorMessage={errors.select?.message}>
        <NativeSelect placeholder='キャラクターを選択' {...register('select', {
        required: {
          value: true,
          message: 'This is required.'
        }
      })}>
          <NativeOption value='孫悟空'>孫悟空</NativeOption>
          <NativeOption value='ベジータ'>ベジータ</NativeOption>
          <NativeOption value='フリーザ'>フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(ge=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:ge.source}}};const gl=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{gl as __namedExportsOrder,N as basic,w as customControl,I as customIcon,Ol as default,O as disabledPlaceholderInOptions,g as isDisabled,C as isInvalid,y as isReadonly,D as reactHookForm,F as reactHookFormWithDefaultValue,b as withBorderColor,S as withSize,f as withVariant};
//# sourceMappingURL=native-select.stories-75384ce5.js.map