var builder = require("botbuilder");


const dressDialog = {
  name: "dressDialog",
  dialogs: [
    function(session, args, next) {
      session.send("What is your preferred color?");
        next();
      }
  ]
};
module.exports = dressDialog;
