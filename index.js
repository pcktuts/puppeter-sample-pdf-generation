const puppeteer = require('puppeteer');

(async () => {
  console.time('Time Taken');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1600,
    height: 1200,
    deviceScaleFactor:1
  });
  await page.goto('http://localhost:3000', { // change this to your url
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'sample-file.pdf'});

  await browser.close();
  console.timeEnd('Time Taken');
})();

