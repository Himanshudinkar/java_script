async function studentlist() {
    let datafetch = await fetch("http://localhost:3000/student");
    let dataget = await datafetch.json();
    let finaldata = dataget.map((e) => `
        <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.city}</td>
                <td> <button  onclick="datadelete('${e.id}')">DELETE</button> </td>
            </tr>
    `).join("")

    let datacomplete = document.querySelector('#output');
    datacomplete.innerHTML = finaldata;
}
studentlist();

function datadelete(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:'DELETE'
    })

    .then(re=>alert("delete successfully..!!"))
}