import api from "./api";

export async function getAuthTokenLogin(email, password) {
    console.log({email, password})
    const response = await api.post('/user/login', {
        "email": email,
        "password": password
    });
    if (response.data.status !== 200) throw new Error(response.data.status);
    return response;
};

export async function getIsEmailAvailable(email) {
    const response = await api.post('/user/verify/email', {
        "email": email,
    });
    console.log(response.data)
    if (response.data.status !== 200) throw new Error(response.data.status);
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
    if (response.data.status !== 200) throw new Error(response.data.status);
    return response;
};

/*
export async function getCarpools(authToken) {
    console.log(authToken)
    const response = await api.get('/api/v1/trips/trips/', {
        headers: { Authorization: `Token ${authToken}` }
    });
    return response;
}
*/

export async function getCarpools(authToken) {
    console.log(authToken)
    const response = await api.get('/api/v1/trips/trips/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
          },
          xsrfCookieName:"csrftoken",
          xsrfHeaderName:'X-CSRFToken',
          body:JSON.stringify({ Authorization: `Token ${authToken}` })
    });
    return response;
}
      
