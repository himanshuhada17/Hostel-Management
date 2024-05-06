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
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RentInput.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], RentInput.prototype, "dueDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RentInput.prototype, "personId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RentInput.prototype, "bedId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RentInput.prototype, "roomId", void 0);
RentInput = __decorate([
    (0, type_graphql_1.InputType)()
], RentInput);
let UpdateRentInput = class UpdateRentInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateRentInput.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], UpdateRentInput.prototype, "dueDate", void 0);
UpdateRentInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateRentInput);
let RentResolver = class RentResolver {
    getAllRents() {
        return __awaiter(this, void 0, void 0, function* () {
            const allRents = yield Rent_1.Rent.find({
                relations: ["room", "bed", "person"],
            });
            return allRents;
        });
    }
    getRentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const rent = yield Rent_1.Rent.findOne({
                where: {
                    id,
                },
                relations: ["room", "bed", "person"],
            });
            if (!rent)
                throw new Error("Rent not found");
            return rent;
        });
    }
    deleteRent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const rent = yield Rent_1.Rent.findOne({
                where: {
                    id,
                },
            });
            if (!rent)
                throw new Error("Rent not found");
            yield rent.remove();
            return "Rent deleted successfully";
        });
    }
    createRent(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const rent = yield Rent_1.Rent.create(input).save();
            return rent;
        });
    }
    updateRent(id, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const rent = yield Rent_1.Rent.findOne({
                where: {
                    id,
                },
            });
            if (!rent)
                throw new Error("Rent not found");
            Object.assign(rent, input);
            yield rent.save();
            return rent;
        });
    }
};
exports.RentResolver = RentResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Rent_1.Rent]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RentResolver.prototype, "getAllRents", null);
__decorate([
    (0, type_graphql_1.Query)(() => Rent_1.Rent),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RentResolver.prototype, "getRentById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RentResolver.prototype, "deleteRent", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Rent_1.Rent),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RentInput]),
    __metadata("design:returntype", Promise)
], RentResolver.prototype, "createRent", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Rent_1.Rent),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateRentInput]),
    __metadata("design:returntype", Promise)
], RentResolver.prototype, "updateRent", null);
exports.RentResolver = RentResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RentResolver);
