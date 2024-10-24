async function run(){
    let data = await fetch('http://localhost:4000/random');
    let response = await data.json();
    
    let selecttable = document.querySelector('#tabledata');
    selecttable.innerHTML = response.map((items)=>`
    <tr>
    <td>${items.description}</td>
    </tr>
    `).join(" ")
}
run();