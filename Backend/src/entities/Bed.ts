import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Rent } from "./Rent";
import { Room } from "./Room";
import { Person } from "./Person";

@ObjectType()
@Entity()
export class Bed extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field(() => String)
    @Column({
        type: 'varchar',
        unique: true
    })
    bedNumber: string

    @Field()
    @Column({default: 'Available'})
    status: 'Available' | 'Occupied'

    @Field(() => String)
    @Column({
        type: 'varchar',
    })
    amount: string

    @Field(() => [Rent])
    @OneToMany(() => Rent, rent => rent.bed)
    rents: Rent[]

    @Field(() => String)
    @Column({type: 'varchar'})
    roomId: string

    @Field(() => Room)
    @ManyToOne(() => Room,room => room.beds)
    room: Room

    @Field(() => Person)
    @OneToOne(() => Person,person => person.bed)
    person: Person
}