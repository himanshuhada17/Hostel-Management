import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./Person";
import { TypeormLoader } from "type-graphql-dataloader";

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
    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date

    @Field()
    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date

    @Field(() => String)
    @Column({type: 'varchar'})
    personId: string

    @Field(() => Person)
    // @TypeormLoader()
    @ManyToOne(() => Person, person => person.rents,{
        onDelete: 'CASCADE'

    })
    person: Person

}