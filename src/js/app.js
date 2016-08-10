var app = app || {};

(function() {
    'use strict';
    var chart = new app.collection.ChartData();
    new app.view.ChartView({model: chart});
    chart.loadAllData();
})();