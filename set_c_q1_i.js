let arrList=[1,2,3,4,5,6,7,8]

let fun=(arr)=>{
    const odd=arr.filter(item=>item%2!==0)
    const even=arr.filter(item=>item%2===0)
    return [odd,even];
}

console.log(fun(arrList));