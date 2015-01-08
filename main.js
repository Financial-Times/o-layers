'use strict'

var dom = require('o-dom');

module.exports = {
    getLayerContext: function (el) {
        return dom.getClosestMatch(el, '[data-o-layers-context]') || document.body;
    }
};
