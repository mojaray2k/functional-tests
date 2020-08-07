import { encrypt, decrypt } from "./cryptoUtils";

describe("encrypt and decrypt ", () => {
  const encryptItem = "myPassword";
  const secretKey = "#passKey@321+%$i";
  const encryptedItem = encrypt(encryptItem, secretKey);

  it("should return decrypted item", () => {
    const expected = "myPassword";

    expect(decrypt(encryptedItem, secretKey)).toBe(expected);
  });
});
