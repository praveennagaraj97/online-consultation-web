import axios from 'axios';
import { publicRoutes } from '../routes/api-routes';
import type { PaginatedBaseAPiResponse } from '../types/response';
import type { ConsultationTypeEntity } from '../types/response/consultation.response';
import { requestOptions } from '../utils/fetchOptions';

class ConsultationAPiService {
  private get axiosInstance() {
    return axios.create({ ...requestOptions() });
  }

  get consulatationTypes() {
    return this.axiosInstance.get<
      PaginatedBaseAPiResponse<ConsultationTypeEntity[]>
    >(publicRoutes.ConsultationTypes);
  }
}

export const consultationAPiService = new ConsultationAPiService();
