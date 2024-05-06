import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Room } from "../entities/Room";

@InputType()
class RoomInput {
  @Field(() => String)
  roomNumber: string;

  @Field(() => String, { nullable: true })
  floor: "1" | "2" | "3";

  @Field(() => String)
  roomStatus: "Available" | "Occupied";
}

@InputType()
class UpdateRoomInput {
  @Field(() => String)
  roomStatus: "Available" | "Occupied";
}

@Resolver()
export class RoomResolver {
  @Query(() => [Room])
  async getAllRooms(): Promise<Room[]> {
    const allRooms = await Room.find();
    return allRooms;
  }

  @Query(() => Room)
  async getRoomById(@Arg("id") id: string): Promise<Room> {
    const room = await Room.findOne({
      where: {
        id,
      },
    });
    if (!room) throw new Error("Room not found");
    return room;
  }

  @Mutation(() => String)
  async deleteRoom(@Arg("id") id: string): Promise<string> {
    const room = await Room.findOne({
      where: {
        id,
      },
    });
    if (!room) throw new Error("Room not found");
    await room.remove();
    return "Room deleted successfully";
  }

  @Mutation(() => Room)
  async createRoom(@Arg("input") input: RoomInput): Promise<Room> {
    const room = await Room.create(input as any).save();
    return room;
  }

  @Mutation(() => Room)
  async updateRoom(
    @Arg("id") id: string,
    @Arg("input") input: UpdateRoomInput
  ): Promise<Room> {
    const room = await Room.findOne({
      where: {
        id,
      },
    });
    if (!room) throw new Error("Room not found");

    Object.assign(room, input);
    await room.save();

    return room;
  }
}
