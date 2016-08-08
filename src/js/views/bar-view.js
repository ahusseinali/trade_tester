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
        events: {

        },

        /**
         * Initialize a new instance of BarView class.
         * It binds any change that happens to the model to trigger the render function.
         *
         * @method initialize
         */
        initialize: function() {
            this.el = this.make('svg');
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
            // Trick to append SVG Path Element into jquery selector.
            var path = this.make('path', {
                d: options.pathBuilder.getBar(this.model),
                stroke: options.stroke,
                fill: this.model.trendUp() ? options.up : options.down
            });
            this.el.appendChild(path);
            return this;
        },

        /**
         * Custom make method needed as backbone does not support creation of
         * namespaced HTML elements.
         *
         * @method makeElement
         * @param {String} tagName
         * @param {Object} attributes
         * @param {String} content
         */
        make: function(tagName, attributes, content) {
            console.log("make is fired for " + tagName);
            var el = document.createElementNS('http://www.w3.org/2000/svg', tagName);
            if (attributes) $(el).attr(attributes);
            if (content) $(el).html(content);
            return el;
        }
    });
})();