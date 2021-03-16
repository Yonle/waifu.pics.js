<div align="center">

[![waifu.pics](https://waifu.pics/favicon.png)](https://waifu.pics)

# Waifu.pics.js
A powerful waifu.pics api wrapper for NodeJS.
[![Latest Stable Version](https://img.shields.io/npm/v/waifu.pics.js.svg)](https://www.npmjs.com/package/waifu.pics.js)
[![NPM Downloads](https://img.shields.io/npm/dt/waifu.pics.js.svg)](https://www.npmjs.com/package/waifu.pics.js)
[![NPM Downloads](https://img.shields.io/npm/dm/waifu.pics.js.svg)](https://www.npmjs.com/package/waifu.pics.js)
![npm bundle size](https://img.shields.io/bundlephobia/min/waifu.pics.js)
![GitHub repo size](https://img.shields.io/github/repo-size/Yonle/waifu.pics.js)
![node-current](https://img.shields.io/node/v/waifu.pics.js)
</div>


- [Install](#install)
- [API](#api)
  - [`core`](#core)
  - [`core.<type>`](#coretype)
  - [`core.<type>.key`](#coretypekey)
  - [`core.<type>.many`](#coretypemany)
# Install
```
npm install waifu.pics.js
```
## API
### `core`
A functions that loaded from `require("waifu.pics.js")`, Fetching many `waifu` many waifu url from [waifu.pics](https://waifu.pics) endpoint. Returns `Promise { <pending> }`
```js
const waifu = require("waifu.pics.js");

waifu().then(json => {
	/*
		{
			files: [
				'https://i.waifu.pics/uc-SymC.jpg',
				....
			]
		}
	*/
}).catch(console.error);
```
### `core.<type>` 
A function that fetch a requested waifu type, Waifu has 2 types, They are `sfw` and `nsfw` Returns `Promise { <pending> }`
```js
waifu.sfw("neko").then(json => {
	// { url: 'https://i.waifu.pics/vwNedaS.jpg' }	
}).catch(console.error);
```
### `core.<type>.key`
A object property that returns all `<waifu type>` categories key, Returns `object`
```js
console.log( waifu.sfw.key );
/*
	[
 	  'waifu',    'neko',     'shinobu',
	  'megumin',  'bully',    'cuddle',
	  'cry',      'hug',      'awoo',
	  'kiss',     'lick',     'pat',
	  'smug',     'bonk',     'yeet',
	  'blush',    'smile',    'wave',
	  'highfive', 'handhold', 'nom',
	  'bite',     'glomp',    'kill',
	  'slap',     'happy',    'wink',
	  'poke',     'dance',    'cringe'
	]
*/
```
### `core.<type>.many`
Same as [`core.<type>`](#coretype) does, but returns many url from requested categories. Returns `Promise { <pending> }`
```js
waifu.sfw.many("smile").then(json => {                                                                                       /*
                {
                        files: [                                                                                                     'https://i.waifu.pics/uc-SymC.jpg',
                                ....
                        ]
                }
        */
}).catch(console.error);
```

# Community
- [Discord](https://quickstream.yonle.repl.co/discord)
- [Telegram](https://t.me/yonlecoder)

# Useful Link
- [Waifu.pics Github](https://github.com/Riku32/waifu.pics)
