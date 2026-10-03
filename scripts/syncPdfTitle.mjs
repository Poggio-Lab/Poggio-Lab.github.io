import fs from "node:fs";
import path from "node:path";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const pdfPath = path.join(process.cwd(), "public/assets/FoundationsDeepLearning.pdf");
const outputPath = path.join(process.cwd(), "app/data/foundationsPdfTitle.ts");

const data = new Uint8Array(fs.readFileSync(pdfPath));
const pdf = await getDocument({ data, useSystemFonts: true, disableFontFace: true }).promise;

try {
  const page = await pdf.getPage(1);
  const { items } = await page.getTextContent();

  // The cover title uses the largest type apart from the DRAFT stamp.
  // Keep all title lines, ordered as they appear on the page.
  const textItems = items.filter(
    (item) => "str" in item && item.str.trim() && !/^draft\b/i.test(item.str.trim())
  );
  const titleHeight = Math.max(...textItems.map((item) => item.height));
  const title = textItems
    .filter((item) => Math.abs(item.height - titleHeight) < 1)
    .sort((a, b) => b.transform[5] - a.transform[5] || a.transform[4] - b.transform[4])
    .map((item) => item.str.trim())
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (!Number.isFinite(titleHeight) || title.length < 10) {
    throw new Error(`Could not read the cover title from ${pdfPath}`);
  }

  const source = `// Generated from the PDF cover by scripts/syncPdfTitle.mjs.\nexport const foundationsPdfTitle = ${JSON.stringify(title)};\n`;
  if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, "utf8") !== source) {
    fs.writeFileSync(outputPath, source);
  }
  console.log(`Foundations PDF title: ${title}`);
} finally {
  await pdf.destroy();
}
