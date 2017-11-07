//Profile builder module which generates user profile and stores in user data
//~@BhomitB

var builder = require("botbuilder");

//Import financial plans dialog
var Plans = require("./financialPlans");

const profileDialog = {
  name: "profileDialog",
  dialogs: [
    function(session, args, next) {
      if (session.userData.profile === undefined) {
        session.userData.profile = {};
      }
      if (session.userData.profile.name === undefined) {
        console.log(args);
        var nameEntity = builder.EntityRecognizer.findEntity(
          args.entities,
          "Username"
        );

        if (nameEntity) {
          //If name entity is not null, and no user name is stored and entity is not undefined
          session.userData.profile.name = nameEntity.entity;
          session.send(
            "Welcome %s, \n Immersive Portfolio Bot helps you build a smarter future.",
            session.userData.profile.name
          );
          next();
        } else if (nameEntity == session.userData.profile.name) {
          session.send(
            "Welcome %s, Immersive Portfolio Bot helps you build a smarter future.",
            session.userData.profile.name
          );
          next();
        } else {
          session.endDialog("Sorry i didn't get that. CAn you try again?");
        }
      } else if (session.userData.profile.name) {
        var diffNameEntity = builder.EntityRecognizer.findEntity(
          args.entities,
          "Username"
        );
        if (diffNameEntity.entity === session.userData.profile.name) {
          session.send(
            "Welcome %s, Immersive Portfolio Bot helps you build a smarter future.",
            session.userData.profile.name
          );
          next();
        } else {
          session.endDialog(
            "Currently logged in as  %s, to switch profiles try 'Switch Profile'",
            session.userData.profile.name,
            diffNameEntity.entity
          );
        }
      }
      session.endDialog("");
    },
    Plans.all.dialog
  ]
};
module.exports = profileDialog;
