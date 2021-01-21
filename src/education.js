const fetch = require('node-fetch');
const baseURI = 'https://arugaz.my.id'

module.exports.idwiki = function idwiki(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/edu/idwiki?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.enwiki = function enwiki(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/edu/enwiki?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.corona = function corona(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/edu/corona?country=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.resep = function resep(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/edu/resep?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.translate = function translate(lang, query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/edu/translate?lang='+ lang + '&text=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.kbbi = function kbbi(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/edu/kbbi?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}