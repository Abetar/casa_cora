// scripts/copy-pdf-worker.cjs
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');

function ensureDir(p){ fs.mkdirSync(p,{ recursive:true }); }
function copy(srcAbs, destName){
  ensureDir(publicDir);
  const destAbs = path.join(publicDir, destName);
  fs.copyFileSync(srcAbs, destAbs);
  console.log('✔ Copiado', destName, 'desde', srcAbs);
}

function findNestedWorker(){
  try {
    const rpDir = path.dirname(require.resolve('react-pdf/package.json'));
    const nested = path.join(rpDir, 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.min.mjs');
    if (fs.existsSync(nested)) return nested;
  } catch {}
  return null;
}

function findTopWorker(){
  return require.resolve('pdfjs-dist/build/pdf.worker.min.mjs');
}

(function main(){
  // Prioriza el worker que usa react-pdf internamente (para que API y Worker coincidan)
  const src = findNestedWorker() || findTopWorker();
  copy(src, 'pdf.worker.min.mjs');
  // Duplicamos a .js (algunos entornos lo sirven mejor)
  copy(src, 'pdf.worker.min.js');
})();
