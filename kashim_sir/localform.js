function data(){
    let name = document.querySelector('#name').value;
    let password = document.querySelector('#psw').value;
    let city = document.querySelector('#city').value;

    let ob = {
        naam : name,
        pass : password,
        sahar : city
    }

    localStorage.setItem("userdata",JSON.stringify(ob));


}

// let ob = {
//     name :"himanshu",
//     age : 52,
//     contect : 12344
// }

// console.log(ob)

// for( v in ob){

//     console.log(ob[v])
// }