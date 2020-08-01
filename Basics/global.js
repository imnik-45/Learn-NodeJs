setTimeout(()=>{
    console.log("in the set TimeOut");
    clearInterval(int);
},3000);

const int = setInterval(()=> {
    console.log("in the set intervals");
},1000);
