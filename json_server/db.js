async function fet() {
    let res = await fetch("http://localhost:3000/student");
    let data = await res.json();
    console.log(data)
    let final_data = data.map((e)=>`
        <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.address}</td>
            <td> <button onclick="mydelete('${e.id}')">Delete</button> </td>
            <td> <button onclick="myedit('${e.id}')">Update</button> </td>
        </tr>
    `).join("")

    document.querySelector('#showdata').innerHTML = final_data;
    
}

fet();


//delete data


function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:'DELETE'
    })
    .then(re=>alert("delete successfully..!!"))
}

// insert data / add data / create data


function insertdata(){
    let data = {
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        address : document.querySelector('#address').value
    }
    fetch("http://localhost:3000/student",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(re=>alert("inserted..!!!"))
}


//update data

async function myedit(id) {
    let myupdate = await fetch(`http://localhost:3000/student`)
    let redata = await myupdate.json();

    let senddata = `

        <input type="text" value="${redata.id}" readonly> <br>
        <input type="text" value="${redata.name}" id="name1"> <br>
        <input type="text" value="${redata.age}" id="age1"> <br>
        <input type="text" value="${redata.address}" id="address1"> <br>
        <button>Submit</button>
    `

    document.querySelector('#edittable').innerHTML = senddata;
    
}
