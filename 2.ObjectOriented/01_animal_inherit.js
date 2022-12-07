class Animal {
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        console.log(`${this.name} 吃 ${food}`);
    }
}

class Dog extends Animal {
    constructor() {
        super('狗');
    }
    speak() {
        console.log('汪汪汪');
    }
}

let dog = new Dog("动物");
dog.eat('骨头');
dog.speak();