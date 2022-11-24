function createStore(reducer: any) {
  let state: any;
  let listeners: any[] = [];
  function getState() {
    return state;
  }
  function dispatch(action: any) {
    state = reducer(state.action);
    listeners.forEach((l) => l());
  }
  function subscribe(listener: any) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((item) => (item = listener));
      console.log(listeners);
    };
  }
  dispatch({});
  return {
    getState,
    dispatch,
    subscribe,
  };
}

let store = createStore((state: any, action: any) => state);
