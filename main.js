export default {
	getLayerContext: function (el) {
		el = el || document.body;
		return el.closest('.o-layers__context');
	}
};
