import { createSelector } from 'reselect'

export const getUser = createSelector([
    (state) => state.auth.user
],
    (user) => user
)

export const isAuthenticated = createSelector([
    (state) => !!state.auth.user
],
    (authenticated) => authenticated
)

// LOGIN
export const getLoginLoading = createSelector([
    (state) => state.auth.loginLoading
],
    (loading) => loading
)

export const getLoginError = createSelector([
    (state) => state.auth.loginError
],
    (error) => error
)

// ME
export const getMeLoading = createSelector([
    (state) => state.auth.meLoading
],
    (loading) => loading
)

export const getMeError = createSelector([
    (state) => state.auth.meError
],
    (error) => error
)

// UPDATE ME
export const getUpdateMeLoading = createSelector([
    (state) => state.auth.updateMeLoading
],
    (loading) => loading
)

export const getUpdateMeError = createSelector([
    (state) => state.auth.updateMeError
],
    (error) => error
)