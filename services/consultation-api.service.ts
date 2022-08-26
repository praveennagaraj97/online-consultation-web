import { publicRoutes } from '../routes/api-routes';
import type { PaginatedBaseAPiResponse } from '../types/response';
import type { ConsultationTypeEntity } from '../types/response/consultation.response';
import { BaseAPiService } from './api.service';

class ConsultationAPiService extends BaseAPiService {
  constructor() {
    super();
  }

  get consulatationTypes() {
    return this.axiosInstance.get<
      PaginatedBaseAPiResponse<ConsultationTypeEntity[]>
    >(publicRoutes.ConsultationTypes);
  }
}

export const consultationAPiService = new ConsultationAPiService();
