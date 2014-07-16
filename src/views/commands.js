define([
    "text!src/templates/command.html"
], function(template) {
    var hr = codebox.require("hr/hr");

    var Command = hr.List.Item.extend({
        template: template,
        templateContext: function() {
            return {
                command: this.model
            };
        }
    });

    var Commands = hr.List.extend({
        Item: Command
    });

    return Commands;
});