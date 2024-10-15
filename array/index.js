let arr = [34,67,9,8,6,98,"hello"];
let arr2 = ["this is array class"];

let arr3 = [45,6,3,6,function(){console.log("function call")}];

let arr4 = [null,undefined,4,567,6>7];


console.log(arr);
console.log(arr[9]);

console.log(arr[9][4]);

console.log(arr2[0][5]);

arr3[5]();

console.log(arr4[4]);

for(let i = 0; i<arr.length;i++)
{
    console.log(i);
    console.log(arr[i]);
}

for(let i in arr)
{
    console.log(i);
}

for(let i of arr)
{
    console.log(i);
}