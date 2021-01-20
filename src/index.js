const fetch = require('node-fetch');
const ytb = require('../lib/youtube')
const baseURI = 'https://arugaz.my.id'

module.exports.sosmed.ytsearch = function ytsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ytsearch?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.ytaudio = function ytaudio(url) {
	return new Promise((resolve, reject) => {
		ytb.yta(url)
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.ytvideo = function ytsearch(url) {
	return new Promise((resolve, reject) => {
		ytb.ytv(url)
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.instagram = function instagram(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ig?url=' + query)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.stalkig = function stalkig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/stalkig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.storyig = function storyig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/storyig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.highlightig = function highlightig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/highlightig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.tiktok = function tiktok(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/tiktok?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.twtimg = function twtimg(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/twimg?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.twtvid = function twtvid(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/twvid?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.stalktwt = function stalktwt(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/stalktwitt?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.facebook = function facebook(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/facebook?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.phubsearch = function phubsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/pornhub/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.phubdetail = function phubdetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/pornhub/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.xvidsearch = function xvidsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xvideo/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.xviddetail = function xviddetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xvideo/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.xnxxsearch = function xnxxsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xnxx/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.xnxxdetail = function xnxxdetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xnxx/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.filmsearch = function filmsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/filmapik/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sosmed.filmdetail = function filmdetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/filmapik/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}