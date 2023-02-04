/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const RuntimeModule = require("../RuntimeModule");

class CacheStorageRuntimeModule extends RuntimeModule {
	constructor() {
		super("cache storage", RuntimeModule.STAGE_ATTACH);
	}

	/**
	 * @returns {string} runtime code
	 */
	generate() {
		return `
			if ('caches' in window) {
				caches.open('mf-cache').then((cache) => {

				// TODO: get values from module arguments or global variables
				cache.addAll([
					'http://localhost:5002/remoteEntry.js',
					'http://localhost:5002/vendors-node_modules_react_index_js.js',
					'http://localhost:5002/vendors-node_modules_react-dom_index_js.js',
					'http://localhost:5002/src_Button_tsx.js'
				]);

				// TODO: add mfCache to RuntimeGlobals.cacheStorage (__webpack_require__.cs)
				mfCache = cache;
		`;
	}
}

module.exports = CacheStorageRuntimeModule;
