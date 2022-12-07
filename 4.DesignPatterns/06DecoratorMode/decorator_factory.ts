namespace a {
  interface Animal {
    swings: number;
    fly: Function;
  }
  function flyable(swings: number) {
    //  如果说装饰器函数是用来修饰类的，那么target就是类的构造函数本身
    return function flyable(target: any) {
      console.log(target);
      target.prototype.swings = swings;
      target.prototype.fly = function () {
        console.log("我能飞");
      };
    };
  }

  @flyable(2)
  class Animal {
    constructor() {}
  }
  let animal: Animal = new Animal();
  console.log(animal.swings);
  animal.fly();
}
