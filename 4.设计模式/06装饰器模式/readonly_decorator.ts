namespace b {
  // 实现只读装饰器
  function readonly(target: any, key: any) {
    Object.defineProperty(target, key, {
      writable: false,
    });
  }

  // 实现 deprecate 装饰器
  function deprecate(target: any, methodName: any, descriptor: any) {
    let oldVal = descriptor.value; // 先缓存老的函数
    descriptor.value = function (...args: any) {
      let message = `DEPRECATION ${target.constructor.name}#${methodName}: This function will be removed in future versions.`;
      console.warn(message);
      return oldVal(...args);
    };
  }

  class Circle {
    // @readonly
    pi: number = 3.12;
    @deprecate
    getName() {
      console.log("getName");
    }
  }
  let circle = new Circle();
  circle.pi;
  console.log(circle.pi);
  circle.getName();
}
