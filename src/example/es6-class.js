// function Point(x,y) {
//     this.x = x
//     this.y = y
// }
//
// Point.prototype.getPosition = function () {
//     return `(${this.x},${this.y})`
//     // return '(' + this.x + ',' +this.y + ')'
// }


// class Point {
//     constructor(x,y) {
//         this.x = x;
//         this.y = y
//     }
//
//     getPosition(){
//         return `(${this.x},${this.y})`
//     }
// }
//
// var p1 = new Point(2,3)
//
// console.log(p1.getPosition())


// class temp123 {
//     _name:'xiaoming',
//     set function(){
//
//     },
//     get function(){
//
//     }
// }

// function test11(x,y) {
//     this.x = x
//     this.y = y
// }
// test11.prototype.getx = function () {
//     console.log(this.x)
// }
//
// var test111111 = new test11(2,3)
// test111111.getx()

// class test11 {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
//     getx() {
//         console.log(this.x)
//     }
// }
//
// var test1111 = new test11(4,5)
// test1111.getx()
//
// class iiis {
//     constructor(x,y) {
//         this.x = x;
//         this.y = y;
//     }
//     gety ()  {
//         console.log(this.x)
//     }
// }
// var iii = new iiis(111,1)
// iii.gety()

// var info = {
//     _age:19,
//     set age(newValue){
//         if (newValue > 20){
//             console.log('wuhu')
//         }
//         else{
//             console.log('yya')
//         }
//     },
//     get age(){
//         console.log('i see you')
//         return this._age
//     }
//
// }
// console.log(info.age)
// info.age = 200

// class info1 {
//
//     constructor(age) {
//         this._age = age
//     }
//     set age(newage){
//         console.log('newage' +'is' +newage)
//
//     }
//     get age(){
//         console.log('why u bully me')
//     }
//
// }
// var iiiiii = new info1(20)
// iiiiii.age
// iiiiii.age = 200

// function Food() {
//     this.type = 'food'
// }
// Food.prototype.getType = function () {
//     return this.type
// }
//
// function Vegetables(name) {
//     this.name = name;
// }
// Vegetables.prototype = new Food()
// const tomato = new Vegetables('tomato')
// console.log(tomato.getType())

class Things {
    constructor(type) {
        this.type = type;
    }
    getName() {
        return this.type
    }
}

class Tomato extends  Things {
    constructor(type,color) {

        super(type);
        this.color = color
    }
    getColor(){
        return this.color
    }
}

let temp = new Tomato('food','red')

console.log(temp.type)
console.log(temp.color)
console.log(temp.getName())