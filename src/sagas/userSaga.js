import { FETCH_COMPLETE, FETCH_USERS } from '../actions/userActions';
import { put, takeEvery, call } from 'redux-saga/effects';

const api = url => fetch(url).then(response => response.json());

export function* fetchAction(x) {
    const users = yield call(api, 'https://jsonplaceholder.typicode.com/users');
    yield put({ type: FETCH_COMPLETE, payload: users }); //Send the Final Payload to the Reducer
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* fetchSaga() {
    yield takeEvery(FETCH_USERS, fetchAction);
}
