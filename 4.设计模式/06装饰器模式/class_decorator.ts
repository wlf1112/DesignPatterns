namespace a {
  interface Animal {
    swings: number;
    fly: Function;
  }
  //  如果说装饰器函数是用来修饰类的，那么target就是类的构造函数本身
  function flyable(target: any) {
    console.log(target);
    target.prototype.swings = 2;
    target.prototype.fly = function () {
      console.log("我能飞");
    };
  }
  @flyable
  class Animal {
    constructor() {}
  }
  let animal: Animal = new Animal();
  console.log(animal.swings);
  animal.fly();
}
