function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}

var xiaoming = {
  name: '小明',
  birth: 1990,
  age: getAge
};
console.log(xiaoming.age());
console.log(getAge.apply(xiaoming, []));
console.log(getAge.call(xiaoming));

var fn = xiaoming.age;
console.log(fn())