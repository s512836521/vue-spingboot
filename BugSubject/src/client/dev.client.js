import axios from 'axios'
import check from './check'
import pinyin from './pinyin'
import showCardInfo from './showCardInfo'
const qs = require('qs');
// 监听本地mock
// export default {
// 	request: (url, opt) => {
// 		return axios.get('/api/'+ url + ".json", {
// 			params: { opt }
// 		})
// 		.then(res => res.data)
// 		.catch(err => console.log(err));
// 	},
// 	check,
// 	pinyin,
// 	showCardInfo
// }

//连接其他环境配置
export default {
	request: (url,opt) => {
		return axios.post('api2/'+ url, {params:opt})
		// return axios.get('api2/'+ url + ".do", {params:opt})
		// let _url = '/api2/' + url + '.do';
		// return axios.get(_url,{ params: { opt } })
		.then(res => res.data)
		.catch(err => console.log(err));
	},
	check,
	pinyin,
	showCardInfo
}


// export default {
// 	request: (url, params, headers) => {
// 		//设置默认请求头
// 		// headers={// 自定义发送，和params一起
// 		// 	headers:{

// 		// 	}
// 		// }
// 		// return axios.post('/api/'+url, qs.stringify(params), headers)
// 		// let api = '/api/';
// 		let api = '/inss-creditCardApply/';
// 		return axios.post(api + url + ".do", qs.stringify(params))
// 			.then(res => res.data)
// 			.catch(err => console.log(err));
// 	}
// }
