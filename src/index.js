const fetch = require('node-fetch');
const baseURI = 'https://arugaz.my.id'
var ArugaZ = module.exports;

ArugaZ.ytsearch = function ytsearch(query, cb) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ytsearch?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
