// let obj ={
//     name : "deepak",
//     age : 24
// }

// console.log(obj)

// let obj1 = {
//     name : "himanshu",
//     age : 16
// }

// console.log(obj1.age)

let objarr = [
    {
        id : 1,
        img : 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
        name : "himanshu",
        course : "python",
        mobile : 345678567,
    },
    {
        id : 2,
        img : 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
        name : "ritu",
        course : "mern",
        mobile : 3456789,
    },
    {
        id : 3,
        img : 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
        name : "himanshu",
        course : "python",
        mobile : 345678567,
    },
    {
        id : 4,
        img : 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
        name : "ritu",
        course : "mern",
        mobile : 3456789,
    },
     {
        id : 4,
        img : 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
        name : "ritu",
        course : "mern",
        mobile : 3456789,
    }

];

let selecttable = document.querySelector('#output');
selecttable.innerHTML = objarr.map((e)=>`
    <tr style="border: 2px solid black;">
    <td>${e.id}</td>
    <td><img width ="100px" src="${e.img}"</td>
    <td>${e.name}</td>
    <td>${e.course}</td>
    <td>${e.mobile}</td>
    </tr>
`).join(" ")

// console.log(objarr[0].course);
// console.log(objarr[1].name);