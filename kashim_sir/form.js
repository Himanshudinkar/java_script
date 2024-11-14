function local(){
let name =  document.querySelector('#name').value;
let age =  document.querySelector('#age').value;
let city =  document.querySelector('#city').value;


localStorage.setItem("name" ,name)
localStorage.setItem("age" ,age)
localStorage.setItem("city" ,city)


}

