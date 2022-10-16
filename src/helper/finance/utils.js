import api from "../api";

export async function getFinance(authToken, days) {
    const response = await api.get(`/finance/get/${days}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
          },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response;
}