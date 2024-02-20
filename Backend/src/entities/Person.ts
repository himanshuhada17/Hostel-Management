import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
    phone: string

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
    image: string

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
    emergenyContact: string

}