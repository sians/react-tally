import produce from 'immer'

import * as actionTypes from './actionTypes'

const initialState = {
    user: null,
    loginLoading: false,
    loginError: null,
}

const reducer = (state = initialState, action = {}) => {
    return produce(state, draft => {
        switch (action.type) {
            // LOGIN
            case actionTypes.LOGIN:
                draft.loginLoading = true;
                break;
            case actionTypes.LOGIN_SUCCESS:
                draft.loginLoading = false;
                draft.loginError = null;
                draft.user = action.result.data.user;
                break;
            case actionTypes.LOGIN_FAIL:
                draft.loginLoading = false;
                draft.loginError = { status: action.error.status };
                break;

            // ME
            case actionTypes.ME:
                draft.meLoading = true
                break
            case actionTypes.ME_SUCCESS:
                draft.meLoading = false
                draft.user = action.result.data.user
                break
            case actionTypes.ME_FAIL:
                draft.meLoading = false
                draft.meError = { status: action.error.status }
                break

            // UPDATE ME
            case actionTypes.UPDATE_ME:
                draft.updateMeLoading = true
                break
            case actionTypes.UPDATE_ME_SUCCESS:
                draft.updateMeLoading = false
                draft.user = action.result.data.user
                break
            case actionTypes.UPDATE_ME_FAIL:
                draft.updateMeLoading = false
                draft.updateMeError = { status: action.error.status }
                break

            default:
                break;
        }
    })
}

export default reducer;