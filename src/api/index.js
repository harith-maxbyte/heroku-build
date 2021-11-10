import { END_POINT } from "../helpers/constant";
import axios from "axios";

//RESPONSE PARSE
function parseResponse(response) {
	return response.json().then((json) => {
		if (!response.ok) {
			return Promise.reject(json);
		}
		return json;
	});
}

//AXIOS RESPONSE PARSE
function parseAxiosResponse(response) {
	if (response.statusText === "OK" || response.status === 200) {
		return response.data
	} else {
		return Promise.reject(response.statusText);
	}
}

//BLOB RESPONSE PARSE
function parseBlobResponse(response) {
	return response.blob().then((json) => {
		if (!response.ok) {
			return Promise.reject(json);
		}
		return json;
	});
}

const API = {

	//GET METHOD
	async get(url) {
		const token = JSON.parse(localStorage.getItem('user_token'));
		const bearer = 'Bearer ' + token;
		return fetch(`${END_POINT}${url}`, {
			method: 'GET',
			headers: new Headers({
				"Content-Type": "application/json",
				'Authorization': bearer
			}),
		})
			.then(parseResponse);
	},

	//POST METHOD
	async post(url, data) {
		const body = JSON.stringify(data);
		const token = JSON.parse(localStorage.getItem('user_token'));
		const bearer = 'Bearer ' + token;
		return fetch(`${END_POINT}${url}`, {
			method: 'POST',
			headers: new Headers({ "Content-Type": "application/json", "Authorization": bearer }),
			body,
		})
			.then(parseResponse)
	},

	async postFormData(url, data) {
		const token = JSON.parse(localStorage.getItem('user_token'));
		const bearer = 'Bearer ' + token;
		for (var value of data.values()) {
			console.log(value);
		}
		return fetch(`${END_POINT}${url}`, {
			method: 'POST',
			headers: new Headers({ "Authorization": bearer }),
			body: data,
		})
			.then(parseResponse)
	},

	//Generate Token
	async GenerateToken(url, data) {
		const body = JSON.stringify(data);
		//const token = JSON.parse(localStorage.getItem('user_token'));
		return fetch(`${END_POINT}${url}`, {
			method: 'POST',
			headers: new Headers({ "Content-Type": "application/json" }),
			body,
		})
			.then(parseResponse)
	},

	//PUT METHOD
	async put(url, data) {
		const body = JSON.stringify(data);
		const token = JSON.parse(localStorage.getItem('user_token'));
		const bearer = 'Bearer ' + token;
		return fetch(`${END_POINT}${url}`, {
			method: 'PUT',
			headers: new Headers({
				"Content-Type": "application/json",
				"Authorization": bearer
			}),
			body,
		})
			.then(parseResponse)
	},

	//PATCH METHOD
	async patch(url, data) {
		const body = JSON.stringify(data);
		const token = JSON.parse(localStorage.getItem('user_token'));
		const bearer = 'Bearer ' + token;
		return fetch(`${END_POINT}${url}`, {
			method: 'PATCH',
			headers: new Headers({
				"Content-Type": "application/json",
				"Authorization": bearer
			}),
			body,
		})
			.then(parseResponse)
	},

	//DELETE METHOD
	async delete(url, data) {
		const body = JSON.stringify(data);
		const token = JSON.parse(localStorage.getItem('user_token'));
		const bearer = 'Bearer ' + token;
		return fetch(`${END_POINT}${url}`, {
			method: 'DELETE',
			headers: new Headers({
				"Content-Type": "application/json",
				'Authorization': bearer
			}),
			body
		})
			.then(parseResponse);
	},

	//AXIOS POST METHOD
	async normalPost(url, data) {
		const token = JSON.parse(localStorage.getItem('user_token'));
		const instance = axios.create({
			headers: { 'Authorization': 'Bearer ' + token }
		});
		return instance.post(`${END_POINT}${url}`, data).then((response) => {
			return parseAxiosResponse(response)
		}).catch(function (error) {
			var obj = {}
			obj.data = null;
			obj.error = "Looks like there was a problem";
			return (obj)
		});
	},

	//AXIOS PUT METHOD
	async normalPut(url, data) {
		const token = JSON.parse(localStorage.getItem('user_token'));
		const instance = axios.create({
			headers: { 'Authorization': 'Bearer ' + token }
		});
		return instance.put(`${END_POINT}${url}`, data).then((response) => {
			return parseAxiosResponse(response)
		}).catch(function (error) {
			var obj = {}
			obj.data = null;
			obj.error = "Looks like there was a problem";
			return (obj)
		});
	},

	//BLOB GET METHOD
	async blobGet(url) {
		const token = JSON.parse(localStorage.getItem('user_token'));
		const bearer = 'Bearer ' + token;
		return fetch(`${END_POINT}${url}`, {
			method: 'GET',
			headers: new Headers({
				'Authorization': bearer
			}),
		})
			.then(parseBlobResponse);
	},
}

export default API;