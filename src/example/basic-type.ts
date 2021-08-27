let bool :boolean
bool = true

let num1 : number = 123

let str : string = 'asd'

str = `字母串${num1}`
console.log(str)

//枚举
enum test3{
    xxbb ,
    sc,
    hl
}

console.log(test3)
//数组
let list:number[]
list=[1,2,3,4,5]
//元组
let list2:[string,number]
list2 = ["test",12]


function getLength(something: string | number) :number {
    if ((<string>something).length) {
        return (<string>something).length
    }else{
        return something.toString().length;
    }
}
function getLength2(something: string | number) :number {
    if ((something as string).length) {
        return (something as string).length
    }else{
        return something.toString().length;
    }
}
console.log(getLength(10000))

//  let num111 : number | string = 123
//
// console.log((num111 as string).length)
