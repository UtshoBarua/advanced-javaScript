const nums = [3, 5, 7, 8, 9]
const output = []

// for(i=0; i<nums.length; i++){
//     let element = nums[i]
//     let result = element*element
//     output.push(result)
// }
// console.log(output)

const result= nums.map(function (element, index, array){
    return index*2

   
})
console.log(result)
