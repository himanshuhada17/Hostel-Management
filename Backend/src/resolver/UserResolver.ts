import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

@InputType()
class UserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String)
  password: string;
}

@InputType()
class updateUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String)
  password: string;
}
@Resolver()
export class UserResolver {
  //get user by id
  @Query(() => User)
  async getUserById(@Arg("id") id: string): Promise<User | null> {
    const user = await User.findOne({
      where: { id },
    });
    if (!user) throw new Error("Support Ticket not found");
    return user;
  }

  // get all users
  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }

  // delete user by id
  @Mutation(() => String)
  async deleteUser(@Arg("id") id: string): Promise<String> {
    await User.delete({ id });
    return "User deleted successfully";
  }

  // create user
  @Mutation(() => String)
  async createUser(@Arg("data") data: UserInput): Promise<string> {
    const user = User.create(data as any).save();
    return "User created successfully";
  }

  // update user
  @Mutation(() => String)
  async updateUser(
    @Arg("id") id: string,
    @Arg("data") data: updateUserInput
  ): Promise<string> {
    await User.update({ id }, data as any);
    return "User updated successfully";
  }
}
