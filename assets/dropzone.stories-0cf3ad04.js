import{a as t,j as h,F as O}from"./jsx-runtime-03b4ddbf.js";import{I as T,v as Ue,h as Ve,w as We}from"./fontawesome-icon-71f8bf15.js";import{r as f,R as qn}from"./index-76fb7be0.js";import{P as m}from"./index-8d47fad6.js";import{_ as N,a as Y,b as br,c as zr}from"./tslib.es6-90f6c3e8.js";import{u as Jn,f as Qn,F as fr}from"./form-control-a4c7bf52.js";import{F as Zn}from"./fade-69a890d9.js";import{L as et}from"./loading-9f71b7cc.js";import{k as rt,D as nt,h as tt,a0 as ot,d as Ar,e as it,v as ye}from"./factory-94a21dd6.js";import{f as at}from"./forward-ref-8b7d2a6f.js";import{a as ct}from"./use-component-style-9258d34a.js";import{o as lt}from"./theme-provider-8a6e6dcc.js";import{T as s}from"./text-c933cc10.js";import{V as G,H as Ne}from"./stack-8d88e584.js";import{B as st}from"./button-139bace1.js";import"./icon-78aec9fa.js";import"./index-79f0243f.js";import"./_commonjsHelpers-de833af9.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./utils-5a106adf.js";import"./index-f5d80254.js";import"./index-d0666609.js";var ut=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ae(e,r){var n=pt(e);if(typeof n.path!="string"){var o=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof o=="string"&&o.length>0?o:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function pt(e){var r=e.name,n=r&&r.lastIndexOf(".")!==-1;if(n&&!e.type){var o=r.split(".").pop().toLowerCase(),a=ut.get(o);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var ft=[".DS_Store","Thumbs.db"];function dt(e){return N(this,void 0,void 0,function(){return Y(this,function(r){return He(e)&&mt(e.dataTransfer)?[2,vt(e.dataTransfer,e.type)]:gt(e)?[2,ht(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,Dt(e)]:[2,[]]})})}function mt(e){return He(e)}function gt(e){return He(e)&&He(e.target)}function He(e){return typeof e=="object"&&e!==null}function ht(e){return cr(e.target.files).map(function(r){return ae(r)})}function Dt(e){return N(this,void 0,void 0,function(){var r;return Y(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(o){return o.getFile()}))];case 1:return r=n.sent(),[2,r.map(function(o){return ae(o)})]}})})}function vt(e,r){return N(this,void 0,void 0,function(){var n,o;return Y(this,function(a){switch(a.label){case 0:return e.items?(n=cr(e.items).filter(function(c){return c.kind==="file"}),r!=="drop"?[2,n]:[4,Promise.all(n.map(xt))]):[3,2];case 1:return o=a.sent(),[2,kr(Pn(o))];case 2:return[2,kr(cr(e.files).map(function(c){return ae(c)}))]}})})}function kr(e){return e.filter(function(r){return ft.indexOf(r.name)===-1})}function cr(e){if(e===null)return[];for(var r=[],n=0;n<e.length;n++){var o=e[n];r.push(o)}return r}function xt(e){if(typeof e.webkitGetAsEntry!="function")return Tr(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Rn(r):Tr(e)}function Pn(e){return e.reduce(function(r,n){return br(br([],zr(r),!1),zr(Array.isArray(n)?Pn(n):[n]),!1)},[])}function Tr(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var n=ae(r);return Promise.resolve(n)}function yt(e){return N(this,void 0,void 0,function(){return Y(this,function(r){return[2,e.isDirectory?Rn(e):bt(e)]})})}function Rn(e){var r=e.createReader();return new Promise(function(n,o){var a=[];function c(){var d=this;r.readEntries(function(u){return N(d,void 0,void 0,function(){var v,w,S;return Y(this,function(z){switch(z.label){case 0:if(u.length)return[3,5];z.label=1;case 1:return z.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return v=z.sent(),n(v),[3,4];case 3:return w=z.sent(),o(w),[3,4];case 4:return[3,6];case 5:S=Promise.all(u.map(yt)),a.push(S),c(),z.label=6;case 6:return[2]}})})},function(u){o(u)})}c()})}function bt(e){return N(this,void 0,void 0,function(){return Y(this,function(r){return[2,new Promise(function(n,o){e.file(function(a){var c=ae(a,e.fullPath);n(c)},function(a){o(a)})})]})})}var zt=function(e,r){if(e&&r){var n=Array.isArray(r)?r:r.split(","),o=e.name||"",a=(e.type||"").toLowerCase(),c=a.replace(/\/.*$/,"");return n.some(function(d){var u=d.trim().toLowerCase();return u.charAt(0)==="."?o.toLowerCase().endsWith(u):u.endsWith("/*")?c===u.replace(/\/.*$/,""):a===u})}return!0};function wr(e){return Tt(e)||kt(e)||Mn(e)||At()}function At(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tt(e){if(Array.isArray(e))return lr(e)}function Sr(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Fr(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Sr(Object(n),!0).forEach(function(o){Ln(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sr(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ln(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ie(e,r){return Ft(e)||St(e,r)||Mn(e,r)||wt()}function wt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mn(e,r){if(e){if(typeof e=="string")return lr(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lr(e,r)}}function lr(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=e[n];return o}function St(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],a=!0,c=!1,d,u;try{for(n=n.call(e);!(a=(d=n.next()).done)&&(o.push(d.value),!(r&&o.length===r));a=!0);}catch(v){c=!0,u=v}finally{try{!a&&n.return!=null&&n.return()}finally{if(c)throw u}}return o}}function Ft(e){if(Array.isArray(e))return e}var Ot="file-invalid-type",Et="file-too-large",jt="file-too-small",Ct="too-many-files",_t=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var n=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Ot,message:"File type must be ".concat(n)}},Or=function(r){return{code:Et,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Er=function(r){return{code:jt,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},It={code:Ct,message:"Too many files"};function Bn(e,r){var n=e.type==="application/x-moz-file"||zt(e,r);return[n,n?null:_t(r)]}function Hn(e,r,n){if(B(e.size))if(B(r)&&B(n)){if(e.size>n)return[!1,Or(n)];if(e.size<r)return[!1,Er(r)]}else{if(B(r)&&e.size<r)return[!1,Er(r)];if(B(n)&&e.size>n)return[!1,Or(n)]}return[!0,null]}function B(e){return e!=null}function Pt(e){var r=e.files,n=e.accept,o=e.minSize,a=e.maxSize,c=e.multiple,d=e.maxFiles,u=e.validator;return!c&&r.length>1||c&&d>=1&&r.length>d?!1:r.every(function(v){var w=Bn(v,n),S=ie(w,1),z=S[0],_=Hn(v,o,a),I=ie(_,1),P=I[0],R=u?u(v):null;return z&&P&&!R})}function Ke(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function be(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function jr(e){e.preventDefault()}function Rt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Lt(e){return e.indexOf("Edge/")!==-1}function Mt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Rt(e)||Lt(e)}function F(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(o){for(var a=arguments.length,c=new Array(a>1?a-1:0),d=1;d<a;d++)c[d-1]=arguments[d];return r.some(function(u){return!Ke(o)&&u&&u.apply(void 0,[o].concat(c)),Ke(o)})}}function Bt(){return"showOpenFilePicker"in window}function Ht(e){if(B(e)){var r=Object.entries(e).filter(function(n){var o=ie(n,2),a=o[0],c=o[1],d=!0;return Kn(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),d=!1),(!Array.isArray(c)||!c.every($n))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),d=!1),d}).reduce(function(n,o){var a=ie(o,2),c=a[0],d=a[1];return Fr(Fr({},n),{},Ln({},c,d))},{});return[{description:"Files",accept:r}]}return e}function Kt(e){if(B(e))return Object.entries(e).reduce(function(r,n){var o=ie(n,2),a=o[0],c=o[1];return[].concat(wr(r),[a],wr(c))},[]).filter(function(r){return Kn(r)||$n(r)}).join(",")}function $t(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Ut(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Kn(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function $n(e){return/^.*\.[\w]+$/.test(e)}var Vt=["children"],Wt=["open"],Nt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Yt=["refKey","onChange","onClick"];function Gt(e){return Jt(e)||qt(e)||Un(e)||Xt()}function Xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jt(e){if(Array.isArray(e))return sr(e)}function ar(e,r){return eo(e)||Zt(e,r)||Un(e,r)||Qt()}function Qt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(e,r){if(e){if(typeof e=="string")return sr(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sr(e,r)}}function sr(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=e[n];return o}function Zt(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],a=!0,c=!1,d,u;try{for(n=n.call(e);!(a=(d=n.next()).done)&&(o.push(d.value),!(r&&o.length===r));a=!0);}catch(v){c=!0,u=v}finally{try{!a&&n.return!=null&&n.return()}finally{if(c)throw u}}return o}}function eo(e){if(Array.isArray(e))return e}function Cr(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Cr(Object(n),!0).forEach(function(o){ur(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cr(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function ur(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function $e(e,r){if(e==null)return{};var n=ro(e,r),o,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)o=c[a],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function ro(e,r){if(e==null)return{};var n={},o=Object.keys(e),a,c;for(c=0;c<o.length;c++)a=o[c],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var dr=f.forwardRef(function(e,r){var n=e.children,o=$e(e,Vt),a=Wn(o),c=a.open,d=$e(a,Wt);return f.useImperativeHandle(r,function(){return{open:c}},[c]),qn.createElement(f.Fragment,null,n(g(g({},d),{},{open:c})))});dr.displayName="Dropzone";var Vn={disabled:!1,getFilesFromEvent:dt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};dr.defaultProps=Vn;dr.propTypes={children:m.func,accept:m.objectOf(m.arrayOf(m.string)),multiple:m.bool,preventDropOnDocument:m.bool,noClick:m.bool,noKeyboard:m.bool,noDrag:m.bool,noDragEventsBubbling:m.bool,minSize:m.number,maxSize:m.number,maxFiles:m.number,disabled:m.bool,getFilesFromEvent:m.func,onFileDialogCancel:m.func,onFileDialogOpen:m.func,useFsAccessApi:m.bool,autoFocus:m.bool,onDragEnter:m.func,onDragLeave:m.func,onDragOver:m.func,onDrop:m.func,onDropAccepted:m.func,onDropRejected:m.func,onError:m.func,validator:m.func};var pr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Wn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=g(g({},Vn),e),n=r.accept,o=r.disabled,a=r.getFilesFromEvent,c=r.maxSize,d=r.minSize,u=r.multiple,v=r.maxFiles,w=r.onDragEnter,S=r.onDragLeave,z=r.onDragOver,_=r.onDrop,I=r.onDropAccepted,P=r.onDropRejected,R=r.onFileDialogCancel,X=r.onFileDialogOpen,le=r.useFsAccessApi,se=r.autoFocus,q=r.preventDropOnDocument,ue=r.noClick,J=r.noKeyboard,pe=r.noDrag,E=r.noDragEventsBubbling,Q=r.onError,L=r.validator,M=f.useMemo(function(){return Kt(n)},[n]),fe=f.useMemo(function(){return Ht(n)},[n]),Z=f.useMemo(function(){return typeof X=="function"?X:_r},[X]),H=f.useMemo(function(){return typeof R=="function"?R:_r},[R]),x=f.useRef(null),y=f.useRef(null),Je=f.useReducer(no,pr),de=ar(Je,2),ee=de[0],A=de[1],re=ee.isFocused,K=ee.isFileDialogActive,$=f.useRef(typeof window<"u"&&window.isSecureContext&&le&&Bt()),ne=function(){!$.current&&K&&setTimeout(function(){if(y.current){var l=y.current.files;l.length||(A({type:"closeDialog"}),H())}},300)};f.useEffect(function(){return window.addEventListener("focus",ne,!1),function(){window.removeEventListener("focus",ne,!1)}},[y,K,H,$]);var C=f.useRef([]),me=function(l){x.current&&x.current.contains(l.target)||(l.preventDefault(),C.current=[])};f.useEffect(function(){return q&&(document.addEventListener("dragover",jr,!1),document.addEventListener("drop",me,!1)),function(){q&&(document.removeEventListener("dragover",jr),document.removeEventListener("drop",me))}},[x,q]),f.useEffect(function(){return!o&&se&&x.current&&x.current.focus(),function(){}},[x,se,o]);var j=f.useCallback(function(i){Q?Q(i):console.error(i)},[Q]),mr=f.useCallback(function(i){i.preventDefault(),i.persist(),ve(i),C.current=[].concat(Gt(C.current),[i.target]),be(i)&&Promise.resolve(a(i)).then(function(l){if(!(Ke(i)&&!E)){var D=l.length,b=D>0&&Pt({files:l,accept:M,minSize:d,maxSize:c,multiple:u,maxFiles:v,validator:L}),k=D>0&&!b;A({isDragAccept:b,isDragReject:k,isDragActive:!0,type:"setDraggedFiles"}),w&&w(i)}}).catch(function(l){return j(l)})},[a,w,j,E,M,d,c,u,v,L]),gr=f.useCallback(function(i){i.preventDefault(),i.persist(),ve(i);var l=be(i);if(l&&i.dataTransfer)try{i.dataTransfer.dropEffect="copy"}catch{}return l&&z&&z(i),!1},[z,E]),hr=f.useCallback(function(i){i.preventDefault(),i.persist(),ve(i);var l=C.current.filter(function(b){return x.current&&x.current.contains(b)}),D=l.indexOf(i.target);D!==-1&&l.splice(D,1),C.current=l,!(l.length>0)&&(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),be(i)&&S&&S(i))},[x,S,E]),ge=f.useCallback(function(i,l){var D=[],b=[];i.forEach(function(k){var te=Bn(k,M),W=ar(te,2),Ze=W[0],er=W[1],rr=Hn(k,d,c),xe=ar(rr,2),nr=xe[0],tr=xe[1],or=L?L(k):null;if(Ze&&nr&&!or)D.push(k);else{var ir=[er,tr];or&&(ir=ir.concat(or)),b.push({file:k,errors:ir.filter(function(Xn){return Xn})})}}),(!u&&D.length>1||u&&v>=1&&D.length>v)&&(D.forEach(function(k){b.push({file:k,errors:[It]})}),D.splice(0)),A({acceptedFiles:D,fileRejections:b,type:"setFiles"}),_&&_(D,b,l),b.length>0&&P&&P(b,l),D.length>0&&I&&I(D,l)},[A,u,M,d,c,v,_,I,P,L]),he=f.useCallback(function(i){i.preventDefault(),i.persist(),ve(i),C.current=[],be(i)&&Promise.resolve(a(i)).then(function(l){Ke(i)&&!E||ge(l,i)}).catch(function(l){return j(l)}),A({type:"reset"})},[a,ge,j,E]),U=f.useCallback(function(){if($.current){A({type:"openDialog"}),Z();var i={multiple:u,types:fe};window.showOpenFilePicker(i).then(function(l){return a(l)}).then(function(l){ge(l,null),A({type:"closeDialog"})}).catch(function(l){$t(l)?(H(l),A({type:"closeDialog"})):Ut(l)?($.current=!1,y.current?(y.current.value=null,y.current.click()):j(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):j(l)});return}y.current&&(A({type:"openDialog"}),Z(),y.current.value=null,y.current.click())},[A,Z,H,le,ge,j,fe,u]),Dr=f.useCallback(function(i){!x.current||!x.current.isEqualNode(i.target)||(i.key===" "||i.key==="Enter"||i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),U())},[x,U]),vr=f.useCallback(function(){A({type:"focus"})},[]),xr=f.useCallback(function(){A({type:"blur"})},[]),yr=f.useCallback(function(){ue||(Mt()?setTimeout(U,0):U())},[ue,U]),V=function(l){return o?null:l},Qe=function(l){return J?null:V(l)},De=function(l){return pe?null:V(l)},ve=function(l){E&&l.stopPropagation()},Nn=f.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=i.refKey,D=l===void 0?"ref":l,b=i.role,k=i.onKeyDown,te=i.onFocus,W=i.onBlur,Ze=i.onClick,er=i.onDragEnter,rr=i.onDragOver,xe=i.onDragLeave,nr=i.onDrop,tr=$e(i,Nt);return g(g(ur({onKeyDown:Qe(F(k,Dr)),onFocus:Qe(F(te,vr)),onBlur:Qe(F(W,xr)),onClick:V(F(Ze,yr)),onDragEnter:De(F(er,mr)),onDragOver:De(F(rr,gr)),onDragLeave:De(F(xe,hr)),onDrop:De(F(nr,he)),role:typeof b=="string"&&b!==""?b:"presentation"},D,x),!o&&!J?{tabIndex:0}:{}),tr)}},[x,Dr,vr,xr,yr,mr,gr,hr,he,J,pe,o]),Yn=f.useCallback(function(i){i.stopPropagation()},[]),Gn=f.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=i.refKey,D=l===void 0?"ref":l,b=i.onChange,k=i.onClick,te=$e(i,Yt),W=ur({accept:M,multiple:u,type:"file",style:{display:"none"},onChange:V(F(b,he)),onClick:V(F(k,Yn)),tabIndex:-1},D,y);return g(g({},W),te)}},[y,n,u,he,o]);return g(g({},ee),{},{isFocused:re&&!o,getRootProps:Nn,getInputProps:Gn,rootRef:x,inputRef:y,open:V(U)})}function no(e,r){switch(r.type){case"focus":return g(g({},e),{},{isFocused:!0});case"blur":return g(g({},e),{},{isFocused:!1});case"openDialog":return g(g({},pr),{},{isFileDialogActive:!0});case"closeDialog":return g(g({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return g(g({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return g(g({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return g({},pr);default:return e}}function _r(){}const[to,Ye]=rt({name:"NativeSelectContext",errorMessage:`useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`}),p=at((e,r)=>{const[n,o]=ct("Dropzone",e),{id:a,name:c,className:d,isLoading:u,overlayProps:v,loadingProps:w,openRef:S,accept:z,onDrop:_,onDropAccepted:I,onDropRejected:P,multiple:R,maxSize:X,maxFiles:le,autoFocus:se,noClick:q,noDrag:ue,noDragEventsBubbling:J,noKeyboard:pe,onDragEnter:E,onDragLeave:Q,onDragOver:L,onFileDialogCancel:M,onFileDialogOpen:fe,preventDropOnDocument:Z,useFsAccessApi:H,children:x,...y}=Jn(lt(o)),Je=u||y.disabled||y.readOnly,de=nt(y,Qn),{getRootProps:ee,getInputProps:A,isDragAccept:re,isDragReject:K,open:$}=Wn({disabled:Je,accept:tt(z)?z.reduce((me,j)=>({...me,[j]:[]}),{}):z,onDrop:_,onDropAccepted:I,onDropRejected:P,multiple:R,maxSize:X,maxFiles:le,autoFocus:se,noClick:q,noDrag:ue,noDragEventsBubbling:J,noKeyboard:pe,onDragEnter:E,onDragLeave:Q,onDragOver:L,onFileDialogCancel:M,onFileDialogOpen:fe,preventDropOnDocument:Z,useFsAccessApi:H});ot(S,$);const ne=!re&&!K,C={position:"relative",display:"flex",justifyContent:"center",alignItems:"center",...n.container};return t(to,{value:{isLoading:u,isDragAccept:re,isDragReject:K,isDragIdle:ne,styles:n},children:h(Ar.div,{className:it("ui-dropzone",d),__css:C,...y,...ee(),"data-accept":ye(re),"data-reject":ye(K),"data-idle":ye(ne),"data-loading":ye(u),children:[t(oo,{loadingProps:w,...v}),t(Ar.input,{ref:r,id:a,name:c,...de,...A()}),x]})})}),oo=({loadingProps:e,...r})=>{const{isLoading:n,styles:o}=Ye(),a={position:"absolute",top:0,left:0,w:"100%",h:"100%",display:"flex",justifyContent:"center",alignItems:"center",...o.overlay};return t(Zn,{isOpen:n,unmountOnExit:!0,className:"ui-dropzone__overlay",__css:a,...r,children:t(et,{className:"ui-dropzone__overlay__loading",size:"4xl",...e})})},Ge=({children:e})=>{const{isDragAccept:r}=Ye();return r?t(f.Fragment,{children:e}):null},Xe=({children:e})=>{const{isDragReject:r}=Ye();return r?t(f.Fragment,{children:e}):null},qe=({children:e})=>{const{isDragIdle:r}=Ye();return r?t(f.Fragment,{children:e}):null},oe={txt:"text/plain",html:"text/html",csv:"text/csv",png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",mp3:"audio/mpeg",mpeg:"video/mpeg",mp4:"video/mp4",zip:"application/zip",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},ce=[oe.png,oe.gif,oe.jpeg,oe.svg,oe.webp],Oo={title:"Components / Forms / Dropzone",component:p},ze=()=>t(p,{children:t(s,{children:"Drag file here or click to select file"})}),Ae=()=>h(O,{children:[t(p,{size:"xs",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{size:"sm",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{size:"md",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{size:"lg",children:t(s,{children:"Drag file here or click to select file"})})]}),ke=()=>h(O,{children:[t(p,{variant:"dashed",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{variant:"solid",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{variant:"unstyled",children:t(s,{children:"Drag file here or click to select file"})})]}),Te=()=>t(p,{multiple:!0,children:t(s,{children:"Drag files here or click to select files"})}),we=()=>h(O,{children:[t(p,{accept:ce,children:t(s,{children:"Drag image here or click to select image"})}),t(p,{accept:{"image/*":[]},children:t(s,{children:"Drag image here or click to select image"})})]}),Se=()=>t(p,{maxSize:3*1024**2,children:h(G,{w:"auto",gap:"2xs",children:[t(s,{fontSize:"xl",children:"Drag file here or click to select file"}),t(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),Fe=()=>t(p,{multiple:!0,maxFiles:3,children:h(G,{w:"auto",gap:"2xs",children:[t(s,{fontSize:"xl",children:"Drag file here or click to select file"}),t(s,{fontSize:"sm",children:"Attach as many files as you like, can upload up to 3 files"})]})}),Oe=()=>t(p,{accept:ce,maxSize:3*1024**2,children:h(Ne,{color:["blackAlpha.500","whiteAlpha.500"],children:[t(Ge,{children:t(T,{icon:Ue,size:"6xl",color:"primary"})}),t(Xe,{children:t(T,{icon:Ve,size:"6xl",color:"danger"})}),t(qe,{children:t(T,{icon:We,size:"6xl"})}),h(G,{gap:"2xs",children:[t(s,{fontSize:"xl",children:"Drag images here or click to select files"}),t(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ee=()=>t(p,{accept:ce,maxSize:3*1024**2,onDrop:(e,r)=>console.log("accepted files",e,"rejected files",r),children:h(Ne,{color:["blackAlpha.500","whiteAlpha.500"],children:[t(Ge,{children:t(T,{icon:Ue,size:"6xl",color:"primary"})}),t(Xe,{children:t(T,{icon:Ve,size:"6xl",color:"danger"})}),t(qe,{children:t(T,{icon:We,size:"6xl"})}),h(G,{gap:"2xs",children:[t(s,{fontSize:"xl",children:"Drag images here or click to select files"}),t(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),je=()=>t(p,{accept:ce,maxSize:3*1024**2,onDropAccepted:e=>console.log("accepted files",e),children:h(Ne,{color:["blackAlpha.500","whiteAlpha.500"],children:[t(Ge,{children:t(T,{icon:Ue,size:"6xl",color:"primary"})}),t(Xe,{children:t(T,{icon:Ve,size:"6xl",color:"danger"})}),t(qe,{children:t(T,{icon:We,size:"6xl"})}),h(G,{gap:"2xs",children:[t(s,{fontSize:"xl",children:"Drag images here or click to select files"}),t(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ce=()=>t(p,{accept:ce,maxSize:3*1024**2,onDropRejected:e=>console.log("rejected files",e),children:h(Ne,{color:["blackAlpha.500","whiteAlpha.500"],children:[t(Ge,{children:t(T,{icon:Ue,size:"6xl",color:"primary"})}),t(Xe,{children:t(T,{icon:Ve,size:"6xl",color:"danger"})}),t(qe,{children:t(T,{icon:We,size:"6xl"})}),h(G,{gap:"2xs",children:[t(s,{fontSize:"xl",children:"Drag images here or click to select files"}),t(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),_e=()=>h(O,{children:[t(p,{focusBorderColor:"green.500",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{isInvalid:!0,errorBorderColor:"orange.500",children:t(s,{children:"Drag file here or click to select file"})})]}),Ie=()=>h(O,{children:[t(p,{isDisabled:!0,variant:"dashed",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{isDisabled:!0,variant:"solid",children:t(s,{children:"Drag file here or click to select file"})}),t(fr,{label:"Upload file",isDisabled:!0,children:t(p,{children:t(s,{children:"Drag file here or click to select file"})})})]}),Pe=()=>h(O,{children:[t(p,{isReadOnly:!0,variant:"dashed",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{isReadOnly:!0,variant:"solid",children:t(s,{children:"Drag file here or click to select file"})}),t(fr,{label:"Upload file",isReadOnly:!0,children:t(p,{children:t(s,{children:"Drag file here or click to select file"})})})]}),Re=()=>h(O,{children:[t(p,{isInvalid:!0,variant:"dashed",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{isInvalid:!0,variant:"solid",children:t(s,{children:"Drag file here or click to select file"})}),t(fr,{label:"Upload file",isInvalid:!0,errorMessage:"File is required.",children:t(p,{children:t(s,{children:"Drag file here or click to select file"})})})]}),Le=()=>h(O,{children:[t(p,{isLoading:!0,variant:"dashed",children:t(s,{children:"Drag file here or click to select file"})}),t(p,{isLoading:!0,variant:"solid",children:t(s,{children:"Drag file here or click to select file"})})]}),Me=()=>h(O,{children:[t(p,{isLoading:!0,loadingProps:{variant:"grid"},children:t(s,{children:"Drag file here or click to select file"})}),t(p,{isLoading:!0,loadingProps:{color:"secondary"},children:t(s,{children:"Drag file here or click to select file"})})]}),Be=()=>{const e=f.useRef(null);return h(O,{children:[t(st,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.call(e)},children:"Select file"}),t(p,{openRef:e,children:t(s,{children:"Drag file here or click to select file"})})]})};var Ir,Pr,Rr;ze.parameters={...ze.parameters,docs:{...(Ir=ze.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <Dropzone>
      <Text>Drag file here or click to select file</Text>
    </Dropzone>;
}`,...(Rr=(Pr=ze.parameters)==null?void 0:Pr.docs)==null?void 0:Rr.source}}};var Lr,Mr,Br;Ae.parameters={...Ae.parameters,docs:{...(Lr=Ae.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone size="xs">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="sm">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="md">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="lg">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(Br=(Mr=Ae.parameters)==null?void 0:Mr.docs)==null?void 0:Br.source}}};var Hr,Kr,$r;ke.parameters={...ke.parameters,docs:{...(Hr=ke.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="unstyled">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...($r=(Kr=ke.parameters)==null?void 0:Kr.docs)==null?void 0:$r.source}}};var Ur,Vr,Wr;Te.parameters={...Te.parameters,docs:{...(Ur=Te.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>;
}`,...(Wr=(Vr=Te.parameters)==null?void 0:Vr.docs)==null?void 0:Wr.source}}};var Nr,Yr,Gr;we.parameters={...we.parameters,docs:{...(Nr=we.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone accept={IMAGE_ACCEPT_TYPE}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone>

      <Dropzone accept={{
      "image/*": []
    }}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone>
    </>;
}`,...(Gr=(Yr=we.parameters)==null?void 0:Yr.docs)==null?void 0:Gr.source}}};var Xr,qr,Jr;Se.parameters={...Se.parameters,docs:{...(Xr=Se.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Jr=(qr=Se.parameters)==null?void 0:qr.docs)==null?void 0:Jr.source}}};var Qr,Zr,en;Fe.parameters={...Fe.parameters,docs:{...(Qr=Fe.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <Dropzone multiple maxFiles={3}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone>;
}`,...(en=(Zr=Fe.parameters)==null?void 0:Zr.docs)==null?void 0:en.source}}};var rn,nn,tn;Oe.parameters={...Oe.parameters,docs:{...(rn=Oe.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="primary" />
        </DropzoneAccept>

        <DropzoneReject>
          <Icon icon={faXmark} size="6xl" color="danger" />
        </DropzoneReject>

        <DropzoneIdle>
          <Icon icon={faImage} size="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(tn=(nn=Oe.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var on,an,cn;Ee.parameters={...Ee.parameters,docs:{...(on=Ee.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDrop={(acceptedFiles, fileRejections) => console.log("accepted files", acceptedFiles, "rejected files", fileRejections)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="primary" />
        </DropzoneAccept>

        <DropzoneReject>
          <Icon icon={faXmark} size="6xl" color="danger" />
        </DropzoneReject>

        <DropzoneIdle>
          <Icon icon={faImage} size="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(cn=(an=Ee.parameters)==null?void 0:an.docs)==null?void 0:cn.source}}};var ln,sn,un;je.parameters={...je.parameters,docs:{...(ln=je.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropAccepted={files => console.log("accepted files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="primary" />
        </DropzoneAccept>

        <DropzoneReject>
          <Icon icon={faXmark} size="6xl" color="danger" />
        </DropzoneReject>

        <DropzoneIdle>
          <Icon icon={faImage} size="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(un=(sn=je.parameters)==null?void 0:sn.docs)==null?void 0:un.source}}};var pn,fn,dn;Ce.parameters={...Ce.parameters,docs:{...(pn=Ce.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropRejected={files => console.log("rejected files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="primary" />
        </DropzoneAccept>

        <DropzoneReject>
          <Icon icon={faXmark} size="6xl" color="danger" />
        </DropzoneReject>

        <DropzoneIdle>
          <Icon icon={faImage} size="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(dn=(fn=Ce.parameters)==null?void 0:fn.docs)==null?void 0:dn.source}}};var mn,gn,hn;_e.parameters={..._e.parameters,docs:{...(mn=_e.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  return <>
      <Dropzone focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid errorBorderColor="orange.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(hn=(gn=_e.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var Dn,vn,xn;Ie.parameters={...Ie.parameters,docs:{...(Dn=Ie.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isDisabled variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isDisabled variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label="Upload file" isDisabled>
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(xn=(vn=Ie.parameters)==null?void 0:vn.docs)==null?void 0:xn.source}}};var yn,bn,zn;Pe.parameters={...Pe.parameters,docs:{...(yn=Pe.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isReadOnly variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isReadOnly variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label="Upload file" isReadOnly>
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(zn=(bn=Pe.parameters)==null?void 0:bn.docs)==null?void 0:zn.source}}};var An,kn,Tn;Re.parameters={...Re.parameters,docs:{...(An=Re.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isInvalid variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label="Upload file" isInvalid errorMessage="File is required.">
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(Tn=(kn=Re.parameters)==null?void 0:kn.docs)==null?void 0:Tn.source}}};var wn,Sn,Fn;Le.parameters={...Le.parameters,docs:{...(wn=Le.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isLoading variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(Fn=(Sn=Le.parameters)==null?void 0:Sn.docs)==null?void 0:Fn.source}}};var On,En,jn;Me.parameters={...Me.parameters,docs:{...(On=Me.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isLoading loadingProps={{
      variant: "grid"
    }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading loadingProps={{
      color: "secondary"
    }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(jn=(En=Me.parameters)==null?void 0:En.docs)==null?void 0:jn.source}}};var Cn,_n,In;Be.parameters={...Be.parameters,docs:{...(Cn=Be.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  const openRef = useRef<() => void>(null);
  const onOpen = () => openRef.current?.();
  return <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(In=(_n=Be.parameters)==null?void 0:_n.docs)==null?void 0:In.source}}};const Eo=["basic","withSize","withVariant","withMultiple","withAccept","withMaxSize","withMaxFiles","withStatus","useOnDrop","useOnDropAccepted","useOnDropRejected","withBorderColor","isDisabled","isReadonly","isInvalid","isLoading","customLoading","useOpen"];export{Eo as __namedExportsOrder,ze as basic,Me as customLoading,Oo as default,Ie as isDisabled,Re as isInvalid,Le as isLoading,Pe as isReadonly,Ee as useOnDrop,je as useOnDropAccepted,Ce as useOnDropRejected,Be as useOpen,we as withAccept,_e as withBorderColor,Fe as withMaxFiles,Se as withMaxSize,Te as withMultiple,Ae as withSize,Oe as withStatus,ke as withVariant};
//# sourceMappingURL=dropzone.stories-0cf3ad04.js.map