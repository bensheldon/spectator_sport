// https://cdn.jsdelivr.net/npm/@rrweb/record@2.0.1/dist/record.umd.min.cjs

// START PASTE

(function (g, f) {
    if ("object" == typeof exports && "object" == typeof module) {
      module.exports = f();
    } else if ("function" == typeof define && define.amd) {
      define("rrwebRecord", [], f);
    } else if ("object" == typeof exports) {
      exports["rrwebRecord"] = f();
    } else {
      g["rrwebRecord"] = f();
    }
  }(this, () => {
var exports = {};
var module = { exports };
"use strict";var nr=Object.defineProperty,sr=Object.defineProperties;var or=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var it=(e,t,r)=>t in e?nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))at.call(t,r)&&it(e,r,t[r]);if(Ne)for(var r of Ne(t))lt.call(t,r)&&it(e,r,t[r]);return e},Oe=(e,t)=>sr(e,or(t));var ct=(e,t)=>{var r={};for(var n in e)at.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Ne)for(var n of Ne(e))t.indexOf(n)<0&&lt.call(e,n)&&(r[n]=e[n]);return r};var ir=Object.defineProperty,ar=(e,t,r)=>t in e?ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t,r)=>ar(e,typeof t!="symbol"?t+"":t,r),ut;Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var R=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e[e.Asset=7]="Asset",e))(R||{}),w=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(w||{}),z=(e=>(e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd",e[e.TouchCancel=10]="TouchCancel",e))(z||{}),Q=(e=>(e[e.Mouse=0]="Mouse",e[e.Pen=1]="Pen",e[e.Touch=2]="Touch",e))(Q||{}),fe=(e=>(e[e["2D"]=0]="2D",e[e.WebGL=1]="WebGL",e[e.WebGL2=2]="WebGL2",e))(fe||{}),le=(e=>(e[e.Play=0]="Play",e[e.Pause=1]="Pause",e[e.Seeked=2]="Seeked",e[e.VolumeChange=3]="VolumeChange",e[e.RateChange=4]="RateChange",e))(le||{}),A=(e=>(e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment",e))(A||{});const dt={Node:["childNodes","parentNode","parentElement","textContent","ownerDocument"],ShadowRoot:["host","styleSheets"],Element:["shadowRoot","querySelector","querySelectorAll"],MutationObserver:[]},ht={Node:["contains","getRootNode"],ShadowRoot:["getSelection"],Element:[],MutationObserver:["constructor"]},Ee={},Ot={},lr=()=>!!globalThis.Zone;function Ke(e){if(Ee[e])return Ee[e];const t=globalThis[e],r=t.prototype,n=e in dt?dt[e]:void 0,s=!!(n&&n.every(c=>{var o,u;return!!((u=(o=Object.getOwnPropertyDescriptor(r,c))==null?void 0:o.get)!=null&&u.toString().includes("[native code]"))})),i=e in ht?ht[e]:void 0,a=!!(i&&i.every(c=>{var o;return typeof r[c]=="function"&&((o=r[c])==null?void 0:o.toString().includes("[native code]"))}));if(s&&a&&!lr())return Ee[e]=t.prototype,t.prototype;try{const c=document.createElement("iframe");c.style.display="none",document.body.appendChild(c);const o=c.contentWindow;if(!o)return t.prototype;const u=o[e].prototype;if(!u)return c.remove(),r;const d=navigator.userAgent;return d.includes("Safari")&&!d.includes("Chrome")?(c.classList.add("rr-block"),c.setAttribute("__rrwebUntaintedMutationObserver",""),Ot[e]=()=>c.remove()):c.remove(),Ee[e]=u}catch(c){return r}}const Ve={};function K(e,t,r){var n;const s=`${e}.${String(r)}`;if(Ve[s])return Ve[s].call(t);const i=Ke(e),a=(n=Object.getOwnPropertyDescriptor(i,r))==null?void 0:n.get;return a?(Ve[s]=a,a.call(t)):t[r]}const $e={};function Et(e,t,r){const n=`${e}.${String(r)}`;if($e[n])return $e[n].bind(t);const i=Ke(e)[r];return typeof i!="function"?t[r]:($e[n]=i,i.bind(t))}function cr(e){return K("Node",e,"ownerDocument")}function ur(e){return K("Node",e,"childNodes")}function dr(e){return K("Node",e,"parentNode")}function hr(e){return K("Node",e,"parentElement")}function fr(e){return K("Node",e,"textContent")}function pr(e,t){return Et("Node",e,"contains")(t)}function mr(e){return Et("Node",e,"getRootNode")()}function gr(e){return!e||!("host"in e)?null:K("ShadowRoot",e,"host")}function yr(e){return e.styleSheets}function Sr(e){return!e||!("shadowRoot"in e)?null:K("Element",e,"shadowRoot")}function br(e,t){return K("Element",e,"querySelector")(t)}function Cr(e,t){return K("Element",e,"querySelectorAll")(t)}function kt(){var e;return[Ke("MutationObserver").constructor,(e=Ot.MutationObserver)!=null?e:()=>{}]}let be=Date.now;/[1-9][0-9]{12}/.test(Date.now().toString())||(be=()=>new Date().getTime());function ie(e,t,r){try{if(!(t in e))return()=>{};const n=e[t],s=r(n);return typeof s=="function"&&(s.prototype=s.prototype||{},Object.defineProperties(s,{__rrweb_original__:{enumerable:!1,value:n}})),e[t]=s,()=>{e[t]=n}}catch(n){return()=>{}}}const b={ownerDocument:cr,childNodes:ur,parentNode:dr,parentElement:hr,textContent:fr,contains:pr,getRootNode:mr,host:gr,styleSheets:yr,shadowRoot:Sr,querySelector:br,querySelectorAll:Cr,nowTimestamp:be,mutationObserverCtor:kt,patch:ie};function Tt(e){return e.nodeType===e.ELEMENT_NODE}function ge(e){const t=e&&"host"in e&&"mode"in e&&b.host(e)||null;return!!(t&&"shadowRoot"in t&&b.shadowRoot(t)===e)}function ye(e){return Object.prototype.toString.call(e)==="[object ShadowRoot]"}function vr(e){return e.includes(" background-clip: text;")&&!e.includes(" -webkit-background-clip: text;")&&(e=e.replace(/\sbackground-clip:\s*text;/g," -webkit-background-clip: text; background-clip: text;")),e}function Mr(e){const{cssText:t}=e;if(t.split('"').length<3)return t;const r=["@import",`url(${JSON.stringify(e.href)})`];return e.layerName===""?r.push("layer"):e.layerName&&r.push(`layer(${e.layerName})`),e.supportsText&&r.push(`supports(${e.supportsText})`),e.media.length&&r.push(e.media.mediaText),r.join(" ")+";"}function Ye(e){try{const t=e.rules||e.cssRules;if(!t)return null;let r=e.href;!r&&e.ownerNode&&(r=e.ownerNode.baseURI);const n=Array.from(t,s=>xt(s,r)).join("");return vr(n)}catch(t){return null}}function xt(e,t){if(Ir(e)){let r;try{r=Ye(e.styleSheet)||Mr(e)}catch(n){r=e.cssText}return e.styleSheet.href?Pe(r,e.styleSheet.href):r}else{let r=e.cssText;return Rr(e)&&e.selectorText.includes(":")&&(r=wr(r)),t?Pe(r,t):r}}function wr(e){const t=/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;return e.replace(t,"$1\\$2")}function Ir(e){return"styleSheet"in e}function Rr(e){return"selectorText"in e}class Dt{constructor(){p(this,"idNodeMap",new Map),p(this,"nodeMetaMap",new WeakMap)}getId(t){var r;if(!t)return-1;const n=(r=this.getMeta(t))==null?void 0:r.id;return n!=null?n:-1}getNode(t){return this.idNodeMap.get(t)||null}getIds(){return Array.from(this.idNodeMap.keys())}getMeta(t){return this.nodeMetaMap.get(t)||null}removeNodeFromMap(t){const r=this.getId(t);this.idNodeMap.delete(r),t.childNodes&&t.childNodes.forEach(n=>this.removeNodeFromMap(n))}has(t){return this.idNodeMap.has(t)}hasNode(t){return this.nodeMetaMap.has(t)}add(t,r){const n=r.id;this.idNodeMap.set(n,t),this.nodeMetaMap.set(t,r)}replace(t,r){const n=this.getNode(t);if(n){const s=this.nodeMetaMap.get(n);s&&this.nodeMetaMap.set(r,s)}this.idNodeMap.set(t,r)}reset(){this.idNodeMap=new Map,this.nodeMetaMap=new WeakMap}}function Nr(){return new Dt}function Ae({element:e,maskInputOptions:t,tagName:r,type:n,value:s,maskInputFn:i}){let a=s||"";const c=n&&oe(n);return(t[r.toLowerCase()]||c&&t[c])&&(i?a=i(a,e):a="*".repeat(a.length)),a}function oe(e){return e.toLowerCase()}const ft="__rrweb_original__";function Or(e){const t=e.getContext("2d");if(!t)return!0;const r=50;for(let n=0;n<e.width;n+=r)for(let s=0;s<e.height;s+=r){const i=t.getImageData,a=ft in i?i[ft]:i;if(new Uint32Array(a.call(t,n,s,Math.min(r,e.width-n),Math.min(r,e.height-s)).data.buffer).some(o=>o!==0))return!1}return!0}function Fe(e){const t=e.type;return e.hasAttribute("data-rr-is-password")?"password":t?oe(t):null}function Lt(e,t){var i;let r;try{r=new URL(e,t!=null?t:window.location.href)}catch(a){return null}const n=/\.([0-9a-z]+)(?:$)/i,s=r.pathname.match(n);return(i=s==null?void 0:s[1])!=null?i:null}function Er(e){let t="";return e.indexOf("//")>-1?t=e.split("/").slice(0,3).join("/"):t=e.split("/")[0],t=t.split("?")[0],t}const kr=/url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,Tr=/^(?:[a-z+]+:)?\/\//i,xr=/^www\..*/i,Dr=/^(data:)([^,]*),(.*)/i;function Pe(e,t){return(e||"").replace(kr,(r,n,s,i,a,c)=>{const o=s||a||c,u=n||i||"";if(!o)return r;if(Tr.test(o)||xr.test(o))return`url(${u}${o}${u})`;if(Dr.test(o))return`url(${u}${o}${u})`;if(o[0]==="/")return`url(${u}${Er(t)+o}${u})`;const d=t.split("/"),h=o.split("/");d.pop();for(const y of h)y!=="."&&(y===".."?d.pop():d.push(y));return`url(${u}${d.join("/")}${u})`})}function ke(e,t=!1){return t?e.replace(/(\/\*[^*]*\*\/)|[\s;]/g,""):e.replace(/(\/\*[^*]*\*\/)|[\s;]/g,"").replace(/0px/g,"0")}function Lr(e,t,r=!1){const n=Array.from(t.childNodes),s=[];let i=0;if(n.length>1&&e&&typeof e=="string"){let a=ke(e,r);const c=a.length/e.length;for(let o=1;o<n.length;o++)if(n[o].textContent&&typeof n[o].textContent=="string"){const u=ke(n[o].textContent,r),d=100;let h=3;for(;h<u.length&&(u[h].match(/[a-zA-Z0-9]/)||u.indexOf(u.substring(0,h),1)!==-1);h++);for(;h<u.length;h++){let y=u.substring(0,h),m=a.split(y),f=-1;if(m.length===2)f=m[0].length;else if(m.length>2&&m[0]===""&&n[o-1].textContent!=="")f=a.indexOf(y,1);else if(m.length===1){if(y=y.substring(0,y.length-1),m=a.split(y),m.length<=1)return s.push(e),s;h=d+1}else h===u.length-1&&(f=a.indexOf(y));if(m.length>=2&&h>d){const l=n[o-1].textContent;if(l&&typeof l=="string"){const S=ke(l).length;f=a.indexOf(y,S)}f===-1&&(f=m[0].length)}if(f!==-1){let l=Math.floor(f/c);for(;l>0&&l<e.length;){if(i+=1,i>50*n.length)return s.push(e),s;const S=ke(e.substring(0,l),r);if(S.length===f){s.push(e.substring(0,l)),e=e.substring(l),a=a.substring(f);break}else S.length<f?l+=Math.max(1,Math.floor((f-S.length)/c)):l-=Math.max(1,Math.floor((S.length-f)*c))}break}}}}return s.push(e),s}function _r(e,t){return Lr(e,t).join("/* rr_split */")}let Ar=1;const Fr=new RegExp("[^a-z0-9-_:]"),Ce=-2;function _t(){return Ar++}function Pr(e){if(e instanceof HTMLFormElement)return"form";const t=oe(e.tagName);return Fr.test(t)?"div":t}let ae,pt;const Wr=/^[^ \t\n\r\u000c]+/,Ur=/^[, \t\n\r\u000c]+/;function Br(e,t){if(t.trim()==="")return t;let r=0;function n(i){let a;const c=i.exec(t.substring(r));return c?(a=c[0],r+=a.length,a):""}const s=[];for(;n(Ur),!(r>=t.length);){let i=n(Wr);if(i.slice(-1)===",")i=ue(e,i.substring(0,i.length-1)),s.push(i);else{let a="";i=ue(e,i);let c=!1;for(;;){const o=t.charAt(r);if(o===""){s.push((i+a).trim());break}else if(c)o===")"&&(c=!1);else if(o===","){r+=1,s.push((i+a).trim());break}else o==="("&&(c=!0);a+=o,r+=1}}}return s.join(", ")}const mt=new WeakMap;function ue(e,t){return!t||t.trim()===""?t:et(e,t)}function zr(e){return!!(e.tagName==="svg"||e.ownerSVGElement)}function et(e,t){let r=mt.get(e);if(r||(r=e.createElement("a"),mt.set(e,r)),!t)t="";else if(t.startsWith("blob:")||t.startsWith("data:"))return t;return r.setAttribute("href",t),r.href}function At(e,t,r,n){return n&&(r==="src"||r==="href"&&!(t==="use"&&n[0]==="#")||r==="xlink:href"&&n[0]!=="#"||r==="background"&&["table","td","th"].includes(t)?ue(e,n):r==="srcset"?Br(e,n):r==="style"?Pe(n,et(e)):t==="object"&&r==="data"?ue(e,n):n)}function Ft(e,t,r){return["video","audio"].includes(e)&&t==="autoplay"}function Hr(e,t,r){try{if(typeof t=="string"){if(e.classList.contains(t))return!0}else for(let n=e.classList.length;n--;){const s=e.classList[n];if(t.test(s))return!0}if(r)return e.matches(r)}catch(n){}return!1}function We(e,t,r){if(!e)return!1;if(e.nodeType!==e.ELEMENT_NODE)return r?We(b.parentNode(e),t,r):!1;for(let n=e.classList.length;n--;){const s=e.classList[n];if(t.test(s))return!0}return r?We(b.parentNode(e),t,r):!1}function Pt(e,t,r,n){let s;if(Tt(e)){if(s=e,!b.childNodes(s).length)return!1}else{if(b.parentElement(e)===null)return!1;s=b.parentElement(e)}try{if(typeof t=="string"){if(n){if(s.closest(`.${t}`))return!0}else if(s.classList.contains(t))return!0}else if(We(s,t,n))return!0;if(r){if(n){if(s.closest(r))return!0}else if(s.matches(r))return!0}}catch(i){}return!1}function Gr(e,t,r){const n=e.contentWindow;if(!n)return;let s=!1,i;try{i=n.document.readyState}catch(c){return}if(i!=="complete"){const c=setTimeout(()=>{s||(t(),s=!0)},r);e.addEventListener("load",()=>{clearTimeout(c),s=!0,t()});return}const a="about:blank";if(n.location.href!==a||e.src===a||e.src==="")return setTimeout(t,0),e.addEventListener("load",t);e.addEventListener("load",t)}function jr(e,t,r){let n=!1,s;try{s=e.sheet}catch(a){return}if(s)return;const i=setTimeout(()=>{n||(t(),n=!0)},r);e.addEventListener("load",()=>{clearTimeout(i),n=!0,t()})}function Vr(e,t){const{doc:r,mirror:n,blockClass:s,blockSelector:i,needsMask:a,inlineStylesheet:c,maskInputOptions:o={},maskTextFn:u,maskInputFn:d,dataURLOptions:h={},inlineImages:y,recordCanvas:m,keepIframeSrcFn:f,newlyAddedElement:l=!1,cssCaptured:S=!1}=t,v=$r(r,n);switch(e.nodeType){case e.DOCUMENT_NODE:return e.compatMode!=="CSS1Compat"?{type:A.Document,childNodes:[],compatMode:e.compatMode}:{type:A.Document,childNodes:[]};case e.DOCUMENT_TYPE_NODE:return{type:A.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId,rootId:v};case e.ELEMENT_NODE:return Xr(e,{doc:r,blockClass:s,blockSelector:i,inlineStylesheet:c,maskInputOptions:o,maskInputFn:d,dataURLOptions:h,inlineImages:y,recordCanvas:m,keepIframeSrcFn:f,newlyAddedElement:l,rootId:v});case e.TEXT_NODE:return qr(e,{doc:r,needsMask:a,maskTextFn:u,rootId:v,cssCaptured:S});case e.CDATA_SECTION_NODE:return{type:A.CDATA,textContent:"",rootId:v};case e.COMMENT_NODE:return{type:A.Comment,textContent:b.textContent(e)||"",rootId:v};default:return!1}}function $r(e,t){if(!t.hasNode(e))return;const r=t.getId(e);return r===1?void 0:r}function qr(e,t){const{needsMask:r,maskTextFn:n,rootId:s,cssCaptured:i}=t,a=b.parentNode(e),c=a&&a.tagName;let o="";const u=c==="STYLE"?!0:void 0,d=c==="SCRIPT"?!0:void 0;return d?o="SCRIPT_PLACEHOLDER":i||(o=b.textContent(e),u&&o&&(o=Pe(o,et(t.doc)))),!u&&!d&&o&&r&&(o=n?n(o,b.parentElement(e)):o.replace(/[\S]/g,"*")),{type:A.Text,textContent:o||"",rootId:s}}function Xr(e,t){const{doc:r,blockClass:n,blockSelector:s,inlineStylesheet:i,maskInputOptions:a={},maskInputFn:c,dataURLOptions:o={},inlineImages:u,recordCanvas:d,keepIframeSrcFn:h,newlyAddedElement:y=!1,rootId:m}=t,f=Hr(e,n,s),l=Pr(e);let S={};const v=e.attributes.length;for(let g=0;g<v;g++){const M=e.attributes[g];Ft(l,M.name,M.value)||(S[M.name]=At(r,l,oe(M.name),M.value))}if(l==="link"&&i){const g=Array.from(r.styleSheets).find(T=>T.href===e.href);let M=null;g&&(M=Ye(g)),M&&(delete S.rel,delete S.href,S._cssText=M)}if(l==="style"&&e.sheet){let g=Ye(e.sheet);g&&(e.childNodes.length>1&&(g=_r(g,e)),S._cssText=g)}if(["input","textarea","select"].includes(l)){const g=e.value,M=e.checked;S.type!=="radio"&&S.type!=="checkbox"&&S.type!=="submit"&&S.type!=="button"&&g?S.value=Ae({element:e,type:Fe(e),tagName:l,value:g,maskInputOptions:a,maskInputFn:c}):M&&(S.checked=M)}if(l==="option"&&(e.selected&&!a.select?S.selected=!0:delete S.selected),l==="dialog"&&e.open&&(S.rr_open_mode=e.matches("dialog:modal")?"modal":"non-modal"),l==="canvas"&&d){if(e.__context==="2d")Or(e)||(S.rr_dataURL=e.toDataURL(o.type,o.quality));else if(!("__context"in e)){const g=e.toDataURL(o.type,o.quality),M=r.createElement("canvas");M.width=e.width,M.height=e.height;const T=M.toDataURL(o.type,o.quality);g!==T&&(S.rr_dataURL=g)}}if(l==="img"&&u){ae||(ae=r.createElement("canvas"),pt=ae.getContext("2d"));const g=e,M=g.currentSrc||g.getAttribute("src")||"<unknown-src>",T=g.crossOrigin,x=()=>{g.removeEventListener("load",x);try{ae.width=g.naturalWidth,ae.height=g.naturalHeight,pt.drawImage(g,0,0),S.rr_dataURL=ae.toDataURL(o.type,o.quality)}catch(W){if(g.crossOrigin!=="anonymous"){g.crossOrigin="anonymous",g.complete&&g.naturalWidth!==0?x():g.addEventListener("load",x);return}else console.warn(`Cannot inline img src=${M}! Error: ${W}`)}g.crossOrigin==="anonymous"&&(T?S.crossOrigin=T:g.removeAttribute("crossorigin"))};g.complete&&g.naturalWidth!==0?x():g.addEventListener("load",x)}if(["audio","video"].includes(l)){const g=S;g.rr_mediaState=e.paused?"paused":"played",g.rr_mediaCurrentTime=e.currentTime,g.rr_mediaPlaybackRate=e.playbackRate,g.rr_mediaMuted=e.muted,g.rr_mediaLoop=e.loop,g.rr_mediaVolume=e.volume}if(y||(e.scrollLeft&&(S.rr_scrollLeft=e.scrollLeft),e.scrollTop&&(S.rr_scrollTop=e.scrollTop)),f){const{width:g,height:M}=e.getBoundingClientRect();S={class:S.class,rr_width:`${g}px`,rr_height:`${M}px`}}l==="iframe"&&!h(S.src)&&(e.contentDocument||(S.rr_src=S.src),delete S.src);let C;try{customElements.get(l)&&(C=!0)}catch(g){}return{type:A.Element,tagName:l,attributes:S,childNodes:[],isSVG:zr(e)||void 0,needBlock:f,rootId:m,isCustom:C}}function k(e){return e==null?"":e.toLowerCase()}function Wt(e){return e===!0||e==="all"?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaVerification:!0,headMetaAuthorship:e==="all",headMetaDescKeywords:e==="all",headTitleMutations:e==="all"}:e||{}}function Yr(e,t){if(t.comment&&e.type===A.Comment)return!0;if(e.type===A.Element){if(t.script&&(e.tagName==="script"||e.tagName==="link"&&(e.attributes.rel==="preload"&&e.attributes.as==="script"||e.attributes.rel==="modulepreload")||e.tagName==="link"&&e.attributes.rel==="prefetch"&&typeof e.attributes.href=="string"&&Lt(e.attributes.href)==="js"))return!0;if(t.headFavicon&&(e.tagName==="link"&&e.attributes.rel==="shortcut icon"||e.tagName==="meta"&&(k(e.attributes.name).match(/^msapplication-tile(image|color)$/)||k(e.attributes.name)==="application-name"||k(e.attributes.rel)==="icon"||k(e.attributes.rel)==="apple-touch-icon"||k(e.attributes.rel)==="shortcut icon")))return!0;if(e.tagName==="meta"){if(t.headMetaDescKeywords&&k(e.attributes.name).match(/^description|keywords$/))return!0;if(t.headMetaSocial&&(k(e.attributes.property).match(/^(og|twitter|fb):/)||k(e.attributes.name).match(/^(og|twitter):/)||k(e.attributes.name)==="pinterest"))return!0;if(t.headMetaRobots&&(k(e.attributes.name)==="robots"||k(e.attributes.name)==="googlebot"||k(e.attributes.name)==="bingbot"))return!0;if(t.headMetaHttpEquiv&&e.attributes["http-equiv"]!==void 0)return!0;if(t.headMetaAuthorship&&(k(e.attributes.name)==="author"||k(e.attributes.name)==="generator"||k(e.attributes.name)==="framework"||k(e.attributes.name)==="publisher"||k(e.attributes.name)==="progid"||k(e.attributes.property).match(/^article:/)||k(e.attributes.property).match(/^product:/)))return!0;if(t.headMetaVerification&&(k(e.attributes.name)==="google-site-verification"||k(e.attributes.name)==="yandex-verification"||k(e.attributes.name)==="csrf-token"||k(e.attributes.name)==="p:domain_verify"||k(e.attributes.name)==="verify-v1"||k(e.attributes.name)==="verification"||k(e.attributes.name)==="shopify-checkout-api-token"))return!0}}return!1}function de(e,t){const{doc:r,mirror:n,blockClass:s,blockSelector:i,maskTextClass:a,maskTextSelector:c,skipChild:o=!1,inlineStylesheet:u=!0,maskInputOptions:d={},maskTextFn:h,maskInputFn:y,slimDOMOptions:m,dataURLOptions:f={},inlineImages:l=!1,recordCanvas:S=!1,onSerialize:v,onIframeLoad:C,iframeLoadTimeout:g=5e3,onStylesheetLoad:M,stylesheetLoadTimeout:T=5e3,keepIframeSrcFn:x=()=>!1,newlyAddedElement:W=!1,cssCaptured:Y=!1}=t;let{needsMask:G}=t,{preserveWhiteSpace:$=!0}=t;G||(G=Pt(e,a,c,G===void 0));const j=Vr(e,{doc:r,mirror:n,blockClass:s,blockSelector:i,needsMask:G,inlineStylesheet:u,maskInputOptions:d,maskTextFn:h,maskInputFn:y,dataURLOptions:f,inlineImages:l,recordCanvas:S,keepIframeSrcFn:x,newlyAddedElement:W,cssCaptured:Y});if(!j)return console.warn(e,"not serialized"),null;let J;n.hasNode(e)?J=n.getId(e):Yr(j,m)||!$&&j.type===A.Text&&!j.textContent.replace(/^\s+|\s+$/gm,"").length?J=Ce:J=_t();const N=Object.assign(j,{id:J});if(n.add(e,N),J===Ce)return null;v&&v(e);let pe=!o;if(N.type===A.Element){pe=pe&&!N.needBlock,delete N.needBlock;const F=b.shadowRoot(e);F&&ye(F)&&(N.isShadowHost=!0)}if((N.type===A.Document||N.type===A.Element)&&pe){m.headWhitespace&&N.type===A.Element&&N.tagName==="head"&&($=!1);const F={doc:r,mirror:n,blockClass:s,blockSelector:i,needsMask:G,maskTextClass:a,maskTextSelector:c,skipChild:o,inlineStylesheet:u,maskInputOptions:d,maskTextFn:h,maskInputFn:y,slimDOMOptions:m,dataURLOptions:f,inlineImages:l,recordCanvas:S,preserveWhiteSpace:$,onSerialize:v,onIframeLoad:C,iframeLoadTimeout:g,onStylesheetLoad:M,stylesheetLoadTimeout:T,keepIframeSrcFn:x,cssCaptured:!1};if(!(N.type===A.Element&&N.tagName==="textarea"&&N.attributes.value!==void 0)){N.type===A.Element&&N.attributes._cssText!==void 0&&typeof N.attributes._cssText=="string"&&(F.cssCaptured=!0);for(const te of Array.from(b.childNodes(e))){const Z=de(te,F);Z&&N.childNodes.push(Z)}}let V=null;if(Tt(e)&&(V=b.shadowRoot(e)))for(const te of Array.from(b.childNodes(V))){const Z=de(te,F);Z&&(ye(V)&&(Z.isShadow=!0),N.childNodes.push(Z))}}const me=b.parentNode(e);return me&&ge(me)&&ye(me)&&(N.isShadow=!0),N.type===A.Element&&N.tagName==="iframe"&&Gr(e,()=>{const F=e.contentDocument;if(F&&C){const V=de(F,{doc:F,mirror:n,blockClass:s,blockSelector:i,needsMask:G,maskTextClass:a,maskTextSelector:c,skipChild:!1,inlineStylesheet:u,maskInputOptions:d,maskTextFn:h,maskInputFn:y,slimDOMOptions:m,dataURLOptions:f,inlineImages:l,recordCanvas:S,preserveWhiteSpace:$,onSerialize:v,onIframeLoad:C,iframeLoadTimeout:g,onStylesheetLoad:M,stylesheetLoadTimeout:T,keepIframeSrcFn:x});V&&C(e,V)}},g),N.type===A.Element&&N.tagName==="link"&&typeof N.attributes.rel=="string"&&(N.attributes.rel==="stylesheet"||N.attributes.rel==="preload"&&typeof N.attributes.href=="string"&&Lt(N.attributes.href)==="css")&&jr(e,()=>{if(M){const F=de(e,{doc:r,mirror:n,blockClass:s,blockSelector:i,needsMask:G,maskTextClass:a,maskTextSelector:c,skipChild:!1,inlineStylesheet:u,maskInputOptions:d,maskTextFn:h,maskInputFn:y,slimDOMOptions:m,dataURLOptions:f,inlineImages:l,recordCanvas:S,preserveWhiteSpace:$,onSerialize:v,onIframeLoad:C,iframeLoadTimeout:g,onStylesheetLoad:M,stylesheetLoadTimeout:T,keepIframeSrcFn:x});F&&M(e,F)}},T),N}function Jr(e,t){const{mirror:r=new Dt,blockClass:n="rr-block",blockSelector:s=null,maskTextClass:i="rr-mask",maskTextSelector:a=null,inlineStylesheet:c=!0,inlineImages:o=!1,recordCanvas:u=!1,maskAllInputs:d=!1,maskTextFn:h,maskInputFn:y,slimDOM:m=!1,dataURLOptions:f,preserveWhiteSpace:l,onSerialize:S,onIframeLoad:v,iframeLoadTimeout:C,onStylesheetLoad:g,stylesheetLoadTimeout:M,keepIframeSrcFn:T=()=>!1}=t,x=d===!0?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:d===!1?{password:!0}:d,W=Wt(m);return de(e,{doc:e,mirror:r,blockClass:n,blockSelector:s,maskTextClass:i,maskTextSelector:a,skipChild:!1,inlineStylesheet:c,maskInputOptions:x,maskTextFn:h,maskInputFn:y,slimDOMOptions:W,dataURLOptions:f,inlineImages:o,recordCanvas:u,preserveWhiteSpace:l,onSerialize:S,onIframeLoad:v,iframeLoadTimeout:C,onStylesheetLoad:g,stylesheetLoadTimeout:M,keepIframeSrcFn:T,newlyAddedElement:!1})}class tt{constructor(...t){p(this,"parentElement",null),p(this,"parentNode",null),p(this,"ownerDocument"),p(this,"firstChild",null),p(this,"lastChild",null),p(this,"previousSibling",null),p(this,"nextSibling",null),p(this,"ELEMENT_NODE",1),p(this,"TEXT_NODE",3),p(this,"nodeType"),p(this,"nodeName"),p(this,"RRNodeType")}get childNodes(){const t=[];let r=this.firstChild;for(;r;)t.push(r),r=r.nextSibling;return t}contains(t){if(t instanceof tt){if(t.ownerDocument!==this.ownerDocument)return!1;if(t===this)return!0}else return!1;for(;t.parentNode;){if(t.parentNode===this)return!0;t=t.parentNode}return!1}appendChild(t){throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")}insertBefore(t,r){throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")}removeChild(t){throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")}toString(){return"RRNode"}}function U(e,t,r=document){const n={capture:!0,passive:!0};return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}const ce=`Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;let gt={map:{},getId(){return console.error(ce),-1},getNode(){return console.error(ce),null},removeNodeFromMap(){console.error(ce)},has(){return console.error(ce),!1},reset(){console.error(ce)}};typeof window!="undefined"&&window.Proxy&&window.Reflect&&(gt=new Proxy(gt,{get(e,t,r){return t==="map"&&console.error(ce),Reflect.get(e,t,r)}}));function ve(e,t,r={}){let n=null,s=0;return function(...i){const a=Date.now();!s&&r.leading===!1&&(s=a);const c=t-(a-s),o=this;c<=0||c>t?(n&&(clearTimeout(n),n=null),s=a,e.apply(o,i)):!n&&r.trailing!==!1&&(n=setTimeout(()=>{s=r.leading===!1?0:Date.now(),n=null,e.apply(o,i)},c))}}function ze(e,t,r,n,s=window){const i=s.Object.getOwnPropertyDescriptor(e,t);return s.Object.defineProperty(e,t,n?r:{set(a){setTimeout(()=>{r.set.call(this,a)},0),i&&i.set&&i.set.call(this,a)}}),()=>ze(e,t,i||{},!0)}function Ut(e){var t,r,n,s;const i=e.document;return{left:i.scrollingElement?i.scrollingElement.scrollLeft:e.pageXOffset!==void 0?e.pageXOffset:i.documentElement.scrollLeft||(i==null?void 0:i.body)&&((t=b.parentElement(i.body))==null?void 0:t.scrollLeft)||((r=i==null?void 0:i.body)==null?void 0:r.scrollLeft)||0,top:i.scrollingElement?i.scrollingElement.scrollTop:e.pageYOffset!==void 0?e.pageYOffset:(i==null?void 0:i.documentElement.scrollTop)||(i==null?void 0:i.body)&&((n=b.parentElement(i.body))==null?void 0:n.scrollTop)||((s=i==null?void 0:i.body)==null?void 0:s.scrollTop)||0}}function Bt(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}function zt(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth}function Ht(e){return e?e.nodeType===e.ELEMENT_NODE?e:b.parentElement(e):null}function B(e,t,r,n){if(!e)return!1;const s=Ht(e);if(!s)return!1;try{if(typeof t=="string"){if(s.classList.contains(t)||n&&s.closest("."+t)!==null)return!0}else if(We(s,t,n))return!0}catch(i){}return!!(r&&(s.matches(r)||n&&s.closest(r)!==null))}function Zr(e,t){return t.getId(e)!==-1}function qe(e,t,r){return e.tagName==="TITLE"&&r.headTitleMutations?!0:t.getId(e)===Ce}function Gt(e,t){if(ge(e))return!1;const r=t.getId(e);if(!t.has(r))return!0;const n=b.parentNode(e);return n&&n.nodeType===e.DOCUMENT_NODE?!1:n?Gt(n,t):!0}function Je(e){return!!e.changedTouches}function Qr(e=window){"NodeList"in e&&!e.NodeList.prototype.forEach&&(e.NodeList.prototype.forEach=Array.prototype.forEach),"DOMTokenList"in e&&!e.DOMTokenList.prototype.forEach&&(e.DOMTokenList.prototype.forEach=Array.prototype.forEach)}function jt(e,t){return!!(e.nodeName==="IFRAME"&&t.getMeta(e))}function Vt(e,t){return!!(e.nodeName==="LINK"&&e.nodeType===e.ELEMENT_NODE&&e.getAttribute&&e.getAttribute("rel")==="stylesheet"&&t.getMeta(e))}function Ze(e){return e?e instanceof tt&&"shadowRoot"in e?!!e.shadowRoot:!!b.shadowRoot(e):!1}class Kr{constructor(){p(this,"id",1),p(this,"styleIDMap",new WeakMap),p(this,"idStyleMap",new Map)}getId(t){var r;return(r=this.styleIDMap.get(t))!=null?r:-1}has(t){return this.styleIDMap.has(t)}add(t,r){if(this.has(t))return this.getId(t);let n;return r===void 0?n=this.id++:n=r,this.styleIDMap.set(t,n),this.idStyleMap.set(n,t),n}getStyle(t){return this.idStyleMap.get(t)||null}reset(){this.styleIDMap=new WeakMap,this.idStyleMap=new Map,this.id=1}generateId(){return this.id++}}function $t(e){var t;let r=null;return"getRootNode"in e&&((t=b.getRootNode(e))==null?void 0:t.nodeType)===Node.DOCUMENT_FRAGMENT_NODE&&b.host(b.getRootNode(e))&&(r=b.host(b.getRootNode(e))),r}function en(e){let t=e,r;for(;r=$t(t);)t=r;return t}function tn(e){const t=b.ownerDocument(e);if(!t)return!1;const r=en(e);return b.contains(t,r)}function qt(e){const t=b.ownerDocument(e);return t?b.contains(t,e)||tn(e):!1}function yt(e){return"__ln"in e}class rn{constructor(){p(this,"length",0),p(this,"head",null),p(this,"tail",null)}get(t){if(t>=this.length)throw new Error("Position outside of list range");let r=this.head;for(let n=0;n<t;n++)r=(r==null?void 0:r.next)||null;return r}addNode(t){const r={value:t,previous:null,next:null};if(t.__ln=r,t.previousSibling&&yt(t.previousSibling)){const n=t.previousSibling.__ln.next;r.next=n,r.previous=t.previousSibling.__ln,t.previousSibling.__ln.next=r,n&&(n.previous=r)}else if(t.nextSibling&&yt(t.nextSibling)&&t.nextSibling.__ln.previous){const n=t.nextSibling.__ln.previous;r.previous=n,r.next=t.nextSibling.__ln,t.nextSibling.__ln.previous=r,n&&(n.next=r)}else this.head&&(this.head.previous=r),r.next=this.head,this.head=r;r.next===null&&(this.tail=r),this.length++}removeNode(t){const r=t.__ln;this.head&&(r.previous?(r.previous.next=r.next,r.next?r.next.previous=r.previous:this.tail=r.previous):(this.head=r.next,this.head?this.head.previous=null:this.tail=null),t.__ln&&delete t.__ln,this.length--)}}const St=(e,t)=>`${e}@${t}`;class nn{constructor(){p(this,"frozen",!1),p(this,"locked",!1),p(this,"texts",[]),p(this,"attributes",[]),p(this,"attributeMap",new WeakMap),p(this,"removes",[]),p(this,"mapRemoves",[]),p(this,"movedMap",{}),p(this,"addedSet",new Set),p(this,"movedSet",new Set),p(this,"droppedSet",new Set),p(this,"removesSubTreeCache",new Set),p(this,"mutationCb"),p(this,"blockClass"),p(this,"blockSelector"),p(this,"maskTextClass"),p(this,"maskTextSelector"),p(this,"inlineStylesheet"),p(this,"maskInputOptions"),p(this,"maskTextFn"),p(this,"maskInputFn"),p(this,"keepIframeSrcFn"),p(this,"recordCanvas"),p(this,"inlineImages"),p(this,"slimDOMOptions"),p(this,"dataURLOptions"),p(this,"doc"),p(this,"mirror"),p(this,"iframeManager"),p(this,"stylesheetManager"),p(this,"shadowDomManager"),p(this,"canvasManager"),p(this,"processedNodeManager"),p(this,"unattachedDoc"),p(this,"processMutations",t=>{t.forEach(this.processMutation),this.emit()}),p(this,"emit",()=>{if(this.frozen||this.locked)return;const t=[],r=new Set,n=new rn,s=o=>{let u=o,d=Ce;for(;d===Ce;)u=u&&u.nextSibling,d=u&&this.mirror.getId(u);return d},i=o=>{const u=b.parentNode(o);if(!u||!qt(o))return;let d=!1;if(o.nodeType===Node.TEXT_NODE){const f=u.tagName;if(f==="TEXTAREA")return;f==="STYLE"&&this.addedSet.has(u)&&(d=!0)}const h=ge(u)?this.mirror.getId($t(o)):this.mirror.getId(u),y=s(o);if(h===-1||y===-1)return n.addNode(o);const m=de(o,{doc:this.doc,mirror:this.mirror,blockClass:this.blockClass,blockSelector:this.blockSelector,maskTextClass:this.maskTextClass,maskTextSelector:this.maskTextSelector,skipChild:!0,newlyAddedElement:!0,inlineStylesheet:this.inlineStylesheet,maskInputOptions:this.maskInputOptions,maskTextFn:this.maskTextFn,maskInputFn:this.maskInputFn,slimDOMOptions:this.slimDOMOptions,dataURLOptions:this.dataURLOptions,recordCanvas:this.recordCanvas,inlineImages:this.inlineImages,onSerialize:f=>{jt(f,this.mirror)&&this.iframeManager.addIframe(f),Vt(f,this.mirror)&&this.stylesheetManager.trackLinkElement(f),Ze(o)&&this.shadowDomManager.addShadowRoot(b.shadowRoot(o),this.doc)},onIframeLoad:(f,l)=>{this.iframeManager.attachIframe(f,l),this.shadowDomManager.observeAttachShadow(f)},onStylesheetLoad:(f,l)=>{this.stylesheetManager.attachLinkElement(f,l)},cssCaptured:d});m&&(t.push({parentId:h,nextId:y,node:m}),r.add(m.id))};for(;this.mapRemoves.length;)this.mirror.removeNodeFromMap(this.mapRemoves.shift());for(const o of this.movedSet)bt(this.removesSubTreeCache,o,this.mirror)&&!this.movedSet.has(b.parentNode(o))||i(o);for(const o of this.addedSet)!Ct(this.droppedSet,o)&&!bt(this.removesSubTreeCache,o,this.mirror)||Ct(this.movedSet,o)?i(o):this.droppedSet.add(o);let a=null;for(;n.length;){let o=null;if(a){const u=this.mirror.getId(b.parentNode(a.value)),d=s(a.value);u!==-1&&d!==-1&&(o=a)}if(!o){let u=n.tail;for(;u;){const d=u;if(u=u.previous,d){const h=this.mirror.getId(b.parentNode(d.value));if(s(d.value)===-1)continue;if(h!==-1){o=d;break}else{const m=d.value,f=b.parentNode(m);if(f&&f.nodeType===Node.DOCUMENT_FRAGMENT_NODE){const l=b.host(f);if(this.mirror.getId(l)!==-1){o=d;break}}}}}}if(!o){for(;n.head;)n.removeNode(n.head.value);break}a=o.previous,n.removeNode(o.value),i(o.value)}const c={texts:this.texts.map(o=>{const u=o.node,d=b.parentNode(u);return d&&d.tagName==="TEXTAREA"&&this.genTextAreaValueMutation(d),{id:this.mirror.getId(u),value:o.value}}).filter(o=>!r.has(o.id)).filter(o=>this.mirror.has(o.id)),attributes:this.attributes.map(o=>{const{attributes:u}=o;if(typeof u.style=="string"){const d=JSON.stringify(o.styleDiff),h=JSON.stringify(o._unchangedStyles);d.length<u.style.length&&(d+h).split("var(").length===u.style.split("var(").length&&(u.style=o.styleDiff)}return{id:this.mirror.getId(o.node),attributes:u}}).filter(o=>!r.has(o.id)).filter(o=>this.mirror.has(o.id)),removes:this.removes,adds:t};!c.texts.length&&!c.attributes.length&&!c.removes.length&&!c.adds.length||(this.texts=[],this.attributes=[],this.attributeMap=new WeakMap,this.removes=[],this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.removesSubTreeCache=new Set,this.movedMap={},this.mutationCb(c))}),p(this,"genTextAreaValueMutation",t=>{let r=this.attributeMap.get(t);r||(r={node:t,attributes:{},styleDiff:{},_unchangedStyles:{}},this.attributes.push(r),this.attributeMap.set(t,r));const n=Array.from(b.childNodes(t),s=>b.textContent(s)||"").join("");r.attributes.value=Ae({element:t,maskInputOptions:this.maskInputOptions,tagName:t.tagName,type:Fe(t),value:n,maskInputFn:this.maskInputFn})}),p(this,"processMutation",t=>{if(!qe(t.target,this.mirror,this.slimDOMOptions))switch(t.type){case"characterData":{const r=b.textContent(t.target);!B(t.target,this.blockClass,this.blockSelector,!1)&&r!==t.oldValue&&this.texts.push({value:Pt(t.target,this.maskTextClass,this.maskTextSelector,!0)&&r?this.maskTextFn?this.maskTextFn(r,Ht(t.target)):r.replace(/[\S]/g,"*"):r,node:t.target});break}case"attributes":{const r=t.target;let n=t.attributeName,s=t.target.getAttribute(n);if(n==="value"){const a=Fe(r);s=Ae({element:r,maskInputOptions:this.maskInputOptions,tagName:r.tagName,type:a,value:s,maskInputFn:this.maskInputFn})}if(B(t.target,this.blockClass,this.blockSelector,!1)||s===t.oldValue)return;let i=this.attributeMap.get(t.target);if(r.tagName==="IFRAME"&&n==="src"&&!this.keepIframeSrcFn(s))if(!r.contentDocument)n="rr_src";else return;if(i||(i={node:t.target,attributes:{},styleDiff:{},_unchangedStyles:{}},this.attributes.push(i),this.attributeMap.set(t.target,i)),n==="type"&&r.tagName==="INPUT"&&(t.oldValue||"").toLowerCase()==="password"&&r.setAttribute("data-rr-is-password","true"),!Ft(r.tagName,n))if(i.attributes[n]=At(this.doc,oe(r.tagName),oe(n),s),n==="style"){if(!this.unattachedDoc)try{this.unattachedDoc=document.implementation.createHTMLDocument()}catch(c){this.unattachedDoc=this.doc}const a=this.unattachedDoc.createElement("span");t.oldValue&&a.setAttribute("style",t.oldValue);for(const c of Array.from(r.style)){const o=r.style.getPropertyValue(c),u=r.style.getPropertyPriority(c);o!==a.style.getPropertyValue(c)||u!==a.style.getPropertyPriority(c)?u===""?i.styleDiff[c]=o:i.styleDiff[c]=[o,u]:i._unchangedStyles[c]=[o,u]}for(const c of Array.from(a.style))r.style.getPropertyValue(c)===""&&(i.styleDiff[c]=!1)}else n==="open"&&r.tagName==="DIALOG"&&(r.matches("dialog:modal")?i.attributes.rr_open_mode="modal":i.attributes.rr_open_mode="non-modal");break}case"childList":{if(B(t.target,this.blockClass,this.blockSelector,!0))return;if(t.target.tagName==="TEXTAREA"){this.genTextAreaValueMutation(t.target);return}t.addedNodes.forEach(r=>this.genAdds(r,t.target)),t.removedNodes.forEach(r=>{const n=this.mirror.getId(r),s=ge(t.target)?this.mirror.getId(b.host(t.target)):this.mirror.getId(t.target);B(t.target,this.blockClass,this.blockSelector,!1)||qe(r,this.mirror,this.slimDOMOptions)||!Zr(r,this.mirror)||(this.addedSet.has(r)?(Qe(this.addedSet,r),this.droppedSet.add(r)):this.addedSet.has(t.target)&&n===-1||Gt(t.target,this.mirror)||(this.movedSet.has(r)&&this.movedMap[St(n,s)]?Qe(this.movedSet,r):(this.removes.push({parentId:s,id:n,isShadow:ge(t.target)&&ye(t.target)?!0:void 0}),sn(r,this.removesSubTreeCache))),this.mapRemoves.push(r))});break}}}),p(this,"genAdds",(t,r)=>{if(!this.processedNodeManager.inOtherBuffer(t,this)&&!(this.addedSet.has(t)||this.movedSet.has(t))){if(this.mirror.hasNode(t)){if(qe(t,this.mirror,this.slimDOMOptions))return;this.movedSet.add(t);let n=null;r&&this.mirror.hasNode(r)&&(n=this.mirror.getId(r)),n&&n!==-1&&(this.movedMap[St(this.mirror.getId(t),n)]=!0)}else this.addedSet.add(t),this.droppedSet.delete(t);B(t,this.blockClass,this.blockSelector,!1)||(b.childNodes(t).forEach(n=>this.genAdds(n)),Ze(t)&&b.childNodes(b.shadowRoot(t)).forEach(n=>{this.processedNodeManager.add(n,this),this.genAdds(n,t)}))}})}init(t){["mutationCb","blockClass","blockSelector","maskTextClass","maskTextSelector","inlineStylesheet","maskInputOptions","maskTextFn","maskInputFn","keepIframeSrcFn","recordCanvas","inlineImages","slimDOMOptions","dataURLOptions","doc","mirror","iframeManager","stylesheetManager","shadowDomManager","canvasManager","processedNodeManager"].forEach(r=>{this[r]=t[r]})}freeze(){this.frozen=!0,this.canvasManager.freeze()}unfreeze(){this.frozen=!1,this.canvasManager.unfreeze(),this.emit()}isFrozen(){return this.frozen}lock(){this.locked=!0,this.canvasManager.lock()}unlock(){this.locked=!1,this.canvasManager.unlock(),this.emit()}reset(){this.shadowDomManager.reset(),this.canvasManager.reset()}}function Qe(e,t){e.delete(t),b.childNodes(t).forEach(r=>Qe(e,r))}function sn(e,t){const r=[e];for(;r.length;){const n=r.pop();t.has(n)||(t.add(n),b.childNodes(n).forEach(s=>r.push(s)))}}function bt(e,t,r){return e.size===0?!1:on(e,t)}function on(e,t,r){const n=b.parentNode(t);return n?e.has(n):!1}function Ct(e,t){return e.size===0?!1:Xt(e,t)}function Xt(e,t){const r=b.parentNode(t);return r?e.has(r)?!0:Xt(e,r):!1}let Se;function an(e){Se=e}function ln(){Se=void 0}const I=e=>Se?(...r)=>{try{return e(...r)}catch(n){if(Se&&Se(n)===!0)return;throw n}}:e,se=[];function Me(e){try{if("composedPath"in e){const t=e.composedPath();if(t.length)return t[0]}else if("path"in e&&e.path.length)return e.path[0]}catch(t){}return e&&e.target}function Yt(e,t){const r=new nn;se.push(r),r.init(e);const[n,s]=kt(),i=new n(I(r.processMutations.bind(r)));return i.observe(t,{attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),[i,s]}function cn({mousemoveCb:e,sampling:t,doc:r,mirror:n}){if(t.mousemove===!1)return()=>{};const s=typeof t.mousemove=="number"?t.mousemove:50,i=typeof t.mousemoveCallback=="number"?t.mousemoveCallback:500;let a=[],c;const o=ve(I(h=>{const y=Date.now()-c;e(a.map(m=>(m.timeOffset-=y,m)),h),a=[],c=null}),i),u=I(ve(I(h=>{const y=Me(h),{clientX:m,clientY:f}=Je(h)?h.changedTouches[0]:h;c||(c=be()),a.push({x:m,y:f,id:n.getId(y),timeOffset:be()-c}),o(typeof DragEvent!="undefined"&&h instanceof DragEvent?w.Drag:h instanceof MouseEvent?w.MouseMove:w.TouchMove)}),s,{trailing:!1})),d=[U("mousemove",u,r),U("touchmove",u,r),U("drag",u,r)];return I(()=>{d.forEach(h=>h())})}function un({mouseInteractionCb:e,doc:t,mirror:r,blockClass:n,blockSelector:s,sampling:i}){if(i.mouseInteraction===!1)return()=>{};const a=i.mouseInteraction===!0||i.mouseInteraction===void 0?{}:i.mouseInteraction,c=[];let o=null;const u=d=>h=>{const y=Me(h);if(B(y,n,s,!0))return;let m=null,f=d;if("pointerType"in h){switch(h.pointerType){case"mouse":m=Q.Mouse;break;case"touch":m=Q.Touch;break;case"pen":m=Q.Pen;break}m===Q.Touch?z[d]===z.MouseDown?f="TouchStart":z[d]===z.MouseUp&&(f="TouchEnd"):Q.Pen}else Je(h)&&(m=Q.Touch);m!==null?(o=m,(f.startsWith("Touch")&&m===Q.Touch||f.startsWith("Mouse")&&m===Q.Mouse)&&(m=null)):z[d]===z.Click&&(m=o,o=null);const l=Je(h)?h.changedTouches[0]:h;if(!l)return;const S=r.getId(y),{clientX:v,clientY:C}=l;I(e)(P({type:z[f],id:S,x:v,y:C},m!==null&&{pointerType:m}))};return Object.keys(z).filter(d=>Number.isNaN(Number(d))&&!d.endsWith("_Departed")&&a[d]!==!1).forEach(d=>{let h=oe(d);const y=u(d);if(window.PointerEvent)switch(z[d]){case z.MouseDown:case z.MouseUp:h=h.replace("mouse","pointer");break;case z.TouchStart:case z.TouchEnd:return}c.push(U(h,y,t))}),I(()=>{c.forEach(d=>d())})}function Jt({scrollCb:e,doc:t,mirror:r,blockClass:n,blockSelector:s,sampling:i}){const a=I(ve(I(c=>{const o=Me(c);if(!o||B(o,n,s,!0))return;const u=r.getId(o);if(o===t&&t.defaultView){const d=Ut(t.defaultView);e({id:u,x:d.left,y:d.top})}else e({id:u,x:o.scrollLeft,y:o.scrollTop})}),i.scroll||100));return U("scroll",a,t)}function dn({viewportResizeCb:e},{win:t}){let r=-1,n=-1;const s=I(ve(I(()=>{const i=Bt(),a=zt();(r!==i||n!==a)&&(e({width:Number(a),height:Number(i)}),r=i,n=a)}),200));return U("resize",s,t)}const hn=["INPUT","TEXTAREA","SELECT"],vt=new WeakMap;function fn({inputCb:e,doc:t,mirror:r,blockClass:n,blockSelector:s,ignoreClass:i,ignoreSelector:a,maskInputOptions:c,maskInputFn:o,sampling:u,userTriggeredOnInput:d}){function h(C){let g=Me(C);const M=C.isTrusted,T=g&&g.tagName;if(g&&T==="OPTION"&&(g=b.parentElement(g)),!g||!T||hn.indexOf(T)<0||B(g,n,s,!0)||g.classList.contains(i)||a&&g.matches(a))return;let x=g.value,W=!1;const Y=Fe(g)||"";Y==="radio"||Y==="checkbox"?W=g.checked:(c[T.toLowerCase()]||c[Y])&&(x=Ae({element:g,maskInputOptions:c,tagName:T,type:Y,value:x,maskInputFn:o})),y(g,d?{text:x,isChecked:W,userTriggered:M}:{text:x,isChecked:W});const G=g.name;Y==="radio"&&G&&W&&t.querySelectorAll(`input[type="radio"][name="${G}"]`).forEach($=>{if($!==g){const j=$.value;y($,d?{text:j,isChecked:!W,userTriggered:!1}:{text:j,isChecked:!W})}})}function y(C,g){const M=vt.get(C);if(!M||M.text!==g.text||M.isChecked!==g.isChecked){vt.set(C,g);const T=r.getId(C);I(e)(Oe(P({},g),{id:T}))}}const f=(u.input==="last"?["change"]:["input","change"]).map(C=>U(C,I(h),t)),l=t.defaultView;if(!l)return()=>{f.forEach(C=>C())};const S=l.Object.getOwnPropertyDescriptor(l.HTMLInputElement.prototype,"value"),v=[[l.HTMLInputElement.prototype,"value"],[l.HTMLInputElement.prototype,"checked"],[l.HTMLSelectElement.prototype,"value"],[l.HTMLTextAreaElement.prototype,"value"],[l.HTMLSelectElement.prototype,"selectedIndex"],[l.HTMLOptionElement.prototype,"selected"]];return S&&S.set&&f.push(...v.map(C=>ze(C[0],C[1],{set(){I(h)({target:this,isTrusted:!1})}},!1,l))),I(()=>{f.forEach(C=>C())})}function Ue(e){const t=[];function r(n,s){if(Te("CSSGroupingRule")&&n.parentRule instanceof CSSGroupingRule||Te("CSSMediaRule")&&n.parentRule instanceof CSSMediaRule||Te("CSSSupportsRule")&&n.parentRule instanceof CSSSupportsRule||Te("CSSConditionRule")&&n.parentRule instanceof CSSConditionRule){const a=Array.from(n.parentRule.cssRules).indexOf(n);return s.unshift(a),r(n.parentRule,s)}else if(n.parentStyleSheet){const a=Array.from(n.parentStyleSheet.cssRules).indexOf(n);s.unshift(a)}return s}return r(e,t)}function ee(e,t,r){let n,s;return e?(e.ownerNode?n=t.getId(e.ownerNode):s=r.getId(e),{styleId:s,id:n}):{}}function pn({styleSheetRuleCb:e,mirror:t,stylesheetManager:r},{win:n}){if(!n.CSSStyleSheet||!n.CSSStyleSheet.prototype)return()=>{};const s=n.CSSStyleSheet.prototype.insertRule;n.CSSStyleSheet.prototype.insertRule=new Proxy(s,{apply:I((d,h,y)=>{const[m,f]=y,{id:l,styleId:S}=ee(h,t,r.styleMirror);return(l&&l!==-1||S&&S!==-1)&&e({id:l,styleId:S,adds:[{rule:m,index:f}]}),d.apply(h,y)})}),n.CSSStyleSheet.prototype.addRule=function(d,h,y=this.cssRules.length){const m=`${d} { ${h} }`;return n.CSSStyleSheet.prototype.insertRule.apply(this,[m,y])};const i=n.CSSStyleSheet.prototype.deleteRule;n.CSSStyleSheet.prototype.deleteRule=new Proxy(i,{apply:I((d,h,y)=>{const[m]=y,{id:f,styleId:l}=ee(h,t,r.styleMirror);return(f&&f!==-1||l&&l!==-1)&&e({id:f,styleId:l,removes:[{index:m}]}),d.apply(h,y)})}),n.CSSStyleSheet.prototype.removeRule=function(d){return n.CSSStyleSheet.prototype.deleteRule.apply(this,[d])};let a;n.CSSStyleSheet.prototype.replace&&(a=n.CSSStyleSheet.prototype.replace,n.CSSStyleSheet.prototype.replace=new Proxy(a,{apply:I((d,h,y)=>{const[m]=y,{id:f,styleId:l}=ee(h,t,r.styleMirror);return(f&&f!==-1||l&&l!==-1)&&e({id:f,styleId:l,replace:m}),d.apply(h,y)})}));let c;n.CSSStyleSheet.prototype.replaceSync&&(c=n.CSSStyleSheet.prototype.replaceSync,n.CSSStyleSheet.prototype.replaceSync=new Proxy(c,{apply:I((d,h,y)=>{const[m]=y,{id:f,styleId:l}=ee(h,t,r.styleMirror);return(f&&f!==-1||l&&l!==-1)&&e({id:f,styleId:l,replaceSync:m}),d.apply(h,y)})}));const o={};xe("CSSGroupingRule")?o.CSSGroupingRule=n.CSSGroupingRule:(xe("CSSMediaRule")&&(o.CSSMediaRule=n.CSSMediaRule),xe("CSSConditionRule")&&(o.CSSConditionRule=n.CSSConditionRule),xe("CSSSupportsRule")&&(o.CSSSupportsRule=n.CSSSupportsRule));const u={};return Object.entries(o).forEach(([d,h])=>{u[d]={insertRule:h.prototype.insertRule,deleteRule:h.prototype.deleteRule},h.prototype.insertRule=new Proxy(u[d].insertRule,{apply:I((y,m,f)=>{const[l,S]=f,{id:v,styleId:C}=ee(m.parentStyleSheet,t,r.styleMirror);return(v&&v!==-1||C&&C!==-1)&&e({id:v,styleId:C,adds:[{rule:l,index:[...Ue(m),S||0]}]}),y.apply(m,f)})}),h.prototype.deleteRule=new Proxy(u[d].deleteRule,{apply:I((y,m,f)=>{const[l]=f,{id:S,styleId:v}=ee(m.parentStyleSheet,t,r.styleMirror);return(S&&S!==-1||v&&v!==-1)&&e({id:S,styleId:v,removes:[{index:[...Ue(m),l]}]}),y.apply(m,f)})})}),I(()=>{n.CSSStyleSheet.prototype.insertRule=s,n.CSSStyleSheet.prototype.deleteRule=i,a&&(n.CSSStyleSheet.prototype.replace=a),c&&(n.CSSStyleSheet.prototype.replaceSync=c),Object.entries(o).forEach(([d,h])=>{h.prototype.insertRule=u[d].insertRule,h.prototype.deleteRule=u[d].deleteRule})})}function Zt({mirror:e,stylesheetManager:t},r){var n,s,i;let a=null;r.nodeName==="#document"?a=e.getId(r):a=e.getId(b.host(r));const c=r.nodeName==="#document"?(n=r.defaultView)==null?void 0:n.Document:(i=(s=r.ownerDocument)==null?void 0:s.defaultView)==null?void 0:i.ShadowRoot,o=c!=null&&c.prototype?Object.getOwnPropertyDescriptor(c==null?void 0:c.prototype,"adoptedStyleSheets"):void 0;return a===null||a===-1||!c||!o?()=>{}:(Object.defineProperty(r,"adoptedStyleSheets",{configurable:o.configurable,enumerable:o.enumerable,get(){var u;return(u=o.get)==null?void 0:u.call(this)},set(u){var d;const h=(d=o.set)==null?void 0:d.call(this,u);if(a!==null&&a!==-1)try{t.adoptStyleSheets(u,a)}catch(y){}return h}}),I(()=>{Object.defineProperty(r,"adoptedStyleSheets",{configurable:o.configurable,enumerable:o.enumerable,get:o.get,set:o.set})}))}function mn({styleDeclarationCb:e,mirror:t,ignoreCSSAttributes:r,stylesheetManager:n},{win:s}){const i=s.CSSStyleDeclaration.prototype.setProperty;s.CSSStyleDeclaration.prototype.setProperty=new Proxy(i,{apply:I((c,o,u)=>{var d;const[h,y,m]=u;if(r.has(h))return i.apply(o,[h,y,m]);const{id:f,styleId:l}=ee((d=o.parentRule)==null?void 0:d.parentStyleSheet,t,n.styleMirror);return(f&&f!==-1||l&&l!==-1)&&e({id:f,styleId:l,set:{property:h,value:y,priority:m},index:Ue(o.parentRule)}),c.apply(o,u)})});const a=s.CSSStyleDeclaration.prototype.removeProperty;return s.CSSStyleDeclaration.prototype.removeProperty=new Proxy(a,{apply:I((c,o,u)=>{var d;const[h]=u;if(r.has(h))return a.apply(o,[h]);const{id:y,styleId:m}=ee((d=o.parentRule)==null?void 0:d.parentStyleSheet,t,n.styleMirror);return(y&&y!==-1||m&&m!==-1)&&e({id:y,styleId:m,remove:{property:h},index:Ue(o.parentRule)}),c.apply(o,u)})}),I(()=>{s.CSSStyleDeclaration.prototype.setProperty=i,s.CSSStyleDeclaration.prototype.removeProperty=a})}function gn({mediaInteractionCb:e,blockClass:t,blockSelector:r,mirror:n,sampling:s,doc:i}){const a=I(o=>ve(I(u=>{const d=Me(u);if(!d||B(d,t,r,!0))return;const{currentTime:h,volume:y,muted:m,playbackRate:f,loop:l}=d;e({type:o,id:n.getId(d),currentTime:h,volume:y,muted:m,playbackRate:f,loop:l})}),s.media||500)),c=[U("play",a(le.Play),i),U("pause",a(le.Pause),i),U("seeked",a(le.Seeked),i),U("volumechange",a(le.VolumeChange),i),U("ratechange",a(le.RateChange),i)];return I(()=>{c.forEach(o=>o())})}function yn({fontCb:e,doc:t}){const r=t.defaultView;if(!r)return()=>{};const n=[],s=new WeakMap,i=r.FontFace;r.FontFace=function(o,u,d){const h=new i(o,u,d);return s.set(h,{family:o,buffer:typeof u!="string",descriptors:d,fontSource:typeof u=="string"?u:JSON.stringify(Array.from(new Uint8Array(u)))}),h};const a=ie(t.fonts,"add",function(c){return function(o){return setTimeout(I(()=>{const u=s.get(o);u&&(e(u),s.delete(o))}),0),c.apply(this,[o])}});return n.push(()=>{r.FontFace=i}),n.push(a),I(()=>{n.forEach(c=>c())})}function Sn(e){const{doc:t,mirror:r,blockClass:n,blockSelector:s,selectionCb:i}=e;let a=!0;const c=I(()=>{const o=t.getSelection();if(!o||a&&(o!=null&&o.isCollapsed))return;a=o.isCollapsed||!1;const u=[],d=o.rangeCount||0;for(let h=0;h<d;h++){const y=o.getRangeAt(h),{startContainer:m,startOffset:f,endContainer:l,endOffset:S}=y;B(m,n,s,!0)||B(l,n,s,!0)||u.push({start:r.getId(m),startOffset:f,end:r.getId(l),endOffset:S})}i({ranges:u})});return c(),U("selectionchange",c)}function bn({doc:e,customElementCb:t}){const r=e.defaultView;return!r||!r.customElements?()=>{}:ie(r.customElements,"define",function(s){return function(i,a,c){try{t({define:{name:i}})}catch(o){console.warn(`Custom element callback failed for ${i}`)}return s.apply(this,[i,a,c])}})}function Cn(e,t){const{mutationCb:r,mousemoveCb:n,mouseInteractionCb:s,scrollCb:i,viewportResizeCb:a,inputCb:c,mediaInteractionCb:o,styleSheetRuleCb:u,styleDeclarationCb:d,canvasMutationCb:h,fontCb:y,selectionCb:m,customElementCb:f}=e;e.mutationCb=(...l)=>{t.mutation&&t.mutation(...l),r(...l)},e.mousemoveCb=(...l)=>{t.mousemove&&t.mousemove(...l),n(...l)},e.mouseInteractionCb=(...l)=>{t.mouseInteraction&&t.mouseInteraction(...l),s(...l)},e.scrollCb=(...l)=>{t.scroll&&t.scroll(...l),i(...l)},e.viewportResizeCb=(...l)=>{t.viewportResize&&t.viewportResize(...l),a(...l)},e.inputCb=(...l)=>{t.input&&t.input(...l),c(...l)},e.mediaInteractionCb=(...l)=>{t.mediaInteaction&&t.mediaInteaction(...l),o(...l)},e.styleSheetRuleCb=(...l)=>{t.styleSheetRule&&t.styleSheetRule(...l),u(...l)},e.styleDeclarationCb=(...l)=>{t.styleDeclaration&&t.styleDeclaration(...l),d(...l)},e.canvasMutationCb=(...l)=>{t.canvasMutation&&t.canvasMutation(...l),h(...l)},e.fontCb=(...l)=>{t.font&&t.font(...l),y(...l)},e.selectionCb=(...l)=>{t.selection&&t.selection(...l),m(...l)},e.customElementCb=(...l)=>{t.customElement&&t.customElement(...l),f(...l)}}function vn(e,t={}){const r=e.doc.defaultView;if(!r)return()=>{};Cn(e,t);let n,s=()=>{};e.recordDOM&&([n,s]=Yt(e,e.doc));const i=cn(e),a=un(e),c=Jt(e),o=dn(e,{win:r}),u=fn(e),d=gn(e);let h=()=>{},y=()=>{},m=()=>{},f=()=>{};e.recordDOM&&(h=pn(e,{win:r}),y=Zt(e,e.doc),m=mn(e,{win:r}),e.collectFonts&&(f=yn(e)));const l=Sn(e),S=bn(e),v=[];for(const C of e.plugins)v.push(C.observer(C.callback,r,C.options));return I(()=>{se.forEach(C=>C.reset()),n==null||n.disconnect(),s(),i(),a(),c(),o(),u(),d(),h(),y(),m(),f(),l(),S(),v.forEach(C=>C())})}function Te(e){return typeof window[e]!="undefined"}function xe(e){return!!(typeof window[e]!="undefined"&&window[e].prototype&&"insertRule"in window[e].prototype&&"deleteRule"in window[e].prototype)}class Mt{constructor(t){p(this,"iframeIdToRemoteIdMap",new WeakMap),p(this,"iframeRemoteIdToIdMap",new WeakMap),this.generateIdFn=t}getId(t,r,n,s){const i=n||this.getIdToRemoteIdMap(t),a=s||this.getRemoteIdToIdMap(t);let c=i.get(r);return c||(c=this.generateIdFn(),i.set(r,c),a.set(c,r)),c}getIds(t,r){const n=this.getIdToRemoteIdMap(t),s=this.getRemoteIdToIdMap(t);return r.map(i=>this.getId(t,i,n,s))}getRemoteId(t,r,n){const s=n||this.getRemoteIdToIdMap(t);if(typeof r!="number")return r;const i=s.get(r);return i||-1}getRemoteIds(t,r){const n=this.getRemoteIdToIdMap(t);return r.map(s=>this.getRemoteId(t,s,n))}reset(t){if(!t){this.iframeIdToRemoteIdMap=new WeakMap,this.iframeRemoteIdToIdMap=new WeakMap;return}this.iframeIdToRemoteIdMap.delete(t),this.iframeRemoteIdToIdMap.delete(t)}getIdToRemoteIdMap(t){let r=this.iframeIdToRemoteIdMap.get(t);return r||(r=new Map,this.iframeIdToRemoteIdMap.set(t,r)),r}getRemoteIdToIdMap(t){let r=this.iframeRemoteIdToIdMap.get(t);return r||(r=new Map,this.iframeRemoteIdToIdMap.set(t,r)),r}}class Mn{constructor(t){p(this,"iframes",new WeakMap),p(this,"crossOriginIframeMap",new WeakMap),p(this,"crossOriginIframeMirror",new Mt(_t)),p(this,"crossOriginIframeStyleMirror"),p(this,"crossOriginIframeRootIdMap",new WeakMap),p(this,"mirror"),p(this,"mutationCb"),p(this,"wrappedEmit"),p(this,"loadListener"),p(this,"stylesheetManager"),p(this,"recordCrossOriginIframes"),this.mutationCb=t.mutationCb,this.wrappedEmit=t.wrappedEmit,this.stylesheetManager=t.stylesheetManager,this.recordCrossOriginIframes=t.recordCrossOriginIframes,this.crossOriginIframeStyleMirror=new Mt(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),this.mirror=t.mirror,this.recordCrossOriginIframes&&window.addEventListener("message",this.handleMessage.bind(this))}addIframe(t){this.iframes.set(t,!0),t.contentWindow&&this.crossOriginIframeMap.set(t.contentWindow,t)}addLoadListener(t){this.loadListener=t}attachIframe(t,r){var n,s;this.mutationCb({adds:[{parentId:this.mirror.getId(t),nextId:null,node:r}],removes:[],texts:[],attributes:[],isAttachIframe:!0}),this.recordCrossOriginIframes&&((n=t.contentWindow)==null||n.addEventListener("message",this.handleMessage.bind(this))),(s=this.loadListener)==null||s.call(this,t),t.contentDocument&&t.contentDocument.adoptedStyleSheets&&t.contentDocument.adoptedStyleSheets.length>0&&this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets,this.mirror.getId(t.contentDocument))}handleMessage(t){const r=t;if(r.data.type!=="rrweb"||r.origin!==r.data.origin||!t.source)return;const s=this.crossOriginIframeMap.get(t.source);if(!s)return;const i=this.transformCrossOriginEvent(s,r.data.event);i&&this.wrappedEmit(i,r.data.isCheckout)}transformCrossOriginEvent(t,r){var n;switch(r.type){case R.FullSnapshot:{this.crossOriginIframeMirror.reset(t),this.crossOriginIframeStyleMirror.reset(t),this.replaceIdOnNode(r.data.node,t);const s=r.data.node.id;return this.crossOriginIframeRootIdMap.set(t,s),this.patchRootIdOnNode(r.data.node,s),{timestamp:r.timestamp,type:R.IncrementalSnapshot,data:{source:w.Mutation,adds:[{parentId:this.mirror.getId(t),nextId:null,node:r.data.node}],removes:[],texts:[],attributes:[],isAttachIframe:!0}}}case R.Meta:case R.Load:case R.DomContentLoaded:return!1;case R.Plugin:return r;case R.Custom:return this.replaceIds(r.data.payload,t,["id","parentId","previousId","nextId"]),r;case R.IncrementalSnapshot:switch(r.data.source){case w.Mutation:return r.data.adds.forEach(s=>{this.replaceIds(s,t,["parentId","nextId","previousId"]),this.replaceIdOnNode(s.node,t);const i=this.crossOriginIframeRootIdMap.get(t);i&&this.patchRootIdOnNode(s.node,i)}),r.data.removes.forEach(s=>{this.replaceIds(s,t,["parentId","id"])}),r.data.attributes.forEach(s=>{this.replaceIds(s,t,["id"])}),r.data.texts.forEach(s=>{this.replaceIds(s,t,["id"])}),r;case w.Drag:case w.TouchMove:case w.MouseMove:return r.data.positions.forEach(s=>{this.replaceIds(s,t,["id"])}),r;case w.ViewportResize:return!1;case w.MediaInteraction:case w.MouseInteraction:case w.Scroll:case w.CanvasMutation:case w.Input:return this.replaceIds(r.data,t,["id"]),r;case w.StyleSheetRule:case w.StyleDeclaration:return this.replaceIds(r.data,t,["id"]),this.replaceStyleIds(r.data,t,["styleId"]),r;case w.Font:return r;case w.Selection:return r.data.ranges.forEach(s=>{this.replaceIds(s,t,["start","end"])}),r;case w.AdoptedStyleSheet:return this.replaceIds(r.data,t,["id"]),this.replaceStyleIds(r.data,t,["styleIds"]),(n=r.data.styles)==null||n.forEach(s=>{this.replaceStyleIds(s,t,["styleId"])}),r}}return!1}replace(t,r,n,s){for(const i of s)!Array.isArray(r[i])&&typeof r[i]!="number"||(Array.isArray(r[i])?r[i]=t.getIds(n,r[i]):r[i]=t.getId(n,r[i]));return r}replaceIds(t,r,n){return this.replace(this.crossOriginIframeMirror,t,r,n)}replaceStyleIds(t,r,n){return this.replace(this.crossOriginIframeStyleMirror,t,r,n)}replaceIdOnNode(t,r){this.replaceIds(t,r,["id","rootId"]),"childNodes"in t&&t.childNodes.forEach(n=>{this.replaceIdOnNode(n,r)})}patchRootIdOnNode(t,r){t.type!==A.Document&&!t.rootId&&(t.rootId=r),"childNodes"in t&&t.childNodes.forEach(n=>{this.patchRootIdOnNode(n,r)})}}class wn{constructor(t){p(this,"shadowDoms",new WeakSet),p(this,"mutationCb"),p(this,"scrollCb"),p(this,"bypassOptions"),p(this,"mirror"),p(this,"restoreHandlers",[]),this.mutationCb=t.mutationCb,this.scrollCb=t.scrollCb,this.bypassOptions=t.bypassOptions,this.mirror=t.mirror,this.init()}init(){this.reset(),this.patchAttachShadow(Element,document)}addShadowRoot(t,r){if(!ye(t)||this.shadowDoms.has(t))return;this.shadowDoms.add(t);const[n]=Yt(Oe(P({},this.bypassOptions),{doc:r,mutationCb:this.mutationCb,mirror:this.mirror,shadowDomManager:this}),t);this.restoreHandlers.push(()=>n.disconnect()),this.restoreHandlers.push(Jt(Oe(P({},this.bypassOptions),{scrollCb:this.scrollCb,doc:t,mirror:this.mirror}))),setTimeout(()=>{t.adoptedStyleSheets&&t.adoptedStyleSheets.length>0&&this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets,this.mirror.getId(b.host(t))),this.restoreHandlers.push(Zt({mirror:this.mirror,stylesheetManager:this.bypassOptions.stylesheetManager},t))},0)}observeAttachShadow(t){!t.contentWindow||!t.contentDocument||this.patchAttachShadow(t.contentWindow.Element,t.contentDocument)}patchAttachShadow(t,r){const n=this;this.restoreHandlers.push(ie(t.prototype,"attachShadow",function(s){return function(i){const a=s.call(this,i),c=b.shadowRoot(this);return c&&qt(this)&&n.addShadowRoot(c,r),a}}))}reset(){this.restoreHandlers.forEach(t=>{try{t()}catch(r){}}),this.restoreHandlers=[],this.shadowDoms=new WeakSet}}var he="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",In=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var De=0;De<he.length;De++)In[he.charCodeAt(De)]=De;var Rn=function(e){var t=new Uint8Array(e),r,n=t.length,s="";for(r=0;r<n;r+=3)s+=he[t[r]>>2],s+=he[(t[r]&3)<<4|t[r+1]>>4],s+=he[(t[r+1]&15)<<2|t[r+2]>>6],s+=he[t[r+2]&63];return n%3===2?s=s.substring(0,s.length-1)+"=":n%3===1&&(s=s.substring(0,s.length-2)+"=="),s};const wt=new Map;function Nn(e,t){let r=wt.get(e);return r||(r=new Map,wt.set(e,r)),r.has(t)||r.set(t,[]),r.get(t)}const Qt=(e,t,r)=>{if(!e||!(er(e,t)||typeof e=="object"))return;const n=e.constructor.name,s=Nn(r,n);let i=s.indexOf(e);return i===-1&&(i=s.length,s.push(e)),i};function Le(e,t,r){if(e instanceof Array)return e.map(n=>Le(n,t,r));if(e===null)return e;if(e instanceof Float32Array||e instanceof Float64Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Int16Array||e instanceof Int8Array||e instanceof Uint8ClampedArray)return{rr_type:e.constructor.name,args:[Object.values(e)]};if(e instanceof ArrayBuffer){const n=e.constructor.name,s=Rn(e);return{rr_type:n,base64:s}}else{if(e instanceof DataView)return{rr_type:e.constructor.name,args:[Le(e.buffer,t,r),e.byteOffset,e.byteLength]};if(e instanceof HTMLImageElement){const n=e.constructor.name,{src:s}=e;return{rr_type:n,src:s}}else if(e instanceof HTMLCanvasElement){const n="HTMLImageElement",s=e.toDataURL();return{rr_type:n,src:s}}else{if(e instanceof ImageData)return{rr_type:e.constructor.name,args:[Le(e.data,t,r),e.width,e.height]};if(er(e,t)||typeof e=="object"){const n=e.constructor.name,s=Qt(e,t,r);return{rr_type:n,index:s}}}}return e}const Kt=(e,t,r)=>e.map(n=>Le(n,t,r)),er=(e,t)=>!!["WebGLActiveInfo","WebGLBuffer","WebGLFramebuffer","WebGLProgram","WebGLRenderbuffer","WebGLShader","WebGLShaderPrecisionFormat","WebGLTexture","WebGLUniformLocation","WebGLVertexArrayObject","WebGLVertexArrayObjectOES"].filter(s=>typeof t[s]=="function").find(s=>e instanceof t[s]);function On(e,t,r,n){const s=[],i=Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);for(const a of i)try{if(typeof t.CanvasRenderingContext2D.prototype[a]!="function")continue;const c=ie(t.CanvasRenderingContext2D.prototype,a,function(o){return function(...u){return B(this.canvas,r,n,!0)||setTimeout(()=>{const d=Kt(u,t,this);e(this.canvas,{type:fe["2D"],property:a,args:d})},0),o.apply(this,u)}});s.push(c)}catch(c){const o=ze(t.CanvasRenderingContext2D.prototype,a,{set(u){e(this.canvas,{type:fe["2D"],property:a,args:[u],setter:!0})}});s.push(o)}return()=>{s.forEach(a=>a())}}function En(e){return e==="experimental-webgl"?"webgl":e}function It(e,t,r,n){const s=[];try{const i=ie(e.HTMLCanvasElement.prototype,"getContext",function(a){return function(c,...o){if(!B(this,t,r,!0)){const u=En(c);if("__context"in this||(this.__context=u),n&&["webgl","webgl2"].includes(u))if(o[0]&&typeof o[0]=="object"){const d=o[0];d.preserveDrawingBuffer||(d.preserveDrawingBuffer=!0)}else o.splice(0,1,{preserveDrawingBuffer:!0})}return a.apply(this,[c,...o])}});s.push(i)}catch(i){console.error("failed to patch HTMLCanvasElement.prototype.getContext")}return()=>{s.forEach(i=>i())}}function Rt(e,t,r,n,s,i){const a=[],c=Object.getOwnPropertyNames(e);for(const o of c)if(!["isContextLost","canvas","drawingBufferWidth","drawingBufferHeight"].includes(o))try{if(typeof e[o]!="function")continue;const u=ie(e,o,function(d){return function(...h){const y=d.apply(this,h);if(Qt(y,i,this),"tagName"in this.canvas&&!B(this.canvas,n,s,!0)){const m=Kt(h,i,this),f={type:t,property:o,args:m};r(this.canvas,f)}return y}});a.push(u)}catch(u){const d=ze(e,o,{set(h){r(this.canvas,{type:t,property:o,args:[h],setter:!0})}});a.push(d)}return a}function kn(e,t,r,n){const s=[];return typeof t.WebGLRenderingContext!="undefined"&&s.push(...Rt(t.WebGLRenderingContext.prototype,fe.WebGL,e,r,n,t)),typeof t.WebGL2RenderingContext!="undefined"&&s.push(...Rt(t.WebGL2RenderingContext.prototype,fe.WebGL2,e,r,n,t)),()=>{s.forEach(i=>i())}}const tr=`(function() {
  "use strict";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }
  var encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";
    for (i2 = 0; i2 < len; i2 += 3) {
      base64 += chars[bytes[i2] >> 2];
      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];
      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];
      base64 += chars[bytes[i2 + 2] & 63];
    }
    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }
    return base64;
  };
  const lastBlobMap = /* @__PURE__ */ new Map();
  const transparentBlobMap = /* @__PURE__ */ new Map();
  async function getTransparentBlobFor(width, height, dataURLOptions) {
    const id = \`\${width}-\${height}\`;
    if ("OffscreenCanvas" in globalThis) {
      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);
      const offscreen = new OffscreenCanvas(width, height);
      offscreen.getContext("2d");
      const blob = await offscreen.convertToBlob(dataURLOptions);
      const arrayBuffer = await blob.arrayBuffer();
      const base64 = encode(arrayBuffer);
      transparentBlobMap.set(id, base64);
      return base64;
    } else {
      return "";
    }
  }
  const worker = self;
  worker.onmessage = async function(e) {
    if ("OffscreenCanvas" in globalThis) {
      const { id, bitmap, width, height, dataURLOptions } = e.data;
      const transparentBase64 = getTransparentBlobFor(
        width,
        height,
        dataURLOptions
      );
      const offscreen = new OffscreenCanvas(width, height);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(bitmap, 0, 0);
      bitmap.close();
      const blob = await offscreen.convertToBlob(dataURLOptions);
      const type = blob.type;
      const arrayBuffer = await blob.arrayBuffer();
      const base64 = encode(arrayBuffer);
      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {
        lastBlobMap.set(id, base64);
        return worker.postMessage({ id });
      }
      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });
      worker.postMessage({
        id,
        type,
        base64,
        width,
        height
      });
      lastBlobMap.set(id, base64);
    } else {
      return worker.postMessage({ id: e.data.id });
    }
  };
})();
//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map
`,Nt=typeof self!="undefined"&&self.Blob&&new Blob([tr],{type:"text/javascript;charset=utf-8"});function Tn(e){let t;try{if(t=Nt&&(self.URL||self.webkitURL).createObjectURL(Nt),!t)throw"";const r=new Worker(t,{name:e==null?void 0:e.name});return r.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),r}catch(r){return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(tr),{name:e==null?void 0:e.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class xn{constructor(t){p(this,"pendingCanvasMutations",new Map),p(this,"rafStamps",{latestId:0,invokeId:null}),p(this,"mirror"),p(this,"mutationCb"),p(this,"resetObservers"),p(this,"frozen",!1),p(this,"locked",!1),p(this,"processMutation",(o,u)=>{(this.rafStamps.invokeId&&this.rafStamps.latestId!==this.rafStamps.invokeId||!this.rafStamps.invokeId)&&(this.rafStamps.invokeId=this.rafStamps.latestId),this.pendingCanvasMutations.has(o)||this.pendingCanvasMutations.set(o,[]),this.pendingCanvasMutations.get(o).push(u)});const{sampling:r="all",win:n,blockClass:s,blockSelector:i,recordCanvas:a,dataURLOptions:c}=t;this.mutationCb=t.mutationCb,this.mirror=t.mirror,a&&r==="all"&&this.initCanvasMutationObserver(n,s,i),a&&typeof r=="number"&&this.initCanvasFPSObserver(r,n,s,i,{dataURLOptions:c})}reset(){this.pendingCanvasMutations.clear(),this.resetObservers&&this.resetObservers()}freeze(){this.frozen=!0}unfreeze(){this.frozen=!1}lock(){this.locked=!0}unlock(){this.locked=!1}initCanvasFPSObserver(t,r,n,s,i){const a=It(r,n,s,!0),c=new Map,o=new Tn;o.onmessage=f=>{const{id:l}=f.data;if(c.set(l,!1),!("base64"in f.data))return;const{base64:S,type:v,width:C,height:g}=f.data;this.mutationCb({id:l,type:fe["2D"],commands:[{property:"clearRect",args:[0,0,C,g]},{property:"drawImage",args:[{rr_type:"ImageBitmap",args:[{rr_type:"Blob",data:[{rr_type:"ArrayBuffer",base64:S}],type:v}]},0,0]}]})};const u=1e3/t;let d=0,h;const y=()=>{const f=[];return r.document.querySelectorAll("canvas").forEach(l=>{B(l,n,s,!0)||f.push(l)}),f},m=f=>{if(d&&f-d<u){h=requestAnimationFrame(m);return}d=f,y().forEach(async l=>{var S;const v=this.mirror.getId(l);if(c.get(v)||l.width===0||l.height===0)return;if(c.set(v,!0),["webgl","webgl2"].includes(l.__context)){const g=l.getContext(l.__context);((S=g==null?void 0:g.getContextAttributes())==null?void 0:S.preserveDrawingBuffer)===!1&&g.clear(g.COLOR_BUFFER_BIT)}const C=await createImageBitmap(l);o.postMessage({id:v,bitmap:C,width:l.width,height:l.height,dataURLOptions:i.dataURLOptions},[C])}),h=requestAnimationFrame(m)};h=requestAnimationFrame(m),this.resetObservers=()=>{a(),cancelAnimationFrame(h)}}initCanvasMutationObserver(t,r,n){this.startRAFTimestamping(),this.startPendingCanvasMutationFlusher();const s=It(t,r,n,!1),i=On(this.processMutation.bind(this),t,r,n),a=kn(this.processMutation.bind(this),t,r,n);this.resetObservers=()=>{s(),i(),a()}}startPendingCanvasMutationFlusher(){requestAnimationFrame(()=>this.flushPendingCanvasMutations())}startRAFTimestamping(){const t=r=>{this.rafStamps.latestId=r,requestAnimationFrame(t)};requestAnimationFrame(t)}flushPendingCanvasMutations(){this.pendingCanvasMutations.forEach((t,r)=>{const n=this.mirror.getId(r);this.flushPendingCanvasMutationFor(r,n)}),requestAnimationFrame(()=>this.flushPendingCanvasMutations())}flushPendingCanvasMutationFor(t,r){if(this.frozen||this.locked)return;const n=this.pendingCanvasMutations.get(t);if(!n||r===-1)return;const s=n.map(a=>{const u=a,{type:c}=u;return ct(u,["type"])}),{type:i}=n[0];this.mutationCb({id:r,type:i,commands:s}),this.pendingCanvasMutations.delete(t)}}class Dn{constructor(t){p(this,"trackedLinkElements",new WeakSet),p(this,"mutationCb"),p(this,"adoptedStyleSheetCb"),p(this,"styleMirror",new Kr),this.mutationCb=t.mutationCb,this.adoptedStyleSheetCb=t.adoptedStyleSheetCb}attachLinkElement(t,r){"_cssText"in r.attributes&&this.mutationCb({adds:[],removes:[],texts:[],attributes:[{id:r.id,attributes:r.attributes}]}),this.trackLinkElement(t)}trackLinkElement(t){this.trackedLinkElements.has(t)||(this.trackedLinkElements.add(t),this.trackStylesheetInLinkElement(t))}adoptStyleSheets(t,r){if(t.length===0)return;const n={id:r,styleIds:[]},s=[];for(const i of t){let a;this.styleMirror.has(i)?a=this.styleMirror.getId(i):(a=this.styleMirror.add(i),s.push({styleId:a,rules:Array.from(i.rules||CSSRule,(c,o)=>({rule:xt(c,i.href),index:o}))})),n.styleIds.push(a)}s.length>0&&(n.styles=s),this.adoptedStyleSheetCb(n)}reset(){this.styleMirror.reset(),this.trackedLinkElements=new WeakSet}trackStylesheetInLinkElement(t){}}class Ln{constructor(){p(this,"nodeMap",new WeakMap),p(this,"active",!1)}inOtherBuffer(t,r){const n=this.nodeMap.get(t);return n&&Array.from(n).some(s=>s!==r)}add(t,r){this.active||(this.active=!0,requestAnimationFrame(()=>{this.nodeMap=new WeakMap,this.active=!1})),this.nodeMap.set(t,(this.nodeMap.get(t)||new Set).add(r))}destroy(){}}let _,_e,Xe,Be=!1;try{if(Array.from([1],e=>e*2)[0]!==2){const e=document.createElement("iframe");document.body.appendChild(e),Array.from=((ut=e.contentWindow)==null?void 0:ut.Array.from)||Array.from,document.body.removeChild(e)}}catch(e){console.debug("Unable to override Array.from",e)}const X=Nr();function we(e={}){const{emit:t,checkoutEveryNms:r,checkoutEveryNth:n,blockClass:s="rr-block",blockSelector:i=null,ignoreClass:a="rr-ignore",ignoreSelector:c=null,maskTextClass:o="rr-mask",maskTextSelector:u=null,inlineStylesheet:d=!0,maskAllInputs:h,maskInputOptions:y,slimDOMOptions:m,maskInputFn:f,maskTextFn:l,hooks:S,packFn:v,sampling:C={},dataURLOptions:g={},mousemoveWait:M,recordDOM:T=!0,recordCanvas:x=!1,recordCrossOriginIframes:W=!1,recordAfter:Y=e.recordAfter==="DOMContentLoaded"?e.recordAfter:"load",userTriggeredOnInput:G=!1,collectFonts:$=!1,inlineImages:j=!1,plugins:J,keepIframeSrcFn:N=()=>!1,ignoreCSSAttributes:pe=new Set([]),errorHandler:me}=e;an(me);const F=W?window.parent===window:!0;let V=!1;if(!F)try{window.parent.document&&(V=!1)}catch(O){V=!0}if(F&&!t)throw new Error("emit function is required");if(!F&&!V)return()=>{};M!==void 0&&C.mousemove===void 0&&(C.mousemove=M),X.reset();const te=h===!0?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:y!==void 0?y:{password:!0},Z=Wt(m);Qr();let rt,He=0;const nt=O=>{for(const q of J||[])q.eventProcessor&&(O=q.eventProcessor(O));return v&&!V&&(O=v(O)),O};_=(O,q)=>{var D;const L=O;if(L.timestamp=be(),(D=se[0])!=null&&D.isFrozen()&&L.type!==R.FullSnapshot&&!(L.type===R.IncrementalSnapshot&&L.data.source===w.Mutation)&&se.forEach(H=>H.unfreeze()),F)t==null||t(nt(L),q);else if(V){const H={type:"rrweb",event:nt(L),origin:window.location.origin,isCheckout:q};window.parent.postMessage(H,"*")}if(L.type===R.FullSnapshot)rt=L,He=0;else if(L.type===R.IncrementalSnapshot){if(L.data.source===w.Mutation&&L.data.isAttachIframe)return;He++;const H=n&&He>=n,E=r&&L.timestamp-rt.timestamp>r;(H||E)&&_e(!0)}};const Ie=O=>{_({type:R.IncrementalSnapshot,data:P({source:w.Mutation},O)})},st=O=>_({type:R.IncrementalSnapshot,data:P({source:w.Scroll},O)}),ot=O=>_({type:R.IncrementalSnapshot,data:P({source:w.CanvasMutation},O)}),rr=O=>_({type:R.IncrementalSnapshot,data:P({source:w.AdoptedStyleSheet},O)}),re=new Dn({mutationCb:Ie,adoptedStyleSheetCb:rr}),ne=new Mn({mirror:X,mutationCb:Ie,stylesheetManager:re,recordCrossOriginIframes:W,wrappedEmit:_});for(const O of J||[])O.getMirror&&O.getMirror({nodeMirror:X,crossOriginIframeMirror:ne.crossOriginIframeMirror,crossOriginIframeStyleMirror:ne.crossOriginIframeStyleMirror});const Ge=new Ln;Xe=new xn({recordCanvas:x,mutationCb:ot,win:window,blockClass:s,blockSelector:i,mirror:X,sampling:C.canvas,dataURLOptions:g});const Re=new wn({mutationCb:Ie,scrollCb:st,bypassOptions:{blockClass:s,blockSelector:i,maskTextClass:o,maskTextSelector:u,inlineStylesheet:d,maskInputOptions:te,dataURLOptions:g,maskTextFn:l,maskInputFn:f,recordCanvas:x,inlineImages:j,sampling:C,slimDOMOptions:Z,iframeManager:ne,stylesheetManager:re,canvasManager:Xe,keepIframeSrcFn:N,processedNodeManager:Ge},mirror:X});_e=(O=!1)=>{if(!T)return;_({type:R.Meta,data:{href:window.location.href,width:zt(),height:Bt()}},O),re.reset(),Re.init(),se.forEach(D=>D.lock());const q=Jr(document,{mirror:X,blockClass:s,blockSelector:i,maskTextClass:o,maskTextSelector:u,inlineStylesheet:d,maskAllInputs:te,maskTextFn:l,maskInputFn:f,slimDOM:Z,dataURLOptions:g,recordCanvas:x,inlineImages:j,onSerialize:D=>{jt(D,X)&&ne.addIframe(D),Vt(D,X)&&re.trackLinkElement(D),Ze(D)&&Re.addShadowRoot(b.shadowRoot(D),document)},onIframeLoad:(D,L)=>{ne.attachIframe(D,L),Re.observeAttachShadow(D)},onStylesheetLoad:(D,L)=>{re.attachLinkElement(D,L)},keepIframeSrcFn:N});if(!q)return console.warn("Failed to snapshot the document");_({type:R.FullSnapshot,data:{node:q,initialOffset:Ut(window)}},O),se.forEach(D=>D.unlock()),document.adoptedStyleSheets&&document.adoptedStyleSheets.length>0&&re.adoptStyleSheets(document.adoptedStyleSheets,X.getId(document))};try{const O=[],q=L=>{var H;return I(vn)({mutationCb:Ie,mousemoveCb:(E,je)=>_({type:R.IncrementalSnapshot,data:{source:je,positions:E}}),mouseInteractionCb:E=>_({type:R.IncrementalSnapshot,data:P({source:w.MouseInteraction},E)}),scrollCb:st,viewportResizeCb:E=>_({type:R.IncrementalSnapshot,data:P({source:w.ViewportResize},E)}),inputCb:E=>_({type:R.IncrementalSnapshot,data:P({source:w.Input},E)}),mediaInteractionCb:E=>_({type:R.IncrementalSnapshot,data:P({source:w.MediaInteraction},E)}),styleSheetRuleCb:E=>_({type:R.IncrementalSnapshot,data:P({source:w.StyleSheetRule},E)}),styleDeclarationCb:E=>_({type:R.IncrementalSnapshot,data:P({source:w.StyleDeclaration},E)}),canvasMutationCb:ot,fontCb:E=>_({type:R.IncrementalSnapshot,data:P({source:w.Font},E)}),selectionCb:E=>{_({type:R.IncrementalSnapshot,data:P({source:w.Selection},E)})},customElementCb:E=>{_({type:R.IncrementalSnapshot,data:P({source:w.CustomElement},E)})},blockClass:s,ignoreClass:a,ignoreSelector:c,maskTextClass:o,maskTextSelector:u,maskInputOptions:te,inlineStylesheet:d,sampling:C,recordDOM:T,recordCanvas:x,inlineImages:j,userTriggeredOnInput:G,collectFonts:$,doc:L,maskInputFn:f,maskTextFn:l,keepIframeSrcFn:N,blockSelector:i,slimDOMOptions:Z,dataURLOptions:g,mirror:X,iframeManager:ne,stylesheetManager:re,shadowDomManager:Re,processedNodeManager:Ge,canvasManager:Xe,ignoreCSSAttributes:pe,plugins:((H=J==null?void 0:J.filter(E=>E.observer))==null?void 0:H.map(E=>({observer:E.observer,options:E.options,callback:je=>_({type:R.Plugin,data:{plugin:E.name,payload:je}})})))||[]},S)};ne.addLoadListener(L=>{try{O.push(q(L.contentDocument))}catch(H){console.warn(H)}});const D=()=>{_e(),O.push(q(document)),Be=!0};return["interactive","complete"].includes(document.readyState)?D():(O.push(U("DOMContentLoaded",()=>{_({type:R.DomContentLoaded,data:{}}),Y==="DOMContentLoaded"&&D()})),O.push(U("load",()=>{_({type:R.Load,data:{}}),Y==="load"&&D()},window))),()=>{O.forEach(L=>{try{L()}catch(H){String(H).toLowerCase().includes("cross-origin")||console.warn(H)}}),Ge.destroy(),Be=!1,ln()}}catch(O){console.warn(O)}}we.addCustomEvent=(e,t)=>{if(!Be)throw new Error("please add custom event after start recording");_({type:R.Custom,data:{tag:e,payload:t}})};we.freezePage=()=>{se.forEach(e=>e.freeze())};we.takeFullSnapshot=e=>{if(!Be)throw new Error("please take full snapshot after start recording");_e(e)};we.mirror=X;exports.record=we;
if (typeof module.exports == "object" && typeof exports == "object") {
  var __cp = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of Object.getOwnPropertyNames(from)) {
        if (!Object.prototype.hasOwnProperty.call(to, key) && key !== except)
        Object.defineProperty(to, key, {
          get: () => from[key],
          enumerable: !(desc = Object.getOwnPropertyDescriptor(from, key)) || desc.enumerable,
        });
      }
    }
    return to;
  };
  module.exports = __cp(module.exports, exports);
}
return module.exports;
}))
//# sourceMappingURL=record.umd.min.cjs.map

