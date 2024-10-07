let count = 0;
function slider(){
    setInterval(run, 3000);

    function run(){
        if(count === 0)
        {
            let selectarticle = document.querySelector('#sliddiv')
            selectarticle.style.marginLeft = "0px"
            selectarticle.style.transition = "margin-left .5s";
            count++;
        }
        else if(count === 1)
        {
            let selectarticle = document.querySelector('#sliddiv')
            selectarticle.style.marginLeft = "-100vw"
            selectarticle.style.transition = "margin-left .5s";
            count++;
        }
        else if(count === 2)
        {
            let selectarticle = document.querySelector('#sliddiv')
            selectarticle.style.marginLeft = "-200vw"
            selectarticle.style.transition = "margin-left .5s";

            count++;
        }
        else if(count === 3)
        {
            let selectarticle = document.querySelector('#sliddiv')
            selectarticle.style.marginLeft = "-100vw"
            selectarticle.style.transition = "margin-left .5s";

            count++;
        }
        else if(count === 4)
        {
            let selectarticle = document.querySelector('#sliddiv')
            selectarticle.style.marginLeft = "0px"
            selectarticle.style.transition = "margin-left .5s";

            count == 0;
        }

    }
}