import { AES, enc, mode, pad } from "crypto-js";

const options = {
  mode: mode.CBC,
  padding: pad.Pkcs7,
};

export function encrypt(encryptItem: string, secretKey: string) {
  const bytes = AES.encrypt(encryptItem, secretKey, options);
  return bytes.toString();
}

export function decrypt(decryptItem: string, secretKey: string) {
  const bytes = AES.decrypt(decryptItem, secretKey, options);
  return bytes.toString(enc.Utf8);
}
