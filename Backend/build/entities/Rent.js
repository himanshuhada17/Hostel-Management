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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rent = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Person_1 = require("./Person");
// import { TypeormLoader } from "type-graphql-dataloader";
const Bed_1 = require("./Bed");
const Room_1 = require("./Room");
let Rent = class Rent extends typeorm_1.BaseEntity {
};
exports.Rent = Rent;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Rent.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: "Unpaid" }),
    __metadata("design:type", String)
], Rent.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Rent.prototype, "dueDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Rent.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Rent.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Rent.prototype, "personId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Person_1.Person)
    // @TypeormLoader()
    ,
    (0, typeorm_1.ManyToOne)(() => Person_1.Person, (person) => person.rents, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Person_1.Person)
], Rent.prototype, "person", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Rent.prototype, "bedId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Bed_1.Bed),
    (0, typeorm_1.ManyToOne)(() => Bed_1.Bed, (bed) => bed.rents),
    __metadata("design:type", Bed_1.Bed)
], Rent.prototype, "bed", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Rent.prototype, "roomId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Room_1.Room),
    (0, typeorm_1.ManyToOne)(() => Room_1.Room, (room) => room.rents),
    __metadata("design:type", Room_1.Room)
], Rent.prototype, "room", void 0);
exports.Rent = Rent = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Rent);
