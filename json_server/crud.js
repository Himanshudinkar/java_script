// -------------------------------------------getdata------------------------------------------------
async function getdata(){
let createdata = await fetch("http://localhost:3000/data");
let convertdata = await createdata.json();
let finaldata = convertdata.map( (e)=> `

    <tr>
        <td>${e.id}</td>
        <td><img src="${e.photo}" alt="" width="100px" height="70px"></td>
        <td>${e.brand}</td>
        <td>${e.price}</td>
        <td><button onclick="deletedata('${e.id}');">DELETE</button></td>
    </tr>
`).join("")

let output = document.querySelector('#output');
output.innerHTML = finaldata;
}
// -------------------------------------------getdata------------------------------------------------










// -------------------------------------------deletedata---------------------------------------------
function deletedata(id){
    fetch(`http://localhost:3000/data/${id}`,{
        method:'DELETE'
    })
    .then(window.alert("Delete Data Successfully..!!!"))
}
// -------------------------------------------deletedata----------------------------------------------











// -------------------------------------------adddata-------------------------------------------
function adddata(){
    let addphoto = document.querySelector('#photo').value;
    let addbrand = document.querySelector('#brand').value;
    let addprice = document.querySelector('#price').value;

    let data = {
        photo:addphoto,
        brand:addbrand,
        price:addprice
    }

    fetch("http://localhost:3000/data", {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(window.alert("Insert Successfully"))
}
// -------------------------------------------adddata------------------------------------------------









// -------------------------------------------sowdata-------------------------------------------
// ye crud operation nahi he add data button per click karne per form show hon jayega
function sowdata(){
    let sow = document.querySelector('#updata');
    sow.style.display = "block"
}
// -------------------------------------------sowdata--------------------------------------------