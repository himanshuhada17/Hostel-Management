import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Rent } from "../entities/Rent";

@InputType()
class RentInput {
  @Field(() => String)
  status: "Paid" | "Unpaid";

  @Field(() => Date)
  dueDate: Date;

  @Field(() => String)
  personId: string;

  @Field(() => String)
  bedId: string;

  @Field(() => String)
  roomId: string;
}

@InputType()
class UpdateRentInput {
  @Field(() => String, { nullable: true })
  status?: "Paid" | "Unpaid";

  @Field(() => Date, { nullable: true })
  dueDate?: Date;
}

@Resolver()
export class RentResolver {
  @Query(() => [Rent])
  async getAllRents(): Promise<Rent[]> {
    const allRents = await Rent.find({
      relations: ["room", "bed", "person"],
    });
    return allRents;
  }

  @Query(() => Rent)
  async getRentById(@Arg("id") id: string): Promise<Rent> {
    const rent = await Rent.findOne({
      where: {
        id,
      },
      relations: ["room", "bed", "person"],
    });
    if (!rent) throw new Error("Rent not found");
    return rent;
  }

  @Mutation(() => String)
  async deleteRent(@Arg("id") id: string): Promise<string> {
    const rent = await Rent.findOne({
      where: {
        id,
      },
    });
    if (!rent) throw new Error("Rent not found");
    await rent.remove();
    return "Rent deleted successfully";
  }

  @Mutation(() => Rent)
  async createRent(@Arg("input") input: RentInput): Promise<Rent> {
    const rent = await Rent.create(input as any).save();
    return rent;
  }

  @Mutation(() => Rent)
  async updateRent(
    @Arg("id") id: string,
    @Arg("input") input: UpdateRentInput
  ): Promise<Rent> {
    const rent = await Rent.findOne({
      where: {
        id,
      },
    });
    if (!rent) throw new Error("Rent not found");

    Object.assign(rent, input);
    await rent.save();

    return rent;
  }
}
