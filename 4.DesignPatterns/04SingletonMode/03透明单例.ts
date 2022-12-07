let Window = (function () {
    let window: Window;
    let Window = function (this: Window) {
        if (window) {
            return window;
        } else {
            return (window = this);
        }
    }
    Window.prototype.hello = function () {
        console.log('hello');
    }
    return Window;
})();

let w1 = new (Window as any)();
let w2 = new (Window as any)();
w1.hello();
console.log(w1 === w2);
