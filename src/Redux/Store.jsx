import { configureStore } from "@reduxjs/toolkit";
import crateSagaMiddleware from "redux-saga"
import RootReducer from "./Reducers/RootReducer";
import Rootsaga from "./Sagas/RootSaga";

const saga = crateSagaMiddleware()

const Store = configureStore({
    reducer:RootReducer,
    middleware:() =>[saga]
})

export default Store
saga.run(Rootsaga)