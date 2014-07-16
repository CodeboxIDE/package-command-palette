define([
    "src/views/commands",
    "text!src/templates/palette.html"
], function(Commands, template) {
    var hr = codebox.require("hr/hr");

    var Palette = hr.View.extend({
        template: template
    });

    return Palette;
});