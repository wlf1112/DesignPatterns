class Animal2 {
  name: string;
  constructor(name) {
    this.name = name;
  }
  eat(food) {}
}

class Dog1 extends Animal2 {
  eat(food) {
    console.log(`狗狗吃${food}`);
  }
}

class Person1 extends Animal2 {
  eat(food) {
    console.log(`人吃${food}`);
  }
}

let d = new Dog1("狗");
d.eat("肉");
let p = new Person1("人");
p.eat("烧饼");
