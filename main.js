export default {
	getLayerContext: function (el) {
		return el.closest('.o-layers__context') || document.body;
	}
};
