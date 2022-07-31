import { createStore, Store, useStore as vuexUseStore } from "vuex";
import http from "../services/http";
import { TypeActions } from "./enum/type-actions";
import { TypeMutations } from "./enum/type-mutations";

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
    token: "",
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    [TypeMutations.SET_USER](state, { user, token }) {
      state.user = user;
      state.token = token;
    },
  },
  actions: {
    [TypeActions.LOGIN]({ commit }, user) {
      http.post("/login", user).then((response) => {
        commit(TypeMutations.SET_USER, {
          user: response.data.user,
          token: response.data.token,
        });
      });
    },
  },
  modules: {},
});

export function useStore(): Store<State> {
  return vuexUseStore();
}
