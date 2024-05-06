import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bed } from "./Bed";
import { Rent } from "./Rent";
import { Person } from "./Person";

@ObjectType()
@Entity()
export class Room extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column({
    type: "varchar",
    unique: true,
  })
  roomNumber: string;

  @Field(() => String)
  @Column()
  floor: '1' | '2' | '3'

  @Field()
  @Column({ default: "Available" })
  roomStatus: "Available" | "Occupied";

  @Field(() => [Bed])
  @OneToMany(() => Bed, (bed) => bed.room)
  beds: Bed[];

  @Field(() => [Rent])
  @OneToMany(() => Rent, (rent) => rent.room)
  rents: Rent[];

  @Field(() => [Person])
  @OneToMany(() => Person, (person) => person.room)
  persons: Person[];
}
