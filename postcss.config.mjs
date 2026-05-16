// #region agent log
fetch('http://127.0.0.1:7250/ingest/a160c67c-9621-4ee3-af49-7cd082e8f890',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'2491c6'},body:JSON.stringify({sessionId:'2491c6',runId:'pre-fix',hypothesisId:'H2_H4',location:'postcss.config.mjs:2',message:'PostCSS config evaluated by runtime',data:{cwd:process.cwd(),execPath:process.execPath,nodeVersion:process.version},timestamp:Date.now()})}).catch(()=>{});
// #endregion

const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
