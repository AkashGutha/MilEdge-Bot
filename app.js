//=================================================
//Main app all componts are integrated here
//~@BhomitB
//==================================================

//==================================================
//Importing Modules
//==================================================

//Initiate Bot
var builder = require("botbuilder");
var botsetup = require("./src/botSetup");
var bot = botsetup.bot;
var intents = botsetup.intents; //Define intents from luis model

console.log(process.env.MICROSOFT_APP_PASSWORD)

//Import Dialogs
var Greeting = require("./resources/Dialogs/Greetings");
var Help = require("./resources/Dialogs/Help");
var Profile = require("./resources/Dialogs/profile");
var Clear = require("./resources/Dialogs/DeleteData");
var plans = require("./resources/Dialogs/financialPlans");

//==================================================
//Initiates dialog by matching recognized intent
//==================================================

//Clear User Data
intents.matches("ClearData", Clear.dialogs);

intents.matches("Greeting", Greeting.dialogs);

intents.matches("identity", Profile.dialogs);

intents.matches("Retirement", plans.retirement.dialogs);

intents.matches("Wedding", plans.wedding.dialogs);

intents.matches("Personal", plans.personal.dialogs);

intents.matches("Education", plans.education.dialogs);

intents.onDefault(Help.dialogs);

//Routes bot dialogs to specific intent dialogs
bot.dialog("/", intents);
