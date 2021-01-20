const fetch = require('node-fetch');
const ytb = require('./lib/youtube')
const baseURI = 'https://arugaz.my.id'
var ArugaZ = module.exports;

ArugaZ.ytsearch = function ytsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ytsearch?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

ArugaZ.ytaudio = function ytaudio(url) {
	return new Promise((resolve, reject) => {
		ytb.yta(url)
		.then(resolve)
		.catch(reject)
	})
}

ArugaZ.ytvideo = function ytsearch(url) {
	return new Promise((resolve, reject) => {
		ytb.ytv(url)
		.then(resolve)
		.catch(reject)
	})
}
