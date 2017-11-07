var builder = require("botbuilder");

//Import regex functions
var regexFunc = require("../regexFx");
var PlanCards = require("./../Cards/PlansAdapticeCard");

//All plan dialog
const allPlans = {
  name: "allPlans",
  dialog: function(session) {
    session.send(
      "What can I help you plan ? \n You can choose one of the following and I will use my futuristic intelligence to help you build a plan which will help you achieve your goals."
    );
    var msg = new builder.Message(session).addAttachment(PlanCards.allActions);
    session.send(msg);
    session.endDialog();
  }
};

//Retirement plans
const retirePlanDialog = {
  name: "retireDialog",
  dialogs: [
    function(session) {
      session.userData.profile.plan = "retirement";
      builder.Prompts.text(
        session,
        "After how long are you planning to retire ? (in months)"
      );
    },
    function(session, results) {
      var timeFrame = regexFunc.extractnumbers(results.response);
      var timeFrame = Number(timeFrame);
      if (timeFrame.isNan) {
        builder.Prompts.text(session, "Please enter a number");
      } else {
        session.userData.profile.timeFrame = timeFrame;
        console.log(session.userData.profile);
        session.send("Building plan that suits your profile......");
        sendDoc(session);
      }
    }
  ]
};
//Education plans
const eduPlanDialog = {
  name: "eduPlanDialog",
  dialogs: [
    function(session) {
      session.userData.profile.plan = "education";
      builder.Prompts.text(
        session,
        "After how long are you planning to pursue you education ? (in months)"
      );
    },
    function(session, results) {
      var timeFrame = regexFunc.extractnumbers(results.response);
      session.userData.profile.timeFrame = timeFrame;
      console.log(session.userData.profile);
      session.send("Building plan that suits your profile......");
      sendDoc(session);
    }
  ]
};
//Wedding plans
const wedPlanDialog = {
  name: "wedPlanDialog",
  dialogs: [
    function(session) {
      session.userData.profile.plan = "wedding";
      builder.Prompts.text(session, "When is the wedding ? (in months)");
    },
    function(session, results) {
      var timeFrame = regexFunc.extractnumbers(results.response);
      session.userData.profile.timeFrame = timeFrame;
      console.log(session.userData.profile);
      session.send("Building plan that suits your profile......");
      sendDoc(session);
    }
  ]
};
//Personal plans
const perPlanDialog = {
  name: "perPlanDialog",
  dialogs: [
    function(session) {
      session.userData.profile.plan = "personal";
      let text = builder.Prompts.text(
        session,
        "After how long are you planning to liquidate the assets ? (in months)"
      );
      session.send(text);
    },
    function(session, results) {
      var timeFrame = regexFunc.extractnumbers(results.response);
      session.userData.profile.timeFrame = timeFrame;
      console.log(session.userData.profile);
      session.send("Building plan that suits your profile......");
      sendDoc(session);
    }
  ]
};

function sendDoc(session) {
  var msg = new builder.Message(session).addAttachment(
    PlanCards.getPersonalizedDoc
  );
  session.send(msg);

  session.endDialog();
}
module.exports = {
  all: allPlans,
  retirement: retirePlanDialog,
  wedding: wedPlanDialog,
  personal: perPlanDialog,
  education: eduPlanDialog
};
