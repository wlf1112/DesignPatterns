ReactElement.createFactory = function (type) {
    var factory = ReactElement.createElement.bind(null, type);
    factory.type = type;
    return factory;
}


