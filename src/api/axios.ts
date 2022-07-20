import axios from 'axios'

const axiosInstance = axios.create({
	timeout: 10000
})

const errorHandler = (error: any) => {
	return Promise.reject(error)
}

axiosInstance.interceptors.response.use(
	(response) => response.data,
	(error) => errorHandler(error)
)

export default axiosInstance