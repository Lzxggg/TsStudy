let numGet = () =>{
    console.log('test successful!')
}
numGet()

let add :(x:number,y:number) => number
add = (arg1:number,arg2:number):number => {
    return arg1 + arg2
}

let getLength3 = (num: string|number) : number => {
    if((num as string).length){
        return (num as string).length
    }
    else {
        return num.toString().length
    }
}



let temp22 = (num1:number,num2:number):number => {
    return num1
}

let temp222 = (num1:number,num2:number):number => num1+num2

