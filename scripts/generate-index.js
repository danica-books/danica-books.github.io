const fs = require("fs");
const path = require("path");

const booksDir = path.join(__dirname, "..", "data", "books");
const indexFile = path.join(__dirname, "..", "data", "books", "index.json");

const files = fs.readdirSync(booksDir)
  .filter(f => f.endsWith(".json") && f !== "index.json");

fs.writeFileSync(indexFile, JSON.stringify(files, null, 2));

console.log("index.json frissítve:", files.length, "könyvvel.");
