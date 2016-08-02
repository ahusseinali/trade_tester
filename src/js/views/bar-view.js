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
            var xmlns = "http://www.w3.org/2000/svg";
            // Trick to append SVG Path Element into jquery selector.
            var g = document.createElementNS(xmlns, 'g');
            var path = document.createElementNS(xmlns, 'path');
            path.setAttributeNS(null, 'd', this.options.pathBuilder.getBar(this.model));
            this.path = path;
            this.changeColor();
            g.appendChild(path);
            this.$el.html(g);
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