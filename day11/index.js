setTimeout(run,3000);

function run(){
    console.log("called")
}

setTimeout(()=>{
    console.log("second called")
},5000)