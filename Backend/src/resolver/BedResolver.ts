import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Bed } from "../entities/Bed";

@InputType()
class BedInput {
  @Field(() => String)
  bedNumber: string;

  @Field(() => String)
  amount: string;

  @Field(() => String)
  bedStatus: "Available" | "Occupied";

  @Field(() => String)
  roomId?: string;
}

@InputType()
class UpdateBedInput {
  @Field(() => String, { nullable: true })
  amount?: string;

  @Field(() => String, { nullable: true })
  roomId?: string;

  @Field(() => String)
  bedStatus: "Available" | "Occupied";
}

@Resolver()
export class BedResolver {
  @Query(() => [Bed])
  async getAllBeds(): Promise<Bed[]> {
    const allBeds = await Bed.find({
      relations: ['room']
    });
    return allBeds;
  }

  @Query(() => Bed)
  async getBedById(@Arg("id") id: string): Promise<Bed> {
    const bed = await Bed.findOne({
      where: {
        id,
      },
      relations: ['room']
    });
    if (!bed) throw new Error("Bed not found");
    return bed;
  }

  @Mutation(() => String)
  async deleteBed(@Arg("id") id: string): Promise<string> {
    const bed = await Bed.findOne({
      where: {
        id,
      },
    });
    if (!bed) throw new Error("Bed not found");
    await bed.remove();
    return "Bed deleted successfully";
  }

  @Mutation(() => Bed)
  async createBed(@Arg("input") input: BedInput): Promise<Bed> {
    const bed = await Bed.create(input as any).save();
    return bed;
  }

  @Mutation(() => Bed)
  async updateBed(
    @Arg("id") id: string,
    @Arg("input") input: UpdateBedInput
  ): Promise<Bed> {
    const bed = await Bed.findOne({
      where: {
        id,
      },
    });
    if (!bed) throw new Error("Bed not found");

    Object.assign(bed, input);
    await bed.save();

    return bed;
  }
}
