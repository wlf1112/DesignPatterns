class Plant {
  constructor(name) {
    this.name = name;
  }
  grow() {
    console.log("我正在生长");
  }
}
class Apple extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}
class Orange extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}
new Apple();
new Orange();

// 直接new的缺点
// 1.耦合（需要知道new 的类在哪里） 2.依赖具体的实现
