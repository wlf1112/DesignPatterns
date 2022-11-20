function Window(name) {
    this.name = name;
}
Window.prototype.getName = function () {
    return this.name;
}
// 这是类上的方法，只能通过类来访问，不能通过实例访问
Window.getInstance = (function () {
    let instance;
    return function (name) {
        if (!instance) {
            instance = new Window(name);
        }
        return instance;
    }
})();

let w1 = Window.getInstance();
let w2 = Window.getInstance();
console.log(w1 === w2);
// true


