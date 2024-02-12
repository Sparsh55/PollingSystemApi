import express from "express";
import OptionsController from "./options.controller.js";

const optionsRouter = express.Router();

const optionsController = new OptionsController();


optionsRouter.get("/:id/add_vote", (req, res) => {
  optionsController.addVote(req, res);
});

optionsRouter.delete("/:id/delete", (req, res) => {
  optionsController.deleteOption(req, res);
});

export default optionsRouter;
