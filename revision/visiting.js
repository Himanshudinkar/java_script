function genratecard(){
    let name = document.querySelector('#name').value;
    let mobile = document.querySelector('#mobile').value;
    let city = document.querySelector('#city').value;
    let photo = document.querySelector('#photo').value;

    let output = document.querySelector('#website');
    output.innerHTML = ` <div>
            <img src="${photo}" alt="not load" height="300px" width="200px">
        </div> 
        <div>
            <h3>${name}</h3>
            <h3>${mobile}</h3>
            <h3>${city}</h3>
            <button onclick= "print()">print</button>
        </div>`

        return false;
}