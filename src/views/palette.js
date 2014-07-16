define([
    "src/views/commands",
    "text!src/templates/palette.html"
], function(Commands, template) {
    var hr = codebox.require("hr/hr");
    var commands = codebox.require("core/commands");

    var Palette = hr.View.extend({
        template: template,

        initialize: function() {
            Palette.__super__.initialize.apply(this, arguments);

            this.commands = new Commands({
                collection: commands
            });
        },

        render: function() {
            this.commands.detach();

            return Palette.__super__.render.apply(this, arguments);
        },

        finish: function() {
            this.commands.$el.appendTo(this.$(".content"));

            return Palette.__super__.finish.apply(this, arguments);
        }
    });

    return Palette;
});