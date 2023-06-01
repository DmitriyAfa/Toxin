const path = require('path');
const fs = require('fs');

const PAGES_DIR_UI = path.resolve(__dirname, 'src/pages/ui-kit');

const PAGES_UI = fs
  .readdirSync(PAGES_DIR_UI)
  .map((item) => item.replace(/\.[^/.]+$/, ''));

const entryPoints = {};
PAGES_UI.forEach(page => (entryPoints[page] = `${PAGES_DIR_UI}/${page}/index.js`));

for (let i in entryPoints) {
  entryPoints[i] = entryPoints[i].split('\\').join('/')
}

console.log(entryPoints)
