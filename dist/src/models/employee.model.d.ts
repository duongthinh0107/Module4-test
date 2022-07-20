/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
declare const EmployeeModel: import("mongoose").Model<{
    code?: unknown;
    name?: unknown;
    age?: unknown;
    salary?: unknown;
    branch?: {
        _id?: any;
        equals?: {};
        id?: {
            [x: number]: unknown;
            equals?: {};
            set?: {};
            toJSON?: {};
            [Symbol.iterator]?: {};
            find?: {};
            indexOf?: {};
            lastIndexOf?: {};
            slice?: {};
            length?: unknown;
            includes?: {};
            at?: {};
            buffer?: {
                slice?: {};
                [Symbol.toStringTag]?: unknown;
                byteLength?: unknown;
            } | {
                slice?: {};
                [Symbol.species]?: any;
                [Symbol.toStringTag]?: unknown;
                byteLength?: unknown;
            };
            [Symbol.toStringTag]?: unknown;
            reverse?: {};
            sort?: {};
            fill?: {};
            copyWithin?: {};
            toString: {};
            toLocaleString: {};
            join?: {};
            every?: {};
            some?: {};
            forEach?: {};
            map?: {};
            filter?: {};
            reduce?: {};
            reduceRight?: {};
            findIndex?: {};
            entries?: {};
            keys?: {};
            values?: {};
            byteLength?: unknown;
            compare?: {};
            write?: {};
            copy?: {};
            subarray?: {};
            writeBigInt64BE?: {};
            writeBigInt64LE?: {};
            writeBigUInt64BE?: {};
            writeBigUint64BE?: {};
            writeBigUInt64LE?: {};
            writeBigUint64LE?: {};
            writeUIntLE?: {};
            writeUintLE?: {};
            writeUIntBE?: {};
            writeUintBE?: {};
            writeIntLE?: {};
            writeIntBE?: {};
            readBigUInt64BE?: {};
            readBigUint64BE?: {};
            readBigUInt64LE?: {};
            readBigUint64LE?: {};
            readBigInt64BE?: {};
            readBigInt64LE?: {};
            readUIntLE?: {};
            readUintLE?: {};
            readUIntBE?: {};
            readUintBE?: {};
            readIntLE?: {};
            readIntBE?: {};
            readUInt8?: {};
            readUint8?: {};
            readUInt16LE?: {};
            readUint16LE?: {};
            readUInt16BE?: {};
            readUint16BE?: {};
            readUInt32LE?: {};
            readUint32LE?: {};
            readUInt32BE?: {};
            readUint32BE?: {};
            readInt8?: {};
            readInt16LE?: {};
            readInt16BE?: {};
            readInt32LE?: {};
            readInt32BE?: {};
            readFloatLE?: {};
            readFloatBE?: {};
            readDoubleLE?: {};
            readDoubleBE?: {};
            swap16?: {};
            swap32?: {};
            swap64?: {};
            writeUInt8?: {};
            writeUint8?: {};
            writeUInt16LE?: {};
            writeUint16LE?: {};
            writeUInt16BE?: {};
            writeUint16BE?: {};
            writeUInt32LE?: {};
            writeUint32LE?: {};
            writeUInt32BE?: {};
            writeUint32BE?: {};
            writeInt8?: {};
            writeInt16LE?: {};
            writeInt16BE?: {};
            writeInt32LE?: {};
            writeInt32BE?: {};
            writeFloatLE?: {};
            writeFloatBE?: {};
            writeDoubleLE?: {};
            writeDoubleBE?: {};
            BYTES_PER_ELEMENT?: unknown;
            byteOffset?: unknown;
            valueOf: {};
        };
        toJSON?: {};
        toString: {};
        _bsontype?: import("mongoose").Types.ObjectId;
        generationTime?: unknown;
        toHexString?: {};
        getTimestamp?: {};
        inspect?: {};
    };
}, {}, {}, {}, Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    code?: string;
    name?: string;
    age?: number;
    salary?: number;
    branch?: import("mongoose").Types.ObjectId;
}>>;
export { EmployeeModel };
