import express from "express";
import QuestionsController from "./questions.controller.js";

const questionsRouter = express.Router();

const questionsController = new QuestionsController();

questionsRouter.get("/:id", (req, res) => {
    questionsController.viewQuestion(req,res);
})

questionsRouter.post("/create", (req, res) => {
    questionsController.createQuestion(req,res);
})

questionsRouter.post("/:id/options/create", (req, res) => {
    questionsController.createOption(req,res);
})

questionsRouter.delete("/:id/delete", (req, res) => {
    questionsController.deleteQuestion(req,res);
})

export default questionsRouter;  