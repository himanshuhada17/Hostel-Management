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
exports.PersonResolver = exports.UpdatePersonInput = exports.PersonInput = void 0;
const type_graphql_1 = require("type-graphql");
const Person_1 = require("../entities/Person");
let PersonInput = class PersonInput {
};
exports.PersonInput = PersonInput;
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PersonInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PersonInput.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PersonInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PersonInput.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], PersonInput.prototype, "idProof", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PersonInput.prototype, "idNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PersonInput.prototype, "emergenyContact", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PersonInput.prototype, "roomId", void 0);
exports.PersonInput = PersonInput = __decorate([
    (0, type_graphql_1.InputType)()
], PersonInput);
let UpdatePersonInput = class UpdatePersonInput {
};
exports.UpdatePersonInput = UpdatePersonInput;
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UpdatePersonInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdatePersonInput.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdatePersonInput.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePersonInput.prototype, "idProof", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UpdatePersonInput.prototype, "idNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdatePersonInput.prototype, "emergenyContact", void 0);
exports.UpdatePersonInput = UpdatePersonInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdatePersonInput);
let PersonResolver = class PersonResolver {
    //CREATE PERSON
    createPerson(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = Person_1.Person.create(input).save();
            return person;
        });
    }
    //UPDATE PERSON
    updatePerson(id, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield Person_1.Person.findOne({ where: { id } });
            if (!person)
                throw new Error("Person not found");
            const updatedPerson = yield Object.assign(person, input).save();
            return updatedPerson;
        });
    }
    //GET ALL USERS
    getAllPersons() {
        return __awaiter(this, void 0, void 0, function* () {
            const allPersons = yield Person_1.Person.find({
                relations: ["room"],
            });
            return allPersons;
        });
    }
    //GET PERSON BY ID
    getPersonById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield Person_1.Person.findOne({
                where: {
                    id
                },
                relations: ["room"],
            });
            if (!person)
                throw new Error("No person found");
            return person;
        });
    }
};
exports.PersonResolver = PersonResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => Person_1.Person),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PersonInput]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "createPerson", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Person_1.Person),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdatePersonInput]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "updatePerson", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Person_1.Person]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "getAllPersons", null);
__decorate([
    (0, type_graphql_1.Query)(() => Person_1.Person),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "getPersonById", null);
exports.PersonResolver = PersonResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], PersonResolver);
