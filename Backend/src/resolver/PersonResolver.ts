import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Person } from "../entities/Person";

@InputType()
class PersonInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field()
  idProof: "Aadhar" | "VoterID" | "Passport" | "DrivingLicense";

  @Field(() => String)
  idNumber: string;

  @Field(() => String, { nullable: true })
  emergenyContact?: string;
}

@Resolver()
export class PersonResolver {
  @Mutation(() => Person)
  async createPerson(@Arg("data") data: PersonInput): Promise<Person> {
    const person = Person.create(data as any).save();
    return person;
  }

  @Query(() => [Person])
  async getAllPersons(): Promise<Person[]> {
    return await Person.find();
  }

  @Query(() => Person)
  async getPersonById(@Arg("id") id : string): Promise<Person | null>
  {
    const person = await Person.findOne({
        where: {id}
    })
    return person
  }

  @Mutation(() => String)
  async deletePerson(@Arg("id") id : string): Promise<string >
  {
    const person = await Person.findOne({
      where:{
        id: id
      },
    })
    if(person){
      await Person.delete(id)
    }
    else{
      return "Person Not Found"
    }
    return "Person Deleted"
  }
}
