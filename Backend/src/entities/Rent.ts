import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@ObjectType()
@Entity()
export class Rent extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column({default: 'Unpaid'})
    status: 'Paid' | 'Unpaid'

    @Field()
    @Column()
    dueDate: Date

    @Field(() => String)
    @Column({
        type: 'varchar',
    })
    amount: string

    @Field()
    @CreateDateColumn({type: 'time with time zone'})
    createdAt: Date

    @Field()
    @UpdateDateColumn({type: 'time with time zone'})
    updatedAt: Date

}