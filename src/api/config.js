import Qs from 'qs'
export default{

	url: '/',
	baseURL:'https://zhihu-daily.leanapp.cn/api/v1',
	method: 'get',

	transformRequest: [
		function(data) {
			
			return data;
		}
	],


	transformResponse: [
		function(data) {

			return data;
		}
	],

	headers: {
		'Content-Type':'application/x-www-form-urlencoded'
	},


	params: {

	},


	paramsSerializer: function(params) {
		return Qs.stringify(params)
	},


	data: {
		
	},


	timeout: 30000,


	withCredentials: false, // default


	responseType: 'json', // default

	proxy: {
		

	},

	maxContentLength: 2000,


	validateStatus: function(status) {
		return status >= 200 && status < 300; // default
	},


	maxRedirects: 5, // default
}


