import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity({name: 'user'})
export class User extends BaseEntity{
    @Field(() => ID)  
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String)
    @Column({
        type: 'varchar',
    })
    firstName: string;

    @Field(() => String)
    @Column()
    lastName: string;

    @Field(() => String,{nullable: true})
    @Column({
        type: 'varchar',
        nullable: true,
        unique: true
    })
    email?: string;

    @Field(() => String)
    @Column({
        type: 'varchar',
    })
    password: string;
}