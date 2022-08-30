import axios from 'axios';
import { privateRoutes } from '../routes/api-routes';
import { RelativeFormDTO } from '../types/dto/account.dto';
import { BaseAPiResponse } from '../types/response';
import { RelativeEntity, UserEntity } from '../types/response/user.response';
import { formateDateToISO8601 } from '../utils/date-utils';
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
      if (key === 'date_of_birth') {
        formData.append(key, formateDateToISO8601(formValues[key]));
      }
      //@ts-ignore
      formData.append(key, `${formValues[key]}`);
    }

    return this.axiosInstance.post<BaseAPiResponse<RelativeEntity>>(
      privateRoutes.Relative,
      formData
    );
  }

  editRelativeProfile(formValues: RelativeFormDTO, editData: RelativeEntity) {
    const formData = new FormData();

    if (editData?.email != formValues.email) {
      formData.append('email', formValues.email);
    }

    if (editData?.name != formValues.name) {
      formData.append('name', formValues.name);
    }

    if (editData?.gender != formValues.gender) {
      formData.append('gender', formValues.gender);
    }

    if (editData?.date_of_birth != formValues.date_of_birth) {
      formData.append(
        'date_of_birth',
        formateDateToISO8601(formValues.date_of_birth)
      );
    }

    if (editData?.relation != formValues.relation) {
      formData.append('relation', formValues.relation);
    }

    if (editData?.phone.number != formValues.phone_number) {
      formData.append('phone_number', formValues.phone_number);
    }

    return this.axiosInstance.patch(
      privateRoutes.Relative + `/${editData?.id}`,
      formData
    );
  }
}

export const accountAPiService = new AccountAPiService();
