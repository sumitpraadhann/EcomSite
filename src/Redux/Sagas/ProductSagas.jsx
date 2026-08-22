import { put, takeEvery } from "redux-saga/effects"
import { CREATE_PRODUCT, CREATE_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constant"
import { createrecord, deleterecord, getrecord, updaterecord } from "./APICallingService/index"
// import { createMultipartRecord, deleterecord, getrecord, updateMultipartRecord } from "./APICallingService/index"

function* createsaga(action) {                                                  //Worker Saga
    let response = yield createrecord("product", action.payload)
    // let response = yield createMultipartRecord("product", action.payload)
    yield put({ type: CREATE_PRODUCT_RED, payload: response })
}

function* getsaga(action) {
    let response = yield getrecord("product")
    yield put({ type: GET_PRODUCT_RED, payload: response })
}

function* updatesaga(action) {                                                  //Worker Saga
    yield updaterecord("product", action.payload)
    yield put({ type: UPDATE_PRODUCT_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("product", action.payload)
    // yield put({ type: UPDATE_PRODUCT_RED, payload: response })
}

function* deletesaga(action) {                                                  //Worker Saga
    yield deleterecord("product", action.payload)
    yield put({ type: DELETE_PRODUCT_RED, payload: action.payload })
}


export default function* Productsaga() {
    yield takeEvery(CREATE_PRODUCT, createsaga)                        //Watchers
    yield takeEvery(GET_PRODUCT, getsaga)                              //Watchers
    yield takeEvery(UPDATE_PRODUCT, updatesaga)                        //Watchers
    yield takeEvery(DELETE_PRODUCT, deletesaga)                        //Watchers
}