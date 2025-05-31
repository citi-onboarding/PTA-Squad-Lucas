import { Request, response, Response } from "express";
import { Citi, Crud } from "../global";
import { time } from "console";

class ConsultController implements Crud{
    constructor(private readonly citi = new Citi("Consultation")) {}
    create = async (request: Request, response: Response) => {
    const { datetime, type, description, doctorName, patientId } = request.body;

    // Verifica se o paciente existe
    const consult = await new Citi("Consultation").findById(patientId);
    if (consult.value) {
        return response.status(404).send({ error: "Consulta já criada!" });
    }
    const NewConsult = {datetime, type, description, doctorName, patientId}
    const result = await this.citi.insertIntoDatabase({NewConsult});

    return response.status(result.httpStatus).send({ message: result.message });
}

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