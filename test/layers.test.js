/* eslint-env mocha */
/* global proclaim */

import oLayers from './../main.js';

describe('o-layers', function() {

	it('#getLayerContext', function() {
		const pElement = document.createElement('p');
		document.body.appendChild(pElement);
		proclaim.deepEqual(oLayers.getLayerContext(pElement), document.body);
		const divElement = document.createElement('div');
		divElement.classList.add('o-layers__context');
		divElement.appendChild(pElement);
		document.body.appendChild(divElement);
		proclaim.deepEqual(oLayers.getLayerContext(pElement), divElement);
	});
});
