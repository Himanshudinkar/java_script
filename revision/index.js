function timeoutto(){
    setTimeout(run,2000)
    function run(){
        let website = document.querySelector("#website");
        website.style.display = "none";
        let content = document.querySelector("#content");
        content.style.display = "block";

    }
}