import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

}