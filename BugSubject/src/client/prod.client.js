import axios from 'axios';
import check from './check'
import pinyin from './pinyin'
import showCardInfo from './showCardInfo'
const qs = require('qs');

export default {
	request: (url, params, headers) => {
		//设置默认请求头
		// headers={// 自定义发送，和params一起
		// 	headers:{

		// 	}
		// }
		// return axios.post('/api/'+url, qs.stringify(params), headers)
		// let api = '/api/';
		let api = '/inss-creditCardApply/';
		return axios.post(api + url + ".do", qs.stringify(params))
			.then(res => res.data)
			.catch(err => console.log(err));
	},
	check,
	pinyin,
	showCardInfo
}
