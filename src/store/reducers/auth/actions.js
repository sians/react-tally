import * as actionTypes from './actionTypes'

export const login = (email, password) => ({
    types: [
      actionTypes.LOGIN,
      actionTypes.LOGIN_SUCCESS,
      actionTypes.LOGIN_FAIL,
    ],
    promise: (client) => client.post('sign_in', { data: { user: { email, password } } })
  })

export const me = () => ({
    types: [
        actionTypes.ME,
        actionTypes.ME_SUCCESS,
        actionTypes.ME_FAIL,
    ],
    promise: (client) => client.get('users/me')
})

export const updateMe = (data) => ({
    types: [
      actionTypes.UPDATE_ME,
      actionTypes.UPDATE_ME_SUCCESS,
      actionTypes.UPDATE_ME_FAIL,
    ],
    promise: (client) => client.patch('users', { data: { user: data } })
})