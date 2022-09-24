import api from "./api";

export async function getAuthTokenLogin(email, password) {
    const response = await api.post('/auth/token/login/', {
        "email": email,
        "password": password
    });
    return response;
};

export async function getCarpools(authToken) {
    const response = await api.get('/trips/trips/', {
        headers: { Authorization: `Token ${authToken}` }
    });
    return response;
}