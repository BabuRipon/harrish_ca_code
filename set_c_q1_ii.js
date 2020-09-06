let arrList=[1,2,3,4,5]

let fun=(arr,cb)=>{
    return cb(arr)
}

let cubeList=fun(arrList,(arr)=>arr.map(item=>item**3));

console.log(cubeList);