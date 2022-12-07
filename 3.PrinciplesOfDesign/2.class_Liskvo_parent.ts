class Person {
  constructor() {}
  buy() {}
}

class Man extends Person {
  constructor(gender) {
    super(gender);
  }
  buy() {
    console.log(`买ipad`);
  }
}

class Women extends Person {
  constructor(gender, name) {
    super();
    this.gender = gender;
    this.name = name;
  }
  buy() {
    console.log(`买包`);
  }
}

let p = new Person();
let man = new Man("男");
let woman = new Women("女");
p.buy();
man.buy();
woman.buy();
// 买ipad
// 买包

let xiaoming = {
  habbit(p: Person) {
    console.log(`他的偶像是${p.name}`);
  },
};
xiaoming.habbit(new Women("女", "刘亦菲"));
