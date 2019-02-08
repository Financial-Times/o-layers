import dom from 'o-dom';

export default {
	getLayerContext: function (el) {
		return dom.getClosestMatch(el, '.o-layers__context') || document.body;
	}
};
