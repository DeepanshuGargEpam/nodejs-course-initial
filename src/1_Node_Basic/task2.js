// const paths = require('./constants'); 
// const csv=require('csvtojson')
// csv()
// .fromFile(paths.BASE_CSV_PATH)
// .then((jsonObj)=>{
//     console.log(jsonObj);
// })
const csv = require('csvtojson');
const fs = require('fs');
const paths = require('./constants'); 
const util = require('../../utils/errors.js');

const writeText = fs.createWriteStream(paths.BASE_CSV_TEXT1);
fs.createReadStream(paths.BASE_CSV_PATH)
        .pipe(csv())
        .on('data', (data) =>  writeText.write(data))
        .on('error', util);

        console.log("Program Ended");