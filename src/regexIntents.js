var builder = require("botbuilder");

function regexBuilder(object, express) {
  return new builder.RegExpRecognizer(object, express);
}

var clearDataRecognizer = regexBuilder("ClearData", /^ClearData$/i);

var retirementPlanRecognizer = regexBuilder(
  "Retirement",
  /^retirement plans$/i
);

var weddingPlanRecognizer = regexBuilder("Wedding", /^wedding plans$/i);

var personalPlanRecognizer = regexBuilder("Personal", /^personal plans$/i);

var educationPlanRecognizer = regexBuilder("Education", /^education plans$/i);

module.exports = {
  clearDataRegex: clearDataRecognizer,
  retirementRegex: retirementPlanRecognizer,
  weddingRegex: weddingPlanRecognizer,
  personalRegex: personalPlanRecognizer,
  educationRegex: educationPlanRecognizer
};
