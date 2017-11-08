var builder = require("botbuilder");


const greetingDialog = {
  name: "greetDialog",
  dialogs: [
    function(session, args, next) {
      session.send("Hi! This is MilEdge Assistant, How can I assist you?");
        next();
      }
  ]
};
module.exports = greetingDialog;
