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
exports.Person = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Rent_1 = require("./Rent");
const Room_1 = require("./Room");
const Bed_1 = require("./Bed");
// import { TypeormLoader } from "type-graphql-dataloader";
let Person = class Person extends typeorm_1.BaseEntity {
};
exports.Person = Person;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Person.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        type: "varchar",
    }),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true,
    }),
    __metadata("design:type", String)
], Person.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        type: "varchar",
        unique: true,
    }),
    __metadata("design:type", String)
], Person.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true,
    }),
    __metadata("design:type", String)
], Person.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: "Aadhar" }),
    __metadata("design:type", String)
], Person.prototype, "idProof", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    __metadata("design:type", String)
], Person.prototype, "idNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true,
    }),
    __metadata("design:type", String)
], Person.prototype, "emergenyContact", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Rent_1.Rent], { nullable: true })
    // @TypeormLoader()
    ,
    (0, typeorm_1.OneToMany)(() => Rent_1.Rent, rent => rent.person),
    __metadata("design:type", Array)
], Person.prototype, "rents", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Person.prototype, "roomId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Room_1.Room),
    (0, typeorm_1.ManyToOne)(() => Room_1.Room, room => room.persons),
    __metadata("design:type", Room_1.Room)
], Person.prototype, "room", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Bed_1.Bed),
    (0, typeorm_1.OneToOne)(() => Bed_1.Bed, bed => bed.person),
    __metadata("design:type", Bed_1.Bed)
], Person.prototype, "bed", void 0);
exports.Person = Person = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Person);
