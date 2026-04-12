type OtpData = {
  otp: string;
  expiresAt: number;
};

const otpStore = new Map<string, OtpData>();

export const setOtp = (email: string, otp: string) => {
  const expiresAt = Date.now() + 90 * 1000; // 1.5 min
  otpStore.set(email, { otp, expiresAt });
};

export const getOtp = (email: string) => {
  const data = otpStore.get(email);

  if (!data) return undefined;

  if (Date.now() > data.expiresAt) {
    otpStore.delete(email);
    return undefined;
  }

  return data;
};

export const deleteOtp = (email: string) => {
  otpStore.delete(email);
};