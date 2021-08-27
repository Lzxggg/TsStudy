import construct = Reflect.construct;

// class Animal{
//     name?:string
//     age?:number
//     constructor(name?:string,age?:number) {
//         this.name = name
//         this.age = age
//     }
// }
//
// var monkey = new Animal('james',36)
// var wy = new Animal()
// console.log(wy.name,wy.age)
// console.log(monkey.age,monkey.name)
//
//
// class Parent {
//     public name:string
//     constructor(name:string) {
//         this.name = name
//     }
//
// }
//
// class Child extends Parent {
//     public age: number
//
//     constructor(name: string, age: number) {
//         super(name);
//         this.age = age
//     }
// }
//
// let test0000 = new Child('bobo',18)
// console.log(test0000.name,test0000.age)

// class Parent{
//     name:string
//     constructor(name:string) {
//         this.name = name
//     }
// }
//
// let temp = new Parent('papa')
// console.log(temp.name) //papa

// class Parent{
//     public readonly name:string
//     constructor(name:string) {
//         this.name = name
//     }
// }
//
// let temp = new Parent('papa')
// console.log(temp.name) //papa
// temp.name = 10  //Cannot assign to 'name' because it is a read-only property.

// class Parent{
//     protected name:string
//     constructor(name:string) {
//         this.name = name
//     }
// }
//
// let temp = new Parent('papa')
// console.log(Parent.name) //Parent
//  console.log(temp.name) // TS2445: Property 'name' is protected and only accessible within class 'Parent' and its subclasses.

class Parent{
    private name:string
    constructor(name:string) {
        this.name = name
    }
    changeName(newname:string){
        this.name = newname
    }
    getName(){
        console.log(this.name)
    }

}

let temp = new Parent('papa')
// console.log(temp.name) // Property 'name' is private and only accessible within class 'Parent'.
console.log(Parent.name)
temp.changeName('wuhu')
temp.getName() //wuhu

//抽象类只能被继承

// console.log(Parent.name)