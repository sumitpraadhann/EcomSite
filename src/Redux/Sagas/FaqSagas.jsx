import { put, takeEvery } from "redux-saga/effects"
import { CREATE_FAQ, CREATE_FAQ_RED, DELETE_FAQ, DELETE_FAQ_RED, GET_FAQ, GET_FAQ_RED, UPDATE_FAQ, UPDATE_FAQ_RED } from "../Constant"
import { createrecord, deleterecord, getrecord, updaterecord } from "./APICallingService/index"
// import { createMultipartRecord, deleterecord, getrecord, updateMultipartRecord } from "./APICallingService/index"

function* createsaga(action) {                                                  //Worker Saga
    let response = yield createrecord("Faq", action.payload)
    // let response = yield createMultipartRecord("Faq", action.payload)
    yield put({ type: CREATE_FAQ_RED, payload: response })
}

function* getsaga(action) {   
    let response = yield getrecord("Faq")
    yield put({ type: GET_FAQ_RED, payload: response })
}

function* updatesaga(action) {                                                  //Worker Saga
    yield updaterecord("Faq", action.payload)
    yield put({ type: UPDATE_FAQ_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("Faq", action.payload)
    // yield put({ type: UPDATE_FAQ_RED, payload: response })
}

function* deletesaga(action) {                                                  //Worker Saga
    yield deleterecord("Faq",action.payload)
    yield put({ type: DELETE_FAQ_RED, payload: action.payload })
}


export default function* Faqsaga() {
    yield takeEvery(CREATE_FAQ, createsaga)                        //Watchers
    yield takeEvery(GET_FAQ, getsaga)                              //Watchers
    yield takeEvery(UPDATE_FAQ, updatesaga)                        //Watchers
    yield takeEvery(DELETE_FAQ, deletesaga)                        //Watchers
}