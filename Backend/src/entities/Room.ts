import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
export class Room extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    ID: string

    @Field(() => String)
    @Column({
        type: 'varchar',
        unique: true
    })
    roomNumber: string

    @Field(() => String)
    @Column({
        type: 'varchar',
    })
    floor: string

    @Field()
    @Column({default: 'Available'})
    roomStatus: 'Available' | 'Occupied'
}