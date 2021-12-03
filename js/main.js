//ES5
//varable: var
// const names = 'duyet'
// names = 'phuc'
// var names = 'tuan anh'
// console.log(names)
// ES6
// varable: 
// const caculates = (name, age) => {

//     return console.log(name, age)
// }
// caculates("duyet", 24)

//class
//ES5
// function Student(_name, _age) {
//     this.name = _name;
//     this.age = _age;
// }

//ES6
// class Student {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }
// }
// var student1 = new Student("duyet", 24);
// console.log(student1)
//block scope
// const caculate = (name, age) => {
//     return console.log(name, age)
// }
// caculate("duyet", 24)

//ES6
//Rest/Spread

// class Hoten {
//     name 
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//         this.arr = [1, 2]

//     }
//     set() {
//         this.arr.map((curent) => {
//             filter((curent)=>{
//                 console.log(curent, this.name)
//             })
//         })

//     };
// }
// let student = new Hoten("phuc", 24);

// student.set()
class Hovate {
    _name;
    _age;
    constructor(_name, _age) {

        this._name = _name;
        this._age = _age;
        this.arr = [1, 2];
        this.danhsach = ['nam', 'quang'];
    }
    set = function() {
        this.arr.map((curent) => {
            this.danhsach.filter((curent) => {
                console.log(curent, this._name);
            })
        });
    };
}
let student = new Hovate("phuc", 24);

student.set()