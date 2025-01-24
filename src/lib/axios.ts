import axios from 'axios'

export const api = axios.create({
  // baseURL: 'https://expenses-back-end.vercel.app',
  baseURL: 'http://localhost:3333',
})
