import userSlice from './reducers/userSlice'
import { takeLatest, put, call} from 'redux-saga/effects'
import * as api from '../api'

function* fetchDataLogin(action) {
    try {
        const { data } = yield call(api.fetchLogin, action.type)
        console.log('data', data)
        // yield put(userSlice.actions.request(data))
    } catch (error) {
        console.log('error', error)
    }
}

export default function* rootSaga() {
    yield takeLatest(userSlice.actions.request().type, fetchDataLogin)
}