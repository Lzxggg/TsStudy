interface nameInfo {
    firstName:string,
    lastName:string
}
const getName = ({firstName,lastName}:nameInfo) => {
    console.log(`${firstName} ${lastName}`)
}

getName({
    firstName:"xiao",
    lastName:"lei"
})

interface bibao {
    count:number,
    ():void

}
const getNum = () : bibao => {

    const ca = () => { ca.count++ }
    ca.count = 0
    return  ca

}
const countGet : bibao = getNum()
countGet()
console.log(countGet.count)
countGet()
console.log(countGet.count)
countGet()
console.log(countGet.count)

interface a {
    name?:string,
    age:number,
    [prop:string]:any
}
let b:a = {
    name:'xiaoming',
    age:18,
}

let c:a = {
    age:18,
}
let d:a = {
    name:'xiaoming',
    age:18,
    asd:133,
    asdas:5151
}
console.log(b)
console.log(c)
console.log(d)

interface dd {
    (num1:number,num2:number):number
}

let tempdd : dd = (num1,num2) =>{
    return num1 + num2
}
console.log(tempdd(1,3))