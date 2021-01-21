const fetch = require('node-fetch')
const ytb = require('../lib/youtube')
const baseURI = 'https://arugaz.my.id'

module.exports.instagram = function instagram(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ig?url=' + query)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.stalkig = function stalkig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/stalkig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.storyig = function storyig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/storyig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.highlightig = function highlightig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/highlightig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.tiktok = function tiktok(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/tiktok?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.twtimg = function twtimg(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/twimg?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytsearch = function ytsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ytsearch?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytaudio = function ytaudio(url) {
	return new Promise((resolve, reject) => {
		ytb.yta(url)
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytvideo = function ytsearch(url) {
	return new Promise((resolve, reject) => {
		ytb.ytv(url)
		.then(resolve)
		.catch(reject)
	})
}

module.exports.twtvid = function twtvid(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/twvid?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.stalktwt = function stalktwt(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/stalktwitt?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.facebook = function facebook(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/facebook?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.phubsearch = function phubsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/pornhub/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.phubdetail = function phubdetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/pornhub/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.xvidsearch = function xvidsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xvideo/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.xviddetail = function xviddetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xvideo/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.xnxxsearch = function xnxxsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xnxx/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.xnxxdetail = function xnxxdetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xnxx/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.filmsearch = function filmsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/filmapik/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.filmdetail = function filmdetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/filmapik/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}