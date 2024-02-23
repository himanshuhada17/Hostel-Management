import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Room } from "../entities/Room";


@InputType()
class RoomInput {
  @Field(() => String)
  roomNumber: string;

  @Field(() => String)
  floor: string;

  @Field()
  roomStatus: "Available" | "Occupied";
}

@InputType()
class UpdateRoomInput {
  @Field()
  roomStatus: "Available" | "Occupied";
}

@Resolver()
export class RoomResolver {
  //CREATE ROOM
  @Mutation(() => Room)
  async createRoom(@Arg("input") input: RoomInput): Promise<Room> {
    const room = Room.create(input as any).save();
    return room;
  }

  //UPDATE ROOM
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
    const updatedRoom = Object.assign(room, input).save();
    return updatedRoom;
  }

  //GET ALL ROOM
  @Query(() => [Room])
  async getAllRooms(): Promise<Room[]> {
    const allRooms = await Room.find();
    return allRooms;
  }

  //GET ROOM BY ID
  @Query(() => Room)
  async getRoomById(@Arg("id") id: string): Promise<Room> {
    const room = await Room.findOne({
      where: {
        id,
      },
    });
    if (!room) throw new Error("No room found");
    return room;
  }
}
