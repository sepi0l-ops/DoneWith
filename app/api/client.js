import { create } from "apisauce";
import cache from '../utility/cache'
import { BACKEND_URL } from '@env';

const apiClient = create({
    baseURL: 'http://192.168.100.103:8000/api',
})

const get = apiClient.get // getting a reference to the apiClient.get method and storing it in a constant
apiClient.get = async (url, params, axiosConfig) => {
    const response =  await get(url, params, axiosConfig)

    if (response.ok) {
        cache.store(url, response.data)
        return response
    }

    const data = await cache.get(url)
    return data ? { ok: true, data} : response
}

export default apiClient