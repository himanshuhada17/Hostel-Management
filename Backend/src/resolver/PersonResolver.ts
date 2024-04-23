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
  idProof: "Aadhar" | "VoterID" | "Passport" | "Driving License";

  @Field(() => String)
  idNumber: string;

  @Field(() => String, { nullable: true })
  emergenyContact?: string;

  @Field(() => String)
  roomId: string;
}

@InputType()
class UpdatePersonInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field()
  idProof: "Aadhar" | "VoterID" | "Passport" | "Driving License";

  @Field(() => String)
  idNumber: string;

  @Field(() => String, { nullable: true })
  emergenyContact?: string;
}

@Resolver()
export class PersonResolver {
  //CREATE PERSON
  @Mutation(() => Person)
  async createPerson(@Arg("input") input: PersonInput): Promise<Person> {
    const person = Person.create(input as any).save();
    return person;
  }

  //UPDATE PERSON
  @Mutation(() => Person)
  async updatePerson(
    @Arg("id") id: string,
    @Arg("input") input: UpdatePersonInput
  ): Promise<Person> {
    const person = await Person.findOne({ where: { id } });
    if (!person) throw new Error("Person not found");
    const updatedPerson = await Object.assign(person, input).save();
    return updatedPerson;
  }

  //GET ALL PERSONS
  @Query(() => [Person])
  async getAllPersons(): Promise<Person[]> {
    const allPersons = await Person.find({
      relations: ["room"],
    });
    return allPersons;
  }

  //GET PERSON BY ID
  @Query(() => Person)
  async getPersonById(@Arg("id") id: string): Promise<Person> {
    const person = await Person.findOne({
      where: {
        id
      },
      relations: ["room"],
    });
    if (!person) throw new Error("No person found");
    return person;
  }
}
