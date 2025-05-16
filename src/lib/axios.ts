import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://expense-server-0eym.onrender.com',
  // baseURL: 'http://localhost:3333',
})
