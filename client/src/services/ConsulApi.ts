import api from "./api"

interface ConsulData  {
    id: number,
    datetime: string,
    type: string,
    description: string,
    doctorName: string,
    patientId: number,
    patient: {
      id: number,
      name: string,
      tutorName: string,
      age: number,
      species: string,
    }}


export async function getAllConsul() {
    const response = await api.get('/consultation');
    return response.data as ConsulData[]
}

export async function getConsulById(id: number) {
  const response = await api.get(`/consultation/${id}`);
  return response.data;
}

export async function getHistById(id: number) {
    const response = await api.get(`/consultation/patient/${id}`)
    return response.data as  ConsulData[]
}

export async function createConsul(data: Omit<ConsulData, "id">) {
    const response = await api.post("/consultation")
    return response.data
}