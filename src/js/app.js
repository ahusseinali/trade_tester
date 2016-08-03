var app = app || {};

(function() {
    'use strict';
    new app.view.ChartView({model: new app.collection.Chart()});
})();