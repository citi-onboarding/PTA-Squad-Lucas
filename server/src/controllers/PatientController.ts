import { Request, response, Response } from "express";
import { Citi, Crud } from "../global";

class PatientController implements Crud{
    constructor(private readonly citi = new Citi("Patient")) {}
    create = async (request: Request, response: Response) => {
    const {name,tutorName,age,species} = request.body;                               //pegando os dados do body do request
    const newPatient = {name,tutorName,age,species};                                 //criando a estrutura de dados que armazena
    const isAnyUndefined = this.citi.areValuesUndefined(                             //fazndo uso da api do citi que verifica se qualquer um desses valores nao foi passado
      name,
      tutorName,
      age,
      species
    );
    if (isAnyUndefined) return response.status(400).send();                          

    const { httpStatus, message } = await this.citi.insertIntoDatabase(newPatient);  //insert it into the db

    return response.status(httpStatus).send({ message });                            //respond to server
    };

    get = async (request: Request, response: Response)=>{
        const { httpStatus, values} = await this.citi.getAll();
        return response.status(httpStatus).send(values);
    };
    delete = async (request: Request, response: Response)=>{
        const { id } = request.params;
        const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);
        return response.status(httpStatus).send({messageFromDelete});
    };
    update = async (request:Request, response: Response)=>{
        const { id } = request.params;
        const { name, tutorName, age, species} = request.body;
        
        const updatedValues = {name,tutorName,age,species};

        const {httpStatus, messageFromUpdate} = await this.citi.updateValue(
            id,
            updatedValues
        );
        return response.status(httpStatus).send({ messageFromUpdate })
    };

    getById = async (request:Request, response: Response) => {
        const { id } = request.params;
        const {httpStatus, value} = await this.citi.findById(id)

        if(value === null) {
            return response.status(404).send({message: "Patient not found"})
        }
        
        return response.status(httpStatus).send(value)
    };
}

export default new PatientController();