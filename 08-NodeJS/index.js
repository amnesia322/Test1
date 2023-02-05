let fs = require('fs');
fs.readFile('file.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const toWrite = fileContent.split('').reverse().join('')

    fs.writeFile('new-file.txt', toWrite, function(error){
        if(error) throw error;
        console.log('Данные успешно записаны');
    });
});

const os = require('os')
console.log(`Home directory: ${os.homedir()}`);
console.log(`Operating System: ${os.type()} ${os.release()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPUs: ${os.cpus().length}`);


