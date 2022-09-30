import api from "../api";

export async function getIsEmailAvailable(email) {
    const response = await api.post('/user/verify/email', {
        "email": email,
    });
    if (response.status !== 200) throw new Error(response.status);
    return response;
};

export async function getAuthTokenRegister(name, email, password, averageConsumption, fuelPerLiter) {
    const response = await api.post('/user/register', {
        "name": name,
        "email": email,
        "password": password,
        "average_consumption": averageConsumption,
        "fuel_per_liter": fuelPerLiter
    });
    if (response.status !== 200) throw new Error(response.status);
    return response;
};