"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var auth_controller_1 = require("./auth.controller");
var jwt_1 = require("@nestjs/jwt");
var constants_1 = require("./constants/constants");
var providers_1 = require("./providers/providers");
var database_module_1 = require("src/database/database.module");
var jwt_strategy_1 = require("./jwt/jwt.strategy");
var local_strategy_1 = require("./local.strategy");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                database_module_1.DatabaseModule,
                jwt_1.JwtModule.register({
                    secret: constants_1.jwtConstants.secret,
                    signOptions: { expiresIn: '60s' }
                }),
            ],
            controllers: [auth_controller_1.AuthController],
            providers: __spreadArrays([auth_service_1.AuthService], providers_1.userProviders, [local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy])
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
