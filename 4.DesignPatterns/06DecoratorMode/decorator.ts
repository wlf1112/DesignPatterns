abstract class Shape {
  abstract draw(): void;
}
class Circle extends Shape {
  draw() {
    console.log("绘制圆形");
  }
}
class Rectangle extends Shape {
  draw() {
    console.log("绘制矩形");
  }
}
// 装饰器模式
abstract class ColorfulShape extends Shape {
  public constructor(public shape: Shape) {
    super();
  }
  abstract draw(): void;
}
class RedColorfulShape extends ColorfulShape {
  draw() {
    this.shape.draw();
    console.log("把边框涂成红色");
  }
}
class GreenColorfulShape extends ColorfulShape {
  draw() {
    this.shape.draw();
    console.log("把边框涂成绿色");
  }
}

let redColorfulShape = new RedColorfulShape(new Circle());
redColorfulShape.draw();
