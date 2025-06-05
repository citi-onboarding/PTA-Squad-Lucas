import { Request, response, Response } from "express";
import { Citi, Crud } from "../global";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

    search = async (request: Request, response: Response) => {
        console.log("Searching for patient...");
        const { name, tutorName, age, species } = request.query;
        console.log(name, tutorName, age, species);

        if (!name || !tutorName || !age || !species) {
            return response.status(400).send({ message: "Parâmetros incompletos" });
        }

        const existingPatient = await prisma.patient.findUnique({
            where: {
            name: String(name),
            tutorName: String(tutorName),
            age: Number(age),
            species: String(species) as any
            }
        });

        if (!existingPatient) {
            return response.status(404).send({ message: "Paciente não encontrado" });
        }

        return response.status(200).send(existingPatient);
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