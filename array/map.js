// let arr = [465,43,78,7,2,43,9];

// let newarr = arr.map((items)=>{return items*2});

// console.log(newarr);

// let ansarr = arr.map((items)=>{return items+10});

// console.log(ansarr);

function run(){
    let arr = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',

        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s',

        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',

        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8QfWf1dVIl8fJcdaygt30RU8lpkHLYmlEA&s',
    ];

    let output = document.querySelector('#answer');

    output.innerHTML = arr.map((imgurl)=>` <img style="width:400px;height:400px" src="${imgurl}" alt ="not found" >`).join(" ");

}