var app = app || {};
app.view = app.view || {};

(function() {
    'use strict';

    app.view.BarView = Backbone.View.extend({
        tagName: 'svg',

        events: {

        },

        initialize: function(options) {
            this.options = options || {};
            this.path = null;
        },

        render: function() {
            // Trick to append SVG Path Element into jquery selector.
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttributeNS(null, 'd', this.options.pathBuilder.getBar(this.model));
            this.path = path;
            this.changeColor();
            this.$el.html(this.path);
        }

        changeColor: function() {
            var strokeColor = this.options.stroke;
            var fillUpColor = this.options.upColor;
            var fillDownColor = this.options.downColor;
            this.path.setAttributeNS(null, 'stroke', strokeColor);
            this.path.setAttributeNS(null, 'fill', this.model.trendUp() ? this.options.upColor : this.options.downColor);
        }
    })
})();