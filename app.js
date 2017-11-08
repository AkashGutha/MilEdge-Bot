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
var Dress = require("./resources/Dialogs/Dress");

//==================================================
//Initiates dialog by matching recognized intent
//==================================================

//Clear User Data
intents.matches("Greeting", Greeting.dialogs);
intents.matches("Dress", Dress.dialogs);


//Routes bot dialogs to specific intent dialogs
bot.dialog("/", intents);
