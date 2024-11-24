
// function SumHighLowNum(num){
//   let param = [...new Set(num)]
//   let max = Math.max(...param)
//   let min = Math.min(...param)
//   return param.filter((ele) => ele !== max && ele !== min).reduce((acc , current) => acc + current)
// }
// console.log(SumHighLowNum([1, 1, 2, 3 , 3, 4,7, 5, 6, 6, 7, 8, 9, 4,9])) // 35

// function numSqrt(num){
//   return num.map((ele) => Number.isInteger(Math.sqrt(ele)) ? Math.sqrt(ele) : ele * 2);
// }

// console.log(numSqrt([49, 4 , 2 , 5 , 36 , 81]))

// console.log("=".repeat(33))

// function bonusTime(salary,bonus){
//   return bonus === true ? `$${salary * 10}` : `$${salary}`
// }

// console.log(bonusTime(1000,true))
// console.log(bonusTime(700,false))

function removeEveryOther(arr){
return arr.filter((ele) => ele.length % 2 === 0 )
}

console.log(removeEveryOther(["Keep","Going","Keep","Going","Keep","Going","Keep","Going"])) // ["keep","keep","keep"] 
console.log("=".repeat(33))

function sayHi(lang){
  let language = {
    english : "Welcome",
    french: "Bienvenue",
    spanish: "Hola",
    italyian: "bienvenito",
  }
  return language.hasOwnProperty(lang) ? language[lang] : "Welcome"
} 

console.log(sayHi("arab"))


// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// Code One => How To Get Object Length ?
// let objectLength = Object.entries(myFavGames).length;

// let game = Object.entries(myFavGames);

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${game[i][0]}`);
//   console.log(`The Publisher Is ${game[i][1].publisher}`);
//   console.log(`The Price Is ${game[i][1].price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (game[i][1].bestThree) {
//       console.log("- Game Has Releases");
//       console.log(`First => ${game[i][1].bestThree.one}`);
//       console.log(`Second => ${game[i][1].bestThree.two}`);
//       console.log(`Third => ${game[i][1].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }


/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a, b, c, Math.trunc(d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Number.parseInt(d));

// Use Variables b + d To Get This Valus
console.log(Number.parseFloat(Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(+Number.parseFloat(Math.floor(b) / Math.ceil(d)).toFixed(0)); // 67 => Number

// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.pow(10,5)); // 100000
console.log(10 ** 5); // 100000
console.log(99999 + 1); // 100000
console.log(Number.parseInt(100000.55)); // 100000
console.log(Number.parseInt(Math.ceil(99999.5))); // 100000
console.log(10000 * 10); // 100000
console.log(Math.floor(100000.5)); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.trunc(100000.5)); // 100000
console.log(5e4 * 2); // 100000