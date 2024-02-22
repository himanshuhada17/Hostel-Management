import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rent } from "./Rent";
import { Room } from "./Room";
// import { TypeormLoader } from "type-graphql-dataloader";

@ObjectType()
@Entity()
export class Person extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field(() => String)
    @Column({
        type: 'varchar'
    })
    name: string

    @Field(() => String,{nullable: true})
    @Column({
        type: 'varchar',
        nullable: true
    })
    phone?: string

    @Field(() => String)
    @Column({
        type: 'varchar',
        unique: true
    })
    email: string

    @Field(() => String,{nullable: true})
    @Column({
        type: 'varchar',
        nullable: true
    })
    image?: string

    @Field()
    @Column({default: 'Aadhar'})
    idProof:  'Aadhar' | 'VoterID' | 'Passport' | 'DrivingLicense'

    @Field(() => String)
    @Column({type: 'varchar',unique: true})
    idNumber: string

    @Field(() => String,{nullable: true})
    @Column({
        type: 'varchar',
        nullable: true
    })
    emergenyContact?: string


    @Field(() => [Rent],{nullable: true})
    // @TypeormLoader()
    @OneToMany(() => Rent, rent => rent.person,
    )
    rents?: Rent[]

    @Field(() => String)
    @Column({type: 'varchar'})
    roomId: string
    
    @Field(() => Room)
    @ManyToOne(() => Room,room => room.persons)
    room: Room
}
