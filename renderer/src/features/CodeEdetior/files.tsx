

const HTMLCode = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Nested Academy</title> 

      </head>
    <body>
       <h1>Hello World</h1>
    </body>
  </html>
`;


const CSSCode = `
  * {
    margin: 0;
  }
  body{
      background-color:gray;
  }
`;
const JSCode = `
//   javascript code
`;
const files = {
  "index.html": {
    name: "index.html",
    language: "html",
    value: HTMLCode,
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: CSSCode,
  },
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: JSCode,
  },
};

export default files;
