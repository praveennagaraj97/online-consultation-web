import { privateRoutes } from '../routes/api-routes';
import { RelativeFormDTO } from '../types/dto/account.dto';
import { BaseAPiResponse } from '../types/response';
import { RelativeEntity, UserEntity } from '../types/response/user.response';
import { BaseAPiService } from './api.service';

class AccountAPiService extends BaseAPiService {
  constructor() {
    super();
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
