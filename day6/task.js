function zoomin(){
    let a = document.querySelector("#img1");
    a.style.scale = "1.2";
    a.style.transition = "scale 0.5s";
    console.log(a);
}

function initial(){
    let a = document.querySelector("#img1");
    a.style.scale = "1";
    a.style.transition = "scale 0.5s";
    console.log(a);
}
