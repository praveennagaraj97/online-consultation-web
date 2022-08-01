export enum Routes {
  Home = '/',
  LoginWithPhone = '/auth/login/phone',
  LoginWithEmail = '/auth/login/email',
  Register = '/auth/register',
  LinkedProfiles = '/account/linked-profiles',
  Orders = '/account/orders',
  Profile = '/account/profile',
  UploadPrescription = '/upload-prescription',
  SelectFromPastConsultation = '/user/select-from-past-consultation',
  ProductDetail = '/product',
  AddPrescription = '/add-prescription',

  // consult
  Consultation = '/consultation',
  CreatePatientProfile = '/consultation/create-patient-profile',
  // appointment
  BookConsultation = '/consultation/book-appointment',
  ChooseSpecialityForBookingAppointment = '/consultation/book-appointment/choose-speciality',
  ChooseDoctorForBookingAppointment = '/consultation/book-appointment/choose-doctor',
  ViewDoctorProfile = '/consultation/book-appointment/doctor-profile',
  ReviewAppointmentBooking = '/consultation/book-appointment/review-booking',
  // Instant
  InstantConsultation = '/consultation/instant',
  InstantConsultationConfirm = '/consultation/instant/confirm',
  InstantConsultationConnectToDoctor = '/consultation/instant/connect',
  InstantConsultationUnableToConnect = '/consultation/instant/unable-to-connect',

  // Order Medicines
  OrderMedicines = '/order-medicines',
  OrderMedicinesThroughPrescription = '/order-medicines/through-prescription',

  // Cart
  Cart = '/cart',
  CartManualPrescription = '/cart/manual-prescription',
}

export const DynamicRoutes = {
  ProductDetail: (slug: string, id: string) =>
    `${Routes.ProductDetail}/${slug}/${id}`,
  DoctorProfile: (slug: string, id: string) =>
    `${Routes.ViewDoctorProfile}/${slug}/${id}`,
};
