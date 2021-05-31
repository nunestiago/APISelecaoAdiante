import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctors')
export default class Doctor {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  crm: number;

  @Column()
  phone: number;

  @Column()
  cellphone: number;

  @Column()
  cep: number;

  @Column()
  specialities: string;
}
