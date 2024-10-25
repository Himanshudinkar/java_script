//delete function


//main function
async function run(){
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();

    let selecttable = document.querySelector('#tabledata');
    selecttable.innerHTML = response.map((items) => `
 
        <tr>
        <td>${items.id}</td>
        <td>${items.email}</td>
        <td>${items.username}</td>
        <td><i class="fa-solid fa-eye" style="color: rgb(16, 144, 194);"></i></td>
        <td><i onclick="del(${items.id})" class="fa-solid fa-delete-left" style="color: rgb(255, 0, 0);"></td>
        <td><i class="fa-solid fa-pen-to-square" style="color: rgb(255, 94, 0);"></i></td>
        </tr>
    `).join(" ");
}