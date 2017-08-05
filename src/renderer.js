const fs = require("fs");
const loader = require('monaco-loader');

let editor = null;

loader().then(monaco => {
  editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
    value: `\
      function x() {
        console.log("Hello world!");
      }`.replace(/^      /gm, ''),
  })
})

document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault();
}

document.body.ondrop = (ev) => {
  const a = fs.readFileSync(ev.dataTransfer.files[0].path);
  editor.setValue(a.toString());
  ev.preventDefault();
}
