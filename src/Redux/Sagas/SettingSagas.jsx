import { put, takeEvery } from "redux-saga/effects"
import { CREATE_SETTING, CREATE_SETTING_RED, DELETE_SETTING, DELETE_SETTING_RED, GET_SETTING, GET_SETTING_RED, UPDATE_SETTING, UPDATE_SETTING_RED } from "../Constant"
import { createrecord, deleterecord, getrecord, updaterecord } from "./APICallingService/index"
// import { createMultipartRecord, deleterecord, getrecord, updateMultipartRecord } from "./APICallingService/index"

function* createsaga(action) {                                                  //Worker Saga
    let response = yield createrecord("Setting", action.payload)
    // let response = yield createMultipartRecord("Setting", action.payload)
    yield put({ type: CREATE_SETTING_RED, payload: response })
}

function* getsaga(action) {
    let response = yield getrecord("Setting")
    yield put({ type: GET_SETTING_RED, payload: response })
}

function* updatesaga(action) {                                                  //Worker Saga
    yield updaterecord("Setting", action.payload)
    yield put({ type: UPDATE_SETTING_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("Setting", action.payload)
    // yield put({ type: UPDATE_SETTING_RED, payload: response })
}

function* deletesaga(action) {                                                  //Worker Saga
    yield deleterecord("Setting", action.payload)
    yield put({ type: DELETE_SETTING_RED, payload: action.payload })
}


export default function* Settingsaga() {
    yield takeEvery(CREATE_SETTING, createsaga)                        //Watchers
    yield takeEvery(GET_SETTING, getsaga)                              //Watchers
    yield takeEvery(UPDATE_SETTING, updatesaga)                        //Watchers
    yield takeEvery(DELETE_SETTING, deletesaga)                        //Watchers
}