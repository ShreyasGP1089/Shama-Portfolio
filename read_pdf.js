import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

const dataBuffer = fs.readFileSync('Shama & Veronie Portfolio.pdf');

async function run() {
    const parser = new PDFParse({ data: dataBuffer });
    try {
        const result = await parser.getText();
        // console.log(result.text);
        fs.writeFileSync('extracted_info.txt', result.text);
        console.log('Text extracted to extracted_info.txt');
    } catch (error) {
        console.error('Error parsing PDF:', error);
    } finally {
        await parser.destroy();
    }
}

run();