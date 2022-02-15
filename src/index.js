import initSqlJs from "sql.js";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "index.js hello";

  return element;
}

document.body.appendChild(component());

(async () => {
  try {
    const SQL = await initSqlJs({
      // Fetch sql.js wasm file from CDN
      // This way, we don't need to deal with webpack
      locateFile: (file) =>
        // `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.1/dist/${file}`,
        "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.1/sql-wasm-debug.wasm",
    });
    console.log(new SQL.Database());
  } catch (error) {
    console.log(error);
  }
})();
