import { put, takeEvery } from "redux-saga/effects"
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constant"
import { createrecord, deleterecord, getrecord, updaterecord } from "./APICallingService/index"
// import { createMultipartRecord, deleterecord, getrecord, updateMultipartRecord } from "./APICallingService/index"

function* createsaga(action) {                                                  //Worker Saga
    let response = yield createrecord("subcategory", action.payload)
    // let response = yield createMultipartRecord("subcategory", action.payload)
    yield put({ type: CREATE_SUBCATEGORY_RED, payload: response })
}

function* getsaga(action) {
    let response = yield getrecord("subcategory")
    yield put({ type: GET_SUBCATEGORY_RED, payload: response })
}

function* updatesaga(action) {                                                  //Worker Saga
    yield updaterecord("subcategory", action.payload)
    yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("subcategory", action.payload)
    // yield put({ type: UPDATE_SUBCATEGORY_RED, payload: response })
}

function* deletesaga(action) {                                                  //Worker Saga
    yield deleterecord("subcategory", action.payload)
    yield put({ type: DELETE_SUBCATEGORY_RED, payload: action.payload })
}


export default function* Subcategorysaga() {
    yield takeEvery(CREATE_SUBCATEGORY, createsaga)                        //Watchers
    yield takeEvery(GET_SUBCATEGORY, getsaga)                              //Watchers
    yield takeEvery(UPDATE_SUBCATEGORY, updatesaga)                        //Watchers
    yield takeEvery(DELETE_SUBCATEGORY, deletesaga)                        //Watchers
}