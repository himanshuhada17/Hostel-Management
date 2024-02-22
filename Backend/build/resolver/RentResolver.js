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
exports.RentResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Rent_1 = require("../entities/Rent");
let RentInput = class RentInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RentInput.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], RentInput.prototype, "dueDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RentInput.prototype, "amount", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RentInput.prototype, "personId", void 0);
RentInput = __decorate([
    (0, type_graphql_1.InputType)()
], RentInput);
let RentResolver = class RentResolver {
    createRent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const rent = Rent_1.Rent.create(data).save();
            return rent;
        });
    }
    getAllRents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Rent_1.Rent.find({
                relations: ['person']
            });
        });
    }
};
exports.RentResolver = RentResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => Rent_1.Rent),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RentInput]),
    __metadata("design:returntype", Promise)
], RentResolver.prototype, "createRent", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Rent_1.Rent]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RentResolver.prototype, "getAllRents", null);
exports.RentResolver = RentResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RentResolver);
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