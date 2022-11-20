interface Window {
  hello: any;
}
function Window() {}
Window.prototype.hello = function () {
  console.log("hello");
};
let createInstance = (function () {
  let instance: Window;
  return function () {
    if (!instance) {
      instance = new (Window as any)();
    }
    return instance;
  };
})();

let window1 = createInstance();
let window2 = createInstance();
window1.hello();
console.log(window1 === window2);
