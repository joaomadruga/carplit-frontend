import api from "../api";

export async function getCarpools(authToken) {
    const response = await api.get('/trip/list/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
          },
    });
    if (response.status !== 200) throw new Error(response.status);
    
    return response;
}

export async function addCarpool(authToken, addObj) {
    const response = await api.post(`/trip/create/`, addObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function getCarpoolDetails(authToken, idCarpool) {
    const response = await api.get(`/trip/get/${idCarpool}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
          },
    });
    if (response.status !== 200) throw new Error(response.status);
    
    return response;
}

export async function deleteCarpool(authToken, id) {
    const response = await api.delete(`/trip/delete/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function updatePassengerPayment(authToken, updateObj) {
    const response = await api.put(`/trip/passenger/payment/`, updateObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}