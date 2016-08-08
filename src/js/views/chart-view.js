var app = app || {};
app.view = app.view || {};

(function() {
    'use strict';

    /**
     * Chart View. It contains list of bars rendering functionality.
     *
     * @class ChartView
     * @constructor
     */
    app.view.ChartView = Backbone.View.extend({
        /**
         * Define el as the main div where chart bars will be displayed
         */
         el: '.chart',

        /**
         * Define the events that will get triggered in the chart
         */
        events: {
            // TODO: define these DOM elements and properly trigger the events
            'click .set-color': 'changeColors',
            'click .chart-type': 'changeChart'
        },

        /**
         * Initialize a new instance of ChartView class.
         * It binds any change that happens to the model to trigger the render function.
         *
         * @method initialize
         * @param {Object} options
         */
        initialize: function(options) {
            this.options = {};
            this.changeColor({stroke: '#000', up: '#00f', down: '#f00'});
            this.changeChart((options && options.chartType) ? options.chartType : 'candlestick');
            this.model.bind('change', _.bind(this.render, this));
            this.model.bind('add', _.bind(this.render, this));
            this.model.bind('remove', _.bind(this.render, this));
            this.model.loadAllData();
        },

        /**
         * Render the chart bars.
         * This method triggers the render function of all underlying Bar Views.
         *
         * @method render
         */
        render: function() {
            console.log('render fired');
            this.$el.html('');
            this.model.forEach(function(model) {
                // Create BarView for each bar and assign bar to be its model.
                var barView = new app.view.BarView({model: model});
                this.$el.append(barView.render(this.options).el);
            }, this);
        },

        /**
         * Changes the colors used for stroke, Up trend, Down trend.
         * This method triggers the render function after color options have changed.
         *
         * @method render
         * @param {Object} colors
         */
        changeColor : function(colors, render) {
            this.options.stroke = colors.stroke || this.options.stroke;
            this.options.up = colors.up || this.options.up;
            this.options.down = colors.down || this.options.down;
            if(render) {
                this.render();
            }
        },

        /**
         * Changes the chart type.
         * This method triggers the render function after chart type has changed.
         *
         * @method render
         * @param {Object} colors
         */
        changeChart : function(chartType, render) {
            // TODO: Make Builder parameters dynamic (based on underlying Bar List data);
            var builder = app.utils.PathBuilderFactory.getBuilder(chartType);
            // Get Window dimensions and consume only 90% of it.
            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            w *= 0.9;
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            h *= 0.9;
            this.options.pathBuilder =
                new builder(new paper.Point(0,0), new paper.Point(w,h),
                    new Date("2015-03-25T08:00:00"),
                    new Date("2015-03-25T12:00:00"),
                    1.1002,1.1073);
            if(render) {
                this.render();
            }

        }
    });
})();