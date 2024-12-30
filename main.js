
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

