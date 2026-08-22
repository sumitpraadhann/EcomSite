import { put, takeEvery } from "redux-saga/effects"
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constant"
import { createrecord, deleterecord, getrecord, updaterecord } from "./APICallingService/index"
// import { createMultipartRecord, deleterecord, getrecord, updateMultipartRecord } from "./APICallingService/index"

function* createsaga(action) {                                                  //Worker Saga
    let response = yield createrecord("Brand", action.payload)
    // let response = yield createMultipartRecord("Brand", action.payload)
    yield put({ type: CREATE_BRAND_RED, payload: response })
}

function* getsaga(action) {
    let response = yield getrecord("Brand")
    yield put({ type: GET_BRAND_RED, payload: response })
}

function* updatesaga(action) {                                                  //Worker Saga
    yield updaterecord("Brand", action.payload)
    yield put({ type: UPDATE_BRAND_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("Brand", action.payload)
    // yield put({ type: UPDATE_BRAND_RED, payload: response })
}

function* deletesaga(action) {                                                  //Worker Saga
    yield deleterecord("Brand", action.payload)
    yield put({ type: DELETE_BRAND_RED, payload: action.payload })
}


export default function* Brandsaga() {
    yield takeEvery(CREATE_BRAND, createsaga)                        //Watchers
    yield takeEvery(GET_BRAND, getsaga)                              //Watchers
    yield takeEvery(UPDATE_BRAND, updatesaga)                        //Watchers
    yield takeEvery(DELETE_BRAND, deletesaga)                        //Watchers
}