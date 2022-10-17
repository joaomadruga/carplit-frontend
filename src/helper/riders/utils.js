import api from "../api";

export async function getRiders(authToken) {
    const response = await api.get('/passenger/list/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
          },
    });
    if (response.status !== 200) throw new Error(response.status);
    
    return response;
}

export async function updateRider(authToken, id, updateObj) {
    const response = await api.put(`/passenger/update/${id}`, updateObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function addRider(authToken, addObj) {
    const response = await api.post(`/passenger/create/`, addObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function deleteRider(authToken, id) {
    const response = await api.delete(`/passenger/delete/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function getHistoryCarpools(authToken, id) {
    const response = await api.get(`/passenger/retrieve/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function deleteAllCarpools(authToken, updateObj) {
    const response = await api.post(`/trip/payall/`, updateObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}