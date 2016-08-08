var app = app || {};
app.utils = app.utils || {};

(function() {
    'use strict';

    /**
     * PathBuilder Utility. It's base class for PathBuilders with common members and functionality.
     *
     * @class PathBuilder
     * @constructor
     * @param {paper.Point} start
     * @param {paper.Point} dim
     * @param {Date} startDate
     * @param {Date} endDate
     * @param {Number} startPrice
     * @param {Number} endPrice
     */
    var PathBuilder = function(start, dim, startDate, endDate, startPrice, endPrice) {
        paper.setup(null);
        this.start = start;
        this.dim = dim;
        this.startDate = startDate.valueOf();
        this.endDate = endDate.valueOf();
        this.startPrice = startPrice;
        this.endPrice = endPrice;
    }

    /**
     * Converts input date into corresponding x location.
     *
     * @method calibrateX
     * @param {Date} currentDate
     * @return {Number} the corresponding x location on canvas.
     */
    PathBuilder.prototype.calibrateX = function(currentDate) {
        var cur = currentDate.valueOf();
        cur = (cur - this.startDate) / (this.endDate - this.startDate);
        cur *= (this.dim.x - 50);
        cur += + 25;
        cur += this.start.x;
        return cur;
    };

    /**
     * Converts input price into corresponding y location.
     *
     * @method calibrateY
     * @param {Number} price
     * @return {Number} the corresponding y location on canvas.
     */
    PathBuilder.prototype.calibrateY = function(price) {
        var cur = (this.endPrice - price) / (this.endPrice - this.startPrice);
        cur *= (this.dim.y - 50);
        cur += + 25;
        cur += this.start.y;
        return cur;
    }

    app.utils.PathBuilder = PathBuilder;

})();