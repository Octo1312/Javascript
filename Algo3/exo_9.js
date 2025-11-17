function mergeArrays(arr1, arr2) {
    const result = []
    for (const item of arr1) result.push(item)
    for (const item of arr2) result.push(item)
    return result    
}

let arr1 = ["saucisson", "jambon"]
let arr2 = ["fromage", "patate"]
console.log(mergeArrays(arr1, arr2))