import axios from 'axios';
import { publicRoutes } from '../routes/api-routes';
import type { PaginatedBaseAPiResponse } from '../types/response';
import type {
  ConsultationTypeEntity,
  SpecialityEntity,
} from '../types/response/consultation.response';
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

  get specialityList() {
    return this.axiosInstance.get<PaginatedBaseAPiResponse<SpecialityEntity[]>>(
      publicRoutes.Speciality,
      {
        params: { per_page: 50 },
      }
    );
  }
}

export const consultationAPiService = new ConsultationAPiService();
