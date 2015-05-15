var isObject = require("is-plain-object");
var hasOwn = Object.prototype.hasOwnProperty;
var slice = Array.prototype.slice;

var merge = module.exports = function(obj, val, safe) {
	if (isObject(obj) && isObject(val)) {
		for (var k in val) {
			if (hasOwn.call(val, k)) obj[k] = merge(obj[k], val[k], safe);
		}

		return obj;
	}

	return safe && typeof obj !== "undefined" ? obj : val;
}

// keeping it DRY
function mergeAll(safe, obj) {
	var args = slice.call(arguments, 2);
	for (var i = 0; i < args.length; i++) {
		obj = merge(obj, args[i], safe);
	}
	return obj;
}

merge.extend = mergeAll.bind(null, false);
merge.defaults = mergeAll.bind(null, true);
