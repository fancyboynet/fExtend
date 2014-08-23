fExtend
=======

A javascript function, which can runs both in browser and node.js, to extend an object from other object deeply or not.

install
=======

```
npm install f-extend
```

usage
=======
In nodejs:

```
var extend = require('f-extend');
extend(to, from, isDeep);
```
In browser:
```
var extend = window.fExtend;
extend(to, from, isDeep);
```