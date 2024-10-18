// let arr = [46,32,87.6,32,937,947];
// console.log(arr)

// console.log(arr[3])

// let arr1 = [3.35,"hello",455,"himanshu"];
// console.log(arr1[1])

// console.log(arr1[1][4])

// let arr3 = [353,"hrllo",445,"himanshu",function(){console.log("function call")}]

// arr3[4]();

// // function data()
// // {
// //     console.log("himanshu")
// // }
// // let arr4 = [344,"hello",data(),67];

// // console.log(arr4(2))

// // let arr5 = [arr,arr1,arr3,arr4];


// //method

// let arr6 = [34,"hello",54,98,78];

// arr6.unshift("himanshu");
// console.log(arr6) 

// let arr7 = [34,54,89,4,2,44,98]

// arr7.splice(1,0,"hello","hi")

// console.log(arr7) 


// let number = 1;

// do
// {
//     console.log(number);
//     number++;
// }while(number <= 10);

// let arr = [32,43,87,1,54,98,133,1,34];

// let i = 0;
// while(i < arr.length)
// {
//     console.log(arr[i]);
//     i++;
// }

// let arr = [76,822,56,928,9,12,];

// for(let i of arr)
// {
//     console.log(i);
// }

// let arr = ["hello","apllel","aeplle","order","banana","papaya"];

// arr.sort();

// console.log(arr);

// let arr = [34,65,90,10,2,1,45,248,999,283646];

// let output = arr.reduce( (a,b) => a+b);

// console.log(output)

// let arr1 =  [55,2,98,13,2331,31];
// arrstr.sort();
// console.log(arrstr);

// let arr = [67, 43,826,287,11,43,46];
// arr.sort(function(a,b){return a-b});
// console.log(arr);

// let arr1 = [673,64,928,12,34,];
// arr1.sort(function(a,b){return b-a});
// console.log(arr1);

// let output = arr1.reduce(function(a,b){return a+b});
// console.log(output);

// let answerstr = arr1.toString()
// console.log(answerstr)

// let answerjoin = arr1.join(" ");
// console.log(answerjoin)

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let newarr = arr.map((value) => { return value});

// console.log(newarr);

// let number = "1234567890qwertyuioasdfghjkxcvbn!@#$%^&*()";

// // number.Math.round();



// console.log(Math.random());

// let randomInt = Math.floor(Math.random() * 10000) + 1;
// console.log(randomInt );  // Random integer between 1 and 10


function playGame(userGuess) {
  let winningNumber = Math.floor(Math.random() * 10) + 1;
  console.log(`Winning Number: ${winningNumber}`);
  
  if (userGuess === winningNumber) {
    console.log("Congratulations! You guessed it right.");
  } else {
    console.log("Sorry, try again.");
  }
}

playGame(5);  // Output: "Winning Number: 7. Sorry, try again."
