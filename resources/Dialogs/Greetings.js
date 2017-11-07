var builder = require("botbuilder");


const greetingDialog = {
  name: "greetDialog",
  dialogs: [
    function(session, args, next) {
      session.send("hello");
        next();
      }
  ]
};
module.exports = greetingDialog;
