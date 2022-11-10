class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat`);
    }
}

let dog = new Animal("动物");
dog.eat();
// 动物 eat