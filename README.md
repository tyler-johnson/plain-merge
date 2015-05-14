# Plain Merge

Yet another utility for merging JavaScript objects.

## Install

Install using NPM. This package is compatible in the browser using Browserify.

```
$ npm install plain-merge
```

```js
var merge = require("plain-merge");
merge.extend({ a: true }, { foo: "bar" });
```

## Usage

### merge()

```
merge( a, b [, safe ] ) // → a
```

Merges some value `b` into `a`. When both values are plain objects, this method recursively merges `b`'s own enumerable properties onto `a` and returns `a`. Otherwise, the `safe` argument is used to determine which value is returned where `true` is `a` and `false` is `b`.

This is the base merge method and you probably won't need to use this directly. Listed below are the practical implementations of this method.

### merge.extend()

```
merge.extend(val [, mixin... ] ) // → val
```

Merges each `mixin` argument into val, where non-object `mixin` values will replace `val` (i.e. `safe` is set to `false`). This is basically the deep equivalent of `_.extend()`.

### merge.defaults()

```
merge.defaults(val [, mixin... ] ) // → val
```

Merges each `mixin` argument into val, where non-object `mixin` values are ignored (i.e. `safe` is set to `true`). This is basically the deep equivalent of `_.defaults()`.
