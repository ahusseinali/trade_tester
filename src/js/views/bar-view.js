var app = app || {};
app.view = app.view || {};

(function() {
    'use strict';

    /**
     * Bar View. It contains single bar rendering functionality.
     *
     * @class BarView
     * @constructor
     */
    app.view.BarView = Backbone.View.extend({
        tagName: 'svg',

        events: {

        },

        /**
         * Initialize a new instance of BarView class.
         * It binds any change that happens to the model to trigger the render function.
         *
         * @method initialize
         */
        initialize: function() {
            this.model.bind('change', _.bind(this.render, this));
        },

        /**
         * Render the bar information into an SVG element.
         * This method uses a pathbuilder utility to get SVG Path for a single bar.
         * It then creates a path element and append it the view tag ('svg');
         *
         * @method render
         * @param {Object} options
         */
        render: function(options) {
            var xmlns = "http://www.w3.org/2000/svg";
            // Trick to append SVG Path Element into jquery selector.
            var g = document.createElementNS(xmlns, 'g');
            var path = document.createElementNS(xmlns, 'path');
            path.setAttributeNS(null, 'd', options.pathBuilder.getBar(this.model));
            path.setAttributeNS(null, 'stroke', options.stroke);
            path.setAttributeNS(null, 'fill', this.model.trendUp() ? options.up : options.down);
            this.path = path;
            g.appendChild(path);
            this.$el.html(g);
            return this;
        }
    })
})();