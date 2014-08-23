(function(w){
    if(w.fExtend){
        return;
    }
    var isObject = function(v){
        return Object.prototype.toString.call(v) === '[object Object]';
    };
    var isArray = function(v){
        if (Array.isArray) {
            return  Array.isArray(v);
        }
        return Object.prototype.toString.call(v) === '[object Array]';
    };
    var extend = function(to, from, isDeep){
        for (var key in from) {
            if (!from.hasOwnProperty(key)) {
                continue;
            }
            if (!isDeep || !(isArray(from[key]) || isObject(from[key]))) {
                to[key] = from[key];
                continue;
            }
            if (!to[key] && isArray(from[key])) {
                to[key] = [];
            }
            if (!to[key] && isObject(from[key])) {
                to[key] = {};
            }
            extend(to[key], from[key], isDeep);
        }
        return to;
    };
    if ( typeof define === "function") { //AMD|CMD
        define(function(require, exports, module) {
            module.exports = extend;
        });
        return;
    }
    if(typeof require === 'function' && typeof exports === 'object' && typeof module === 'object'){ //CommonJS|NodeJS
        module.exports = extend;
        return;
    }
    w.fExtend = extend; //normal
})(this);

