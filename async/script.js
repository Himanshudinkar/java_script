function del(arg){
    let res = window.confirm("do you really want to delete information")
   
    if(res){
    fetch(`http://localhost:4000/product/${arg}`,{
        method:"DELETE"
    });
    }else{
        alert("invalid click")
    }
}


let uid = null;
async function updateform(id){
    let data = await fetch(`http://localhost:4000/product/${id}`);
    let res = await data.json();
    uid = id
    let selectform = document.querySelector('#upform');
    selectform.style.display = "block";

    document.querySelector('#image').value = res.image;
    document.querySelector('#description').value = res.description;
    document.querySelector('#price').value = res.price;
}

function finalupdate(){
    let image =  document.querySelector('#image').value;
    let description = document.querySelector('#description').value;
    let price =  document.querySelector('#price').value;
    
    let obj = {
        "image":image,
        "description":description,
        "price" :price
    }

    console.log(obj)
    fetch(`http://localhost:4000/product/${uid}`,{
        method:"PUT",
        body:JSON.stringify(obj)
    })



}

function showaddform(){
    let selectadform = document.querySelector('#addform');
    selectadform.style.display = "block";
}

function add(){
    let image =  document.querySelector('#images').value;
    let description = document.querySelector('#descriptions').value;
    let price =  document.querySelector('#prices').value;
    
    let obj = {
        "image":image,
        "description":description,
        "price" :price
    }

    console.log(obj)
    fetch(`http://localhost:4000/product/`,{
        method:"POST",
        body:JSON.stringify(obj)
    })



}


async function run(){
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();
    
    let selecttable = document.querySelector('#tabledata');
    selecttable.innerHTML = response.map((items)=>`
    <tr>
    <td>${items.id}</td>
    <td><img width="100px" src="${items.image}"></td>
    <td>${items.description}</td>
    <td>${items.price}</td>
    <td><button onclick="del('${items.id}')">Delete</button></td>
    <td><button onclick="updateform('${items.id}')">update</button></td>
    </tr>
    `).join(" ")
}
