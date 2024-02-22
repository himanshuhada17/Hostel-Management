import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./Person";
// import { TypeormLoader } from "type-graphql-dataloader";
import { Bed } from "./Bed";
import { Room } from "./Room";

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

    @Field(() => String)
    @Column({type: 'varchar'})
    bedId: string

    @Field(() => Bed)
    @ManyToOne(() => Bed,bed => bed.rents)
    bed: Bed

    @Field(() => String)
    @Column({type: 'varchar'})
    roomId: string

    @Field(() => Room)
    @ManyToOne(() => Room,room => room.rents)
    room: Room
}