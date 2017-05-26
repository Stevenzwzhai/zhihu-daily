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
			host: 'mob.cmcloud.cn',

	},

	maxContentLength: 2000,


	validateStatus: function(status) {
		return status >= 200 && status < 300; // default
	},


	maxRedirects: 5, // default
}

  function base64encode(str) {
  	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  	var output = "";
  	var chr1, chr2, chr3 = "";
  	var enc1, enc2, enc3, enc4 = "";
  	var i = 0;
  	var input = utf16to8(str);
  	do {
  		chr1 = input.charCodeAt(i++);
  		chr2 = input.charCodeAt(i++);
  		chr3 = input.charCodeAt(i++);
  		enc1 = chr1 >> 2;
  		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
  		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
  		enc4 = chr3 & 63;
  		if (isNaN(chr2)) {
  			enc3 = enc4 = 64;
  		} else if (isNaN(chr3)) {
  			enc4 = 64;
  		}
  		output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
  		chr1 = chr2 = chr3 = "";
  		enc1 = enc2 = enc3 = enc4 = "";
  	} while (i < input.length);
  	return output;

  }

  function utf16to8(str) {
  	var out, i, len, c;
  	out = "";
  	len = str.length;
  	for (i = 0; i < len; i++) {
  		c = str.charCodeAt(i);
  		if ((c >= 0x0001) && (c <= 0x007F)) {
  			out += str.charAt(i);
  		} else if (c > 0x07FF) {
  			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
  			out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
  			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
  		} else {
  			out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
  			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
  		}
  	}
  	return out;
  }
