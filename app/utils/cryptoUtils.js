import CryptoJS from "crypto-js";

const secretKey = "lms-shams"; // Use a strong, unique key

export const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
};

export const decrypt = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Function to store user data securely
export const storeRememberedUser = (data) => {
  try {
    const encryptedData = encrypt(JSON.stringify(data)); // Encrypt user data
    localStorage.setItem("rememberedUser", encryptedData);
  } catch (error) {
    console.error("Error encrypting data:", error);
  }
};

// Function to retrieve and decrypt user data
export const getRememberedUser = () => {
  try {
    const encryptedData = localStorage.getItem("rememberedUser");
    if (!encryptedData) return null; // Return null if no data is found
    return JSON.parse(decrypt(encryptedData)); // Decrypt and parse JSON
  } catch (error) {
    console.error("Error decrypting data:", error);
    return null;
  }
};

// Function to remove stored user data
export const removeRememberedUser = () => {
  localStorage.removeItem("rememberedUser");
};
