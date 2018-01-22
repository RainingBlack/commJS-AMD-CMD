var commJS = (function () {
    var modules = {};
    var example = {
        define : function (name, func) {
            modules[name] = func;
        },
        require : function (path) {
            var module = modules[path] || modules[path+'.js'];
            if(!module.exports){
                module.exports = {};
                module.call(null,module,module.exports);
            }
            return module.exports;
            return ;
        }
    }
    return {
        define : example.define,
        require : example.require
    }
})();

