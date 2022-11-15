import axios from 'axios';
import type { UserState } from '@/stores/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
  error?: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/user/login', data);
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

