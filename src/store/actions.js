// Mutations
import * as types from './mutations'

// User actions
export const login = ({ commit }, email, password) => {
  // Commit the change
  commit(types.LOGIN, 1)

  // Success!
  // return true
  return false
}

//
export const logout = ({ commit }) => {
  // LOGOUT
  commit(types.LOGOUT)
}
