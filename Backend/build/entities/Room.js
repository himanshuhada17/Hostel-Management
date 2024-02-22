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
exports.Room = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Bed_1 = require("./Bed");
const Rent_1 = require("./Rent");
const Person_1 = require("./Person");
let Room = class Room extends typeorm_1.BaseEntity {
};
exports.Room = Room;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Room.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        type: 'varchar',
        unique: true
    }),
    __metadata("design:type", String)
], Room.prototype, "roomNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Room.prototype, "floor", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: 'Available' }),
    __metadata("design:type", String)
], Room.prototype, "roomStatus", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Bed_1.Bed]),
    (0, typeorm_1.OneToMany)(() => Bed_1.Bed, bed => bed.room),
    __metadata("design:type", Array)
], Room.prototype, "beds", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Rent_1.Rent]),
    (0, typeorm_1.OneToMany)(() => Rent_1.Rent, rent => rent.room),
    __metadata("design:type", Array)
], Room.prototype, "rents", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Person_1.Person]),
    (0, typeorm_1.OneToMany)(() => Person_1.Person, person => person.room),
    __metadata("design:type", Array)
], Room.prototype, "persons", void 0);
exports.Room = Room = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Room);
