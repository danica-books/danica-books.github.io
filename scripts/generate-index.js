const fs = require("fs");
const path = require("path");

const booksDir = path.join(__dirname, "..", "data", "books");
const indexFile = path.join(booksDir, "index.json");

const files = fs.readdirSync(booksDir)
  .filter(f => f.endsWith(".json") && f !== "index.json");

const indexData = {
  title: "INDEX_IGNORE",
  books: files
};

fs.writeFileSync(indexFile, JSON.stringify(indexData, null, 2));

console.log("index.json frissítve:", files.length, "könyvvel.");
