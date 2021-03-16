const fetch = require("node-fetch");
const sfwCategories = [
	"waifu", "neko", "shinobu", "megumin", "bully", "cuddle", "cry", "hug", "awoo", "kiss", "lick", "pat", "smug", "bonk", "yeet", "blush", "smile", "wave", "highfive", "handhold", "nom", "bite", "glomp", "kill", "slap", "happy", "wink", "poke", "dance", "cringe"
];
const nsfwCategories = [
	"waifu", "neko", "blowjob", "trap"
];

module.exports = function Waifu(ex) {
	return many("sfw/waifu", ex);
};

module.exports.sfw = async function getSfw(categories) {
		if (!sfwCategories.includes(categories)) {
			let err = new Error("Not SFW categories");
                        err.code = "ERR_INVALID_CATEGORIES";
                        return err;
		}
		return await get("sfw/"+categories);
}

module.exports.sfw.categories = sfwCategories;
module.exports.sfw.many = async function getManySfw(categories) {
                if (!sfwCategories.includes(categories)) {
			let err = new Error("Not SFW categories");
                        err.code = "ERR_INVALID_CATEGORIES";
                        return err;
		}
                return await many("sfw/"+categories);
}
module.exports.nsfw = async function getNsfw(categories) {
                if (!nsfwCategories.includes(categories)) {
			let err = new Error("Not NSFW categories");
                        err.code = "ERR_INVALID_CATEGORIES";
                        return err;
		}
                return await get("nsfw/"+categories);
}

module.exports.nsfw.categories = nsfwCategories;
module.exports.nsfw.many = async function getManyNsfw(categories) {
                if (!nsfwCategories.includes(categories)) {
			let err = new Error("Not NSFW categories");
			err.code = "ERR_INVALID_CATEGORIES";
			return err;
		};
                return await many("nsfw/"+categories);
}


async function many (endpoint, exclude) {
	return await fetch('https://waifu.pics/api/many/'+endpoint, {
       		method: 'post',
        	body:    JSON.stringify({ exclude: exclude||[] }),
       		headers: { 'Content-Type': 'application/json' },
	}).then(res => res.json());
}

async function get (endpoint) {
        return await fetch(`https://waifu.pics/api/${endpoint}`).then(res => res.json())
}


