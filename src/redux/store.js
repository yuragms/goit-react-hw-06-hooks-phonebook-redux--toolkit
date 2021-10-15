import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducer';
import contactsReducer from './phonebook/phonebook-reducer';



// const rootReducer =combineReducers({
//     counter: counterReducer,
//     contacts: contactsReducer
// });

// const store = createStore(rootReducer, composeWithDevTools());

console.log(getDefaultMiddleware());

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        counter: counterReducer,
        contacts: contactsReducer
    },
    middleware: middleware,
    devTools: process.env.NODE_ENV === 'development', 
});

export default store;