let store = "";

function cal(arg) {
store = store + arg
let selecttd = document.querySelector('#show');
selecttd.innerHTML = store;
}

function calculate(){

let selecttd = document.querySelector('#show');
selecttd.innerHTML = eval(store)
store = eval(store) 
store.toString();

}

function del(){

    store = store.slice(0, -1);

    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = store;
}

function delTo(){
    store = " ";
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = store;

}

function square(){
    store = store * store;
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = store;

}

function squareroot(){
    store = Math.sqrt(store);
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = store;

}