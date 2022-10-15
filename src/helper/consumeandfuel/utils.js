import api from "../api";

export async function updateConsumeAndFuel(authToken, updateObj) {
    const response = await api.put('/user/update', updateObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
          },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response;
}