import Doctor from '../models/Doctor';

export default {
  render(doctor: Doctor) {
    return {
      name: doctor.name,
      crm: doctor.crm,
      phone: doctor.phone,
      cellphone: doctor.cellphone,
      cep: doctor.cep,
      specialities: doctor.specialities,
    };
  },
  renderMany(doctors: Doctor[]) {
    return doctors.map((doctor) => this.render(doctor));
  },
};
