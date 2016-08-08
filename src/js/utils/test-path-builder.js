var app = app || {};
app.utils = app.utils || {};

(function() {
    'use strict';

    /**
     * TestPathBuilder Utility. It builds Rectangle shape.
     *
     * @class TestPathBuilder
     * @constructor
     * @param {paper.Point} start
     * @param {paper.Point} dim
     * @param {Date} startDate
     * @param {Date} endDate
     * @param {Number} startPrice
     * @param {Number} endPrice
     */
    var TestPathBuilder = function(start, dim, startDate, endDate, startPrice, endPrice) {
        app.utils.PathBuilder.call(this, start, dim, startDate, endDate, startPrice, endPrice);
    };

    TestPathBuilder.prototype = Object.create(app.utils.PathBuilder.prototype);
    TestPathBuilder.prototype.constructor = TestPathBuilder;

    /**
     * Creates a paper Path for the input bar.
     * The bar shape is a candlestick.
     *
     * @method getBar
     * @param {app.Model.Bar} bar
     * @return {String} the candlestick path representation of the bar.
     */
    TestPathBuilder.prototype.getBar = function(bar) {
        // Create a Paper.js Path to draw a line into it:

        var x = this.calibrateX(bar.date);
        var high = this.calibrateY(bar.high);
        var low = this.calibrateY(bar.low);
        var first = this.calibrateY(Math.max(bar.open, bar.close));
        var second = this.calibrateY(Math.min(bar.open, bar.close));
        var path = new paper.Path.Rectangle(new paper.Point(10, 10), new paper.Point(100, 100));
        return path.pathData;
    };

    app.utils.TestPathBuilder = TestPathBuilder;
})();