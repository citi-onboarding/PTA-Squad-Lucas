import { Request, Response } from "express";
import { Citi, Crud } from "../global";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ConsultController implements Crud {
    constructor(private readonly citi = new Citi("Consultation")) {}

    create = async (request: Request, response: Response) => {
        const { datetime, type, description, doctorName, patientId } = request.body;

        if (!datetime || !type || !description || !doctorName || !patientId) {
            return response.status(400).send({ error: "Campos obrigatórios ausentes." });
        }

        const patient = await new Citi("Patient").findById(patientId);
        if (!patient.value) {
            return response.status(404).send({ error: "Paciente não encontrado." });
        }

        const newConsult = {
            datetime: new Date(datetime),
            type,
            description,
            doctorName,
            patientId: Number(patientId)
        };

        try {
            const result = await this.citi.insertIntoDatabase(newConsult);
            return response.status(result.httpStatus).send({ message: result.message });
        } catch (error) {
            console.error(error);
            return response.status(500).send({ error: "Erro ao criar consulta." });
        }
    };

    getAllConsultations = async (_: Request, response: Response) => {
        try {
            const result = await prisma.consultation.findMany({
                include: { patient: true }
            });
            return response.status(200).send(result);
        } catch (error) {
            return response.status(500).send({ error: "Erro ao buscar consultas" });
        }
    };

    getConsultationById = async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            const result = await prisma.consultation.findUnique({
                where: { id: Number(id) },
                include: { patient: true }
            });
            if (!result) {
                return response.status(404).send({ error: "Consulta não encontrada" });
            }
            return response.status(200).send(result);
        } catch (error) {
            return response.status(500).send({ error: "Erro ao buscar consulta" });
        }
    };

    getConsultationByPatientId = async (request: Request, response: Response) => {
        const { patientId } = request.params;
        try {
            const result = await prisma.consultation.findMany({
                where: { patientId: Number(patientId) },
                include: { patient: true }
            });
            if (result.length === 0) {
                return response.status(404).send({ error: "Nenhuma consulta encontrada para este paciente" });
            }
            return response.status(200).send(result);
        } catch (error) {
            console.error(error);
            return response.status(500).send({ error: "Erro ao buscar consultas do paciente" });
        }
    };

    getConsultationByDoctorName = async (request: Request, response: Response) => {
        const { doctorName } = request.params;
        try {
            const result = await prisma.consultation.findMany({
                where: { doctorName: { contains: doctorName, mode: 'insensitive' } },
                include: { patient: true }
            });

            if (result.length === 0) {
                return response.status(404).send({ error: "Nenhuma consulta encontrada para este médico" });
            }
            return response.status(200).send(result);
        } catch (error) {
            return response.status(500).send({ error: "Erro ao buscar consultas do médico" });
        }
    };

    deleteConsultation = async (request: Request, response: Response) => {
        const { id } = request.params;

        try {
            const existingConsult = await prisma.consultation.findUnique({
                where: { id: Number(id) }
            });

            if (!existingConsult) {
                return response.status(404).send({ error: "Consulta não encontrada" });
            }

            await prisma.consultation.delete({
                where: { id: Number(id) }
            });

            return response.status(200).send({ message: "Consulta deletada com sucesso" });
        } catch (error) {
            return response.status(500).send({ error: "Erro ao deletar consulta" });
        }
    };

    updateConsultation = async (request: Request, response: Response) => {
        const { id } = request.params;
        const { datetime, type, description, doctorName, patientId } = request.body;

        if (!datetime || !type || !description || !doctorName || !patientId) {
            return response.status(400).send({ error: "Campos obrigatórios ausentes." });
        }

        try {
            const existingConsult = await prisma.consultation.findUnique({
                where: { id: Number(id) }
            });

            if (!existingConsult) {
                return response.status(404).send({ error: "Consulta não encontrada" });
            }

            const updatedConsult = await prisma.consultation.update({
                where: { id: Number(id) },
                data: {
                    datetime: new Date(datetime),
                    type,
                    description,
                    doctorName,
                    patientId: Number(patientId)
                }
            });

            return response.status(200).send(updatedConsult);
        } catch (error) {
            return response.status(500).send({ error: "Erro ao atualizar consulta" });
        }
    };
}

export default new ConsultController();
