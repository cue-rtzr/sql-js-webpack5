import initSqlJs from "sql.js";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "index.js hello";
  return element;
}
document.body.appendChild(component());

// test sql.js
(async () => {
  try {
    const SQL = await initSqlJs({
      // Fetch sql.js wasm file from CDN
      // This way, we don't need to deal with webpack
      locateFile: (file) =>
        // `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.1/dist/${file}`,
        // "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.1/sql-wasm-debug.wasm",
        `static/js/${file}`,
    });
    console.log(new SQL.Database());
  } catch (error) {
    console.log(error);
  }
})();
