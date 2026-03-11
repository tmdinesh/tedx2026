import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync("TEDx '26.pdf");

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error reading PDF:", err);
});
