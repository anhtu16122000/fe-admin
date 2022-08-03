import { takeLatest, take, fork, call, put } from 'redux-saga/effects'
import jwtEncode from 'jwt-decode'
import userSlide from '../reducers/userSlice'
import * as api from '../../api/index'

function* handleLogin({ payload }) {

    try {
        const { data } = yield call(api.fetchLogin, payload)
        // login thành công
        localStorage.setItem('access_token', JSON.stringify(data.accessToken))
        const dataDecoded =  jwtEncode(data.accessToken)
        yield put(userSlide.actions.success(dataDecoded))
    } catch (err) {
        
        console.log('error login', err)
    }
}

function* handleLogout(action) {
    localStorage.removeItem('access_token')
}

function* watchAuthFlow() {
    while (true) {
        const accessToken = localStorage.getItem('access_token')
        if (!accessToken) {
            const action = yield take(userSlide.actions.request().type)
            yield call(handleLogin, action)
        } else {
            yield take(userSlide.actions.logout().type)
            yield call(handleLogout)
        }


    }
}

function* authSaga() {
    yield fork(watchAuthFlow)
}

export default authSaga