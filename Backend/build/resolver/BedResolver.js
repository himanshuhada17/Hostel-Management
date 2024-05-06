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
exports.BedResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Bed_1 = require("../entities/Bed");
let BedInput = class BedInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], BedInput.prototype, "bedNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], BedInput.prototype, "amount", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], BedInput.prototype, "bedStatus", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], BedInput.prototype, "roomId", void 0);
BedInput = __decorate([
    (0, type_graphql_1.InputType)()
], BedInput);
let UpdateBedInput = class UpdateBedInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateBedInput.prototype, "amount", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateBedInput.prototype, "roomId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UpdateBedInput.prototype, "bedStatus", void 0);
UpdateBedInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateBedInput);
let BedResolver = class BedResolver {
    getAllBeds() {
        return __awaiter(this, void 0, void 0, function* () {
            const allBeds = yield Bed_1.Bed.find({
                relations: ['room']
            });
            return allBeds;
        });
    }
    getBedById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bed = yield Bed_1.Bed.findOne({
                where: {
                    id,
                },
                relations: ['room']
            });
            if (!bed)
                throw new Error("Bed not found");
            return bed;
        });
    }
    deleteBed(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bed = yield Bed_1.Bed.findOne({
                where: {
                    id,
                },
            });
            if (!bed)
                throw new Error("Bed not found");
            yield bed.remove();
            return "Bed deleted successfully";
        });
    }
    createBed(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const bed = yield Bed_1.Bed.create(input).save();
            return bed;
        });
    }
    updateBed(id, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const bed = yield Bed_1.Bed.findOne({
                where: {
                    id,
                },
            });
            if (!bed)
                throw new Error("Bed not found");
            Object.assign(bed, input);
            yield bed.save();
            return bed;
        });
    }
};
exports.BedResolver = BedResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Bed_1.Bed]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BedResolver.prototype, "getAllBeds", null);
__decorate([
    (0, type_graphql_1.Query)(() => Bed_1.Bed),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BedResolver.prototype, "getBedById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BedResolver.prototype, "deleteBed", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Bed_1.Bed),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BedInput]),
    __metadata("design:returntype", Promise)
], BedResolver.prototype, "createBed", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Bed_1.Bed),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBedInput]),
    __metadata("design:returntype", Promise)
], BedResolver.prototype, "updateBed", null);
exports.BedResolver = BedResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], BedResolver);
