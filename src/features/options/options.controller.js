import OptionsRepository from "./options.repository.js";

export default class OptionsController{

    constructor(){
        this.optionsRepository = new OptionsRepository();
    }


    async addVote(req, res) {
        try {

            const id = req.params.id;

            const option = await this.optionsRepository.findOptionById(id);

            if(!option){
                return res.status(404).send('Option not found');
            }

            const vote = await this.optionsRepository.vote(id);

            if(vote){
                return res.status(201).send('Vote added successfully');
            }else{
                return res.status(500).send('Something went wrong');
            }

            
        } catch (error) {
            console.log(error);
        }
    }

    async deleteOption(req, res){
        try {

            const id = req.params.id;

            const option = await this.optionsRepository.findOptionById(id);

            if(!option){
                return res.status(404).send('Option not found');
            }

            if(option.votes > 0){
                return res.status(403).send("You can't remove an option with votes");
            }

            const result = await this.optionsRepository.delete(id);

            if(result){
                return res.status(201).send('Option deleted successfully');
            }else{
                return res.status(500).send('Something went wrong');
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}