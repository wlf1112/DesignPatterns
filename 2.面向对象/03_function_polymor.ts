/**
 * 模拟方法的重载
 */
function print() {
  let args = Array.from(arguments);
  if (args.length === 1) {
    console.log(args[0]);
  } else if (args.length === 2) {
    console.log(args[0] + args[1]);
  }
}

console.log(print("hello"));
console.log(print(1, 2));
