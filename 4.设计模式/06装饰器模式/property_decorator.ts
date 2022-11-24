namespace property_namespace {
  // 实例属性的时候，target是类的原型对象，key是属性的名字
  function instancePropertyDecorator(target: any, key: string) {
    console.log("instancePropertyDecorator", target, key);
  }
  // 类的静态属性的时候，target就是类的构造函数，key就是属性名
  function classPropertyDecorator(target: any, key: string) {
    console.log("classPropertyDecorator", target, key);
  }
  // 实例的方法的时候，target是类的原型，key是方法名，descriptor是属性描述符
  function instanceMethodDecorator(
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("instanceMethodDecorator", target, key, descriptor);
  }
    // 类的方法的时候，target是类的构造函数，key是方法名，descriptor是属性描述符
  function classMethodDecorator(
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("classMethodDecorator", target, key, descriptor);
  }
  class Person {
    @instancePropertyDecorator
    instanceProperty: string | undefined; //实例属性
    @classPropertyDecorator
    static classProperty: string; //类的静态属性
    @instanceMethodDecorator
    instanceMethod() {
      //实例的方法
    }
    @classMethodDecorator
    static classMethod() {
      // 类的静态方法
    }
  }
}
