// Readstream n writeStream

const fs = require('fs');

const readStream = fs.createReadStream('../docs/demo2.txt',{encoding: 'utf8'});

const writeStream=fs.createWriteStream('../docs/demo3.txt');
/*
readStream.on('data',(chunk)=>{
    console.log("\n--new chunk--\n");
    console.log(chunk.toString());
    writeStream.write('\n--------New Chunks------------\n');
    writeStream.write(chunk);

});
*/

//piping - simpler method of writing a readStream to WriteStream

readStream.pipe(writeStream);