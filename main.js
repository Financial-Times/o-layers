export const getLayerContext = function (el) {
	return el.closest('.o-layers__context') || document.body;
};

export default { getLayerContext };
