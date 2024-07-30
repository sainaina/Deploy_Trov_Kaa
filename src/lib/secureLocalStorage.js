import secureLocalStorage from "react-secure-storage";
//add access token to local storage
export const storeAccessToken = (accessToken) => {
    console.log('Storing Access Token:', accessToken); // Debugging
    secureLocalStorage.setItem(import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX, accessToken);
};

export const storeEmail = (email) =>{
    secureLocalStorage.setItem(
        email
    )
}
// Get access token
export const getAccessToken = () => {
    const token = secureLocalStorage.getItem(import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX);
    console.log('Retrieved Access Token:', token); // Debugging
    return token;
};

// Remove access token
export const removeAccessToken = () => {
    secureLocalStorage.removeItem(import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX);
}; 