var builder = require("botbuilder");

var Plans = require("./financialPlans");

const greetingDialog = {
  name: "greetDialog",
  dialogs: [
    function(session, args, next) {
      if (!session.userData.profile || session.userData.profile.name ===undefined) {
        session.userData.profile = {};
        session.send("Hi! What is your name?");
        session.endDialog();
      } else if (session.userData.profile.name == undefined) {
        console.log(session.userData.profile);
        session.send("Sorry I didn't get your name!");
        session.endDialog();
      } else if (session.userData.profile.name != "") {
        console.log(session.userData.profile);
        session.send("Hello " + session.userData.profile.name + "!");
        next();
      }
    },
    Plans.all.dialog
  ]
};
module.exports = greetingDialog;
