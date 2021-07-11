// CRUD Operation Using FS Module in NodeJs

const fs = require('fs');

// make directory
// fs.mkdirSync('aman');

// writing in text file
// fs.writeFileSync('aman/bio.txt','My Name is Aman Gupta');

//appending in the file
// fs.appendFileSync('aman/bio.txt',' Im in 2nd year IT ')

//reading the text file and printing it in the console
// const data = fs.readFileSync('aman/bio.txt','utf8');
// console.log(data);

//Renaming of text file
// fs.renameSync('aman/bio.txt','aman/myBio.txt')

//Deleting text file
// fs.unlinkSync('aman/myBio.txt')

//Remove Folder
// fs.rmdirSync('aman')