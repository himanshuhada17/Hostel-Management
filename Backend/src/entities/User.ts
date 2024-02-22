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
    name: string;

    @Field(() => String)   
    @Column({
        type: 'varchar',
        unique: true
    })
    username: string;

    @Field(() => String)
    @Column({
        type: 'varchar',
        unique: true
    })
    email: string;

    @Field(() => String)
    @Column({
        type: 'varchar',
    })
    password: string;
}