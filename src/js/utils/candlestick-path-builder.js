var app = app || {};
app.utils = app.utils || {};

(function() {
    'use strict';

    /**
     * CandlestickPathBuilder Utility. It builds Candlestick bar shape.
     *
     * @class CandlestickPathBuilder
     * @constructor
     * @param {paper.Point} start
     * @param {paper.Point} dim
     * @param {Date} startDate
     * @param {Date} endDate
     * @param {Number} startPrice
     * @param {Number} endPrice
     */
    var CandlestickPathBuilder = function(start, dim, startDate, endDate, startPrice, endPrice) {
        app.utils.PathBuilder.call(this, start, dim, startDate, endDate, startPrice, endPrice);
    };

    CandlestickPathBuilder.prototype = Object.create(app.utils.PathBuilder.prototype);
    CandlestickPathBuilder.prototype.constructor = CandlestickPathBuilder;

    /**
     * Creates a paper Path for the input bar.
     * The bar shape is a candlestick.
     *
     * @method getBar
     * @param {app.Model.Bar} bar
     * @return {String} the candlestick path representation of the bar.
     */
    CandlestickPathBuilder.prototype.getBar = function(bar) {
        // Create a Paper.js Path to draw a line into it:
        var path = new paper.Path();
        var x = this.calibrateX(bar.date);
        var high = this.calibrateY(bar.high);
        var low = this.calibrateY(bar.low);
        var first = this.calibrateY(Math.max(bar.open, bar.close));
        var second = this.calibrateY(Math.min(bar.open, bar.close));
        path.moveTo(new paper.Point(x, high));
        path.lineTo(new paper.Point(x, first));
        path.lineTo(new paper.Point(x-5,first));
        path.lineTo(new paper.Point(x-5, second));
        path.lineTo(new paper.Point(x, second));
        path.lineTo(new paper.Point(x, low));
        path.lineTo(new paper.Point(x, second));
        path.lineTo(new paper.Point(x+5, second));
        path.lineTo(new paper.Point(x+5, first));
        path.lineTo(new paper.Point(x, first));
        path.closed = true;

        return path.pathData();
    };

    app.utils.CandlestickPathBuilder = CandlestickPathBuilder;
})();