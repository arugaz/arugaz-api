const fetch = require('node-fetch');
const ytb = require('../lib/youtube')
const baseURI = 'https://arugaz.my.id'

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
		fetch(baseURI+'/api/media/tiktok?user=' + url)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.youtube = function(url, options) {
	options = {
		k: String
	}
	return new Promise((resolve, reject) => {
		if (!options.k) return reject('PLEASE INPUT Option')
	})
}
