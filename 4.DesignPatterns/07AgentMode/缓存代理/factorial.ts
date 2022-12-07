const factorial = function (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

const proxy = function (fn) {
    const cache = {}; // 缓存对象
    return function (num) {
        if (num in cache) {
            return cache[num];  // 使用缓存代理
        }
        return cache[num] = fn.call(this, num);
    }
}
const proxyFactorial = proxy(factorial);
console.log(proxyFactorial(5));
