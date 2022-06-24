const PDFDocument = require('pdfkit');
const fs = require('fs');

const SVGtoPDF = require('../dist/index').SVGtoPDF;

const Tests1 = require('./tests1').Tests1;

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('example.pdf'));
doc.text("This is a test");
doc.text("This is also a test");
doc.text("This one is a text");

// SVGtoPDF(doc, Tests1[42].svg, 36, 36);

for (const test of Tests1) {
  doc.addPage();
  SVGtoPDF(doc, test.svg, 36, 36);
}

doc.end();