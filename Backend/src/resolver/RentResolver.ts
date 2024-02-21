import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Rent } from "../entities/Rent";

@InputType()
class RentInput {
    @Field()
    status: 'Paid' | 'Unpaid'

    @Field()
    dueDate: Date

    @Field(() => String)
    amount: string

    @Field(() => String)
    personId: string
}

@Resolver()
export class RentResolver {
    @Mutation(() => Rent)
    async createRent(@Arg("data") data: RentInput): Promise<Rent>
    {
        const rent = Rent.create(data as any).save();
        return rent;
    }

    @Query(() => [Rent])
    async getAllRents(): Promise<Rent[]>
    {
        return await Rent.find({
            relations: ['person']
        });
    }
}



// import { Arg, Field, InputType, Mutation, Query, Resolver, Root, FieldResolver } from "type-graphql";
// import { Rent } from "../entities/Rent";
// import { Person } from "../entities/Person"; // Import the Person entity

// @InputType()
// class RentInput {
//     @Field()
//     status: 'Paid' | 'Unpaid'

//     @Field()
//     dueDate: Date

//     @Field(() => String)
//     amount: string

//     @Field(() => String)
//     personId?: string
// }

// @Resolver(Rent)
// export class RentResolver {
//     @Mutation(() => Rent)
//     async createRent(@Arg("data") data: RentInput): Promise<Rent>
//     {
//         const rent = Rent.create(data as any).save();
//         return rent;
//     }

//     @Query(() => Rent,)
//     async getRentById(@Arg("id") id : string): Promise<Rent | null>
//     {
//         const rent = await Rent.findOne({
//             where: {
//                 personId: id
//             }
//         })
//         console.log("rent---->>",rent?.person)
//         return rent
//     }

//     @Query(() => [Rent])
//     async getAllRents(): Promise<Rent[]>
//     {
//         return await Rent.find({
//         });
//     }
    
// }
