const bent = require('bent')
const baseURI = 'https://arugaz.my.id'

module.exports.luxury = function luxury(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/luxury?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.text3d = function text3d(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/text3d?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.blackpink = function blackpink(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/blackpink?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.realvintage = function realvintage(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/realvintage?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.realcloud = function realcloud(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/realcloudtext=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.cloudsky = function cloudsky(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/cloudsky?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sandsummer = function sandsummer(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/sandsummer?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sandwrite = function sandwrite(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/sandwrite?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sandengraved = function sandengraved(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/sandengraved?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.sandsummery = function sandsummery(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/sandsummery?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.foilballoon = function foilballoon(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/foilballoon?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.glue3d = function glue3d(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/glue3d?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.space3d = function space3d(query1, query2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/space3d?text1=' + encodeURIComponent(query1) + '&text2=' + encodeURIComponent(query2))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.metaldark = function metaldark(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/metaldark?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.glitchtext = function glitchtext(query1, query2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/glitchtext?text1=' + encodeURIComponent(query1) + '&text2=' + encodeURIComponent(query2))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.stonetext = function stonetext(query1, query2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/stonetext?text1=' + encodeURIComponent(query1) + '&text2=' + encodeURIComponent(query2))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.neonlight = function neonlight(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/neonlight?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.neonnew = function neonnew(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/neonnew?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.old1917 = function old1917(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/old1917?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.minion = function minion(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/miniontext?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.pornhub = function pornhub(query1, query2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/pornhub?text1=' + encodeURIComponent(query1) + '&text2=' + encodeURIComponent(query2))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.holograpich = function holograpich(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/holograpich?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.avengers = function avengers(query1, query2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/avengers?text1=' + encodeURIComponent(query1) + '&text2=' + encodeURIComponent(query2))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.marvel = function marvel(query1, query2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/marvelstudio?text1=' + encodeURIComponent(query1) + '&text2=' + encodeURIComponent(query2))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.firework = function firework(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/firework?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.lavatext = function lavatext(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/lavatext?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.america = function america(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/captamerica?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.equalizer = function equalizer(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/equalizer?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.toxic = function toxic(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/toxictext?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.matrix = function matrix(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/matrixtext?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.blood = function blood(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/bloodtext?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.thunder = function thunder(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/thundertext?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.neon = function neon(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/neontext?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.bokeh = function bokeh(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/bokehtext?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.green = function green(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/greenneon?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.glow = function glow(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/advancedglow?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}

module.exports.water = function water(query) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textpro/dropwater?text=' + encodeURIComponent(query))
		.then(resolve)
		.catch(reject)
	})
}
