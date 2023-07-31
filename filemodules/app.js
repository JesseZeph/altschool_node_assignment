const fs = require('fs');
const path = require('path');

const folderpath = path.join(__dirname, 'lib')
fs.readdir(folderpath, (err, filemodules) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Folder opened:');
    console.log(filemodules);
})

const createfolder = path.join(__dirname, 'lib', 'Students');

fs.mkdir(createfolder, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Folder created successfully');
})

const createfile = path.join(__dirname, 'lib', 'Students', 'user.js');
fs.writeFile(createfile, 'Hello world', (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('File created successfully');
})

const renameFolder = path.join(__dirname, 'lib', 'Names',);
fs.rename(createfolder, renameFolder, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Directory renamed successfully');
})

// const createfile = path.join(__dirname, 'lib', 'Names', 'user.js');


myData = {
    name: 'Jesse Josiah',
    age: 31,
    nationality: 'Nigerian',
    phone_number: '08147993947',
    email: 'jessezephyr@gmail.com',
    occupation: 'Mobile Developer(Flutter)',
    hobbies: ['Coding', 'Reading', 'Gaming', 'Music', 'Drawing'],

}

const bioData = JSON.stringify(myData, null, 2);


fs.writeFileSync(createfile, bioData, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('File created successfully');
})

const renameFile = path.join(__dirname, 'lib', 'Names', 'jesse_josiah.js');
fs.rename(createfile, renameFile, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('File renamed successfully');
})

const readFile = path.join(__dirname, 'lib', 'Names', 'jesse_josiah.js');
fs.readFile(readFile, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);
})

const deleteFile = path.join(__dirname, 'lib', 'Names', 'jesse_josiah.js'); 
fs.rm(deleteFile, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('File deleted successfully');
} )        

const deleteFolder = path.join(__dirname, 'lib', 'Names');
fs.rmdir(deleteFolder, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Folder deleted successfully');
})