import authSaga from './saga/authSaga'
import { takeLatest, put, call, all} from 'redux-saga/effects'
import * as api from '../api'

function* fetchDataLogin(action) {
    try {
        const { data } = yield call(api.fetchLogin, action.type)
        // yield put(userSlice.actions.request(data))
        
    } catch (error) {
        console.log('error', error)
    }
}

export default function* rootSaga() {
    yield all([
        authSaga(),
    ])
}