// END PASTE

var rrwebRecord = window.rrwebRecord.record;


function lengthInUtf8Bytes(str) {
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

function generateRandomId() {
  return [...Array(40)].map(() => Math.random().toString(36)[2]).join('');
}

const LOGS_ENABLED = false;
function log(...args) {
  if (LOGS_ENABLED) {
    console.log(...args);
  }
}

const POST_URL = new URL("./events", document.currentScript.src).href;
const POST_INTERVAL_SECONDS = 15;
const KEEPALIVE_BYTE_LIMIT = 60000; // Fetch payloads >64kb cannot use keepalive: true
const RECORDING_TAG_SELECTOR = 'meta[name="spectator-sport-recording-tag"]';
const RECORDING_LABEL_SELECTOR = 'meta[name="spectator-sport-recording-label"]';
const STOP_SELECTOR = 'meta[name="spectator-sport-stop"]';

// sessionId is retained for backward compatibility with older servers that
// store events under a Session/SessionWindow pair. New servers key on recordingId.
function getSessionId() {
  const STORAGE_NAME = "spectator_sport_session_id";
  let id = window.localStorage.getItem(STORAGE_NAME);
  if (!id) {
    id = generateRandomId();
    window.localStorage.setItem(STORAGE_NAME, id);
  }
  return id;
}

function getRecordingId() {
  const LEGACY_STORAGE_NAME = "spectator_sport_window_id";
  const STORAGE_NAME = "spectator_sport_recording_id";
  let id = window.sessionStorage.getItem(LEGACY_STORAGE_NAME);
  if (!id) {
    id = window.sessionStorage.getItem(STORAGE_NAME);
    if (!id) {
      id = generateRandomId();
      window.sessionStorage.setItem(STORAGE_NAME, id);
    }
  }
  return id;
}

class Recorder {
  constructor(sessionId, recordingId) {
    this.sessionId = sessionId;
    this.recordingId = recordingId;

    this.events = new Events(sessionId, recordingId);

    this.stopRrwebCallback = null; // rrweb's stop function
  }

  start() {
    if (!this.stopRrwebCallback) {
      this.stopRrwebCallback = rrwebRecord({
        emit: this.events.add.bind(this.events),
      });
    }

    this.events.startFlushing();
  }

  stop() {
    this.events.stopFlushing();

    if (this.stopRrwebCallback) {
      this.stopRrwebCallback();
      this.stopRrwebCallback = null;
    }

    this.events.transmit(true);
  }

  pause() {
    this.events.stopFlushing();
    this.events.transmit(true);
  }

  unpause() {
    this.start();
  }
}

class Events {
  constructor(sessionId, recordingId) {
    this.sessionId = sessionId;
    this.recordingId = recordingId;

    this.events = [];
    this.tags = new Set();
    this.labels = new Set();

    this.payloadBytes = 0;
    this.flushIntervalId = null;
  }

  startFlushing() {
    if (!this.flushIntervalId) {
      this.flushIntervalId = setInterval(() => {
        this.transmit(false);
      }, POST_INTERVAL_SECONDS * 1000);
    }
  }

  stopFlushing() {
    if (this.flushIntervalId) {
      clearInterval(this.flushIntervalId);
      this.flushIntervalId = null;
    }
  }

  add(event) {
    this.events.push(event);
    this.payloadBytes += lengthInUtf8Bytes(JSON.stringify(event));
    if (this.payloadBytes > KEEPALIVE_BYTE_LIMIT) {
      this.debouncedTransmit();
    }
  }

  addTag(signedTag) {
    if (this.tags.has(signedTag)) return;
    this.tags.add(signedTag);
    this.payloadBytes += lengthInUtf8Bytes(JSON.stringify(signedTag));
    this.debouncedTransmit();
  }

  addLabel(signedLabel) {
    if (this.labels.has(signedLabel)) return;
    this.labels.add(signedLabel);
    this.payloadBytes += lengthInUtf8Bytes(JSON.stringify(signedLabel));
    this.debouncedTransmit();
  }

  transmit(keepalive = false) {
    if (this.events.length === 0 && this.tags.size === 0 && this.labels.size === 0) {
      return;
    }

    const events = [...this.events];
    const tags = [...this.tags];
    const labels = [...this.labels];
    this.events = [];
    this.tags = new Set();
    this.labels = new Set();
    this.payloadBytes = 0;

    // sessionId is sent for backward compatibility with older servers; new servers key on recordingId.
    const payload = { sessionId: this.sessionId, recordingId: this.recordingId, events };
    if (tags.length > 0) payload.tags = tags;
    if (labels.length > 0) payload.labels = labels;

    const body = JSON.stringify(payload);

    if (keepalive && lengthInUtf8Bytes(body) > KEEPALIVE_BYTE_LIMIT) {
      keepalive = false;
    }

    fetch(POST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      keepalive: keepalive,
      body,
    }).catch((error) => {
      console.error(error);
    });
  }

  debouncedTransmit() {
    if (!this.debouncedTransmitTimeout) {
      this.debouncedTransmitTimeout = setTimeout(function() {
        this.transmit(false);
      }.bind(this), 100);
    }

  }
}

