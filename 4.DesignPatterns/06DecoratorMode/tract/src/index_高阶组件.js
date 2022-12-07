import React from 'react';
import ReactDOM from 'react-dom';

function connect(mapStateToProps, mapDispatchProps) {
    return function (Target) {
        return class extends React.Component {
            render() {
                return <Target />
            }
        }
    }
}

const mapStateToProps = state => state;
const mapDispatchProps = dispatch => ({})

@connect(mapStateToProps, mapDispatchProps)
class App extends React.Component {
    render() {
        return <div>App</div>
    }
}
// App是装饰后的新类
ReactDOM.render(<App />, document.getElementById('root'));