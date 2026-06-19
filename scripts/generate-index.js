const fs = require("fs");
const path = require("path");

// Könyvek mappája
const booksDir = path.join(__dirname, "..", "data", "books");

// Az index új helye (a CMS nem látja)
const indexFile = path.join(__dirname, "..", "data", "_index.json");

// Beolvassuk a könyv JSON fájlokat, kivéve az indexet
const files = fs.readdirSync(booksDir)
  .filter(f => f.endsWith(".json"));

// Kiírjuk az indexet
fs.writeFileSync(indexFile, JSON.stringify(files, null, 2));

console.log("_index.json frissítve:", files.length, "könyvvel.");
