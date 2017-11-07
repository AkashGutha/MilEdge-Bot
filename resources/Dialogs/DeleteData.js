var builder = require("botbuilder");

const clearDataDialog = {
  name: "clearDataDialog",
  dialogs: [
    function(session, args, next) {
      session.endDialog("All data cleared! it's a fresh start now");
      session.userData = {};
    }
  ]
};
module.exports = clearDataDialog;
