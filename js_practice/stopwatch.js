function stop(){
    count = 0;
    setInterval(run,1000)

    function run(){

    count++;
    let selecth1 = document.querySelector('#output');
    selecth1.innerHTML = `: ${count} `;

    }


    setInterval(show,2000)
    function show(){

    count++;
    let selecth1 = document.querySelector('#output2');
    selecth1.innerHTML = `: ${count} `;

    }
}
