import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import http from '../services/http'
import { TypeActions } from './enum/type-actions'
import { TypeMutations } from './enum/type-mutations'

export interface State {
  user: {
    id?: string;
    name?: string;
    email?: string;
  };
  rooms: {
    id?: string;
    name?: string;
  }[];
  token: string;
}

export default createStore<State>({
  state: {
    user: {},
    rooms: [],
    token: ''
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    [TypeMutations.SET_USER] (state, { user }) {
      state.user = user
    },
    [TypeMutations.SET_TOKEN] (state, token) {
      state.token = token
    }
  },
  actions: {
    [TypeActions.LOGIN] ({ commit }, user) {
      http.post('auth/login', user).then((response) => {
        commit(TypeMutations.SET_USER, {
          user: response.data.user
        })
        commit(TypeMutations.SET_TOKEN, response.data.token)
      })
    },
    [TypeActions.SIGNUP] ({ commit }, user) {
      http.post('/user', user).then((response) => {
        return response.data
      })
    }
  },
  modules: {}
})

export function useStore (): Store<State> {
  return vuexUseStore()
}
