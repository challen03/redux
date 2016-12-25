import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';


const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'increase': 
            return state + 1;
        case 'decrease':
            return state - 1;
        default: 
            return state;
    }
}


//自己封装的createStore
// const createStore = (reducer) => {
//     let state;
//     let list = [];
//    const getState = () => {
//         return state;
//     }
//     const subscribe = (func) => {
//         list.push(func);
//         return (fn) => {
//             list = list.filter((cb) => {
//                 return cb!== fn;
//             })
//         }
//     }
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         list.forEach((func) => {
//             func();
//         })
//     }
//     return {
//         getState,
//         subscribe,
//         dispatch
//     }
// }

let store = createStore(reducer);

store.dispatch({
    type: 'init'
})


const render = () => {
    document.body.innerHTML = store.getState();
}
render()    
store.subscribe(render);//每次dispatch都会触发render


// const render = () => {
//     document.body.innerHTML = store.getState();
// }

// render();
// store.subscribe(render);

// document.onclick = function() 
//     store.dispatch({type: 'increase'});
// }

// class App extends Component{
//     render(){
//         return ( 
//             <div>
//                 <h1>{store.getState()}</h1>
//                 <button onClick={() => {store.dispatch({type:'increase'})}}>+</button>
//                 <button onClick={() => {store.dispatch({type:'decrease'})}}>-</button>
//             </div>
//         )
//     }
// }
// const render = () => {
//     ReactDom.render(
//         <App></App>,
//         document.getElementById('root')
//     )
// }
// render();
// store.subscribe(render);