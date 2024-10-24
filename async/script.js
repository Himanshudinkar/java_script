async function run(){
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();
    
    let selecttable = document.querySelector('#tabledata');
    selecttable.innerHTML = response.map((items)=>`
    <tr>
    <td><img width="100px" src="${items.image}"></td>
    <td>${items.description}</td>
    <td>${items.price}</td>
    </tr>
    `).join(" ")
}
run();