import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="/style.css" />
        <script src="https://testing-plugin.onrender.com/api/comments-script"></script>
      </Head>
      <body>
        <main>{children}</main>
        <div id="comments-container"></div>
        {/* <script src="https://testing-plugin.onrender.com/api/comments-script"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
           
              function fetchComments() {
                  fetch(\`https://testing-plugin.onrender.com/api/comments\`)
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
            `,
          }}
        ></script> */}
      </body>
    </html>
  );
}
