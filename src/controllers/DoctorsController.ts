import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Doctor from '../models/Doctor';
import doctorView from '../views/doctors_view';

export default {
  async create(req: Request, res: Response) {
    const { name, crm, phone, cellphone, cep, specialities } = req.body;

    const doctorRepository = getRepository(Doctor);

    const doctor = doctorRepository.create({
      name,
      crm,
      phone,
      cellphone,
      cep,
      specialities,
    });

    await doctorRepository.save(doctor);

    res.status(201).json(doctor);
  },

  async index(req: Request, res: Response) {
    const doctorRepository = getRepository(Doctor);

    const doctors = await doctorRepository.find();
    return res.status(200).json(doctorView.renderMany(doctors));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const doctorRepository = getRepository(Doctor);

    const doctor = await doctorRepository.findOneOrFail(id);
    return res.status(200).json(doctorView.render(doctor));
  },
};
