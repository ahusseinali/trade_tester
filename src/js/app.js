var app = app || {};

(function() {
    'use strict';
    var chart = new app.collection.Chart();
    new app.view.ChartView({model: chart});
    chart.loadAllData();
})();