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

let m = JSON.parse(localStorage.getItem("userdata"));
console.log(m)


let myname = document.querySelector('#myname')
let mypass = document.querySelector('#mypass')
let mycity = document.querySelector('#mycity')

myname.innerHTML = m.naam
mypass.innerHTML = m.pass
mycity.innerHTML = m.sahar