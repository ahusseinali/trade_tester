var app = app || {};
app.utils = app.utils || {};

(function() {
    'use strict';

    /**
     * PathBuilderFactory Utility. It returns the proper PathBuilder based on input type.
     *
     * @class PathBuilderFactory
     * @constructor
     */
    var PathBuilderFactory = function() {
    };

    /**
     * Returns the proper PathBuilder class based on input type.
     *
     * @method getBuilder
     * @param {String} type
     * @return {app.utils.PathBuilder} the corresponding PathBuilder class.
     */
    PathBuilderFactory.prototype.getBuilder = function(type) {
        // TODO: Add More Builder types.
        switch(type) {
            case 'candlestick':
                return app.utils.CandlestickPathBuilder;
            default:
                return app.utils.TestPathBuilder;
        }
    };

    app.utils.PathBuilderFactory = new PathBuilderFactory();
})();