const fs = require('node:fs');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, '..', 'www', 'index.html'), 'utf8');
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const checks = [
  ['IndexedDB writes wait for transaction completion', html.includes('tx.oncomplete = () => { try { db.close(); } catch (e) {} resolve(true); }')],
  ['Automatic first-run factory reset is absent', !html.includes('ALRIDA_CLEAN_DB_V1_DONE')],
  ['Gemini response auto-execution bridge is absent', !html.includes('actObj.isAction = true')],
  ['Factory reset bridge is absent', !html.includes('if (reply.includes("factory_reset")')],
  ['AI reset request is blocked safely', html.includes('تم إيقاف ضبط المصنع من المساعد مؤقتاً')],
  ['Render throttling preserves latest render request', html.includes('latestRenderArgs = args;')],
  ['Android application id is present in Gradle', fs.readFileSync(path.join(__dirname, '..', 'android', 'app', 'build.gradle'), 'utf8').includes('com.alrida.system')]
];
let failed = false;
for (const [label, ok] of checks) {
  process.stdout.write((ok ? 'PASS ' : 'FAIL ') + label + '\n');
  if (!ok) failed = true;
}
if (failed) process.exit(1);
process.stdout.write('All safety checks passed. Package: ' + pkg.name + '\n');
