import axios from 'axios';
import { privateRoutes } from '../routes/api-routes';
import { BaseAPiResponse } from '../types/response';
import { UserEntity } from '../types/response/user.response';
import { requestOptions } from '../utils/fetchOptions';

class AccountAPiService {
  private get axiosInstance() {
    return axios.create({ ...requestOptions() });
  }

  get userDetail() {
    return this.axiosInstance.get<BaseAPiResponse<UserEntity>>(
      privateRoutes.User
    );
  }
}

export const accountAPiService = new AccountAPiService();
