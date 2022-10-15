import api from "../api";

export async function getAuthTokenLogin(email, password) {
    const response = await api.post('/user/login', {
        "email": email,
        "password": password
    });
    if (response.status !== 200) throw new Error(response.status);
    return response;
};