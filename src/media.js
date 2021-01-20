const fetch = require('node-fetch');
const ytb = require('../lib/youtube')
const baseURI = 'https://arugaz.my.id'

function ytsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ytsearch?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function ytaudio(url) {
	return new Promise((resolve, reject) => {
		ytb.yta(url)
		.then(resolve)
		.catch(reject)
	})
}

function ytsearch(url) {
	return new Promise((resolve, reject) => {
		ytb.ytv(url)
		.then(resolve)
		.catch(reject)
	})
}

function instagram(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/ig?url=' + query)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function stalkig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/stalkig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function storyig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/storyig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function highlightig(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/highlightig?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function tiktok(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/tiktok?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function twtimg(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/twimg?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function twtvid(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/twvid?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function stalktwt(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/stalktwitt?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function facebook(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/facebook?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function phubsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/pornhub/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function phubdetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/pornhub/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function xvidsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xvideo/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function xviddetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xvideo/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function xnxxsearch(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/xnxx/search?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

function xnxxdetail(url) {
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

function filmdetail(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/media/filmapik/detail?url=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
