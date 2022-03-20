import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleWare from 'redux-saga'
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleWare()
const middleWare     = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare]

const store = configureStore({
    reducer: rootReducer,
    middleware: middleWare
})

sagaMiddleWare.run(rootSaga)

export default store