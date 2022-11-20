class Window {
  private static instance: Window;
  private constructor() {}
  static getInstance() {
    if (!Window.instance) {
      Window.instance = new Window();
    }
    return Window.instance;
  }
}

let window1 = Window.getInstance();
let window2 = Window.getInstance();
console.log(window1 === window2);

