import api from "../api";

export async function getPath(authToken) {
    const response = await api.get('/path/list/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
          },
    });
    if (response.status !== 200) throw new Error(response.status);
    
    return response; 
}

export async function updatePath(authToken, id, updateObj) {
    const response = await api.put(`/path/update/${id}`, updateObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function addPath(authToken, addObj) {
    const response = await api.post(`/path/create/`, addObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function deletePath(authToken, id) {
    const response = await api.delete(`/path/delete/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}