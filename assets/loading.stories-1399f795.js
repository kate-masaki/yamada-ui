import{j as n,a as d}from"./jsx-runtime-29545a09.js";import{r as x}from"./index-76fb7be0.js";import{M as h}from"./motion-a98de681.js";import{L as T}from"./loading-ed892129.js";import{e as l}from"./extend-config-635e4ebe.js";import{U as m}from"./ui-provider-41cbbe98.js";import{u as p}from"./loading-provider-0787e42e.js";import{C as g}from"./center-56a2af38.js";import{W as u}from"./flex-e3a903c4.js";import{B as o}from"./button-d7b0a30b.js";import{u as L}from"./index-a4c50a71.js";import{V as j}from"./stack-ac8f3a97.js";import{T as v}from"./text-e11ebe79.js";import{j as U}from"./factory-693455ee.js";import"./_commonjsHelpers-de833af9.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./index-3527803c.js";import"./theme-d25050a9.js";import"./index-d91aa436.js";import"./index-580b0d9e.js";import"./icon-c50323e0.js";import"./index-ead2eac5.js";import"./environment-provider-a0a05ab5.js";import"./notice-f3aee0de.js";import"./alert-8c32f34d.js";import"./use-component-style-3d3df90d.js";import"./close-button-bc32ad51.js";import"./index-033cf86e.js";import"./container-portal-76ab62e4.js";import"./index-d3ea75b5.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";const hn={title:"System / Theme / Loading"},z=i=>new Promise(t=>{setTimeout(t,i)}),r=()=>{const i=l({loading:{screen:{icon:{variant:"grid"},duration:5e3},page:{icon:{variant:"grid"},duration:5e3},background:{icon:{variant:"grid"},duration:5e3}}});return n(m,{config:i,children:n(M,{})})},s=()=>{const i=l({loading:{screen:{initialState:!0,icon:{variant:"dots"}},page:{icon:{variant:"dots"}},background:{icon:{variant:"dots"}}}});return n(m,{config:i,children:n(V,{})})},c=()=>{const i=l({loading:{custom:{component:({initialState:t,message:a,duration:e,onFinish:f})=>(L(f,e),n(h,{initial:t?!1:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,transition:{duration:.4,ease:[.4,0,1,1]}}},sx:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999,bg:"blackAlpha.600",w:"100vw",h:"100vh",p:"md",display:"flex",justifyContent:"center",alignItems:"center"},children:d(h,{initial:t?!1:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.95,transition:{duration:.4,ease:[.4,0,1,1]}}},sx:{bg:["white","black"],maxW:"md",p:"md",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"sm",rounded:"md",boxShadow:["lg","dark-lg"]},children:[n(T,{variant:"dots",size:"6xl"}),d(j,{align:"center",mb:"md",gap:"sm",children:[n(v,{children:"Downloading files…"}),a?U(a)?a:n(v,{noOfLines:3,children:a}):null]}),n(o,{size:"sm",onClick:f,children:"Play to background"})]})}))}}});return n(m,{config:i,children:n(D,{})})},M=()=>{const{screen:i,page:t,background:a}=p();return n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:d(u,{gap:"md",children:[n(o,{onClick:()=>i.start(),children:"Start screen loading"}),n(o,{onClick:()=>t.start(),children:"Start page loading"}),n(o,{onClick:()=>a.start(),children:"Start background loading"})]})})},V=()=>{const{screen:i,page:t,background:a}=p(),e=x.useCallback(async()=>{await z(5e3),i.finish()},[i]);return x.useEffect(()=>{e()},[e]),n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:d(u,{gap:"md",children:[n(o,{onClick:()=>i.start(),children:"Start screen loading"}),n(o,{onClick:()=>t.start(),children:"Start page loading"}),n(o,{onClick:()=>a.start(),children:"Start background loading"})]})})},D=()=>{const{custom:i}=p();return n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(u,{gap:"md",children:n(o,{onClick:()=>i.start({duration:1e4}),children:"Start custom loading"})})})};var k,b,y;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      screen: {
        icon: {
          variant: 'grid'
        },
        duration: 5000
      },
      page: {
        icon: {
          variant: 'grid'
        },
        duration: 5000
      },
      background: {
        icon: {
          variant: 'grid'
        },
        duration: 5000
      }
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,S,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      screen: {
        initialState: true,
        icon: {
          variant: 'dots'
        }
      },
      page: {
        icon: {
          variant: 'dots'
        }
      },
      background: {
        icon: {
          variant: 'dots'
        }
      }
    }
  });
  return <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>;
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,A,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      custom: {
        component: ({
          initialState,
          message,
          duration,
          onFinish
        }) => {
          useTimeout(onFinish, duration);
          return <Motion initial={!initialState ? 'initial' : false} animate='animate' exit='exit' variants={{
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 1, 1]
              }
            }
          }} sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 9999,
            bg: 'blackAlpha.600',
            w: '100vw',
            h: '100vh',
            p: 'md',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <Motion initial={!initialState ? 'initial' : false} animate='animate' exit='exit' variants={{
              initial: {
                opacity: 0,
                scale: 0.95
              },
              animate: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }
              },
              exit: {
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 1, 1]
                }
              }
            }} sx={{
              bg: ['white', 'black'],
              maxW: 'md',
              p: 'md',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'sm',
              rounded: 'md',
              boxShadow: ['lg', 'dark-lg']
            }}>
                <Loading variant='dots' size='6xl' />

                <VStack align='center' mb='md' gap='sm'>
                  <Text>Downloading files…</Text>
                  {message ? isValidElement(message) ? message : <Text noOfLines={3}>{message}</Text> : null}
                </VStack>

                <Button size='sm' onClick={onFinish}>
                  Play to background
                </Button>
              </Motion>
            </Motion>;
        }
      }
    }
  });
  return <UIProvider config={config}>
      <CustomApp />
    </UIProvider>;
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const vn=["basic","useInitialState","useCustomLoading"];export{vn as __namedExportsOrder,r as basic,hn as default,c as useCustomLoading,s as useInitialState};
//# sourceMappingURL=loading.stories-1399f795.js.map