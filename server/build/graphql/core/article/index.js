"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Construct a schema, using GraphQL schema language
const resolvers = __importStar(require("./resolvers"));
exports.resolvers = resolvers;
const typeDefs = __importStar(require("./typedefs"));
exports.typeDefs = typeDefs;
