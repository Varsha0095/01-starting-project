import {createStore} from 'redux';


let initialState = {counter: 0, showCounter: true}
const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return {
            counter : state.counter + action.value,
            showCounter : state.showCounter,
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - action.value,
            showCounter : state.showCounter,
        }
    }
    if(action.type === 'incrementByFive'){
        return {
            counter : state.counter +  action.value,
            showCounter : state.showCounter,
        }
    }
    if(action.type === 'decrementByFive'){
        return {
            counter : state.counter - action.value,
            showCounter : state.showCounter,
        }
    }
    if(action.type === 'toggle'){
        return {
            showCounter : !state.showCounter,
            counter : state.counter,
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;
