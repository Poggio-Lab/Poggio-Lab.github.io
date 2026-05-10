import fs from "node:fs";

// #region agent log
fetch('http://127.0.0.1:7250/ingest/a160c67c-9621-4ee3-af49-7cd082e8f890',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'2491c6'},body:JSON.stringify({sessionId:'2491c6',runId:'pre-fix',hypothesisId:'H2_H3_H5',location:'next.config.ts:3',message:'Next config loaded with runtime environment snapshot',data:{cwd:process.cwd(),execPath:process.execPath,nodeVersion:process.version,pathHasNode:(process.env.PATH||'').includes('node'),hasExecPath:fs.existsSync(process.execPath),projectPathHasParens:process.cwd().includes('(1)')},timestamp:Date.now()})}).catch(()=>{});
// #endregion

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;
