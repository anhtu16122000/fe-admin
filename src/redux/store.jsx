import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleWare from 'redux-saga'
import rootSaga from "./rootSaga"
import {
    persistStore,
    persistReducer,
    FLUSH,
    PERSIST,
    PURGE,
    PAUSE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { REHYDRATE } from "redux-persist/es/constants";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleWare = createSagaMiddleWare()
const middleWare     = [
    ...getDefaultMiddleware({ 
        thunk: false,
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }   
    }), 
    sagaMiddleWare
]

const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWare
})

export const persistor = persistStore(store)

sagaMiddleWare.run(rootSaga)

export default store