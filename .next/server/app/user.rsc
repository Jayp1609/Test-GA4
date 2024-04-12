2:I[5613,[],""]
3:I[1778,[],""]
4:T540,
           
              function fetchComments() {
                  fetch(`http://localhost:5000/api/comments`)
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
                      commentElement.innerHTML = `
                          <p><strong>${comment.author}</strong>: ${comment.text}</p>
                          <p>Posted on ${comment.date}</p>
                      `;
                      commentsContainer.appendChild(commentElement);
                  });
              } 
              function handleError(error) {
                  console.error('Error fetching comments:', error);
              }
              fetchComments(); 
            0:["iiZLNOHLJJXoll3VJ8YEr",[[["",{"children":["user",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",{"children":["user",{"children":["__PAGE__",{},["$L1",["$","div",null,{"children":["page",["$","div",null,{"children":[["$","h1",null,{"children":"User component "}],["$","div",null,{"id":"comments-container"}]]}]]}],null]]},["$","$L2",null,{"parallelRouterKey":"children","segmentPath":["children","user","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},[null,["$","html",null,{"lang":"en","children":[null,["$","body",null,{"children":[["$","main",null,{"children":["$","$L2",null,{"parallelRouterKey":"children","segmentPath":["children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"styles":null}]}],["$","div",null,{"id":"comments-container"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$4"}}]]}]]}],null]],[null,"$L5"]]]]
5:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","link","2",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}]]
1:null
