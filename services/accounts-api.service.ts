import axios from 'axios';
import { privateRoutes } from '../routes/api-routes';
import { RelativeFormDTO } from '../types/dto/account.dto';
import { BaseAPiResponse } from '../types/response';
import { RelativeEntity, UserEntity } from '../types/response/user.response';
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

  addNewRelative(formValues: RelativeFormDTO) {
    const formData = new FormData();

    for (let key in formValues) {
      //@ts-ignore
      formData.append(key, `${formValues[key]}`);
    }

    return this.axiosInstance.post<BaseAPiResponse<RelativeEntity>>(
      privateRoutes.Relative,
      formData
    );
  }
}

export const accountAPiService = new AccountAPiService();
