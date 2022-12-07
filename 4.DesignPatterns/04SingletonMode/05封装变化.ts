function Window() {}
Window.prototype.hello = function () {
  console.log("hello");
};

function Dialog(title, content) {
  this.title = title;
  this.content = content;
}

let createInstance = function (Constructor: any) {
  let instance: any;
  return function (this: any) {
    if (!instance) {
      Constructor.apply(this, arguments);
      Object.setPrototypeOf(this, Constructor.prototype);
      instance = this;
    }
    return instance;
  };
};

let CreateWindow: any = createInstance(Window);
let window1 = new CreateWindow();
let window2 = new CreateWindow();
window1.hello();
console.log(window1 === window2);

let CreateDialog: any = createInstance(Dialog);
let d1 = new CreateDialog("对话框1", "提示");
let d2 = new CreateDialog("对话框2", "确认");
console.log(d1 === d2);
