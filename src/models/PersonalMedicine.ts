import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import User from "./User";
import Medicine from "./Medicine";

@Entity("personalmedicine")
class PersonalMedicine {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  medicine_id: string;

  @ManyToOne(() => Medicine)
  @JoinColumn({ name: "medicine_id" })
  medicine: Medicine;

  @Column("time")
  startedhour: string;

  @Column("time")
  intakeinterval: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default PersonalMedicine;
