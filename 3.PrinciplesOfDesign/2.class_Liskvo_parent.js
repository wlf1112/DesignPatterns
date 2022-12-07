var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.buy = function () { };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(gender) {
        return _super.call(this, gender) || this;
    }
    Man.prototype.buy = function () {
        console.log("\u4E70ipad");
    };
    return Man;
}(Person));
var Women = /** @class */ (function (_super) {
    __extends(Women, _super);
    function Women(gender, name) {
        var _this = _super.call(this) || this;
        _this.gender = gender;
        _this.name = name;
        return _this;
    }
    Women.prototype.buy = function () {
        console.log("\u4E70\u5305");
    };
    return Women;
}(Person));
var p = new Person();
var man = new Man("男");
var woman = new Women("女");
p.buy();
man.buy();
woman.buy();
// 买ipad
// 买包
var xiaoming = {
    habbit: function (p) {
        console.log("\u4ED6\u7684\u5076\u50CF\u662F".concat(p.name));
    }
};
xiaoming.habbit(new Women("女", "刘亦菲"));
