import apiClient from './apiClient';

export function getWeather(lat, lon, callback) {
	apiClient
		.get('weather/', {
			params: {
				lat: lat,
				lon: lon,
			},
		})
		.then(({ data }) => {
			callback(data);
		})
		.catch(({ response }) => {
			callback(response.data);
		});
}
