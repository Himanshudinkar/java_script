function opening(){
    setTimeout(show, 5000);

    function show()
    {
        let open = document.querySelector('.logo');
        open.style.display = "none";

        let openwebsite = document.querySelector('#welcome');
        openwebsite.style.display = "block";
    }

   
}

function changfont(){
    let selectfont = document.querySelector('#changfont');
    selectfont.innerHTML = "HIMANSHU DINKAR";
}

function returnfont(){
    let selectfont = document.querySelector('#changfont');
    selectfont.innerHTML = "WELCOME TO generate card";
}

function changephoto1(){
    
    let selectphoto1 = document.querySelector('#photo');
    selectphoto1.src = "https://rukminim2.flixcart.com/image/832/832/xif0q/card/v/z/6/1-happy-birthday-to-you-my-love-card-red-white-greeting-pickkart-original-imahy36atwzhemen.jpeg?q=70&crop=false";
}

function changephoto2(){
    let selectphoto2 = document.querySelector('#photo');
    selectphoto2.src = "https://rukminim2.flixcart.com/image/832/832/xif0q/card/z/e/u/1-happy-birthday-to-you-my-love-card-red-white-greeting-pickkart-original-imahy36ayshfz2jh.jpeg?q=70&crop=false";
}

function changephoto3(){
    let selectphoto3 = document.querySelector('#photo');
    selectphoto3.src = "https://rukminim2.flixcart.com/image/832/832/xif0q/card/c/j/x/1-happy-birthday-to-you-my-love-card-red-white-greeting-pickkart-original-imahy36adrw8gj6g.jpeg?q=70&crop=false"
}

function changephoto4(){
    let selectphoto4 = document.querySelector('#photo');
    selectphoto4.src = "https://rukminim2.flixcart.com/image/832/832/xif0q/card/5/q/c/1-happy-birthday-to-you-my-love-card-red-white-greeting-pickkart-original-imahy36avfysfnjx.jpeg?q=70&crop=false"
}

function enterhover(){
    let selecthover = document.querySelector('#photo');
    selecthover.style.scale = "1.2";
    selecthover.style.transition = "scale 0.5s";
}

function outhover(){
    let selecthover = document.querySelector('#photo');
    selecthover.style.scale = "1";
    selecthover.style.transition = "scale 0.5s";
}

function changeback(){
    let selectback = document.querySelector('.column2');
    selectback.style.backgroundImage = "url(https://img.freepik.com/premium-photo/red-background-with-stars-dots-center_847607-1225.jpg?w=900)";
}

function returnback(){
    let selectback = document.querySelector('.column2');
    selectback.style.backgroundImage = "url(https://img.freepik.com/premium-photo/supersale-banner_1138645-535.jpg?w=996)";
}

function card(){
    let name = document.querySelector('#name').value;
    let mobile = document.querySelector('#mobile').value;
    let designation = document.querySelector('#designation').value;
    let email = document.querySelector('#email').value;
    let address = document.querySelector('#address').value;
    let image = document.querySelector('#image').value;

    let content = ` <section id="card">
      <div class="cardcontent">
        <div class="cardimage">
          <img
            src="${image}"
            alt=""
          />
        </div>

        <div class="cardinfo">
          <h1>${name}</h1>
          <h1>${mobile}</h1>
          <h1>${designation}</h1>
          <h1>${email}</h1>
          <h1>${address}</h1>
          <button onclick="print()">Print</button>
        </div>
      </div>
    </section>`

    document.querySelector('.output').innerHTML = content;
    document.querySelector('#welcome').style.display = "none";

    return false;
}