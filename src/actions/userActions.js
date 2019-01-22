/*
 * action types
 */

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';

/*
 * action creators
 */

export function fetchUsers(data) {
    return { type: FETCH_USERS, payload: data };
}
