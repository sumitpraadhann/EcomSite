import { put, takeEvery } from "redux-saga/effects"
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constant"
import { createrecord,updaterecord,getrecord,deleterecord } from "./Apicallingservice"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./APICallingService/index"


// import { createMultirecor, deleteRecord, getrecord, updatx   eMultipartRecord,  } from "./Apicallingservice"

function* createsaga(action){
                                                                                //  Work Saga
    let response = yield createrecord("maincategory",action.payload)     
    // let response = yield createMultirecord("maincategory",action.payload)     
    yield put({type: CREATE_MAINCATEGORY_RED,payload:response})
}


function*  getsaga(action){
                                                                                //  Work Saga
    let response = yield getrecord("maincategory")     
    // let response = yield createMultirecord("maincategory",action.payload)     
    yield put({type: GET_MAINCATEGORY_RED,payload:response})
}

function* updatesaga(action){
                                                                                //  Work Saga
    yield updaterecord("maincategory",action.payload)     
    yield put({type: UPDATE_MAINCATEGORY_RED,payload:action.payload})     
    // let response = yield updateMultipartRecord("maincategory",action.payload)     
    // yield put({type: UPDATE_MAINCATEGORY_RED,payload:response})
}

function* deletesaga(action){
                                                                                //  Work Saga
     yield deleterecord("maincategory",action.payload)     
    yield put({type: DELETE_MAINCATEGORY_RED,payload:action.payload})
}

export default function* Maincategorysaga(){
    yield takeEvery(CREATE_MAINCATEGORY,createsaga)
    yield takeEvery(GET_MAINCATEGORY,getsaga)                           //watchers
    yield takeEvery(UPDATE_MAINCATEGORY,updatesaga)
    yield takeEvery(DELETE_MAINCATEGORY,deletesaga)
}