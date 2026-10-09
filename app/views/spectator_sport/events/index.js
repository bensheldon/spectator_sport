// https://cdn.jsdelivr.net/npm/@rrweb/record@2.1.7/dist/record.umd.min.cjs

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
"use strict";var rr=Object.defineProperty,nr=Object.defineProperties;var sr=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var it=(e,t,r)=>t in e?rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))at.call(t,r)&&it(e,r,t[r]);if(Re)for(var r of Re(t))lt.call(t,r)&&it(e,r,t[r]);return e},Oe=(e,t)=>nr(e,sr(t));var ct=(e,t)=>{var r={};for(var n in e)at.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Re)for(var n of Re(e))t.indexOf(n)<0&&lt.call(e,n)&&(r[n]=e[n]);return r};var or=Object.defineProperty,ir=(e,t,r)=>t in e?or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t,r)=>ir(e,typeof t!="symbol"?t+"":t,r),ut;Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var R=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e[e.Asset=7]="Asset",e))(R||{}),v=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(v||{}),z=(e=>(e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd",e[e.TouchCancel=10]="TouchCancel",e))(z||{}),K=(e=>(e[e.Mouse=0]="Mouse",e[e.Pen=1]="Pen",e[e.Touch=2]="Touch",e))(K||{}),fe=(e=>(e[e["2D"]=0]="2D",e[e.WebGL=1]="WebGL",e[e.WebGL2=2]="WebGL2",e))(fe||{}),le=(e=>(e[e.Play=0]="Play",e[e.Pause=1]="Pause",e[e.Seeked=2]="Seeked",e[e.VolumeChange=3]="VolumeChange",e[e.RateChange=4]="RateChange",e))(le||{}),A=(e=>(e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment",e))(A||{});const dt={Node:["childNodes","parentNode","parentElement","textContent","ownerDocument","firstChild","lastChild","nextSibling","previousSibling"],ShadowRoot:["host","styleSheets"],Element:["shadowRoot","querySelector","querySelectorAll"],MutationObserver:[]},ht={Node:["contains","getRootNode"],ShadowRoot:["getSelection"],Element:[],MutationObserver:["constructor"]},Ne={},Rt={},ar=()=>!!globalThis.Zone;function Ke(e){if(Ne[e])return Ne[e];const t=globalThis[e],r=t.prototype,n=e in dt?dt[e]:void 0,s=!!(n&&n.every(c=>{var i,d;return!!((d=(i=Object.getOwnPropertyDescriptor(r,c))==null?void 0:i.get)!=null&&d.toString().includes("[native code]"))})),o=e in ht?ht[e]:void 0,a=!!(o&&o.every(c=>{var i;return typeof r[c]=="function"&&((i=r[c])==null?void 0:i.toString().includes("[native code]"))}));if(s&&a&&!ar())return Ne[e]=t.prototype,t.prototype;try{const c=document.createElement("iframe");c.style.display="none",document.body.appendChild(c);const i=c.contentWindow;if(!i)return t.prototype;const d=i[e].prototype;if(!d)return c.remove(),r;const u=navigator.userAgent;return u.includes("Safari")&&!u.includes("Chrome")?(c.classList.add("rr-block"),c.setAttribute("__rrwebUntaintedMutationObserver",""),Rt[e]=()=>c.remove()):c.remove(),Ne[e]=d}catch(c){return r}}const Ve={};function G(e,t,r){var n,s;const o=(n=Ve[e])==null?void 0:n[r];if(o)return o.call(t);const a=Ke(e),c=(s=Object.getOwnPropertyDescriptor(a,r))==null?void 0:s.get;return c?((Ve[e]||(Ve[e]={}))[r]=c,c.call(t)):t[r]}const $e={};function Ot(e,t,r){const n=`${e}.${String(r)}`;if($e[n])return $e[n].bind(t);const o=Ke(e)[r];return typeof o!="function"?t[r]:($e[n]=o,o.bind(t))}function lr(e){return G("Node",e,"ownerDocument")}function cr(e){return G("Node",e,"childNodes")}function ur(e){return G("Node",e,"parentNode")}function dr(e){return G("Node",e,"parentElement")}function hr(e){return G("Node",e,"textContent")}function fr(e){return G("Node",e,"firstChild")}function pr(e){return G("Node",e,"lastChild")}function mr(e){return G("Node",e,"nextSibling")}function gr(e){return G("Node",e,"previousSibling")}function yr(e,t){return Ot("Node",e,"contains")(t)}function Sr(e){return Ot("Node",e,"getRootNode")()}function br(e){return!e||!("host"in e)?null:G("ShadowRoot",e,"host")}function Cr(e){return e.styleSheets}function Mr(e){return!e||!("shadowRoot"in e)?null:G("Element",e,"shadowRoot")}function wr(e,t){return G("Element",e,"querySelector")(t)}function vr(e,t){return G("Element",e,"querySelectorAll")(t)}function Nt(){var e;return[Ke("MutationObserver").constructor,(e=Rt.MutationObserver)!=null?e:()=>{}]}let be=Date.now;/[1-9][0-9]{12}/.test(Date.now().toString())||(be=()=>new Date().getTime());function ie(e,t,r){try{if(!(t in e))return()=>{};const n=e[t],s=r(n);return typeof s=="function"&&(s.prototype=s.prototype||{},Object.defineProperties(s,{__rrweb_original__:{enumerable:!1,value:n}})),e[t]=s,()=>{e[t]=n}}catch(n){return()=>{}}}const b={ownerDocument:lr,childNodes:cr,parentNode:ur,parentElement:dr,textContent:hr,firstChild:fr,lastChild:pr,nextSibling:mr,previousSibling:gr,contains:yr,getRootNode:Sr,host:br,styleSheets:Cr,shadowRoot:Mr,querySelector:wr,querySelectorAll:vr,nowTimestamp:be,mutationObserverCtor:Nt,patch:ie};function Et(e){return e.nodeType===e.ELEMENT_NODE}function ge(e){const t=e&&"host"in e&&"mode"in e&&b.host(e)||null;return!!(t&&"shadowRoot"in t&&b.shadowRoot(t)===e)}function ye(e){return Object.prototype.toString.call(e)==="[object ShadowRoot]"}function Ir(e){return e.includes(" background-clip: text;")&&!e.includes(" -webkit-background-clip: text;")&&(e=e.replace(/\sbackground-clip:\s*text;/g," -webkit-background-clip: text; background-clip: text;")),e}function Rr(e){const{cssText:t}=e;if(t.split('"').length<3)return t;const r=["@import",`url(${JSON.stringify(e.href)})`];return e.layerName===""?r.push("layer"):e.layerName&&r.push(`layer(${e.layerName})`),e.supportsText&&r.push(`supports(${e.supportsText})`),e.media.length&&r.push(e.media.mediaText),r.join(" ")+";"}function Ye(e){try{const t=e.rules||e.cssRules;if(!t)return null;let r=e.href;!r&&e.ownerNode&&(r=e.ownerNode.baseURI);const n=Array.from(t,s=>kt(s,r)).join("");return Ir(n)}catch(t){return null}}function kt(e,t){if(Nr(e)){let r;try{r=Ye(e.styleSheet)||Rr(e)}catch(n){r=e.cssText}return e.styleSheet.href?Fe(r,e.styleSheet.href):r}else{let r=e.cssText;return Er(e)&&e.selectorText.includes(":")&&(r=Or(r)),t?Fe(r,t):r}}function Or(e){const t=/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;return e.replace(t,"$1\\$2")}function Nr(e){return"styleSheet"in e}function Er(e){return"selectorText"in e}class Tt{constructor(){g(this,"idNodeMap",new Map),g(this,"nodeMetaMap",new WeakMap)}getId(t){var r;if(!t)return-1;const n=(r=this.getMeta(t))==null?void 0:r.id;return n!=null?n:-1}getNode(t){return this.idNodeMap.get(t)||null}getIds(){return Array.from(this.idNodeMap.keys())}getMeta(t){return this.nodeMetaMap.get(t)||null}removeNodeFromMap(t){const r=this.getId(t);this.idNodeMap.delete(r),t.childNodes&&t.childNodes.forEach(n=>this.removeNodeFromMap(n))}has(t){return this.idNodeMap.has(t)}hasNode(t){return this.nodeMetaMap.has(t)}add(t,r){const n=r.id;this.idNodeMap.set(n,t),this.nodeMetaMap.set(t,r)}replace(t,r){const n=this.getNode(t);if(n){const s=this.nodeMetaMap.get(n);s&&this.nodeMetaMap.set(r,s)}this.idNodeMap.set(t,r)}reset(){this.idNodeMap=new Map,this.nodeMetaMap=new WeakMap}}function kr(){return new Tt}function _e({element:e,maskInputOptions:t,tagName:r,type:n,value:s,maskInputFn:o}){let a=s||"";const c=n&&te(n);return(t[r.toLowerCase()]||c&&t[c])&&(o?a=o(a,e):a="*".repeat(a.length)),a}function te(e){return e.toLowerCase()}const ft="__rrweb_original__";function Tr(e){const t=e.getContext("2d");if(!t)return!0;const r=50;for(let n=0;n<e.width;n+=r)for(let s=0;s<e.height;s+=r){const o=t.getImageData,a=ft in o?o[ft]:o;if(new Uint32Array(a.call(t,n,s,Math.min(r,e.width-n),Math.min(r,e.height-s)).data.buffer).some(i=>i!==0))return!1}return!0}function Ae(e){const t=e.type;return e.hasAttribute("data-rr-is-password")?"password":t?te(t):null}function xt(e,t){var o;let r;try{r=new URL(e,t!=null?t:window.location.href)}catch(a){return null}const n=/\.([0-9a-z]+)(?:$)/i,s=r.pathname.match(n);return(o=s==null?void 0:s[1])!=null?o:null}function xr(e){let t="";return e.indexOf("//")>-1?t=e.split("/").slice(0,3).join("/"):t=e.split("/")[0],t=t.split("?")[0],t}const Dr=/url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,Lr=/^(?:[a-z+]+:)?\/\//i,_r=/^www\..*/i,Ar=/^(data:)([^,]*),(.*)/i;function Fe(e,t){return(e||"").replace(Dr,(r,n,s,o,a,c)=>{const i=s||a||c,d=n||o||"";if(!i)return r;if(Lr.test(i)||_r.test(i))return`url(${d}${i}${d})`;if(Ar.test(i))return`url(${d}${i}${d})`;if(i[0]==="/")return`url(${d}${xr(t)+i}${d})`;const u=i.split("#")[0],h=i.substring(u.length),p=t.split("#")[0].split("/"),f=u.split("/");p.pop();for(const m of f)m!=="."&&(m===".."?p.pop():p.push(m));return`url(${d}${p.join("/")}${h}${d})`})}const Dt="(?:/\\*[^*]*\\*/)|[\\s;]",Fr=new RegExp(`${Dt}|\\b(0)px?`,"g"),Pr=new RegExp(Dt,"g");function Ee(e,t=!1){return t?e.replace(Pr,""):e.replace(Fr,"$1")}function Wr(e,t,r=!1){const n=Array.from(t.childNodes),s=[];let o=0;if(n.length>1&&e&&typeof e=="string"){let a=Ee(e,r);const c=a.length/e.length;for(let i=1;i<n.length;i++)if(n[i].textContent&&typeof n[i].textContent=="string"){const d=Ee(n[i].textContent,r),u=100;let h=3;for(;h<d.length&&(d[h].match(/[a-zA-Z0-9]/)||d.indexOf(d.substring(0,h),1)!==-1);h++);for(;h<d.length;h++){let p=d.substring(0,h),f=a.split(p),m=-1;if(f.length===2)m=f[0].length;else if(f.length>2&&f[0]===""&&n[i-1].textContent!=="")m=a.indexOf(p,1);else if(f.length===1){if(p=p.substring(0,p.length-1),f=a.split(p),f.length<=1)return s.push(e),s;h=u+1}else h===d.length-1&&(m=a.indexOf(p));if(f.length>=2&&h>u){const l=n[i-1].textContent;if(l&&typeof l=="string"){const S=Ee(l).length;m=a.indexOf(p,S)}m===-1&&(m=f[0].length)}if(m!==-1){let l=Math.floor(m/c);for(;l>0&&l<e.length;){if(o+=1,o>50*n.length)return s.push(e),s;const S=Ee(e.substring(0,l),r);if(S.length===m){s.push(e.substring(0,l)),e=e.substring(l),a=a.substring(m);break}else S.length<m?l+=Math.max(1,Math.floor((m-S.length)/c)):l-=Math.max(1,Math.floor((S.length-m)*c))}break}}}}return s.push(e),s}function Ur(e,t){return Wr(e,t).join("/* rr_split */")}let Br=1;const zr=new RegExp("[^a-z0-9-_:]"),Pe=-2;function Lt(){return Br++}function Hr(e){if(e instanceof HTMLFormElement)return"form";const t=te(e.tagName);return zr.test(t)?"div":t}let ae,pt;const Gr=/^[^ \t\n\r\u000c]+/,jr=/^[, \t\n\r\u000c]+/;function Vr(e,t){if(t.trim()==="")return t;let r=0;function n(o){let a;const c=o.exec(t.substring(r));return c?(a=c[0],r+=a.length,a):""}const s=[];for(;n(jr),!(r>=t.length);){let o=n(Gr);if(o.slice(-1)===",")o=ue(e,o.substring(0,o.length-1)),s.push(o);else{let a="";o=ue(e,o);let c=!1;for(;;){const i=t.charAt(r);if(i===""){s.push((o+a).trim());break}else if(c)i===")"&&(c=!1);else if(i===","){r+=1,s.push((o+a).trim());break}else i==="("&&(c=!0);a+=i,r+=1}}}return s.join(", ")}const mt=new WeakMap;function ue(e,t){return!t||t.trim()===""?t:et(e,t)}function $r(e){return!!(e.tagName==="svg"||e.ownerSVGElement)}function et(e,t){let r=mt.get(e);if(r||(r=e.createElement("a"),mt.set(e,r)),!t)t="";else if(t.startsWith("blob:")||t.startsWith("data:"))return t;return r.setAttribute("href",t),r.href}function _t(e,t,r,n){return n&&(r==="src"||r==="href"&&!(t==="use"&&n[0]==="#")||r==="xlink:href"&&n[0]!=="#"||r==="background"&&["table","td","th"].includes(t)?ue(e,n):r==="srcset"?Vr(e,n):r==="style"?Fe(n,et(e)):t==="object"&&r==="data"?ue(e,n):n)}function At(e,t,r){return["video","audio"].includes(e)&&te(t)==="autoplay"}function qr(e,t,r){try{if(typeof t=="string"){if(e.classList.contains(t))return!0}else for(let n=e.classList.length;n--;){const s=e.classList[n];if(t.test(s))return!0}if(r)return e.matches(r)}catch(n){}return!1}function We(e,t,r){if(!e)return!1;if(e.nodeType!==e.ELEMENT_NODE)return r?We(b.parentNode(e),t,r):!1;for(let n=e.classList.length;n--;){const s=e.classList[n];if(t.test(s))return!0}return r?We(b.parentNode(e),t,r):!1}function Ft(e,t,r,n){let s;if(Et(e)){if(s=e,!b.childNodes(s).length)return!1}else{if(b.parentElement(e)===null)return!1;s=b.parentElement(e)}try{if(typeof t=="string"){if(n){if(s.closest(`.${t}`))return!0}else if(s.classList.contains(t))return!0}else if(We(s,t,n))return!0;if(r){if(n){if(s.closest(r))return!0}else if(s.matches(r))return!0}}catch(o){}return!1}function Xr(e,t,r){const n=e.contentWindow;if(!n)return;let s=!1,o;try{o=n.document.readyState}catch(c){return}if(o!=="complete"){const c=setTimeout(()=>{s||(t(),s=!0)},r);e.addEventListener("load",()=>{clearTimeout(c),s=!0,t()});return}const a="about:blank";if(n.location.href!==a||e.src===a||e.src==="")return setTimeout(t,0),e.addEventListener("load",t);e.addEventListener("load",t)}function Yr(e,t,r){let n=!1,s;try{s=e.sheet}catch(a){return}if(s)return;const o=setTimeout(()=>{n||(t(),n=!0)},r);e.addEventListener("load",()=>{clearTimeout(o),n=!0,t()})}function Jr(e,t){const{doc:r,mirror:n,blockClass:s,blockSelector:o,needsMask:a,inlineStylesheet:c,maskInputOptions:i={},maskTextFn:d,maskInputFn:u,dataURLOptions:h={},inlineImages:p,recordCanvas:f,keepIframeSrcFn:m,newlyAddedElement:l=!1,cssCaptured:S=!1}=t,M=Zr(r,n);switch(e.nodeType){case e.DOCUMENT_NODE:return e.compatMode!=="CSS1Compat"?{type:A.Document,childNodes:[],compatMode:e.compatMode}:{type:A.Document,childNodes:[]};case e.DOCUMENT_TYPE_NODE:return{type:A.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId,rootId:M};case e.ELEMENT_NODE:return Kr(e,{doc:r,blockClass:s,blockSelector:o,inlineStylesheet:c,maskInputOptions:i,maskInputFn:u,dataURLOptions:h,inlineImages:p,recordCanvas:f,keepIframeSrcFn:m,newlyAddedElement:l,rootId:M});case e.TEXT_NODE:return Qr(e,{doc:r,needsMask:a,maskTextFn:d,rootId:M,cssCaptured:S});case e.CDATA_SECTION_NODE:return{type:A.CDATA,textContent:"",rootId:M};case e.COMMENT_NODE:return{type:A.Comment,textContent:b.textContent(e)||"",rootId:M};default:return!1}}function Zr(e,t){if(!t.hasNode(e))return;const r=t.getId(e);return r===1?void 0:r}function Qr(e,t){const{needsMask:r,maskTextFn:n,rootId:s,cssCaptured:o}=t,a=b.parentNode(e),c=a&&a.tagName;let i="";const d=c==="STYLE"?!0:void 0,u=c==="SCRIPT"?!0:void 0;return u?i="SCRIPT_PLACEHOLDER":o||(i=b.textContent(e),d&&i&&(i=Fe(i,et(t.doc)))),!d&&!u&&i&&r&&(i=n?n(i,b.parentElement(e)):i.replace(/[\S]/g,"*")),{type:A.Text,textContent:i||"",rootId:s}}function Kr(e,t){const{doc:r,blockClass:n,blockSelector:s,inlineStylesheet:o,maskInputOptions:a={},maskInputFn:c,dataURLOptions:i={},inlineImages:d,recordCanvas:u,keepIframeSrcFn:h,newlyAddedElement:p=!1,rootId:f}=t,m=qr(e,n,s),l=Hr(e);let S={};const M=e.attributes.length;for(let y=0;y<M;y++){const w=e.attributes[y];At(l,w.name,w.value)||(S[w.name]=_t(r,l,te(w.name),w.value))}if(l==="link"&&o){const y=Array.from(r.styleSheets).find(T=>T.href===e.href);let w=null;y&&(w=Ye(y)),w&&(delete S.rel,delete S.href,S._cssText=w)}if(l==="style"&&e.sheet){let y=Ye(e.sheet);y&&(e.childNodes.length>1&&(y=Ur(y,e)),S._cssText=y)}if(["input","textarea","select"].includes(l)){const y=e.value,w=e.checked;S.type!=="radio"&&S.type!=="checkbox"&&S.type!=="submit"&&S.type!=="button"&&y?S.value=_e({element:e,type:Ae(e),tagName:l,value:y,maskInputOptions:a,maskInputFn:c}):w&&(S.checked=w)}if(l==="option"&&(e.selected&&!a.select?S.selected=!0:delete S.selected),l==="dialog"&&e.open&&(S.rr_open_mode=e.matches("dialog:modal")?"modal":"non-modal"),l==="canvas"&&u){if(e.__context==="2d")Tr(e)||(S.rr_dataURL=e.toDataURL(i.type,i.quality));else if(!("__context"in e)){const y=e.toDataURL(i.type,i.quality),w=r.createElement("canvas");w.width=e.width,w.height=e.height;const T=w.toDataURL(i.type,i.quality);y!==T&&(S.rr_dataURL=y)}}if(l==="img"&&d){ae||(ae=r.createElement("canvas"),pt=ae.getContext("2d"));const y=e,w=y.currentSrc||y.getAttribute("src")||"<unknown-src>",T=y.crossOrigin,x=()=>{y.removeEventListener("load",x);try{ae.width=y.naturalWidth,ae.height=y.naturalHeight,pt.drawImage(y,0,0),S.rr_dataURL=ae.toDataURL(i.type,i.quality)}catch(W){if(y.crossOrigin!=="anonymous"){y.crossOrigin="anonymous",y.complete&&y.naturalWidth!==0?x():y.addEventListener("load",x);return}else console.warn(`Cannot inline img src=${w}! Error: ${W}`)}y.crossOrigin==="anonymous"&&(T?S.crossOrigin=T:y.removeAttribute("crossorigin"))};y.complete&&y.naturalWidth!==0?x():y.addEventListener("load",x)}if(["audio","video"].includes(l)){const y=S;y.rr_mediaState=e.paused?"paused":"played",y.rr_mediaCurrentTime=e.currentTime,y.rr_mediaPlaybackRate=e.playbackRate,y.rr_mediaMuted=e.muted,y.rr_mediaLoop=e.loop,y.rr_mediaVolume=e.volume}if(p||(e.scrollLeft&&(S.rr_scrollLeft=e.scrollLeft),e.scrollTop&&(S.rr_scrollTop=e.scrollTop)),m){const{width:y,height:w}=e.getBoundingClientRect();S={class:S.class,rr_width:`${y}px`,rr_height:`${w}px`}}l==="iframe"&&!h(S.src)&&(e.contentDocument||(S.rr_src=S.src),delete S.src);let C;try{customElements.get(l)&&(C=!0)}catch(y){}return{type:A.Element,tagName:l,attributes:S,childNodes:[],isSVG:$r(e)||void 0,needBlock:m,rootId:f,isCustom:C}}function k(e){return e==null?"":e.toLowerCase()}function Pt(e){return e===!0||e==="all"?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaVerification:!0,headMetaAuthorship:e==="all",headMetaDescKeywords:e==="all",headTitleMutations:e==="all"}:e||{}}function en(e,t){if(t.comment&&e.type===A.Comment)return!0;if(e.type===A.Element){if(t.script&&(e.tagName==="script"||e.tagName==="link"&&(e.attributes.rel==="preload"&&e.attributes.as==="script"||e.attributes.rel==="modulepreload")||e.tagName==="link"&&e.attributes.rel==="prefetch"&&typeof e.attributes.href=="string"&&xt(e.attributes.href)==="js"))return!0;if(t.headFavicon&&(e.tagName==="link"&&e.attributes.rel==="shortcut icon"||e.tagName==="meta"&&(k(e.attributes.name).match(/^msapplication-tile(image|color)$/)||k(e.attributes.name)==="application-name"||k(e.attributes.rel)==="icon"||k(e.attributes.rel)==="apple-touch-icon"||k(e.attributes.rel)==="shortcut icon")))return!0;if(e.tagName==="meta"){if(t.headMetaDescKeywords&&k(e.attributes.name).match(/^description|keywords$/))return!0;if(t.headMetaSocial&&(k(e.attributes.property).match(/^(og|twitter|fb):/)||k(e.attributes.name).match(/^(og|twitter):/)||k(e.attributes.name)==="pinterest"))return!0;if(t.headMetaRobots&&(k(e.attributes.name)==="robots"||k(e.attributes.name)==="googlebot"||k(e.attributes.name)==="bingbot"))return!0;if(t.headMetaHttpEquiv&&e.attributes["http-equiv"]!==void 0)return!0;if(t.headMetaAuthorship&&(k(e.attributes.name)==="author"||k(e.attributes.name)==="generator"||k(e.attributes.name)==="framework"||k(e.attributes.name)==="publisher"||k(e.attributes.name)==="progid"||k(e.attributes.property).match(/^article:/)||k(e.attributes.property).match(/^product:/)))return!0;if(t.headMetaVerification&&(k(e.attributes.name)==="google-site-verification"||k(e.attributes.name)==="yandex-verification"||k(e.attributes.name)==="csrf-token"||k(e.attributes.name)==="p:domain_verify"||k(e.attributes.name)==="verify-v1"||k(e.attributes.name)==="verification"||k(e.attributes.name)==="shopify-checkout-api-token"))return!0}}return!1}function de(e,t){const{doc:r,mirror:n,blockClass:s,blockSelector:o,maskTextClass:a,maskTextSelector:c,skipChild:i=!1,inlineStylesheet:d=!0,maskInputOptions:u={},maskTextFn:h,maskInputFn:p,slimDOMOptions:f,dataURLOptions:m={},inlineImages:l=!1,recordCanvas:S=!1,onSerialize:M,onIframeLoad:C,iframeLoadTimeout:y=5e3,onStylesheetLoad:w,stylesheetLoadTimeout:T=5e3,keepIframeSrcFn:x=()=>!1,newlyAddedElement:W=!1,cssCaptured:J=!1}=t;let{needsMask:j}=t,{preserveWhiteSpace:q=!0}=t;j||(j=Ft(e,a,c,j===void 0));const V=Jr(e,{doc:r,mirror:n,blockClass:s,blockSelector:o,needsMask:j,inlineStylesheet:d,maskInputOptions:u,maskTextFn:h,maskInputFn:p,dataURLOptions:m,inlineImages:l,recordCanvas:S,keepIframeSrcFn:x,newlyAddedElement:W,cssCaptured:J});if(!V)return console.warn(e,"not serialized"),null;let Z;n.hasNode(e)?Z=n.getId(e):en(V,f)||!q&&V.type===A.Text&&!V.textContent.replace(/^\s+|\s+$/gm,"").length?Z=Pe:Z=Lt();const O=Object.assign(V,{id:Z});if(n.add(e,O),Z===Pe)return null;M&&M(e);let pe=!i;if(O.type===A.Element){pe=pe&&!O.needBlock,delete O.needBlock;const F=b.shadowRoot(e);F&&ye(F)&&(O.isShadowHost=!0)}if((O.type===A.Document||O.type===A.Element)&&pe){f.headWhitespace&&O.type===A.Element&&O.tagName==="head"&&(q=!1);const F={doc:r,mirror:n,blockClass:s,blockSelector:o,needsMask:j,maskTextClass:a,maskTextSelector:c,skipChild:i,inlineStylesheet:d,maskInputOptions:u,maskTextFn:h,maskInputFn:p,slimDOMOptions:f,dataURLOptions:m,inlineImages:l,recordCanvas:S,preserveWhiteSpace:q,onSerialize:M,onIframeLoad:C,iframeLoadTimeout:y,onStylesheetLoad:w,stylesheetLoadTimeout:T,keepIframeSrcFn:x,cssCaptured:!1};if(!(O.type===A.Element&&O.tagName==="textarea"&&O.attributes.value!==void 0)){O.type===A.Element&&O.attributes._cssText!==void 0&&typeof O.attributes._cssText=="string"&&(F.cssCaptured=!0);for(const re of Array.from(b.childNodes(e))){const Q=de(re,F);Q&&O.childNodes.push(Q)}}let $=null;if(Et(e)&&($=b.shadowRoot(e)))for(const re of Array.from(b.childNodes($))){const Q=de(re,F);Q&&(ye($)&&(Q.isShadow=!0),O.childNodes.push(Q))}}const me=b.parentNode(e);return me&&ge(me)&&ye(me)&&(O.isShadow=!0),O.type===A.Element&&O.tagName==="iframe"&&Xr(e,()=>{const F=e.contentDocument;if(F&&C){const $=de(F,{doc:F,mirror:n,blockClass:s,blockSelector:o,needsMask:j,maskTextClass:a,maskTextSelector:c,skipChild:!1,inlineStylesheet:d,maskInputOptions:u,maskTextFn:h,maskInputFn:p,slimDOMOptions:f,dataURLOptions:m,inlineImages:l,recordCanvas:S,preserveWhiteSpace:q,onSerialize:M,onIframeLoad:C,iframeLoadTimeout:y,onStylesheetLoad:w,stylesheetLoadTimeout:T,keepIframeSrcFn:x});$&&C(e,$)}},y),O.type===A.Element&&O.tagName==="link"&&typeof O.attributes.rel=="string"&&(O.attributes.rel==="stylesheet"||O.attributes.rel==="preload"&&typeof O.attributes.href=="string"&&xt(O.attributes.href)==="css")&&Yr(e,()=>{if(w){const F=de(e,{doc:r,mirror:n,blockClass:s,blockSelector:o,needsMask:j,maskTextClass:a,maskTextSelector:c,skipChild:!1,inlineStylesheet:d,maskInputOptions:u,maskTextFn:h,maskInputFn:p,slimDOMOptions:f,dataURLOptions:m,inlineImages:l,recordCanvas:S,preserveWhiteSpace:q,onSerialize:M,onIframeLoad:C,iframeLoadTimeout:y,onStylesheetLoad:w,stylesheetLoadTimeout:T,keepIframeSrcFn:x});F&&w(e,F)}},T),O}function tn(e,t){const{mirror:r=new Tt,blockClass:n="rr-block",blockSelector:s=null,maskTextClass:o="rr-mask",maskTextSelector:a=null,inlineStylesheet:c=!0,inlineImages:i=!1,recordCanvas:d=!1,maskAllInputs:u=!1,maskTextFn:h,maskInputFn:p,slimDOM:f=!1,dataURLOptions:m,preserveWhiteSpace:l,onSerialize:S,onIframeLoad:M,iframeLoadTimeout:C,onStylesheetLoad:y,stylesheetLoadTimeout:w,keepIframeSrcFn:T=()=>!1}=t,x=u===!0?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:u===!1?{password:!0}:u,W=Pt(f);return de(e,{doc:e,mirror:r,blockClass:n,blockSelector:s,maskTextClass:o,maskTextSelector:a,skipChild:!1,inlineStylesheet:c,maskInputOptions:x,maskTextFn:h,maskInputFn:p,slimDOMOptions:W,dataURLOptions:m,inlineImages:i,recordCanvas:d,preserveWhiteSpace:l,onSerialize:S,onIframeLoad:M,iframeLoadTimeout:C,onStylesheetLoad:y,stylesheetLoadTimeout:w,keepIframeSrcFn:T,newlyAddedElement:!1})}class tt{constructor(...t){g(this,"parentElement",null),g(this,"parentNode",null),g(this,"ownerDocument"),g(this,"firstChild",null),g(this,"lastChild",null),g(this,"previousSibling",null),g(this,"nextSibling",null),g(this,"ELEMENT_NODE",1),g(this,"TEXT_NODE",3),g(this,"nodeType"),g(this,"nodeName"),g(this,"RRNodeType")}get childNodes(){const t=[];let r=this.firstChild;for(;r;)t.push(r),r=r.nextSibling;return t}contains(t){if(t instanceof tt){if(t.ownerDocument!==this.ownerDocument)return!1;if(t===this)return!0}else return!1;for(;t.parentNode;){if(t.parentNode===this)return!0;t=t.parentNode}return!1}appendChild(t){throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")}insertBefore(t,r){throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")}removeChild(t){throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")}toString(){return"RRNode"}}function U(e,t,r=document){const n={capture:!0,passive:!0};return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}const ce=`Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;let gt={map:{},getId(){return console.error(ce),-1},getNode(){return console.error(ce),null},removeNodeFromMap(){console.error(ce)},has(){return console.error(ce),!1},reset(){console.error(ce)}};typeof window!="undefined"&&window.Proxy&&window.Reflect&&(gt=new Proxy(gt,{get(e,t,r){return t==="map"&&console.error(ce),Reflect.get(e,t,r)}}));function Ce(e,t,r={}){let n=null,s=0;return function(...o){const a=Date.now();!s&&r.leading===!1&&(s=a);const c=t-(a-s),i=this;c<=0||c>t?(n&&(clearTimeout(n),n=null),s=a,e.apply(i,o)):!n&&r.trailing!==!1&&(n=setTimeout(()=>{s=r.leading===!1?0:Date.now(),n=null,e.apply(i,o)},c))}}function ze(e,t,r,n,s=window){const o=s.Object.getOwnPropertyDescriptor(e,t);return s.Object.defineProperty(e,t,n?r:{set(a){setTimeout(()=>{r.set.call(this,a)},0),o&&o.set&&o.set.call(this,a)}}),()=>ze(e,t,o||{},!0)}function Wt(e){var t,r,n,s;const o=e.document;return{left:o.scrollingElement?o.scrollingElement.scrollLeft:e.pageXOffset!==void 0?e.pageXOffset:o.documentElement.scrollLeft||(o==null?void 0:o.body)&&((t=b.parentElement(o.body))==null?void 0:t.scrollLeft)||((r=o==null?void 0:o.body)==null?void 0:r.scrollLeft)||0,top:o.scrollingElement?o.scrollingElement.scrollTop:e.pageYOffset!==void 0?e.pageYOffset:(o==null?void 0:o.documentElement.scrollTop)||(o==null?void 0:o.body)&&((n=b.parentElement(o.body))==null?void 0:n.scrollTop)||((s=o==null?void 0:o.body)==null?void 0:s.scrollTop)||0}}function Ut(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}function Bt(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth}function zt(e){return e?e.nodeType===e.ELEMENT_NODE?e:b.parentElement(e):null}function B(e,t,r,n){if(!e)return!1;const s=zt(e);if(!s)return!1;try{if(typeof t=="string"){if(s.classList.contains(t)||n&&s.closest("."+t)!==null)return!0}else if(We(s,t,n))return!0}catch(o){}return!!(r&&(s.matches(r)||n&&s.closest(r)!==null))}function rn(e,t){return t.getId(e)!==-1}function qe(e,t,r){return e.tagName==="TITLE"&&r.headTitleMutations?!0:t.getId(e)===Pe}function Ht(e,t){if(ge(e))return!1;const r=t.getId(e);if(!t.has(r))return!0;const n=b.parentNode(e);return n&&n.nodeType===e.DOCUMENT_NODE?!1:n?Ht(n,t):!0}function Je(e){return!!e.changedTouches}function nn(e=window){"NodeList"in e&&!e.NodeList.prototype.forEach&&(e.NodeList.prototype.forEach=Array.prototype.forEach),"DOMTokenList"in e&&!e.DOMTokenList.prototype.forEach&&(e.DOMTokenList.prototype.forEach=Array.prototype.forEach)}function Gt(e,t){return!!(e.nodeName==="IFRAME"&&t.getMeta(e))}function jt(e,t){return!!(e.nodeName==="LINK"&&e.nodeType===e.ELEMENT_NODE&&e.getAttribute&&e.getAttribute("rel")==="stylesheet"&&t.getMeta(e))}function Ze(e){return e?e instanceof tt&&"shadowRoot"in e?!!e.shadowRoot:!!b.shadowRoot(e):!1}class sn{constructor(){g(this,"id",1),g(this,"styleIDMap",new WeakMap),g(this,"idStyleMap",new Map)}getId(t){var r;return(r=this.styleIDMap.get(t))!=null?r:-1}has(t){return this.styleIDMap.has(t)}add(t,r){if(this.has(t))return this.getId(t);let n;return r===void 0?n=this.id++:n=r,this.styleIDMap.set(t,n),this.idStyleMap.set(n,t),n}getStyle(t){return this.idStyleMap.get(t)||null}reset(){this.styleIDMap=new WeakMap,this.idStyleMap=new Map,this.id=1}generateId(){return this.id++}}function Vt(e){var t;let r=null;return"getRootNode"in e&&((t=b.getRootNode(e))==null?void 0:t.nodeType)===Node.DOCUMENT_FRAGMENT_NODE&&b.host(b.getRootNode(e))&&(r=b.host(b.getRootNode(e))),r}function on(e){let t=e,r;for(;r=Vt(t);)t=r;return t}function an(e){const t=b.ownerDocument(e);if(!t)return!1;const r=on(e);return b.contains(t,r)}function $t(e){const t=b.ownerDocument(e);return t?b.contains(t,e)||an(e):!1}const yt=(e,t)=>`${e}@${t}`;class ln{constructor(){g(this,"frozen",!1),g(this,"locked",!1),g(this,"texts",[]),g(this,"attributes",[]),g(this,"attributeMap",new WeakMap),g(this,"removes",[]),g(this,"mapRemoves",[]),g(this,"movedMap",{}),g(this,"addedSet",new Set),g(this,"movedSet",new Set),g(this,"droppedSet",new Set),g(this,"removesSubTreeCache",new Set),g(this,"mutationCb"),g(this,"blockClass"),g(this,"blockSelector"),g(this,"maskTextClass"),g(this,"maskTextSelector"),g(this,"inlineStylesheet"),g(this,"maskInputOptions"),g(this,"maskTextFn"),g(this,"maskInputFn"),g(this,"keepIframeSrcFn"),g(this,"recordCanvas"),g(this,"inlineImages"),g(this,"slimDOMOptions"),g(this,"dataURLOptions"),g(this,"doc"),g(this,"mirror"),g(this,"iframeManager"),g(this,"stylesheetManager"),g(this,"shadowDomManager"),g(this,"canvasManager"),g(this,"processedNodeManager"),g(this,"unattachedDoc"),g(this,"processMutations",t=>{t.forEach(this.processMutation),this.emit()}),g(this,"emit",()=>{if(this.frozen||this.locked)return;const t=[],r=new Set;for(;this.mapRemoves.length;)this.mirror.removeNodeFromMap(this.mapRemoves.shift());for(const p of this.movedSet){const f=b.parentNode(p);this.removesSubTreeCache.has(f)&&!this.movedSet.has(f)||this.addedSet.add(p)}let n=null,s=null,o=-1,a=null,c=!1;const i=new Set,d=this.addedSet.values();let u=d.next();for(;this.addedSet.size;){if(n!==null&&this.addedSet.has(b.previousSibling(n)))a=n,n=b.previousSibling(n);else{for(this.addedSet.has(u.value)||(u=d.next()),n=u.value;;){if(s=b.parentNode(n),this.addedSet.has(s)){n=s;continue}break}if(i.has(s))s=null;else if(s){if($t(s)?(c=St(this.droppedSet,s)||this.removesSubTreeCache.has(s),c&&St(this.movedSet,n)&&(c=!1)):c=!0,this.addedSet.has(b.lastChild(s)))n=b.lastChild(s),a=null;else for(;;){if(a=b.nextSibling(n),this.addedSet.has(a)){n=a;continue}break}if(o=ge(s)?this.mirror.getId(Vt(n)):this.mirror.getId(s),o===-1&&s.nodeType===Node.DOCUMENT_FRAGMENT_NODE){const l=b.host(s);o=this.mirror.getId(l)}}}if(this.addedSet.delete(n),!s||o===-1){i.add(n);continue}else if(c){this.droppedSet.add(n);continue}let p=!1;if(n.nodeType===Node.TEXT_NODE){const l=s.tagName;if(l==="TEXTAREA")continue;l==="STYLE"&&r.has(o)&&(p=!0)}let f=a?this.mirror.getId(a):null;for(;f===Pe;)a=a&&b.nextSibling(a),f=a&&this.mirror.getId(a);if(f===-1){console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:",a),n=null;continue}const m=de(n,{doc:this.doc,mirror:this.mirror,blockClass:this.blockClass,blockSelector:this.blockSelector,maskTextClass:this.maskTextClass,maskTextSelector:this.maskTextSelector,skipChild:!0,newlyAddedElement:!0,inlineStylesheet:this.inlineStylesheet,maskInputOptions:this.maskInputOptions,maskTextFn:this.maskTextFn,maskInputFn:this.maskInputFn,slimDOMOptions:this.slimDOMOptions,dataURLOptions:this.dataURLOptions,recordCanvas:this.recordCanvas,inlineImages:this.inlineImages,onSerialize:l=>{Gt(l,this.mirror)&&this.iframeManager.addIframe(l),jt(l,this.mirror)&&this.stylesheetManager.trackLinkElement(l),Ze(n)&&this.shadowDomManager.addShadowRoot(b.shadowRoot(n),this.doc)},onIframeLoad:(l,S)=>{this.iframeManager.attachIframe(l,S),this.shadowDomManager.observeAttachShadow(l)},onStylesheetLoad:(l,S)=>{this.stylesheetManager.attachLinkElement(l,S)},cssCaptured:p});m&&(t.push({parentId:o,nextId:f,node:m}),r.add(m.id))}const h={texts:this.texts.map(p=>{const f=p.node,m=b.parentNode(f);return m&&m.tagName==="TEXTAREA"&&this.genTextAreaValueMutation(m),{id:this.mirror.getId(f),value:p.value}}).filter(p=>!r.has(p.id)).filter(p=>this.mirror.has(p.id)),attributes:this.attributes.map(p=>{const{attributes:f}=p;if(typeof f.style=="string"){const m=JSON.stringify(p.styleDiff),l=JSON.stringify(p._unchangedStyles);m.length<f.style.length&&(m+l).split("var(").length===f.style.split("var(").length&&(f.style=p.styleDiff)}return{id:this.mirror.getId(p.node),attributes:f}}).filter(p=>!r.has(p.id)).filter(p=>this.mirror.has(p.id)),removes:this.removes,adds:t};!h.texts.length&&!h.attributes.length&&!h.removes.length&&!h.adds.length||(this.texts=[],this.attributes=[],this.attributeMap=new WeakMap,this.removes=[],this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.removesSubTreeCache=new Set,this.movedMap={},this.mutationCb(h))}),g(this,"genTextAreaValueMutation",t=>{let r=this.attributeMap.get(t);r||(r={node:t,attributes:{},styleDiff:{},_unchangedStyles:{}},this.attributes.push(r),this.attributeMap.set(t,r));const n=Array.from(b.childNodes(t),s=>b.textContent(s)||"").join("");r.attributes.value=_e({element:t,maskInputOptions:this.maskInputOptions,tagName:t.tagName,type:Ae(t),value:n,maskInputFn:this.maskInputFn})}),g(this,"processMutation",t=>{if(!qe(t.target,this.mirror,this.slimDOMOptions))switch(t.type){case"characterData":{const r=b.textContent(t.target);!B(t.target,this.blockClass,this.blockSelector,!1)&&r!==t.oldValue&&this.texts.push({value:Ft(t.target,this.maskTextClass,this.maskTextSelector,!0)&&r?this.maskTextFn?this.maskTextFn(r,zt(t.target)):r.replace(/[\S]/g,"*"):r,node:t.target});break}case"attributes":{const r=t.target,n=te(r.tagName);let s=t.attributeName,o=t.target.getAttribute(s);if(s==="value"){const c=Ae(r);o=_e({element:r,maskInputOptions:this.maskInputOptions,tagName:r.tagName,type:c,value:o,maskInputFn:this.maskInputFn})}if(B(t.target,this.blockClass,this.blockSelector,!1)||o===t.oldValue)return;let a=this.attributeMap.get(t.target);if(n==="iframe"&&s==="src"&&!this.keepIframeSrcFn(o))if(!r.contentDocument)s="rr_src";else return;if(a||(a={node:t.target,attributes:{},styleDiff:{},_unchangedStyles:{}},this.attributes.push(a),this.attributeMap.set(t.target,a)),s==="type"&&n==="input"&&(t.oldValue||"").toLowerCase()==="password"&&r.setAttribute("data-rr-is-password","true"),!At(n,s))if(a.attributes[s]=_t(this.doc,n,te(s),o),s==="style"){if(!this.unattachedDoc)try{this.unattachedDoc=document.implementation.createHTMLDocument()}catch(i){this.unattachedDoc=this.doc}const c=this.unattachedDoc.createElement("span");t.oldValue&&c.setAttribute("style",t.oldValue);for(const i of Array.from(r.style)){const d=r.style.getPropertyValue(i),u=r.style.getPropertyPriority(i);d!==c.style.getPropertyValue(i)||u!==c.style.getPropertyPriority(i)?u===""?a.styleDiff[i]=d:a.styleDiff[i]=[d,u]:a._unchangedStyles[i]=[d,u]}for(const i of Array.from(c.style))r.style.getPropertyValue(i)===""&&(a.styleDiff[i]=!1)}else s==="open"&&r.tagName==="DIALOG"&&(r.matches("dialog:modal")?a.attributes.rr_open_mode="modal":a.attributes.rr_open_mode="non-modal");break}case"childList":{if(B(t.target,this.blockClass,this.blockSelector,!0))return;if(t.target.tagName==="TEXTAREA"){this.genTextAreaValueMutation(t.target);return}t.addedNodes.forEach(r=>this.genAdds(r,t.target)),t.removedNodes.forEach(r=>{const n=this.mirror.getId(r),s=ge(t.target)?this.mirror.getId(b.host(t.target)):this.mirror.getId(t.target);B(t.target,this.blockClass,this.blockSelector,!1)||qe(r,this.mirror,this.slimDOMOptions)||!rn(r,this.mirror)||(this.addedSet.has(r)?(Qe(this.addedSet,r),this.droppedSet.add(r)):this.addedSet.has(t.target)&&n===-1||Ht(t.target,this.mirror)||(this.movedSet.has(r)&&this.movedMap[yt(n,s)]?Qe(this.movedSet,r):(this.removes.push({parentId:s,id:n,isShadow:ge(t.target)&&ye(t.target)?!0:void 0}),cn(r,this.removesSubTreeCache))),this.mapRemoves.push(r))});break}}}),g(this,"genAdds",(t,r)=>{if(!this.processedNodeManager.inOtherBuffer(t,this)&&!(this.addedSet.has(t)||this.movedSet.has(t))){if(this.mirror.hasNode(t)){if(qe(t,this.mirror,this.slimDOMOptions))return;this.movedSet.add(t);let n=null;r&&this.mirror.hasNode(r)&&(n=this.mirror.getId(r)),n&&n!==-1&&(this.movedMap[yt(this.mirror.getId(t),n)]=!0)}else this.addedSet.add(t),this.droppedSet.delete(t);B(t,this.blockClass,this.blockSelector,!1)||(b.childNodes(t).forEach(n=>this.genAdds(n)),Ze(t)&&b.childNodes(b.shadowRoot(t)).forEach(n=>{this.processedNodeManager.add(n,this),this.genAdds(n,t)}))}})}init(t){["mutationCb","blockClass","blockSelector","maskTextClass","maskTextSelector","inlineStylesheet","maskInputOptions","maskTextFn","maskInputFn","keepIframeSrcFn","recordCanvas","inlineImages","slimDOMOptions","dataURLOptions","doc","mirror","iframeManager","stylesheetManager","shadowDomManager","canvasManager","processedNodeManager"].forEach(r=>{this[r]=t[r]})}freeze(){this.frozen=!0,this.canvasManager.freeze()}unfreeze(){this.frozen=!1,this.canvasManager.unfreeze(),this.emit()}isFrozen(){return this.frozen}lock(){this.locked=!0,this.canvasManager.lock()}unlock(){this.locked=!1,this.canvasManager.unlock(),this.emit()}reset(){this.shadowDomManager.reset(),this.canvasManager.reset()}}function Qe(e,t){e.delete(t),b.childNodes(t).forEach(r=>Qe(e,r))}function cn(e,t){const r=[e];for(;r.length;){const n=r.pop();t.has(n)||(t.add(n),b.childNodes(n).forEach(s=>r.push(s)))}}function St(e,t){return e.size===0?!1:qt(e,t)}function qt(e,t){if(e.has(t))return!0;const r=b.parentNode(t);return r?qt(e,r):!1}let Se;function un(e){Se=e}function dn(){Se=void 0}const I=e=>Se?(...r)=>{try{return e(...r)}catch(n){if(Se&&Se(n)===!0)return;throw n}}:e,oe=[];function Me(e){try{if("composedPath"in e){const t=e.composedPath();if(t.length)return t[0]}else if("path"in e&&e.path.length)return e.path[0]}catch(t){}return e&&e.target}function Xt(e,t){const r=new ln;oe.push(r),r.init(e);const[n,s]=Nt(),o=new n(I(r.processMutations.bind(r)));return o.observe(t,{attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),[o,s]}function hn({mousemoveCb:e,sampling:t,doc:r,mirror:n}){if(t.mousemove===!1)return()=>{};const s=typeof t.mousemove=="number"?t.mousemove:50,o=typeof t.mousemoveCallback=="number"?t.mousemoveCallback:500;let a=[],c;const i=Ce(I(h=>{const p=Date.now()-c;e(a.map(f=>(f.timeOffset-=p,f)),h),a=[],c=null}),o),d=I(Ce(I(h=>{const p=Me(h),{clientX:f,clientY:m}=Je(h)?h.changedTouches[0]:h;c||(c=be()),a.push({x:f,y:m,id:n.getId(p),timeOffset:be()-c}),i(typeof DragEvent!="undefined"&&h instanceof DragEvent?v.Drag:h instanceof MouseEvent?v.MouseMove:v.TouchMove)}),s,{trailing:!1})),u=[U("mousemove",d,r),U("touchmove",d,r),U("drag",d,r)];return I(()=>{u.forEach(h=>h())})}function fn({mouseInteractionCb:e,doc:t,mirror:r,blockClass:n,blockSelector:s,sampling:o}){if(o.mouseInteraction===!1)return()=>{};const a=o.mouseInteraction===!0||o.mouseInteraction===void 0?{}:o.mouseInteraction,c=[];let i=null;const d=u=>h=>{const p=Me(h);if(B(p,n,s,!0))return;let f=null,m=u;if("pointerType"in h){switch(h.pointerType){case"mouse":f=K.Mouse;break;case"touch":f=K.Touch;break;case"pen":f=K.Pen;break}f===K.Touch?z[u]===z.MouseDown?m="TouchStart":z[u]===z.MouseUp&&(m="TouchEnd"):K.Pen}else Je(h)&&(f=K.Touch);f!==null?(i=f,(m.startsWith("Touch")&&f===K.Touch||m.startsWith("Mouse")&&f===K.Mouse)&&(f=null)):z[u]===z.Click&&(f=i,i=null);const l=Je(h)?h.changedTouches[0]:h;if(!l)return;const S=r.getId(p),{clientX:M,clientY:C}=l;I(e)(P({type:z[m],id:S,x:M,y:C},f!==null&&{pointerType:f}))};return Object.keys(z).filter(u=>Number.isNaN(Number(u))&&!u.endsWith("_Departed")&&a[u]!==!1).forEach(u=>{let h=te(u);const p=d(u);if(window.PointerEvent)switch(z[u]){case z.MouseDown:case z.MouseUp:h=h.replace("mouse","pointer");break;case z.TouchStart:case z.TouchEnd:return}c.push(U(h,p,t))}),I(()=>{c.forEach(u=>u())})}function Yt({scrollCb:e,doc:t,mirror:r,blockClass:n,blockSelector:s,sampling:o}){const a=I(Ce(I(c=>{const i=Me(c);if(!i||B(i,n,s,!0))return;const d=r.getId(i);if(i===t&&t.defaultView){const u=Wt(t.defaultView);e({id:d,x:u.left,y:u.top})}else e({id:d,x:i.scrollLeft,y:i.scrollTop})}),o.scroll||100));return U("scroll",a,t)}function pn({viewportResizeCb:e},{win:t}){let r=-1,n=-1;const s=I(Ce(I(()=>{const o=Ut(),a=Bt();(r!==o||n!==a)&&(e({width:Number(a),height:Number(o)}),r=o,n=a)}),200));return U("resize",s,t)}const mn=["INPUT","TEXTAREA","SELECT"],bt=new WeakMap;function gn({inputCb:e,doc:t,mirror:r,blockClass:n,blockSelector:s,ignoreClass:o,ignoreSelector:a,maskInputOptions:c,maskInputFn:i,sampling:d,userTriggeredOnInput:u}){function h(C){let y=Me(C);const w=C.isTrusted,T=y&&y.tagName;if(y&&T==="OPTION"&&(y=b.parentElement(y)),!y||!T||mn.indexOf(T)<0||B(y,n,s,!0)||y.classList.contains(o)||a&&y.matches(a))return;let x=y.value,W=!1;const J=Ae(y)||"";J==="radio"||J==="checkbox"?W=y.checked:(c[T.toLowerCase()]||c[J])&&(x=_e({element:y,maskInputOptions:c,tagName:T,type:J,value:x,maskInputFn:i})),p(y,u?{text:x,isChecked:W,userTriggered:w}:{text:x,isChecked:W});const j=y.name;J==="radio"&&j&&W&&t.querySelectorAll(`input[type="radio"][name="${j}"]`).forEach(q=>{if(q!==y){const V=q.value;p(q,u?{text:V,isChecked:!W,userTriggered:!1}:{text:V,isChecked:!W})}})}function p(C,y){const w=bt.get(C);if(!w||w.text!==y.text||w.isChecked!==y.isChecked){bt.set(C,y);const T=r.getId(C);I(e)(Oe(P({},y),{id:T}))}}const m=(d.input==="last"?["change"]:["input","change"]).map(C=>U(C,I(h),t)),l=t.defaultView;if(!l)return()=>{m.forEach(C=>C())};const S=l.Object.getOwnPropertyDescriptor(l.HTMLInputElement.prototype,"value"),M=[[l.HTMLInputElement.prototype,"value"],[l.HTMLInputElement.prototype,"checked"],[l.HTMLSelectElement.prototype,"value"],[l.HTMLTextAreaElement.prototype,"value"],[l.HTMLSelectElement.prototype,"selectedIndex"],[l.HTMLOptionElement.prototype,"selected"]];return S&&S.set&&m.push(...M.map(C=>ze(C[0],C[1],{set(){I(h)({target:this,isTrusted:!1})}},!1,l))),I(()=>{m.forEach(C=>C())})}function Ue(e){const t=[];function r(n,s){if(ke("CSSGroupingRule")&&n.parentRule instanceof CSSGroupingRule||ke("CSSMediaRule")&&n.parentRule instanceof CSSMediaRule||ke("CSSSupportsRule")&&n.parentRule instanceof CSSSupportsRule||ke("CSSConditionRule")&&n.parentRule instanceof CSSConditionRule){const a=Array.from(n.parentRule.cssRules).indexOf(n);return s.unshift(a),r(n.parentRule,s)}else if(n.parentStyleSheet){const a=Array.from(n.parentStyleSheet.cssRules).indexOf(n);s.unshift(a)}return s}return r(e,t)}function ee(e,t,r){let n,s;return e?(e.ownerNode?n=t.getId(e.ownerNode):s=r.getId(e),{styleId:s,id:n}):{}}function yn({styleSheetRuleCb:e,mirror:t,stylesheetManager:r},{win:n}){if(!n.CSSStyleSheet||!n.CSSStyleSheet.prototype)return()=>{};const s=n.CSSStyleSheet.prototype.insertRule;n.CSSStyleSheet.prototype.insertRule=new Proxy(s,{apply:I((u,h,p)=>{const[f,m]=p,{id:l,styleId:S}=ee(h,t,r.styleMirror);return(l&&l!==-1||S&&S!==-1)&&e({id:l,styleId:S,adds:[{rule:f,index:m}]}),u.apply(h,p)})}),n.CSSStyleSheet.prototype.addRule=function(u,h,p=this.cssRules.length){const f=`${u} { ${h} }`;return n.CSSStyleSheet.prototype.insertRule.apply(this,[f,p])};const o=n.CSSStyleSheet.prototype.deleteRule;n.CSSStyleSheet.prototype.deleteRule=new Proxy(o,{apply:I((u,h,p)=>{const[f]=p,{id:m,styleId:l}=ee(h,t,r.styleMirror);return(m&&m!==-1||l&&l!==-1)&&e({id:m,styleId:l,removes:[{index:f}]}),u.apply(h,p)})}),n.CSSStyleSheet.prototype.removeRule=function(u){return n.CSSStyleSheet.prototype.deleteRule.apply(this,[u])};let a;n.CSSStyleSheet.prototype.replace&&(a=n.CSSStyleSheet.prototype.replace,n.CSSStyleSheet.prototype.replace=new Proxy(a,{apply:I((u,h,p)=>{const[f]=p,{id:m,styleId:l}=ee(h,t,r.styleMirror);return(m&&m!==-1||l&&l!==-1)&&e({id:m,styleId:l,replace:f}),u.apply(h,p)})}));let c;n.CSSStyleSheet.prototype.replaceSync&&(c=n.CSSStyleSheet.prototype.replaceSync,n.CSSStyleSheet.prototype.replaceSync=new Proxy(c,{apply:I((u,h,p)=>{const[f]=p,{id:m,styleId:l}=ee(h,t,r.styleMirror);return(m&&m!==-1||l&&l!==-1)&&e({id:m,styleId:l,replaceSync:f}),u.apply(h,p)})}));const i={};Te("CSSGroupingRule")?i.CSSGroupingRule=n.CSSGroupingRule:(Te("CSSMediaRule")&&(i.CSSMediaRule=n.CSSMediaRule),Te("CSSConditionRule")&&(i.CSSConditionRule=n.CSSConditionRule),Te("CSSSupportsRule")&&(i.CSSSupportsRule=n.CSSSupportsRule));const d={};return Object.entries(i).forEach(([u,h])=>{d[u]={insertRule:h.prototype.insertRule,deleteRule:h.prototype.deleteRule},h.prototype.insertRule=new Proxy(d[u].insertRule,{apply:I((p,f,m)=>{const[l,S]=m,{id:M,styleId:C}=ee(f.parentStyleSheet,t,r.styleMirror);return(M&&M!==-1||C&&C!==-1)&&e({id:M,styleId:C,adds:[{rule:l,index:[...Ue(f),S||0]}]}),p.apply(f,m)})}),h.prototype.deleteRule=new Proxy(d[u].deleteRule,{apply:I((p,f,m)=>{const[l]=m,{id:S,styleId:M}=ee(f.parentStyleSheet,t,r.styleMirror);return(S&&S!==-1||M&&M!==-1)&&e({id:S,styleId:M,removes:[{index:[...Ue(f),l]}]}),p.apply(f,m)})})}),I(()=>{n.CSSStyleSheet.prototype.insertRule=s,n.CSSStyleSheet.prototype.deleteRule=o,a&&(n.CSSStyleSheet.prototype.replace=a),c&&(n.CSSStyleSheet.prototype.replaceSync=c),Object.entries(i).forEach(([u,h])=>{h.prototype.insertRule=d[u].insertRule,h.prototype.deleteRule=d[u].deleteRule})})}function Jt({mirror:e,stylesheetManager:t},r){var n,s,o;let a=null;r.nodeName==="#document"?a=e.getId(r):a=e.getId(b.host(r));const c=r.nodeName==="#document"?(n=r.defaultView)==null?void 0:n.Document:(o=(s=r.ownerDocument)==null?void 0:s.defaultView)==null?void 0:o.ShadowRoot,i=c!=null&&c.prototype?Object.getOwnPropertyDescriptor(c==null?void 0:c.prototype,"adoptedStyleSheets"):void 0;return a===null||a===-1||!c||!i?()=>{}:(Object.defineProperty(r,"adoptedStyleSheets",{configurable:i.configurable,enumerable:i.enumerable,get(){var d;return(d=i.get)==null?void 0:d.call(this)},set(d){var u;const h=(u=i.set)==null?void 0:u.call(this,d);if(a!==null&&a!==-1)try{t.adoptStyleSheets(d,a)}catch(p){}return h}}),I(()=>{Object.defineProperty(r,"adoptedStyleSheets",{configurable:i.configurable,enumerable:i.enumerable,get:i.get,set:i.set})}))}function Sn({styleDeclarationCb:e,mirror:t,ignoreCSSAttributes:r,stylesheetManager:n},{win:s}){const o=s.CSSStyleDeclaration.prototype.setProperty;s.CSSStyleDeclaration.prototype.setProperty=new Proxy(o,{apply:I((c,i,d)=>{var u;const[h,p,f]=d;if(r.has(h))return o.apply(i,[h,p,f]);const{id:m,styleId:l}=ee((u=i.parentRule)==null?void 0:u.parentStyleSheet,t,n.styleMirror);return(m&&m!==-1||l&&l!==-1)&&e({id:m,styleId:l,set:{property:h,value:p,priority:f},index:Ue(i.parentRule)}),c.apply(i,d)})});const a=s.CSSStyleDeclaration.prototype.removeProperty;return s.CSSStyleDeclaration.prototype.removeProperty=new Proxy(a,{apply:I((c,i,d)=>{var u;const[h]=d;if(r.has(h))return a.apply(i,[h]);const{id:p,styleId:f}=ee((u=i.parentRule)==null?void 0:u.parentStyleSheet,t,n.styleMirror);return(p&&p!==-1||f&&f!==-1)&&e({id:p,styleId:f,remove:{property:h},index:Ue(i.parentRule)}),c.apply(i,d)})}),I(()=>{s.CSSStyleDeclaration.prototype.setProperty=o,s.CSSStyleDeclaration.prototype.removeProperty=a})}function bn({mediaInteractionCb:e,blockClass:t,blockSelector:r,mirror:n,sampling:s,doc:o}){const a=I(i=>Ce(I(d=>{const u=Me(d);if(!u||B(u,t,r,!0))return;const{currentTime:h,volume:p,muted:f,playbackRate:m,loop:l}=u;e({type:i,id:n.getId(u),currentTime:h,volume:p,muted:f,playbackRate:m,loop:l})}),s.media||500)),c=[U("play",a(le.Play),o),U("pause",a(le.Pause),o),U("seeked",a(le.Seeked),o),U("volumechange",a(le.VolumeChange),o),U("ratechange",a(le.RateChange),o)];return I(()=>{c.forEach(i=>i())})}function Cn({fontCb:e,doc:t}){const r=t.defaultView;if(!r)return()=>{};const n=[],s=new WeakMap,o=r.FontFace;r.FontFace=function(i,d,u){const h=new o(i,d,u);return s.set(h,{family:i,buffer:typeof d!="string",descriptors:u,fontSource:typeof d=="string"?d:JSON.stringify(Array.from(new Uint8Array(d)))}),h};const a=ie(t.fonts,"add",function(c){return function(i){return setTimeout(I(()=>{const d=s.get(i);d&&(e(d),s.delete(i))}),0),c.apply(this,[i])}});return n.push(()=>{r.FontFace=o}),n.push(a),I(()=>{n.forEach(c=>c())})}function Mn(e){const{doc:t,mirror:r,blockClass:n,blockSelector:s,selectionCb:o}=e;let a=!0;const c=I(()=>{const i=t.getSelection();if(!i||a&&(i!=null&&i.isCollapsed))return;a=i.isCollapsed||!1;const d=[],u=i.rangeCount||0;for(let h=0;h<u;h++){const p=i.getRangeAt(h),{startContainer:f,startOffset:m,endContainer:l,endOffset:S}=p;B(f,n,s,!0)||B(l,n,s,!0)||d.push({start:r.getId(f),startOffset:m,end:r.getId(l),endOffset:S})}o({ranges:d})});return c(),U("selectionchange",c)}function wn({doc:e,customElementCb:t}){const r=e.defaultView;return!r||!r.customElements?()=>{}:ie(r.customElements,"define",function(s){return function(o,a,c){try{t({define:{name:o}})}catch(i){console.warn(`Custom element callback failed for ${o}`)}return s.apply(this,[o,a,c])}})}function vn(e,t){const{mutationCb:r,mousemoveCb:n,mouseInteractionCb:s,scrollCb:o,viewportResizeCb:a,inputCb:c,mediaInteractionCb:i,styleSheetRuleCb:d,styleDeclarationCb:u,canvasMutationCb:h,fontCb:p,selectionCb:f,customElementCb:m}=e;e.mutationCb=(...l)=>{t.mutation&&t.mutation(...l),r(...l)},e.mousemoveCb=(...l)=>{t.mousemove&&t.mousemove(...l),n(...l)},e.mouseInteractionCb=(...l)=>{t.mouseInteraction&&t.mouseInteraction(...l),s(...l)},e.scrollCb=(...l)=>{t.scroll&&t.scroll(...l),o(...l)},e.viewportResizeCb=(...l)=>{t.viewportResize&&t.viewportResize(...l),a(...l)},e.inputCb=(...l)=>{t.input&&t.input(...l),c(...l)},e.mediaInteractionCb=(...l)=>{t.mediaInteaction&&t.mediaInteaction(...l),i(...l)},e.styleSheetRuleCb=(...l)=>{t.styleSheetRule&&t.styleSheetRule(...l),d(...l)},e.styleDeclarationCb=(...l)=>{t.styleDeclaration&&t.styleDeclaration(...l),u(...l)},e.canvasMutationCb=(...l)=>{t.canvasMutation&&t.canvasMutation(...l),h(...l)},e.fontCb=(...l)=>{t.font&&t.font(...l),p(...l)},e.selectionCb=(...l)=>{t.selection&&t.selection(...l),f(...l)},e.customElementCb=(...l)=>{t.customElement&&t.customElement(...l),m(...l)}}function In(e,t={}){const r=e.doc.defaultView;if(!r)return()=>{};vn(e,t);let n,s=()=>{};e.recordDOM&&([n,s]=Xt(e,e.doc));const o=hn(e),a=fn(e),c=Yt(e),i=pn(e,{win:r}),d=gn(e),u=bn(e);let h=()=>{},p=()=>{},f=()=>{},m=()=>{};e.recordDOM&&(h=yn(e,{win:r}),p=Jt(e,e.doc),f=Sn(e,{win:r}),e.collectFonts&&(m=Cn(e)));const l=Mn(e),S=wn(e),M=[];for(const C of e.plugins)M.push(C.observer(C.callback,r,C.options));return I(()=>{oe.forEach(C=>C.reset()),n==null||n.disconnect(),s(),o(),a(),c(),i(),d(),u(),h(),p(),f(),m(),l(),S(),M.forEach(C=>C())})}function ke(e){return typeof window[e]!="undefined"}function Te(e){return!!(typeof window[e]!="undefined"&&window[e].prototype&&"insertRule"in window[e].prototype&&"deleteRule"in window[e].prototype)}class Ct{constructor(t){g(this,"iframeIdToRemoteIdMap",new WeakMap),g(this,"iframeRemoteIdToIdMap",new WeakMap),this.generateIdFn=t}getId(t,r,n,s){const o=n||this.getIdToRemoteIdMap(t),a=s||this.getRemoteIdToIdMap(t);let c=o.get(r);return c||(c=this.generateIdFn(),o.set(r,c),a.set(c,r)),c}getIds(t,r){const n=this.getIdToRemoteIdMap(t),s=this.getRemoteIdToIdMap(t);return r.map(o=>this.getId(t,o,n,s))}getRemoteId(t,r,n){const s=n||this.getRemoteIdToIdMap(t);if(typeof r!="number")return r;const o=s.get(r);return o||-1}getRemoteIds(t,r){const n=this.getRemoteIdToIdMap(t);return r.map(s=>this.getRemoteId(t,s,n))}reset(t){if(!t){this.iframeIdToRemoteIdMap=new WeakMap,this.iframeRemoteIdToIdMap=new WeakMap;return}this.iframeIdToRemoteIdMap.delete(t),this.iframeRemoteIdToIdMap.delete(t)}getIdToRemoteIdMap(t){let r=this.iframeIdToRemoteIdMap.get(t);return r||(r=new Map,this.iframeIdToRemoteIdMap.set(t,r)),r}getRemoteIdToIdMap(t){let r=this.iframeRemoteIdToIdMap.get(t);return r||(r=new Map,this.iframeRemoteIdToIdMap.set(t,r)),r}}class Rn{constructor(t){g(this,"iframes",new WeakMap),g(this,"crossOriginIframeMap",new WeakMap),g(this,"crossOriginIframeMirror",new Ct(Lt)),g(this,"crossOriginIframeStyleMirror"),g(this,"crossOriginIframeRootIdMap",new WeakMap),g(this,"mirror"),g(this,"mutationCb"),g(this,"wrappedEmit"),g(this,"loadListener"),g(this,"stylesheetManager"),g(this,"recordCrossOriginIframes"),this.mutationCb=t.mutationCb,this.wrappedEmit=t.wrappedEmit,this.stylesheetManager=t.stylesheetManager,this.recordCrossOriginIframes=t.recordCrossOriginIframes,this.crossOriginIframeStyleMirror=new Ct(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),this.mirror=t.mirror,this.recordCrossOriginIframes&&window.addEventListener("message",this.handleMessage.bind(this))}addIframe(t){this.iframes.set(t,!0),t.contentWindow&&this.crossOriginIframeMap.set(t.contentWindow,t)}addLoadListener(t){this.loadListener=t}attachIframe(t,r){var n,s;this.mutationCb({adds:[{parentId:this.mirror.getId(t),nextId:null,node:r}],removes:[],texts:[],attributes:[],isAttachIframe:!0}),this.recordCrossOriginIframes&&((n=t.contentWindow)==null||n.addEventListener("message",this.handleMessage.bind(this))),(s=this.loadListener)==null||s.call(this,t),t.contentDocument&&t.contentDocument.adoptedStyleSheets&&t.contentDocument.adoptedStyleSheets.length>0&&this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets,this.mirror.getId(t.contentDocument))}handleMessage(t){const r=t;if(r.data.type!=="rrweb"||r.origin!==r.data.origin||!t.source)return;const s=this.crossOriginIframeMap.get(t.source);if(!s)return;const o=this.transformCrossOriginEvent(s,r.data.event);o&&this.wrappedEmit(o,r.data.isCheckout)}transformCrossOriginEvent(t,r){var n;switch(r.type){case R.FullSnapshot:{this.crossOriginIframeMirror.reset(t),this.crossOriginIframeStyleMirror.reset(t),this.replaceIdOnNode(r.data.node,t);const s=r.data.node.id;return this.crossOriginIframeRootIdMap.set(t,s),this.patchRootIdOnNode(r.data.node,s),{timestamp:r.timestamp,type:R.IncrementalSnapshot,data:{source:v.Mutation,adds:[{parentId:this.mirror.getId(t),nextId:null,node:r.data.node}],removes:[],texts:[],attributes:[],isAttachIframe:!0}}}case R.Meta:case R.Load:case R.DomContentLoaded:return!1;case R.Plugin:return r;case R.Custom:return this.replaceIds(r.data.payload,t,["id","parentId","previousId","nextId"]),r;case R.IncrementalSnapshot:switch(r.data.source){case v.Mutation:return r.data.adds.forEach(s=>{this.replaceIds(s,t,["parentId","nextId","previousId"]),this.replaceIdOnNode(s.node,t);const o=this.crossOriginIframeRootIdMap.get(t);o&&this.patchRootIdOnNode(s.node,o)}),r.data.removes.forEach(s=>{this.replaceIds(s,t,["parentId","id"])}),r.data.attributes.forEach(s=>{this.replaceIds(s,t,["id"])}),r.data.texts.forEach(s=>{this.replaceIds(s,t,["id"])}),r;case v.Drag:case v.TouchMove:case v.MouseMove:return r.data.positions.forEach(s=>{this.replaceIds(s,t,["id"])}),r;case v.ViewportResize:return!1;case v.MediaInteraction:case v.MouseInteraction:case v.Scroll:case v.CanvasMutation:case v.Input:return this.replaceIds(r.data,t,["id"]),r;case v.StyleSheetRule:case v.StyleDeclaration:return this.replaceIds(r.data,t,["id"]),this.replaceStyleIds(r.data,t,["styleId"]),r;case v.Font:return r;case v.Selection:return r.data.ranges.forEach(s=>{this.replaceIds(s,t,["start","end"])}),r;case v.AdoptedStyleSheet:return this.replaceIds(r.data,t,["id"]),this.replaceStyleIds(r.data,t,["styleIds"]),(n=r.data.styles)==null||n.forEach(s=>{this.replaceStyleIds(s,t,["styleId"])}),r}}return!1}replace(t,r,n,s){for(const o of s)!Array.isArray(r[o])&&typeof r[o]!="number"||(Array.isArray(r[o])?r[o]=t.getIds(n,r[o]):r[o]=t.getId(n,r[o]));return r}replaceIds(t,r,n){return this.replace(this.crossOriginIframeMirror,t,r,n)}replaceStyleIds(t,r,n){return this.replace(this.crossOriginIframeStyleMirror,t,r,n)}replaceIdOnNode(t,r){this.replaceIds(t,r,["id","rootId"]),"childNodes"in t&&t.childNodes.forEach(n=>{this.replaceIdOnNode(n,r)})}patchRootIdOnNode(t,r){t.type!==A.Document&&!t.rootId&&(t.rootId=r),"childNodes"in t&&t.childNodes.forEach(n=>{this.patchRootIdOnNode(n,r)})}}class On{constructor(t){g(this,"shadowDoms",new WeakSet),g(this,"mutationCb"),g(this,"scrollCb"),g(this,"bypassOptions"),g(this,"mirror"),g(this,"restoreHandlers",[]),this.mutationCb=t.mutationCb,this.scrollCb=t.scrollCb,this.bypassOptions=t.bypassOptions,this.mirror=t.mirror,this.init()}init(){this.reset(),this.patchAttachShadow(Element,document)}addShadowRoot(t,r){if(!ye(t)||this.shadowDoms.has(t))return;this.shadowDoms.add(t);const[n]=Xt(Oe(P({},this.bypassOptions),{doc:r,mutationCb:this.mutationCb,mirror:this.mirror,shadowDomManager:this}),t);this.restoreHandlers.push(()=>n.disconnect()),this.restoreHandlers.push(Yt(Oe(P({},this.bypassOptions),{scrollCb:this.scrollCb,doc:t,mirror:this.mirror}))),setTimeout(()=>{t.adoptedStyleSheets&&t.adoptedStyleSheets.length>0&&this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets,this.mirror.getId(b.host(t))),this.restoreHandlers.push(Jt({mirror:this.mirror,stylesheetManager:this.bypassOptions.stylesheetManager},t))},0)}observeAttachShadow(t){!t.contentWindow||!t.contentDocument||this.patchAttachShadow(t.contentWindow.Element,t.contentDocument)}patchAttachShadow(t,r){const n=this;this.restoreHandlers.push(ie(t.prototype,"attachShadow",function(s){return function(o){const a=s.call(this,o),c=b.shadowRoot(this);return c&&$t(this)&&n.addShadowRoot(c,r),a}}))}reset(){this.restoreHandlers.forEach(t=>{try{t()}catch(r){}}),this.restoreHandlers=[],this.shadowDoms=new WeakSet}}var he="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Nn=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var xe=0;xe<he.length;xe++)Nn[he.charCodeAt(xe)]=xe;var En=function(e){var t=new Uint8Array(e),r,n=t.length,s="";for(r=0;r<n;r+=3)s+=he[t[r]>>2],s+=he[(t[r]&3)<<4|t[r+1]>>4],s+=he[(t[r+1]&15)<<2|t[r+2]>>6],s+=he[t[r+2]&63];return n%3===2?s=s.substring(0,s.length-1)+"=":n%3===1&&(s=s.substring(0,s.length-2)+"=="),s};const Mt=new Map;function kn(e,t){let r=Mt.get(e);return r||(r=new Map,Mt.set(e,r)),r.has(t)||r.set(t,[]),r.get(t)}const Zt=(e,t,r)=>{if(!e||!(Kt(e,t)||typeof e=="object"))return;const n=e.constructor.name,s=kn(r,n);let o=s.indexOf(e);return o===-1&&(o=s.length,s.push(e)),o};function De(e,t,r){if(e instanceof Array)return e.map(n=>De(n,t,r));if(e===null)return e;if(e instanceof Float32Array||e instanceof Float64Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Int16Array||e instanceof Int8Array||e instanceof Uint8ClampedArray)return{rr_type:e.constructor.name,args:[Object.values(e)]};if(e instanceof ArrayBuffer){const n=e.constructor.name,s=En(e);return{rr_type:n,base64:s}}else{if(e instanceof DataView)return{rr_type:e.constructor.name,args:[De(e.buffer,t,r),e.byteOffset,e.byteLength]};if(e instanceof HTMLImageElement){const n=e.constructor.name,{src:s}=e;return{rr_type:n,src:s}}else if(e instanceof HTMLCanvasElement){const n="HTMLImageElement",s=e.toDataURL();return{rr_type:n,src:s}}else{if(e instanceof ImageData)return{rr_type:e.constructor.name,args:[De(e.data,t,r),e.width,e.height]};if(Kt(e,t)||typeof e=="object"){const n=e.constructor.name,s=Zt(e,t,r);return{rr_type:n,index:s}}}}return e}const Qt=(e,t,r)=>e.map(n=>De(n,t,r)),Kt=(e,t)=>!!["WebGLActiveInfo","WebGLBuffer","WebGLFramebuffer","WebGLProgram","WebGLRenderbuffer","WebGLShader","WebGLShaderPrecisionFormat","WebGLTexture","WebGLUniformLocation","WebGLVertexArrayObject","WebGLVertexArrayObjectOES"].filter(s=>typeof t[s]=="function").find(s=>e instanceof t[s]);function Tn(e,t,r,n){const s=[],o=Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);for(const a of o)try{if(typeof t.CanvasRenderingContext2D.prototype[a]!="function")continue;const c=ie(t.CanvasRenderingContext2D.prototype,a,function(i){return function(...d){return B(this.canvas,r,n,!0)||setTimeout(()=>{const u=Qt(d,t,this);e(this.canvas,{type:fe["2D"],property:a,args:u})},0),i.apply(this,d)}});s.push(c)}catch(c){const i=ze(t.CanvasRenderingContext2D.prototype,a,{set(d){e(this.canvas,{type:fe["2D"],property:a,args:[d],setter:!0})}});s.push(i)}return()=>{s.forEach(a=>a())}}function xn(e){return e==="experimental-webgl"?"webgl":e}function wt(e,t,r,n){const s=[];try{const o=ie(e.HTMLCanvasElement.prototype,"getContext",function(a){return function(c,...i){if(!B(this,t,r,!0)){const d=xn(c);if("__context"in this||(this.__context=d),n&&["webgl","webgl2"].includes(d))if(i[0]&&typeof i[0]=="object"){const u=i[0];u.preserveDrawingBuffer||(u.preserveDrawingBuffer=!0)}else i.splice(0,1,{preserveDrawingBuffer:!0})}return a.apply(this,[c,...i])}});s.push(o)}catch(o){console.error("failed to patch HTMLCanvasElement.prototype.getContext")}return()=>{s.forEach(o=>o())}}function vt(e,t,r,n,s,o){const a=[],c=Object.getOwnPropertyNames(e);for(const i of c)if(!["isContextLost","canvas","drawingBufferWidth","drawingBufferHeight"].includes(i))try{if(typeof e[i]!="function")continue;const d=ie(e,i,function(u){return function(...h){const p=u.apply(this,h);if(Zt(p,o,this),"tagName"in this.canvas&&!B(this.canvas,n,s,!0)){const f=Qt(h,o,this),m={type:t,property:i,args:f};r(this.canvas,m)}return p}});a.push(d)}catch(d){const u=ze(e,i,{set(h){r(this.canvas,{type:t,property:i,args:[h],setter:!0})}});a.push(u)}return a}function Dn(e,t,r,n){const s=[];return typeof t.WebGLRenderingContext!="undefined"&&s.push(...vt(t.WebGLRenderingContext.prototype,fe.WebGL,e,r,n,t)),typeof t.WebGL2RenderingContext!="undefined"&&s.push(...vt(t.WebGL2RenderingContext.prototype,fe.WebGL2,e,r,n,t)),()=>{s.forEach(o=>o())}}const er=`(function() {
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
`,It=typeof self!="undefined"&&self.Blob&&new Blob([er],{type:"text/javascript;charset=utf-8"});function Ln(e){let t;try{if(t=It&&(self.URL||self.webkitURL).createObjectURL(It),!t)throw"";const r=new Worker(t,{name:e==null?void 0:e.name});return r.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),r}catch(r){return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(er),{name:e==null?void 0:e.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class _n{constructor(t){g(this,"pendingCanvasMutations",new Map),g(this,"rafStamps",{latestId:0,invokeId:null}),g(this,"mirror"),g(this,"mutationCb"),g(this,"resetObservers"),g(this,"frozen",!1),g(this,"locked",!1),g(this,"processMutation",(i,d)=>{(this.rafStamps.invokeId&&this.rafStamps.latestId!==this.rafStamps.invokeId||!this.rafStamps.invokeId)&&(this.rafStamps.invokeId=this.rafStamps.latestId),this.pendingCanvasMutations.has(i)||this.pendingCanvasMutations.set(i,[]),this.pendingCanvasMutations.get(i).push(d)});const{sampling:r="all",win:n,blockClass:s,blockSelector:o,recordCanvas:a,dataURLOptions:c}=t;this.mutationCb=t.mutationCb,this.mirror=t.mirror,a&&r==="all"&&this.initCanvasMutationObserver(n,s,o),a&&typeof r=="number"&&this.initCanvasFPSObserver(r,n,s,o,{dataURLOptions:c})}reset(){this.pendingCanvasMutations.clear(),this.resetObservers&&this.resetObservers()}freeze(){this.frozen=!0}unfreeze(){this.frozen=!1}lock(){this.locked=!0}unlock(){this.locked=!1}initCanvasFPSObserver(t,r,n,s,o){const a=wt(r,n,s,!0),c=new Map,i=new Ln;i.onmessage=m=>{const{id:l}=m.data;if(c.set(l,!1),!("base64"in m.data))return;const{base64:S,type:M,width:C,height:y}=m.data;this.mutationCb({id:l,type:fe["2D"],commands:[{property:"clearRect",args:[0,0,C,y]},{property:"drawImage",args:[{rr_type:"ImageBitmap",args:[{rr_type:"Blob",data:[{rr_type:"ArrayBuffer",base64:S}],type:M}]},0,0]}]})};const d=1e3/t;let u=0,h;const p=()=>{const m=[];return r.document.querySelectorAll("canvas").forEach(l=>{B(l,n,s,!0)||m.push(l)}),m},f=m=>{if(u&&m-u<d){h=requestAnimationFrame(f);return}u=m,p().forEach(async l=>{var S;const M=this.mirror.getId(l);if(c.get(M)||l.width===0||l.height===0)return;if(c.set(M,!0),["webgl","webgl2"].includes(l.__context)){const y=l.getContext(l.__context);((S=y==null?void 0:y.getContextAttributes())==null?void 0:S.preserveDrawingBuffer)===!1&&y.clear(y.COLOR_BUFFER_BIT)}const C=await createImageBitmap(l);i.postMessage({id:M,bitmap:C,width:l.width,height:l.height,dataURLOptions:o.dataURLOptions},[C])}),h=requestAnimationFrame(f)};h=requestAnimationFrame(f),this.resetObservers=()=>{a(),cancelAnimationFrame(h)}}initCanvasMutationObserver(t,r,n){this.startRAFTimestamping(),this.startPendingCanvasMutationFlusher();const s=wt(t,r,n,!1),o=Tn(this.processMutation.bind(this),t,r,n),a=Dn(this.processMutation.bind(this),t,r,n);this.resetObservers=()=>{s(),o(),a()}}startPendingCanvasMutationFlusher(){requestAnimationFrame(()=>this.flushPendingCanvasMutations())}startRAFTimestamping(){const t=r=>{this.rafStamps.latestId=r,requestAnimationFrame(t)};requestAnimationFrame(t)}flushPendingCanvasMutations(){this.pendingCanvasMutations.forEach((t,r)=>{const n=this.mirror.getId(r);this.flushPendingCanvasMutationFor(r,n)}),requestAnimationFrame(()=>this.flushPendingCanvasMutations())}flushPendingCanvasMutationFor(t,r){if(this.frozen||this.locked)return;const n=this.pendingCanvasMutations.get(t);if(!n||r===-1)return;const s=n.map(a=>{const d=a,{type:c}=d;return ct(d,["type"])}),{type:o}=n[0];this.mutationCb({id:r,type:o,commands:s}),this.pendingCanvasMutations.delete(t)}}class An{constructor(t){g(this,"trackedLinkElements",new WeakSet),g(this,"mutationCb"),g(this,"adoptedStyleSheetCb"),g(this,"styleMirror",new sn),this.mutationCb=t.mutationCb,this.adoptedStyleSheetCb=t.adoptedStyleSheetCb}attachLinkElement(t,r){"_cssText"in r.attributes&&this.mutationCb({adds:[],removes:[],texts:[],attributes:[{id:r.id,attributes:r.attributes}]}),this.trackLinkElement(t)}trackLinkElement(t){this.trackedLinkElements.has(t)||(this.trackedLinkElements.add(t),this.trackStylesheetInLinkElement(t))}adoptStyleSheets(t,r){if(t.length===0)return;const n={id:r,styleIds:[]},s=[];for(const o of t){let a;this.styleMirror.has(o)?a=this.styleMirror.getId(o):(a=this.styleMirror.add(o),s.push({styleId:a,rules:Array.from(o.rules||CSSRule,(c,i)=>({rule:kt(c,o.href),index:i}))})),n.styleIds.push(a)}s.length>0&&(n.styles=s),this.adoptedStyleSheetCb(n)}reset(){this.styleMirror.reset(),this.trackedLinkElements=new WeakSet}trackStylesheetInLinkElement(t){}}class Fn{constructor(){g(this,"nodeMap",new WeakMap),g(this,"active",!1)}inOtherBuffer(t,r){const n=this.nodeMap.get(t);return n&&Array.from(n).some(s=>s!==r)}add(t,r){this.active||(this.active=!0,requestAnimationFrame(()=>{this.nodeMap=new WeakMap,this.active=!1})),this.nodeMap.set(t,(this.nodeMap.get(t)||new Set).add(r))}destroy(){}}let _,Le,Xe,Be=!1;try{if(Array.from([1],e=>e*2)[0]!==2){const e=document.createElement("iframe");document.body.appendChild(e),Array.from=((ut=e.contentWindow)==null?void 0:ut.Array.from)||Array.from,document.body.removeChild(e)}}catch(e){console.debug("Unable to override Array.from",e)}const Y=kr();function we(e={}){const{emit:t,checkoutEveryNms:r,checkoutEveryNth:n,blockClass:s="rr-block",blockSelector:o=null,ignoreClass:a="rr-ignore",ignoreSelector:c=null,maskTextClass:i="rr-mask",maskTextSelector:d=null,inlineStylesheet:u=!0,maskAllInputs:h,maskInputOptions:p,slimDOMOptions:f,maskInputFn:m,maskTextFn:l,hooks:S,packFn:M,sampling:C={},dataURLOptions:y={},mousemoveWait:w,recordDOM:T=!0,recordCanvas:x=!1,recordCrossOriginIframes:W=!1,recordAfter:J=e.recordAfter==="DOMContentLoaded"?e.recordAfter:"load",userTriggeredOnInput:j=!1,collectFonts:q=!1,inlineImages:V=!1,plugins:Z,keepIframeSrcFn:O=()=>!1,ignoreCSSAttributes:pe=new Set([]),errorHandler:me}=e;un(me);const F=W?window.parent===window:!0;let $=!1;if(!F)try{window.parent.document&&($=!1)}catch(N){$=!0}if(F&&!t)throw new Error("emit function is required");if(!F&&!$)return()=>{};w!==void 0&&C.mousemove===void 0&&(C.mousemove=w),Y.reset();const re=h===!0?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,password:!0}:p!==void 0?p:{password:!0},Q=Pt(f);nn();let rt,He=0;const nt=N=>{for(const X of Z||[])X.eventProcessor&&(N=X.eventProcessor(N));return M&&!$&&(N=M(N)),N};_=(N,X)=>{var D;const L=N;if(L.timestamp=be(),(D=oe[0])!=null&&D.isFrozen()&&L.type!==R.FullSnapshot&&!(L.type===R.IncrementalSnapshot&&L.data.source===v.Mutation)&&oe.forEach(H=>H.unfreeze()),F)t==null||t(nt(L),X);else if($){const H={type:"rrweb",event:nt(L),origin:window.location.origin,isCheckout:X};window.parent.postMessage(H,"*")}if(L.type===R.FullSnapshot)rt=L,He=0;else if(L.type===R.IncrementalSnapshot){if(L.data.source===v.Mutation&&L.data.isAttachIframe)return;He++;const H=n&&He>=n,E=r&&L.timestamp-rt.timestamp>r;(H||E)&&Le(!0)}};const ve=N=>{_({type:R.IncrementalSnapshot,data:P({source:v.Mutation},N)})},st=N=>_({type:R.IncrementalSnapshot,data:P({source:v.Scroll},N)}),ot=N=>_({type:R.IncrementalSnapshot,data:P({source:v.CanvasMutation},N)}),tr=N=>_({type:R.IncrementalSnapshot,data:P({source:v.AdoptedStyleSheet},N)}),ne=new An({mutationCb:ve,adoptedStyleSheetCb:tr}),se=new Rn({mirror:Y,mutationCb:ve,stylesheetManager:ne,recordCrossOriginIframes:W,wrappedEmit:_});for(const N of Z||[])N.getMirror&&N.getMirror({nodeMirror:Y,crossOriginIframeMirror:se.crossOriginIframeMirror,crossOriginIframeStyleMirror:se.crossOriginIframeStyleMirror});const Ge=new Fn;Xe=new _n({recordCanvas:x,mutationCb:ot,win:window,blockClass:s,blockSelector:o,mirror:Y,sampling:C.canvas,dataURLOptions:y});const Ie=new On({mutationCb:ve,scrollCb:st,bypassOptions:{blockClass:s,blockSelector:o,maskTextClass:i,maskTextSelector:d,inlineStylesheet:u,maskInputOptions:re,dataURLOptions:y,maskTextFn:l,maskInputFn:m,recordCanvas:x,inlineImages:V,sampling:C,slimDOMOptions:Q,iframeManager:se,stylesheetManager:ne,canvasManager:Xe,keepIframeSrcFn:O,processedNodeManager:Ge},mirror:Y});Le=(N=!1)=>{if(!T)return;_({type:R.Meta,data:{href:window.location.href,width:Bt(),height:Ut()}},N),ne.reset(),Ie.init(),oe.forEach(D=>D.lock());const X=tn(document,{mirror:Y,blockClass:s,blockSelector:o,maskTextClass:i,maskTextSelector:d,inlineStylesheet:u,maskAllInputs:re,maskTextFn:l,maskInputFn:m,slimDOM:Q,dataURLOptions:y,recordCanvas:x,inlineImages:V,onSerialize:D=>{Gt(D,Y)&&se.addIframe(D),jt(D,Y)&&ne.trackLinkElement(D),Ze(D)&&Ie.addShadowRoot(b.shadowRoot(D),document)},onIframeLoad:(D,L)=>{se.attachIframe(D,L),Ie.observeAttachShadow(D)},onStylesheetLoad:(D,L)=>{ne.attachLinkElement(D,L)},keepIframeSrcFn:O});if(!X)return console.warn("Failed to snapshot the document");_({type:R.FullSnapshot,data:{node:X,initialOffset:Wt(window)}},N),oe.forEach(D=>D.unlock()),document.adoptedStyleSheets&&document.adoptedStyleSheets.length>0&&ne.adoptStyleSheets(document.adoptedStyleSheets,Y.getId(document))};try{const N=[],X=L=>{var H;return I(In)({mutationCb:ve,mousemoveCb:(E,je)=>_({type:R.IncrementalSnapshot,data:{source:je,positions:E}}),mouseInteractionCb:E=>_({type:R.IncrementalSnapshot,data:P({source:v.MouseInteraction},E)}),scrollCb:st,viewportResizeCb:E=>_({type:R.IncrementalSnapshot,data:P({source:v.ViewportResize},E)}),inputCb:E=>_({type:R.IncrementalSnapshot,data:P({source:v.Input},E)}),mediaInteractionCb:E=>_({type:R.IncrementalSnapshot,data:P({source:v.MediaInteraction},E)}),styleSheetRuleCb:E=>_({type:R.IncrementalSnapshot,data:P({source:v.StyleSheetRule},E)}),styleDeclarationCb:E=>_({type:R.IncrementalSnapshot,data:P({source:v.StyleDeclaration},E)}),canvasMutationCb:ot,fontCb:E=>_({type:R.IncrementalSnapshot,data:P({source:v.Font},E)}),selectionCb:E=>{_({type:R.IncrementalSnapshot,data:P({source:v.Selection},E)})},customElementCb:E=>{_({type:R.IncrementalSnapshot,data:P({source:v.CustomElement},E)})},blockClass:s,ignoreClass:a,ignoreSelector:c,maskTextClass:i,maskTextSelector:d,maskInputOptions:re,inlineStylesheet:u,sampling:C,recordDOM:T,recordCanvas:x,inlineImages:V,userTriggeredOnInput:j,collectFonts:q,doc:L,maskInputFn:m,maskTextFn:l,keepIframeSrcFn:O,blockSelector:o,slimDOMOptions:Q,dataURLOptions:y,mirror:Y,iframeManager:se,stylesheetManager:ne,shadowDomManager:Ie,processedNodeManager:Ge,canvasManager:Xe,ignoreCSSAttributes:pe,plugins:((H=Z==null?void 0:Z.filter(E=>E.observer))==null?void 0:H.map(E=>({observer:E.observer,options:E.options,callback:je=>_({type:R.Plugin,data:{plugin:E.name,payload:je}})})))||[]},S)};se.addLoadListener(L=>{try{N.push(X(L.contentDocument))}catch(H){console.warn(H)}});const D=()=>{Le(),N.push(X(document)),Be=!0};return["interactive","complete"].includes(document.readyState)?D():(N.push(U("DOMContentLoaded",()=>{_({type:R.DomContentLoaded,data:{}}),J==="DOMContentLoaded"&&D()})),N.push(U("load",()=>{_({type:R.Load,data:{}}),J==="load"&&D()},window))),()=>{N.forEach(L=>{try{L()}catch(H){String(H).toLowerCase().includes("cross-origin")||console.warn(H)}}),Ge.destroy(),Be=!1,dn()}}catch(N){console.warn(N)}}we.addCustomEvent=(e,t)=>{if(!Be)throw new Error("please add custom event after start recording");_({type:R.Custom,data:{tag:e,payload:t}})};we.freezePage=()=>{oe.forEach(e=>e.freeze())};we.takeFullSnapshot=e=>{if(!Be)throw new Error("please take full snapshot after start recording");Le(e)};we.mirror=Y;exports.record=we;
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

const CustomEvents = {
  LABEL: "spectator_sport:label",
  HISTORY: "spectator_sport:history",
  LIFECYCLE: "spectator_sport:lifecycle",
};

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

  customEvent(tag, payload) {
    if (this.stopRrwebCallback) rrwebRecord.addCustomEvent(tag, payload);
  }
}

class Events {
  constructor(sessionId, recordingId) {
    this.sessionId = sessionId;
    this.recordingId = recordingId;

    this.events = [];
    this.tags = new Set();

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
    // Custom label events skip the periodic 15s flush so labels reach the server promptly,
    // the way the old dedicated labels channel used to.
    if (this.payloadBytes > KEEPALIVE_BYTE_LIMIT || event.data?.tag === CustomEvents.LABEL) {
      this.debouncedTransmit();
    }
  }

  addTag(signedTag) {
    if (this.tags.has(signedTag)) return;
    this.tags.add(signedTag);
    this.payloadBytes += lengthInUtf8Bytes(JSON.stringify(signedTag));
    this.debouncedTransmit();
  }

  transmit(keepalive = false) {
    if (this.events.length === 0 && this.tags.size === 0) {
      return;
    }

    const events = [...this.events];
    const tags = [...this.tags];
    this.events = [];
    this.tags = new Set();
    this.payloadBytes = 0;

    // sessionId is sent for backward compatibility with older servers; new servers key on recordingId.
    const payload = { sessionId: this.sessionId, recordingId: this.recordingId, events };
    if (tags.length > 0) payload.tags = tags;

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
  constructor(recorder) {
    this.recorder = recorder;
    this.observer = null;
  }

  // el.content is the signed payload from spectator_sport_label_recording; the server
  // decrypts it into event_data on ingestion, so no plaintext label data is ever recorded here.
  #addLabel(el) {
    this.recorder.customEvent(CustomEvents.LABEL, { signed: el.content });
  }

  start() {
    document.querySelectorAll(RECORDING_LABEL_SELECTOR).forEach(el => {
      this.#addLabel(el);
    });

    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          if (node.matches(RECORDING_LABEL_SELECTOR)) {
            this.#addLabel(node);
          }
          node.querySelectorAll(RECORDING_LABEL_SELECTOR).forEach(el => {
            this.#addLabel(el);
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

class HistoryWatcher {
  constructor(recorder) {
    this.recorder = recorder;
  }

  start() {
    const emitHistoryEvent = () => {
      this.recorder.customEvent(CustomEvents.HISTORY, { href: location.href });
    };

    for (const method of [ "pushState", "replaceState" ]) {
      const original = history[method];
      history[method] = function (...args) {
        const result = original.apply(this, args);
        emitHistoryEvent();
        return result;
      };
    }

    window.addEventListener("popstate", emitHistoryEvent);
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
      this.recorder.customEvent(CustomEvents.LIFECYCLE, { reason: "bfcache-restore" });
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

const labelWatcher = new LabelWatcher(recorder);
labelWatcher.start();

const stopWatcher = new StopWatcher(recorder);
stopWatcher.start();

const historyWatcher = new HistoryWatcher(recorder);
historyWatcher.start();

const lifecycleManager = new PageLifecycleManager(recorder);
lifecycleManager.start();
