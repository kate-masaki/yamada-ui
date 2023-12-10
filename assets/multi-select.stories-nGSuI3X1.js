import{j as e,a as r,F as p}from"./jsx-runtime-TtYKBvr-.js";import{I as ue,m as cn,o as sn,d as un}from"./fontawesome-icon-ZF81hbra.js";import{r as se}from"./index-IybTgENJ.js";import{u as Al,C as M}from"./index.esm-PVkfQNar.js";import{O as l,a as d,u as dn,S as pn,b as hn,f as vn,c as mn,d as On,e as bn}from"./option-JSMYVecI.js";import{P as Sn,a as fn}from"./popover-content-66z1cb3b.js";import{f as Jl}from"./forward-ref-6T0UNPU-.js";import{u as gn}from"./use-component-style-cxLt7Ns7.js";import{o as Mn}from"./theme-provider-RZopMVJP.js";import{p as Cn,u as g,a as Kl,h as yn}from"./factory-BpP3TutA.js";import{T as Oe}from"./tag-a1gRkOTD.js";import{F as O}from"./form-control-BdUo61J_.js";import{V as Ql}from"./stack-U7fyOJfq.js";import{B as Ul}from"./button-Qh4ZXxa_.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-C1O_Nmpw.js";import"./index-3Y8obiWq.js";import"./index-nHolorTc.js";import"./index-hj-GFWeP.js";import"./index-IsKhnU0y.js";import"./index-Ck3mU_gS.js";import"./index-0PpLu8TH.js";import"./index-lHyp1QpY.js";import"./index-gWY0u-sb.js";import"./index-czoUJTU6.js";import"./index-FwFF-Qz9.js";import"./index-EfP4_iuN.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./motion-AgWUVtfu.js";import"./slide-fade-890EqpEs.js";import"./index-GPdqE8CR.js";import"./utils-g9VGj7JG.js";import"./scale-fade-lfXQbwaG.js";import"./close-button-hib_kAYl.js";import"./use-ripple-XZ8Hx3Ay.js";import"./motion-SXgmxp4L.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./loading-An8bmO0F.js";const n=Jl((c,o)=>{const[s,h]=gn("MultiSelect",c);let{className:i,defaultValue:u=[],component:b,separator:v,isClearable:m=!0,items:a=[],color:t,h:C,height:I,minH:F,minHeight:ne,closeOnSelect:re=!1,containerProps:y,listProps:S,iconProps:w,clearIconProps:f,children:D,...te}=Mn(h);const de=Cn(D);let ae=[];!de.length&&a.length&&(ae=a.map((P,me)=>{if("value"in P){const{label:oe,value:ie,...ce}=P;return e(l,{value:ie,...ce,children:oe},me)}else if("items"in P){const{label:oe,items:ie=[],...ce}=P;return e(d,{label:oe??"",...ce,children:ie.map(({label:rn,value:tn,...an},on)=>e(l,{value:tn,...an,children:rn},on))},me)}}).filter(Boolean));let pe=!de.length&&!ae.length;const{value:he,descendants:Xl,formControlProps:ve,getPopoverProps:Yl,getContainerProps:Zl,getFieldProps:$l,placeholder:Ll,onClear:en,...ln}=dn({...te,defaultValue:u,placeholderInOptions:!1,closeOnSelect:re,isEmpty:pe});C??(C=I),F??(F=ne);const nn={w:"100%",h:"fit-content",color:t,...s.container};return e(pn,{value:Xl,children:e(hn,{value:{...ln,value:he,placeholder:Ll,styles:s},children:e(Sn,{...Yl(),children:r(g.div,{className:Kl("ui-multi-select",i),__css:nn,...Zl(y),children:[r(g.div,{className:"ui-multi-select__inner",__css:{position:"relative",...s.inner},children:[e(fn,{children:e(wn,{component:b,separator:v,h:C,minH:F,...$l({},o)})}),m&&he.length?e(vn,{...f,onClick:yn(f==null?void 0:f.onClick,en),...ve}):e(mn,{...w,...ve})]}),pe?null:e(On,{...S,children:D??ae})]})})})})}),wn=Jl(({className:c,component:o,separator:s=",",isTruncated:h,noOfLines:i=1,h:u,minH:b,...v},m)=>{const{value:a,label:t,onChange:C,placeholder:I,styles:F}=bn(),ne=se.useMemo(()=>t!=null&&t.length?o?e(g.span,{isTruncated:h,noOfLines:i,children:t.map((y,S)=>{const w=te=>{te.stopPropagation(),C(a[S])},f=o({value:a[S],label:y,index:S,onRemove:w}),D={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return f?se.cloneElement(f,{style:D}):null})}):e(g.span,{isTruncated:h,noOfLines:i,children:t.map((y,S)=>{const w=t.length===S+1;return r(g.span,{display:"inline-block",me:"0.25rem",children:[y,w?null:s]},S)})}):e(g.span,{noOfLines:i,children:I}),[t,h,i,C,I,s,o,a]),re={paddingEnd:"2rem",h:u,minH:b,display:"flex",alignItems:"center",...F.field};return e(g.div,{ref:m,className:Kl("ui-multi-select__field",c),__css:re,py:t!=null&&t.length&&o?"0.125rem":void 0,...v,children:ne})}),dr={title:"Components / Forms / MultiSelect",component:n},V=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),e(n,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),q=()=>r(p,{children:[e(n,{placeholder:"extra small size",size:"xs"}),e(n,{placeholder:"small size",size:"sm"}),e(n,{placeholder:"medium size",size:"md"}),e(n,{placeholder:"large size",size:"lg"})]}),x=()=>r(p,{children:[e(n,{variant:"outline",placeholder:"outline"}),e(n,{variant:"filled",placeholder:"filled"}),e(n,{variant:"flushed",placeholder:"flushed"}),e(n,{variant:"unstyled",placeholder:"unstyled"})]}),W=()=>r(n,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>r(p,{children:[e(n,{placeholder:"default border color"}),e(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(n,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),k=()=>r(n,{placeholder:"キャラクターを選択",separator:";",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",component:({label:c})=>e(Oe,{children:c}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",component:({label:c,onRemove:o})=>e(Oe,{onClose:o,children:c}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),B=()=>r(n,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),z=()=>r(n,{placeholder:"キャラクターを選択",maxSelectedValues:3,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),R=()=>r(n,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),_=()=>r(n,{placeholder:"キャラクターを選択",isClearable:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>r(n,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>r(n,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>r(n,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),j=()=>r(n,{placeholder:"キャラクターを選択",gutter:32,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),A=()=>r(n,{placeholder:"キャラクターを選択",duration:.4,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>r(p,{children:[e(n,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(n,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(n,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(n,{placeholder:"Select notifications"})})]}),K=()=>r(p,{children:[e(n,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(n,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(n,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(n,{placeholder:"Select notifications"})})]}),Q=()=>r(p,{children:[e(n,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(n,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(n,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(n,{placeholder:"Select notifications"})})]}),U=()=>r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",iconProps:{children:e(ue,{icon:cn})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),Z=()=>r(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e(ue,{icon:sn,w:"0.5em"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),$=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",optionProps:{icon:e(ue,{icon:un,color:"green.500"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),L=()=>{const[c,o]=se.useState(["孫悟空"]);return r(n,{placeholder:"キャラクターを選択",value:c,onChange:o,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})},ee=()=>{var b,v,m;const c=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:o,handleSubmit:s,watch:h,formState:{errors:i}}=Al(),u=a=>console.log("submit:",a);return console.log("watch:",h()),r(Ql,{as:"form",onSubmit:s(u),children:[e(O,{isInvalid:!!i.select1,label:"Who is your favorite character?",errorMessage:(b=i.select1)==null?void 0:b.message,children:e(M,{name:"select1",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>r(n,{placeholder:"キャラクターを選択",...a,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!i.select2,label:"Who is your favorite character?",errorMessage:(v=i.select2)==null?void 0:v.message,children:e(M,{name:"select2",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>r(n,{placeholder:"キャラクターを選択",...a,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!i.select3,label:"Who is your favorite character?",errorMessage:(m=i.select3)==null?void 0:m.message,children:e(M,{name:"select3",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e(n,{placeholder:"キャラクターを選択",...a,items:c})})}),e(Ul,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},le=()=>{var v,m,a;const c={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:s,handleSubmit:h,watch:i,formState:{errors:u}}=Al({defaultValues:c}),b=t=>console.log("submit:",t);return console.log("watch:",i()),r(Ql,{as:"form",onSubmit:h(b),children:[e(O,{isInvalid:!!u.select1,label:"Who is your favorite character?",errorMessage:(v=u.select1)==null?void 0:v.message,children:e(M,{name:"select1",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>r(n,{placeholder:"キャラクターを選択",...t,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!u.select2,label:"Who is your favorite character?",errorMessage:(m=u.select2)==null?void 0:m.message,children:e(M,{name:"select2",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>r(n,{placeholder:"キャラクターを選択",...t,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!u.select3,label:"Who is your favorite character?",errorMessage:(a=u.select3)==null?void 0:a.message,children:e(M,{name:"select3",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e(n,{placeholder:"キャラクターを選択",...t,items:o})})}),e(Ul,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var be,Se,fe;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const items: SelectItem[] = [{
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
      <MultiSelect placeholder="キャラクターを選択">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択">
        <OptionGroup label="地球人">
          <Option value="孫悟空">孫悟空</Option>
          <Option value="孫悟飯">孫悟飯</Option>
          <Option value="クリリン">クリリン</Option>
        </OptionGroup>

        <OptionGroup label="フリーザ軍">
          <Option value="フリーザ">フリーザ</Option>
          <Option value="ギニュー">ギニュー</Option>
          <Option value="リクーム">リクーム</Option>
          <Option value="バータ">バータ</Option>
          <Option value="ジース">ジース</Option>
          <Option value="グルド">グルド</Option>
        </OptionGroup>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" items={items} />
    </>;
}`,...(fe=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ge,Me,Ce;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="extra small size" size="xs" />
      <MultiSelect placeholder="small size" size="sm" />
      <MultiSelect placeholder="medium size" size="md" />
      <MultiSelect placeholder="large size" size="lg" />
    </>;
}`,...(Ce=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var ye,we,Ie;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Ie=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Fe,De,Pe;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Pe=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Ve,qe,xe;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(xe=(qe=G.parameters)==null?void 0:qe.docs)==null?void 0:xe.source}}};var We,Ge,ke;k.parameters={...k.parameters,docs:{...(We=k.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ke=(Ge=k.parameters)==null?void 0:Ge.docs)==null?void 0:ke.source}}};var Te,Be,ze;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" component={({
      label
    }) => <Tag>{label}</Tag>}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" component={({
      label,
      onRemove
    }) => <Tag onClose={onRemove}>{label}</Tag>}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(ze=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Re,_e,He;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" omitSelectedValues={true}>
      <OptionGroup label="地球人">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="孫悟飯">孫悟飯</Option>
        <Option value="クリリン">クリリン</Option>
      </OptionGroup>

      <OptionGroup label="フリーザ軍">
        <Option value="フリーザ">フリーザ</Option>
        <Option value="ギニュー">ギニュー</Option>
        <Option value="リクーム">リクーム</Option>
        <Option value="バータ">バータ</Option>
        <Option value="ジース">ジース</Option>
        <Option value="グルド">グルド</Option>
      </OptionGroup>
    </MultiSelect>;
}`,...(He=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Ee,Ne,je;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" maxSelectedValues={3}>
      <OptionGroup label="地球人">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="孫悟飯">孫悟飯</Option>
        <Option value="クリリン">クリリン</Option>
      </OptionGroup>

      <OptionGroup label="フリーザ軍">
        <Option value="フリーザ">フリーザ</Option>
        <Option value="ギニュー">ギニュー</Option>
        <Option value="リクーム">リクーム</Option>
        <Option value="バータ">バータ</Option>
        <Option value="ジース">ジース</Option>
        <Option value="グルド">グルド</Option>
      </OptionGroup>
    </MultiSelect>;
}`,...(je=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Ae,Je,Ke;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnSelect={true}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ke=(Je=R.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ue,Xe;_.parameters={..._.parameters,docs:{...(Qe=_.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" isClearable={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Xe=(Ue=_.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;H.parameters={...H.parameters,docs:{...(Ye=H.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnBlur={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...($e=(Ze=H.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var Le,el,ll;E.parameters={...E.parameters,docs:{...(Le=E.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ll=(el=E.parameters)==null?void 0:el.docs)==null?void 0:ll.source}}};var nl,rl,tl;N.parameters={...N.parameters,docs:{...(nl=N.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(tl=(rl=N.parameters)==null?void 0:rl.docs)==null?void 0:tl.source}}};var al,ol,il;j.parameters={...j.parameters,docs:{...(al=j.parameters)==null?void 0:al.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" gutter={32}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(il=(ol=j.parameters)==null?void 0:ol.docs)==null?void 0:il.source}}};var cl,sl,ul;A.parameters={...A.parameters,docs:{...(cl=A.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" duration={0.4}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ul=(sl=A.parameters)==null?void 0:sl.docs)==null?void 0:ul.source}}};var dl,pl,hl;J.parameters={...J.parameters,docs:{...(dl=J.parameters)==null?void 0:dl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isDisabled variant="outline" placeholder="outline" />
      <MultiSelect isDisabled variant="filled" placeholder="filled" />
      <MultiSelect isDisabled variant="flushed" placeholder="flushed" />
      <MultiSelect isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(hl=(pl=J.parameters)==null?void 0:pl.docs)==null?void 0:hl.source}}};var vl,ml,Ol;K.parameters={...K.parameters,docs:{...(vl=K.parameters)==null?void 0:vl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isReadOnly variant="outline" placeholder="outline" />
      <MultiSelect isReadOnly variant="filled" placeholder="filled" />
      <MultiSelect isReadOnly variant="flushed" placeholder="flushed" />
      <MultiSelect isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(Ol=(ml=K.parameters)==null?void 0:ml.docs)==null?void 0:Ol.source}}};var bl,Sl,fl;Q.parameters={...Q.parameters,docs:{...(bl=Q.parameters)==null?void 0:bl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isInvalid variant="outline" placeholder="outline" />
      <MultiSelect isInvalid variant="filled" placeholder="filled" />
      <MultiSelect isInvalid variant="flushed" placeholder="flushed" />
      <MultiSelect isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(fl=(Sl=Q.parameters)==null?void 0:Sl.docs)==null?void 0:fl.source}}};var gl,Ml,Cl;U.parameters={...U.parameters,docs:{...(gl=U.parameters)==null?void 0:gl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Cl=(Ml=U.parameters)==null?void 0:Ml.docs)==null?void 0:Cl.source}}};var yl,wl,Il;X.parameters={...X.parameters,docs:{...(yl=X.parameters)==null?void 0:yl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled isFocusable>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Il=(wl=X.parameters)==null?void 0:wl.docs)==null?void 0:Il.source}}};var Fl,Dl,Pl;Y.parameters={...Y.parameters,docs:{...(Fl=Y.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Pl=(Dl=Y.parameters)==null?void 0:Dl.docs)==null?void 0:Pl.source}}};var Vl,ql,xl;Z.parameters={...Z.parameters,docs:{...(Vl=Z.parameters)==null?void 0:Vl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Icon icon={faTrash} w="0.5em" />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(xl=(ql=Z.parameters)==null?void 0:ql.docs)==null?void 0:xl.source}}};var Wl,Gl,kl;$.parameters={...$.parameters,docs:{...(Wl=$.parameters)==null?void 0:Wl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" optionProps={{
      icon: <Icon icon={faCheck} color="green.500" />
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(kl=(Gl=$.parameters)==null?void 0:Gl.docs)==null?void 0:kl.source}}};var Tl,Bl,zl;L.parameters={...L.parameters,docs:{...(Tl=L.parameters)==null?void 0:Tl.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(zl=(Bl=L.parameters)==null?void 0:Bl.docs)==null?void 0:zl.source}}};var Rl,_l,Hl;ee.parameters={...ee.parameters,docs:{...(Rl=ee.parameters)==null?void 0:Rl.docs,source:{originalSource:`() => {
  type Data = {
    select1: string[];
    select2: string[];
    select3: string[];
  };
  const items: SelectItem[] = [{
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
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.select1} label="Who is your favorite character?" errorMessage={errors.select1?.message}>
        <Controller name="select1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select2} label="Who is your favorite character?" errorMessage={errors.select2?.message}>
        <Controller name="select2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <OptionGroup label="地球人">
                <Option value="孫悟空">孫悟空</Option>
                <Option value="孫悟飯">孫悟飯</Option>
                <Option value="クリリン">クリリン</Option>
              </OptionGroup>

              <OptionGroup label="フリーザ軍">
                <Option value="フリーザ">フリーザ</Option>
                <Option value="ギニュー">ギニュー</Option>
                <Option value="リクーム">リクーム</Option>
                <Option value="バータ">バータ</Option>
                <Option value="ジース">ジース</Option>
                <Option value="グルド">グルド</Option>
              </OptionGroup>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select3} label="Who is your favorite character?" errorMessage={errors.select3?.message}>
        <Controller name="select3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Hl=(_l=ee.parameters)==null?void 0:_l.docs)==null?void 0:Hl.source}}};var El,Nl,jl;le.parameters={...le.parameters,docs:{...(El=le.parameters)==null?void 0:El.docs,source:{originalSource:`() => {
  type Data = {
    select1: string[];
    select2: string[];
    select3: string[];
  };
  const defaultValues: Data = {
    select1: ["孫悟空"],
    select2: ["フリーザ"],
    select3: ["リクーム"]
  };
  const items: SelectItem[] = [{
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
  const {
    control,
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
      <FormControl isInvalid={!!errors.select1} label="Who is your favorite character?" errorMessage={errors.select1?.message}>
        <Controller name="select1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select2} label="Who is your favorite character?" errorMessage={errors.select2?.message}>
        <Controller name="select2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <OptionGroup label="地球人">
                <Option value="孫悟空">孫悟空</Option>
                <Option value="孫悟飯">孫悟飯</Option>
                <Option value="クリリン">クリリン</Option>
              </OptionGroup>

              <OptionGroup label="フリーザ軍">
                <Option value="フリーザ">フリーザ</Option>
                <Option value="ギニュー">ギニュー</Option>
                <Option value="リクーム">リクーム</Option>
                <Option value="バータ">バータ</Option>
                <Option value="ジース">ジース</Option>
                <Option value="グルド">グルド</Option>
              </OptionGroup>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select3} label="Who is your favorite character?" errorMessage={errors.select3?.message}>
        <Controller name="select3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(jl=(Nl=le.parameters)==null?void 0:Nl.docs)==null?void 0:jl.source}}};const pr=["basic","withSize","withVariant","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectedValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{pr as __namedExportsOrder,V as basic,Z as customClearIcon,L as customControl,Y as customIcon,$ as customOption,dr as default,H as disabledCloseOnBlur,_ as disabledIsClearable,J as isDisabled,Q as isInvalid,U as isOptionDisabled,X as isOptionFocusable,K as isReadonly,ee as reactHookForm,le as reactHookFormWithDefaultValue,G as withBorderColor,R as withCloseOnSelect,T as withComponent,W as withDefaultValue,A as withDuration,j as withGutter,z as withMaxSelectedValues,N as withOffset,B as withOmitSelectedValues,E as withPlacement,k as withSeparator,q as withSize,x as withVariant};