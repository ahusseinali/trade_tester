var app = app || {};
app.model = app.model || {};

(function() {
    'use strict';

    /**
     * Bar Model. It contains single bar information.
     *
     * @class Bar
     * @constructor
     */
    app.model.Bar = Backbone.Model.extend({
        /**
         * Initialize a new instance of Bar class.
         * Triggers an error if attributes validation fails.
         *
         * @method initialize
         * @param {Date} date
         * @param {Number} volume
         * @param {Number} open
         * @param {Number} close
         * @param {Number} high
         * @param {Number} low
         */
        initialize: function(date, volume, open, close, high, low) {
            var error = this.validate(
                {date: date, volume: volume, open: open, close: close, high: high, low: low});
            if (error) {
                this.trigger('error', this, error);
            }

            this.date = date;
            this.volume = volume;
            this.open = open;
            this.close = close;
            this.high = high;
            this.low = low;
        },

        /**
         * Validates the model attributes whenever a change happpen.
         * This is triggered by either explicit call or when .set() is called for the model.
         *
         * @method validate
         * @param {object} attr
         * @return {String} error message if validation fails, null otherwise.
         */
        validate: function(attr) {
            var errorPrefix = 'Bar Validation Failed: '
            // Make sure low < open,close < high
            try {
                this._compareVals(attr.low, attr.open, 'low', 'open');
                this._compareVals(attr.low, attr.close, 'low', 'close');
                this._compareVals(attr.open, attr.high, 'open', 'high');
                this._compareVals(attr.close, attr.high, 'close', 'high');

                return null;
            } catch (err) {
                return err.message;
            }
        },

        /**
         * Checks if the bar trends up or down.
         *
         * @method trendUp
         * @return {Boolean} true if close price is higher than or equal open price. false otherwise.
         */
        trendUp: function() {
            return this.close >= this.open;
        }

        /**
         * Compares two price levels to make sure they are relatively valid.
         *
         * @method _compareVals
         * @param {Number} lower
         * @param {Number} higher
         * @param {String} nameL
         * @param {String} nameH
         * @throws {Error} An Error if the prices levels are relatively invalid.
         */
        _compareVals: function(lower, higher, nameL, nameH) {
            if(higher < lower) {
                throw new Error('nameH ' + higher + ' is smaller than ' + nameL + ' ' + lower'.');
            }
        }
    });
})();