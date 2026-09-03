import fs from 'fs';

async function main() {
  const res = await fetch('https://expensive-someone-870498.framer.app/about-us');
  const html = await res.text();
  fs.writeFileSync('scratch_about.html', html);
  
  const scriptRegex = /https:\/\/framerusercontent\.com\/modules\/[^\"]+\.mjs/g;
  const scripts = html.match(scriptRegex) || [];
  console.log('Scripts count:', scripts.length);

  const imgRegex = /https:\/\/framerusercontent\.com\/images\/[^\"]+/g;
  const imgs = html.match(imgRegex) || [];
  console.log('HTML Images:', imgs);

  for (const s of scripts) {
    const sRes = await fetch(s);
    const sText = await sRes.text();
    const sImgs = sText.match(imgRegex) || [];
    if (sImgs.length > 0) {
      console.log(`Script ${s} images:`, sImgs);
    }
  }
}

main();
