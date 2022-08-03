import axios from 'axios'
import { URL_API } from '../configs/constants'

export default axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})
