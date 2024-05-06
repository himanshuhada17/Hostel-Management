"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Room_1 = require("../entities/Room");
let RoomInput = class RoomInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RoomInput.prototype, "roomNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], RoomInput.prototype, "floor", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RoomInput.prototype, "roomStatus", void 0);
RoomInput = __decorate([
    (0, type_graphql_1.InputType)()
], RoomInput);
let UpdateRoomInput = class UpdateRoomInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UpdateRoomInput.prototype, "roomStatus", void 0);
UpdateRoomInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateRoomInput);
let RoomResolver = class RoomResolver {
    getAllRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            const allRooms = yield Room_1.Room.find();
            return allRooms;
        });
    }
    getRoomById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield Room_1.Room.findOne({
                where: {
                    id,
                },
            });
            if (!room)
                throw new Error("Room not found");
            return room;
        });
    }
    deleteRoom(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield Room_1.Room.findOne({
                where: {
                    id,
                },
            });
            if (!room)
                throw new Error("Room not found");
            yield room.remove();
            return "Room deleted successfully";
        });
    }
    createRoom(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield Room_1.Room.create(input).save();
            return room;
        });
    }
    updateRoom(id, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield Room_1.Room.findOne({
                where: {
                    id,
                },
            });
            if (!room)
                throw new Error("Room not found");
            Object.assign(room, input);
            yield room.save();
            return room;
        });
    }
};
exports.RoomResolver = RoomResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Room_1.Room]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "getAllRooms", null);
__decorate([
    (0, type_graphql_1.Query)(() => Room_1.Room),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "getRoomById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "deleteRoom", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Room_1.Room),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoomInput]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "createRoom", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Room_1.Room),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateRoomInput]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "updateRoom", null);
exports.RoomResolver = RoomResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RoomResolver);
