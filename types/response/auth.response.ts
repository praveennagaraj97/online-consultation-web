export interface CheckPhoneOrEmailExists {
  is_available: boolean;
}

export interface VerificationCode {
  verification_id: string;
  created_at: string;
}
