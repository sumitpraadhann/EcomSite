import { put, takeEvery } from "redux-saga/effects"
import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../Constant"
import { createrecord, deleterecord, getrecord, updaterecord } from "./APICallingService/index"
// import { createMultipartRecord, deleterecord, getrecord, updateMultipartRecord } from "./APICallingService/index"

function* createsaga(action) {                                                  //Worker Saga
    let response = yield createrecord("Feature", action.payload)
    // let response = yield createMultipartRecord("Feature", action.payload)
    yield put({ type: CREATE_FEATURE_RED, payload: response })
}

function* getsaga(action) {
    let response = yield getrecord("Feature")
    yield put({ type: GET_FEATURE_RED, payload: response })
}

function* updatesaga(action) {                                                  //Worker Saga
    yield updaterecord("Feature", action.payload)
    yield put({ type: UPDATE_FEATURE_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("Feature", action.payload)
    // yield put({ type: UPDATE_FEATURE_RED, payload: response })
}

function* deletesaga(action) {                                                  //Worker Saga
    yield deleterecord("Feature", action.payload)
    yield put({ type: DELETE_FEATURE_RED, payload: action.payload })
}


export default function* Featuresaga() {
    yield takeEvery(CREATE_FEATURE, createsaga)                        //Watchers
    yield takeEvery(GET_FEATURE, getsaga)                              //Watchers
    yield takeEvery(UPDATE_FEATURE, updatesaga)                        //Watchers
    yield takeEvery(DELETE_FEATURE, deletesaga)                        //Watchers
}