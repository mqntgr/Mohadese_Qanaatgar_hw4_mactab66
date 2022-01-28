let array2 = []
let result = []
function chunkify(array,num){
    let j = array.length-1
    if(array.length < num){
        return array
    }
    else {
        for(let index in array){
            array2.push(array[index])
            if(Number(index)==j || array2.length == num){
                result.push(array2)
                array2 = []
            }
            
        }
    }
    return result
}
console.log(chunkify([2, 3, 4, 5], 2))
// console.log(chunkify([2, 3, 4, 5, 6], 2))
// console.log(chunkify([2, 3, 4, 5, 6, 7], 3))
// console.log(chunkify([2, 3, 4, 5, 6, 7], 1))
// console.log(chunkify([2, 3, 4, 5, 6, 7], 7))