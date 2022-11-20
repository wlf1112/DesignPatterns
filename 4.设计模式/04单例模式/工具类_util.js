let utils = {};
utils.def = function (namespace,fn) {
    let namespaces = namespace.split('.');
    let fnName = namespaces.pop();
    let current = utils;
    for (let i = 0; i < namespaces.length; i++) {
        let namespace = namespaces[i];
        if (!current[namespace]) {
            current[namespace] = {};
        }
        current = current[namespace];
    }
    current[fnName] = fn;
}
utils.def('dom.attr', function (key) {
    console.log('dom.attr');
});
utils.def('dom.html', function (key) {
    console.log('dom.html');
});
utils.def('string.trim', function (key) {
    console.log('string.trim');
});

// 调用
utils.dom.attr('str');
utils.string.trim(' aaa ');