class TagWatcher {
  constructor(events) {
    this.events = events;
    this.observer = null;
  }

  start() {
    document.querySelectorAll(RECORDING_TAG_SELECTOR).forEach(el => {
      this.events.addTag(el.content);
    });

    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          if (node.matches(RECORDING_TAG_SELECTOR)) {
            this.events.addTag(node.content);
          }
          node.querySelectorAll(RECORDING_TAG_SELECTOR).forEach(el => {
            this.events.addTag(el.content);
          });
        }
      }
    });
    this.observer.observe(document.documentElement, { childList: true, subtree: true });
  }
}

class LabelWatcher {
  constructor(events) {
    this.events = events;
    this.observer = null;
  }

  start() {
    document.querySelectorAll(RECORDING_LABEL_SELECTOR).forEach(el => {
      this.events.addLabel(el.content);
    });

    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          if (node.matches(RECORDING_LABEL_SELECTOR)) {
            this.events.addLabel(node.content);
          }
          node.querySelectorAll(RECORDING_LABEL_SELECTOR).forEach(el => {
            this.events.addLabel(el.content);
          });
        }
      }
    });
    this.observer.observe(document.documentElement, { childList: true, subtree: true });
  }
}

class StopWatcher {
  constructor(recorder) {
    this.recorder = recorder;
    this.observer = null;
  }

