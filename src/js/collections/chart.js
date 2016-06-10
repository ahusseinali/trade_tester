var app = app || {};
app.collection = app.collection || {};

(function() {
    'use strict';

    /**
    * Chart Collection. It contains methods to load chart data, Event handlers for any
    * setting change, List of Bars to be displayed
    *
    * @class Chart
    * @constructor
    */
    app.collection.Chart = Backbone.Collection.extend({
        model: app.model.Bar,

        /**
         * Loads Chart data from server. This will be 1 minute chart data.
         *
         */
        loadAllData: function() {
            // Assume some random values for now.
            // TODO: Load real data from server.
            this.add(new app.model.Bar(
                new Date("2015-03-25T12:00:00"), 25, 1.1007, 1.1045, 1.1060, 1.1002));
            this.add(new app.model.Bar(
                new Date("2015-03-25T11:00:00"), 30, 1.1025, 1.1007, 1.1030, 1.0987));
            this.add(new app.model.Bar(
                new Date("2015-03-25T10:00:00"), 40, 1.1070, 1.1025, 1.1070, 1.1005));
        }
    });
})();
