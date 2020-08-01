const fs =  require ('fs');

//reading file in node
console.log("\n-----------reading from files ------------")
fs.readFile('docs/demo.txt',(err,data) => {
    if(err){
        console.log(data);
    }else{
        console.log(data.toString());
    }
});

console.log("this comes after readFile() but printed first");

//writing file in node
console.log("\n-----------writing in files ------------")

fs.writeFile('docs/demo.txt','hello, world',()=>{
    console.log("file is written");
})

console.log("\n-----------Working with directories ------------")
// working with directories
if(!fs.existsSync('assets')){

    fs.mkdir('assets',(err)=>{
        if(err){
            console.log(err);
        }
            console.log("folder created");
        
    })
}else{
    fs.rmdir('assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    })
}


console.log("\n-----------Deleting files ------------")

if(fs.existsSync('docs/delete.txt')){
    fs.unlink('docs/delete.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('files deleted');
    })
}

// Stream - 