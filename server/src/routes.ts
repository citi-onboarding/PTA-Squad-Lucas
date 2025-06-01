import express from "express";
import userController from "./controllers/UserController";
import patientController from "./controllers/PatientController";
import ConsultController from "./controllers/ConsultController";


const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);


routes.post("/patient",patientController.create);
routes.get("/patient", patientController.get);
routes.get("/patient/:id",patientController.getById);
routes.delete("/patient/:id",patientController.delete);
routes.patch("/patient/:id",patientController.update);

routes.get("/", (req, res) => {
  res.status(200).send("Location Metrics Endpoint");
});

routes.post("/consultation", ConsultController.create);
routes.get("/consultation", ConsultController.getAllConsultations);
routes.get("/consultation/:id", ConsultController.getConsultationById);
routes.get("/consultations/patient/:id", ConsultController.getConsultationByPatientId);
routes.get("/consultations/doctor/:name", ConsultController.getConsultationByDoctorName);
routes.put("/consultations/:id", ConsultController.updateConsultation);
routes.delete("/consultations/:id", ConsultController.deleteConsultation);

export default routes;