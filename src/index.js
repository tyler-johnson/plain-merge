import isPlainObject from "is-plain-object";
var has = (o, p) => Object.prototype.hasOwnProperty.call(o, p);
var toArray = (v) => Array.prototype.slice.call(v, 0);

export default function merge(a, b, safe) {
	let val;

	// resolve (a) value
	if (isPlainObject(a)) {
		val = {};
		for (let k in a) {
			if (!has(a, k)) continue;
			val[k] = a[k];
		}
	}
	else {
		val = a;
	}

	// merge in (b) value
	if (typeof b !== "undefined") {
		if (isPlainObject(b)) {
			if (!isPlainObject(val)) {
				if (safe) return val;
				val = {};
			}

			for (let k in b) {
				if (!has(b, k)) continue;
				val[k] = merge(val[k], b[k], safe);
			}
		}
		else if (!safe) {
			val = b;
		}
	}

	return val;
}

// keeping it DRY
function mergeAll(safe, obj) {
	var args = toArray(arguments).slice(2);
	for (var i = 0; i < args.length; i++) {
		obj = merge(obj, args[i], safe);
	}
	return obj;
}

merge.extend = mergeAll.bind(null, false);
merge.defaults = mergeAll.bind(null, true);
