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
         * Initializes the collection with dummy data
         *
         * @method initialize
         */
        initialize: function() {
        },

        /**
         * Loads Chart data from server. This will be 1 minute chart data.
         *
         * @method loadAllData
         */
        loadAllData: function() {
            // Assume some random values for now.
            // TODO: Load real data from server.
            this.add(new app.model.Bar(
                new Date("2015-03-25T08:00:00"), 15, 1.1045, 1.1065, 1.1070, 1.1022));
            this.add(new app.model.Bar(
                new Date("2015-03-25T09:00:00"), 45, 1.1065, 1.1070, 1.1073, 1.1055));
            this.add(new app.model.Bar(
                new Date("2015-03-25T10:00:00"), 40, 1.1070, 1.1025, 1.1070, 1.1005));
            this.add(new app.model.Bar(
                new Date("2015-03-25T11:00:00"), 30, 1.1025, 1.1007, 1.1030, 1.0987));
            this.add(new app.model.Bar(
                new Date("2015-03-25T12:00:00"), 25, 1.1007, 1.1045, 1.1060, 1.1002));
            this.add(new app.model.Bar(
                new Date("2015-03-25T13:00:00"), 12, 1.1070, 1.1074, 1.1090, 1.1069));
            this.add(new app.model.Bar(
                new Date("2015-03-25T14:00:00"), 35, 1.1074, 1.1084, 1.1084, 1.1073));
            this.add(new app.model.Bar(
                new Date("2015-03-25T15:00:00"), 30, 1.1084, 1.1078, 1.1087, 1.1075));
            this.add(new app.model.Bar(
                new Date("2015-03-25T16:00:00"), 23, 1.1080, 1.1097, 1.1099, 1.1076));
            this.add(new app.model.Bar(
                new Date("2015-03-25T17:00:00"), 10, 1.1097, 1.1102, 1.1105, 1.1094));
            this.add(new app.model.Bar(
                new Date("2015-03-25T18:00:00"), 12, 1.1102, 1.1098, 1.1097, 1.1103));
            this.add(new app.model.Bar(
                new Date("2015-03-25T19:00:00"), 17, 1.1098, 1.1099, 1.1098, 1.1101));
            this.add(new app.model.Bar(
                new Date("2015-03-25T20:00:00"), 21, 1.1099, 1.1108, 1.1099, 1.1108));
            this.add(new app.model.Bar(
                new Date("2015-03-25T12:00:00"), 25, 1.1108, 1.1105, 1.1110, 1.1104));
        }
    });
})();
