export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style.css" />
        <script src="https://testing-plugin.onrender.com/api/comments-script" />
      </head>
      <body>
        <main>{children}</main>

        {/* <script src="https://testing-plugin.onrender.com/api/comments-script"></scrip> */}
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
        ></scrip> */}
      </body>
    </html>
  );
}
