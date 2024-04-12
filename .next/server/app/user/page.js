(()=>{var e={};e.id=797,e.ids=[797],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8944:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>m,routeModule:()=>u,tree:()=>l});var r=n(482),s=n(9108),o=n(2563),i=n.n(o),a=n(8300),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);n.d(t,c);let l=["",{children:["user",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,8949)),"/Users/jay/Desktop/Test-GA4/src/app/user/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,1965)),"/Users/jay/Desktop/Test-GA4/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/Users/jay/Desktop/Test-GA4/src/app/user/page.js"],d="/user/page",p={require:n,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/user/page",pathname:"/user",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8897:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,6840,23)),Promise.resolve().then(n.t.bind(n,8771,23)),Promise.resolve().then(n.t.bind(n,3225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,3982,23))},5303:()=>{},1965:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(5036),s=n(342),o=n.n(s);function i({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx(o(),{children:r.jsx("link",{rel:"stylesheet",href:"/style.css"})}),(0,r.jsxs)("body",{children:[r.jsx("main",{children:e}),r.jsx("div",{id:"comments-container"}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
           
              function fetchComments() {
                  fetch(\`http://localhost:5000/api/comments\`)
                      .then(handleResponse)
                      .then(renderComments)
                      .catch(handleError);
              }
              function handleResponse(response) {
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  return response.json();
              }
              function renderComments(comments) {
                  const commentsContainer = document.getElementById('comments-container');
                  commentsContainer.innerHTML = ''; // Clear existing comments

                  comments.forEach(comment => {
                      const commentElement = document.createElement('div');
                      commentElement.innerHTML = \`
                          <p><strong>\${comment.author}</strong>: \${comment.text}</p>
                          <p>Posted on \${comment.date}</p>
                      \`;
                      commentsContainer.appendChild(commentElement);
                  });
              } 
              function handleError(error) {
                  console.error('Error fetching comments:', error);
              }
              fetchComments(); 
            `}})]})]})}},8949:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(5036);function s(){return(0,r.jsxs)(r.Fragment,{children:[r.jsx("h1",{children:"User component "}),r.jsx("div",{id:"comments-container"})]})}n(2);let o=()=>(0,r.jsxs)("div",{children:["page",r.jsx("div",{children:r.jsx(s,{})})]})},3881:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[638,79,337],()=>n(8944));module.exports=r})();