async function fet(){
let res = await fetch("https://jsonplaceholder.typicode.com/comments");
let a = await res.json();
let ans = a.map((e)=>`
    <h1>${e.id} </h1>
    <h2>${e.name} </h2>
    <h3>${e.email} </h3>
`).join("")

document.querySelector('#demo').innerHTML = ans
}

fet();