const phasesRouter = require("express").Router();
const {
  MenstrualPhaseSuggestions,
  FollicularPhaseSuggestions,
  OvulatoryPhaseSuggestions,
} = require("../db/index");

// returns an array with one object with suggestions as keys including food, fitness, and personal development
phasesRouter.get("/:phase", async (req, res, next) => {
  try {
    let allSuggestions;
    const { phase } = req.params;
    if (phase === "menstrual") {
      allSuggestions = await MenstrualPhaseSuggestions.findAll();
      res.send(allSuggestions);
    } else if (phase === "follicular") {
      allSuggestions = await FollicularPhaseSuggestions.findAll();
      res.send(allSuggestions);
    } else if (phase === "ovulatory") {
      allSuggestions = await OvulatoryPhaseSuggestions.findAll();
      res.send(allSuggestions);
    } else {
      // return luteal phase suggestions
    }
    res.send(allSuggestions);
  } catch (error) {
    next(error);
  }
});

// returns an object with requested suggestions
phasesRouter.get("/:phase/:suggestionType", async (req, res, next) => {
  try {
    let suggestion;
    const { phase, suggestionType } = req.params;
    if (phase === "menstrual") {
      suggestion = await MenstrualPhaseSuggestions.findOne({
        attributes: [suggestionType],
      });
      res.send(suggestion);
    } else if (phase === "follicular") {
      const allSuggestions = await FollicularPhaseSuggestions.findOne({
        attributes: [suggestionType],
      });
      res.send(allSuggestions);
    } else if (phase === "ovulatory") {
      const allSuggestions = await OvulatoryPhaseSuggestions.findOne({
        attributes: [suggestionType],
      });
      res.send(allSuggestions);
    } else {
      // return luteal phase suggestions
    }
    res.send(suggestion);
  } catch (error) {
    next(error);
  }
});

module.exports = phasesRouter;
