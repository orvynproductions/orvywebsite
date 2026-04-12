type OtpData = {
  otp: string;
  expiresAt: number;
};

declare global {
  var otpStore: Map<string, OtpData> | undefined;
}

const store = globalThis.otpStore || new Map<string, OtpData>();
globalThis.otpStore = store;

export const setOtp = (email: string, otp: string) => {
  const key = email.trim().toLowerCase();
  const expiresAt = Date.now() + 90 * 1000;
  store.set(key, { otp, expiresAt });
};

export const getOtp = (email: string) => {
  return store.get(email.trim().toLowerCase());
};

export const deleteOtp = (email: string) => {
  store.delete(email.trim().toLowerCase());
};