 function data(){
            setTimeout(run, 2000)
           function run()
            {
                let selectwelcome = document.querySelector('#welcome')
                selectwelcome.style.display = "none";

                let selectcontent = document.querySelector('#content');
                selectcontent.style.display = "block";
            }
        }