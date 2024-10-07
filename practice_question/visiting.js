//Write a JavaScript program, take user input and generate a visiting card
function card(){
    let name = document.querySelector('#name').value;
    let mobile = document.querySelector('#mobile').value;
    let email = document.querySelector('#email').value;
    let address = document.querySelector('#address').value;
    let photo = document.querySelector('#photo').value;

    let selectcard = `

      <div class="card" style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 30px; height: 300px; width: 400px; border: 1px solid black;">

        <img src="${photo}" alt="" width="200px" height="200px">

        <div class="carddetails" style="display: flex; flex-direction: column; justify-content: center; align-items: start;">
            <h1>${name}</h1>
            <h1>${mobile}</h1>
            <h1>${email}</h1>
            <h1>${address}</h1>
        </div>

      </div> `

    let showcard = document.querySelector('#visitingcard');
    showcard.innerHTML = selectcard;

    let hidecontent = document.querySelector('#visitingcontent')
    hidecontent.style.display = "none";

    return false;
}