define(function() {
    var hr = codebox.require("hr/hr");

    var Command = hr.List.Item.extend({

    });

    var Commands = hr.List.extend({
        Item: Command
    });

    return Commands;
});