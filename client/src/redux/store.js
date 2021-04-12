import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// store.subscribe(() => {
//   const state = store.getState();
//   window.localStorage.setItem('app_state', JSON.stringify(state));
// });

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};

const loadstate = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadstate()
const store = createStore(rootReducer, oldState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
    saveState(store.getState());
});


export default store
