function change(){
    let selectimage = document.querySelector("#img1");
    selectimage.style.backgroundImage = "url('https://i.pinimg.com/736x/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.jpg')"
    selectimage.style.transition = "scale 0.5s";
}
function leave(){
    let selectimage = document.querySelector("#img1");
    selectimage.style.backgroundImage = "url('https://www.shutterstock.com/image-vector/doraemon-cute-hand-drawn-illustration-260nw-2352837563.jpg')"
    selectimage.style.borderRedius = "20px";
}

function gender(){
    let gender = window.prompt("Enter gender short form to chake full name of gender");
    // window.prompt("enter m for malle gender");
    // window.prompt("enter f for female gender");
    // window.prompt("enter o for other gender");
    console.log(gender);

    switch(gender)
    {
    case 'M':
    case 'm':
        {
            window.alert("male");
            console.log("male");
            break;
        }
    case 'f':
    case 'F':
        {
            window.alert("femal");
            console.log("fmale");
            break;
        }
    case 'O':
    case 'o':
        {
            window.alert('other');
            console.log("other");
            break;
        }
    default:
        {
            window.alert("invalid option");
            console.log("invalid option");
            break;
        }
    }
}
gender();