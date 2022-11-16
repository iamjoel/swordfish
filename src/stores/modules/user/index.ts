import { defineStore } from 'pinia';
import {
  login as userLogin,
  getUserInfo,
} from '@/api/user';
import type { LoginData } from '@/api/user';

import { setToken, clearToken } from '@/utils/auth';
import type { UserState } from './types';

const useUserStore = defineStore('user', {
  state: (): UserState => {
      const user = window.localStorage.getItem('user')
      if(!user) {
        return {
          name: '',
          role: '',
        }
      }
      return JSON.parse(user)
  },

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    // Set user's information
    setInfo(user: Partial<UserState>) {
      window.localStorage.setItem('user', JSON.stringify(user));
      this.$patch(user);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Login
    async login(loginForm: LoginData) {
      try {
        const { data: res } = await userLogin(loginForm);
        if(res.error) {
            throw res.error
        }
        const { data } = res
        setToken(data.token);
        this.setInfo(data as UserState)
        window.localStorage.setItem('user', JSON.stringify(data));
      } catch (err) {
        clearToken();
        throw err;
      }
    },

    logout() {
        clearToken();
    }
  },
});

export default useUserStore;
