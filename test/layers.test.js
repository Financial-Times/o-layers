/*global describe, it*/
'use strict';

var expect = require('expect.js');

var oLayers = require('./../main.js');

describe('o-layers', function() {

	it('#getLayerContext', function() {
		var pElement = document.createElement('p');
		document.body.appendChild(pElement);
		expect(oLayers.getLayerContext(pElement)).to.be(document.body);
		var divElement = document.createElement('div');
		divElement.classList.add('o-layers__context');
		divElement.appendChild(pElement);
		document.body.appendChild(divElement);
		expect(oLayers.getLayerContext(pElement)).to.be(divElement);
	});
});
