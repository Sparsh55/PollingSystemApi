import mongoose from "mongoose";
import questionSchema from "./questions.schema.js";
import optionSchema from "../options/options.schema.js";

const QuestionModel = mongoose.model("Question", questionSchema);
const OptionModel = mongoose.model("Option", optionSchema);

export default class QuestionsRepository{

    async add(question){
        try {
            const newQuestion = new QuestionModel(question);
            return await  newQuestion.save();
        } catch (error) {
            console.log(error);
        }
    }

    async addOption(option){
        try {
            let question = await QuestionModel.findById(option.questionId);
            if(!question){
                return;
            }
            
            const newOption = new OptionModel(option);
            const result = await  newOption.save();
            await QuestionModel.findByIdAndUpdate(option.questionId, {$push: {"options": result._id}});
            return result;
            
        } catch (error) {
            console.log(error);
        }
    }

    async findQuestionById(id){
        try {
            return await QuestionModel.findById(id);
            
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){
        try {
            return await QuestionModel.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }

    async view(id){
        try {

            const question = await QuestionModel.findById(id).populate({ path: 'options', select: 'text votes link_to_vote' });

            return question;

            
        } catch (error) {
            console.log(error);
        }
    }
    
}