import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

//
@InputType()
class UserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
class UpdateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}

@Resolver()
export class UserResolver {
  //get all users
  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    const allUsers = await User.find();
    return allUsers;
  }

  //get user by id
  @Query(() => User)
  async getUserById(@Arg("id") id: string): Promise<User> {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) throw new Error("No user found");
    return user;
  }

  //delete user by id
  @Mutation(() => String)
  async deleteUser(@Arg("id") id: string): Promise<String> {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error("User not found");
    await User.delete(id);
    return "User deleted successfully";
  }

  //create a user
  @Mutation(() => User)
  async createUser(@Arg("input") input: UserInput): Promise<User> {
    const user = await User.create(input as any).save();
    return user;
  }
  @Query(()=>String)
  async loginUser(  @Arg("email") email: string,
  @Arg("password") password: string):Promise<string> {

    const user=await User.findOne({
      where:{
        email,
        password
      }
    })
    if(user){
      return "User Login Successfully"
    }else{
      return 'User Not Found'
    }
  }

  //update a user
  @Mutation(() => User)
  async updateUser(
    @Arg("id") id: string,
    @Arg("input") input: UpdateUserInput
  ): Promise<User> {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error("User not found");
    const updateUser = Object.assign(user, input).save();
    return updateUser;
  }
 
}
