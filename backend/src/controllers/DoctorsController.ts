import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Doctor from '../models/Doctor';
import doctorView from '../views/doctors_view';
import * as Yup from 'yup';

export default {
  async create(req: Request, res: Response) {
    const { name, crm, phone, cellphone, cep, specialities } = req.body;

    const doctorRepository = getRepository(Doctor);

    const data = {
      name,
      crm,
      phone,
      cellphone,
      cep,
      specialities,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required().max(120),
      crm: Yup.number().required(),
      phone: Yup.number().required(),
      cellphone: Yup.number().required(),
      cep: Yup.number().required(),
      specialities: Yup.array(
        Yup.object().shape({
          specialty: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const doctor = doctorRepository.create(data);

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
