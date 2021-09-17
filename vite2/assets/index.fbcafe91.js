import{n as e,R as t,c as a,r as n,a as r,_ as o,I as i,G as s,b as c}from"./vendor.257ffc3f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const l=e.h1`
  font-size: 4rem;
  padding: 0 3rem;
`,d=e=>{const{children:a}=e;return t.createElement(l,{"data-inspector-line":"11","data-inspector-column":"4","data-inspector-relative-path":"src/layouts/components/Title/Title.tsx"},a)},p=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.5rem;
  color: #999;
  
  p {
    margin: 0.5rem auto;
  }
`,m=e=>{const{children:a}=e;return t.createElement(p,{"data-inspector-line":"11","data-inspector-column":"4","data-inspector-relative-path":"src/layouts/components/Slogan/Slogan.tsx"},a)},u=a`
  display: inline-block;
  padding: 0.5rem 0.8rem;
  font: 12px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  font-size: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 0.4rem;
  box-shadow: inset 0 -1px 0 #d1d5da;
`,y=e.div`
  display: inline-block;
  padding: 0 0.5rem;
  opacity:1;
  animation: flickerAnimation 1.6s ease-in-out infinite;
  
  & > .${u} {
    margin: auto 0.8rem;
  }
  
  @keyframes flickerAnimation {
    0%   { opacity: 1; }
    50%  { opacity: .4; }
    100% { opacity: 1; }
  }
`,h=e.div`
  vertical-align: center;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.5rem;
  color: #666;
`,x=({children:e})=>t.createElement("kbd",{"data-inspector-line":"7","data-inspector-column":"4","data-inspector-relative-path":"src/layouts/components/Keypress/Keypress.tsx",className:u},e);class f extends n.exports.Component{render(){const{children:e}=this.props;return t.createElement(h,{"data-inspector-line":"22","data-inspector-column":"6","data-inspector-relative-path":"src/layouts/components/Keypress/Keypress.tsx"},t.createElement("span",{"data-inspector-line":"23","data-inspector-column":"8","data-inspector-relative-path":"src/layouts/components/Keypress/Keypress.tsx"},"press"),t.createElement(y,{"data-inspector-line":"25","data-inspector-column":"8","data-inspector-relative-path":"src/layouts/components/Keypress/Keypress.tsx"},e),t.createElement("span",{"data-inspector-line":"27","data-inspector-column":"8","data-inspector-relative-path":"src/layouts/components/Keypress/Keypress.tsx"},"to try! 🍭"))}}const v=r`
  html, body, #root {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`,g=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,E=e(o)`

`,b="https://github.com/zthxxx/react-dev-inspector",k=()=>t.createElement(i,{"data-inspector-line":"16","data-inspector-column":"4","data-inspector-relative-path":"src/layouts/index.tsx",disableLaunchEditor:!0,onClickElement:e=>{var t;if(console.debug(e),!(null==(t=e.codeInfo)?void 0:t.relativePath))return;const{relativePath:a,lineNumber:n}=e.codeInfo;window.open(`${b}/blob/master/sites/umi3/${a}#L${n}`)}},t.createElement(s,{"data-inspector-line":"32","data-inspector-column":"6","data-inspector-relative-path":"src/layouts/index.tsx",styles:v}),t.createElement(g,{"data-inspector-line":"35","data-inspector-column":"6","data-inspector-relative-path":"src/layouts/index.tsx"},t.createElement(E,{"data-inspector-line":"36","data-inspector-column":"8","data-inspector-relative-path":"src/layouts/index.tsx",href:b}),t.createElement(d,{"data-inspector-line":"40","data-inspector-column":"8","data-inspector-relative-path":"src/layouts/index.tsx"},t.createElement("span",{"data-inspector-line":"41","data-inspector-column":"10","data-inspector-relative-path":"src/layouts/index.tsx"},"React Dev Inspector")),t.createElement(m,{"data-inspector-line":"44","data-inspector-column":"8","data-inspector-relative-path":"src/layouts/index.tsx"},t.createElement("p",{"data-inspector-line":"45","data-inspector-column":"10","data-inspector-relative-path":"src/layouts/index.tsx"},"Quick jump to local IDE source code directly from browser React component by just a simple click!"),t.createElement("p",{"data-inspector-line":"46","data-inspector-column":"10","data-inspector-relative-path":"src/layouts/index.tsx"},t.createElement("small",{"data-inspector-line":"46","data-inspector-column":"13","data-inspector-relative-path":"src/layouts/index.tsx"},"( for this prod online demo page, jump to GitHub file )"))),t.createElement(f,{"data-inspector-line":"49","data-inspector-column":"8","data-inspector-relative-path":"src/layouts/index.tsx"},t.createElement(x,{"data-inspector-line":"50","data-inspector-column":"10","data-inspector-relative-path":"src/layouts/index.tsx"},"Ctrl ⌃"),"+",t.createElement(x,{"data-inspector-line":"52","data-inspector-column":"10","data-inspector-relative-path":"src/layouts/index.tsx"},"Shift ⇧"),"+",t.createElement(x,{"data-inspector-line":"54","data-inspector-column":"10","data-inspector-relative-path":"src/layouts/index.tsx"},"Command ⌘"),"+",t.createElement(x,{"data-inspector-line":"56","data-inspector-column":"10","data-inspector-relative-path":"src/layouts/index.tsx"},"C"))));c.render(t.createElement(k,{"data-inspector-line":"6","data-inspector-column":"2","data-inspector-relative-path":"src/main.tsx"}),document.getElementById("root"));
