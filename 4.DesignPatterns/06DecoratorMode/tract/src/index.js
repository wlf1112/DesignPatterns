import React from 'react';
import ReactDOM from 'react-dom';
function before(beforeFn) {
    return function (target, methodName, descriptor) {
        let oldMethod = descriptor.value;
        descriptor.value = function () {
            beforeFn.apply(this, arguments);
            return oldMethod.apply(this, arguments);
        }
    }
}
function after(afterFn) {
    return function (target, methodName, descriptor) {
        let oldMethod = descriptor.value;
        descriptor.value = function () {
            afterFn.apply(this, arguments);
            return oldMethod.apply(this, arguments);
        }
    }
}
class App extends React.Component {
    @before(() => console.log('before'))
    onClickBefore() {
        console.log('beforeClick');
    }
    @after(() => console.log('after'))
    onClickAfter() {
        console.log('afterClick');
    }
    @after(() => fetch('/api/report'))
    onClickAjax() {
        console.log('ajaxClick');
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickBefore}>beforeClick</button>
                <button onClick={this.onClickAfter}>afterClick</button>
                <button onClick={this.onClickAjax}>ajaxClick</button>
            </div >
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));