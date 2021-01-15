

var xiaoming = {
  name: "xiaoming",
  birth: 1990,
  age: function(){
    var y = new Date().getFullYear();
    return y - this.birth;
  }
}

console.log(xiaoming.age);
console.log(xiaoming.age());


xiaoming.fn = xiaoming.age;
console.log(xiaoming.fn());

function Person(name){
  this.name = name;
}

global






// 'use strict';

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var that = this; // 在方法内部一开始就捕获this
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth; // 用that而不是this
//         }
//         return getAgeFromBirth();
//     }
// };

// xiaoming.age(); // 25