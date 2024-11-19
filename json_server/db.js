async function fet() {
    let res = await fetch("http://localhost:3000/student");
    let data = await res.json();
    console.log(data)
    let final_data = data.map((e)=>`
        <h1>${e.id}</h1>
        <h1>${e.name}</h1>
        <h1>${e.age}</h1>
        <h1>${e.address}</h1>
    `).join("")

    document.querySelector('#showdata').innerHTML = final_data;
    
}

fet();

