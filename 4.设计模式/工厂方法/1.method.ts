class Plant {
  constructor(public name: string) {
    this.name = name;
  }
}
class Factory {
  create() {}
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
class AppleFactory extends Factory {
  static create() {
    return new Apple("苹果", "甜");
  }
}
class OrangeFactory extends Factory {
  static create() {
    return new Orange("橘子", "酸");
  }
}
let settings = {
  apple: AppleFactory,
  orange: OrangeFactory,
};
let apple = settings["apple"].create();
console.log(apple);
let orange = settings["orange"].create();
console.log(orange);
