const fs = require('fs');
const csv = require('csv-parser');

const csvFilePath = './data/www-redirects.csv';
const jsonFilePath = './data/redirects.json';

const json = {};

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    const fromPath = row.fromPath;
    const toPath = row.toPath;
    const isPermanent = row.isPermanent === 'TRUE';
    json[fromPath] = { toPath, isPermanent };
  })
  .on('end', () => {
    const jsonString = JSON.stringify(json, null, 2);
    fs.writeFile(jsonFilePath, jsonString, (err) => {
      if (err) throw err;
      console.log(`JSON data written to file ${jsonFilePath}`);
    });
  });