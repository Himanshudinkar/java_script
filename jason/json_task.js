async function fet(){
let res = await fetch("https://jsonplaceholder.typicode.com/photos");
let a = await res.json();
let ans = a.map((e)=>`
    <h4>${e.id} </h4>
    <h4>${e.title} </h4>
    <img src="${e.thumbnailUrl}">
`).join("")

document.querySelector('#output').innerHTML = ans
}

fet();