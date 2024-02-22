import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rent } from "./Rent";
import { Room } from "./Room";

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

    @Field(() => [Rent])
    @OneToMany(() => Rent, rent => rent.bed)
    rents: Rent[]

    @Field(() => String)
    @Column({type: 'varchar'})
    roomId: string

    @Field(() => Room)
    @ManyToOne(() => Room,room => room.beds)
    room: Room
}