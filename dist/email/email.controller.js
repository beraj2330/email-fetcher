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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const swagger_1 = require("@nestjs/swagger");
let EmailController = class EmailController {
    constructor(emailService) {
        this.emailService = emailService;
    }
    getEmails(filename) {
        const filePath = `./file/${filename}.log`;
        const emails = this.emailService.extractEmails(filePath);
        return { emails };
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Get)(':filename'),
    (0, swagger_1.ApiOperation)({ summary: 'Extract emails from a file' }),
    (0, swagger_1.ApiParam)({ name: 'filename', description: 'Name of the file to read from file', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of unique email addresses from the file' }),
    __param(0, (0, common_1.Param)('filename')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], EmailController.prototype, "getEmails", null);
exports.EmailController = EmailController = __decorate([
    (0, swagger_1.ApiTags)('email'),
    (0, common_1.Controller)('email'),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], EmailController);
//# sourceMappingURL=email.controller.js.map