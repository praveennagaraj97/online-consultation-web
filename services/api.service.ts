import axios from 'axios';
import { requestOptions } from '../utils/fetchOptions';

export class BaseAPiService {
  get axiosInstance() {
    return axios.create({ ...requestOptions() });
  }
}
