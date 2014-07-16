define([
    "src/views/palette"
], function(Palette) {
    var commands = codebox.require("core/commands");
    var dialogs = codebox.require("utils/dialogs");

    commands.register({
        id: "palette.open",
        title: "Open Command Palette",
        shortcuts: [
            "mod+shift+p"
        ],
        run: function() {
            return dialogs.open(Palette);
        }
    });
});