let test = Symbol("kuaile")
let test2 = Symbol("kuaile")
console.log(test == test2)

let run = Symbol("name")
let obj1 = {
    [run]:"18",
    name:"xiaoming",
    height:"180"
}

console.log(Reflect.ownKeys(obj1))
for(let key in obj1){
    console.log(key)
}
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.getOwnPropertyNames(obj1))