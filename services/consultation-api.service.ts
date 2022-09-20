import axios from 'axios';
import { privateRoutes, publicRoutes } from '../routes/api-routes';
import type {
  BaseAPiResponse,
  PaginatedBaseAPiResponse,
} from '../types/response';
import type {
  ConfirmBookingRazorPayEntity,
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

  bookScheduledConsultation(slotId: string, relativeId?: string) {
    const formData = new FormData();
    formData.append('appointment_slot_id', slotId);
    if (relativeId) {
      formData.append('relative_id', relativeId);
    }

    return this.axiosInstance.post<
      BaseAPiResponse<ConfirmBookingRazorPayEntity>
    >(privateRoutes.BookScheduledConsultation, formData);
  }

  cancelBookingIfPaymentFailsOrCancel(apptId: string) {
    return this.axiosInstance.delete(
      privateRoutes.CancelScheduledBooking(apptId)
    );
  }
}

export const consultationAPiService = new ConsultationAPiService();