  start() {
    this.observer = new MutationObserver((mutations) => {
      let changed = false;
      for (const mutation of mutations) {
        for (const node of [...mutation.addedNodes, ...mutation.removedNodes]) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          if (node.matches(STOP_SELECTOR) ||
              node.querySelector(STOP_SELECTOR)) {
            changed = true;
          }
        }
      }
      if (changed) {
        this.update();
      }
    });
    this.observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  update() {
    if (document.querySelector(STOP_SELECTOR)) {
      this.recorder.stop();
    } else {
      this.recorder.start();
    }
  }
}

function isStopped() {
  return !!document.querySelector(STOP_SELECTOR);
}

class PageLifecycleManager {
  constructor(recorder) {
    this.recorder = recorder;
  }

  start() {
    window.addEventListener("pageshow", this.#onPageShow.bind(this));
    window.addEventListener("pagehide", this.#onPageHide.bind(this));
    document.addEventListener("visibilitychange", this.#onVisibilityChange.bind(this));
  }

  #onPageShow(event) {
    log("pageshow", event.persisted);
    if (!event.persisted) return;
    if (isStopped()) {
      this.recorder.stop();
    } else {
      this.recorder.start();
    }
  }

  // Always stop (not pause) on pagehide, even for bfcache (event.persisted=true).
  // stop() forces rrweb to emit a new full snapshot when the page is restored,
  // creating a clean recording segment rather than a seamless continuation.
  #onPageHide(_event) {
    log("pagehide");
    this.recorder.stop();
  }

  #onVisibilityChange() {
    log("visibilitychange", document.visibilityState);
    if (document.visibilityState === "visible") {
      if (!isStopped()) {
        this.recorder.unpause();
      }
    } else if (document.visibilityState === "hidden") {
      this.recorder.pause();
    }
  }
}

const sessionId = getSessionId();
const recordingId = getRecordingId();

const recorder = new Recorder(sessionId, recordingId);
if (!isStopped()) {
  recorder.start();
}

const tagWatcher = new TagWatcher(recorder.events);
tagWatcher.start();

const labelWatcher = new LabelWatcher(recorder.events);
labelWatcher.start();

const stopWatcher = new StopWatcher(recorder);
stopWatcher.start();

const lifecycleManager = new PageLifecycleManager(recorder);
lifecycleManager.start();
