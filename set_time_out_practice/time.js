function card(){
    setTimeout(show, 3000)

    function show(){
        let selecttimeout = document.querySelector('#timeout');
        selecttimeout.style.display = "block";
    }
} 

function cross(){
    let selecttimeout = document.querySelector('#timeout');
    selecttimeout.style.display = "none";
}