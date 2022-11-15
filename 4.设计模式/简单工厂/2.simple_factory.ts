class Plant {
  constructor(public name: string) {
    this.name = name;
  }
  grow() {
    console.log("我正在生长");
  }
}
class Apple extends Plant {
  constructor(public name: string, public flavour: string) {
    super(name);
    this.flavour = flavour;
  }
}
class Orange extends Plant {
  constructor(public name: string, public flavour: string) {
    super(name);
    this.flavour = flavour;
  }
}

class Factory {
  static create(type) {
    switch (type) {
      case "apple":
        return new Apple("苹果", "甜");
      case "orange":
        return new Orange("橘子", "酸");
      default:
        throw new Error("你要的东西没有 ");
    }
  }
}
let apple = Factory.create("apple");
console.log(apple.flavour);
let orange = Factory.create("orange");
console.log(orange.flavour);
