import { Field, InputType } from "type-graphql";

@InputType()
class BedInput {
    @Field(() => String)
    bedNumber: string;

    @Field()
    status: "Available" | "Occupied";

    @Field(() => String)
    amount: string;
}