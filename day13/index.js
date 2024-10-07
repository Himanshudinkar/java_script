setInterval(run,1000);
let count = 0;
function run(){
    count++;
    let selecth1 = document.querySelector('#output');
    selecth1.innerHTML = `your time start "${count}" now`;
}
setInterval(run,2000);
// let chalu = true;
// function run(){
//     let selecth1 = document.querySelector('#output');
   

//     if(chalu === true)
//     {
//         selecth1.innerHTML = "fsgggdg";
//     }

//     else {
//         selecth1.innerHTML = "";
//     }

//     chalu = !chalu;
// }