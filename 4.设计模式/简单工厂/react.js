let h1 = <h1 className="title">hello</h1>;
// 以上是jsx语法糖，会经过babel转义成：
let h1 = React.createElement('h1', { className: 'title' }, 'hello');
// h1就是虚拟DOM
class VNode {
    constructor(tagName, attrs, children) {
        this.tagName = tagName;
        this.attrs = attrs;
        this.children = children;
    }
}
function createElement(tagName, attrs, children) {
    return new VNode(tagName, attrs, children);
}