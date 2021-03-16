const fetch = require("node-fetch");
const sfwKey = [
	"waifu", "neko", "shinobu", "megumin", "bully", "cuddle", "cry", "hug", "awoo", "kiss", "lick", "pat", "smug", "bonk", "yeet", "blush", "smile", "wave", "highfive", "handhold", "nom", "bite", "glomp", "kill", "slap", "happy", "wink", "poke", "dance", "cringe"
];
const nsfwKey = [
	"waifu", "neko", "blowjob", "trap"
];

module.exports = function Waifu() {
	return many("sfw/waifu");
};

module.exports.sfw = function getSfw(categories) {
	return new Promise((res, rej) => {
		if (!sfwKey.includes(categories)) return rej("Not SFW Key");
		return get("sfw/"+categories).then(res).catch(rej);
	});
}

module.exports.sfw.key = sfwKey;
module.exports.sfw.many = function getManySfw(categories) {
        return new Promise((res, rej) => {
                if (!sfwKey.includes(categories)) return rej("Not SFW Key");
                return many("sfw/"+categories).then(res).catch(rej);
        });
}
module.exports.nsfw = function getNsfw(categories) {
        return new Promise((res, rej) => {
                if (!nsfwKey.includes(categories)) return rej("Not SFW Key");
                return get("nsfw/"+categories).then(res).catch(rej);
        });
}

module.exports.nsfw.key = nsfwKey;
module.exports.nsfw.many = function getManyNsfw(categories) {
        return new Promise((res, rej) => {
                if (!nsfwKey.includes(categories)) return rej("Not SFW Key");
                return many("nsfw/"+categories).then(res).catch(rej);
        });
}


function many (endpoint, exclude) {
	return new Promise((res, rej) => {
		return fetch('https://waifu.pics/api/many/'+endpoint, {
        		method: 'post',
	        	body:    JSON.stringify({ exclude: exclude||[] }),
        		headers: { 'Content-Type': 'application/json' },
		})
		.then(res => res.json())
		.then(res)
		.catch(rej);
	});
}

function get (endpoint) {
        return new Promise((res, rej) => {
                return fetch('https://waifu.pics/api/'+endpoint, {
                        method: 'get'
                })
                .then(res => res.json())
                .then(res)
                .catch(rej);
        });
}
