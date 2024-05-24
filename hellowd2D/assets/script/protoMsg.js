/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.account = (function() {

    /**
     * Namespace account.
     * @exports account
     * @namespace
     */
    var account = {};

    account.AccountLoginMsg = (function() {

        /**
         * Properties of an AccountLoginMsg.
         * @memberof account
         * @interface IAccountLoginMsg
         * @property {string|null} [accountName] AccountLoginMsg accountName
         * @property {string|null} [passWord] AccountLoginMsg passWord
         * @property {number|null} [channel] AccountLoginMsg channel
         * @property {string|null} [clientModel] AccountLoginMsg clientModel
         * @property {string|null} [systemName] AccountLoginMsg systemName
         * @property {string|null} [systemVersion] AccountLoginMsg systemVersion
         * @property {string|null} [nickname] AccountLoginMsg nickname
         */

        /**
         * Constructs a new AccountLoginMsg.
         * @memberof account
         * @classdesc Represents an AccountLoginMsg.
         * @implements IAccountLoginMsg
         * @constructor
         * @param {account.IAccountLoginMsg=} [properties] Properties to set
         */
        function AccountLoginMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountLoginMsg accountName.
         * @member {string} accountName
         * @memberof account.AccountLoginMsg
         * @instance
         */
        AccountLoginMsg.prototype.accountName = "";

        /**
         * AccountLoginMsg passWord.
         * @member {string} passWord
         * @memberof account.AccountLoginMsg
         * @instance
         */
        AccountLoginMsg.prototype.passWord = "";

        /**
         * AccountLoginMsg channel.
         * @member {number} channel
         * @memberof account.AccountLoginMsg
         * @instance
         */
        AccountLoginMsg.prototype.channel = 0;

        /**
         * AccountLoginMsg clientModel.
         * @member {string} clientModel
         * @memberof account.AccountLoginMsg
         * @instance
         */
        AccountLoginMsg.prototype.clientModel = "";

        /**
         * AccountLoginMsg systemName.
         * @member {string} systemName
         * @memberof account.AccountLoginMsg
         * @instance
         */
        AccountLoginMsg.prototype.systemName = "";

        /**
         * AccountLoginMsg systemVersion.
         * @member {string} systemVersion
         * @memberof account.AccountLoginMsg
         * @instance
         */
        AccountLoginMsg.prototype.systemVersion = "";

        /**
         * AccountLoginMsg nickname.
         * @member {string} nickname
         * @memberof account.AccountLoginMsg
         * @instance
         */
        AccountLoginMsg.prototype.nickname = "";

        /**
         * Creates a new AccountLoginMsg instance using the specified properties.
         * @function create
         * @memberof account.AccountLoginMsg
         * @static
         * @param {account.IAccountLoginMsg=} [properties] Properties to set
         * @returns {account.AccountLoginMsg} AccountLoginMsg instance
         */
        AccountLoginMsg.create = function create(properties) {
            return new AccountLoginMsg(properties);
        };

        /**
         * Encodes the specified AccountLoginMsg message. Does not implicitly {@link account.AccountLoginMsg.verify|verify} messages.
         * @function encode
         * @memberof account.AccountLoginMsg
         * @static
         * @param {account.IAccountLoginMsg} message AccountLoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountLoginMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountName != null && Object.hasOwnProperty.call(message, "accountName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accountName);
            if (message.passWord != null && Object.hasOwnProperty.call(message, "passWord"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.passWord);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channel);
            if (message.clientModel != null && Object.hasOwnProperty.call(message, "clientModel"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientModel);
            if (message.systemName != null && Object.hasOwnProperty.call(message, "systemName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.systemName);
            if (message.systemVersion != null && Object.hasOwnProperty.call(message, "systemVersion"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.systemVersion);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified AccountLoginMsg message, length delimited. Does not implicitly {@link account.AccountLoginMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.AccountLoginMsg
         * @static
         * @param {account.IAccountLoginMsg} message AccountLoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountLoginMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountLoginMsg message from the specified reader or buffer.
         * @function decode
         * @memberof account.AccountLoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.AccountLoginMsg} AccountLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountLoginMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.AccountLoginMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.accountName = reader.string();
                        break;
                    }
                case 2: {
                        message.passWord = reader.string();
                        break;
                    }
                case 3: {
                        message.channel = reader.int32();
                        break;
                    }
                case 4: {
                        message.clientModel = reader.string();
                        break;
                    }
                case 5: {
                        message.systemName = reader.string();
                        break;
                    }
                case 6: {
                        message.systemVersion = reader.string();
                        break;
                    }
                case 7: {
                        message.nickname = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountLoginMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.AccountLoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.AccountLoginMsg} AccountLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountLoginMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountLoginMsg message.
         * @function verify
         * @memberof account.AccountLoginMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountLoginMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                if (!$util.isString(message.accountName))
                    return "accountName: string expected";
            if (message.passWord != null && message.hasOwnProperty("passWord"))
                if (!$util.isString(message.passWord))
                    return "passWord: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.clientModel != null && message.hasOwnProperty("clientModel"))
                if (!$util.isString(message.clientModel))
                    return "clientModel: string expected";
            if (message.systemName != null && message.hasOwnProperty("systemName"))
                if (!$util.isString(message.systemName))
                    return "systemName: string expected";
            if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
                if (!$util.isString(message.systemVersion))
                    return "systemVersion: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates an AccountLoginMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.AccountLoginMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.AccountLoginMsg} AccountLoginMsg
         */
        AccountLoginMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.account.AccountLoginMsg)
                return object;
            var message = new $root.account.AccountLoginMsg();
            if (object.accountName != null)
                message.accountName = String(object.accountName);
            if (object.passWord != null)
                message.passWord = String(object.passWord);
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.clientModel != null)
                message.clientModel = String(object.clientModel);
            if (object.systemName != null)
                message.systemName = String(object.systemName);
            if (object.systemVersion != null)
                message.systemVersion = String(object.systemVersion);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from an AccountLoginMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.AccountLoginMsg
         * @static
         * @param {account.AccountLoginMsg} message AccountLoginMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountLoginMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountName = "";
                object.passWord = "";
                object.channel = 0;
                object.clientModel = "";
                object.systemName = "";
                object.systemVersion = "";
                object.nickname = "";
            }
            if (message.accountName != null && message.hasOwnProperty("accountName"))
                object.accountName = message.accountName;
            if (message.passWord != null && message.hasOwnProperty("passWord"))
                object.passWord = message.passWord;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.clientModel != null && message.hasOwnProperty("clientModel"))
                object.clientModel = message.clientModel;
            if (message.systemName != null && message.hasOwnProperty("systemName"))
                object.systemName = message.systemName;
            if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
                object.systemVersion = message.systemVersion;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this AccountLoginMsg to JSON.
         * @function toJSON
         * @memberof account.AccountLoginMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountLoginMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountLoginMsg
         * @function getTypeUrl
         * @memberof account.AccountLoginMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountLoginMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/account.AccountLoginMsg";
        };

        return AccountLoginMsg;
    })();

    account.RoleLoginOkMsg = (function() {

        /**
         * Properties of a RoleLoginOkMsg.
         * @memberof account
         * @interface IRoleLoginOkMsg
         * @property {number|null} [playerId] RoleLoginOkMsg playerId
         * @property {string|null} [nickname] RoleLoginOkMsg nickname
         * @property {number|null} [lv] RoleLoginOkMsg lv
         * @property {number|null} [lvExp] RoleLoginOkMsg lvExp
         * @property {number|null} [vipLv] RoleLoginOkMsg vipLv
         * @property {number|null} [vipExp] RoleLoginOkMsg vipExp
         * @property {number|null} [gold] RoleLoginOkMsg gold
         * @property {number|null} [diamond] RoleLoginOkMsg diamond
         * @property {number|null} [roomCard] RoleLoginOkMsg roomCard
         * @property {number|Long|null} [createTime] RoleLoginOkMsg createTime
         */

        /**
         * Constructs a new RoleLoginOkMsg.
         * @memberof account
         * @classdesc Represents a RoleLoginOkMsg.
         * @implements IRoleLoginOkMsg
         * @constructor
         * @param {account.IRoleLoginOkMsg=} [properties] Properties to set
         */
        function RoleLoginOkMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleLoginOkMsg playerId.
         * @member {number} playerId
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.playerId = 0;

        /**
         * RoleLoginOkMsg nickname.
         * @member {string} nickname
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.nickname = "";

        /**
         * RoleLoginOkMsg lv.
         * @member {number} lv
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.lv = 0;

        /**
         * RoleLoginOkMsg lvExp.
         * @member {number} lvExp
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.lvExp = 0;

        /**
         * RoleLoginOkMsg vipLv.
         * @member {number} vipLv
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.vipLv = 0;

        /**
         * RoleLoginOkMsg vipExp.
         * @member {number} vipExp
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.vipExp = 0;

        /**
         * RoleLoginOkMsg gold.
         * @member {number} gold
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.gold = 0;

        /**
         * RoleLoginOkMsg diamond.
         * @member {number} diamond
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.diamond = 0;

        /**
         * RoleLoginOkMsg roomCard.
         * @member {number} roomCard
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.roomCard = 0;

        /**
         * RoleLoginOkMsg createTime.
         * @member {number|Long} createTime
         * @memberof account.RoleLoginOkMsg
         * @instance
         */
        RoleLoginOkMsg.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoleLoginOkMsg instance using the specified properties.
         * @function create
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {account.IRoleLoginOkMsg=} [properties] Properties to set
         * @returns {account.RoleLoginOkMsg} RoleLoginOkMsg instance
         */
        RoleLoginOkMsg.create = function create(properties) {
            return new RoleLoginOkMsg(properties);
        };

        /**
         * Encodes the specified RoleLoginOkMsg message. Does not implicitly {@link account.RoleLoginOkMsg.verify|verify} messages.
         * @function encode
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {account.IRoleLoginOkMsg} message RoleLoginOkMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleLoginOkMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.lv != null && Object.hasOwnProperty.call(message, "lv"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lv);
            if (message.lvExp != null && Object.hasOwnProperty.call(message, "lvExp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lvExp);
            if (message.vipLv != null && Object.hasOwnProperty.call(message, "vipLv"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.vipLv);
            if (message.vipExp != null && Object.hasOwnProperty.call(message, "vipExp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.vipExp);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gold);
            if (message.diamond != null && Object.hasOwnProperty.call(message, "diamond"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.diamond);
            if (message.roomCard != null && Object.hasOwnProperty.call(message, "roomCard"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.roomCard);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.createTime);
            return writer;
        };

        /**
         * Encodes the specified RoleLoginOkMsg message, length delimited. Does not implicitly {@link account.RoleLoginOkMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {account.IRoleLoginOkMsg} message RoleLoginOkMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleLoginOkMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleLoginOkMsg message from the specified reader or buffer.
         * @function decode
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.RoleLoginOkMsg} RoleLoginOkMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleLoginOkMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.RoleLoginOkMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int32();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.lv = reader.int32();
                        break;
                    }
                case 4: {
                        message.lvExp = reader.int32();
                        break;
                    }
                case 5: {
                        message.vipLv = reader.int32();
                        break;
                    }
                case 6: {
                        message.vipExp = reader.int32();
                        break;
                    }
                case 7: {
                        message.gold = reader.int32();
                        break;
                    }
                case 8: {
                        message.diamond = reader.int32();
                        break;
                    }
                case 9: {
                        message.roomCard = reader.int32();
                        break;
                    }
                case 10: {
                        message.createTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleLoginOkMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.RoleLoginOkMsg} RoleLoginOkMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleLoginOkMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleLoginOkMsg message.
         * @function verify
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleLoginOkMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.lvExp != null && message.hasOwnProperty("lvExp"))
                if (!$util.isInteger(message.lvExp))
                    return "lvExp: integer expected";
            if (message.vipLv != null && message.hasOwnProperty("vipLv"))
                if (!$util.isInteger(message.vipLv))
                    return "vipLv: integer expected";
            if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                if (!$util.isInteger(message.vipExp))
                    return "vipExp: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                if (!$util.isInteger(message.roomCard))
                    return "roomCard: integer expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a RoleLoginOkMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.RoleLoginOkMsg} RoleLoginOkMsg
         */
        RoleLoginOkMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.account.RoleLoginOkMsg)
                return object;
            var message = new $root.account.RoleLoginOkMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.lv != null)
                message.lv = object.lv | 0;
            if (object.lvExp != null)
                message.lvExp = object.lvExp | 0;
            if (object.vipLv != null)
                message.vipLv = object.vipLv | 0;
            if (object.vipExp != null)
                message.vipExp = object.vipExp | 0;
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.diamond != null)
                message.diamond = object.diamond | 0;
            if (object.roomCard != null)
                message.roomCard = object.roomCard | 0;
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RoleLoginOkMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {account.RoleLoginOkMsg} message RoleLoginOkMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleLoginOkMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.nickname = "";
                object.lv = 0;
                object.lvExp = 0;
                object.vipLv = 0;
                object.vipExp = 0;
                object.gold = 0;
                object.diamond = 0;
                object.roomCard = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.lvExp != null && message.hasOwnProperty("lvExp"))
                object.lvExp = message.lvExp;
            if (message.vipLv != null && message.hasOwnProperty("vipLv"))
                object.vipLv = message.vipLv;
            if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                object.vipExp = message.vipExp;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                object.diamond = message.diamond;
            if (message.roomCard != null && message.hasOwnProperty("roomCard"))
                object.roomCard = message.roomCard;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            return object;
        };

        /**
         * Converts this RoleLoginOkMsg to JSON.
         * @function toJSON
         * @memberof account.RoleLoginOkMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleLoginOkMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoleLoginOkMsg
         * @function getTypeUrl
         * @memberof account.RoleLoginOkMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoleLoginOkMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/account.RoleLoginOkMsg";
        };

        return RoleLoginOkMsg;
    })();

    return account;
})();

$root.playerCheckPoint = (function() {

    /**
     * Namespace playerCheckPoint.
     * @exports playerCheckPoint
     * @namespace
     */
    var playerCheckPoint = {};

    playerCheckPoint.PointInfoReqMsg = (function() {

        /**
         * Properties of a PointInfoReqMsg.
         * @memberof playerCheckPoint
         * @interface IPointInfoReqMsg
         */

        /**
         * Constructs a new PointInfoReqMsg.
         * @memberof playerCheckPoint
         * @classdesc Represents a PointInfoReqMsg.
         * @implements IPointInfoReqMsg
         * @constructor
         * @param {playerCheckPoint.IPointInfoReqMsg=} [properties] Properties to set
         */
        function PointInfoReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PointInfoReqMsg instance using the specified properties.
         * @function create
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {playerCheckPoint.IPointInfoReqMsg=} [properties] Properties to set
         * @returns {playerCheckPoint.PointInfoReqMsg} PointInfoReqMsg instance
         */
        PointInfoReqMsg.create = function create(properties) {
            return new PointInfoReqMsg(properties);
        };

        /**
         * Encodes the specified PointInfoReqMsg message. Does not implicitly {@link playerCheckPoint.PointInfoReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {playerCheckPoint.IPointInfoReqMsg} message PointInfoReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointInfoReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PointInfoReqMsg message, length delimited. Does not implicitly {@link playerCheckPoint.PointInfoReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {playerCheckPoint.IPointInfoReqMsg} message PointInfoReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointInfoReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointInfoReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerCheckPoint.PointInfoReqMsg} PointInfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointInfoReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerCheckPoint.PointInfoReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PointInfoReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerCheckPoint.PointInfoReqMsg} PointInfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointInfoReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PointInfoReqMsg message.
         * @function verify
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointInfoReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PointInfoReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerCheckPoint.PointInfoReqMsg} PointInfoReqMsg
         */
        PointInfoReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerCheckPoint.PointInfoReqMsg)
                return object;
            return new $root.playerCheckPoint.PointInfoReqMsg();
        };

        /**
         * Creates a plain object from a PointInfoReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {playerCheckPoint.PointInfoReqMsg} message PointInfoReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PointInfoReqMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PointInfoReqMsg to JSON.
         * @function toJSON
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointInfoReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointInfoReqMsg
         * @function getTypeUrl
         * @memberof playerCheckPoint.PointInfoReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointInfoReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerCheckPoint.PointInfoReqMsg";
        };

        return PointInfoReqMsg;
    })();

    playerCheckPoint.PointInfoResMsg = (function() {

        /**
         * Properties of a PointInfoResMsg.
         * @memberof playerCheckPoint
         * @interface IPointInfoResMsg
         * @property {number|null} [checkPoint] PointInfoResMsg checkPoint
         * @property {number|null} [onHookTime] PointInfoResMsg onHookTime
         * @property {Array.<playerTask.IRewardInfoMsg>|null} [reward] PointInfoResMsg reward
         */

        /**
         * Constructs a new PointInfoResMsg.
         * @memberof playerCheckPoint
         * @classdesc Represents a PointInfoResMsg.
         * @implements IPointInfoResMsg
         * @constructor
         * @param {playerCheckPoint.IPointInfoResMsg=} [properties] Properties to set
         */
        function PointInfoResMsg(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PointInfoResMsg checkPoint.
         * @member {number} checkPoint
         * @memberof playerCheckPoint.PointInfoResMsg
         * @instance
         */
        PointInfoResMsg.prototype.checkPoint = 0;

        /**
         * PointInfoResMsg onHookTime.
         * @member {number} onHookTime
         * @memberof playerCheckPoint.PointInfoResMsg
         * @instance
         */
        PointInfoResMsg.prototype.onHookTime = 0;

        /**
         * PointInfoResMsg reward.
         * @member {Array.<playerTask.IRewardInfoMsg>} reward
         * @memberof playerCheckPoint.PointInfoResMsg
         * @instance
         */
        PointInfoResMsg.prototype.reward = $util.emptyArray;

        /**
         * Creates a new PointInfoResMsg instance using the specified properties.
         * @function create
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {playerCheckPoint.IPointInfoResMsg=} [properties] Properties to set
         * @returns {playerCheckPoint.PointInfoResMsg} PointInfoResMsg instance
         */
        PointInfoResMsg.create = function create(properties) {
            return new PointInfoResMsg(properties);
        };

        /**
         * Encodes the specified PointInfoResMsg message. Does not implicitly {@link playerCheckPoint.PointInfoResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {playerCheckPoint.IPointInfoResMsg} message PointInfoResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointInfoResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.checkPoint != null && Object.hasOwnProperty.call(message, "checkPoint"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.checkPoint);
            if (message.onHookTime != null && Object.hasOwnProperty.call(message, "onHookTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onHookTime);
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.playerTask.RewardInfoMsg.encode(message.reward[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PointInfoResMsg message, length delimited. Does not implicitly {@link playerCheckPoint.PointInfoResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {playerCheckPoint.IPointInfoResMsg} message PointInfoResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointInfoResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointInfoResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerCheckPoint.PointInfoResMsg} PointInfoResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointInfoResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerCheckPoint.PointInfoResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.checkPoint = reader.int32();
                        break;
                    }
                case 2: {
                        message.onHookTime = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.playerTask.RewardInfoMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PointInfoResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerCheckPoint.PointInfoResMsg} PointInfoResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointInfoResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PointInfoResMsg message.
         * @function verify
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointInfoResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
                if (!$util.isInteger(message.checkPoint))
                    return "checkPoint: integer expected";
            if (message.onHookTime != null && message.hasOwnProperty("onHookTime"))
                if (!$util.isInteger(message.onHookTime))
                    return "onHookTime: integer expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.playerTask.RewardInfoMsg.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PointInfoResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerCheckPoint.PointInfoResMsg} PointInfoResMsg
         */
        PointInfoResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerCheckPoint.PointInfoResMsg)
                return object;
            var message = new $root.playerCheckPoint.PointInfoResMsg();
            if (object.checkPoint != null)
                message.checkPoint = object.checkPoint | 0;
            if (object.onHookTime != null)
                message.onHookTime = object.onHookTime | 0;
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".playerCheckPoint.PointInfoResMsg.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".playerCheckPoint.PointInfoResMsg.reward: object expected");
                    message.reward[i] = $root.playerTask.RewardInfoMsg.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PointInfoResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {playerCheckPoint.PointInfoResMsg} message PointInfoResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PointInfoResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (options.defaults) {
                object.checkPoint = 0;
                object.onHookTime = 0;
            }
            if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
                object.checkPoint = message.checkPoint;
            if (message.onHookTime != null && message.hasOwnProperty("onHookTime"))
                object.onHookTime = message.onHookTime;
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.playerTask.RewardInfoMsg.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this PointInfoResMsg to JSON.
         * @function toJSON
         * @memberof playerCheckPoint.PointInfoResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointInfoResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointInfoResMsg
         * @function getTypeUrl
         * @memberof playerCheckPoint.PointInfoResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointInfoResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerCheckPoint.PointInfoResMsg";
        };

        return PointInfoResMsg;
    })();

    playerCheckPoint.PointReqMsg = (function() {

        /**
         * Properties of a PointReqMsg.
         * @memberof playerCheckPoint
         * @interface IPointReqMsg
         * @property {number|null} [id] PointReqMsg id
         * @property {boolean|null} [win] PointReqMsg win
         */

        /**
         * Constructs a new PointReqMsg.
         * @memberof playerCheckPoint
         * @classdesc Represents a PointReqMsg.
         * @implements IPointReqMsg
         * @constructor
         * @param {playerCheckPoint.IPointReqMsg=} [properties] Properties to set
         */
        function PointReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PointReqMsg id.
         * @member {number} id
         * @memberof playerCheckPoint.PointReqMsg
         * @instance
         */
        PointReqMsg.prototype.id = 0;

        /**
         * PointReqMsg win.
         * @member {boolean} win
         * @memberof playerCheckPoint.PointReqMsg
         * @instance
         */
        PointReqMsg.prototype.win = false;

        /**
         * Creates a new PointReqMsg instance using the specified properties.
         * @function create
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {playerCheckPoint.IPointReqMsg=} [properties] Properties to set
         * @returns {playerCheckPoint.PointReqMsg} PointReqMsg instance
         */
        PointReqMsg.create = function create(properties) {
            return new PointReqMsg(properties);
        };

        /**
         * Encodes the specified PointReqMsg message. Does not implicitly {@link playerCheckPoint.PointReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {playerCheckPoint.IPointReqMsg} message PointReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.win);
            return writer;
        };

        /**
         * Encodes the specified PointReqMsg message, length delimited. Does not implicitly {@link playerCheckPoint.PointReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {playerCheckPoint.IPointReqMsg} message PointReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerCheckPoint.PointReqMsg} PointReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerCheckPoint.PointReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.win = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PointReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerCheckPoint.PointReqMsg} PointReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PointReqMsg message.
         * @function verify
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.win != null && message.hasOwnProperty("win"))
                if (typeof message.win !== "boolean")
                    return "win: boolean expected";
            return null;
        };

        /**
         * Creates a PointReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerCheckPoint.PointReqMsg} PointReqMsg
         */
        PointReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerCheckPoint.PointReqMsg)
                return object;
            var message = new $root.playerCheckPoint.PointReqMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.win != null)
                message.win = Boolean(object.win);
            return message;
        };

        /**
         * Creates a plain object from a PointReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {playerCheckPoint.PointReqMsg} message PointReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PointReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.win = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.win != null && message.hasOwnProperty("win"))
                object.win = message.win;
            return object;
        };

        /**
         * Converts this PointReqMsg to JSON.
         * @function toJSON
         * @memberof playerCheckPoint.PointReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointReqMsg
         * @function getTypeUrl
         * @memberof playerCheckPoint.PointReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerCheckPoint.PointReqMsg";
        };

        return PointReqMsg;
    })();

    playerCheckPoint.PointResMsg = (function() {

        /**
         * Properties of a PointResMsg.
         * @memberof playerCheckPoint
         * @interface IPointResMsg
         * @property {number|null} [checkPoint] PointResMsg checkPoint
         * @property {Array.<playerTask.IRewardInfoMsg>|null} [reward] PointResMsg reward
         */

        /**
         * Constructs a new PointResMsg.
         * @memberof playerCheckPoint
         * @classdesc Represents a PointResMsg.
         * @implements IPointResMsg
         * @constructor
         * @param {playerCheckPoint.IPointResMsg=} [properties] Properties to set
         */
        function PointResMsg(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PointResMsg checkPoint.
         * @member {number} checkPoint
         * @memberof playerCheckPoint.PointResMsg
         * @instance
         */
        PointResMsg.prototype.checkPoint = 0;

        /**
         * PointResMsg reward.
         * @member {Array.<playerTask.IRewardInfoMsg>} reward
         * @memberof playerCheckPoint.PointResMsg
         * @instance
         */
        PointResMsg.prototype.reward = $util.emptyArray;

        /**
         * Creates a new PointResMsg instance using the specified properties.
         * @function create
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {playerCheckPoint.IPointResMsg=} [properties] Properties to set
         * @returns {playerCheckPoint.PointResMsg} PointResMsg instance
         */
        PointResMsg.create = function create(properties) {
            return new PointResMsg(properties);
        };

        /**
         * Encodes the specified PointResMsg message. Does not implicitly {@link playerCheckPoint.PointResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {playerCheckPoint.IPointResMsg} message PointResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.checkPoint != null && Object.hasOwnProperty.call(message, "checkPoint"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.checkPoint);
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.playerTask.RewardInfoMsg.encode(message.reward[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PointResMsg message, length delimited. Does not implicitly {@link playerCheckPoint.PointResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {playerCheckPoint.IPointResMsg} message PointResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerCheckPoint.PointResMsg} PointResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerCheckPoint.PointResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.checkPoint = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.playerTask.RewardInfoMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PointResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerCheckPoint.PointResMsg} PointResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PointResMsg message.
         * @function verify
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
                if (!$util.isInteger(message.checkPoint))
                    return "checkPoint: integer expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.playerTask.RewardInfoMsg.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PointResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerCheckPoint.PointResMsg} PointResMsg
         */
        PointResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerCheckPoint.PointResMsg)
                return object;
            var message = new $root.playerCheckPoint.PointResMsg();
            if (object.checkPoint != null)
                message.checkPoint = object.checkPoint | 0;
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".playerCheckPoint.PointResMsg.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".playerCheckPoint.PointResMsg.reward: object expected");
                    message.reward[i] = $root.playerTask.RewardInfoMsg.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PointResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {playerCheckPoint.PointResMsg} message PointResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PointResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (options.defaults)
                object.checkPoint = 0;
            if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
                object.checkPoint = message.checkPoint;
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.playerTask.RewardInfoMsg.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this PointResMsg to JSON.
         * @function toJSON
         * @memberof playerCheckPoint.PointResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointResMsg
         * @function getTypeUrl
         * @memberof playerCheckPoint.PointResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerCheckPoint.PointResMsg";
        };

        return PointResMsg;
    })();

    playerCheckPoint.OnHookRewardsReqMsg = (function() {

        /**
         * Properties of an OnHookRewardsReqMsg.
         * @memberof playerCheckPoint
         * @interface IOnHookRewardsReqMsg
         */

        /**
         * Constructs a new OnHookRewardsReqMsg.
         * @memberof playerCheckPoint
         * @classdesc Represents an OnHookRewardsReqMsg.
         * @implements IOnHookRewardsReqMsg
         * @constructor
         * @param {playerCheckPoint.IOnHookRewardsReqMsg=} [properties] Properties to set
         */
        function OnHookRewardsReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new OnHookRewardsReqMsg instance using the specified properties.
         * @function create
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {playerCheckPoint.IOnHookRewardsReqMsg=} [properties] Properties to set
         * @returns {playerCheckPoint.OnHookRewardsReqMsg} OnHookRewardsReqMsg instance
         */
        OnHookRewardsReqMsg.create = function create(properties) {
            return new OnHookRewardsReqMsg(properties);
        };

        /**
         * Encodes the specified OnHookRewardsReqMsg message. Does not implicitly {@link playerCheckPoint.OnHookRewardsReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {playerCheckPoint.IOnHookRewardsReqMsg} message OnHookRewardsReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnHookRewardsReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified OnHookRewardsReqMsg message, length delimited. Does not implicitly {@link playerCheckPoint.OnHookRewardsReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {playerCheckPoint.IOnHookRewardsReqMsg} message OnHookRewardsReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnHookRewardsReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnHookRewardsReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerCheckPoint.OnHookRewardsReqMsg} OnHookRewardsReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnHookRewardsReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerCheckPoint.OnHookRewardsReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnHookRewardsReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerCheckPoint.OnHookRewardsReqMsg} OnHookRewardsReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnHookRewardsReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnHookRewardsReqMsg message.
         * @function verify
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnHookRewardsReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an OnHookRewardsReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerCheckPoint.OnHookRewardsReqMsg} OnHookRewardsReqMsg
         */
        OnHookRewardsReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerCheckPoint.OnHookRewardsReqMsg)
                return object;
            return new $root.playerCheckPoint.OnHookRewardsReqMsg();
        };

        /**
         * Creates a plain object from an OnHookRewardsReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {playerCheckPoint.OnHookRewardsReqMsg} message OnHookRewardsReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnHookRewardsReqMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this OnHookRewardsReqMsg to JSON.
         * @function toJSON
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnHookRewardsReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OnHookRewardsReqMsg
         * @function getTypeUrl
         * @memberof playerCheckPoint.OnHookRewardsReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OnHookRewardsReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerCheckPoint.OnHookRewardsReqMsg";
        };

        return OnHookRewardsReqMsg;
    })();

    playerCheckPoint.OnHookRewardsResMsg = (function() {

        /**
         * Properties of an OnHookRewardsResMsg.
         * @memberof playerCheckPoint
         * @interface IOnHookRewardsResMsg
         * @property {number|null} [onHookTime] OnHookRewardsResMsg onHookTime
         * @property {Array.<playerTask.IRewardInfoMsg>|null} [reward] OnHookRewardsResMsg reward
         */

        /**
         * Constructs a new OnHookRewardsResMsg.
         * @memberof playerCheckPoint
         * @classdesc Represents an OnHookRewardsResMsg.
         * @implements IOnHookRewardsResMsg
         * @constructor
         * @param {playerCheckPoint.IOnHookRewardsResMsg=} [properties] Properties to set
         */
        function OnHookRewardsResMsg(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnHookRewardsResMsg onHookTime.
         * @member {number} onHookTime
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @instance
         */
        OnHookRewardsResMsg.prototype.onHookTime = 0;

        /**
         * OnHookRewardsResMsg reward.
         * @member {Array.<playerTask.IRewardInfoMsg>} reward
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @instance
         */
        OnHookRewardsResMsg.prototype.reward = $util.emptyArray;

        /**
         * Creates a new OnHookRewardsResMsg instance using the specified properties.
         * @function create
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {playerCheckPoint.IOnHookRewardsResMsg=} [properties] Properties to set
         * @returns {playerCheckPoint.OnHookRewardsResMsg} OnHookRewardsResMsg instance
         */
        OnHookRewardsResMsg.create = function create(properties) {
            return new OnHookRewardsResMsg(properties);
        };

        /**
         * Encodes the specified OnHookRewardsResMsg message. Does not implicitly {@link playerCheckPoint.OnHookRewardsResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {playerCheckPoint.IOnHookRewardsResMsg} message OnHookRewardsResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnHookRewardsResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.onHookTime != null && Object.hasOwnProperty.call(message, "onHookTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.onHookTime);
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.playerTask.RewardInfoMsg.encode(message.reward[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OnHookRewardsResMsg message, length delimited. Does not implicitly {@link playerCheckPoint.OnHookRewardsResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {playerCheckPoint.IOnHookRewardsResMsg} message OnHookRewardsResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnHookRewardsResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnHookRewardsResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerCheckPoint.OnHookRewardsResMsg} OnHookRewardsResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnHookRewardsResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerCheckPoint.OnHookRewardsResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.onHookTime = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.playerTask.RewardInfoMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnHookRewardsResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerCheckPoint.OnHookRewardsResMsg} OnHookRewardsResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnHookRewardsResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnHookRewardsResMsg message.
         * @function verify
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnHookRewardsResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.onHookTime != null && message.hasOwnProperty("onHookTime"))
                if (!$util.isInteger(message.onHookTime))
                    return "onHookTime: integer expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.playerTask.RewardInfoMsg.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OnHookRewardsResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerCheckPoint.OnHookRewardsResMsg} OnHookRewardsResMsg
         */
        OnHookRewardsResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerCheckPoint.OnHookRewardsResMsg)
                return object;
            var message = new $root.playerCheckPoint.OnHookRewardsResMsg();
            if (object.onHookTime != null)
                message.onHookTime = object.onHookTime | 0;
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".playerCheckPoint.OnHookRewardsResMsg.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".playerCheckPoint.OnHookRewardsResMsg.reward: object expected");
                    message.reward[i] = $root.playerTask.RewardInfoMsg.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OnHookRewardsResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {playerCheckPoint.OnHookRewardsResMsg} message OnHookRewardsResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnHookRewardsResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (options.defaults)
                object.onHookTime = 0;
            if (message.onHookTime != null && message.hasOwnProperty("onHookTime"))
                object.onHookTime = message.onHookTime;
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.playerTask.RewardInfoMsg.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this OnHookRewardsResMsg to JSON.
         * @function toJSON
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnHookRewardsResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OnHookRewardsResMsg
         * @function getTypeUrl
         * @memberof playerCheckPoint.OnHookRewardsResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OnHookRewardsResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerCheckPoint.OnHookRewardsResMsg";
        };

        return OnHookRewardsResMsg;
    })();

    return playerCheckPoint;
})();

$root.playerTask = (function() {

    /**
     * Namespace playerTask.
     * @exports playerTask
     * @namespace
     */
    var playerTask = {};

    playerTask.PlayerTaskListMsgReq = (function() {

        /**
         * Properties of a PlayerTaskListMsgReq.
         * @memberof playerTask
         * @interface IPlayerTaskListMsgReq
         */

        /**
         * Constructs a new PlayerTaskListMsgReq.
         * @memberof playerTask
         * @classdesc Represents a PlayerTaskListMsgReq.
         * @implements IPlayerTaskListMsgReq
         * @constructor
         * @param {playerTask.IPlayerTaskListMsgReq=} [properties] Properties to set
         */
        function PlayerTaskListMsgReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PlayerTaskListMsgReq instance using the specified properties.
         * @function create
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {playerTask.IPlayerTaskListMsgReq=} [properties] Properties to set
         * @returns {playerTask.PlayerTaskListMsgReq} PlayerTaskListMsgReq instance
         */
        PlayerTaskListMsgReq.create = function create(properties) {
            return new PlayerTaskListMsgReq(properties);
        };

        /**
         * Encodes the specified PlayerTaskListMsgReq message. Does not implicitly {@link playerTask.PlayerTaskListMsgReq.verify|verify} messages.
         * @function encode
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {playerTask.IPlayerTaskListMsgReq} message PlayerTaskListMsgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerTaskListMsgReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PlayerTaskListMsgReq message, length delimited. Does not implicitly {@link playerTask.PlayerTaskListMsgReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {playerTask.IPlayerTaskListMsgReq} message PlayerTaskListMsgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerTaskListMsgReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerTaskListMsgReq message from the specified reader or buffer.
         * @function decode
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTask.PlayerTaskListMsgReq} PlayerTaskListMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerTaskListMsgReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTask.PlayerTaskListMsgReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerTaskListMsgReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTask.PlayerTaskListMsgReq} PlayerTaskListMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerTaskListMsgReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerTaskListMsgReq message.
         * @function verify
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerTaskListMsgReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PlayerTaskListMsgReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTask.PlayerTaskListMsgReq} PlayerTaskListMsgReq
         */
        PlayerTaskListMsgReq.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTask.PlayerTaskListMsgReq)
                return object;
            return new $root.playerTask.PlayerTaskListMsgReq();
        };

        /**
         * Creates a plain object from a PlayerTaskListMsgReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {playerTask.PlayerTaskListMsgReq} message PlayerTaskListMsgReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerTaskListMsgReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PlayerTaskListMsgReq to JSON.
         * @function toJSON
         * @memberof playerTask.PlayerTaskListMsgReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerTaskListMsgReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerTaskListMsgReq
         * @function getTypeUrl
         * @memberof playerTask.PlayerTaskListMsgReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerTaskListMsgReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerTask.PlayerTaskListMsgReq";
        };

        return PlayerTaskListMsgReq;
    })();

    playerTask.PlayerTaskListMsgRes = (function() {

        /**
         * Properties of a PlayerTaskListMsgRes.
         * @memberof playerTask
         * @interface IPlayerTaskListMsgRes
         * @property {Array.<playerTask.ITaskInfoMsg>|null} [tasks] PlayerTaskListMsgRes tasks
         */

        /**
         * Constructs a new PlayerTaskListMsgRes.
         * @memberof playerTask
         * @classdesc Represents a PlayerTaskListMsgRes.
         * @implements IPlayerTaskListMsgRes
         * @constructor
         * @param {playerTask.IPlayerTaskListMsgRes=} [properties] Properties to set
         */
        function PlayerTaskListMsgRes(properties) {
            this.tasks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerTaskListMsgRes tasks.
         * @member {Array.<playerTask.ITaskInfoMsg>} tasks
         * @memberof playerTask.PlayerTaskListMsgRes
         * @instance
         */
        PlayerTaskListMsgRes.prototype.tasks = $util.emptyArray;

        /**
         * Creates a new PlayerTaskListMsgRes instance using the specified properties.
         * @function create
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {playerTask.IPlayerTaskListMsgRes=} [properties] Properties to set
         * @returns {playerTask.PlayerTaskListMsgRes} PlayerTaskListMsgRes instance
         */
        PlayerTaskListMsgRes.create = function create(properties) {
            return new PlayerTaskListMsgRes(properties);
        };

        /**
         * Encodes the specified PlayerTaskListMsgRes message. Does not implicitly {@link playerTask.PlayerTaskListMsgRes.verify|verify} messages.
         * @function encode
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {playerTask.IPlayerTaskListMsgRes} message PlayerTaskListMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerTaskListMsgRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tasks != null && message.tasks.length)
                for (var i = 0; i < message.tasks.length; ++i)
                    $root.playerTask.TaskInfoMsg.encode(message.tasks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerTaskListMsgRes message, length delimited. Does not implicitly {@link playerTask.PlayerTaskListMsgRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {playerTask.IPlayerTaskListMsgRes} message PlayerTaskListMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerTaskListMsgRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerTaskListMsgRes message from the specified reader or buffer.
         * @function decode
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTask.PlayerTaskListMsgRes} PlayerTaskListMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerTaskListMsgRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTask.PlayerTaskListMsgRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.tasks && message.tasks.length))
                            message.tasks = [];
                        message.tasks.push($root.playerTask.TaskInfoMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerTaskListMsgRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTask.PlayerTaskListMsgRes} PlayerTaskListMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerTaskListMsgRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerTaskListMsgRes message.
         * @function verify
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerTaskListMsgRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                if (!Array.isArray(message.tasks))
                    return "tasks: array expected";
                for (var i = 0; i < message.tasks.length; ++i) {
                    var error = $root.playerTask.TaskInfoMsg.verify(message.tasks[i]);
                    if (error)
                        return "tasks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerTaskListMsgRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTask.PlayerTaskListMsgRes} PlayerTaskListMsgRes
         */
        PlayerTaskListMsgRes.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTask.PlayerTaskListMsgRes)
                return object;
            var message = new $root.playerTask.PlayerTaskListMsgRes();
            if (object.tasks) {
                if (!Array.isArray(object.tasks))
                    throw TypeError(".playerTask.PlayerTaskListMsgRes.tasks: array expected");
                message.tasks = [];
                for (var i = 0; i < object.tasks.length; ++i) {
                    if (typeof object.tasks[i] !== "object")
                        throw TypeError(".playerTask.PlayerTaskListMsgRes.tasks: object expected");
                    message.tasks[i] = $root.playerTask.TaskInfoMsg.fromObject(object.tasks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerTaskListMsgRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {playerTask.PlayerTaskListMsgRes} message PlayerTaskListMsgRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerTaskListMsgRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tasks = [];
            if (message.tasks && message.tasks.length) {
                object.tasks = [];
                for (var j = 0; j < message.tasks.length; ++j)
                    object.tasks[j] = $root.playerTask.TaskInfoMsg.toObject(message.tasks[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerTaskListMsgRes to JSON.
         * @function toJSON
         * @memberof playerTask.PlayerTaskListMsgRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerTaskListMsgRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerTaskListMsgRes
         * @function getTypeUrl
         * @memberof playerTask.PlayerTaskListMsgRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerTaskListMsgRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerTask.PlayerTaskListMsgRes";
        };

        return PlayerTaskListMsgRes;
    })();

    playerTask.upTaskMsgRes = (function() {

        /**
         * Properties of an upTaskMsgRes.
         * @memberof playerTask
         * @interface IupTaskMsgRes
         * @property {playerTask.ITaskInfoMsg|null} [playerTask] upTaskMsgRes playerTask
         */

        /**
         * Constructs a new upTaskMsgRes.
         * @memberof playerTask
         * @classdesc Represents an upTaskMsgRes.
         * @implements IupTaskMsgRes
         * @constructor
         * @param {playerTask.IupTaskMsgRes=} [properties] Properties to set
         */
        function upTaskMsgRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * upTaskMsgRes playerTask.
         * @member {playerTask.ITaskInfoMsg|null|undefined} playerTask
         * @memberof playerTask.upTaskMsgRes
         * @instance
         */
        upTaskMsgRes.prototype.playerTask = null;

        /**
         * Creates a new upTaskMsgRes instance using the specified properties.
         * @function create
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {playerTask.IupTaskMsgRes=} [properties] Properties to set
         * @returns {playerTask.upTaskMsgRes} upTaskMsgRes instance
         */
        upTaskMsgRes.create = function create(properties) {
            return new upTaskMsgRes(properties);
        };

        /**
         * Encodes the specified upTaskMsgRes message. Does not implicitly {@link playerTask.upTaskMsgRes.verify|verify} messages.
         * @function encode
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {playerTask.IupTaskMsgRes} message upTaskMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        upTaskMsgRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerTask != null && Object.hasOwnProperty.call(message, "playerTask"))
                $root.playerTask.TaskInfoMsg.encode(message.playerTask, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified upTaskMsgRes message, length delimited. Does not implicitly {@link playerTask.upTaskMsgRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {playerTask.IupTaskMsgRes} message upTaskMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        upTaskMsgRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an upTaskMsgRes message from the specified reader or buffer.
         * @function decode
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTask.upTaskMsgRes} upTaskMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        upTaskMsgRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTask.upTaskMsgRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerTask = $root.playerTask.TaskInfoMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an upTaskMsgRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTask.upTaskMsgRes} upTaskMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        upTaskMsgRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an upTaskMsgRes message.
         * @function verify
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        upTaskMsgRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerTask != null && message.hasOwnProperty("playerTask")) {
                var error = $root.playerTask.TaskInfoMsg.verify(message.playerTask);
                if (error)
                    return "playerTask." + error;
            }
            return null;
        };

        /**
         * Creates an upTaskMsgRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTask.upTaskMsgRes} upTaskMsgRes
         */
        upTaskMsgRes.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTask.upTaskMsgRes)
                return object;
            var message = new $root.playerTask.upTaskMsgRes();
            if (object.playerTask != null) {
                if (typeof object.playerTask !== "object")
                    throw TypeError(".playerTask.upTaskMsgRes.playerTask: object expected");
                message.playerTask = $root.playerTask.TaskInfoMsg.fromObject(object.playerTask);
            }
            return message;
        };

        /**
         * Creates a plain object from an upTaskMsgRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {playerTask.upTaskMsgRes} message upTaskMsgRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        upTaskMsgRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerTask = null;
            if (message.playerTask != null && message.hasOwnProperty("playerTask"))
                object.playerTask = $root.playerTask.TaskInfoMsg.toObject(message.playerTask, options);
            return object;
        };

        /**
         * Converts this upTaskMsgRes to JSON.
         * @function toJSON
         * @memberof playerTask.upTaskMsgRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        upTaskMsgRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for upTaskMsgRes
         * @function getTypeUrl
         * @memberof playerTask.upTaskMsgRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        upTaskMsgRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerTask.upTaskMsgRes";
        };

        return upTaskMsgRes;
    })();

    playerTask.TaskInfoMsg = (function() {

        /**
         * Properties of a TaskInfoMsg.
         * @memberof playerTask
         * @interface ITaskInfoMsg
         * @property {number|null} [taskId] TaskInfoMsg taskId
         * @property {number|null} [taskType] TaskInfoMsg taskType
         * @property {number|null} [step] TaskInfoMsg step
         * @property {string|null} [taskName] TaskInfoMsg taskName
         * @property {number|null} [state] TaskInfoMsg state
         * @property {number|null} [process] TaskInfoMsg process
         * @property {number|null} [conditionNum] TaskInfoMsg conditionNum
         * @property {playerTask.IRewardsMsg|null} [rewards] TaskInfoMsg rewards
         */

        /**
         * Constructs a new TaskInfoMsg.
         * @memberof playerTask
         * @classdesc Represents a TaskInfoMsg.
         * @implements ITaskInfoMsg
         * @constructor
         * @param {playerTask.ITaskInfoMsg=} [properties] Properties to set
         */
        function TaskInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskInfoMsg taskId.
         * @member {number} taskId
         * @memberof playerTask.TaskInfoMsg
         * @instance
         */
        TaskInfoMsg.prototype.taskId = 0;

        /**
         * TaskInfoMsg taskType.
         * @member {number} taskType
         * @memberof playerTask.TaskInfoMsg
         * @instance
         */
        TaskInfoMsg.prototype.taskType = 0;

        /**
         * TaskInfoMsg step.
         * @member {number} step
         * @memberof playerTask.TaskInfoMsg
         * @instance
         */
        TaskInfoMsg.prototype.step = 0;

        /**
         * TaskInfoMsg taskName.
         * @member {string} taskName
         * @memberof playerTask.TaskInfoMsg
         * @instance
         */
        TaskInfoMsg.prototype.taskName = "";

        /**
         * TaskInfoMsg state.
         * @member {number} state
         * @memberof playerTask.TaskInfoMsg
         * @instance
         */
        TaskInfoMsg.prototype.state = 0;

        /**
         * TaskInfoMsg process.
         * @member {number} process
         * @memberof playerTask.TaskInfoMsg
         * @instance
         */
        TaskInfoMsg.prototype.process = 0;

        /**
         * TaskInfoMsg conditionNum.
         * @member {number} conditionNum
         * @memberof playerTask.TaskInfoMsg
         * @instance
         */
        TaskInfoMsg.prototype.conditionNum = 0;

        /**
         * TaskInfoMsg rewards.
         * @member {playerTask.IRewardsMsg|null|undefined} rewards
         * @memberof playerTask.TaskInfoMsg
         * @instance
         */
        TaskInfoMsg.prototype.rewards = null;

        /**
         * Creates a new TaskInfoMsg instance using the specified properties.
         * @function create
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {playerTask.ITaskInfoMsg=} [properties] Properties to set
         * @returns {playerTask.TaskInfoMsg} TaskInfoMsg instance
         */
        TaskInfoMsg.create = function create(properties) {
            return new TaskInfoMsg(properties);
        };

        /**
         * Encodes the specified TaskInfoMsg message. Does not implicitly {@link playerTask.TaskInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {playerTask.ITaskInfoMsg} message TaskInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.taskId);
            if (message.taskType != null && Object.hasOwnProperty.call(message, "taskType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taskType);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.step);
            if (message.taskName != null && Object.hasOwnProperty.call(message, "taskName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.taskName);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            if (message.process != null && Object.hasOwnProperty.call(message, "process"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.process);
            if (message.conditionNum != null && Object.hasOwnProperty.call(message, "conditionNum"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.conditionNum);
            if (message.rewards != null && Object.hasOwnProperty.call(message, "rewards"))
                $root.playerTask.RewardsMsg.encode(message.rewards, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TaskInfoMsg message, length delimited. Does not implicitly {@link playerTask.TaskInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {playerTask.ITaskInfoMsg} message TaskInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTask.TaskInfoMsg} TaskInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTask.TaskInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.taskId = reader.int32();
                        break;
                    }
                case 2: {
                        message.taskType = reader.int32();
                        break;
                    }
                case 3: {
                        message.step = reader.int32();
                        break;
                    }
                case 4: {
                        message.taskName = reader.string();
                        break;
                    }
                case 5: {
                        message.state = reader.int32();
                        break;
                    }
                case 6: {
                        message.process = reader.int32();
                        break;
                    }
                case 7: {
                        message.conditionNum = reader.int32();
                        break;
                    }
                case 8: {
                        message.rewards = $root.playerTask.RewardsMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TaskInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTask.TaskInfoMsg} TaskInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskInfoMsg message.
         * @function verify
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isInteger(message.taskId))
                    return "taskId: integer expected";
            if (message.taskType != null && message.hasOwnProperty("taskType"))
                if (!$util.isInteger(message.taskType))
                    return "taskType: integer expected";
            if (message.step != null && message.hasOwnProperty("step"))
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            if (message.taskName != null && message.hasOwnProperty("taskName"))
                if (!$util.isString(message.taskName))
                    return "taskName: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.process != null && message.hasOwnProperty("process"))
                if (!$util.isInteger(message.process))
                    return "process: integer expected";
            if (message.conditionNum != null && message.hasOwnProperty("conditionNum"))
                if (!$util.isInteger(message.conditionNum))
                    return "conditionNum: integer expected";
            if (message.rewards != null && message.hasOwnProperty("rewards")) {
                var error = $root.playerTask.RewardsMsg.verify(message.rewards);
                if (error)
                    return "rewards." + error;
            }
            return null;
        };

        /**
         * Creates a TaskInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTask.TaskInfoMsg} TaskInfoMsg
         */
        TaskInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTask.TaskInfoMsg)
                return object;
            var message = new $root.playerTask.TaskInfoMsg();
            if (object.taskId != null)
                message.taskId = object.taskId | 0;
            if (object.taskType != null)
                message.taskType = object.taskType | 0;
            if (object.step != null)
                message.step = object.step | 0;
            if (object.taskName != null)
                message.taskName = String(object.taskName);
            if (object.state != null)
                message.state = object.state | 0;
            if (object.process != null)
                message.process = object.process | 0;
            if (object.conditionNum != null)
                message.conditionNum = object.conditionNum | 0;
            if (object.rewards != null) {
                if (typeof object.rewards !== "object")
                    throw TypeError(".playerTask.TaskInfoMsg.rewards: object expected");
                message.rewards = $root.playerTask.RewardsMsg.fromObject(object.rewards);
            }
            return message;
        };

        /**
         * Creates a plain object from a TaskInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {playerTask.TaskInfoMsg} message TaskInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.taskId = 0;
                object.taskType = 0;
                object.step = 0;
                object.taskName = "";
                object.state = 0;
                object.process = 0;
                object.conditionNum = 0;
                object.rewards = null;
            }
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.taskType != null && message.hasOwnProperty("taskType"))
                object.taskType = message.taskType;
            if (message.step != null && message.hasOwnProperty("step"))
                object.step = message.step;
            if (message.taskName != null && message.hasOwnProperty("taskName"))
                object.taskName = message.taskName;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.process != null && message.hasOwnProperty("process"))
                object.process = message.process;
            if (message.conditionNum != null && message.hasOwnProperty("conditionNum"))
                object.conditionNum = message.conditionNum;
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                object.rewards = $root.playerTask.RewardsMsg.toObject(message.rewards, options);
            return object;
        };

        /**
         * Converts this TaskInfoMsg to JSON.
         * @function toJSON
         * @memberof playerTask.TaskInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TaskInfoMsg
         * @function getTypeUrl
         * @memberof playerTask.TaskInfoMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TaskInfoMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerTask.TaskInfoMsg";
        };

        return TaskInfoMsg;
    })();

    playerTask.CommitTaskMsgReq = (function() {

        /**
         * Properties of a CommitTaskMsgReq.
         * @memberof playerTask
         * @interface ICommitTaskMsgReq
         * @property {number|null} [taskId] CommitTaskMsgReq taskId
         */

        /**
         * Constructs a new CommitTaskMsgReq.
         * @memberof playerTask
         * @classdesc Represents a CommitTaskMsgReq.
         * @implements ICommitTaskMsgReq
         * @constructor
         * @param {playerTask.ICommitTaskMsgReq=} [properties] Properties to set
         */
        function CommitTaskMsgReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommitTaskMsgReq taskId.
         * @member {number} taskId
         * @memberof playerTask.CommitTaskMsgReq
         * @instance
         */
        CommitTaskMsgReq.prototype.taskId = 0;

        /**
         * Creates a new CommitTaskMsgReq instance using the specified properties.
         * @function create
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {playerTask.ICommitTaskMsgReq=} [properties] Properties to set
         * @returns {playerTask.CommitTaskMsgReq} CommitTaskMsgReq instance
         */
        CommitTaskMsgReq.create = function create(properties) {
            return new CommitTaskMsgReq(properties);
        };

        /**
         * Encodes the specified CommitTaskMsgReq message. Does not implicitly {@link playerTask.CommitTaskMsgReq.verify|verify} messages.
         * @function encode
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {playerTask.ICommitTaskMsgReq} message CommitTaskMsgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommitTaskMsgReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.taskId);
            return writer;
        };

        /**
         * Encodes the specified CommitTaskMsgReq message, length delimited. Does not implicitly {@link playerTask.CommitTaskMsgReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {playerTask.ICommitTaskMsgReq} message CommitTaskMsgReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommitTaskMsgReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommitTaskMsgReq message from the specified reader or buffer.
         * @function decode
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTask.CommitTaskMsgReq} CommitTaskMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommitTaskMsgReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTask.CommitTaskMsgReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.taskId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommitTaskMsgReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTask.CommitTaskMsgReq} CommitTaskMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommitTaskMsgReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommitTaskMsgReq message.
         * @function verify
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommitTaskMsgReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isInteger(message.taskId))
                    return "taskId: integer expected";
            return null;
        };

        /**
         * Creates a CommitTaskMsgReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTask.CommitTaskMsgReq} CommitTaskMsgReq
         */
        CommitTaskMsgReq.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTask.CommitTaskMsgReq)
                return object;
            var message = new $root.playerTask.CommitTaskMsgReq();
            if (object.taskId != null)
                message.taskId = object.taskId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CommitTaskMsgReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {playerTask.CommitTaskMsgReq} message CommitTaskMsgReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommitTaskMsgReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.taskId = 0;
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            return object;
        };

        /**
         * Converts this CommitTaskMsgReq to JSON.
         * @function toJSON
         * @memberof playerTask.CommitTaskMsgReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommitTaskMsgReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommitTaskMsgReq
         * @function getTypeUrl
         * @memberof playerTask.CommitTaskMsgReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommitTaskMsgReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerTask.CommitTaskMsgReq";
        };

        return CommitTaskMsgReq;
    })();

    playerTask.CommitTaskMsgRes = (function() {

        /**
         * Properties of a CommitTaskMsgRes.
         * @memberof playerTask
         * @interface ICommitTaskMsgRes
         * @property {playerTask.IRewardsMsg|null} [reward] CommitTaskMsgRes reward
         */

        /**
         * Constructs a new CommitTaskMsgRes.
         * @memberof playerTask
         * @classdesc Represents a CommitTaskMsgRes.
         * @implements ICommitTaskMsgRes
         * @constructor
         * @param {playerTask.ICommitTaskMsgRes=} [properties] Properties to set
         */
        function CommitTaskMsgRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommitTaskMsgRes reward.
         * @member {playerTask.IRewardsMsg|null|undefined} reward
         * @memberof playerTask.CommitTaskMsgRes
         * @instance
         */
        CommitTaskMsgRes.prototype.reward = null;

        /**
         * Creates a new CommitTaskMsgRes instance using the specified properties.
         * @function create
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {playerTask.ICommitTaskMsgRes=} [properties] Properties to set
         * @returns {playerTask.CommitTaskMsgRes} CommitTaskMsgRes instance
         */
        CommitTaskMsgRes.create = function create(properties) {
            return new CommitTaskMsgRes(properties);
        };

        /**
         * Encodes the specified CommitTaskMsgRes message. Does not implicitly {@link playerTask.CommitTaskMsgRes.verify|verify} messages.
         * @function encode
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {playerTask.ICommitTaskMsgRes} message CommitTaskMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommitTaskMsgRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.playerTask.RewardsMsg.encode(message.reward, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommitTaskMsgRes message, length delimited. Does not implicitly {@link playerTask.CommitTaskMsgRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {playerTask.ICommitTaskMsgRes} message CommitTaskMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommitTaskMsgRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommitTaskMsgRes message from the specified reader or buffer.
         * @function decode
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTask.CommitTaskMsgRes} CommitTaskMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommitTaskMsgRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTask.CommitTaskMsgRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reward = $root.playerTask.RewardsMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommitTaskMsgRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTask.CommitTaskMsgRes} CommitTaskMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommitTaskMsgRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommitTaskMsgRes message.
         * @function verify
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommitTaskMsgRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                var error = $root.playerTask.RewardsMsg.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            return null;
        };

        /**
         * Creates a CommitTaskMsgRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTask.CommitTaskMsgRes} CommitTaskMsgRes
         */
        CommitTaskMsgRes.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTask.CommitTaskMsgRes)
                return object;
            var message = new $root.playerTask.CommitTaskMsgRes();
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".playerTask.CommitTaskMsgRes.reward: object expected");
                message.reward = $root.playerTask.RewardsMsg.fromObject(object.reward);
            }
            return message;
        };

        /**
         * Creates a plain object from a CommitTaskMsgRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {playerTask.CommitTaskMsgRes} message CommitTaskMsgRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommitTaskMsgRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reward = null;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.playerTask.RewardsMsg.toObject(message.reward, options);
            return object;
        };

        /**
         * Converts this CommitTaskMsgRes to JSON.
         * @function toJSON
         * @memberof playerTask.CommitTaskMsgRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommitTaskMsgRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommitTaskMsgRes
         * @function getTypeUrl
         * @memberof playerTask.CommitTaskMsgRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommitTaskMsgRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerTask.CommitTaskMsgRes";
        };

        return CommitTaskMsgRes;
    })();

    playerTask.RewardsMsg = (function() {

        /**
         * Properties of a RewardsMsg.
         * @memberof playerTask
         * @interface IRewardsMsg
         * @property {number|null} [exp] RewardsMsg exp
         * @property {number|null} [diamond] RewardsMsg diamond
         * @property {Array.<playerTask.IRewardInfoMsg>|null} [reward] RewardsMsg reward
         */

        /**
         * Constructs a new RewardsMsg.
         * @memberof playerTask
         * @classdesc Represents a RewardsMsg.
         * @implements IRewardsMsg
         * @constructor
         * @param {playerTask.IRewardsMsg=} [properties] Properties to set
         */
        function RewardsMsg(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RewardsMsg exp.
         * @member {number} exp
         * @memberof playerTask.RewardsMsg
         * @instance
         */
        RewardsMsg.prototype.exp = 0;

        /**
         * RewardsMsg diamond.
         * @member {number} diamond
         * @memberof playerTask.RewardsMsg
         * @instance
         */
        RewardsMsg.prototype.diamond = 0;

        /**
         * RewardsMsg reward.
         * @member {Array.<playerTask.IRewardInfoMsg>} reward
         * @memberof playerTask.RewardsMsg
         * @instance
         */
        RewardsMsg.prototype.reward = $util.emptyArray;

        /**
         * Creates a new RewardsMsg instance using the specified properties.
         * @function create
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {playerTask.IRewardsMsg=} [properties] Properties to set
         * @returns {playerTask.RewardsMsg} RewardsMsg instance
         */
        RewardsMsg.create = function create(properties) {
            return new RewardsMsg(properties);
        };

        /**
         * Encodes the specified RewardsMsg message. Does not implicitly {@link playerTask.RewardsMsg.verify|verify} messages.
         * @function encode
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {playerTask.IRewardsMsg} message RewardsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.exp != null && Object.hasOwnProperty.call(message, "exp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.exp);
            if (message.diamond != null && Object.hasOwnProperty.call(message, "diamond"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.diamond);
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.playerTask.RewardInfoMsg.encode(message.reward[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RewardsMsg message, length delimited. Does not implicitly {@link playerTask.RewardsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {playerTask.IRewardsMsg} message RewardsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RewardsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTask.RewardsMsg} RewardsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTask.RewardsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.exp = reader.int32();
                        break;
                    }
                case 2: {
                        message.diamond = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.playerTask.RewardInfoMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RewardsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTask.RewardsMsg} RewardsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RewardsMsg message.
         * @function verify
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RewardsMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp))
                    return "exp: integer expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.playerTask.RewardInfoMsg.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RewardsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTask.RewardsMsg} RewardsMsg
         */
        RewardsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTask.RewardsMsg)
                return object;
            var message = new $root.playerTask.RewardsMsg();
            if (object.exp != null)
                message.exp = object.exp | 0;
            if (object.diamond != null)
                message.diamond = object.diamond | 0;
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".playerTask.RewardsMsg.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".playerTask.RewardsMsg.reward: object expected");
                    message.reward[i] = $root.playerTask.RewardInfoMsg.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RewardsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {playerTask.RewardsMsg} message RewardsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RewardsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (options.defaults) {
                object.exp = 0;
                object.diamond = 0;
            }
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                object.diamond = message.diamond;
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.playerTask.RewardInfoMsg.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this RewardsMsg to JSON.
         * @function toJSON
         * @memberof playerTask.RewardsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RewardsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RewardsMsg
         * @function getTypeUrl
         * @memberof playerTask.RewardsMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RewardsMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerTask.RewardsMsg";
        };

        return RewardsMsg;
    })();

    playerTask.RewardInfoMsg = (function() {

        /**
         * Properties of a RewardInfoMsg.
         * @memberof playerTask
         * @interface IRewardInfoMsg
         * @property {number|null} [type] RewardInfoMsg type
         * @property {number|null} [objId] RewardInfoMsg objId
         * @property {number|null} [num] RewardInfoMsg num
         */

        /**
         * Constructs a new RewardInfoMsg.
         * @memberof playerTask
         * @classdesc Represents a RewardInfoMsg.
         * @implements IRewardInfoMsg
         * @constructor
         * @param {playerTask.IRewardInfoMsg=} [properties] Properties to set
         */
        function RewardInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RewardInfoMsg type.
         * @member {number} type
         * @memberof playerTask.RewardInfoMsg
         * @instance
         */
        RewardInfoMsg.prototype.type = 0;

        /**
         * RewardInfoMsg objId.
         * @member {number} objId
         * @memberof playerTask.RewardInfoMsg
         * @instance
         */
        RewardInfoMsg.prototype.objId = 0;

        /**
         * RewardInfoMsg num.
         * @member {number} num
         * @memberof playerTask.RewardInfoMsg
         * @instance
         */
        RewardInfoMsg.prototype.num = 0;

        /**
         * Creates a new RewardInfoMsg instance using the specified properties.
         * @function create
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {playerTask.IRewardInfoMsg=} [properties] Properties to set
         * @returns {playerTask.RewardInfoMsg} RewardInfoMsg instance
         */
        RewardInfoMsg.create = function create(properties) {
            return new RewardInfoMsg(properties);
        };

        /**
         * Encodes the specified RewardInfoMsg message. Does not implicitly {@link playerTask.RewardInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {playerTask.IRewardInfoMsg} message RewardInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.objId != null && Object.hasOwnProperty.call(message, "objId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.objId);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified RewardInfoMsg message, length delimited. Does not implicitly {@link playerTask.RewardInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {playerTask.IRewardInfoMsg} message RewardInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RewardInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTask.RewardInfoMsg} RewardInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTask.RewardInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.objId = reader.int32();
                        break;
                    }
                case 3: {
                        message.num = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RewardInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTask.RewardInfoMsg} RewardInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RewardInfoMsg message.
         * @function verify
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RewardInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.objId != null && message.hasOwnProperty("objId"))
                if (!$util.isInteger(message.objId))
                    return "objId: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates a RewardInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTask.RewardInfoMsg} RewardInfoMsg
         */
        RewardInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTask.RewardInfoMsg)
                return object;
            var message = new $root.playerTask.RewardInfoMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.objId != null)
                message.objId = object.objId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a RewardInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {playerTask.RewardInfoMsg} message RewardInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RewardInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.objId = 0;
                object.num = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.objId != null && message.hasOwnProperty("objId"))
                object.objId = message.objId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this RewardInfoMsg to JSON.
         * @function toJSON
         * @memberof playerTask.RewardInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RewardInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RewardInfoMsg
         * @function getTypeUrl
         * @memberof playerTask.RewardInfoMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RewardInfoMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerTask.RewardInfoMsg";
        };

        return RewardInfoMsg;
    })();

    return playerTask;
})();

$root.draw = (function() {

    /**
     * Namespace draw.
     * @exports draw
     * @namespace
     */
    var draw = {};

    draw.DrawReqMsg = (function() {

        /**
         * Properties of a DrawReqMsg.
         * @memberof draw
         * @interface IDrawReqMsg
         */

        /**
         * Constructs a new DrawReqMsg.
         * @memberof draw
         * @classdesc Represents a DrawReqMsg.
         * @implements IDrawReqMsg
         * @constructor
         * @param {draw.IDrawReqMsg=} [properties] Properties to set
         */
        function DrawReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DrawReqMsg instance using the specified properties.
         * @function create
         * @memberof draw.DrawReqMsg
         * @static
         * @param {draw.IDrawReqMsg=} [properties] Properties to set
         * @returns {draw.DrawReqMsg} DrawReqMsg instance
         */
        DrawReqMsg.create = function create(properties) {
            return new DrawReqMsg(properties);
        };

        /**
         * Encodes the specified DrawReqMsg message. Does not implicitly {@link draw.DrawReqMsg.verify|verify} messages.
         * @function encode
         * @memberof draw.DrawReqMsg
         * @static
         * @param {draw.IDrawReqMsg} message DrawReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DrawReqMsg message, length delimited. Does not implicitly {@link draw.DrawReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof draw.DrawReqMsg
         * @static
         * @param {draw.IDrawReqMsg} message DrawReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof draw.DrawReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {draw.DrawReqMsg} DrawReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.draw.DrawReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof draw.DrawReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {draw.DrawReqMsg} DrawReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawReqMsg message.
         * @function verify
         * @memberof draw.DrawReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DrawReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof draw.DrawReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {draw.DrawReqMsg} DrawReqMsg
         */
        DrawReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.draw.DrawReqMsg)
                return object;
            return new $root.draw.DrawReqMsg();
        };

        /**
         * Creates a plain object from a DrawReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof draw.DrawReqMsg
         * @static
         * @param {draw.DrawReqMsg} message DrawReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawReqMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DrawReqMsg to JSON.
         * @function toJSON
         * @memberof draw.DrawReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DrawReqMsg
         * @function getTypeUrl
         * @memberof draw.DrawReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DrawReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/draw.DrawReqMsg";
        };

        return DrawReqMsg;
    })();

    draw.DrawResMsg = (function() {

        /**
         * Properties of a DrawResMsg.
         * @memberof draw
         * @interface IDrawResMsg
         * @property {Object.<string,number>|null} [draw] DrawResMsg draw
         */

        /**
         * Constructs a new DrawResMsg.
         * @memberof draw
         * @classdesc Represents a DrawResMsg.
         * @implements IDrawResMsg
         * @constructor
         * @param {draw.IDrawResMsg=} [properties] Properties to set
         */
        function DrawResMsg(properties) {
            this.draw = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawResMsg draw.
         * @member {Object.<string,number>} draw
         * @memberof draw.DrawResMsg
         * @instance
         */
        DrawResMsg.prototype.draw = $util.emptyObject;

        /**
         * Creates a new DrawResMsg instance using the specified properties.
         * @function create
         * @memberof draw.DrawResMsg
         * @static
         * @param {draw.IDrawResMsg=} [properties] Properties to set
         * @returns {draw.DrawResMsg} DrawResMsg instance
         */
        DrawResMsg.create = function create(properties) {
            return new DrawResMsg(properties);
        };

        /**
         * Encodes the specified DrawResMsg message. Does not implicitly {@link draw.DrawResMsg.verify|verify} messages.
         * @function encode
         * @memberof draw.DrawResMsg
         * @static
         * @param {draw.IDrawResMsg} message DrawResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.draw != null && Object.hasOwnProperty.call(message, "draw"))
                for (var keys = Object.keys(message.draw), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.draw[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DrawResMsg message, length delimited. Does not implicitly {@link draw.DrawResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof draw.DrawResMsg
         * @static
         * @param {draw.IDrawResMsg} message DrawResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof draw.DrawResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {draw.DrawResMsg} DrawResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.draw.DrawResMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.draw === $util.emptyObject)
                            message.draw = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.draw[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof draw.DrawResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {draw.DrawResMsg} DrawResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawResMsg message.
         * @function verify
         * @memberof draw.DrawResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.draw != null && message.hasOwnProperty("draw")) {
                if (!$util.isObject(message.draw))
                    return "draw: object expected";
                var key = Object.keys(message.draw);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "draw: integer key{k:int32} expected";
                    if (!$util.isInteger(message.draw[key[i]]))
                        return "draw: integer{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a DrawResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof draw.DrawResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {draw.DrawResMsg} DrawResMsg
         */
        DrawResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.draw.DrawResMsg)
                return object;
            var message = new $root.draw.DrawResMsg();
            if (object.draw) {
                if (typeof object.draw !== "object")
                    throw TypeError(".draw.DrawResMsg.draw: object expected");
                message.draw = {};
                for (var keys = Object.keys(object.draw), i = 0; i < keys.length; ++i)
                    message.draw[keys[i]] = object.draw[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a DrawResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof draw.DrawResMsg
         * @static
         * @param {draw.DrawResMsg} message DrawResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.draw = {};
            var keys2;
            if (message.draw && (keys2 = Object.keys(message.draw)).length) {
                object.draw = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.draw[keys2[j]] = message.draw[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this DrawResMsg to JSON.
         * @function toJSON
         * @memberof draw.DrawResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DrawResMsg
         * @function getTypeUrl
         * @memberof draw.DrawResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DrawResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/draw.DrawResMsg";
        };

        return DrawResMsg;
    })();

    draw.DrawRandomReqMsg = (function() {

        /**
         * Properties of a DrawRandomReqMsg.
         * @memberof draw
         * @interface IDrawRandomReqMsg
         * @property {number|null} [drawId] DrawRandomReqMsg drawId
         * @property {number|null} [num] DrawRandomReqMsg num
         */

        /**
         * Constructs a new DrawRandomReqMsg.
         * @memberof draw
         * @classdesc Represents a DrawRandomReqMsg.
         * @implements IDrawRandomReqMsg
         * @constructor
         * @param {draw.IDrawRandomReqMsg=} [properties] Properties to set
         */
        function DrawRandomReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawRandomReqMsg drawId.
         * @member {number} drawId
         * @memberof draw.DrawRandomReqMsg
         * @instance
         */
        DrawRandomReqMsg.prototype.drawId = 0;

        /**
         * DrawRandomReqMsg num.
         * @member {number} num
         * @memberof draw.DrawRandomReqMsg
         * @instance
         */
        DrawRandomReqMsg.prototype.num = 0;

        /**
         * Creates a new DrawRandomReqMsg instance using the specified properties.
         * @function create
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {draw.IDrawRandomReqMsg=} [properties] Properties to set
         * @returns {draw.DrawRandomReqMsg} DrawRandomReqMsg instance
         */
        DrawRandomReqMsg.create = function create(properties) {
            return new DrawRandomReqMsg(properties);
        };

        /**
         * Encodes the specified DrawRandomReqMsg message. Does not implicitly {@link draw.DrawRandomReqMsg.verify|verify} messages.
         * @function encode
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {draw.IDrawRandomReqMsg} message DrawRandomReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawRandomReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.drawId != null && Object.hasOwnProperty.call(message, "drawId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.drawId);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified DrawRandomReqMsg message, length delimited. Does not implicitly {@link draw.DrawRandomReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {draw.IDrawRandomReqMsg} message DrawRandomReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawRandomReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawRandomReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {draw.DrawRandomReqMsg} DrawRandomReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawRandomReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.draw.DrawRandomReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.drawId = reader.int32();
                        break;
                    }
                case 2: {
                        message.num = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawRandomReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {draw.DrawRandomReqMsg} DrawRandomReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawRandomReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawRandomReqMsg message.
         * @function verify
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawRandomReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.drawId != null && message.hasOwnProperty("drawId"))
                if (!$util.isInteger(message.drawId))
                    return "drawId: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates a DrawRandomReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {draw.DrawRandomReqMsg} DrawRandomReqMsg
         */
        DrawRandomReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.draw.DrawRandomReqMsg)
                return object;
            var message = new $root.draw.DrawRandomReqMsg();
            if (object.drawId != null)
                message.drawId = object.drawId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a DrawRandomReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {draw.DrawRandomReqMsg} message DrawRandomReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawRandomReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.drawId = 0;
                object.num = 0;
            }
            if (message.drawId != null && message.hasOwnProperty("drawId"))
                object.drawId = message.drawId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this DrawRandomReqMsg to JSON.
         * @function toJSON
         * @memberof draw.DrawRandomReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawRandomReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DrawRandomReqMsg
         * @function getTypeUrl
         * @memberof draw.DrawRandomReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DrawRandomReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/draw.DrawRandomReqMsg";
        };

        return DrawRandomReqMsg;
    })();

    draw.DrawRandomResMsg = (function() {

        /**
         * Properties of a DrawRandomResMsg.
         * @memberof draw
         * @interface IDrawRandomResMsg
         * @property {Array.<playerTask.IRewardInfoMsg>|null} [reward] DrawRandomResMsg reward
         */

        /**
         * Constructs a new DrawRandomResMsg.
         * @memberof draw
         * @classdesc Represents a DrawRandomResMsg.
         * @implements IDrawRandomResMsg
         * @constructor
         * @param {draw.IDrawRandomResMsg=} [properties] Properties to set
         */
        function DrawRandomResMsg(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawRandomResMsg reward.
         * @member {Array.<playerTask.IRewardInfoMsg>} reward
         * @memberof draw.DrawRandomResMsg
         * @instance
         */
        DrawRandomResMsg.prototype.reward = $util.emptyArray;

        /**
         * Creates a new DrawRandomResMsg instance using the specified properties.
         * @function create
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {draw.IDrawRandomResMsg=} [properties] Properties to set
         * @returns {draw.DrawRandomResMsg} DrawRandomResMsg instance
         */
        DrawRandomResMsg.create = function create(properties) {
            return new DrawRandomResMsg(properties);
        };

        /**
         * Encodes the specified DrawRandomResMsg message. Does not implicitly {@link draw.DrawRandomResMsg.verify|verify} messages.
         * @function encode
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {draw.IDrawRandomResMsg} message DrawRandomResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawRandomResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.playerTask.RewardInfoMsg.encode(message.reward[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DrawRandomResMsg message, length delimited. Does not implicitly {@link draw.DrawRandomResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {draw.IDrawRandomResMsg} message DrawRandomResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawRandomResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawRandomResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {draw.DrawRandomResMsg} DrawRandomResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawRandomResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.draw.DrawRandomResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.playerTask.RewardInfoMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawRandomResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {draw.DrawRandomResMsg} DrawRandomResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawRandomResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawRandomResMsg message.
         * @function verify
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawRandomResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.playerTask.RewardInfoMsg.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DrawRandomResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {draw.DrawRandomResMsg} DrawRandomResMsg
         */
        DrawRandomResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.draw.DrawRandomResMsg)
                return object;
            var message = new $root.draw.DrawRandomResMsg();
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".draw.DrawRandomResMsg.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".draw.DrawRandomResMsg.reward: object expected");
                    message.reward[i] = $root.playerTask.RewardInfoMsg.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DrawRandomResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {draw.DrawRandomResMsg} message DrawRandomResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawRandomResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.playerTask.RewardInfoMsg.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this DrawRandomResMsg to JSON.
         * @function toJSON
         * @memberof draw.DrawRandomResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawRandomResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DrawRandomResMsg
         * @function getTypeUrl
         * @memberof draw.DrawRandomResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DrawRandomResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/draw.DrawRandomResMsg";
        };

        return DrawRandomResMsg;
    })();

    return draw;
})();

$root.error = (function() {

    /**
     * Namespace error.
     * @exports error
     * @namespace
     */
    var error = {};

    error.ErrorMsg = (function() {

        /**
         * Properties of an ErrorMsg.
         * @memberof error
         * @interface IErrorMsg
         * @property {number|null} [errorType] ErrorMsg errorType
         * @property {number|null} [errorSubType] ErrorMsg errorSubType
         * @property {number|null} [code] ErrorMsg code
         * @property {string|null} [msg] ErrorMsg msg
         */

        /**
         * Constructs a new ErrorMsg.
         * @memberof error
         * @classdesc Represents an ErrorMsg.
         * @implements IErrorMsg
         * @constructor
         * @param {error.IErrorMsg=} [properties] Properties to set
         */
        function ErrorMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorMsg errorType.
         * @member {number} errorType
         * @memberof error.ErrorMsg
         * @instance
         */
        ErrorMsg.prototype.errorType = 0;

        /**
         * ErrorMsg errorSubType.
         * @member {number} errorSubType
         * @memberof error.ErrorMsg
         * @instance
         */
        ErrorMsg.prototype.errorSubType = 0;

        /**
         * ErrorMsg code.
         * @member {number} code
         * @memberof error.ErrorMsg
         * @instance
         */
        ErrorMsg.prototype.code = 0;

        /**
         * ErrorMsg msg.
         * @member {string} msg
         * @memberof error.ErrorMsg
         * @instance
         */
        ErrorMsg.prototype.msg = "";

        /**
         * Creates a new ErrorMsg instance using the specified properties.
         * @function create
         * @memberof error.ErrorMsg
         * @static
         * @param {error.IErrorMsg=} [properties] Properties to set
         * @returns {error.ErrorMsg} ErrorMsg instance
         */
        ErrorMsg.create = function create(properties) {
            return new ErrorMsg(properties);
        };

        /**
         * Encodes the specified ErrorMsg message. Does not implicitly {@link error.ErrorMsg.verify|verify} messages.
         * @function encode
         * @memberof error.ErrorMsg
         * @static
         * @param {error.IErrorMsg} message ErrorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
            if (message.errorSubType != null && Object.hasOwnProperty.call(message, "errorSubType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorSubType);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified ErrorMsg message, length delimited. Does not implicitly {@link error.ErrorMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.ErrorMsg
         * @static
         * @param {error.IErrorMsg} message ErrorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorMsg message from the specified reader or buffer.
         * @function decode
         * @memberof error.ErrorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.ErrorMsg} ErrorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.ErrorMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.errorType = reader.int32();
                        break;
                    }
                case 2: {
                        message.errorSubType = reader.int32();
                        break;
                    }
                case 3: {
                        message.code = reader.int32();
                        break;
                    }
                case 4: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.ErrorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.ErrorMsg} ErrorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorMsg message.
         * @function verify
         * @memberof error.ErrorMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorType != null && message.hasOwnProperty("errorType"))
                if (!$util.isInteger(message.errorType))
                    return "errorType: integer expected";
            if (message.errorSubType != null && message.hasOwnProperty("errorSubType"))
                if (!$util.isInteger(message.errorSubType))
                    return "errorSubType: integer expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an ErrorMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.ErrorMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.ErrorMsg} ErrorMsg
         */
        ErrorMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.error.ErrorMsg)
                return object;
            var message = new $root.error.ErrorMsg();
            if (object.errorType != null)
                message.errorType = object.errorType | 0;
            if (object.errorSubType != null)
                message.errorSubType = object.errorSubType | 0;
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an ErrorMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.ErrorMsg
         * @static
         * @param {error.ErrorMsg} message ErrorMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errorType = 0;
                object.errorSubType = 0;
                object.code = 0;
                object.msg = "";
            }
            if (message.errorType != null && message.hasOwnProperty("errorType"))
                object.errorType = message.errorType;
            if (message.errorSubType != null && message.hasOwnProperty("errorSubType"))
                object.errorSubType = message.errorSubType;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this ErrorMsg to JSON.
         * @function toJSON
         * @memberof error.ErrorMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ErrorMsg
         * @function getTypeUrl
         * @memberof error.ErrorMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ErrorMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.ErrorMsg";
        };

        return ErrorMsg;
    })();

    return error;
})();

$root.HeartBeatMsg = (function() {

    /**
     * Properties of a HeartBeatMsg.
     * @exports IHeartBeatMsg
     * @interface IHeartBeatMsg
     * @property {number|Long|null} [serviceTime] HeartBeatMsg serviceTime
     */

    /**
     * Constructs a new HeartBeatMsg.
     * @exports HeartBeatMsg
     * @classdesc Represents a HeartBeatMsg.
     * @implements IHeartBeatMsg
     * @constructor
     * @param {IHeartBeatMsg=} [properties] Properties to set
     */
    function HeartBeatMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HeartBeatMsg serviceTime.
     * @member {number|Long} serviceTime
     * @memberof HeartBeatMsg
     * @instance
     */
    HeartBeatMsg.prototype.serviceTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new HeartBeatMsg instance using the specified properties.
     * @function create
     * @memberof HeartBeatMsg
     * @static
     * @param {IHeartBeatMsg=} [properties] Properties to set
     * @returns {HeartBeatMsg} HeartBeatMsg instance
     */
    HeartBeatMsg.create = function create(properties) {
        return new HeartBeatMsg(properties);
    };

    /**
     * Encodes the specified HeartBeatMsg message. Does not implicitly {@link HeartBeatMsg.verify|verify} messages.
     * @function encode
     * @memberof HeartBeatMsg
     * @static
     * @param {IHeartBeatMsg} message HeartBeatMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartBeatMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serviceTime != null && Object.hasOwnProperty.call(message, "serviceTime"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serviceTime);
        return writer;
    };

    /**
     * Encodes the specified HeartBeatMsg message, length delimited. Does not implicitly {@link HeartBeatMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartBeatMsg
     * @static
     * @param {IHeartBeatMsg} message HeartBeatMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartBeatMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartBeatMsg message from the specified reader or buffer.
     * @function decode
     * @memberof HeartBeatMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartBeatMsg} HeartBeatMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartBeatMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartBeatMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.serviceTime = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HeartBeatMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartBeatMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartBeatMsg} HeartBeatMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartBeatMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartBeatMsg message.
     * @function verify
     * @memberof HeartBeatMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartBeatMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serviceTime != null && message.hasOwnProperty("serviceTime"))
            if (!$util.isInteger(message.serviceTime) && !(message.serviceTime && $util.isInteger(message.serviceTime.low) && $util.isInteger(message.serviceTime.high)))
                return "serviceTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a HeartBeatMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartBeatMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartBeatMsg} HeartBeatMsg
     */
    HeartBeatMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartBeatMsg)
            return object;
        var message = new $root.HeartBeatMsg();
        if (object.serviceTime != null)
            if ($util.Long)
                (message.serviceTime = $util.Long.fromValue(object.serviceTime)).unsigned = false;
            else if (typeof object.serviceTime === "string")
                message.serviceTime = parseInt(object.serviceTime, 10);
            else if (typeof object.serviceTime === "number")
                message.serviceTime = object.serviceTime;
            else if (typeof object.serviceTime === "object")
                message.serviceTime = new $util.LongBits(object.serviceTime.low >>> 0, object.serviceTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a HeartBeatMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartBeatMsg
     * @static
     * @param {HeartBeatMsg} message HeartBeatMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartBeatMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serviceTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serviceTime = options.longs === String ? "0" : 0;
        if (message.serviceTime != null && message.hasOwnProperty("serviceTime"))
            if (typeof message.serviceTime === "number")
                object.serviceTime = options.longs === String ? String(message.serviceTime) : message.serviceTime;
            else
                object.serviceTime = options.longs === String ? $util.Long.prototype.toString.call(message.serviceTime) : options.longs === Number ? new $util.LongBits(message.serviceTime.low >>> 0, message.serviceTime.high >>> 0).toNumber() : message.serviceTime;
        return object;
    };

    /**
     * Converts this HeartBeatMsg to JSON.
     * @function toJSON
     * @memberof HeartBeatMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartBeatMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HeartBeatMsg
     * @function getTypeUrl
     * @memberof HeartBeatMsg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HeartBeatMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HeartBeatMsg";
    };

    return HeartBeatMsg;
})();

$root.playerHero = (function() {

    /**
     * Namespace playerHero.
     * @exports playerHero
     * @namespace
     */
    var playerHero = {};

    playerHero.GetHeroMsg = (function() {

        /**
         * Properties of a GetHeroMsg.
         * @memberof playerHero
         * @interface IGetHeroMsg
         */

        /**
         * Constructs a new GetHeroMsg.
         * @memberof playerHero
         * @classdesc Represents a GetHeroMsg.
         * @implements IGetHeroMsg
         * @constructor
         * @param {playerHero.IGetHeroMsg=} [properties] Properties to set
         */
        function GetHeroMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetHeroMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {playerHero.IGetHeroMsg=} [properties] Properties to set
         * @returns {playerHero.GetHeroMsg} GetHeroMsg instance
         */
        GetHeroMsg.create = function create(properties) {
            return new GetHeroMsg(properties);
        };

        /**
         * Encodes the specified GetHeroMsg message. Does not implicitly {@link playerHero.GetHeroMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {playerHero.IGetHeroMsg} message GetHeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHeroMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetHeroMsg message, length delimited. Does not implicitly {@link playerHero.GetHeroMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {playerHero.IGetHeroMsg} message GetHeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetHeroMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetHeroMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.GetHeroMsg} GetHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHeroMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.GetHeroMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetHeroMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.GetHeroMsg} GetHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetHeroMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetHeroMsg message.
         * @function verify
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetHeroMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetHeroMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.GetHeroMsg} GetHeroMsg
         */
        GetHeroMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.GetHeroMsg)
                return object;
            return new $root.playerHero.GetHeroMsg();
        };

        /**
         * Creates a plain object from a GetHeroMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {playerHero.GetHeroMsg} message GetHeroMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetHeroMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetHeroMsg to JSON.
         * @function toJSON
         * @memberof playerHero.GetHeroMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetHeroMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetHeroMsg
         * @function getTypeUrl
         * @memberof playerHero.GetHeroMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetHeroMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.GetHeroMsg";
        };

        return GetHeroMsg;
    })();

    playerHero.HeroListMsg = (function() {

        /**
         * Properties of a HeroListMsg.
         * @memberof playerHero
         * @interface IHeroListMsg
         * @property {Array.<playerHero.IHeroMsg>|null} [heroList] HeroListMsg heroList
         */

        /**
         * Constructs a new HeroListMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroListMsg.
         * @implements IHeroListMsg
         * @constructor
         * @param {playerHero.IHeroListMsg=} [properties] Properties to set
         */
        function HeroListMsg(properties) {
            this.heroList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroListMsg heroList.
         * @member {Array.<playerHero.IHeroMsg>} heroList
         * @memberof playerHero.HeroListMsg
         * @instance
         */
        HeroListMsg.prototype.heroList = $util.emptyArray;

        /**
         * Creates a new HeroListMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {playerHero.IHeroListMsg=} [properties] Properties to set
         * @returns {playerHero.HeroListMsg} HeroListMsg instance
         */
        HeroListMsg.create = function create(properties) {
            return new HeroListMsg(properties);
        };

        /**
         * Encodes the specified HeroListMsg message. Does not implicitly {@link playerHero.HeroListMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {playerHero.IHeroListMsg} message HeroListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroList != null && message.heroList.length)
                for (var i = 0; i < message.heroList.length; ++i)
                    $root.playerHero.HeroMsg.encode(message.heroList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroListMsg message, length delimited. Does not implicitly {@link playerHero.HeroListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {playerHero.IHeroListMsg} message HeroListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroListMsg} HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.heroList && message.heroList.length))
                            message.heroList = [];
                        message.heroList.push($root.playerHero.HeroMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroListMsg} HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroListMsg message.
         * @function verify
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroList != null && message.hasOwnProperty("heroList")) {
                if (!Array.isArray(message.heroList))
                    return "heroList: array expected";
                for (var i = 0; i < message.heroList.length; ++i) {
                    var error = $root.playerHero.HeroMsg.verify(message.heroList[i]);
                    if (error)
                        return "heroList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HeroListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroListMsg} HeroListMsg
         */
        HeroListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroListMsg)
                return object;
            var message = new $root.playerHero.HeroListMsg();
            if (object.heroList) {
                if (!Array.isArray(object.heroList))
                    throw TypeError(".playerHero.HeroListMsg.heroList: array expected");
                message.heroList = [];
                for (var i = 0; i < object.heroList.length; ++i) {
                    if (typeof object.heroList[i] !== "object")
                        throw TypeError(".playerHero.HeroListMsg.heroList: object expected");
                    message.heroList[i] = $root.playerHero.HeroMsg.fromObject(object.heroList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {playerHero.HeroListMsg} message HeroListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.heroList = [];
            if (message.heroList && message.heroList.length) {
                object.heroList = [];
                for (var j = 0; j < message.heroList.length; ++j)
                    object.heroList[j] = $root.playerHero.HeroMsg.toObject(message.heroList[j], options);
            }
            return object;
        };

        /**
         * Converts this HeroListMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroListMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroListMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroListMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroListMsg";
        };

        return HeroListMsg;
    })();

    playerHero.AddHeroMsg = (function() {

        /**
         * Properties of an AddHeroMsg.
         * @memberof playerHero
         * @interface IAddHeroMsg
         * @property {Array.<playerHero.IHeroMsg>|null} [heroMsg] AddHeroMsg heroMsg
         */

        /**
         * Constructs a new AddHeroMsg.
         * @memberof playerHero
         * @classdesc Represents an AddHeroMsg.
         * @implements IAddHeroMsg
         * @constructor
         * @param {playerHero.IAddHeroMsg=} [properties] Properties to set
         */
        function AddHeroMsg(properties) {
            this.heroMsg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddHeroMsg heroMsg.
         * @member {Array.<playerHero.IHeroMsg>} heroMsg
         * @memberof playerHero.AddHeroMsg
         * @instance
         */
        AddHeroMsg.prototype.heroMsg = $util.emptyArray;

        /**
         * Creates a new AddHeroMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {playerHero.IAddHeroMsg=} [properties] Properties to set
         * @returns {playerHero.AddHeroMsg} AddHeroMsg instance
         */
        AddHeroMsg.create = function create(properties) {
            return new AddHeroMsg(properties);
        };

        /**
         * Encodes the specified AddHeroMsg message. Does not implicitly {@link playerHero.AddHeroMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {playerHero.IAddHeroMsg} message AddHeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddHeroMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroMsg != null && message.heroMsg.length)
                for (var i = 0; i < message.heroMsg.length; ++i)
                    $root.playerHero.HeroMsg.encode(message.heroMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddHeroMsg message, length delimited. Does not implicitly {@link playerHero.AddHeroMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {playerHero.IAddHeroMsg} message AddHeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddHeroMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddHeroMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.AddHeroMsg} AddHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddHeroMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.AddHeroMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.heroMsg && message.heroMsg.length))
                            message.heroMsg = [];
                        message.heroMsg.push($root.playerHero.HeroMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddHeroMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.AddHeroMsg} AddHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddHeroMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddHeroMsg message.
         * @function verify
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddHeroMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroMsg != null && message.hasOwnProperty("heroMsg")) {
                if (!Array.isArray(message.heroMsg))
                    return "heroMsg: array expected";
                for (var i = 0; i < message.heroMsg.length; ++i) {
                    var error = $root.playerHero.HeroMsg.verify(message.heroMsg[i]);
                    if (error)
                        return "heroMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddHeroMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.AddHeroMsg} AddHeroMsg
         */
        AddHeroMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.AddHeroMsg)
                return object;
            var message = new $root.playerHero.AddHeroMsg();
            if (object.heroMsg) {
                if (!Array.isArray(object.heroMsg))
                    throw TypeError(".playerHero.AddHeroMsg.heroMsg: array expected");
                message.heroMsg = [];
                for (var i = 0; i < object.heroMsg.length; ++i) {
                    if (typeof object.heroMsg[i] !== "object")
                        throw TypeError(".playerHero.AddHeroMsg.heroMsg: object expected");
                    message.heroMsg[i] = $root.playerHero.HeroMsg.fromObject(object.heroMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddHeroMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {playerHero.AddHeroMsg} message AddHeroMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddHeroMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.heroMsg = [];
            if (message.heroMsg && message.heroMsg.length) {
                object.heroMsg = [];
                for (var j = 0; j < message.heroMsg.length; ++j)
                    object.heroMsg[j] = $root.playerHero.HeroMsg.toObject(message.heroMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this AddHeroMsg to JSON.
         * @function toJSON
         * @memberof playerHero.AddHeroMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddHeroMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddHeroMsg
         * @function getTypeUrl
         * @memberof playerHero.AddHeroMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddHeroMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.AddHeroMsg";
        };

        return AddHeroMsg;
    })();

    playerHero.DelHeroMsg = (function() {

        /**
         * Properties of a DelHeroMsg.
         * @memberof playerHero
         * @interface IDelHeroMsg
         * @property {Array.<number>|null} [id] DelHeroMsg id
         */

        /**
         * Constructs a new DelHeroMsg.
         * @memberof playerHero
         * @classdesc Represents a DelHeroMsg.
         * @implements IDelHeroMsg
         * @constructor
         * @param {playerHero.IDelHeroMsg=} [properties] Properties to set
         */
        function DelHeroMsg(properties) {
            this.id = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelHeroMsg id.
         * @member {Array.<number>} id
         * @memberof playerHero.DelHeroMsg
         * @instance
         */
        DelHeroMsg.prototype.id = $util.emptyArray;

        /**
         * Creates a new DelHeroMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {playerHero.IDelHeroMsg=} [properties] Properties to set
         * @returns {playerHero.DelHeroMsg} DelHeroMsg instance
         */
        DelHeroMsg.create = function create(properties) {
            return new DelHeroMsg(properties);
        };

        /**
         * Encodes the specified DelHeroMsg message. Does not implicitly {@link playerHero.DelHeroMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {playerHero.IDelHeroMsg} message DelHeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelHeroMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.id.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.id.length; ++i)
                    writer.int32(message.id[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified DelHeroMsg message, length delimited. Does not implicitly {@link playerHero.DelHeroMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {playerHero.IDelHeroMsg} message DelHeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelHeroMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelHeroMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.DelHeroMsg} DelHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelHeroMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.DelHeroMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.id && message.id.length))
                            message.id = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.id.push(reader.int32());
                        } else
                            message.id.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelHeroMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.DelHeroMsg} DelHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelHeroMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelHeroMsg message.
         * @function verify
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelHeroMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id")) {
                if (!Array.isArray(message.id))
                    return "id: array expected";
                for (var i = 0; i < message.id.length; ++i)
                    if (!$util.isInteger(message.id[i]))
                        return "id: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a DelHeroMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.DelHeroMsg} DelHeroMsg
         */
        DelHeroMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.DelHeroMsg)
                return object;
            var message = new $root.playerHero.DelHeroMsg();
            if (object.id) {
                if (!Array.isArray(object.id))
                    throw TypeError(".playerHero.DelHeroMsg.id: array expected");
                message.id = [];
                for (var i = 0; i < object.id.length; ++i)
                    message.id[i] = object.id[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a DelHeroMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {playerHero.DelHeroMsg} message DelHeroMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelHeroMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.id = [];
            if (message.id && message.id.length) {
                object.id = [];
                for (var j = 0; j < message.id.length; ++j)
                    object.id[j] = message.id[j];
            }
            return object;
        };

        /**
         * Converts this DelHeroMsg to JSON.
         * @function toJSON
         * @memberof playerHero.DelHeroMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelHeroMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DelHeroMsg
         * @function getTypeUrl
         * @memberof playerHero.DelHeroMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DelHeroMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.DelHeroMsg";
        };

        return DelHeroMsg;
    })();

    playerHero.NotifyAttrMsg = (function() {

        /**
         * Properties of a NotifyAttrMsg.
         * @memberof playerHero
         * @interface INotifyAttrMsg
         * @property {number|null} [id] NotifyAttrMsg id
         * @property {Array.<playerHero.IAttrMsg>|null} [attrMsg] NotifyAttrMsg attrMsg
         */

        /**
         * Constructs a new NotifyAttrMsg.
         * @memberof playerHero
         * @classdesc Represents a NotifyAttrMsg.
         * @implements INotifyAttrMsg
         * @constructor
         * @param {playerHero.INotifyAttrMsg=} [properties] Properties to set
         */
        function NotifyAttrMsg(properties) {
            this.attrMsg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyAttrMsg id.
         * @member {number} id
         * @memberof playerHero.NotifyAttrMsg
         * @instance
         */
        NotifyAttrMsg.prototype.id = 0;

        /**
         * NotifyAttrMsg attrMsg.
         * @member {Array.<playerHero.IAttrMsg>} attrMsg
         * @memberof playerHero.NotifyAttrMsg
         * @instance
         */
        NotifyAttrMsg.prototype.attrMsg = $util.emptyArray;

        /**
         * Creates a new NotifyAttrMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {playerHero.INotifyAttrMsg=} [properties] Properties to set
         * @returns {playerHero.NotifyAttrMsg} NotifyAttrMsg instance
         */
        NotifyAttrMsg.create = function create(properties) {
            return new NotifyAttrMsg(properties);
        };

        /**
         * Encodes the specified NotifyAttrMsg message. Does not implicitly {@link playerHero.NotifyAttrMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {playerHero.INotifyAttrMsg} message NotifyAttrMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyAttrMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.attrMsg != null && message.attrMsg.length)
                for (var i = 0; i < message.attrMsg.length; ++i)
                    $root.playerHero.AttrMsg.encode(message.attrMsg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotifyAttrMsg message, length delimited. Does not implicitly {@link playerHero.NotifyAttrMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {playerHero.INotifyAttrMsg} message NotifyAttrMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyAttrMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyAttrMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.NotifyAttrMsg} NotifyAttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyAttrMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.NotifyAttrMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.attrMsg && message.attrMsg.length))
                            message.attrMsg = [];
                        message.attrMsg.push($root.playerHero.AttrMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyAttrMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.NotifyAttrMsg} NotifyAttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyAttrMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyAttrMsg message.
         * @function verify
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyAttrMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.attrMsg != null && message.hasOwnProperty("attrMsg")) {
                if (!Array.isArray(message.attrMsg))
                    return "attrMsg: array expected";
                for (var i = 0; i < message.attrMsg.length; ++i) {
                    var error = $root.playerHero.AttrMsg.verify(message.attrMsg[i]);
                    if (error)
                        return "attrMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NotifyAttrMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.NotifyAttrMsg} NotifyAttrMsg
         */
        NotifyAttrMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.NotifyAttrMsg)
                return object;
            var message = new $root.playerHero.NotifyAttrMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.attrMsg) {
                if (!Array.isArray(object.attrMsg))
                    throw TypeError(".playerHero.NotifyAttrMsg.attrMsg: array expected");
                message.attrMsg = [];
                for (var i = 0; i < object.attrMsg.length; ++i) {
                    if (typeof object.attrMsg[i] !== "object")
                        throw TypeError(".playerHero.NotifyAttrMsg.attrMsg: object expected");
                    message.attrMsg[i] = $root.playerHero.AttrMsg.fromObject(object.attrMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NotifyAttrMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {playerHero.NotifyAttrMsg} message NotifyAttrMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyAttrMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.attrMsg = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.attrMsg && message.attrMsg.length) {
                object.attrMsg = [];
                for (var j = 0; j < message.attrMsg.length; ++j)
                    object.attrMsg[j] = $root.playerHero.AttrMsg.toObject(message.attrMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this NotifyAttrMsg to JSON.
         * @function toJSON
         * @memberof playerHero.NotifyAttrMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyAttrMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyAttrMsg
         * @function getTypeUrl
         * @memberof playerHero.NotifyAttrMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyAttrMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.NotifyAttrMsg";
        };

        return NotifyAttrMsg;
    })();

    playerHero.HeroUpLvReqMsg = (function() {

        /**
         * Properties of a HeroUpLvReqMsg.
         * @memberof playerHero
         * @interface IHeroUpLvReqMsg
         * @property {number|null} [id] HeroUpLvReqMsg id
         */

        /**
         * Constructs a new HeroUpLvReqMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroUpLvReqMsg.
         * @implements IHeroUpLvReqMsg
         * @constructor
         * @param {playerHero.IHeroUpLvReqMsg=} [properties] Properties to set
         */
        function HeroUpLvReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroUpLvReqMsg id.
         * @member {number} id
         * @memberof playerHero.HeroUpLvReqMsg
         * @instance
         */
        HeroUpLvReqMsg.prototype.id = 0;

        /**
         * Creates a new HeroUpLvReqMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {playerHero.IHeroUpLvReqMsg=} [properties] Properties to set
         * @returns {playerHero.HeroUpLvReqMsg} HeroUpLvReqMsg instance
         */
        HeroUpLvReqMsg.create = function create(properties) {
            return new HeroUpLvReqMsg(properties);
        };

        /**
         * Encodes the specified HeroUpLvReqMsg message. Does not implicitly {@link playerHero.HeroUpLvReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {playerHero.IHeroUpLvReqMsg} message HeroUpLvReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpLvReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified HeroUpLvReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpLvReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {playerHero.IHeroUpLvReqMsg} message HeroUpLvReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpLvReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroUpLvReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroUpLvReqMsg} HeroUpLvReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpLvReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroUpLvReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroUpLvReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroUpLvReqMsg} HeroUpLvReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpLvReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroUpLvReqMsg message.
         * @function verify
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroUpLvReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a HeroUpLvReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroUpLvReqMsg} HeroUpLvReqMsg
         */
        HeroUpLvReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroUpLvReqMsg)
                return object;
            var message = new $root.playerHero.HeroUpLvReqMsg();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroUpLvReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {playerHero.HeroUpLvReqMsg} message HeroUpLvReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroUpLvReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this HeroUpLvReqMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroUpLvReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroUpLvReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroUpLvReqMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroUpLvReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroUpLvReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroUpLvReqMsg";
        };

        return HeroUpLvReqMsg;
    })();

    playerHero.HeroUpLvResMsg = (function() {

        /**
         * Properties of a HeroUpLvResMsg.
         * @memberof playerHero
         * @interface IHeroUpLvResMsg
         * @property {playerHero.IHeroMsg|null} [hero] HeroUpLvResMsg hero
         */

        /**
         * Constructs a new HeroUpLvResMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroUpLvResMsg.
         * @implements IHeroUpLvResMsg
         * @constructor
         * @param {playerHero.IHeroUpLvResMsg=} [properties] Properties to set
         */
        function HeroUpLvResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroUpLvResMsg hero.
         * @member {playerHero.IHeroMsg|null|undefined} hero
         * @memberof playerHero.HeroUpLvResMsg
         * @instance
         */
        HeroUpLvResMsg.prototype.hero = null;

        /**
         * Creates a new HeroUpLvResMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {playerHero.IHeroUpLvResMsg=} [properties] Properties to set
         * @returns {playerHero.HeroUpLvResMsg} HeroUpLvResMsg instance
         */
        HeroUpLvResMsg.create = function create(properties) {
            return new HeroUpLvResMsg(properties);
        };

        /**
         * Encodes the specified HeroUpLvResMsg message. Does not implicitly {@link playerHero.HeroUpLvResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {playerHero.IHeroUpLvResMsg} message HeroUpLvResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpLvResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hero != null && Object.hasOwnProperty.call(message, "hero"))
                $root.playerHero.HeroMsg.encode(message.hero, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroUpLvResMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpLvResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {playerHero.IHeroUpLvResMsg} message HeroUpLvResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpLvResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroUpLvResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroUpLvResMsg} HeroUpLvResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpLvResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroUpLvResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hero = $root.playerHero.HeroMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroUpLvResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroUpLvResMsg} HeroUpLvResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpLvResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroUpLvResMsg message.
         * @function verify
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroUpLvResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hero != null && message.hasOwnProperty("hero")) {
                var error = $root.playerHero.HeroMsg.verify(message.hero);
                if (error)
                    return "hero." + error;
            }
            return null;
        };

        /**
         * Creates a HeroUpLvResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroUpLvResMsg} HeroUpLvResMsg
         */
        HeroUpLvResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroUpLvResMsg)
                return object;
            var message = new $root.playerHero.HeroUpLvResMsg();
            if (object.hero != null) {
                if (typeof object.hero !== "object")
                    throw TypeError(".playerHero.HeroUpLvResMsg.hero: object expected");
                message.hero = $root.playerHero.HeroMsg.fromObject(object.hero);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroUpLvResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {playerHero.HeroUpLvResMsg} message HeroUpLvResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroUpLvResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.hero = null;
            if (message.hero != null && message.hasOwnProperty("hero"))
                object.hero = $root.playerHero.HeroMsg.toObject(message.hero, options);
            return object;
        };

        /**
         * Converts this HeroUpLvResMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroUpLvResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroUpLvResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroUpLvResMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroUpLvResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroUpLvResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroUpLvResMsg";
        };

        return HeroUpLvResMsg;
    })();

    playerHero.HeroUpStarReqMsg = (function() {

        /**
         * Properties of a HeroUpStarReqMsg.
         * @memberof playerHero
         * @interface IHeroUpStarReqMsg
         * @property {number|null} [id] HeroUpStarReqMsg id
         * @property {Array.<number>|null} [useHeroId] HeroUpStarReqMsg useHeroId
         */

        /**
         * Constructs a new HeroUpStarReqMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroUpStarReqMsg.
         * @implements IHeroUpStarReqMsg
         * @constructor
         * @param {playerHero.IHeroUpStarReqMsg=} [properties] Properties to set
         */
        function HeroUpStarReqMsg(properties) {
            this.useHeroId = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroUpStarReqMsg id.
         * @member {number} id
         * @memberof playerHero.HeroUpStarReqMsg
         * @instance
         */
        HeroUpStarReqMsg.prototype.id = 0;

        /**
         * HeroUpStarReqMsg useHeroId.
         * @member {Array.<number>} useHeroId
         * @memberof playerHero.HeroUpStarReqMsg
         * @instance
         */
        HeroUpStarReqMsg.prototype.useHeroId = $util.emptyArray;

        /**
         * Creates a new HeroUpStarReqMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {playerHero.IHeroUpStarReqMsg=} [properties] Properties to set
         * @returns {playerHero.HeroUpStarReqMsg} HeroUpStarReqMsg instance
         */
        HeroUpStarReqMsg.create = function create(properties) {
            return new HeroUpStarReqMsg(properties);
        };

        /**
         * Encodes the specified HeroUpStarReqMsg message. Does not implicitly {@link playerHero.HeroUpStarReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {playerHero.IHeroUpStarReqMsg} message HeroUpStarReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpStarReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.useHeroId != null && message.useHeroId.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.useHeroId.length; ++i)
                    writer.int32(message.useHeroId[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified HeroUpStarReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpStarReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {playerHero.IHeroUpStarReqMsg} message HeroUpStarReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpStarReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroUpStarReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroUpStarReqMsg} HeroUpStarReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpStarReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroUpStarReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.useHeroId && message.useHeroId.length))
                            message.useHeroId = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.useHeroId.push(reader.int32());
                        } else
                            message.useHeroId.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroUpStarReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroUpStarReqMsg} HeroUpStarReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpStarReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroUpStarReqMsg message.
         * @function verify
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroUpStarReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.useHeroId != null && message.hasOwnProperty("useHeroId")) {
                if (!Array.isArray(message.useHeroId))
                    return "useHeroId: array expected";
                for (var i = 0; i < message.useHeroId.length; ++i)
                    if (!$util.isInteger(message.useHeroId[i]))
                        return "useHeroId: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a HeroUpStarReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroUpStarReqMsg} HeroUpStarReqMsg
         */
        HeroUpStarReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroUpStarReqMsg)
                return object;
            var message = new $root.playerHero.HeroUpStarReqMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.useHeroId) {
                if (!Array.isArray(object.useHeroId))
                    throw TypeError(".playerHero.HeroUpStarReqMsg.useHeroId: array expected");
                message.useHeroId = [];
                for (var i = 0; i < object.useHeroId.length; ++i)
                    message.useHeroId[i] = object.useHeroId[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroUpStarReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {playerHero.HeroUpStarReqMsg} message HeroUpStarReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroUpStarReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.useHeroId = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.useHeroId && message.useHeroId.length) {
                object.useHeroId = [];
                for (var j = 0; j < message.useHeroId.length; ++j)
                    object.useHeroId[j] = message.useHeroId[j];
            }
            return object;
        };

        /**
         * Converts this HeroUpStarReqMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroUpStarReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroUpStarReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroUpStarReqMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroUpStarReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroUpStarReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroUpStarReqMsg";
        };

        return HeroUpStarReqMsg;
    })();

    playerHero.HeroUpStarResMsg = (function() {

        /**
         * Properties of a HeroUpStarResMsg.
         * @memberof playerHero
         * @interface IHeroUpStarResMsg
         * @property {playerHero.IHeroMsg|null} [hero] HeroUpStarResMsg hero
         */

        /**
         * Constructs a new HeroUpStarResMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroUpStarResMsg.
         * @implements IHeroUpStarResMsg
         * @constructor
         * @param {playerHero.IHeroUpStarResMsg=} [properties] Properties to set
         */
        function HeroUpStarResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroUpStarResMsg hero.
         * @member {playerHero.IHeroMsg|null|undefined} hero
         * @memberof playerHero.HeroUpStarResMsg
         * @instance
         */
        HeroUpStarResMsg.prototype.hero = null;

        /**
         * Creates a new HeroUpStarResMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {playerHero.IHeroUpStarResMsg=} [properties] Properties to set
         * @returns {playerHero.HeroUpStarResMsg} HeroUpStarResMsg instance
         */
        HeroUpStarResMsg.create = function create(properties) {
            return new HeroUpStarResMsg(properties);
        };

        /**
         * Encodes the specified HeroUpStarResMsg message. Does not implicitly {@link playerHero.HeroUpStarResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {playerHero.IHeroUpStarResMsg} message HeroUpStarResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpStarResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hero != null && Object.hasOwnProperty.call(message, "hero"))
                $root.playerHero.HeroMsg.encode(message.hero, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroUpStarResMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpStarResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {playerHero.IHeroUpStarResMsg} message HeroUpStarResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpStarResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroUpStarResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroUpStarResMsg} HeroUpStarResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpStarResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroUpStarResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hero = $root.playerHero.HeroMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroUpStarResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroUpStarResMsg} HeroUpStarResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpStarResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroUpStarResMsg message.
         * @function verify
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroUpStarResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hero != null && message.hasOwnProperty("hero")) {
                var error = $root.playerHero.HeroMsg.verify(message.hero);
                if (error)
                    return "hero." + error;
            }
            return null;
        };

        /**
         * Creates a HeroUpStarResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroUpStarResMsg} HeroUpStarResMsg
         */
        HeroUpStarResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroUpStarResMsg)
                return object;
            var message = new $root.playerHero.HeroUpStarResMsg();
            if (object.hero != null) {
                if (typeof object.hero !== "object")
                    throw TypeError(".playerHero.HeroUpStarResMsg.hero: object expected");
                message.hero = $root.playerHero.HeroMsg.fromObject(object.hero);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroUpStarResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {playerHero.HeroUpStarResMsg} message HeroUpStarResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroUpStarResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.hero = null;
            if (message.hero != null && message.hasOwnProperty("hero"))
                object.hero = $root.playerHero.HeroMsg.toObject(message.hero, options);
            return object;
        };

        /**
         * Converts this HeroUpStarResMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroUpStarResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroUpStarResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroUpStarResMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroUpStarResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroUpStarResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroUpStarResMsg";
        };

        return HeroUpStarResMsg;
    })();

    playerHero.HeroUpTalentReqMsg = (function() {

        /**
         * Properties of a HeroUpTalentReqMsg.
         * @memberof playerHero
         * @interface IHeroUpTalentReqMsg
         * @property {number|null} [heroId] HeroUpTalentReqMsg heroId
         * @property {number|null} [talentId] HeroUpTalentReqMsg talentId
         */

        /**
         * Constructs a new HeroUpTalentReqMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroUpTalentReqMsg.
         * @implements IHeroUpTalentReqMsg
         * @constructor
         * @param {playerHero.IHeroUpTalentReqMsg=} [properties] Properties to set
         */
        function HeroUpTalentReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroUpTalentReqMsg heroId.
         * @member {number} heroId
         * @memberof playerHero.HeroUpTalentReqMsg
         * @instance
         */
        HeroUpTalentReqMsg.prototype.heroId = 0;

        /**
         * HeroUpTalentReqMsg talentId.
         * @member {number} talentId
         * @memberof playerHero.HeroUpTalentReqMsg
         * @instance
         */
        HeroUpTalentReqMsg.prototype.talentId = 0;

        /**
         * Creates a new HeroUpTalentReqMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {playerHero.IHeroUpTalentReqMsg=} [properties] Properties to set
         * @returns {playerHero.HeroUpTalentReqMsg} HeroUpTalentReqMsg instance
         */
        HeroUpTalentReqMsg.create = function create(properties) {
            return new HeroUpTalentReqMsg(properties);
        };

        /**
         * Encodes the specified HeroUpTalentReqMsg message. Does not implicitly {@link playerHero.HeroUpTalentReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {playerHero.IHeroUpTalentReqMsg} message HeroUpTalentReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpTalentReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
            if (message.talentId != null && Object.hasOwnProperty.call(message, "talentId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.talentId);
            return writer;
        };

        /**
         * Encodes the specified HeroUpTalentReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpTalentReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {playerHero.IHeroUpTalentReqMsg} message HeroUpTalentReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpTalentReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroUpTalentReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroUpTalentReqMsg} HeroUpTalentReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpTalentReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroUpTalentReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.heroId = reader.int32();
                        break;
                    }
                case 2: {
                        message.talentId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroUpTalentReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroUpTalentReqMsg} HeroUpTalentReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpTalentReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroUpTalentReqMsg message.
         * @function verify
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroUpTalentReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.talentId != null && message.hasOwnProperty("talentId"))
                if (!$util.isInteger(message.talentId))
                    return "talentId: integer expected";
            return null;
        };

        /**
         * Creates a HeroUpTalentReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroUpTalentReqMsg} HeroUpTalentReqMsg
         */
        HeroUpTalentReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroUpTalentReqMsg)
                return object;
            var message = new $root.playerHero.HeroUpTalentReqMsg();
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.talentId != null)
                message.talentId = object.talentId | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroUpTalentReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {playerHero.HeroUpTalentReqMsg} message HeroUpTalentReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroUpTalentReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.heroId = 0;
                object.talentId = 0;
            }
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.talentId != null && message.hasOwnProperty("talentId"))
                object.talentId = message.talentId;
            return object;
        };

        /**
         * Converts this HeroUpTalentReqMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroUpTalentReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroUpTalentReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroUpTalentReqMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroUpTalentReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroUpTalentReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroUpTalentReqMsg";
        };

        return HeroUpTalentReqMsg;
    })();

    playerHero.HeroUpTalentResMsg = (function() {

        /**
         * Properties of a HeroUpTalentResMsg.
         * @memberof playerHero
         * @interface IHeroUpTalentResMsg
         * @property {playerHero.IHeroMsg|null} [hero] HeroUpTalentResMsg hero
         */

        /**
         * Constructs a new HeroUpTalentResMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroUpTalentResMsg.
         * @implements IHeroUpTalentResMsg
         * @constructor
         * @param {playerHero.IHeroUpTalentResMsg=} [properties] Properties to set
         */
        function HeroUpTalentResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroUpTalentResMsg hero.
         * @member {playerHero.IHeroMsg|null|undefined} hero
         * @memberof playerHero.HeroUpTalentResMsg
         * @instance
         */
        HeroUpTalentResMsg.prototype.hero = null;

        /**
         * Creates a new HeroUpTalentResMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {playerHero.IHeroUpTalentResMsg=} [properties] Properties to set
         * @returns {playerHero.HeroUpTalentResMsg} HeroUpTalentResMsg instance
         */
        HeroUpTalentResMsg.create = function create(properties) {
            return new HeroUpTalentResMsg(properties);
        };

        /**
         * Encodes the specified HeroUpTalentResMsg message. Does not implicitly {@link playerHero.HeroUpTalentResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {playerHero.IHeroUpTalentResMsg} message HeroUpTalentResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpTalentResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hero != null && Object.hasOwnProperty.call(message, "hero"))
                $root.playerHero.HeroMsg.encode(message.hero, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroUpTalentResMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpTalentResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {playerHero.IHeroUpTalentResMsg} message HeroUpTalentResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroUpTalentResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroUpTalentResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroUpTalentResMsg} HeroUpTalentResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpTalentResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroUpTalentResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hero = $root.playerHero.HeroMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroUpTalentResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroUpTalentResMsg} HeroUpTalentResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroUpTalentResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroUpTalentResMsg message.
         * @function verify
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroUpTalentResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hero != null && message.hasOwnProperty("hero")) {
                var error = $root.playerHero.HeroMsg.verify(message.hero);
                if (error)
                    return "hero." + error;
            }
            return null;
        };

        /**
         * Creates a HeroUpTalentResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroUpTalentResMsg} HeroUpTalentResMsg
         */
        HeroUpTalentResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroUpTalentResMsg)
                return object;
            var message = new $root.playerHero.HeroUpTalentResMsg();
            if (object.hero != null) {
                if (typeof object.hero !== "object")
                    throw TypeError(".playerHero.HeroUpTalentResMsg.hero: object expected");
                message.hero = $root.playerHero.HeroMsg.fromObject(object.hero);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroUpTalentResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {playerHero.HeroUpTalentResMsg} message HeroUpTalentResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroUpTalentResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.hero = null;
            if (message.hero != null && message.hasOwnProperty("hero"))
                object.hero = $root.playerHero.HeroMsg.toObject(message.hero, options);
            return object;
        };

        /**
         * Converts this HeroUpTalentResMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroUpTalentResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroUpTalentResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroUpTalentResMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroUpTalentResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroUpTalentResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroUpTalentResMsg";
        };

        return HeroUpTalentResMsg;
    })();

    playerHero.HeroEquipWearReqMsg = (function() {

        /**
         * Properties of a HeroEquipWearReqMsg.
         * @memberof playerHero
         * @interface IHeroEquipWearReqMsg
         * @property {number|null} [heroId] HeroEquipWearReqMsg heroId
         * @property {number|null} [equipId] HeroEquipWearReqMsg equipId
         */

        /**
         * Constructs a new HeroEquipWearReqMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroEquipWearReqMsg.
         * @implements IHeroEquipWearReqMsg
         * @constructor
         * @param {playerHero.IHeroEquipWearReqMsg=} [properties] Properties to set
         */
        function HeroEquipWearReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroEquipWearReqMsg heroId.
         * @member {number} heroId
         * @memberof playerHero.HeroEquipWearReqMsg
         * @instance
         */
        HeroEquipWearReqMsg.prototype.heroId = 0;

        /**
         * HeroEquipWearReqMsg equipId.
         * @member {number} equipId
         * @memberof playerHero.HeroEquipWearReqMsg
         * @instance
         */
        HeroEquipWearReqMsg.prototype.equipId = 0;

        /**
         * Creates a new HeroEquipWearReqMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {playerHero.IHeroEquipWearReqMsg=} [properties] Properties to set
         * @returns {playerHero.HeroEquipWearReqMsg} HeroEquipWearReqMsg instance
         */
        HeroEquipWearReqMsg.create = function create(properties) {
            return new HeroEquipWearReqMsg(properties);
        };

        /**
         * Encodes the specified HeroEquipWearReqMsg message. Does not implicitly {@link playerHero.HeroEquipWearReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {playerHero.IHeroEquipWearReqMsg} message HeroEquipWearReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipWearReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
            if (message.equipId != null && Object.hasOwnProperty.call(message, "equipId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.equipId);
            return writer;
        };

        /**
         * Encodes the specified HeroEquipWearReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipWearReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {playerHero.IHeroEquipWearReqMsg} message HeroEquipWearReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipWearReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroEquipWearReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroEquipWearReqMsg} HeroEquipWearReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipWearReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroEquipWearReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.heroId = reader.int32();
                        break;
                    }
                case 2: {
                        message.equipId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroEquipWearReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroEquipWearReqMsg} HeroEquipWearReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipWearReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroEquipWearReqMsg message.
         * @function verify
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroEquipWearReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.equipId != null && message.hasOwnProperty("equipId"))
                if (!$util.isInteger(message.equipId))
                    return "equipId: integer expected";
            return null;
        };

        /**
         * Creates a HeroEquipWearReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroEquipWearReqMsg} HeroEquipWearReqMsg
         */
        HeroEquipWearReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroEquipWearReqMsg)
                return object;
            var message = new $root.playerHero.HeroEquipWearReqMsg();
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.equipId != null)
                message.equipId = object.equipId | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroEquipWearReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {playerHero.HeroEquipWearReqMsg} message HeroEquipWearReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroEquipWearReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.heroId = 0;
                object.equipId = 0;
            }
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.equipId != null && message.hasOwnProperty("equipId"))
                object.equipId = message.equipId;
            return object;
        };

        /**
         * Converts this HeroEquipWearReqMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroEquipWearReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroEquipWearReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroEquipWearReqMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroEquipWearReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroEquipWearReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroEquipWearReqMsg";
        };

        return HeroEquipWearReqMsg;
    })();

    playerHero.HeroEquipWearResMsg = (function() {

        /**
         * Properties of a HeroEquipWearResMsg.
         * @memberof playerHero
         * @interface IHeroEquipWearResMsg
         * @property {playerHero.IHeroMsg|null} [HeroMsg] HeroEquipWearResMsg HeroMsg
         */

        /**
         * Constructs a new HeroEquipWearResMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroEquipWearResMsg.
         * @implements IHeroEquipWearResMsg
         * @constructor
         * @param {playerHero.IHeroEquipWearResMsg=} [properties] Properties to set
         */
        function HeroEquipWearResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroEquipWearResMsg HeroMsg.
         * @member {playerHero.IHeroMsg|null|undefined} HeroMsg
         * @memberof playerHero.HeroEquipWearResMsg
         * @instance
         */
        HeroEquipWearResMsg.prototype.HeroMsg = null;

        /**
         * Creates a new HeroEquipWearResMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {playerHero.IHeroEquipWearResMsg=} [properties] Properties to set
         * @returns {playerHero.HeroEquipWearResMsg} HeroEquipWearResMsg instance
         */
        HeroEquipWearResMsg.create = function create(properties) {
            return new HeroEquipWearResMsg(properties);
        };

        /**
         * Encodes the specified HeroEquipWearResMsg message. Does not implicitly {@link playerHero.HeroEquipWearResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {playerHero.IHeroEquipWearResMsg} message HeroEquipWearResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipWearResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HeroMsg != null && Object.hasOwnProperty.call(message, "HeroMsg"))
                $root.playerHero.HeroMsg.encode(message.HeroMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroEquipWearResMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipWearResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {playerHero.IHeroEquipWearResMsg} message HeroEquipWearResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipWearResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroEquipWearResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroEquipWearResMsg} HeroEquipWearResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipWearResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroEquipWearResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.HeroMsg = $root.playerHero.HeroMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroEquipWearResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroEquipWearResMsg} HeroEquipWearResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipWearResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroEquipWearResMsg message.
         * @function verify
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroEquipWearResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HeroMsg != null && message.hasOwnProperty("HeroMsg")) {
                var error = $root.playerHero.HeroMsg.verify(message.HeroMsg);
                if (error)
                    return "HeroMsg." + error;
            }
            return null;
        };

        /**
         * Creates a HeroEquipWearResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroEquipWearResMsg} HeroEquipWearResMsg
         */
        HeroEquipWearResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroEquipWearResMsg)
                return object;
            var message = new $root.playerHero.HeroEquipWearResMsg();
            if (object.HeroMsg != null) {
                if (typeof object.HeroMsg !== "object")
                    throw TypeError(".playerHero.HeroEquipWearResMsg.HeroMsg: object expected");
                message.HeroMsg = $root.playerHero.HeroMsg.fromObject(object.HeroMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroEquipWearResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {playerHero.HeroEquipWearResMsg} message HeroEquipWearResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroEquipWearResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.HeroMsg = null;
            if (message.HeroMsg != null && message.hasOwnProperty("HeroMsg"))
                object.HeroMsg = $root.playerHero.HeroMsg.toObject(message.HeroMsg, options);
            return object;
        };

        /**
         * Converts this HeroEquipWearResMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroEquipWearResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroEquipWearResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroEquipWearResMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroEquipWearResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroEquipWearResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroEquipWearResMsg";
        };

        return HeroEquipWearResMsg;
    })();

    playerHero.HeroEquipUpLvReqMsg = (function() {

        /**
         * Properties of a HeroEquipUpLvReqMsg.
         * @memberof playerHero
         * @interface IHeroEquipUpLvReqMsg
         * @property {number|null} [heroId] HeroEquipUpLvReqMsg heroId
         * @property {number|null} [pos] HeroEquipUpLvReqMsg pos
         * @property {Object.<string,number>|null} [useEquip] HeroEquipUpLvReqMsg useEquip
         */

        /**
         * Constructs a new HeroEquipUpLvReqMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroEquipUpLvReqMsg.
         * @implements IHeroEquipUpLvReqMsg
         * @constructor
         * @param {playerHero.IHeroEquipUpLvReqMsg=} [properties] Properties to set
         */
        function HeroEquipUpLvReqMsg(properties) {
            this.useEquip = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroEquipUpLvReqMsg heroId.
         * @member {number} heroId
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @instance
         */
        HeroEquipUpLvReqMsg.prototype.heroId = 0;

        /**
         * HeroEquipUpLvReqMsg pos.
         * @member {number} pos
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @instance
         */
        HeroEquipUpLvReqMsg.prototype.pos = 0;

        /**
         * HeroEquipUpLvReqMsg useEquip.
         * @member {Object.<string,number>} useEquip
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @instance
         */
        HeroEquipUpLvReqMsg.prototype.useEquip = $util.emptyObject;

        /**
         * Creates a new HeroEquipUpLvReqMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {playerHero.IHeroEquipUpLvReqMsg=} [properties] Properties to set
         * @returns {playerHero.HeroEquipUpLvReqMsg} HeroEquipUpLvReqMsg instance
         */
        HeroEquipUpLvReqMsg.create = function create(properties) {
            return new HeroEquipUpLvReqMsg(properties);
        };

        /**
         * Encodes the specified HeroEquipUpLvReqMsg message. Does not implicitly {@link playerHero.HeroEquipUpLvReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {playerHero.IHeroEquipUpLvReqMsg} message HeroEquipUpLvReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipUpLvReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pos);
            if (message.useEquip != null && Object.hasOwnProperty.call(message, "useEquip"))
                for (var keys = Object.keys(message.useEquip), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.useEquip[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroEquipUpLvReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipUpLvReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {playerHero.IHeroEquipUpLvReqMsg} message HeroEquipUpLvReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipUpLvReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroEquipUpLvReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroEquipUpLvReqMsg} HeroEquipUpLvReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipUpLvReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroEquipUpLvReqMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.heroId = reader.int32();
                        break;
                    }
                case 2: {
                        message.pos = reader.int32();
                        break;
                    }
                case 3: {
                        if (message.useEquip === $util.emptyObject)
                            message.useEquip = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.useEquip[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroEquipUpLvReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroEquipUpLvReqMsg} HeroEquipUpLvReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipUpLvReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroEquipUpLvReqMsg message.
         * @function verify
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroEquipUpLvReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            if (message.useEquip != null && message.hasOwnProperty("useEquip")) {
                if (!$util.isObject(message.useEquip))
                    return "useEquip: object expected";
                var key = Object.keys(message.useEquip);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "useEquip: integer key{k:int32} expected";
                    if (!$util.isInteger(message.useEquip[key[i]]))
                        return "useEquip: integer{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a HeroEquipUpLvReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroEquipUpLvReqMsg} HeroEquipUpLvReqMsg
         */
        HeroEquipUpLvReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroEquipUpLvReqMsg)
                return object;
            var message = new $root.playerHero.HeroEquipUpLvReqMsg();
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.pos != null)
                message.pos = object.pos | 0;
            if (object.useEquip) {
                if (typeof object.useEquip !== "object")
                    throw TypeError(".playerHero.HeroEquipUpLvReqMsg.useEquip: object expected");
                message.useEquip = {};
                for (var keys = Object.keys(object.useEquip), i = 0; i < keys.length; ++i)
                    message.useEquip[keys[i]] = object.useEquip[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroEquipUpLvReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {playerHero.HeroEquipUpLvReqMsg} message HeroEquipUpLvReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroEquipUpLvReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.useEquip = {};
            if (options.defaults) {
                object.heroId = 0;
                object.pos = 0;
            }
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            var keys2;
            if (message.useEquip && (keys2 = Object.keys(message.useEquip)).length) {
                object.useEquip = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.useEquip[keys2[j]] = message.useEquip[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this HeroEquipUpLvReqMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroEquipUpLvReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroEquipUpLvReqMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroEquipUpLvReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroEquipUpLvReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroEquipUpLvReqMsg";
        };

        return HeroEquipUpLvReqMsg;
    })();

    playerHero.HeroEquipUpLvResMsg = (function() {

        /**
         * Properties of a HeroEquipUpLvResMsg.
         * @memberof playerHero
         * @interface IHeroEquipUpLvResMsg
         * @property {playerHero.IHeroMsg|null} [heroMsg] HeroEquipUpLvResMsg heroMsg
         */

        /**
         * Constructs a new HeroEquipUpLvResMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroEquipUpLvResMsg.
         * @implements IHeroEquipUpLvResMsg
         * @constructor
         * @param {playerHero.IHeroEquipUpLvResMsg=} [properties] Properties to set
         */
        function HeroEquipUpLvResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroEquipUpLvResMsg heroMsg.
         * @member {playerHero.IHeroMsg|null|undefined} heroMsg
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @instance
         */
        HeroEquipUpLvResMsg.prototype.heroMsg = null;

        /**
         * Creates a new HeroEquipUpLvResMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {playerHero.IHeroEquipUpLvResMsg=} [properties] Properties to set
         * @returns {playerHero.HeroEquipUpLvResMsg} HeroEquipUpLvResMsg instance
         */
        HeroEquipUpLvResMsg.create = function create(properties) {
            return new HeroEquipUpLvResMsg(properties);
        };

        /**
         * Encodes the specified HeroEquipUpLvResMsg message. Does not implicitly {@link playerHero.HeroEquipUpLvResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {playerHero.IHeroEquipUpLvResMsg} message HeroEquipUpLvResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipUpLvResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroMsg != null && Object.hasOwnProperty.call(message, "heroMsg"))
                $root.playerHero.HeroMsg.encode(message.heroMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroEquipUpLvResMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipUpLvResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {playerHero.IHeroEquipUpLvResMsg} message HeroEquipUpLvResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipUpLvResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroEquipUpLvResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroEquipUpLvResMsg} HeroEquipUpLvResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipUpLvResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroEquipUpLvResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.heroMsg = $root.playerHero.HeroMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroEquipUpLvResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroEquipUpLvResMsg} HeroEquipUpLvResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipUpLvResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroEquipUpLvResMsg message.
         * @function verify
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroEquipUpLvResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroMsg != null && message.hasOwnProperty("heroMsg")) {
                var error = $root.playerHero.HeroMsg.verify(message.heroMsg);
                if (error)
                    return "heroMsg." + error;
            }
            return null;
        };

        /**
         * Creates a HeroEquipUpLvResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroEquipUpLvResMsg} HeroEquipUpLvResMsg
         */
        HeroEquipUpLvResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroEquipUpLvResMsg)
                return object;
            var message = new $root.playerHero.HeroEquipUpLvResMsg();
            if (object.heroMsg != null) {
                if (typeof object.heroMsg !== "object")
                    throw TypeError(".playerHero.HeroEquipUpLvResMsg.heroMsg: object expected");
                message.heroMsg = $root.playerHero.HeroMsg.fromObject(object.heroMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroEquipUpLvResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {playerHero.HeroEquipUpLvResMsg} message HeroEquipUpLvResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroEquipUpLvResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.heroMsg = null;
            if (message.heroMsg != null && message.hasOwnProperty("heroMsg"))
                object.heroMsg = $root.playerHero.HeroMsg.toObject(message.heroMsg, options);
            return object;
        };

        /**
         * Converts this HeroEquipUpLvResMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroEquipUpLvResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroEquipUpLvResMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroEquipUpLvResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroEquipUpLvResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroEquipUpLvResMsg";
        };

        return HeroEquipUpLvResMsg;
    })();

    playerHero.HeroEquipUnloadReqMsg = (function() {

        /**
         * Properties of a HeroEquipUnloadReqMsg.
         * @memberof playerHero
         * @interface IHeroEquipUnloadReqMsg
         * @property {number|null} [heroId] HeroEquipUnloadReqMsg heroId
         * @property {number|null} [pos] HeroEquipUnloadReqMsg pos
         */

        /**
         * Constructs a new HeroEquipUnloadReqMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroEquipUnloadReqMsg.
         * @implements IHeroEquipUnloadReqMsg
         * @constructor
         * @param {playerHero.IHeroEquipUnloadReqMsg=} [properties] Properties to set
         */
        function HeroEquipUnloadReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroEquipUnloadReqMsg heroId.
         * @member {number} heroId
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @instance
         */
        HeroEquipUnloadReqMsg.prototype.heroId = 0;

        /**
         * HeroEquipUnloadReqMsg pos.
         * @member {number} pos
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @instance
         */
        HeroEquipUnloadReqMsg.prototype.pos = 0;

        /**
         * Creates a new HeroEquipUnloadReqMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {playerHero.IHeroEquipUnloadReqMsg=} [properties] Properties to set
         * @returns {playerHero.HeroEquipUnloadReqMsg} HeroEquipUnloadReqMsg instance
         */
        HeroEquipUnloadReqMsg.create = function create(properties) {
            return new HeroEquipUnloadReqMsg(properties);
        };

        /**
         * Encodes the specified HeroEquipUnloadReqMsg message. Does not implicitly {@link playerHero.HeroEquipUnloadReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {playerHero.IHeroEquipUnloadReqMsg} message HeroEquipUnloadReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipUnloadReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pos);
            return writer;
        };

        /**
         * Encodes the specified HeroEquipUnloadReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipUnloadReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {playerHero.IHeroEquipUnloadReqMsg} message HeroEquipUnloadReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipUnloadReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroEquipUnloadReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroEquipUnloadReqMsg} HeroEquipUnloadReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipUnloadReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroEquipUnloadReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.heroId = reader.int32();
                        break;
                    }
                case 2: {
                        message.pos = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroEquipUnloadReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroEquipUnloadReqMsg} HeroEquipUnloadReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipUnloadReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroEquipUnloadReqMsg message.
         * @function verify
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroEquipUnloadReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            return null;
        };

        /**
         * Creates a HeroEquipUnloadReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroEquipUnloadReqMsg} HeroEquipUnloadReqMsg
         */
        HeroEquipUnloadReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroEquipUnloadReqMsg)
                return object;
            var message = new $root.playerHero.HeroEquipUnloadReqMsg();
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.pos != null)
                message.pos = object.pos | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroEquipUnloadReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {playerHero.HeroEquipUnloadReqMsg} message HeroEquipUnloadReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroEquipUnloadReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.heroId = 0;
                object.pos = 0;
            }
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            return object;
        };

        /**
         * Converts this HeroEquipUnloadReqMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroEquipUnloadReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroEquipUnloadReqMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroEquipUnloadReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroEquipUnloadReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroEquipUnloadReqMsg";
        };

        return HeroEquipUnloadReqMsg;
    })();

    playerHero.HeroEquipUnloadResMsg = (function() {

        /**
         * Properties of a HeroEquipUnloadResMsg.
         * @memberof playerHero
         * @interface IHeroEquipUnloadResMsg
         * @property {playerHero.IHeroMsg|null} [heroMsg] HeroEquipUnloadResMsg heroMsg
         */

        /**
         * Constructs a new HeroEquipUnloadResMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroEquipUnloadResMsg.
         * @implements IHeroEquipUnloadResMsg
         * @constructor
         * @param {playerHero.IHeroEquipUnloadResMsg=} [properties] Properties to set
         */
        function HeroEquipUnloadResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroEquipUnloadResMsg heroMsg.
         * @member {playerHero.IHeroMsg|null|undefined} heroMsg
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @instance
         */
        HeroEquipUnloadResMsg.prototype.heroMsg = null;

        /**
         * Creates a new HeroEquipUnloadResMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {playerHero.IHeroEquipUnloadResMsg=} [properties] Properties to set
         * @returns {playerHero.HeroEquipUnloadResMsg} HeroEquipUnloadResMsg instance
         */
        HeroEquipUnloadResMsg.create = function create(properties) {
            return new HeroEquipUnloadResMsg(properties);
        };

        /**
         * Encodes the specified HeroEquipUnloadResMsg message. Does not implicitly {@link playerHero.HeroEquipUnloadResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {playerHero.IHeroEquipUnloadResMsg} message HeroEquipUnloadResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipUnloadResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroMsg != null && Object.hasOwnProperty.call(message, "heroMsg"))
                $root.playerHero.HeroMsg.encode(message.heroMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroEquipUnloadResMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipUnloadResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {playerHero.IHeroEquipUnloadResMsg} message HeroEquipUnloadResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipUnloadResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroEquipUnloadResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroEquipUnloadResMsg} HeroEquipUnloadResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipUnloadResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroEquipUnloadResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.heroMsg = $root.playerHero.HeroMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroEquipUnloadResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroEquipUnloadResMsg} HeroEquipUnloadResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipUnloadResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroEquipUnloadResMsg message.
         * @function verify
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroEquipUnloadResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroMsg != null && message.hasOwnProperty("heroMsg")) {
                var error = $root.playerHero.HeroMsg.verify(message.heroMsg);
                if (error)
                    return "heroMsg." + error;
            }
            return null;
        };

        /**
         * Creates a HeroEquipUnloadResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroEquipUnloadResMsg} HeroEquipUnloadResMsg
         */
        HeroEquipUnloadResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroEquipUnloadResMsg)
                return object;
            var message = new $root.playerHero.HeroEquipUnloadResMsg();
            if (object.heroMsg != null) {
                if (typeof object.heroMsg !== "object")
                    throw TypeError(".playerHero.HeroEquipUnloadResMsg.heroMsg: object expected");
                message.heroMsg = $root.playerHero.HeroMsg.fromObject(object.heroMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroEquipUnloadResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {playerHero.HeroEquipUnloadResMsg} message HeroEquipUnloadResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroEquipUnloadResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.heroMsg = null;
            if (message.heroMsg != null && message.hasOwnProperty("heroMsg"))
                object.heroMsg = $root.playerHero.HeroMsg.toObject(message.heroMsg, options);
            return object;
        };

        /**
         * Converts this HeroEquipUnloadResMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroEquipUnloadResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroEquipUnloadResMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroEquipUnloadResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroEquipUnloadResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroEquipUnloadResMsg";
        };

        return HeroEquipUnloadResMsg;
    })();

    playerHero.HeroEquipReplaceReqMsg = (function() {

        /**
         * Properties of a HeroEquipReplaceReqMsg.
         * @memberof playerHero
         * @interface IHeroEquipReplaceReqMsg
         * @property {number|null} [targetHeroId] HeroEquipReplaceReqMsg targetHeroId
         * @property {number|null} [sourceHeroId] HeroEquipReplaceReqMsg sourceHeroId
         * @property {number|null} [pos] HeroEquipReplaceReqMsg pos
         */

        /**
         * Constructs a new HeroEquipReplaceReqMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroEquipReplaceReqMsg.
         * @implements IHeroEquipReplaceReqMsg
         * @constructor
         * @param {playerHero.IHeroEquipReplaceReqMsg=} [properties] Properties to set
         */
        function HeroEquipReplaceReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroEquipReplaceReqMsg targetHeroId.
         * @member {number} targetHeroId
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @instance
         */
        HeroEquipReplaceReqMsg.prototype.targetHeroId = 0;

        /**
         * HeroEquipReplaceReqMsg sourceHeroId.
         * @member {number} sourceHeroId
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @instance
         */
        HeroEquipReplaceReqMsg.prototype.sourceHeroId = 0;

        /**
         * HeroEquipReplaceReqMsg pos.
         * @member {number} pos
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @instance
         */
        HeroEquipReplaceReqMsg.prototype.pos = 0;

        /**
         * Creates a new HeroEquipReplaceReqMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {playerHero.IHeroEquipReplaceReqMsg=} [properties] Properties to set
         * @returns {playerHero.HeroEquipReplaceReqMsg} HeroEquipReplaceReqMsg instance
         */
        HeroEquipReplaceReqMsg.create = function create(properties) {
            return new HeroEquipReplaceReqMsg(properties);
        };

        /**
         * Encodes the specified HeroEquipReplaceReqMsg message. Does not implicitly {@link playerHero.HeroEquipReplaceReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {playerHero.IHeroEquipReplaceReqMsg} message HeroEquipReplaceReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipReplaceReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetHeroId != null && Object.hasOwnProperty.call(message, "targetHeroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.targetHeroId);
            if (message.sourceHeroId != null && Object.hasOwnProperty.call(message, "sourceHeroId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sourceHeroId);
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pos);
            return writer;
        };

        /**
         * Encodes the specified HeroEquipReplaceReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipReplaceReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {playerHero.IHeroEquipReplaceReqMsg} message HeroEquipReplaceReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipReplaceReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroEquipReplaceReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroEquipReplaceReqMsg} HeroEquipReplaceReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipReplaceReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroEquipReplaceReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.targetHeroId = reader.int32();
                        break;
                    }
                case 2: {
                        message.sourceHeroId = reader.int32();
                        break;
                    }
                case 3: {
                        message.pos = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroEquipReplaceReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroEquipReplaceReqMsg} HeroEquipReplaceReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipReplaceReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroEquipReplaceReqMsg message.
         * @function verify
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroEquipReplaceReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetHeroId != null && message.hasOwnProperty("targetHeroId"))
                if (!$util.isInteger(message.targetHeroId))
                    return "targetHeroId: integer expected";
            if (message.sourceHeroId != null && message.hasOwnProperty("sourceHeroId"))
                if (!$util.isInteger(message.sourceHeroId))
                    return "sourceHeroId: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            return null;
        };

        /**
         * Creates a HeroEquipReplaceReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroEquipReplaceReqMsg} HeroEquipReplaceReqMsg
         */
        HeroEquipReplaceReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroEquipReplaceReqMsg)
                return object;
            var message = new $root.playerHero.HeroEquipReplaceReqMsg();
            if (object.targetHeroId != null)
                message.targetHeroId = object.targetHeroId | 0;
            if (object.sourceHeroId != null)
                message.sourceHeroId = object.sourceHeroId | 0;
            if (object.pos != null)
                message.pos = object.pos | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroEquipReplaceReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {playerHero.HeroEquipReplaceReqMsg} message HeroEquipReplaceReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroEquipReplaceReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.targetHeroId = 0;
                object.sourceHeroId = 0;
                object.pos = 0;
            }
            if (message.targetHeroId != null && message.hasOwnProperty("targetHeroId"))
                object.targetHeroId = message.targetHeroId;
            if (message.sourceHeroId != null && message.hasOwnProperty("sourceHeroId"))
                object.sourceHeroId = message.sourceHeroId;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            return object;
        };

        /**
         * Converts this HeroEquipReplaceReqMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroEquipReplaceReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroEquipReplaceReqMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroEquipReplaceReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroEquipReplaceReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroEquipReplaceReqMsg";
        };

        return HeroEquipReplaceReqMsg;
    })();

    playerHero.HeroEquipReplaceResMsg = (function() {

        /**
         * Properties of a HeroEquipReplaceResMsg.
         * @memberof playerHero
         * @interface IHeroEquipReplaceResMsg
         * @property {Array.<playerHero.IHeroMsg>|null} [heroMsg] HeroEquipReplaceResMsg heroMsg
         */

        /**
         * Constructs a new HeroEquipReplaceResMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroEquipReplaceResMsg.
         * @implements IHeroEquipReplaceResMsg
         * @constructor
         * @param {playerHero.IHeroEquipReplaceResMsg=} [properties] Properties to set
         */
        function HeroEquipReplaceResMsg(properties) {
            this.heroMsg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroEquipReplaceResMsg heroMsg.
         * @member {Array.<playerHero.IHeroMsg>} heroMsg
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @instance
         */
        HeroEquipReplaceResMsg.prototype.heroMsg = $util.emptyArray;

        /**
         * Creates a new HeroEquipReplaceResMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {playerHero.IHeroEquipReplaceResMsg=} [properties] Properties to set
         * @returns {playerHero.HeroEquipReplaceResMsg} HeroEquipReplaceResMsg instance
         */
        HeroEquipReplaceResMsg.create = function create(properties) {
            return new HeroEquipReplaceResMsg(properties);
        };

        /**
         * Encodes the specified HeroEquipReplaceResMsg message. Does not implicitly {@link playerHero.HeroEquipReplaceResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {playerHero.IHeroEquipReplaceResMsg} message HeroEquipReplaceResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipReplaceResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroMsg != null && message.heroMsg.length)
                for (var i = 0; i < message.heroMsg.length; ++i)
                    $root.playerHero.HeroMsg.encode(message.heroMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroEquipReplaceResMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipReplaceResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {playerHero.IHeroEquipReplaceResMsg} message HeroEquipReplaceResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroEquipReplaceResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroEquipReplaceResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroEquipReplaceResMsg} HeroEquipReplaceResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipReplaceResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroEquipReplaceResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.heroMsg && message.heroMsg.length))
                            message.heroMsg = [];
                        message.heroMsg.push($root.playerHero.HeroMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroEquipReplaceResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroEquipReplaceResMsg} HeroEquipReplaceResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroEquipReplaceResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroEquipReplaceResMsg message.
         * @function verify
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroEquipReplaceResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroMsg != null && message.hasOwnProperty("heroMsg")) {
                if (!Array.isArray(message.heroMsg))
                    return "heroMsg: array expected";
                for (var i = 0; i < message.heroMsg.length; ++i) {
                    var error = $root.playerHero.HeroMsg.verify(message.heroMsg[i]);
                    if (error)
                        return "heroMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HeroEquipReplaceResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroEquipReplaceResMsg} HeroEquipReplaceResMsg
         */
        HeroEquipReplaceResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroEquipReplaceResMsg)
                return object;
            var message = new $root.playerHero.HeroEquipReplaceResMsg();
            if (object.heroMsg) {
                if (!Array.isArray(object.heroMsg))
                    throw TypeError(".playerHero.HeroEquipReplaceResMsg.heroMsg: array expected");
                message.heroMsg = [];
                for (var i = 0; i < object.heroMsg.length; ++i) {
                    if (typeof object.heroMsg[i] !== "object")
                        throw TypeError(".playerHero.HeroEquipReplaceResMsg.heroMsg: object expected");
                    message.heroMsg[i] = $root.playerHero.HeroMsg.fromObject(object.heroMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroEquipReplaceResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {playerHero.HeroEquipReplaceResMsg} message HeroEquipReplaceResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroEquipReplaceResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.heroMsg = [];
            if (message.heroMsg && message.heroMsg.length) {
                object.heroMsg = [];
                for (var j = 0; j < message.heroMsg.length; ++j)
                    object.heroMsg[j] = $root.playerHero.HeroMsg.toObject(message.heroMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this HeroEquipReplaceResMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroEquipReplaceResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroEquipReplaceResMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroEquipReplaceResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroEquipReplaceResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroEquipReplaceResMsg";
        };

        return HeroEquipReplaceResMsg;
    })();

    playerHero.HeroMsg = (function() {

        /**
         * Properties of a HeroMsg.
         * @memberof playerHero
         * @interface IHeroMsg
         * @property {number|null} [id] HeroMsg id
         * @property {number|null} [heroId] HeroMsg heroId
         * @property {number|null} [lv] HeroMsg lv
         * @property {number|null} [star] HeroMsg star
         * @property {number|null} [quality] HeroMsg quality
         * @property {Array.<playerHero.IAttrMsg>|null} [attrMsg] HeroMsg attrMsg
         * @property {Array.<playerEquip.IEquipMsg>|null} [equipMsg] HeroMsg equipMsg
         * @property {Object.<string,number>|null} [talent] HeroMsg talent
         */

        /**
         * Constructs a new HeroMsg.
         * @memberof playerHero
         * @classdesc Represents a HeroMsg.
         * @implements IHeroMsg
         * @constructor
         * @param {playerHero.IHeroMsg=} [properties] Properties to set
         */
        function HeroMsg(properties) {
            this.attrMsg = [];
            this.equipMsg = [];
            this.talent = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroMsg id.
         * @member {number} id
         * @memberof playerHero.HeroMsg
         * @instance
         */
        HeroMsg.prototype.id = 0;

        /**
         * HeroMsg heroId.
         * @member {number} heroId
         * @memberof playerHero.HeroMsg
         * @instance
         */
        HeroMsg.prototype.heroId = 0;

        /**
         * HeroMsg lv.
         * @member {number} lv
         * @memberof playerHero.HeroMsg
         * @instance
         */
        HeroMsg.prototype.lv = 0;

        /**
         * HeroMsg star.
         * @member {number} star
         * @memberof playerHero.HeroMsg
         * @instance
         */
        HeroMsg.prototype.star = 0;

        /**
         * HeroMsg quality.
         * @member {number} quality
         * @memberof playerHero.HeroMsg
         * @instance
         */
        HeroMsg.prototype.quality = 0;

        /**
         * HeroMsg attrMsg.
         * @member {Array.<playerHero.IAttrMsg>} attrMsg
         * @memberof playerHero.HeroMsg
         * @instance
         */
        HeroMsg.prototype.attrMsg = $util.emptyArray;

        /**
         * HeroMsg equipMsg.
         * @member {Array.<playerEquip.IEquipMsg>} equipMsg
         * @memberof playerHero.HeroMsg
         * @instance
         */
        HeroMsg.prototype.equipMsg = $util.emptyArray;

        /**
         * HeroMsg talent.
         * @member {Object.<string,number>} talent
         * @memberof playerHero.HeroMsg
         * @instance
         */
        HeroMsg.prototype.talent = $util.emptyObject;

        /**
         * Creates a new HeroMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.HeroMsg
         * @static
         * @param {playerHero.IHeroMsg=} [properties] Properties to set
         * @returns {playerHero.HeroMsg} HeroMsg instance
         */
        HeroMsg.create = function create(properties) {
            return new HeroMsg(properties);
        };

        /**
         * Encodes the specified HeroMsg message. Does not implicitly {@link playerHero.HeroMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.HeroMsg
         * @static
         * @param {playerHero.IHeroMsg} message HeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.heroId);
            if (message.lv != null && Object.hasOwnProperty.call(message, "lv"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lv);
            if (message.star != null && Object.hasOwnProperty.call(message, "star"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.star);
            if (message.quality != null && Object.hasOwnProperty.call(message, "quality"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.quality);
            if (message.attrMsg != null && message.attrMsg.length)
                for (var i = 0; i < message.attrMsg.length; ++i)
                    $root.playerHero.AttrMsg.encode(message.attrMsg[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.equipMsg != null && message.equipMsg.length)
                for (var i = 0; i < message.equipMsg.length; ++i)
                    $root.playerEquip.EquipMsg.encode(message.equipMsg[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.talent != null && Object.hasOwnProperty.call(message, "talent"))
                for (var keys = Object.keys(message.talent), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.talent[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroMsg message, length delimited. Does not implicitly {@link playerHero.HeroMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.HeroMsg
         * @static
         * @param {playerHero.IHeroMsg} message HeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.HeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.HeroMsg} HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.HeroMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.heroId = reader.int32();
                        break;
                    }
                case 3: {
                        message.lv = reader.int32();
                        break;
                    }
                case 4: {
                        message.star = reader.int32();
                        break;
                    }
                case 5: {
                        message.quality = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.attrMsg && message.attrMsg.length))
                            message.attrMsg = [];
                        message.attrMsg.push($root.playerHero.AttrMsg.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        if (!(message.equipMsg && message.equipMsg.length))
                            message.equipMsg = [];
                        message.equipMsg.push($root.playerEquip.EquipMsg.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        if (message.talent === $util.emptyObject)
                            message.talent = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.talent[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.HeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.HeroMsg} HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroMsg message.
         * @function verify
         * @memberof playerHero.HeroMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.star != null && message.hasOwnProperty("star"))
                if (!$util.isInteger(message.star))
                    return "star: integer expected";
            if (message.quality != null && message.hasOwnProperty("quality"))
                if (!$util.isInteger(message.quality))
                    return "quality: integer expected";
            if (message.attrMsg != null && message.hasOwnProperty("attrMsg")) {
                if (!Array.isArray(message.attrMsg))
                    return "attrMsg: array expected";
                for (var i = 0; i < message.attrMsg.length; ++i) {
                    var error = $root.playerHero.AttrMsg.verify(message.attrMsg[i]);
                    if (error)
                        return "attrMsg." + error;
                }
            }
            if (message.equipMsg != null && message.hasOwnProperty("equipMsg")) {
                if (!Array.isArray(message.equipMsg))
                    return "equipMsg: array expected";
                for (var i = 0; i < message.equipMsg.length; ++i) {
                    var error = $root.playerEquip.EquipMsg.verify(message.equipMsg[i]);
                    if (error)
                        return "equipMsg." + error;
                }
            }
            if (message.talent != null && message.hasOwnProperty("talent")) {
                if (!$util.isObject(message.talent))
                    return "talent: object expected";
                var key = Object.keys(message.talent);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "talent: integer key{k:int32} expected";
                    if (!$util.isInteger(message.talent[key[i]]))
                        return "talent: integer{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a HeroMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.HeroMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.HeroMsg} HeroMsg
         */
        HeroMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.HeroMsg)
                return object;
            var message = new $root.playerHero.HeroMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.lv != null)
                message.lv = object.lv | 0;
            if (object.star != null)
                message.star = object.star | 0;
            if (object.quality != null)
                message.quality = object.quality | 0;
            if (object.attrMsg) {
                if (!Array.isArray(object.attrMsg))
                    throw TypeError(".playerHero.HeroMsg.attrMsg: array expected");
                message.attrMsg = [];
                for (var i = 0; i < object.attrMsg.length; ++i) {
                    if (typeof object.attrMsg[i] !== "object")
                        throw TypeError(".playerHero.HeroMsg.attrMsg: object expected");
                    message.attrMsg[i] = $root.playerHero.AttrMsg.fromObject(object.attrMsg[i]);
                }
            }
            if (object.equipMsg) {
                if (!Array.isArray(object.equipMsg))
                    throw TypeError(".playerHero.HeroMsg.equipMsg: array expected");
                message.equipMsg = [];
                for (var i = 0; i < object.equipMsg.length; ++i) {
                    if (typeof object.equipMsg[i] !== "object")
                        throw TypeError(".playerHero.HeroMsg.equipMsg: object expected");
                    message.equipMsg[i] = $root.playerEquip.EquipMsg.fromObject(object.equipMsg[i]);
                }
            }
            if (object.talent) {
                if (typeof object.talent !== "object")
                    throw TypeError(".playerHero.HeroMsg.talent: object expected");
                message.talent = {};
                for (var keys = Object.keys(object.talent), i = 0; i < keys.length; ++i)
                    message.talent[keys[i]] = object.talent[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.HeroMsg
         * @static
         * @param {playerHero.HeroMsg} message HeroMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.attrMsg = [];
                object.equipMsg = [];
            }
            if (options.objects || options.defaults)
                object.talent = {};
            if (options.defaults) {
                object.id = 0;
                object.heroId = 0;
                object.lv = 0;
                object.star = 0;
                object.quality = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.star != null && message.hasOwnProperty("star"))
                object.star = message.star;
            if (message.quality != null && message.hasOwnProperty("quality"))
                object.quality = message.quality;
            if (message.attrMsg && message.attrMsg.length) {
                object.attrMsg = [];
                for (var j = 0; j < message.attrMsg.length; ++j)
                    object.attrMsg[j] = $root.playerHero.AttrMsg.toObject(message.attrMsg[j], options);
            }
            if (message.equipMsg && message.equipMsg.length) {
                object.equipMsg = [];
                for (var j = 0; j < message.equipMsg.length; ++j)
                    object.equipMsg[j] = $root.playerEquip.EquipMsg.toObject(message.equipMsg[j], options);
            }
            var keys2;
            if (message.talent && (keys2 = Object.keys(message.talent)).length) {
                object.talent = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.talent[keys2[j]] = message.talent[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this HeroMsg to JSON.
         * @function toJSON
         * @memberof playerHero.HeroMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroMsg
         * @function getTypeUrl
         * @memberof playerHero.HeroMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.HeroMsg";
        };

        return HeroMsg;
    })();

    playerHero.AttrMsg = (function() {

        /**
         * Properties of an AttrMsg.
         * @memberof playerHero
         * @interface IAttrMsg
         * @property {number|null} [type] AttrMsg type
         * @property {number|null} [totalVal] AttrMsg totalVal
         */

        /**
         * Constructs a new AttrMsg.
         * @memberof playerHero
         * @classdesc Represents an AttrMsg.
         * @implements IAttrMsg
         * @constructor
         * @param {playerHero.IAttrMsg=} [properties] Properties to set
         */
        function AttrMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrMsg type.
         * @member {number} type
         * @memberof playerHero.AttrMsg
         * @instance
         */
        AttrMsg.prototype.type = 0;

        /**
         * AttrMsg totalVal.
         * @member {number} totalVal
         * @memberof playerHero.AttrMsg
         * @instance
         */
        AttrMsg.prototype.totalVal = 0;

        /**
         * Creates a new AttrMsg instance using the specified properties.
         * @function create
         * @memberof playerHero.AttrMsg
         * @static
         * @param {playerHero.IAttrMsg=} [properties] Properties to set
         * @returns {playerHero.AttrMsg} AttrMsg instance
         */
        AttrMsg.create = function create(properties) {
            return new AttrMsg(properties);
        };

        /**
         * Encodes the specified AttrMsg message. Does not implicitly {@link playerHero.AttrMsg.verify|verify} messages.
         * @function encode
         * @memberof playerHero.AttrMsg
         * @static
         * @param {playerHero.IAttrMsg} message AttrMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.totalVal != null && Object.hasOwnProperty.call(message, "totalVal"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalVal);
            return writer;
        };

        /**
         * Encodes the specified AttrMsg message, length delimited. Does not implicitly {@link playerHero.AttrMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerHero.AttrMsg
         * @static
         * @param {playerHero.IAttrMsg} message AttrMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttrMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerHero.AttrMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerHero.AttrMsg} AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerHero.AttrMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.totalVal = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttrMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerHero.AttrMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerHero.AttrMsg} AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrMsg message.
         * @function verify
         * @memberof playerHero.AttrMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttrMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.totalVal != null && message.hasOwnProperty("totalVal"))
                if (!$util.isInteger(message.totalVal))
                    return "totalVal: integer expected";
            return null;
        };

        /**
         * Creates an AttrMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerHero.AttrMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerHero.AttrMsg} AttrMsg
         */
        AttrMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerHero.AttrMsg)
                return object;
            var message = new $root.playerHero.AttrMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.totalVal != null)
                message.totalVal = object.totalVal | 0;
            return message;
        };

        /**
         * Creates a plain object from an AttrMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerHero.AttrMsg
         * @static
         * @param {playerHero.AttrMsg} message AttrMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.totalVal = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.totalVal != null && message.hasOwnProperty("totalVal"))
                object.totalVal = message.totalVal;
            return object;
        };

        /**
         * Converts this AttrMsg to JSON.
         * @function toJSON
         * @memberof playerHero.AttrMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttrMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AttrMsg
         * @function getTypeUrl
         * @memberof playerHero.AttrMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AttrMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerHero.AttrMsg";
        };

        return AttrMsg;
    })();

    return playerHero;
})();

$root.playerEquip = (function() {

    /**
     * Namespace playerEquip.
     * @exports playerEquip
     * @namespace
     */
    var playerEquip = {};

    playerEquip.GetEquipMsg = (function() {

        /**
         * Properties of a GetEquipMsg.
         * @memberof playerEquip
         * @interface IGetEquipMsg
         */

        /**
         * Constructs a new GetEquipMsg.
         * @memberof playerEquip
         * @classdesc Represents a GetEquipMsg.
         * @implements IGetEquipMsg
         * @constructor
         * @param {playerEquip.IGetEquipMsg=} [properties] Properties to set
         */
        function GetEquipMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetEquipMsg instance using the specified properties.
         * @function create
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {playerEquip.IGetEquipMsg=} [properties] Properties to set
         * @returns {playerEquip.GetEquipMsg} GetEquipMsg instance
         */
        GetEquipMsg.create = function create(properties) {
            return new GetEquipMsg(properties);
        };

        /**
         * Encodes the specified GetEquipMsg message. Does not implicitly {@link playerEquip.GetEquipMsg.verify|verify} messages.
         * @function encode
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {playerEquip.IGetEquipMsg} message GetEquipMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEquipMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetEquipMsg message, length delimited. Does not implicitly {@link playerEquip.GetEquipMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {playerEquip.IGetEquipMsg} message GetEquipMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEquipMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetEquipMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerEquip.GetEquipMsg} GetEquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEquipMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerEquip.GetEquipMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetEquipMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerEquip.GetEquipMsg} GetEquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEquipMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetEquipMsg message.
         * @function verify
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetEquipMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetEquipMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerEquip.GetEquipMsg} GetEquipMsg
         */
        GetEquipMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerEquip.GetEquipMsg)
                return object;
            return new $root.playerEquip.GetEquipMsg();
        };

        /**
         * Creates a plain object from a GetEquipMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {playerEquip.GetEquipMsg} message GetEquipMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetEquipMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetEquipMsg to JSON.
         * @function toJSON
         * @memberof playerEquip.GetEquipMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetEquipMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetEquipMsg
         * @function getTypeUrl
         * @memberof playerEquip.GetEquipMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetEquipMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerEquip.GetEquipMsg";
        };

        return GetEquipMsg;
    })();

    playerEquip.EquipListMsg = (function() {

        /**
         * Properties of an EquipListMsg.
         * @memberof playerEquip
         * @interface IEquipListMsg
         * @property {Array.<playerEquip.IEquipMsg>|null} [equipList] EquipListMsg equipList
         */

        /**
         * Constructs a new EquipListMsg.
         * @memberof playerEquip
         * @classdesc Represents an EquipListMsg.
         * @implements IEquipListMsg
         * @constructor
         * @param {playerEquip.IEquipListMsg=} [properties] Properties to set
         */
        function EquipListMsg(properties) {
            this.equipList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipListMsg equipList.
         * @member {Array.<playerEquip.IEquipMsg>} equipList
         * @memberof playerEquip.EquipListMsg
         * @instance
         */
        EquipListMsg.prototype.equipList = $util.emptyArray;

        /**
         * Creates a new EquipListMsg instance using the specified properties.
         * @function create
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {playerEquip.IEquipListMsg=} [properties] Properties to set
         * @returns {playerEquip.EquipListMsg} EquipListMsg instance
         */
        EquipListMsg.create = function create(properties) {
            return new EquipListMsg(properties);
        };

        /**
         * Encodes the specified EquipListMsg message. Does not implicitly {@link playerEquip.EquipListMsg.verify|verify} messages.
         * @function encode
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {playerEquip.IEquipListMsg} message EquipListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.equipList != null && message.equipList.length)
                for (var i = 0; i < message.equipList.length; ++i)
                    $root.playerEquip.EquipMsg.encode(message.equipList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EquipListMsg message, length delimited. Does not implicitly {@link playerEquip.EquipListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {playerEquip.IEquipListMsg} message EquipListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EquipListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerEquip.EquipListMsg} EquipListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerEquip.EquipListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.equipList && message.equipList.length))
                            message.equipList = [];
                        message.equipList.push($root.playerEquip.EquipMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EquipListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerEquip.EquipListMsg} EquipListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EquipListMsg message.
         * @function verify
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EquipListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.equipList != null && message.hasOwnProperty("equipList")) {
                if (!Array.isArray(message.equipList))
                    return "equipList: array expected";
                for (var i = 0; i < message.equipList.length; ++i) {
                    var error = $root.playerEquip.EquipMsg.verify(message.equipList[i]);
                    if (error)
                        return "equipList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EquipListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerEquip.EquipListMsg} EquipListMsg
         */
        EquipListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerEquip.EquipListMsg)
                return object;
            var message = new $root.playerEquip.EquipListMsg();
            if (object.equipList) {
                if (!Array.isArray(object.equipList))
                    throw TypeError(".playerEquip.EquipListMsg.equipList: array expected");
                message.equipList = [];
                for (var i = 0; i < object.equipList.length; ++i) {
                    if (typeof object.equipList[i] !== "object")
                        throw TypeError(".playerEquip.EquipListMsg.equipList: object expected");
                    message.equipList[i] = $root.playerEquip.EquipMsg.fromObject(object.equipList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EquipListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {playerEquip.EquipListMsg} message EquipListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.equipList = [];
            if (message.equipList && message.equipList.length) {
                object.equipList = [];
                for (var j = 0; j < message.equipList.length; ++j)
                    object.equipList[j] = $root.playerEquip.EquipMsg.toObject(message.equipList[j], options);
            }
            return object;
        };

        /**
         * Converts this EquipListMsg to JSON.
         * @function toJSON
         * @memberof playerEquip.EquipListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EquipListMsg
         * @function getTypeUrl
         * @memberof playerEquip.EquipListMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EquipListMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerEquip.EquipListMsg";
        };

        return EquipListMsg;
    })();

    playerEquip.EquipMsg = (function() {

        /**
         * Properties of an EquipMsg.
         * @memberof playerEquip
         * @interface IEquipMsg
         * @property {number|null} [id] EquipMsg id
         * @property {number|null} [equipId] EquipMsg equipId
         * @property {number|null} [num] EquipMsg num
         * @property {number|null} [pos] EquipMsg pos
         * @property {number|null} [lv] EquipMsg lv
         * @property {Array.<playerEquip.IAttrMsg>|null} [attrMsg] EquipMsg attrMsg
         * @property {number|null} [exp] EquipMsg exp
         * @property {number|null} [currExp] EquipMsg currExp
         * @property {number|null} [heroId] EquipMsg heroId
         * @property {Array.<playerEquip.IAttrMsg>|null} [baseAttrMsg] EquipMsg baseAttrMsg
         * @property {Array.<playerEquip.IAttrMsg>|null} [exclusiveAttrMsg] EquipMsg exclusiveAttrMsg
         * @property {Array.<number>|null} [skillId] EquipMsg skillId
         */

        /**
         * Constructs a new EquipMsg.
         * @memberof playerEquip
         * @classdesc Represents an EquipMsg.
         * @implements IEquipMsg
         * @constructor
         * @param {playerEquip.IEquipMsg=} [properties] Properties to set
         */
        function EquipMsg(properties) {
            this.attrMsg = [];
            this.baseAttrMsg = [];
            this.exclusiveAttrMsg = [];
            this.skillId = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipMsg id.
         * @member {number} id
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.id = 0;

        /**
         * EquipMsg equipId.
         * @member {number} equipId
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.equipId = 0;

        /**
         * EquipMsg num.
         * @member {number} num
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.num = 0;

        /**
         * EquipMsg pos.
         * @member {number} pos
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.pos = 0;

        /**
         * EquipMsg lv.
         * @member {number} lv
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.lv = 0;

        /**
         * EquipMsg attrMsg.
         * @member {Array.<playerEquip.IAttrMsg>} attrMsg
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.attrMsg = $util.emptyArray;

        /**
         * EquipMsg exp.
         * @member {number} exp
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.exp = 0;

        /**
         * EquipMsg currExp.
         * @member {number} currExp
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.currExp = 0;

        /**
         * EquipMsg heroId.
         * @member {number} heroId
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.heroId = 0;

        /**
         * EquipMsg baseAttrMsg.
         * @member {Array.<playerEquip.IAttrMsg>} baseAttrMsg
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.baseAttrMsg = $util.emptyArray;

        /**
         * EquipMsg exclusiveAttrMsg.
         * @member {Array.<playerEquip.IAttrMsg>} exclusiveAttrMsg
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.exclusiveAttrMsg = $util.emptyArray;

        /**
         * EquipMsg skillId.
         * @member {Array.<number>} skillId
         * @memberof playerEquip.EquipMsg
         * @instance
         */
        EquipMsg.prototype.skillId = $util.emptyArray;

        /**
         * Creates a new EquipMsg instance using the specified properties.
         * @function create
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {playerEquip.IEquipMsg=} [properties] Properties to set
         * @returns {playerEquip.EquipMsg} EquipMsg instance
         */
        EquipMsg.create = function create(properties) {
            return new EquipMsg(properties);
        };

        /**
         * Encodes the specified EquipMsg message. Does not implicitly {@link playerEquip.EquipMsg.verify|verify} messages.
         * @function encode
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {playerEquip.IEquipMsg} message EquipMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.equipId != null && Object.hasOwnProperty.call(message, "equipId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.equipId);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pos);
            if (message.lv != null && Object.hasOwnProperty.call(message, "lv"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.lv);
            if (message.attrMsg != null && message.attrMsg.length)
                for (var i = 0; i < message.attrMsg.length; ++i)
                    $root.playerEquip.AttrMsg.encode(message.attrMsg[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.exp != null && Object.hasOwnProperty.call(message, "exp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.exp);
            if (message.currExp != null && Object.hasOwnProperty.call(message, "currExp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.currExp);
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.heroId);
            if (message.baseAttrMsg != null && message.baseAttrMsg.length)
                for (var i = 0; i < message.baseAttrMsg.length; ++i)
                    $root.playerEquip.AttrMsg.encode(message.baseAttrMsg[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.exclusiveAttrMsg != null && message.exclusiveAttrMsg.length)
                for (var i = 0; i < message.exclusiveAttrMsg.length; ++i)
                    $root.playerEquip.AttrMsg.encode(message.exclusiveAttrMsg[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.skillId != null && message.skillId.length) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork();
                for (var i = 0; i < message.skillId.length; ++i)
                    writer.int32(message.skillId[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified EquipMsg message, length delimited. Does not implicitly {@link playerEquip.EquipMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {playerEquip.IEquipMsg} message EquipMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EquipMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerEquip.EquipMsg} EquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerEquip.EquipMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.equipId = reader.int32();
                        break;
                    }
                case 3: {
                        message.num = reader.int32();
                        break;
                    }
                case 4: {
                        message.pos = reader.int32();
                        break;
                    }
                case 5: {
                        message.lv = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.attrMsg && message.attrMsg.length))
                            message.attrMsg = [];
                        message.attrMsg.push($root.playerEquip.AttrMsg.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.exp = reader.int32();
                        break;
                    }
                case 8: {
                        message.currExp = reader.int32();
                        break;
                    }
                case 9: {
                        message.heroId = reader.int32();
                        break;
                    }
                case 10: {
                        if (!(message.baseAttrMsg && message.baseAttrMsg.length))
                            message.baseAttrMsg = [];
                        message.baseAttrMsg.push($root.playerEquip.AttrMsg.decode(reader, reader.uint32()));
                        break;
                    }
                case 11: {
                        if (!(message.exclusiveAttrMsg && message.exclusiveAttrMsg.length))
                            message.exclusiveAttrMsg = [];
                        message.exclusiveAttrMsg.push($root.playerEquip.AttrMsg.decode(reader, reader.uint32()));
                        break;
                    }
                case 12: {
                        if (!(message.skillId && message.skillId.length))
                            message.skillId = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.skillId.push(reader.int32());
                        } else
                            message.skillId.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EquipMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerEquip.EquipMsg} EquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EquipMsg message.
         * @function verify
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EquipMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.equipId != null && message.hasOwnProperty("equipId"))
                if (!$util.isInteger(message.equipId))
                    return "equipId: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.attrMsg != null && message.hasOwnProperty("attrMsg")) {
                if (!Array.isArray(message.attrMsg))
                    return "attrMsg: array expected";
                for (var i = 0; i < message.attrMsg.length; ++i) {
                    var error = $root.playerEquip.AttrMsg.verify(message.attrMsg[i]);
                    if (error)
                        return "attrMsg." + error;
                }
            }
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp))
                    return "exp: integer expected";
            if (message.currExp != null && message.hasOwnProperty("currExp"))
                if (!$util.isInteger(message.currExp))
                    return "currExp: integer expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isInteger(message.heroId))
                    return "heroId: integer expected";
            if (message.baseAttrMsg != null && message.hasOwnProperty("baseAttrMsg")) {
                if (!Array.isArray(message.baseAttrMsg))
                    return "baseAttrMsg: array expected";
                for (var i = 0; i < message.baseAttrMsg.length; ++i) {
                    var error = $root.playerEquip.AttrMsg.verify(message.baseAttrMsg[i]);
                    if (error)
                        return "baseAttrMsg." + error;
                }
            }
            if (message.exclusiveAttrMsg != null && message.hasOwnProperty("exclusiveAttrMsg")) {
                if (!Array.isArray(message.exclusiveAttrMsg))
                    return "exclusiveAttrMsg: array expected";
                for (var i = 0; i < message.exclusiveAttrMsg.length; ++i) {
                    var error = $root.playerEquip.AttrMsg.verify(message.exclusiveAttrMsg[i]);
                    if (error)
                        return "exclusiveAttrMsg." + error;
                }
            }
            if (message.skillId != null && message.hasOwnProperty("skillId")) {
                if (!Array.isArray(message.skillId))
                    return "skillId: array expected";
                for (var i = 0; i < message.skillId.length; ++i)
                    if (!$util.isInteger(message.skillId[i]))
                        return "skillId: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an EquipMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerEquip.EquipMsg} EquipMsg
         */
        EquipMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerEquip.EquipMsg)
                return object;
            var message = new $root.playerEquip.EquipMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.equipId != null)
                message.equipId = object.equipId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            if (object.pos != null)
                message.pos = object.pos | 0;
            if (object.lv != null)
                message.lv = object.lv | 0;
            if (object.attrMsg) {
                if (!Array.isArray(object.attrMsg))
                    throw TypeError(".playerEquip.EquipMsg.attrMsg: array expected");
                message.attrMsg = [];
                for (var i = 0; i < object.attrMsg.length; ++i) {
                    if (typeof object.attrMsg[i] !== "object")
                        throw TypeError(".playerEquip.EquipMsg.attrMsg: object expected");
                    message.attrMsg[i] = $root.playerEquip.AttrMsg.fromObject(object.attrMsg[i]);
                }
            }
            if (object.exp != null)
                message.exp = object.exp | 0;
            if (object.currExp != null)
                message.currExp = object.currExp | 0;
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.baseAttrMsg) {
                if (!Array.isArray(object.baseAttrMsg))
                    throw TypeError(".playerEquip.EquipMsg.baseAttrMsg: array expected");
                message.baseAttrMsg = [];
                for (var i = 0; i < object.baseAttrMsg.length; ++i) {
                    if (typeof object.baseAttrMsg[i] !== "object")
                        throw TypeError(".playerEquip.EquipMsg.baseAttrMsg: object expected");
                    message.baseAttrMsg[i] = $root.playerEquip.AttrMsg.fromObject(object.baseAttrMsg[i]);
                }
            }
            if (object.exclusiveAttrMsg) {
                if (!Array.isArray(object.exclusiveAttrMsg))
                    throw TypeError(".playerEquip.EquipMsg.exclusiveAttrMsg: array expected");
                message.exclusiveAttrMsg = [];
                for (var i = 0; i < object.exclusiveAttrMsg.length; ++i) {
                    if (typeof object.exclusiveAttrMsg[i] !== "object")
                        throw TypeError(".playerEquip.EquipMsg.exclusiveAttrMsg: object expected");
                    message.exclusiveAttrMsg[i] = $root.playerEquip.AttrMsg.fromObject(object.exclusiveAttrMsg[i]);
                }
            }
            if (object.skillId) {
                if (!Array.isArray(object.skillId))
                    throw TypeError(".playerEquip.EquipMsg.skillId: array expected");
                message.skillId = [];
                for (var i = 0; i < object.skillId.length; ++i)
                    message.skillId[i] = object.skillId[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an EquipMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {playerEquip.EquipMsg} message EquipMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.attrMsg = [];
                object.baseAttrMsg = [];
                object.exclusiveAttrMsg = [];
                object.skillId = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.equipId = 0;
                object.num = 0;
                object.pos = 0;
                object.lv = 0;
                object.exp = 0;
                object.currExp = 0;
                object.heroId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.equipId != null && message.hasOwnProperty("equipId"))
                object.equipId = message.equipId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.attrMsg && message.attrMsg.length) {
                object.attrMsg = [];
                for (var j = 0; j < message.attrMsg.length; ++j)
                    object.attrMsg[j] = $root.playerEquip.AttrMsg.toObject(message.attrMsg[j], options);
            }
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.currExp != null && message.hasOwnProperty("currExp"))
                object.currExp = message.currExp;
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.baseAttrMsg && message.baseAttrMsg.length) {
                object.baseAttrMsg = [];
                for (var j = 0; j < message.baseAttrMsg.length; ++j)
                    object.baseAttrMsg[j] = $root.playerEquip.AttrMsg.toObject(message.baseAttrMsg[j], options);
            }
            if (message.exclusiveAttrMsg && message.exclusiveAttrMsg.length) {
                object.exclusiveAttrMsg = [];
                for (var j = 0; j < message.exclusiveAttrMsg.length; ++j)
                    object.exclusiveAttrMsg[j] = $root.playerEquip.AttrMsg.toObject(message.exclusiveAttrMsg[j], options);
            }
            if (message.skillId && message.skillId.length) {
                object.skillId = [];
                for (var j = 0; j < message.skillId.length; ++j)
                    object.skillId[j] = message.skillId[j];
            }
            return object;
        };

        /**
         * Converts this EquipMsg to JSON.
         * @function toJSON
         * @memberof playerEquip.EquipMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EquipMsg
         * @function getTypeUrl
         * @memberof playerEquip.EquipMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EquipMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerEquip.EquipMsg";
        };

        return EquipMsg;
    })();

    playerEquip.EquipAddNotifyMsg = (function() {

        /**
         * Properties of an EquipAddNotifyMsg.
         * @memberof playerEquip
         * @interface IEquipAddNotifyMsg
         * @property {Array.<playerEquip.IEquipMsg>|null} [itemList] EquipAddNotifyMsg itemList
         */

        /**
         * Constructs a new EquipAddNotifyMsg.
         * @memberof playerEquip
         * @classdesc Represents an EquipAddNotifyMsg.
         * @implements IEquipAddNotifyMsg
         * @constructor
         * @param {playerEquip.IEquipAddNotifyMsg=} [properties] Properties to set
         */
        function EquipAddNotifyMsg(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipAddNotifyMsg itemList.
         * @member {Array.<playerEquip.IEquipMsg>} itemList
         * @memberof playerEquip.EquipAddNotifyMsg
         * @instance
         */
        EquipAddNotifyMsg.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new EquipAddNotifyMsg instance using the specified properties.
         * @function create
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {playerEquip.IEquipAddNotifyMsg=} [properties] Properties to set
         * @returns {playerEquip.EquipAddNotifyMsg} EquipAddNotifyMsg instance
         */
        EquipAddNotifyMsg.create = function create(properties) {
            return new EquipAddNotifyMsg(properties);
        };

        /**
         * Encodes the specified EquipAddNotifyMsg message. Does not implicitly {@link playerEquip.EquipAddNotifyMsg.verify|verify} messages.
         * @function encode
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {playerEquip.IEquipAddNotifyMsg} message EquipAddNotifyMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipAddNotifyMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.playerEquip.EquipMsg.encode(message.itemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EquipAddNotifyMsg message, length delimited. Does not implicitly {@link playerEquip.EquipAddNotifyMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {playerEquip.IEquipAddNotifyMsg} message EquipAddNotifyMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipAddNotifyMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EquipAddNotifyMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerEquip.EquipAddNotifyMsg} EquipAddNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipAddNotifyMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerEquip.EquipAddNotifyMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.itemList && message.itemList.length))
                            message.itemList = [];
                        message.itemList.push($root.playerEquip.EquipMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EquipAddNotifyMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerEquip.EquipAddNotifyMsg} EquipAddNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipAddNotifyMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EquipAddNotifyMsg message.
         * @function verify
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EquipAddNotifyMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.playerEquip.EquipMsg.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EquipAddNotifyMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerEquip.EquipAddNotifyMsg} EquipAddNotifyMsg
         */
        EquipAddNotifyMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerEquip.EquipAddNotifyMsg)
                return object;
            var message = new $root.playerEquip.EquipAddNotifyMsg();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".playerEquip.EquipAddNotifyMsg.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".playerEquip.EquipAddNotifyMsg.itemList: object expected");
                    message.itemList[i] = $root.playerEquip.EquipMsg.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EquipAddNotifyMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {playerEquip.EquipAddNotifyMsg} message EquipAddNotifyMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipAddNotifyMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.playerEquip.EquipMsg.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this EquipAddNotifyMsg to JSON.
         * @function toJSON
         * @memberof playerEquip.EquipAddNotifyMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipAddNotifyMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EquipAddNotifyMsg
         * @function getTypeUrl
         * @memberof playerEquip.EquipAddNotifyMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EquipAddNotifyMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerEquip.EquipAddNotifyMsg";
        };

        return EquipAddNotifyMsg;
    })();

    playerEquip.EquipDelNotifyMsg = (function() {

        /**
         * Properties of an EquipDelNotifyMsg.
         * @memberof playerEquip
         * @interface IEquipDelNotifyMsg
         * @property {Object.<string,number>|null} [delEquip] EquipDelNotifyMsg delEquip
         */

        /**
         * Constructs a new EquipDelNotifyMsg.
         * @memberof playerEquip
         * @classdesc Represents an EquipDelNotifyMsg.
         * @implements IEquipDelNotifyMsg
         * @constructor
         * @param {playerEquip.IEquipDelNotifyMsg=} [properties] Properties to set
         */
        function EquipDelNotifyMsg(properties) {
            this.delEquip = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipDelNotifyMsg delEquip.
         * @member {Object.<string,number>} delEquip
         * @memberof playerEquip.EquipDelNotifyMsg
         * @instance
         */
        EquipDelNotifyMsg.prototype.delEquip = $util.emptyObject;

        /**
         * Creates a new EquipDelNotifyMsg instance using the specified properties.
         * @function create
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {playerEquip.IEquipDelNotifyMsg=} [properties] Properties to set
         * @returns {playerEquip.EquipDelNotifyMsg} EquipDelNotifyMsg instance
         */
        EquipDelNotifyMsg.create = function create(properties) {
            return new EquipDelNotifyMsg(properties);
        };

        /**
         * Encodes the specified EquipDelNotifyMsg message. Does not implicitly {@link playerEquip.EquipDelNotifyMsg.verify|verify} messages.
         * @function encode
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {playerEquip.IEquipDelNotifyMsg} message EquipDelNotifyMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipDelNotifyMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.delEquip != null && Object.hasOwnProperty.call(message, "delEquip"))
                for (var keys = Object.keys(message.delEquip), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.delEquip[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EquipDelNotifyMsg message, length delimited. Does not implicitly {@link playerEquip.EquipDelNotifyMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {playerEquip.IEquipDelNotifyMsg} message EquipDelNotifyMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipDelNotifyMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EquipDelNotifyMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerEquip.EquipDelNotifyMsg} EquipDelNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipDelNotifyMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerEquip.EquipDelNotifyMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.delEquip === $util.emptyObject)
                            message.delEquip = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.delEquip[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EquipDelNotifyMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerEquip.EquipDelNotifyMsg} EquipDelNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipDelNotifyMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EquipDelNotifyMsg message.
         * @function verify
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EquipDelNotifyMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.delEquip != null && message.hasOwnProperty("delEquip")) {
                if (!$util.isObject(message.delEquip))
                    return "delEquip: object expected";
                var key = Object.keys(message.delEquip);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "delEquip: integer key{k:int32} expected";
                    if (!$util.isInteger(message.delEquip[key[i]]))
                        return "delEquip: integer{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates an EquipDelNotifyMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerEquip.EquipDelNotifyMsg} EquipDelNotifyMsg
         */
        EquipDelNotifyMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerEquip.EquipDelNotifyMsg)
                return object;
            var message = new $root.playerEquip.EquipDelNotifyMsg();
            if (object.delEquip) {
                if (typeof object.delEquip !== "object")
                    throw TypeError(".playerEquip.EquipDelNotifyMsg.delEquip: object expected");
                message.delEquip = {};
                for (var keys = Object.keys(object.delEquip), i = 0; i < keys.length; ++i)
                    message.delEquip[keys[i]] = object.delEquip[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an EquipDelNotifyMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {playerEquip.EquipDelNotifyMsg} message EquipDelNotifyMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipDelNotifyMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.delEquip = {};
            var keys2;
            if (message.delEquip && (keys2 = Object.keys(message.delEquip)).length) {
                object.delEquip = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.delEquip[keys2[j]] = message.delEquip[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this EquipDelNotifyMsg to JSON.
         * @function toJSON
         * @memberof playerEquip.EquipDelNotifyMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipDelNotifyMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EquipDelNotifyMsg
         * @function getTypeUrl
         * @memberof playerEquip.EquipDelNotifyMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EquipDelNotifyMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerEquip.EquipDelNotifyMsg";
        };

        return EquipDelNotifyMsg;
    })();

    playerEquip.AttrMsg = (function() {

        /**
         * Properties of an AttrMsg.
         * @memberof playerEquip
         * @interface IAttrMsg
         * @property {number|null} [type] AttrMsg type
         * @property {number|null} [totalVal] AttrMsg totalVal
         */

        /**
         * Constructs a new AttrMsg.
         * @memberof playerEquip
         * @classdesc Represents an AttrMsg.
         * @implements IAttrMsg
         * @constructor
         * @param {playerEquip.IAttrMsg=} [properties] Properties to set
         */
        function AttrMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrMsg type.
         * @member {number} type
         * @memberof playerEquip.AttrMsg
         * @instance
         */
        AttrMsg.prototype.type = 0;

        /**
         * AttrMsg totalVal.
         * @member {number} totalVal
         * @memberof playerEquip.AttrMsg
         * @instance
         */
        AttrMsg.prototype.totalVal = 0;

        /**
         * Creates a new AttrMsg instance using the specified properties.
         * @function create
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {playerEquip.IAttrMsg=} [properties] Properties to set
         * @returns {playerEquip.AttrMsg} AttrMsg instance
         */
        AttrMsg.create = function create(properties) {
            return new AttrMsg(properties);
        };

        /**
         * Encodes the specified AttrMsg message. Does not implicitly {@link playerEquip.AttrMsg.verify|verify} messages.
         * @function encode
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {playerEquip.IAttrMsg} message AttrMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.totalVal != null && Object.hasOwnProperty.call(message, "totalVal"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalVal);
            return writer;
        };

        /**
         * Encodes the specified AttrMsg message, length delimited. Does not implicitly {@link playerEquip.AttrMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {playerEquip.IAttrMsg} message AttrMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttrMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerEquip.AttrMsg} AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerEquip.AttrMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.totalVal = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttrMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerEquip.AttrMsg} AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrMsg message.
         * @function verify
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttrMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.totalVal != null && message.hasOwnProperty("totalVal"))
                if (!$util.isInteger(message.totalVal))
                    return "totalVal: integer expected";
            return null;
        };

        /**
         * Creates an AttrMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerEquip.AttrMsg} AttrMsg
         */
        AttrMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerEquip.AttrMsg)
                return object;
            var message = new $root.playerEquip.AttrMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.totalVal != null)
                message.totalVal = object.totalVal | 0;
            return message;
        };

        /**
         * Creates a plain object from an AttrMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {playerEquip.AttrMsg} message AttrMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.totalVal = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.totalVal != null && message.hasOwnProperty("totalVal"))
                object.totalVal = message.totalVal;
            return object;
        };

        /**
         * Converts this AttrMsg to JSON.
         * @function toJSON
         * @memberof playerEquip.AttrMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttrMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AttrMsg
         * @function getTypeUrl
         * @memberof playerEquip.AttrMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AttrMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerEquip.AttrMsg";
        };

        return AttrMsg;
    })();

    return playerEquip;
})();

$root.MessageMsg = (function() {

    /**
     * Properties of a MessageMsg.
     * @exports IMessageMsg
     * @interface IMessageMsg
     * @property {string|null} [title] MessageMsg title
     * @property {string|null} [msg] MessageMsg msg
     */

    /**
     * Constructs a new MessageMsg.
     * @exports MessageMsg
     * @classdesc Represents a MessageMsg.
     * @implements IMessageMsg
     * @constructor
     * @param {IMessageMsg=} [properties] Properties to set
     */
    function MessageMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageMsg title.
     * @member {string} title
     * @memberof MessageMsg
     * @instance
     */
    MessageMsg.prototype.title = "";

    /**
     * MessageMsg msg.
     * @member {string} msg
     * @memberof MessageMsg
     * @instance
     */
    MessageMsg.prototype.msg = "";

    /**
     * Creates a new MessageMsg instance using the specified properties.
     * @function create
     * @memberof MessageMsg
     * @static
     * @param {IMessageMsg=} [properties] Properties to set
     * @returns {MessageMsg} MessageMsg instance
     */
    MessageMsg.create = function create(properties) {
        return new MessageMsg(properties);
    };

    /**
     * Encodes the specified MessageMsg message. Does not implicitly {@link MessageMsg.verify|verify} messages.
     * @function encode
     * @memberof MessageMsg
     * @static
     * @param {IMessageMsg} message MessageMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified MessageMsg message, length delimited. Does not implicitly {@link MessageMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageMsg
     * @static
     * @param {IMessageMsg} message MessageMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageMsg message from the specified reader or buffer.
     * @function decode
     * @memberof MessageMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageMsg} MessageMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.title = reader.string();
                    break;
                }
            case 2: {
                    message.msg = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageMsg} MessageMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageMsg message.
     * @function verify
     * @memberof MessageMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a MessageMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageMsg} MessageMsg
     */
    MessageMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageMsg)
            return object;
        var message = new $root.MessageMsg();
        if (object.title != null)
            message.title = String(object.title);
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a MessageMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageMsg
     * @static
     * @param {MessageMsg} message MessageMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.title = "";
            object.msg = "";
        }
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this MessageMsg to JSON.
     * @function toJSON
     * @memberof MessageMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MessageMsg
     * @function getTypeUrl
     * @memberof MessageMsg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MessageMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MessageMsg";
    };

    return MessageMsg;
})();

$root.player = (function() {

    /**
     * Namespace player.
     * @exports player
     * @namespace
     */
    var player = {};

    player.PlayerAttrUpdateMsg = (function() {

        /**
         * Properties of a PlayerAttrUpdateMsg.
         * @memberof player
         * @interface IPlayerAttrUpdateMsg
         * @property {Array.<player.IAttrMsg>|null} [att] PlayerAttrUpdateMsg att
         */

        /**
         * Constructs a new PlayerAttrUpdateMsg.
         * @memberof player
         * @classdesc Represents a PlayerAttrUpdateMsg.
         * @implements IPlayerAttrUpdateMsg
         * @constructor
         * @param {player.IPlayerAttrUpdateMsg=} [properties] Properties to set
         */
        function PlayerAttrUpdateMsg(properties) {
            this.att = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerAttrUpdateMsg att.
         * @member {Array.<player.IAttrMsg>} att
         * @memberof player.PlayerAttrUpdateMsg
         * @instance
         */
        PlayerAttrUpdateMsg.prototype.att = $util.emptyArray;

        /**
         * Creates a new PlayerAttrUpdateMsg instance using the specified properties.
         * @function create
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {player.IPlayerAttrUpdateMsg=} [properties] Properties to set
         * @returns {player.PlayerAttrUpdateMsg} PlayerAttrUpdateMsg instance
         */
        PlayerAttrUpdateMsg.create = function create(properties) {
            return new PlayerAttrUpdateMsg(properties);
        };

        /**
         * Encodes the specified PlayerAttrUpdateMsg message. Does not implicitly {@link player.PlayerAttrUpdateMsg.verify|verify} messages.
         * @function encode
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {player.IPlayerAttrUpdateMsg} message PlayerAttrUpdateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAttrUpdateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.att != null && message.att.length)
                for (var i = 0; i < message.att.length; ++i)
                    $root.player.AttrMsg.encode(message.att[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerAttrUpdateMsg message, length delimited. Does not implicitly {@link player.PlayerAttrUpdateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {player.IPlayerAttrUpdateMsg} message PlayerAttrUpdateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAttrUpdateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerAttrUpdateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {player.PlayerAttrUpdateMsg} PlayerAttrUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAttrUpdateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.player.PlayerAttrUpdateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.att && message.att.length))
                            message.att = [];
                        message.att.push($root.player.AttrMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerAttrUpdateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {player.PlayerAttrUpdateMsg} PlayerAttrUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAttrUpdateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerAttrUpdateMsg message.
         * @function verify
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerAttrUpdateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.att != null && message.hasOwnProperty("att")) {
                if (!Array.isArray(message.att))
                    return "att: array expected";
                for (var i = 0; i < message.att.length; ++i) {
                    var error = $root.player.AttrMsg.verify(message.att[i]);
                    if (error)
                        return "att." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerAttrUpdateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {player.PlayerAttrUpdateMsg} PlayerAttrUpdateMsg
         */
        PlayerAttrUpdateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.player.PlayerAttrUpdateMsg)
                return object;
            var message = new $root.player.PlayerAttrUpdateMsg();
            if (object.att) {
                if (!Array.isArray(object.att))
                    throw TypeError(".player.PlayerAttrUpdateMsg.att: array expected");
                message.att = [];
                for (var i = 0; i < object.att.length; ++i) {
                    if (typeof object.att[i] !== "object")
                        throw TypeError(".player.PlayerAttrUpdateMsg.att: object expected");
                    message.att[i] = $root.player.AttrMsg.fromObject(object.att[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerAttrUpdateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {player.PlayerAttrUpdateMsg} message PlayerAttrUpdateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerAttrUpdateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.att = [];
            if (message.att && message.att.length) {
                object.att = [];
                for (var j = 0; j < message.att.length; ++j)
                    object.att[j] = $root.player.AttrMsg.toObject(message.att[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerAttrUpdateMsg to JSON.
         * @function toJSON
         * @memberof player.PlayerAttrUpdateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerAttrUpdateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerAttrUpdateMsg
         * @function getTypeUrl
         * @memberof player.PlayerAttrUpdateMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerAttrUpdateMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/player.PlayerAttrUpdateMsg";
        };

        return PlayerAttrUpdateMsg;
    })();

    player.AttrMsg = (function() {

        /**
         * Properties of an AttrMsg.
         * @memberof player
         * @interface IAttrMsg
         * @property {number|null} [type] AttrMsg type
         * @property {number|null} [totalVal] AttrMsg totalVal
         */

        /**
         * Constructs a new AttrMsg.
         * @memberof player
         * @classdesc Represents an AttrMsg.
         * @implements IAttrMsg
         * @constructor
         * @param {player.IAttrMsg=} [properties] Properties to set
         */
        function AttrMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrMsg type.
         * @member {number} type
         * @memberof player.AttrMsg
         * @instance
         */
        AttrMsg.prototype.type = 0;

        /**
         * AttrMsg totalVal.
         * @member {number} totalVal
         * @memberof player.AttrMsg
         * @instance
         */
        AttrMsg.prototype.totalVal = 0;

        /**
         * Creates a new AttrMsg instance using the specified properties.
         * @function create
         * @memberof player.AttrMsg
         * @static
         * @param {player.IAttrMsg=} [properties] Properties to set
         * @returns {player.AttrMsg} AttrMsg instance
         */
        AttrMsg.create = function create(properties) {
            return new AttrMsg(properties);
        };

        /**
         * Encodes the specified AttrMsg message. Does not implicitly {@link player.AttrMsg.verify|verify} messages.
         * @function encode
         * @memberof player.AttrMsg
         * @static
         * @param {player.IAttrMsg} message AttrMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.totalVal != null && Object.hasOwnProperty.call(message, "totalVal"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalVal);
            return writer;
        };

        /**
         * Encodes the specified AttrMsg message, length delimited. Does not implicitly {@link player.AttrMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof player.AttrMsg
         * @static
         * @param {player.IAttrMsg} message AttrMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttrMsg message from the specified reader or buffer.
         * @function decode
         * @memberof player.AttrMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {player.AttrMsg} AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.player.AttrMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.totalVal = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttrMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof player.AttrMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {player.AttrMsg} AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrMsg message.
         * @function verify
         * @memberof player.AttrMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttrMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.totalVal != null && message.hasOwnProperty("totalVal"))
                if (!$util.isInteger(message.totalVal))
                    return "totalVal: integer expected";
            return null;
        };

        /**
         * Creates an AttrMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof player.AttrMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {player.AttrMsg} AttrMsg
         */
        AttrMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.player.AttrMsg)
                return object;
            var message = new $root.player.AttrMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.totalVal != null)
                message.totalVal = object.totalVal | 0;
            return message;
        };

        /**
         * Creates a plain object from an AttrMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof player.AttrMsg
         * @static
         * @param {player.AttrMsg} message AttrMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.totalVal = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.totalVal != null && message.hasOwnProperty("totalVal"))
                object.totalVal = message.totalVal;
            return object;
        };

        /**
         * Converts this AttrMsg to JSON.
         * @function toJSON
         * @memberof player.AttrMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttrMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AttrMsg
         * @function getTypeUrl
         * @memberof player.AttrMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AttrMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/player.AttrMsg";
        };

        return AttrMsg;
    })();

    return player;
})();

$root.playerItem = (function() {

    /**
     * Namespace playerItem.
     * @exports playerItem
     * @namespace
     */
    var playerItem = {};

    playerItem.GetItemMsg = (function() {

        /**
         * Properties of a GetItemMsg.
         * @memberof playerItem
         * @interface IGetItemMsg
         */

        /**
         * Constructs a new GetItemMsg.
         * @memberof playerItem
         * @classdesc Represents a GetItemMsg.
         * @implements IGetItemMsg
         * @constructor
         * @param {playerItem.IGetItemMsg=} [properties] Properties to set
         */
        function GetItemMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetItemMsg instance using the specified properties.
         * @function create
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {playerItem.IGetItemMsg=} [properties] Properties to set
         * @returns {playerItem.GetItemMsg} GetItemMsg instance
         */
        GetItemMsg.create = function create(properties) {
            return new GetItemMsg(properties);
        };

        /**
         * Encodes the specified GetItemMsg message. Does not implicitly {@link playerItem.GetItemMsg.verify|verify} messages.
         * @function encode
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {playerItem.IGetItemMsg} message GetItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetItemMsg message, length delimited. Does not implicitly {@link playerItem.GetItemMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {playerItem.IGetItemMsg} message GetItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetItemMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerItem.GetItemMsg} GetItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerItem.GetItemMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetItemMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerItem.GetItemMsg} GetItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetItemMsg message.
         * @function verify
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetItemMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetItemMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerItem.GetItemMsg} GetItemMsg
         */
        GetItemMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerItem.GetItemMsg)
                return object;
            return new $root.playerItem.GetItemMsg();
        };

        /**
         * Creates a plain object from a GetItemMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {playerItem.GetItemMsg} message GetItemMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetItemMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetItemMsg to JSON.
         * @function toJSON
         * @memberof playerItem.GetItemMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetItemMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetItemMsg
         * @function getTypeUrl
         * @memberof playerItem.GetItemMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetItemMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerItem.GetItemMsg";
        };

        return GetItemMsg;
    })();

    playerItem.ItemListMsg = (function() {

        /**
         * Properties of an ItemListMsg.
         * @memberof playerItem
         * @interface IItemListMsg
         * @property {Array.<playerItem.IItemMsg>|null} [itemList] ItemListMsg itemList
         */

        /**
         * Constructs a new ItemListMsg.
         * @memberof playerItem
         * @classdesc Represents an ItemListMsg.
         * @implements IItemListMsg
         * @constructor
         * @param {playerItem.IItemListMsg=} [properties] Properties to set
         */
        function ItemListMsg(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemListMsg itemList.
         * @member {Array.<playerItem.IItemMsg>} itemList
         * @memberof playerItem.ItemListMsg
         * @instance
         */
        ItemListMsg.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new ItemListMsg instance using the specified properties.
         * @function create
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {playerItem.IItemListMsg=} [properties] Properties to set
         * @returns {playerItem.ItemListMsg} ItemListMsg instance
         */
        ItemListMsg.create = function create(properties) {
            return new ItemListMsg(properties);
        };

        /**
         * Encodes the specified ItemListMsg message. Does not implicitly {@link playerItem.ItemListMsg.verify|verify} messages.
         * @function encode
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {playerItem.IItemListMsg} message ItemListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.playerItem.ItemMsg.encode(message.itemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemListMsg message, length delimited. Does not implicitly {@link playerItem.ItemListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {playerItem.IItemListMsg} message ItemListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerItem.ItemListMsg} ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerItem.ItemListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.itemList && message.itemList.length))
                            message.itemList = [];
                        message.itemList.push($root.playerItem.ItemMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerItem.ItemListMsg} ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemListMsg message.
         * @function verify
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.playerItem.ItemMsg.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ItemListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerItem.ItemListMsg} ItemListMsg
         */
        ItemListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerItem.ItemListMsg)
                return object;
            var message = new $root.playerItem.ItemListMsg();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".playerItem.ItemListMsg.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".playerItem.ItemListMsg.itemList: object expected");
                    message.itemList[i] = $root.playerItem.ItemMsg.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {playerItem.ItemListMsg} message ItemListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.playerItem.ItemMsg.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this ItemListMsg to JSON.
         * @function toJSON
         * @memberof playerItem.ItemListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ItemListMsg
         * @function getTypeUrl
         * @memberof playerItem.ItemListMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemListMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerItem.ItemListMsg";
        };

        return ItemListMsg;
    })();

    playerItem.ItemMsg = (function() {

        /**
         * Properties of an ItemMsg.
         * @memberof playerItem
         * @interface IItemMsg
         * @property {number|null} [id] ItemMsg id
         * @property {number|null} [itemId] ItemMsg itemId
         * @property {number|null} [itemNum] ItemMsg itemNum
         */

        /**
         * Constructs a new ItemMsg.
         * @memberof playerItem
         * @classdesc Represents an ItemMsg.
         * @implements IItemMsg
         * @constructor
         * @param {playerItem.IItemMsg=} [properties] Properties to set
         */
        function ItemMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemMsg id.
         * @member {number} id
         * @memberof playerItem.ItemMsg
         * @instance
         */
        ItemMsg.prototype.id = 0;

        /**
         * ItemMsg itemId.
         * @member {number} itemId
         * @memberof playerItem.ItemMsg
         * @instance
         */
        ItemMsg.prototype.itemId = 0;

        /**
         * ItemMsg itemNum.
         * @member {number} itemNum
         * @memberof playerItem.ItemMsg
         * @instance
         */
        ItemMsg.prototype.itemNum = 0;

        /**
         * Creates a new ItemMsg instance using the specified properties.
         * @function create
         * @memberof playerItem.ItemMsg
         * @static
         * @param {playerItem.IItemMsg=} [properties] Properties to set
         * @returns {playerItem.ItemMsg} ItemMsg instance
         */
        ItemMsg.create = function create(properties) {
            return new ItemMsg(properties);
        };

        /**
         * Encodes the specified ItemMsg message. Does not implicitly {@link playerItem.ItemMsg.verify|verify} messages.
         * @function encode
         * @memberof playerItem.ItemMsg
         * @static
         * @param {playerItem.IItemMsg} message ItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemId);
            if (message.itemNum != null && Object.hasOwnProperty.call(message, "itemNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.itemNum);
            return writer;
        };

        /**
         * Encodes the specified ItemMsg message, length delimited. Does not implicitly {@link playerItem.ItemMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerItem.ItemMsg
         * @static
         * @param {playerItem.IItemMsg} message ItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerItem.ItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerItem.ItemMsg} ItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerItem.ItemMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 3: {
                        message.itemNum = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerItem.ItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerItem.ItemMsg} ItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemMsg message.
         * @function verify
         * @memberof playerItem.ItemMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
            if (message.itemNum != null && message.hasOwnProperty("itemNum"))
                if (!$util.isInteger(message.itemNum))
                    return "itemNum: integer expected";
            return null;
        };

        /**
         * Creates an ItemMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerItem.ItemMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerItem.ItemMsg} ItemMsg
         */
        ItemMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerItem.ItemMsg)
                return object;
            var message = new $root.playerItem.ItemMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.itemNum != null)
                message.itemNum = object.itemNum | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerItem.ItemMsg
         * @static
         * @param {playerItem.ItemMsg} message ItemMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.itemId = 0;
                object.itemNum = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.itemNum != null && message.hasOwnProperty("itemNum"))
                object.itemNum = message.itemNum;
            return object;
        };

        /**
         * Converts this ItemMsg to JSON.
         * @function toJSON
         * @memberof playerItem.ItemMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ItemMsg
         * @function getTypeUrl
         * @memberof playerItem.ItemMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerItem.ItemMsg";
        };

        return ItemMsg;
    })();

    playerItem.ItemNotifyMsg = (function() {

        /**
         * Properties of an ItemNotifyMsg.
         * @memberof playerItem
         * @interface IItemNotifyMsg
         * @property {Array.<playerItem.IItemMsg>|null} [itemList] ItemNotifyMsg itemList
         */

        /**
         * Constructs a new ItemNotifyMsg.
         * @memberof playerItem
         * @classdesc Represents an ItemNotifyMsg.
         * @implements IItemNotifyMsg
         * @constructor
         * @param {playerItem.IItemNotifyMsg=} [properties] Properties to set
         */
        function ItemNotifyMsg(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemNotifyMsg itemList.
         * @member {Array.<playerItem.IItemMsg>} itemList
         * @memberof playerItem.ItemNotifyMsg
         * @instance
         */
        ItemNotifyMsg.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new ItemNotifyMsg instance using the specified properties.
         * @function create
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {playerItem.IItemNotifyMsg=} [properties] Properties to set
         * @returns {playerItem.ItemNotifyMsg} ItemNotifyMsg instance
         */
        ItemNotifyMsg.create = function create(properties) {
            return new ItemNotifyMsg(properties);
        };

        /**
         * Encodes the specified ItemNotifyMsg message. Does not implicitly {@link playerItem.ItemNotifyMsg.verify|verify} messages.
         * @function encode
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {playerItem.IItemNotifyMsg} message ItemNotifyMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemNotifyMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.playerItem.ItemMsg.encode(message.itemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemNotifyMsg message, length delimited. Does not implicitly {@link playerItem.ItemNotifyMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {playerItem.IItemNotifyMsg} message ItemNotifyMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemNotifyMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemNotifyMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerItem.ItemNotifyMsg} ItemNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemNotifyMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerItem.ItemNotifyMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.itemList && message.itemList.length))
                            message.itemList = [];
                        message.itemList.push($root.playerItem.ItemMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemNotifyMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerItem.ItemNotifyMsg} ItemNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemNotifyMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemNotifyMsg message.
         * @function verify
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemNotifyMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.playerItem.ItemMsg.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ItemNotifyMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerItem.ItemNotifyMsg} ItemNotifyMsg
         */
        ItemNotifyMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerItem.ItemNotifyMsg)
                return object;
            var message = new $root.playerItem.ItemNotifyMsg();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".playerItem.ItemNotifyMsg.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".playerItem.ItemNotifyMsg.itemList: object expected");
                    message.itemList[i] = $root.playerItem.ItemMsg.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemNotifyMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {playerItem.ItemNotifyMsg} message ItemNotifyMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemNotifyMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.playerItem.ItemMsg.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this ItemNotifyMsg to JSON.
         * @function toJSON
         * @memberof playerItem.ItemNotifyMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemNotifyMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ItemNotifyMsg
         * @function getTypeUrl
         * @memberof playerItem.ItemNotifyMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemNotifyMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerItem.ItemNotifyMsg";
        };

        return ItemNotifyMsg;
    })();

    playerItem.UserItemReqMsg = (function() {

        /**
         * Properties of a UserItemReqMsg.
         * @memberof playerItem
         * @interface IUserItemReqMsg
         * @property {number|null} [itemId] UserItemReqMsg itemId
         * @property {number|null} [itemNum] UserItemReqMsg itemNum
         * @property {Array.<number>|null} [selectIds] UserItemReqMsg selectIds
         */

        /**
         * Constructs a new UserItemReqMsg.
         * @memberof playerItem
         * @classdesc Represents a UserItemReqMsg.
         * @implements IUserItemReqMsg
         * @constructor
         * @param {playerItem.IUserItemReqMsg=} [properties] Properties to set
         */
        function UserItemReqMsg(properties) {
            this.selectIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserItemReqMsg itemId.
         * @member {number} itemId
         * @memberof playerItem.UserItemReqMsg
         * @instance
         */
        UserItemReqMsg.prototype.itemId = 0;

        /**
         * UserItemReqMsg itemNum.
         * @member {number} itemNum
         * @memberof playerItem.UserItemReqMsg
         * @instance
         */
        UserItemReqMsg.prototype.itemNum = 0;

        /**
         * UserItemReqMsg selectIds.
         * @member {Array.<number>} selectIds
         * @memberof playerItem.UserItemReqMsg
         * @instance
         */
        UserItemReqMsg.prototype.selectIds = $util.emptyArray;

        /**
         * Creates a new UserItemReqMsg instance using the specified properties.
         * @function create
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {playerItem.IUserItemReqMsg=} [properties] Properties to set
         * @returns {playerItem.UserItemReqMsg} UserItemReqMsg instance
         */
        UserItemReqMsg.create = function create(properties) {
            return new UserItemReqMsg(properties);
        };

        /**
         * Encodes the specified UserItemReqMsg message. Does not implicitly {@link playerItem.UserItemReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {playerItem.IUserItemReqMsg} message UserItemReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItemReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            if (message.itemNum != null && Object.hasOwnProperty.call(message, "itemNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemNum);
            if (message.selectIds != null && message.selectIds.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.selectIds.length; ++i)
                    writer.int32(message.selectIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified UserItemReqMsg message, length delimited. Does not implicitly {@link playerItem.UserItemReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {playerItem.IUserItemReqMsg} message UserItemReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItemReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserItemReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerItem.UserItemReqMsg} UserItemReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserItemReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerItem.UserItemReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.itemNum = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.selectIds && message.selectIds.length))
                            message.selectIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.selectIds.push(reader.int32());
                        } else
                            message.selectIds.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserItemReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerItem.UserItemReqMsg} UserItemReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserItemReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserItemReqMsg message.
         * @function verify
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserItemReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
            if (message.itemNum != null && message.hasOwnProperty("itemNum"))
                if (!$util.isInteger(message.itemNum))
                    return "itemNum: integer expected";
            if (message.selectIds != null && message.hasOwnProperty("selectIds")) {
                if (!Array.isArray(message.selectIds))
                    return "selectIds: array expected";
                for (var i = 0; i < message.selectIds.length; ++i)
                    if (!$util.isInteger(message.selectIds[i]))
                        return "selectIds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a UserItemReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerItem.UserItemReqMsg} UserItemReqMsg
         */
        UserItemReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerItem.UserItemReqMsg)
                return object;
            var message = new $root.playerItem.UserItemReqMsg();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.itemNum != null)
                message.itemNum = object.itemNum | 0;
            if (object.selectIds) {
                if (!Array.isArray(object.selectIds))
                    throw TypeError(".playerItem.UserItemReqMsg.selectIds: array expected");
                message.selectIds = [];
                for (var i = 0; i < object.selectIds.length; ++i)
                    message.selectIds[i] = object.selectIds[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserItemReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {playerItem.UserItemReqMsg} message UserItemReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserItemReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.selectIds = [];
            if (options.defaults) {
                object.itemId = 0;
                object.itemNum = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.itemNum != null && message.hasOwnProperty("itemNum"))
                object.itemNum = message.itemNum;
            if (message.selectIds && message.selectIds.length) {
                object.selectIds = [];
                for (var j = 0; j < message.selectIds.length; ++j)
                    object.selectIds[j] = message.selectIds[j];
            }
            return object;
        };

        /**
         * Converts this UserItemReqMsg to JSON.
         * @function toJSON
         * @memberof playerItem.UserItemReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserItemReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserItemReqMsg
         * @function getTypeUrl
         * @memberof playerItem.UserItemReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserItemReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerItem.UserItemReqMsg";
        };

        return UserItemReqMsg;
    })();

    playerItem.UserItemResMsg = (function() {

        /**
         * Properties of a UserItemResMsg.
         * @memberof playerItem
         * @interface IUserItemResMsg
         * @property {Array.<playerTask.IRewardInfoMsg>|null} [reward] UserItemResMsg reward
         */

        /**
         * Constructs a new UserItemResMsg.
         * @memberof playerItem
         * @classdesc Represents a UserItemResMsg.
         * @implements IUserItemResMsg
         * @constructor
         * @param {playerItem.IUserItemResMsg=} [properties] Properties to set
         */
        function UserItemResMsg(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserItemResMsg reward.
         * @member {Array.<playerTask.IRewardInfoMsg>} reward
         * @memberof playerItem.UserItemResMsg
         * @instance
         */
        UserItemResMsg.prototype.reward = $util.emptyArray;

        /**
         * Creates a new UserItemResMsg instance using the specified properties.
         * @function create
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {playerItem.IUserItemResMsg=} [properties] Properties to set
         * @returns {playerItem.UserItemResMsg} UserItemResMsg instance
         */
        UserItemResMsg.create = function create(properties) {
            return new UserItemResMsg(properties);
        };

        /**
         * Encodes the specified UserItemResMsg message. Does not implicitly {@link playerItem.UserItemResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {playerItem.IUserItemResMsg} message UserItemResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItemResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.playerTask.RewardInfoMsg.encode(message.reward[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserItemResMsg message, length delimited. Does not implicitly {@link playerItem.UserItemResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {playerItem.IUserItemResMsg} message UserItemResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserItemResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserItemResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerItem.UserItemResMsg} UserItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserItemResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerItem.UserItemResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.playerTask.RewardInfoMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserItemResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerItem.UserItemResMsg} UserItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserItemResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserItemResMsg message.
         * @function verify
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserItemResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.playerTask.RewardInfoMsg.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserItemResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerItem.UserItemResMsg} UserItemResMsg
         */
        UserItemResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerItem.UserItemResMsg)
                return object;
            var message = new $root.playerItem.UserItemResMsg();
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".playerItem.UserItemResMsg.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".playerItem.UserItemResMsg.reward: object expected");
                    message.reward[i] = $root.playerTask.RewardInfoMsg.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserItemResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {playerItem.UserItemResMsg} message UserItemResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserItemResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.playerTask.RewardInfoMsg.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this UserItemResMsg to JSON.
         * @function toJSON
         * @memberof playerItem.UserItemResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserItemResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserItemResMsg
         * @function getTypeUrl
         * @memberof playerItem.UserItemResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserItemResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerItem.UserItemResMsg";
        };

        return UserItemResMsg;
    })();

    return playerItem;
})();

$root.playerShop = (function() {

    /**
     * Namespace playerShop.
     * @exports playerShop
     * @namespace
     */
    var playerShop = {};

    playerShop.GetAllShopReqMsg = (function() {

        /**
         * Properties of a GetAllShopReqMsg.
         * @memberof playerShop
         * @interface IGetAllShopReqMsg
         */

        /**
         * Constructs a new GetAllShopReqMsg.
         * @memberof playerShop
         * @classdesc Represents a GetAllShopReqMsg.
         * @implements IGetAllShopReqMsg
         * @constructor
         * @param {playerShop.IGetAllShopReqMsg=} [properties] Properties to set
         */
        function GetAllShopReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetAllShopReqMsg instance using the specified properties.
         * @function create
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {playerShop.IGetAllShopReqMsg=} [properties] Properties to set
         * @returns {playerShop.GetAllShopReqMsg} GetAllShopReqMsg instance
         */
        GetAllShopReqMsg.create = function create(properties) {
            return new GetAllShopReqMsg(properties);
        };

        /**
         * Encodes the specified GetAllShopReqMsg message. Does not implicitly {@link playerShop.GetAllShopReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {playerShop.IGetAllShopReqMsg} message GetAllShopReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllShopReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetAllShopReqMsg message, length delimited. Does not implicitly {@link playerShop.GetAllShopReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {playerShop.IGetAllShopReqMsg} message GetAllShopReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllShopReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllShopReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerShop.GetAllShopReqMsg} GetAllShopReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllShopReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerShop.GetAllShopReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAllShopReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerShop.GetAllShopReqMsg} GetAllShopReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllShopReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllShopReqMsg message.
         * @function verify
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllShopReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetAllShopReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerShop.GetAllShopReqMsg} GetAllShopReqMsg
         */
        GetAllShopReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerShop.GetAllShopReqMsg)
                return object;
            return new $root.playerShop.GetAllShopReqMsg();
        };

        /**
         * Creates a plain object from a GetAllShopReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {playerShop.GetAllShopReqMsg} message GetAllShopReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAllShopReqMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetAllShopReqMsg to JSON.
         * @function toJSON
         * @memberof playerShop.GetAllShopReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAllShopReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAllShopReqMsg
         * @function getTypeUrl
         * @memberof playerShop.GetAllShopReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAllShopReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerShop.GetAllShopReqMsg";
        };

        return GetAllShopReqMsg;
    })();

    playerShop.GetAllShopResMsg = (function() {

        /**
         * Properties of a GetAllShopResMsg.
         * @memberof playerShop
         * @interface IGetAllShopResMsg
         * @property {Object.<string,playerShop.IShopMsg>|null} [shops] GetAllShopResMsg shops
         */

        /**
         * Constructs a new GetAllShopResMsg.
         * @memberof playerShop
         * @classdesc Represents a GetAllShopResMsg.
         * @implements IGetAllShopResMsg
         * @constructor
         * @param {playerShop.IGetAllShopResMsg=} [properties] Properties to set
         */
        function GetAllShopResMsg(properties) {
            this.shops = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAllShopResMsg shops.
         * @member {Object.<string,playerShop.IShopMsg>} shops
         * @memberof playerShop.GetAllShopResMsg
         * @instance
         */
        GetAllShopResMsg.prototype.shops = $util.emptyObject;

        /**
         * Creates a new GetAllShopResMsg instance using the specified properties.
         * @function create
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {playerShop.IGetAllShopResMsg=} [properties] Properties to set
         * @returns {playerShop.GetAllShopResMsg} GetAllShopResMsg instance
         */
        GetAllShopResMsg.create = function create(properties) {
            return new GetAllShopResMsg(properties);
        };

        /**
         * Encodes the specified GetAllShopResMsg message. Does not implicitly {@link playerShop.GetAllShopResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {playerShop.IGetAllShopResMsg} message GetAllShopResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllShopResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shops != null && Object.hasOwnProperty.call(message, "shops"))
                for (var keys = Object.keys(message.shops), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.playerShop.ShopMsg.encode(message.shops[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified GetAllShopResMsg message, length delimited. Does not implicitly {@link playerShop.GetAllShopResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {playerShop.IGetAllShopResMsg} message GetAllShopResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllShopResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllShopResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerShop.GetAllShopResMsg} GetAllShopResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllShopResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerShop.GetAllShopResMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.shops === $util.emptyObject)
                            message.shops = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.playerShop.ShopMsg.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.shops[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAllShopResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerShop.GetAllShopResMsg} GetAllShopResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllShopResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllShopResMsg message.
         * @function verify
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllShopResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shops != null && message.hasOwnProperty("shops")) {
                if (!$util.isObject(message.shops))
                    return "shops: object expected";
                var key = Object.keys(message.shops);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "shops: integer key{k:int32} expected";
                    {
                        var error = $root.playerShop.ShopMsg.verify(message.shops[key[i]]);
                        if (error)
                            return "shops." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a GetAllShopResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerShop.GetAllShopResMsg} GetAllShopResMsg
         */
        GetAllShopResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerShop.GetAllShopResMsg)
                return object;
            var message = new $root.playerShop.GetAllShopResMsg();
            if (object.shops) {
                if (typeof object.shops !== "object")
                    throw TypeError(".playerShop.GetAllShopResMsg.shops: object expected");
                message.shops = {};
                for (var keys = Object.keys(object.shops), i = 0; i < keys.length; ++i) {
                    if (typeof object.shops[keys[i]] !== "object")
                        throw TypeError(".playerShop.GetAllShopResMsg.shops: object expected");
                    message.shops[keys[i]] = $root.playerShop.ShopMsg.fromObject(object.shops[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAllShopResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {playerShop.GetAllShopResMsg} message GetAllShopResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAllShopResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.shops = {};
            var keys2;
            if (message.shops && (keys2 = Object.keys(message.shops)).length) {
                object.shops = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.shops[keys2[j]] = $root.playerShop.ShopMsg.toObject(message.shops[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this GetAllShopResMsg to JSON.
         * @function toJSON
         * @memberof playerShop.GetAllShopResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAllShopResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAllShopResMsg
         * @function getTypeUrl
         * @memberof playerShop.GetAllShopResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAllShopResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerShop.GetAllShopResMsg";
        };

        return GetAllShopResMsg;
    })();

    playerShop.ShopMsg = (function() {

        /**
         * Properties of a ShopMsg.
         * @memberof playerShop
         * @interface IShopMsg
         * @property {Object.<string,playerShop.IShopInfoMsg>|null} [shopInfos] ShopMsg shopInfos
         */

        /**
         * Constructs a new ShopMsg.
         * @memberof playerShop
         * @classdesc Represents a ShopMsg.
         * @implements IShopMsg
         * @constructor
         * @param {playerShop.IShopMsg=} [properties] Properties to set
         */
        function ShopMsg(properties) {
            this.shopInfos = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShopMsg shopInfos.
         * @member {Object.<string,playerShop.IShopInfoMsg>} shopInfos
         * @memberof playerShop.ShopMsg
         * @instance
         */
        ShopMsg.prototype.shopInfos = $util.emptyObject;

        /**
         * Creates a new ShopMsg instance using the specified properties.
         * @function create
         * @memberof playerShop.ShopMsg
         * @static
         * @param {playerShop.IShopMsg=} [properties] Properties to set
         * @returns {playerShop.ShopMsg} ShopMsg instance
         */
        ShopMsg.create = function create(properties) {
            return new ShopMsg(properties);
        };

        /**
         * Encodes the specified ShopMsg message. Does not implicitly {@link playerShop.ShopMsg.verify|verify} messages.
         * @function encode
         * @memberof playerShop.ShopMsg
         * @static
         * @param {playerShop.IShopMsg} message ShopMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shopInfos != null && Object.hasOwnProperty.call(message, "shopInfos"))
                for (var keys = Object.keys(message.shopInfos), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.playerShop.ShopInfoMsg.encode(message.shopInfos[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified ShopMsg message, length delimited. Does not implicitly {@link playerShop.ShopMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerShop.ShopMsg
         * @static
         * @param {playerShop.IShopMsg} message ShopMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShopMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerShop.ShopMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerShop.ShopMsg} ShopMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerShop.ShopMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.shopInfos === $util.emptyObject)
                            message.shopInfos = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.playerShop.ShopInfoMsg.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.shopInfos[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShopMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerShop.ShopMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerShop.ShopMsg} ShopMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShopMsg message.
         * @function verify
         * @memberof playerShop.ShopMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShopMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shopInfos != null && message.hasOwnProperty("shopInfos")) {
                if (!$util.isObject(message.shopInfos))
                    return "shopInfos: object expected";
                var key = Object.keys(message.shopInfos);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "shopInfos: integer key{k:int32} expected";
                    {
                        var error = $root.playerShop.ShopInfoMsg.verify(message.shopInfos[key[i]]);
                        if (error)
                            return "shopInfos." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a ShopMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerShop.ShopMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerShop.ShopMsg} ShopMsg
         */
        ShopMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerShop.ShopMsg)
                return object;
            var message = new $root.playerShop.ShopMsg();
            if (object.shopInfos) {
                if (typeof object.shopInfos !== "object")
                    throw TypeError(".playerShop.ShopMsg.shopInfos: object expected");
                message.shopInfos = {};
                for (var keys = Object.keys(object.shopInfos), i = 0; i < keys.length; ++i) {
                    if (typeof object.shopInfos[keys[i]] !== "object")
                        throw TypeError(".playerShop.ShopMsg.shopInfos: object expected");
                    message.shopInfos[keys[i]] = $root.playerShop.ShopInfoMsg.fromObject(object.shopInfos[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ShopMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerShop.ShopMsg
         * @static
         * @param {playerShop.ShopMsg} message ShopMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShopMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.shopInfos = {};
            var keys2;
            if (message.shopInfos && (keys2 = Object.keys(message.shopInfos)).length) {
                object.shopInfos = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.shopInfos[keys2[j]] = $root.playerShop.ShopInfoMsg.toObject(message.shopInfos[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this ShopMsg to JSON.
         * @function toJSON
         * @memberof playerShop.ShopMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShopMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ShopMsg
         * @function getTypeUrl
         * @memberof playerShop.ShopMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShopMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerShop.ShopMsg";
        };

        return ShopMsg;
    })();

    playerShop.ShopInfoMsg = (function() {

        /**
         * Properties of a ShopInfoMsg.
         * @memberof playerShop
         * @interface IShopInfoMsg
         * @property {number|null} [shopType] ShopInfoMsg shopType
         * @property {number|null} [shopSubType] ShopInfoMsg shopSubType
         * @property {number|Long|null} [continueTime] ShopInfoMsg continueTime
         * @property {Array.<playerShop.IProductsMsg>|null} [products] ShopInfoMsg products
         */

        /**
         * Constructs a new ShopInfoMsg.
         * @memberof playerShop
         * @classdesc Represents a ShopInfoMsg.
         * @implements IShopInfoMsg
         * @constructor
         * @param {playerShop.IShopInfoMsg=} [properties] Properties to set
         */
        function ShopInfoMsg(properties) {
            this.products = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShopInfoMsg shopType.
         * @member {number} shopType
         * @memberof playerShop.ShopInfoMsg
         * @instance
         */
        ShopInfoMsg.prototype.shopType = 0;

        /**
         * ShopInfoMsg shopSubType.
         * @member {number} shopSubType
         * @memberof playerShop.ShopInfoMsg
         * @instance
         */
        ShopInfoMsg.prototype.shopSubType = 0;

        /**
         * ShopInfoMsg continueTime.
         * @member {number|Long} continueTime
         * @memberof playerShop.ShopInfoMsg
         * @instance
         */
        ShopInfoMsg.prototype.continueTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ShopInfoMsg products.
         * @member {Array.<playerShop.IProductsMsg>} products
         * @memberof playerShop.ShopInfoMsg
         * @instance
         */
        ShopInfoMsg.prototype.products = $util.emptyArray;

        /**
         * Creates a new ShopInfoMsg instance using the specified properties.
         * @function create
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {playerShop.IShopInfoMsg=} [properties] Properties to set
         * @returns {playerShop.ShopInfoMsg} ShopInfoMsg instance
         */
        ShopInfoMsg.create = function create(properties) {
            return new ShopInfoMsg(properties);
        };

        /**
         * Encodes the specified ShopInfoMsg message. Does not implicitly {@link playerShop.ShopInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {playerShop.IShopInfoMsg} message ShopInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shopType != null && Object.hasOwnProperty.call(message, "shopType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shopType);
            if (message.shopSubType != null && Object.hasOwnProperty.call(message, "shopSubType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.shopSubType);
            if (message.continueTime != null && Object.hasOwnProperty.call(message, "continueTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.continueTime);
            if (message.products != null && message.products.length)
                for (var i = 0; i < message.products.length; ++i)
                    $root.playerShop.ProductsMsg.encode(message.products[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ShopInfoMsg message, length delimited. Does not implicitly {@link playerShop.ShopInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {playerShop.IShopInfoMsg} message ShopInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShopInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerShop.ShopInfoMsg} ShopInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerShop.ShopInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.shopType = reader.int32();
                        break;
                    }
                case 2: {
                        message.shopSubType = reader.int32();
                        break;
                    }
                case 3: {
                        message.continueTime = reader.int64();
                        break;
                    }
                case 4: {
                        if (!(message.products && message.products.length))
                            message.products = [];
                        message.products.push($root.playerShop.ProductsMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShopInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerShop.ShopInfoMsg} ShopInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShopInfoMsg message.
         * @function verify
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShopInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shopType != null && message.hasOwnProperty("shopType"))
                if (!$util.isInteger(message.shopType))
                    return "shopType: integer expected";
            if (message.shopSubType != null && message.hasOwnProperty("shopSubType"))
                if (!$util.isInteger(message.shopSubType))
                    return "shopSubType: integer expected";
            if (message.continueTime != null && message.hasOwnProperty("continueTime"))
                if (!$util.isInteger(message.continueTime) && !(message.continueTime && $util.isInteger(message.continueTime.low) && $util.isInteger(message.continueTime.high)))
                    return "continueTime: integer|Long expected";
            if (message.products != null && message.hasOwnProperty("products")) {
                if (!Array.isArray(message.products))
                    return "products: array expected";
                for (var i = 0; i < message.products.length; ++i) {
                    var error = $root.playerShop.ProductsMsg.verify(message.products[i]);
                    if (error)
                        return "products." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ShopInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerShop.ShopInfoMsg} ShopInfoMsg
         */
        ShopInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerShop.ShopInfoMsg)
                return object;
            var message = new $root.playerShop.ShopInfoMsg();
            if (object.shopType != null)
                message.shopType = object.shopType | 0;
            if (object.shopSubType != null)
                message.shopSubType = object.shopSubType | 0;
            if (object.continueTime != null)
                if ($util.Long)
                    (message.continueTime = $util.Long.fromValue(object.continueTime)).unsigned = false;
                else if (typeof object.continueTime === "string")
                    message.continueTime = parseInt(object.continueTime, 10);
                else if (typeof object.continueTime === "number")
                    message.continueTime = object.continueTime;
                else if (typeof object.continueTime === "object")
                    message.continueTime = new $util.LongBits(object.continueTime.low >>> 0, object.continueTime.high >>> 0).toNumber();
            if (object.products) {
                if (!Array.isArray(object.products))
                    throw TypeError(".playerShop.ShopInfoMsg.products: array expected");
                message.products = [];
                for (var i = 0; i < object.products.length; ++i) {
                    if (typeof object.products[i] !== "object")
                        throw TypeError(".playerShop.ShopInfoMsg.products: object expected");
                    message.products[i] = $root.playerShop.ProductsMsg.fromObject(object.products[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ShopInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {playerShop.ShopInfoMsg} message ShopInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShopInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.products = [];
            if (options.defaults) {
                object.shopType = 0;
                object.shopSubType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.continueTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.continueTime = options.longs === String ? "0" : 0;
            }
            if (message.shopType != null && message.hasOwnProperty("shopType"))
                object.shopType = message.shopType;
            if (message.shopSubType != null && message.hasOwnProperty("shopSubType"))
                object.shopSubType = message.shopSubType;
            if (message.continueTime != null && message.hasOwnProperty("continueTime"))
                if (typeof message.continueTime === "number")
                    object.continueTime = options.longs === String ? String(message.continueTime) : message.continueTime;
                else
                    object.continueTime = options.longs === String ? $util.Long.prototype.toString.call(message.continueTime) : options.longs === Number ? new $util.LongBits(message.continueTime.low >>> 0, message.continueTime.high >>> 0).toNumber() : message.continueTime;
            if (message.products && message.products.length) {
                object.products = [];
                for (var j = 0; j < message.products.length; ++j)
                    object.products[j] = $root.playerShop.ProductsMsg.toObject(message.products[j], options);
            }
            return object;
        };

        /**
         * Converts this ShopInfoMsg to JSON.
         * @function toJSON
         * @memberof playerShop.ShopInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShopInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ShopInfoMsg
         * @function getTypeUrl
         * @memberof playerShop.ShopInfoMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShopInfoMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerShop.ShopInfoMsg";
        };

        return ShopInfoMsg;
    })();

    playerShop.ProductsMsg = (function() {

        /**
         * Properties of a ProductsMsg.
         * @memberof playerShop
         * @interface IProductsMsg
         * @property {number|null} [id] ProductsMsg id
         * @property {number|null} [priceType] ProductsMsg priceType
         * @property {number|null} [priceObjId] ProductsMsg priceObjId
         * @property {number|null} [priceNum] ProductsMsg priceNum
         * @property {number|null} [currCount] ProductsMsg currCount
         * @property {number|null} [limitCount] ProductsMsg limitCount
         * @property {string|null} [name] ProductsMsg name
         * @property {string|null} [icon] ProductsMsg icon
         * @property {Array.<playerShop.IProductMsg>|null} [reward] ProductsMsg reward
         */

        /**
         * Constructs a new ProductsMsg.
         * @memberof playerShop
         * @classdesc Represents a ProductsMsg.
         * @implements IProductsMsg
         * @constructor
         * @param {playerShop.IProductsMsg=} [properties] Properties to set
         */
        function ProductsMsg(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductsMsg id.
         * @member {number} id
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.id = 0;

        /**
         * ProductsMsg priceType.
         * @member {number} priceType
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.priceType = 0;

        /**
         * ProductsMsg priceObjId.
         * @member {number} priceObjId
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.priceObjId = 0;

        /**
         * ProductsMsg priceNum.
         * @member {number} priceNum
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.priceNum = 0;

        /**
         * ProductsMsg currCount.
         * @member {number} currCount
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.currCount = 0;

        /**
         * ProductsMsg limitCount.
         * @member {number} limitCount
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.limitCount = 0;

        /**
         * ProductsMsg name.
         * @member {string} name
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.name = "";

        /**
         * ProductsMsg icon.
         * @member {string} icon
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.icon = "";

        /**
         * ProductsMsg reward.
         * @member {Array.<playerShop.IProductMsg>} reward
         * @memberof playerShop.ProductsMsg
         * @instance
         */
        ProductsMsg.prototype.reward = $util.emptyArray;

        /**
         * Creates a new ProductsMsg instance using the specified properties.
         * @function create
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {playerShop.IProductsMsg=} [properties] Properties to set
         * @returns {playerShop.ProductsMsg} ProductsMsg instance
         */
        ProductsMsg.create = function create(properties) {
            return new ProductsMsg(properties);
        };

        /**
         * Encodes the specified ProductsMsg message. Does not implicitly {@link playerShop.ProductsMsg.verify|verify} messages.
         * @function encode
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {playerShop.IProductsMsg} message ProductsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.priceType != null && Object.hasOwnProperty.call(message, "priceType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.priceType);
            if (message.priceObjId != null && Object.hasOwnProperty.call(message, "priceObjId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.priceObjId);
            if (message.priceNum != null && Object.hasOwnProperty.call(message, "priceNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.priceNum);
            if (message.currCount != null && Object.hasOwnProperty.call(message, "currCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.currCount);
            if (message.limitCount != null && Object.hasOwnProperty.call(message, "limitCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.limitCount);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.name);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.icon);
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.playerShop.ProductMsg.encode(message.reward[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProductsMsg message, length delimited. Does not implicitly {@link playerShop.ProductsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {playerShop.IProductsMsg} message ProductsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerShop.ProductsMsg} ProductsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerShop.ProductsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.priceType = reader.int32();
                        break;
                    }
                case 3: {
                        message.priceObjId = reader.int32();
                        break;
                    }
                case 4: {
                        message.priceNum = reader.int32();
                        break;
                    }
                case 5: {
                        message.currCount = reader.int32();
                        break;
                    }
                case 6: {
                        message.limitCount = reader.int32();
                        break;
                    }
                case 7: {
                        message.name = reader.string();
                        break;
                    }
                case 8: {
                        message.icon = reader.string();
                        break;
                    }
                case 9: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.playerShop.ProductMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProductsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerShop.ProductsMsg} ProductsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductsMsg message.
         * @function verify
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductsMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.priceType != null && message.hasOwnProperty("priceType"))
                if (!$util.isInteger(message.priceType))
                    return "priceType: integer expected";
            if (message.priceObjId != null && message.hasOwnProperty("priceObjId"))
                if (!$util.isInteger(message.priceObjId))
                    return "priceObjId: integer expected";
            if (message.priceNum != null && message.hasOwnProperty("priceNum"))
                if (!$util.isInteger(message.priceNum))
                    return "priceNum: integer expected";
            if (message.currCount != null && message.hasOwnProperty("currCount"))
                if (!$util.isInteger(message.currCount))
                    return "currCount: integer expected";
            if (message.limitCount != null && message.hasOwnProperty("limitCount"))
                if (!$util.isInteger(message.limitCount))
                    return "limitCount: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.playerShop.ProductMsg.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ProductsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerShop.ProductsMsg} ProductsMsg
         */
        ProductsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerShop.ProductsMsg)
                return object;
            var message = new $root.playerShop.ProductsMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.priceType != null)
                message.priceType = object.priceType | 0;
            if (object.priceObjId != null)
                message.priceObjId = object.priceObjId | 0;
            if (object.priceNum != null)
                message.priceNum = object.priceNum | 0;
            if (object.currCount != null)
                message.currCount = object.currCount | 0;
            if (object.limitCount != null)
                message.limitCount = object.limitCount | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".playerShop.ProductsMsg.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".playerShop.ProductsMsg.reward: object expected");
                    message.reward[i] = $root.playerShop.ProductMsg.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ProductsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {playerShop.ProductsMsg} message ProductsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (options.defaults) {
                object.id = 0;
                object.priceType = 0;
                object.priceObjId = 0;
                object.priceNum = 0;
                object.currCount = 0;
                object.limitCount = 0;
                object.name = "";
                object.icon = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.priceType != null && message.hasOwnProperty("priceType"))
                object.priceType = message.priceType;
            if (message.priceObjId != null && message.hasOwnProperty("priceObjId"))
                object.priceObjId = message.priceObjId;
            if (message.priceNum != null && message.hasOwnProperty("priceNum"))
                object.priceNum = message.priceNum;
            if (message.currCount != null && message.hasOwnProperty("currCount"))
                object.currCount = message.currCount;
            if (message.limitCount != null && message.hasOwnProperty("limitCount"))
                object.limitCount = message.limitCount;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.playerShop.ProductMsg.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this ProductsMsg to JSON.
         * @function toJSON
         * @memberof playerShop.ProductsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductsMsg
         * @function getTypeUrl
         * @memberof playerShop.ProductsMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductsMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerShop.ProductsMsg";
        };

        return ProductsMsg;
    })();

    playerShop.ProductMsg = (function() {

        /**
         * Properties of a ProductMsg.
         * @memberof playerShop
         * @interface IProductMsg
         * @property {number|null} [type] ProductMsg type
         * @property {number|null} [objId] ProductMsg objId
         * @property {number|null} [num] ProductMsg num
         */

        /**
         * Constructs a new ProductMsg.
         * @memberof playerShop
         * @classdesc Represents a ProductMsg.
         * @implements IProductMsg
         * @constructor
         * @param {playerShop.IProductMsg=} [properties] Properties to set
         */
        function ProductMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductMsg type.
         * @member {number} type
         * @memberof playerShop.ProductMsg
         * @instance
         */
        ProductMsg.prototype.type = 0;

        /**
         * ProductMsg objId.
         * @member {number} objId
         * @memberof playerShop.ProductMsg
         * @instance
         */
        ProductMsg.prototype.objId = 0;

        /**
         * ProductMsg num.
         * @member {number} num
         * @memberof playerShop.ProductMsg
         * @instance
         */
        ProductMsg.prototype.num = 0;

        /**
         * Creates a new ProductMsg instance using the specified properties.
         * @function create
         * @memberof playerShop.ProductMsg
         * @static
         * @param {playerShop.IProductMsg=} [properties] Properties to set
         * @returns {playerShop.ProductMsg} ProductMsg instance
         */
        ProductMsg.create = function create(properties) {
            return new ProductMsg(properties);
        };

        /**
         * Encodes the specified ProductMsg message. Does not implicitly {@link playerShop.ProductMsg.verify|verify} messages.
         * @function encode
         * @memberof playerShop.ProductMsg
         * @static
         * @param {playerShop.IProductMsg} message ProductMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.objId != null && Object.hasOwnProperty.call(message, "objId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.objId);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified ProductMsg message, length delimited. Does not implicitly {@link playerShop.ProductMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerShop.ProductMsg
         * @static
         * @param {playerShop.IProductMsg} message ProductMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerShop.ProductMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerShop.ProductMsg} ProductMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerShop.ProductMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.objId = reader.int32();
                        break;
                    }
                case 3: {
                        message.num = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProductMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerShop.ProductMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerShop.ProductMsg} ProductMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductMsg message.
         * @function verify
         * @memberof playerShop.ProductMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.objId != null && message.hasOwnProperty("objId"))
                if (!$util.isInteger(message.objId))
                    return "objId: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates a ProductMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerShop.ProductMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerShop.ProductMsg} ProductMsg
         */
        ProductMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerShop.ProductMsg)
                return object;
            var message = new $root.playerShop.ProductMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.objId != null)
                message.objId = object.objId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a ProductMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerShop.ProductMsg
         * @static
         * @param {playerShop.ProductMsg} message ProductMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.objId = 0;
                object.num = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.objId != null && message.hasOwnProperty("objId"))
                object.objId = message.objId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this ProductMsg to JSON.
         * @function toJSON
         * @memberof playerShop.ProductMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductMsg
         * @function getTypeUrl
         * @memberof playerShop.ProductMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerShop.ProductMsg";
        };

        return ProductMsg;
    })();

    playerShop.BuyReqMsg = (function() {

        /**
         * Properties of a BuyReqMsg.
         * @memberof playerShop
         * @interface IBuyReqMsg
         * @property {number|null} [shopType] BuyReqMsg shopType
         * @property {number|null} [shopSubType] BuyReqMsg shopSubType
         * @property {number|null} [id] BuyReqMsg id
         */

        /**
         * Constructs a new BuyReqMsg.
         * @memberof playerShop
         * @classdesc Represents a BuyReqMsg.
         * @implements IBuyReqMsg
         * @constructor
         * @param {playerShop.IBuyReqMsg=} [properties] Properties to set
         */
        function BuyReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyReqMsg shopType.
         * @member {number} shopType
         * @memberof playerShop.BuyReqMsg
         * @instance
         */
        BuyReqMsg.prototype.shopType = 0;

        /**
         * BuyReqMsg shopSubType.
         * @member {number} shopSubType
         * @memberof playerShop.BuyReqMsg
         * @instance
         */
        BuyReqMsg.prototype.shopSubType = 0;

        /**
         * BuyReqMsg id.
         * @member {number} id
         * @memberof playerShop.BuyReqMsg
         * @instance
         */
        BuyReqMsg.prototype.id = 0;

        /**
         * Creates a new BuyReqMsg instance using the specified properties.
         * @function create
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {playerShop.IBuyReqMsg=} [properties] Properties to set
         * @returns {playerShop.BuyReqMsg} BuyReqMsg instance
         */
        BuyReqMsg.create = function create(properties) {
            return new BuyReqMsg(properties);
        };

        /**
         * Encodes the specified BuyReqMsg message. Does not implicitly {@link playerShop.BuyReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {playerShop.IBuyReqMsg} message BuyReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shopType != null && Object.hasOwnProperty.call(message, "shopType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shopType);
            if (message.shopSubType != null && Object.hasOwnProperty.call(message, "shopSubType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.shopSubType);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified BuyReqMsg message, length delimited. Does not implicitly {@link playerShop.BuyReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {playerShop.IBuyReqMsg} message BuyReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerShop.BuyReqMsg} BuyReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerShop.BuyReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.shopType = reader.int32();
                        break;
                    }
                case 2: {
                        message.shopSubType = reader.int32();
                        break;
                    }
                case 3: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuyReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerShop.BuyReqMsg} BuyReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyReqMsg message.
         * @function verify
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shopType != null && message.hasOwnProperty("shopType"))
                if (!$util.isInteger(message.shopType))
                    return "shopType: integer expected";
            if (message.shopSubType != null && message.hasOwnProperty("shopSubType"))
                if (!$util.isInteger(message.shopSubType))
                    return "shopSubType: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a BuyReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerShop.BuyReqMsg} BuyReqMsg
         */
        BuyReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerShop.BuyReqMsg)
                return object;
            var message = new $root.playerShop.BuyReqMsg();
            if (object.shopType != null)
                message.shopType = object.shopType | 0;
            if (object.shopSubType != null)
                message.shopSubType = object.shopSubType | 0;
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a BuyReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {playerShop.BuyReqMsg} message BuyReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuyReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.shopType = 0;
                object.shopSubType = 0;
                object.id = 0;
            }
            if (message.shopType != null && message.hasOwnProperty("shopType"))
                object.shopType = message.shopType;
            if (message.shopSubType != null && message.hasOwnProperty("shopSubType"))
                object.shopSubType = message.shopSubType;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this BuyReqMsg to JSON.
         * @function toJSON
         * @memberof playerShop.BuyReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuyReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BuyReqMsg
         * @function getTypeUrl
         * @memberof playerShop.BuyReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BuyReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerShop.BuyReqMsg";
        };

        return BuyReqMsg;
    })();

    playerShop.BuyResMsg = (function() {

        /**
         * Properties of a BuyResMsg.
         * @memberof playerShop
         * @interface IBuyResMsg
         * @property {Array.<playerShop.IProductMsg>|null} [reward] BuyResMsg reward
         */

        /**
         * Constructs a new BuyResMsg.
         * @memberof playerShop
         * @classdesc Represents a BuyResMsg.
         * @implements IBuyResMsg
         * @constructor
         * @param {playerShop.IBuyResMsg=} [properties] Properties to set
         */
        function BuyResMsg(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyResMsg reward.
         * @member {Array.<playerShop.IProductMsg>} reward
         * @memberof playerShop.BuyResMsg
         * @instance
         */
        BuyResMsg.prototype.reward = $util.emptyArray;

        /**
         * Creates a new BuyResMsg instance using the specified properties.
         * @function create
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {playerShop.IBuyResMsg=} [properties] Properties to set
         * @returns {playerShop.BuyResMsg} BuyResMsg instance
         */
        BuyResMsg.create = function create(properties) {
            return new BuyResMsg(properties);
        };

        /**
         * Encodes the specified BuyResMsg message. Does not implicitly {@link playerShop.BuyResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {playerShop.IBuyResMsg} message BuyResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.playerShop.ProductMsg.encode(message.reward[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BuyResMsg message, length delimited. Does not implicitly {@link playerShop.BuyResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {playerShop.IBuyResMsg} message BuyResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerShop.BuyResMsg} BuyResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerShop.BuyResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.playerShop.ProductMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuyResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerShop.BuyResMsg} BuyResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyResMsg message.
         * @function verify
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.playerShop.ProductMsg.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BuyResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerShop.BuyResMsg} BuyResMsg
         */
        BuyResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerShop.BuyResMsg)
                return object;
            var message = new $root.playerShop.BuyResMsg();
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".playerShop.BuyResMsg.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".playerShop.BuyResMsg.reward: object expected");
                    message.reward[i] = $root.playerShop.ProductMsg.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BuyResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {playerShop.BuyResMsg} message BuyResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuyResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.playerShop.ProductMsg.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this BuyResMsg to JSON.
         * @function toJSON
         * @memberof playerShop.BuyResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuyResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BuyResMsg
         * @function getTypeUrl
         * @memberof playerShop.BuyResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BuyResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerShop.BuyResMsg";
        };

        return BuyResMsg;
    })();

    return playerShop;
})();

$root.playerSkill = (function() {

    /**
     * Namespace playerSkill.
     * @exports playerSkill
     * @namespace
     */
    var playerSkill = {};

    playerSkill.AllSkillReqMsg = (function() {

        /**
         * Properties of an AllSkillReqMsg.
         * @memberof playerSkill
         * @interface IAllSkillReqMsg
         */

        /**
         * Constructs a new AllSkillReqMsg.
         * @memberof playerSkill
         * @classdesc Represents an AllSkillReqMsg.
         * @implements IAllSkillReqMsg
         * @constructor
         * @param {playerSkill.IAllSkillReqMsg=} [properties] Properties to set
         */
        function AllSkillReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AllSkillReqMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {playerSkill.IAllSkillReqMsg=} [properties] Properties to set
         * @returns {playerSkill.AllSkillReqMsg} AllSkillReqMsg instance
         */
        AllSkillReqMsg.create = function create(properties) {
            return new AllSkillReqMsg(properties);
        };

        /**
         * Encodes the specified AllSkillReqMsg message. Does not implicitly {@link playerSkill.AllSkillReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {playerSkill.IAllSkillReqMsg} message AllSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllSkillReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AllSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.AllSkillReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {playerSkill.IAllSkillReqMsg} message AllSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllSkillReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllSkillReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.AllSkillReqMsg} AllSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllSkillReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.AllSkillReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AllSkillReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.AllSkillReqMsg} AllSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllSkillReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllSkillReqMsg message.
         * @function verify
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllSkillReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an AllSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.AllSkillReqMsg} AllSkillReqMsg
         */
        AllSkillReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.AllSkillReqMsg)
                return object;
            return new $root.playerSkill.AllSkillReqMsg();
        };

        /**
         * Creates a plain object from an AllSkillReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {playerSkill.AllSkillReqMsg} message AllSkillReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllSkillReqMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AllSkillReqMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.AllSkillReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllSkillReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AllSkillReqMsg
         * @function getTypeUrl
         * @memberof playerSkill.AllSkillReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AllSkillReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.AllSkillReqMsg";
        };

        return AllSkillReqMsg;
    })();

    playerSkill.AllSkillResMsg = (function() {

        /**
         * Properties of an AllSkillResMsg.
         * @memberof playerSkill
         * @interface IAllSkillResMsg
         * @property {Object.<string,number>|null} [cultivateSkill] AllSkillResMsg cultivateSkill
         * @property {Object.<string,number>|null} [unCultivateSkill] AllSkillResMsg unCultivateSkill
         */

        /**
         * Constructs a new AllSkillResMsg.
         * @memberof playerSkill
         * @classdesc Represents an AllSkillResMsg.
         * @implements IAllSkillResMsg
         * @constructor
         * @param {playerSkill.IAllSkillResMsg=} [properties] Properties to set
         */
        function AllSkillResMsg(properties) {
            this.cultivateSkill = {};
            this.unCultivateSkill = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllSkillResMsg cultivateSkill.
         * @member {Object.<string,number>} cultivateSkill
         * @memberof playerSkill.AllSkillResMsg
         * @instance
         */
        AllSkillResMsg.prototype.cultivateSkill = $util.emptyObject;

        /**
         * AllSkillResMsg unCultivateSkill.
         * @member {Object.<string,number>} unCultivateSkill
         * @memberof playerSkill.AllSkillResMsg
         * @instance
         */
        AllSkillResMsg.prototype.unCultivateSkill = $util.emptyObject;

        /**
         * Creates a new AllSkillResMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {playerSkill.IAllSkillResMsg=} [properties] Properties to set
         * @returns {playerSkill.AllSkillResMsg} AllSkillResMsg instance
         */
        AllSkillResMsg.create = function create(properties) {
            return new AllSkillResMsg(properties);
        };

        /**
         * Encodes the specified AllSkillResMsg message. Does not implicitly {@link playerSkill.AllSkillResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {playerSkill.IAllSkillResMsg} message AllSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllSkillResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cultivateSkill != null && Object.hasOwnProperty.call(message, "cultivateSkill"))
                for (var keys = Object.keys(message.cultivateSkill), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.cultivateSkill[keys[i]]).ldelim();
            if (message.unCultivateSkill != null && Object.hasOwnProperty.call(message, "unCultivateSkill"))
                for (var keys = Object.keys(message.unCultivateSkill), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.unCultivateSkill[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AllSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.AllSkillResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {playerSkill.IAllSkillResMsg} message AllSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllSkillResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllSkillResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.AllSkillResMsg} AllSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllSkillResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.AllSkillResMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (message.cultivateSkill === $util.emptyObject)
                            message.cultivateSkill = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.cultivateSkill[key] = value;
                        break;
                    }
                case 3: {
                        if (message.unCultivateSkill === $util.emptyObject)
                            message.unCultivateSkill = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.unCultivateSkill[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AllSkillResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.AllSkillResMsg} AllSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllSkillResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllSkillResMsg message.
         * @function verify
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllSkillResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cultivateSkill != null && message.hasOwnProperty("cultivateSkill")) {
                if (!$util.isObject(message.cultivateSkill))
                    return "cultivateSkill: object expected";
                var key = Object.keys(message.cultivateSkill);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "cultivateSkill: integer key{k:int32} expected";
                    if (!$util.isInteger(message.cultivateSkill[key[i]]))
                        return "cultivateSkill: integer{k:int32} expected";
                }
            }
            if (message.unCultivateSkill != null && message.hasOwnProperty("unCultivateSkill")) {
                if (!$util.isObject(message.unCultivateSkill))
                    return "unCultivateSkill: object expected";
                var key = Object.keys(message.unCultivateSkill);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "unCultivateSkill: integer key{k:int32} expected";
                    if (!$util.isInteger(message.unCultivateSkill[key[i]]))
                        return "unCultivateSkill: integer{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates an AllSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.AllSkillResMsg} AllSkillResMsg
         */
        AllSkillResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.AllSkillResMsg)
                return object;
            var message = new $root.playerSkill.AllSkillResMsg();
            if (object.cultivateSkill) {
                if (typeof object.cultivateSkill !== "object")
                    throw TypeError(".playerSkill.AllSkillResMsg.cultivateSkill: object expected");
                message.cultivateSkill = {};
                for (var keys = Object.keys(object.cultivateSkill), i = 0; i < keys.length; ++i)
                    message.cultivateSkill[keys[i]] = object.cultivateSkill[keys[i]] | 0;
            }
            if (object.unCultivateSkill) {
                if (typeof object.unCultivateSkill !== "object")
                    throw TypeError(".playerSkill.AllSkillResMsg.unCultivateSkill: object expected");
                message.unCultivateSkill = {};
                for (var keys = Object.keys(object.unCultivateSkill), i = 0; i < keys.length; ++i)
                    message.unCultivateSkill[keys[i]] = object.unCultivateSkill[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an AllSkillResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {playerSkill.AllSkillResMsg} message AllSkillResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllSkillResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.cultivateSkill = {};
                object.unCultivateSkill = {};
            }
            var keys2;
            if (message.cultivateSkill && (keys2 = Object.keys(message.cultivateSkill)).length) {
                object.cultivateSkill = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.cultivateSkill[keys2[j]] = message.cultivateSkill[keys2[j]];
            }
            if (message.unCultivateSkill && (keys2 = Object.keys(message.unCultivateSkill)).length) {
                object.unCultivateSkill = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.unCultivateSkill[keys2[j]] = message.unCultivateSkill[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this AllSkillResMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.AllSkillResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllSkillResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AllSkillResMsg
         * @function getTypeUrl
         * @memberof playerSkill.AllSkillResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AllSkillResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.AllSkillResMsg";
        };

        return AllSkillResMsg;
    })();

    playerSkill.GetSkillSetMsg = (function() {

        /**
         * Properties of a GetSkillSetMsg.
         * @memberof playerSkill
         * @interface IGetSkillSetMsg
         */

        /**
         * Constructs a new GetSkillSetMsg.
         * @memberof playerSkill
         * @classdesc Represents a GetSkillSetMsg.
         * @implements IGetSkillSetMsg
         * @constructor
         * @param {playerSkill.IGetSkillSetMsg=} [properties] Properties to set
         */
        function GetSkillSetMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetSkillSetMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {playerSkill.IGetSkillSetMsg=} [properties] Properties to set
         * @returns {playerSkill.GetSkillSetMsg} GetSkillSetMsg instance
         */
        GetSkillSetMsg.create = function create(properties) {
            return new GetSkillSetMsg(properties);
        };

        /**
         * Encodes the specified GetSkillSetMsg message. Does not implicitly {@link playerSkill.GetSkillSetMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {playerSkill.IGetSkillSetMsg} message GetSkillSetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSkillSetMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetSkillSetMsg message, length delimited. Does not implicitly {@link playerSkill.GetSkillSetMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {playerSkill.IGetSkillSetMsg} message GetSkillSetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSkillSetMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSkillSetMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.GetSkillSetMsg} GetSkillSetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSkillSetMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.GetSkillSetMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSkillSetMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.GetSkillSetMsg} GetSkillSetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSkillSetMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSkillSetMsg message.
         * @function verify
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSkillSetMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetSkillSetMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.GetSkillSetMsg} GetSkillSetMsg
         */
        GetSkillSetMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.GetSkillSetMsg)
                return object;
            return new $root.playerSkill.GetSkillSetMsg();
        };

        /**
         * Creates a plain object from a GetSkillSetMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {playerSkill.GetSkillSetMsg} message GetSkillSetMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSkillSetMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetSkillSetMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.GetSkillSetMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSkillSetMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetSkillSetMsg
         * @function getTypeUrl
         * @memberof playerSkill.GetSkillSetMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetSkillSetMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.GetSkillSetMsg";
        };

        return GetSkillSetMsg;
    })();

    playerSkill.SkillSetMsg = (function() {

        /**
         * Properties of a SkillSetMsg.
         * @memberof playerSkill
         * @interface ISkillSetMsg
         * @property {Array.<playerSkill.ISkillMsg>|null} [skillSet] SkillSetMsg skillSet
         */

        /**
         * Constructs a new SkillSetMsg.
         * @memberof playerSkill
         * @classdesc Represents a SkillSetMsg.
         * @implements ISkillSetMsg
         * @constructor
         * @param {playerSkill.ISkillSetMsg=} [properties] Properties to set
         */
        function SkillSetMsg(properties) {
            this.skillSet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkillSetMsg skillSet.
         * @member {Array.<playerSkill.ISkillMsg>} skillSet
         * @memberof playerSkill.SkillSetMsg
         * @instance
         */
        SkillSetMsg.prototype.skillSet = $util.emptyArray;

        /**
         * Creates a new SkillSetMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {playerSkill.ISkillSetMsg=} [properties] Properties to set
         * @returns {playerSkill.SkillSetMsg} SkillSetMsg instance
         */
        SkillSetMsg.create = function create(properties) {
            return new SkillSetMsg(properties);
        };

        /**
         * Encodes the specified SkillSetMsg message. Does not implicitly {@link playerSkill.SkillSetMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {playerSkill.ISkillSetMsg} message SkillSetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillSetMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.skillSet != null && message.skillSet.length)
                for (var i = 0; i < message.skillSet.length; ++i)
                    $root.playerSkill.SkillMsg.encode(message.skillSet[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SkillSetMsg message, length delimited. Does not implicitly {@link playerSkill.SkillSetMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {playerSkill.ISkillSetMsg} message SkillSetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillSetMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillSetMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.SkillSetMsg} SkillSetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillSetMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.SkillSetMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.skillSet && message.skillSet.length))
                            message.skillSet = [];
                        message.skillSet.push($root.playerSkill.SkillMsg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SkillSetMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.SkillSetMsg} SkillSetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillSetMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkillSetMsg message.
         * @function verify
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillSetMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.skillSet != null && message.hasOwnProperty("skillSet")) {
                if (!Array.isArray(message.skillSet))
                    return "skillSet: array expected";
                for (var i = 0; i < message.skillSet.length; ++i) {
                    var error = $root.playerSkill.SkillMsg.verify(message.skillSet[i]);
                    if (error)
                        return "skillSet." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SkillSetMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.SkillSetMsg} SkillSetMsg
         */
        SkillSetMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.SkillSetMsg)
                return object;
            var message = new $root.playerSkill.SkillSetMsg();
            if (object.skillSet) {
                if (!Array.isArray(object.skillSet))
                    throw TypeError(".playerSkill.SkillSetMsg.skillSet: array expected");
                message.skillSet = [];
                for (var i = 0; i < object.skillSet.length; ++i) {
                    if (typeof object.skillSet[i] !== "object")
                        throw TypeError(".playerSkill.SkillSetMsg.skillSet: object expected");
                    message.skillSet[i] = $root.playerSkill.SkillMsg.fromObject(object.skillSet[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SkillSetMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {playerSkill.SkillSetMsg} message SkillSetMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillSetMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.skillSet = [];
            if (message.skillSet && message.skillSet.length) {
                object.skillSet = [];
                for (var j = 0; j < message.skillSet.length; ++j)
                    object.skillSet[j] = $root.playerSkill.SkillMsg.toObject(message.skillSet[j], options);
            }
            return object;
        };

        /**
         * Converts this SkillSetMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.SkillSetMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillSetMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SkillSetMsg
         * @function getTypeUrl
         * @memberof playerSkill.SkillSetMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SkillSetMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.SkillSetMsg";
        };

        return SkillSetMsg;
    })();

    playerSkill.SkillMsg = (function() {

        /**
         * Properties of a SkillMsg.
         * @memberof playerSkill
         * @interface ISkillMsg
         * @property {number|null} [id] SkillMsg id
         * @property {Object.<string,number>|null} [initiativeSkill] SkillMsg initiativeSkill
         * @property {Object.<string,number>|null} [passivitySkill] SkillMsg passivitySkill
         * @property {boolean|null} ["default"] SkillMsg default
         */

        /**
         * Constructs a new SkillMsg.
         * @memberof playerSkill
         * @classdesc Represents a SkillMsg.
         * @implements ISkillMsg
         * @constructor
         * @param {playerSkill.ISkillMsg=} [properties] Properties to set
         */
        function SkillMsg(properties) {
            this.initiativeSkill = {};
            this.passivitySkill = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkillMsg id.
         * @member {number} id
         * @memberof playerSkill.SkillMsg
         * @instance
         */
        SkillMsg.prototype.id = 0;

        /**
         * SkillMsg initiativeSkill.
         * @member {Object.<string,number>} initiativeSkill
         * @memberof playerSkill.SkillMsg
         * @instance
         */
        SkillMsg.prototype.initiativeSkill = $util.emptyObject;

        /**
         * SkillMsg passivitySkill.
         * @member {Object.<string,number>} passivitySkill
         * @memberof playerSkill.SkillMsg
         * @instance
         */
        SkillMsg.prototype.passivitySkill = $util.emptyObject;

        /**
         * SkillMsg default.
         * @member {boolean} default
         * @memberof playerSkill.SkillMsg
         * @instance
         */
        SkillMsg.prototype["default"] = false;

        /**
         * Creates a new SkillMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {playerSkill.ISkillMsg=} [properties] Properties to set
         * @returns {playerSkill.SkillMsg} SkillMsg instance
         */
        SkillMsg.create = function create(properties) {
            return new SkillMsg(properties);
        };

        /**
         * Encodes the specified SkillMsg message. Does not implicitly {@link playerSkill.SkillMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {playerSkill.ISkillMsg} message SkillMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.initiativeSkill != null && Object.hasOwnProperty.call(message, "initiativeSkill"))
                for (var keys = Object.keys(message.initiativeSkill), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.initiativeSkill[keys[i]]).ldelim();
            if (message.passivitySkill != null && Object.hasOwnProperty.call(message, "passivitySkill"))
                for (var keys = Object.keys(message.passivitySkill), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.passivitySkill[keys[i]]).ldelim();
            if (message["default"] != null && Object.hasOwnProperty.call(message, "default"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message["default"]);
            return writer;
        };

        /**
         * Encodes the specified SkillMsg message, length delimited. Does not implicitly {@link playerSkill.SkillMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {playerSkill.ISkillMsg} message SkillMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.SkillMsg} SkillMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.SkillMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        if (message.initiativeSkill === $util.emptyObject)
                            message.initiativeSkill = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.initiativeSkill[key] = value;
                        break;
                    }
                case 3: {
                        if (message.passivitySkill === $util.emptyObject)
                            message.passivitySkill = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.passivitySkill[key] = value;
                        break;
                    }
                case 4: {
                        message["default"] = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SkillMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.SkillMsg} SkillMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkillMsg message.
         * @function verify
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.initiativeSkill != null && message.hasOwnProperty("initiativeSkill")) {
                if (!$util.isObject(message.initiativeSkill))
                    return "initiativeSkill: object expected";
                var key = Object.keys(message.initiativeSkill);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "initiativeSkill: integer key{k:int32} expected";
                    if (!$util.isInteger(message.initiativeSkill[key[i]]))
                        return "initiativeSkill: integer{k:int32} expected";
                }
            }
            if (message.passivitySkill != null && message.hasOwnProperty("passivitySkill")) {
                if (!$util.isObject(message.passivitySkill))
                    return "passivitySkill: object expected";
                var key = Object.keys(message.passivitySkill);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "passivitySkill: integer key{k:int32} expected";
                    if (!$util.isInteger(message.passivitySkill[key[i]]))
                        return "passivitySkill: integer{k:int32} expected";
                }
            }
            if (message["default"] != null && message.hasOwnProperty("default"))
                if (typeof message["default"] !== "boolean")
                    return "default: boolean expected";
            return null;
        };

        /**
         * Creates a SkillMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.SkillMsg} SkillMsg
         */
        SkillMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.SkillMsg)
                return object;
            var message = new $root.playerSkill.SkillMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.initiativeSkill) {
                if (typeof object.initiativeSkill !== "object")
                    throw TypeError(".playerSkill.SkillMsg.initiativeSkill: object expected");
                message.initiativeSkill = {};
                for (var keys = Object.keys(object.initiativeSkill), i = 0; i < keys.length; ++i)
                    message.initiativeSkill[keys[i]] = object.initiativeSkill[keys[i]] | 0;
            }
            if (object.passivitySkill) {
                if (typeof object.passivitySkill !== "object")
                    throw TypeError(".playerSkill.SkillMsg.passivitySkill: object expected");
                message.passivitySkill = {};
                for (var keys = Object.keys(object.passivitySkill), i = 0; i < keys.length; ++i)
                    message.passivitySkill[keys[i]] = object.passivitySkill[keys[i]] | 0;
            }
            if (object["default"] != null)
                message["default"] = Boolean(object["default"]);
            return message;
        };

        /**
         * Creates a plain object from a SkillMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {playerSkill.SkillMsg} message SkillMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.initiativeSkill = {};
                object.passivitySkill = {};
            }
            if (options.defaults) {
                object.id = 0;
                object["default"] = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            var keys2;
            if (message.initiativeSkill && (keys2 = Object.keys(message.initiativeSkill)).length) {
                object.initiativeSkill = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.initiativeSkill[keys2[j]] = message.initiativeSkill[keys2[j]];
            }
            if (message.passivitySkill && (keys2 = Object.keys(message.passivitySkill)).length) {
                object.passivitySkill = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.passivitySkill[keys2[j]] = message.passivitySkill[keys2[j]];
            }
            if (message["default"] != null && message.hasOwnProperty("default"))
                object["default"] = message["default"];
            return object;
        };

        /**
         * Converts this SkillMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.SkillMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SkillMsg
         * @function getTypeUrl
         * @memberof playerSkill.SkillMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SkillMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.SkillMsg";
        };

        return SkillMsg;
    })();

    playerSkill.AddSkillReqMsg = (function() {

        /**
         * Properties of an AddSkillReqMsg.
         * @memberof playerSkill
         * @interface IAddSkillReqMsg
         * @property {number|null} [id] AddSkillReqMsg id
         * @property {number|null} [skillId] AddSkillReqMsg skillId
         */

        /**
         * Constructs a new AddSkillReqMsg.
         * @memberof playerSkill
         * @classdesc Represents an AddSkillReqMsg.
         * @implements IAddSkillReqMsg
         * @constructor
         * @param {playerSkill.IAddSkillReqMsg=} [properties] Properties to set
         */
        function AddSkillReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddSkillReqMsg id.
         * @member {number} id
         * @memberof playerSkill.AddSkillReqMsg
         * @instance
         */
        AddSkillReqMsg.prototype.id = 0;

        /**
         * AddSkillReqMsg skillId.
         * @member {number} skillId
         * @memberof playerSkill.AddSkillReqMsg
         * @instance
         */
        AddSkillReqMsg.prototype.skillId = 0;

        /**
         * Creates a new AddSkillReqMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {playerSkill.IAddSkillReqMsg=} [properties] Properties to set
         * @returns {playerSkill.AddSkillReqMsg} AddSkillReqMsg instance
         */
        AddSkillReqMsg.create = function create(properties) {
            return new AddSkillReqMsg(properties);
        };

        /**
         * Encodes the specified AddSkillReqMsg message. Does not implicitly {@link playerSkill.AddSkillReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {playerSkill.IAddSkillReqMsg} message AddSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSkillReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skillId);
            return writer;
        };

        /**
         * Encodes the specified AddSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.AddSkillReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {playerSkill.IAddSkillReqMsg} message AddSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSkillReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddSkillReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.AddSkillReqMsg} AddSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSkillReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.AddSkillReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.skillId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddSkillReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.AddSkillReqMsg} AddSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSkillReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddSkillReqMsg message.
         * @function verify
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddSkillReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                if (!$util.isInteger(message.skillId))
                    return "skillId: integer expected";
            return null;
        };

        /**
         * Creates an AddSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.AddSkillReqMsg} AddSkillReqMsg
         */
        AddSkillReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.AddSkillReqMsg)
                return object;
            var message = new $root.playerSkill.AddSkillReqMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.skillId != null)
                message.skillId = object.skillId | 0;
            return message;
        };

        /**
         * Creates a plain object from an AddSkillReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {playerSkill.AddSkillReqMsg} message AddSkillReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddSkillReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.skillId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            return object;
        };

        /**
         * Converts this AddSkillReqMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.AddSkillReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddSkillReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddSkillReqMsg
         * @function getTypeUrl
         * @memberof playerSkill.AddSkillReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddSkillReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.AddSkillReqMsg";
        };

        return AddSkillReqMsg;
    })();

    playerSkill.AddSkillResMsg = (function() {

        /**
         * Properties of an AddSkillResMsg.
         * @memberof playerSkill
         * @interface IAddSkillResMsg
         * @property {number|null} [id] AddSkillResMsg id
         * @property {number|null} [skillId] AddSkillResMsg skillId
         */

        /**
         * Constructs a new AddSkillResMsg.
         * @memberof playerSkill
         * @classdesc Represents an AddSkillResMsg.
         * @implements IAddSkillResMsg
         * @constructor
         * @param {playerSkill.IAddSkillResMsg=} [properties] Properties to set
         */
        function AddSkillResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddSkillResMsg id.
         * @member {number} id
         * @memberof playerSkill.AddSkillResMsg
         * @instance
         */
        AddSkillResMsg.prototype.id = 0;

        /**
         * AddSkillResMsg skillId.
         * @member {number} skillId
         * @memberof playerSkill.AddSkillResMsg
         * @instance
         */
        AddSkillResMsg.prototype.skillId = 0;

        /**
         * Creates a new AddSkillResMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {playerSkill.IAddSkillResMsg=} [properties] Properties to set
         * @returns {playerSkill.AddSkillResMsg} AddSkillResMsg instance
         */
        AddSkillResMsg.create = function create(properties) {
            return new AddSkillResMsg(properties);
        };

        /**
         * Encodes the specified AddSkillResMsg message. Does not implicitly {@link playerSkill.AddSkillResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {playerSkill.IAddSkillResMsg} message AddSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSkillResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skillId);
            return writer;
        };

        /**
         * Encodes the specified AddSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.AddSkillResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {playerSkill.IAddSkillResMsg} message AddSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddSkillResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddSkillResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.AddSkillResMsg} AddSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSkillResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.AddSkillResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.skillId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddSkillResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.AddSkillResMsg} AddSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddSkillResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddSkillResMsg message.
         * @function verify
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddSkillResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                if (!$util.isInteger(message.skillId))
                    return "skillId: integer expected";
            return null;
        };

        /**
         * Creates an AddSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.AddSkillResMsg} AddSkillResMsg
         */
        AddSkillResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.AddSkillResMsg)
                return object;
            var message = new $root.playerSkill.AddSkillResMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.skillId != null)
                message.skillId = object.skillId | 0;
            return message;
        };

        /**
         * Creates a plain object from an AddSkillResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {playerSkill.AddSkillResMsg} message AddSkillResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddSkillResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.skillId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            return object;
        };

        /**
         * Converts this AddSkillResMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.AddSkillResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddSkillResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddSkillResMsg
         * @function getTypeUrl
         * @memberof playerSkill.AddSkillResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddSkillResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.AddSkillResMsg";
        };

        return AddSkillResMsg;
    })();

    playerSkill.DelSkillReqMsg = (function() {

        /**
         * Properties of a DelSkillReqMsg.
         * @memberof playerSkill
         * @interface IDelSkillReqMsg
         * @property {number|null} [id] DelSkillReqMsg id
         * @property {number|null} [skillId] DelSkillReqMsg skillId
         */

        /**
         * Constructs a new DelSkillReqMsg.
         * @memberof playerSkill
         * @classdesc Represents a DelSkillReqMsg.
         * @implements IDelSkillReqMsg
         * @constructor
         * @param {playerSkill.IDelSkillReqMsg=} [properties] Properties to set
         */
        function DelSkillReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelSkillReqMsg id.
         * @member {number} id
         * @memberof playerSkill.DelSkillReqMsg
         * @instance
         */
        DelSkillReqMsg.prototype.id = 0;

        /**
         * DelSkillReqMsg skillId.
         * @member {number} skillId
         * @memberof playerSkill.DelSkillReqMsg
         * @instance
         */
        DelSkillReqMsg.prototype.skillId = 0;

        /**
         * Creates a new DelSkillReqMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {playerSkill.IDelSkillReqMsg=} [properties] Properties to set
         * @returns {playerSkill.DelSkillReqMsg} DelSkillReqMsg instance
         */
        DelSkillReqMsg.create = function create(properties) {
            return new DelSkillReqMsg(properties);
        };

        /**
         * Encodes the specified DelSkillReqMsg message. Does not implicitly {@link playerSkill.DelSkillReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {playerSkill.IDelSkillReqMsg} message DelSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelSkillReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skillId);
            return writer;
        };

        /**
         * Encodes the specified DelSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.DelSkillReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {playerSkill.IDelSkillReqMsg} message DelSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelSkillReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelSkillReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.DelSkillReqMsg} DelSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelSkillReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.DelSkillReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.skillId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelSkillReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.DelSkillReqMsg} DelSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelSkillReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelSkillReqMsg message.
         * @function verify
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelSkillReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                if (!$util.isInteger(message.skillId))
                    return "skillId: integer expected";
            return null;
        };

        /**
         * Creates a DelSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.DelSkillReqMsg} DelSkillReqMsg
         */
        DelSkillReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.DelSkillReqMsg)
                return object;
            var message = new $root.playerSkill.DelSkillReqMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.skillId != null)
                message.skillId = object.skillId | 0;
            return message;
        };

        /**
         * Creates a plain object from a DelSkillReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {playerSkill.DelSkillReqMsg} message DelSkillReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelSkillReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.skillId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            return object;
        };

        /**
         * Converts this DelSkillReqMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.DelSkillReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelSkillReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DelSkillReqMsg
         * @function getTypeUrl
         * @memberof playerSkill.DelSkillReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DelSkillReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.DelSkillReqMsg";
        };

        return DelSkillReqMsg;
    })();

    playerSkill.DelSkillResMsg = (function() {

        /**
         * Properties of a DelSkillResMsg.
         * @memberof playerSkill
         * @interface IDelSkillResMsg
         * @property {number|null} [id] DelSkillResMsg id
         * @property {number|null} [skillId] DelSkillResMsg skillId
         */

        /**
         * Constructs a new DelSkillResMsg.
         * @memberof playerSkill
         * @classdesc Represents a DelSkillResMsg.
         * @implements IDelSkillResMsg
         * @constructor
         * @param {playerSkill.IDelSkillResMsg=} [properties] Properties to set
         */
        function DelSkillResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelSkillResMsg id.
         * @member {number} id
         * @memberof playerSkill.DelSkillResMsg
         * @instance
         */
        DelSkillResMsg.prototype.id = 0;

        /**
         * DelSkillResMsg skillId.
         * @member {number} skillId
         * @memberof playerSkill.DelSkillResMsg
         * @instance
         */
        DelSkillResMsg.prototype.skillId = 0;

        /**
         * Creates a new DelSkillResMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {playerSkill.IDelSkillResMsg=} [properties] Properties to set
         * @returns {playerSkill.DelSkillResMsg} DelSkillResMsg instance
         */
        DelSkillResMsg.create = function create(properties) {
            return new DelSkillResMsg(properties);
        };

        /**
         * Encodes the specified DelSkillResMsg message. Does not implicitly {@link playerSkill.DelSkillResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {playerSkill.IDelSkillResMsg} message DelSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelSkillResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skillId);
            return writer;
        };

        /**
         * Encodes the specified DelSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.DelSkillResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {playerSkill.IDelSkillResMsg} message DelSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelSkillResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelSkillResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.DelSkillResMsg} DelSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelSkillResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.DelSkillResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.skillId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelSkillResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.DelSkillResMsg} DelSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelSkillResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelSkillResMsg message.
         * @function verify
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelSkillResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                if (!$util.isInteger(message.skillId))
                    return "skillId: integer expected";
            return null;
        };

        /**
         * Creates a DelSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.DelSkillResMsg} DelSkillResMsg
         */
        DelSkillResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.DelSkillResMsg)
                return object;
            var message = new $root.playerSkill.DelSkillResMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.skillId != null)
                message.skillId = object.skillId | 0;
            return message;
        };

        /**
         * Creates a plain object from a DelSkillResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {playerSkill.DelSkillResMsg} message DelSkillResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelSkillResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.skillId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            return object;
        };

        /**
         * Converts this DelSkillResMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.DelSkillResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelSkillResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DelSkillResMsg
         * @function getTypeUrl
         * @memberof playerSkill.DelSkillResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DelSkillResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.DelSkillResMsg";
        };

        return DelSkillResMsg;
    })();

    playerSkill.UpSkillReqMsg = (function() {

        /**
         * Properties of an UpSkillReqMsg.
         * @memberof playerSkill
         * @interface IUpSkillReqMsg
         * @property {number|null} [skillId] UpSkillReqMsg skillId
         */

        /**
         * Constructs a new UpSkillReqMsg.
         * @memberof playerSkill
         * @classdesc Represents an UpSkillReqMsg.
         * @implements IUpSkillReqMsg
         * @constructor
         * @param {playerSkill.IUpSkillReqMsg=} [properties] Properties to set
         */
        function UpSkillReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpSkillReqMsg skillId.
         * @member {number} skillId
         * @memberof playerSkill.UpSkillReqMsg
         * @instance
         */
        UpSkillReqMsg.prototype.skillId = 0;

        /**
         * Creates a new UpSkillReqMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {playerSkill.IUpSkillReqMsg=} [properties] Properties to set
         * @returns {playerSkill.UpSkillReqMsg} UpSkillReqMsg instance
         */
        UpSkillReqMsg.create = function create(properties) {
            return new UpSkillReqMsg(properties);
        };

        /**
         * Encodes the specified UpSkillReqMsg message. Does not implicitly {@link playerSkill.UpSkillReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {playerSkill.IUpSkillReqMsg} message UpSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpSkillReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.skillId);
            return writer;
        };

        /**
         * Encodes the specified UpSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.UpSkillReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {playerSkill.IUpSkillReqMsg} message UpSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpSkillReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpSkillReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.UpSkillReqMsg} UpSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpSkillReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.UpSkillReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.skillId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpSkillReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.UpSkillReqMsg} UpSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpSkillReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpSkillReqMsg message.
         * @function verify
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpSkillReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                if (!$util.isInteger(message.skillId))
                    return "skillId: integer expected";
            return null;
        };

        /**
         * Creates an UpSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.UpSkillReqMsg} UpSkillReqMsg
         */
        UpSkillReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.UpSkillReqMsg)
                return object;
            var message = new $root.playerSkill.UpSkillReqMsg();
            if (object.skillId != null)
                message.skillId = object.skillId | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpSkillReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {playerSkill.UpSkillReqMsg} message UpSkillReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpSkillReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.skillId = 0;
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            return object;
        };

        /**
         * Converts this UpSkillReqMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.UpSkillReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpSkillReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpSkillReqMsg
         * @function getTypeUrl
         * @memberof playerSkill.UpSkillReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpSkillReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.UpSkillReqMsg";
        };

        return UpSkillReqMsg;
    })();

    playerSkill.UpSkillResMsg = (function() {

        /**
         * Properties of an UpSkillResMsg.
         * @memberof playerSkill
         * @interface IUpSkillResMsg
         * @property {number|null} [skillId] UpSkillResMsg skillId
         * @property {number|null} [skillLv] UpSkillResMsg skillLv
         */

        /**
         * Constructs a new UpSkillResMsg.
         * @memberof playerSkill
         * @classdesc Represents an UpSkillResMsg.
         * @implements IUpSkillResMsg
         * @constructor
         * @param {playerSkill.IUpSkillResMsg=} [properties] Properties to set
         */
        function UpSkillResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpSkillResMsg skillId.
         * @member {number} skillId
         * @memberof playerSkill.UpSkillResMsg
         * @instance
         */
        UpSkillResMsg.prototype.skillId = 0;

        /**
         * UpSkillResMsg skillLv.
         * @member {number} skillLv
         * @memberof playerSkill.UpSkillResMsg
         * @instance
         */
        UpSkillResMsg.prototype.skillLv = 0;

        /**
         * Creates a new UpSkillResMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {playerSkill.IUpSkillResMsg=} [properties] Properties to set
         * @returns {playerSkill.UpSkillResMsg} UpSkillResMsg instance
         */
        UpSkillResMsg.create = function create(properties) {
            return new UpSkillResMsg(properties);
        };

        /**
         * Encodes the specified UpSkillResMsg message. Does not implicitly {@link playerSkill.UpSkillResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {playerSkill.IUpSkillResMsg} message UpSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpSkillResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.skillId);
            if (message.skillLv != null && Object.hasOwnProperty.call(message, "skillLv"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skillLv);
            return writer;
        };

        /**
         * Encodes the specified UpSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.UpSkillResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {playerSkill.IUpSkillResMsg} message UpSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpSkillResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpSkillResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.UpSkillResMsg} UpSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpSkillResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.UpSkillResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.skillId = reader.int32();
                        break;
                    }
                case 2: {
                        message.skillLv = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpSkillResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.UpSkillResMsg} UpSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpSkillResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpSkillResMsg message.
         * @function verify
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpSkillResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                if (!$util.isInteger(message.skillId))
                    return "skillId: integer expected";
            if (message.skillLv != null && message.hasOwnProperty("skillLv"))
                if (!$util.isInteger(message.skillLv))
                    return "skillLv: integer expected";
            return null;
        };

        /**
         * Creates an UpSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.UpSkillResMsg} UpSkillResMsg
         */
        UpSkillResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.UpSkillResMsg)
                return object;
            var message = new $root.playerSkill.UpSkillResMsg();
            if (object.skillId != null)
                message.skillId = object.skillId | 0;
            if (object.skillLv != null)
                message.skillLv = object.skillLv | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpSkillResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {playerSkill.UpSkillResMsg} message UpSkillResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpSkillResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.skillId = 0;
                object.skillLv = 0;
            }
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            if (message.skillLv != null && message.hasOwnProperty("skillLv"))
                object.skillLv = message.skillLv;
            return object;
        };

        /**
         * Converts this UpSkillResMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.UpSkillResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpSkillResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpSkillResMsg
         * @function getTypeUrl
         * @memberof playerSkill.UpSkillResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpSkillResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.UpSkillResMsg";
        };

        return UpSkillResMsg;
    })();

    playerSkill.SetDefaultReqMsg = (function() {

        /**
         * Properties of a SetDefaultReqMsg.
         * @memberof playerSkill
         * @interface ISetDefaultReqMsg
         * @property {number|null} [id] SetDefaultReqMsg id
         */

        /**
         * Constructs a new SetDefaultReqMsg.
         * @memberof playerSkill
         * @classdesc Represents a SetDefaultReqMsg.
         * @implements ISetDefaultReqMsg
         * @constructor
         * @param {playerSkill.ISetDefaultReqMsg=} [properties] Properties to set
         */
        function SetDefaultReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetDefaultReqMsg id.
         * @member {number} id
         * @memberof playerSkill.SetDefaultReqMsg
         * @instance
         */
        SetDefaultReqMsg.prototype.id = 0;

        /**
         * Creates a new SetDefaultReqMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {playerSkill.ISetDefaultReqMsg=} [properties] Properties to set
         * @returns {playerSkill.SetDefaultReqMsg} SetDefaultReqMsg instance
         */
        SetDefaultReqMsg.create = function create(properties) {
            return new SetDefaultReqMsg(properties);
        };

        /**
         * Encodes the specified SetDefaultReqMsg message. Does not implicitly {@link playerSkill.SetDefaultReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {playerSkill.ISetDefaultReqMsg} message SetDefaultReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDefaultReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified SetDefaultReqMsg message, length delimited. Does not implicitly {@link playerSkill.SetDefaultReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {playerSkill.ISetDefaultReqMsg} message SetDefaultReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDefaultReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetDefaultReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.SetDefaultReqMsg} SetDefaultReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDefaultReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.SetDefaultReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetDefaultReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.SetDefaultReqMsg} SetDefaultReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDefaultReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetDefaultReqMsg message.
         * @function verify
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetDefaultReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a SetDefaultReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.SetDefaultReqMsg} SetDefaultReqMsg
         */
        SetDefaultReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.SetDefaultReqMsg)
                return object;
            var message = new $root.playerSkill.SetDefaultReqMsg();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a SetDefaultReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {playerSkill.SetDefaultReqMsg} message SetDefaultReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetDefaultReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this SetDefaultReqMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.SetDefaultReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetDefaultReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetDefaultReqMsg
         * @function getTypeUrl
         * @memberof playerSkill.SetDefaultReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetDefaultReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.SetDefaultReqMsg";
        };

        return SetDefaultReqMsg;
    })();

    playerSkill.SetDefaultResMsg = (function() {

        /**
         * Properties of a SetDefaultResMsg.
         * @memberof playerSkill
         * @interface ISetDefaultResMsg
         * @property {number|null} [id] SetDefaultResMsg id
         */

        /**
         * Constructs a new SetDefaultResMsg.
         * @memberof playerSkill
         * @classdesc Represents a SetDefaultResMsg.
         * @implements ISetDefaultResMsg
         * @constructor
         * @param {playerSkill.ISetDefaultResMsg=} [properties] Properties to set
         */
        function SetDefaultResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetDefaultResMsg id.
         * @member {number} id
         * @memberof playerSkill.SetDefaultResMsg
         * @instance
         */
        SetDefaultResMsg.prototype.id = 0;

        /**
         * Creates a new SetDefaultResMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {playerSkill.ISetDefaultResMsg=} [properties] Properties to set
         * @returns {playerSkill.SetDefaultResMsg} SetDefaultResMsg instance
         */
        SetDefaultResMsg.create = function create(properties) {
            return new SetDefaultResMsg(properties);
        };

        /**
         * Encodes the specified SetDefaultResMsg message. Does not implicitly {@link playerSkill.SetDefaultResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {playerSkill.ISetDefaultResMsg} message SetDefaultResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDefaultResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified SetDefaultResMsg message, length delimited. Does not implicitly {@link playerSkill.SetDefaultResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {playerSkill.ISetDefaultResMsg} message SetDefaultResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDefaultResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetDefaultResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.SetDefaultResMsg} SetDefaultResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDefaultResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.SetDefaultResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetDefaultResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.SetDefaultResMsg} SetDefaultResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDefaultResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetDefaultResMsg message.
         * @function verify
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetDefaultResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a SetDefaultResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.SetDefaultResMsg} SetDefaultResMsg
         */
        SetDefaultResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.SetDefaultResMsg)
                return object;
            var message = new $root.playerSkill.SetDefaultResMsg();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a SetDefaultResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {playerSkill.SetDefaultResMsg} message SetDefaultResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetDefaultResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this SetDefaultResMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.SetDefaultResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetDefaultResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetDefaultResMsg
         * @function getTypeUrl
         * @memberof playerSkill.SetDefaultResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetDefaultResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.SetDefaultResMsg";
        };

        return SetDefaultResMsg;
    })();

    playerSkill.CleanSkillReqMsg = (function() {

        /**
         * Properties of a CleanSkillReqMsg.
         * @memberof playerSkill
         * @interface ICleanSkillReqMsg
         * @property {number|null} [id] CleanSkillReqMsg id
         * @property {number|null} [type] CleanSkillReqMsg type
         */

        /**
         * Constructs a new CleanSkillReqMsg.
         * @memberof playerSkill
         * @classdesc Represents a CleanSkillReqMsg.
         * @implements ICleanSkillReqMsg
         * @constructor
         * @param {playerSkill.ICleanSkillReqMsg=} [properties] Properties to set
         */
        function CleanSkillReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CleanSkillReqMsg id.
         * @member {number} id
         * @memberof playerSkill.CleanSkillReqMsg
         * @instance
         */
        CleanSkillReqMsg.prototype.id = 0;

        /**
         * CleanSkillReqMsg type.
         * @member {number} type
         * @memberof playerSkill.CleanSkillReqMsg
         * @instance
         */
        CleanSkillReqMsg.prototype.type = 0;

        /**
         * Creates a new CleanSkillReqMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {playerSkill.ICleanSkillReqMsg=} [properties] Properties to set
         * @returns {playerSkill.CleanSkillReqMsg} CleanSkillReqMsg instance
         */
        CleanSkillReqMsg.create = function create(properties) {
            return new CleanSkillReqMsg(properties);
        };

        /**
         * Encodes the specified CleanSkillReqMsg message. Does not implicitly {@link playerSkill.CleanSkillReqMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {playerSkill.ICleanSkillReqMsg} message CleanSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CleanSkillReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified CleanSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.CleanSkillReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {playerSkill.ICleanSkillReqMsg} message CleanSkillReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CleanSkillReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CleanSkillReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.CleanSkillReqMsg} CleanSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CleanSkillReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.CleanSkillReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CleanSkillReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.CleanSkillReqMsg} CleanSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CleanSkillReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CleanSkillReqMsg message.
         * @function verify
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CleanSkillReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a CleanSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.CleanSkillReqMsg} CleanSkillReqMsg
         */
        CleanSkillReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.CleanSkillReqMsg)
                return object;
            var message = new $root.playerSkill.CleanSkillReqMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a CleanSkillReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {playerSkill.CleanSkillReqMsg} message CleanSkillReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CleanSkillReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.type = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this CleanSkillReqMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.CleanSkillReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CleanSkillReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CleanSkillReqMsg
         * @function getTypeUrl
         * @memberof playerSkill.CleanSkillReqMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CleanSkillReqMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.CleanSkillReqMsg";
        };

        return CleanSkillReqMsg;
    })();

    playerSkill.CleanSkillResMsg = (function() {

        /**
         * Properties of a CleanSkillResMsg.
         * @memberof playerSkill
         * @interface ICleanSkillResMsg
         * @property {playerSkill.ISkillMsg|null} [skills] CleanSkillResMsg skills
         */

        /**
         * Constructs a new CleanSkillResMsg.
         * @memberof playerSkill
         * @classdesc Represents a CleanSkillResMsg.
         * @implements ICleanSkillResMsg
         * @constructor
         * @param {playerSkill.ICleanSkillResMsg=} [properties] Properties to set
         */
        function CleanSkillResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CleanSkillResMsg skills.
         * @member {playerSkill.ISkillMsg|null|undefined} skills
         * @memberof playerSkill.CleanSkillResMsg
         * @instance
         */
        CleanSkillResMsg.prototype.skills = null;

        /**
         * Creates a new CleanSkillResMsg instance using the specified properties.
         * @function create
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {playerSkill.ICleanSkillResMsg=} [properties] Properties to set
         * @returns {playerSkill.CleanSkillResMsg} CleanSkillResMsg instance
         */
        CleanSkillResMsg.create = function create(properties) {
            return new CleanSkillResMsg(properties);
        };

        /**
         * Encodes the specified CleanSkillResMsg message. Does not implicitly {@link playerSkill.CleanSkillResMsg.verify|verify} messages.
         * @function encode
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {playerSkill.ICleanSkillResMsg} message CleanSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CleanSkillResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.skills != null && Object.hasOwnProperty.call(message, "skills"))
                $root.playerSkill.SkillMsg.encode(message.skills, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CleanSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.CleanSkillResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {playerSkill.ICleanSkillResMsg} message CleanSkillResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CleanSkillResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CleanSkillResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSkill.CleanSkillResMsg} CleanSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CleanSkillResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSkill.CleanSkillResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.skills = $root.playerSkill.SkillMsg.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CleanSkillResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSkill.CleanSkillResMsg} CleanSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CleanSkillResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CleanSkillResMsg message.
         * @function verify
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CleanSkillResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.skills != null && message.hasOwnProperty("skills")) {
                var error = $root.playerSkill.SkillMsg.verify(message.skills);
                if (error)
                    return "skills." + error;
            }
            return null;
        };

        /**
         * Creates a CleanSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSkill.CleanSkillResMsg} CleanSkillResMsg
         */
        CleanSkillResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSkill.CleanSkillResMsg)
                return object;
            var message = new $root.playerSkill.CleanSkillResMsg();
            if (object.skills != null) {
                if (typeof object.skills !== "object")
                    throw TypeError(".playerSkill.CleanSkillResMsg.skills: object expected");
                message.skills = $root.playerSkill.SkillMsg.fromObject(object.skills);
            }
            return message;
        };

        /**
         * Creates a plain object from a CleanSkillResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {playerSkill.CleanSkillResMsg} message CleanSkillResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CleanSkillResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.skills = null;
            if (message.skills != null && message.hasOwnProperty("skills"))
                object.skills = $root.playerSkill.SkillMsg.toObject(message.skills, options);
            return object;
        };

        /**
         * Converts this CleanSkillResMsg to JSON.
         * @function toJSON
         * @memberof playerSkill.CleanSkillResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CleanSkillResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CleanSkillResMsg
         * @function getTypeUrl
         * @memberof playerSkill.CleanSkillResMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CleanSkillResMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/playerSkill.CleanSkillResMsg";
        };

        return CleanSkillResMsg;
    })();

    return playerSkill;
})();

$root.ReceiveMsg = (function() {

    /**
     * Properties of a ReceiveMsg.
     * @exports IReceiveMsg
     * @interface IReceiveMsg
     * @property {number|null} [chatType] ReceiveMsg chatType
     * @property {number|null} [channelId] ReceiveMsg channelId
     * @property {string|null} [message] ReceiveMsg message
     * @property {number|null} [playerId] ReceiveMsg playerId
     * @property {string|null} [sendName] ReceiveMsg sendName
     * @property {string|null} [reveName] ReceiveMsg reveName
     * @property {string|null} [time] ReceiveMsg time
     * @property {Uint8Array|null} [voiceData] ReceiveMsg voiceData
     * @property {string|null} [img] ReceiveMsg img
     */

    /**
     * Constructs a new ReceiveMsg.
     * @exports ReceiveMsg
     * @classdesc Represents a ReceiveMsg.
     * @implements IReceiveMsg
     * @constructor
     * @param {IReceiveMsg=} [properties] Properties to set
     */
    function ReceiveMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReceiveMsg chatType.
     * @member {number} chatType
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.chatType = 0;

    /**
     * ReceiveMsg channelId.
     * @member {number} channelId
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.channelId = 0;

    /**
     * ReceiveMsg message.
     * @member {string} message
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.message = "";

    /**
     * ReceiveMsg playerId.
     * @member {number} playerId
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.playerId = 0;

    /**
     * ReceiveMsg sendName.
     * @member {string} sendName
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.sendName = "";

    /**
     * ReceiveMsg reveName.
     * @member {string} reveName
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.reveName = "";

    /**
     * ReceiveMsg time.
     * @member {string} time
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.time = "";

    /**
     * ReceiveMsg voiceData.
     * @member {Uint8Array} voiceData
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.voiceData = $util.newBuffer([]);

    /**
     * ReceiveMsg img.
     * @member {string} img
     * @memberof ReceiveMsg
     * @instance
     */
    ReceiveMsg.prototype.img = "";

    /**
     * Creates a new ReceiveMsg instance using the specified properties.
     * @function create
     * @memberof ReceiveMsg
     * @static
     * @param {IReceiveMsg=} [properties] Properties to set
     * @returns {ReceiveMsg} ReceiveMsg instance
     */
    ReceiveMsg.create = function create(properties) {
        return new ReceiveMsg(properties);
    };

    /**
     * Encodes the specified ReceiveMsg message. Does not implicitly {@link ReceiveMsg.verify|verify} messages.
     * @function encode
     * @memberof ReceiveMsg
     * @static
     * @param {IReceiveMsg} message ReceiveMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatType);
        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channelId);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playerId);
        if (message.sendName != null && Object.hasOwnProperty.call(message, "sendName"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.sendName);
        if (message.reveName != null && Object.hasOwnProperty.call(message, "reveName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.reveName);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.time);
        if (message.voiceData != null && Object.hasOwnProperty.call(message, "voiceData"))
            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.voiceData);
        if (message.img != null && Object.hasOwnProperty.call(message, "img"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.img);
        return writer;
    };

    /**
     * Encodes the specified ReceiveMsg message, length delimited. Does not implicitly {@link ReceiveMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveMsg
     * @static
     * @param {IReceiveMsg} message ReceiveMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReceiveMsg} ReceiveMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReceiveMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.chatType = reader.int32();
                    break;
                }
            case 2: {
                    message.channelId = reader.int32();
                    break;
                }
            case 3: {
                    message.message = reader.string();
                    break;
                }
            case 4: {
                    message.playerId = reader.int32();
                    break;
                }
            case 5: {
                    message.sendName = reader.string();
                    break;
                }
            case 6: {
                    message.reveName = reader.string();
                    break;
                }
            case 7: {
                    message.time = reader.string();
                    break;
                }
            case 8: {
                    message.voiceData = reader.bytes();
                    break;
                }
            case 9: {
                    message.img = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReceiveMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveMsg} ReceiveMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveMsg message.
     * @function verify
     * @memberof ReceiveMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chatType != null && message.hasOwnProperty("chatType"))
            if (!$util.isInteger(message.chatType))
                return "chatType: integer expected";
        if (message.channelId != null && message.hasOwnProperty("channelId"))
            if (!$util.isInteger(message.channelId))
                return "channelId: integer expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
        if (message.sendName != null && message.hasOwnProperty("sendName"))
            if (!$util.isString(message.sendName))
                return "sendName: string expected";
        if (message.reveName != null && message.hasOwnProperty("reveName"))
            if (!$util.isString(message.reveName))
                return "reveName: string expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isString(message.time))
                return "time: string expected";
        if (message.voiceData != null && message.hasOwnProperty("voiceData"))
            if (!(message.voiceData && typeof message.voiceData.length === "number" || $util.isString(message.voiceData)))
                return "voiceData: buffer expected";
        if (message.img != null && message.hasOwnProperty("img"))
            if (!$util.isString(message.img))
                return "img: string expected";
        return null;
    };

    /**
     * Creates a ReceiveMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReceiveMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReceiveMsg} ReceiveMsg
     */
    ReceiveMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ReceiveMsg)
            return object;
        var message = new $root.ReceiveMsg();
        if (object.chatType != null)
            message.chatType = object.chatType | 0;
        if (object.channelId != null)
            message.channelId = object.channelId | 0;
        if (object.message != null)
            message.message = String(object.message);
        if (object.playerId != null)
            message.playerId = object.playerId | 0;
        if (object.sendName != null)
            message.sendName = String(object.sendName);
        if (object.reveName != null)
            message.reveName = String(object.reveName);
        if (object.time != null)
            message.time = String(object.time);
        if (object.voiceData != null)
            if (typeof object.voiceData === "string")
                $util.base64.decode(object.voiceData, message.voiceData = $util.newBuffer($util.base64.length(object.voiceData)), 0);
            else if (object.voiceData.length >= 0)
                message.voiceData = object.voiceData;
        if (object.img != null)
            message.img = String(object.img);
        return message;
    };

    /**
     * Creates a plain object from a ReceiveMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReceiveMsg
     * @static
     * @param {ReceiveMsg} message ReceiveMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReceiveMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chatType = 0;
            object.channelId = 0;
            object.message = "";
            object.playerId = 0;
            object.sendName = "";
            object.reveName = "";
            object.time = "";
            if (options.bytes === String)
                object.voiceData = "";
            else {
                object.voiceData = [];
                if (options.bytes !== Array)
                    object.voiceData = $util.newBuffer(object.voiceData);
            }
            object.img = "";
        }
        if (message.chatType != null && message.hasOwnProperty("chatType"))
            object.chatType = message.chatType;
        if (message.channelId != null && message.hasOwnProperty("channelId"))
            object.channelId = message.channelId;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.sendName != null && message.hasOwnProperty("sendName"))
            object.sendName = message.sendName;
        if (message.reveName != null && message.hasOwnProperty("reveName"))
            object.reveName = message.reveName;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        if (message.voiceData != null && message.hasOwnProperty("voiceData"))
            object.voiceData = options.bytes === String ? $util.base64.encode(message.voiceData, 0, message.voiceData.length) : options.bytes === Array ? Array.prototype.slice.call(message.voiceData) : message.voiceData;
        if (message.img != null && message.hasOwnProperty("img"))
            object.img = message.img;
        return object;
    };

    /**
     * Converts this ReceiveMsg to JSON.
     * @function toJSON
     * @memberof ReceiveMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReceiveMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ReceiveMsg
     * @function getTypeUrl
     * @memberof ReceiveMsg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReceiveMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReceiveMsg";
    };

    return ReceiveMsg;
})();

$root.RoleLoginMsg = (function() {

    /**
     * Properties of a RoleLoginMsg.
     * @exports IRoleLoginMsg
     * @interface IRoleLoginMsg
     * @property {string|null} [nickname] RoleLoginMsg nickname
     * @property {string|null} [clientModel] RoleLoginMsg clientModel
     * @property {string|null} [systemName] RoleLoginMsg systemName
     * @property {string|null} [systemVersion] RoleLoginMsg systemVersion
     */

    /**
     * Constructs a new RoleLoginMsg.
     * @exports RoleLoginMsg
     * @classdesc Represents a RoleLoginMsg.
     * @implements IRoleLoginMsg
     * @constructor
     * @param {IRoleLoginMsg=} [properties] Properties to set
     */
    function RoleLoginMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoleLoginMsg nickname.
     * @member {string} nickname
     * @memberof RoleLoginMsg
     * @instance
     */
    RoleLoginMsg.prototype.nickname = "";

    /**
     * RoleLoginMsg clientModel.
     * @member {string} clientModel
     * @memberof RoleLoginMsg
     * @instance
     */
    RoleLoginMsg.prototype.clientModel = "";

    /**
     * RoleLoginMsg systemName.
     * @member {string} systemName
     * @memberof RoleLoginMsg
     * @instance
     */
    RoleLoginMsg.prototype.systemName = "";

    /**
     * RoleLoginMsg systemVersion.
     * @member {string} systemVersion
     * @memberof RoleLoginMsg
     * @instance
     */
    RoleLoginMsg.prototype.systemVersion = "";

    /**
     * Creates a new RoleLoginMsg instance using the specified properties.
     * @function create
     * @memberof RoleLoginMsg
     * @static
     * @param {IRoleLoginMsg=} [properties] Properties to set
     * @returns {RoleLoginMsg} RoleLoginMsg instance
     */
    RoleLoginMsg.create = function create(properties) {
        return new RoleLoginMsg(properties);
    };

    /**
     * Encodes the specified RoleLoginMsg message. Does not implicitly {@link RoleLoginMsg.verify|verify} messages.
     * @function encode
     * @memberof RoleLoginMsg
     * @static
     * @param {IRoleLoginMsg} message RoleLoginMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleLoginMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
        if (message.clientModel != null && Object.hasOwnProperty.call(message, "clientModel"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientModel);
        if (message.systemName != null && Object.hasOwnProperty.call(message, "systemName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.systemName);
        if (message.systemVersion != null && Object.hasOwnProperty.call(message, "systemVersion"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.systemVersion);
        return writer;
    };

    /**
     * Encodes the specified RoleLoginMsg message, length delimited. Does not implicitly {@link RoleLoginMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleLoginMsg
     * @static
     * @param {IRoleLoginMsg} message RoleLoginMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleLoginMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleLoginMsg message from the specified reader or buffer.
     * @function decode
     * @memberof RoleLoginMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoleLoginMsg} RoleLoginMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleLoginMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoleLoginMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.nickname = reader.string();
                    break;
                }
            case 2: {
                    message.clientModel = reader.string();
                    break;
                }
            case 3: {
                    message.systemName = reader.string();
                    break;
                }
            case 4: {
                    message.systemVersion = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoleLoginMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleLoginMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleLoginMsg} RoleLoginMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleLoginMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleLoginMsg message.
     * @function verify
     * @memberof RoleLoginMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleLoginMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            if (!$util.isString(message.nickname))
                return "nickname: string expected";
        if (message.clientModel != null && message.hasOwnProperty("clientModel"))
            if (!$util.isString(message.clientModel))
                return "clientModel: string expected";
        if (message.systemName != null && message.hasOwnProperty("systemName"))
            if (!$util.isString(message.systemName))
                return "systemName: string expected";
        if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
            if (!$util.isString(message.systemVersion))
                return "systemVersion: string expected";
        return null;
    };

    /**
     * Creates a RoleLoginMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoleLoginMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoleLoginMsg} RoleLoginMsg
     */
    RoleLoginMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.RoleLoginMsg)
            return object;
        var message = new $root.RoleLoginMsg();
        if (object.nickname != null)
            message.nickname = String(object.nickname);
        if (object.clientModel != null)
            message.clientModel = String(object.clientModel);
        if (object.systemName != null)
            message.systemName = String(object.systemName);
        if (object.systemVersion != null)
            message.systemVersion = String(object.systemVersion);
        return message;
    };

    /**
     * Creates a plain object from a RoleLoginMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoleLoginMsg
     * @static
     * @param {RoleLoginMsg} message RoleLoginMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoleLoginMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nickname = "";
            object.clientModel = "";
            object.systemName = "";
            object.systemVersion = "";
        }
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            object.nickname = message.nickname;
        if (message.clientModel != null && message.hasOwnProperty("clientModel"))
            object.clientModel = message.clientModel;
        if (message.systemName != null && message.hasOwnProperty("systemName"))
            object.systemName = message.systemName;
        if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
            object.systemVersion = message.systemVersion;
        return object;
    };

    /**
     * Converts this RoleLoginMsg to JSON.
     * @function toJSON
     * @memberof RoleLoginMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoleLoginMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RoleLoginMsg
     * @function getTypeUrl
     * @memberof RoleLoginMsg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RoleLoginMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RoleLoginMsg";
    };

    return RoleLoginMsg;
})();

$root.SendMsg = (function() {

    /**
     * Properties of a SendMsg.
     * @exports ISendMsg
     * @interface ISendMsg
     * @property {number|null} [channelId] SendMsg channelId
     * @property {number|null} [playerId] SendMsg playerId
     * @property {string|null} [message] SendMsg message
     * @property {Uint8Array|null} [voiceData] SendMsg voiceData
     * @property {string|null} [img] SendMsg img
     */

    /**
     * Constructs a new SendMsg.
     * @exports SendMsg
     * @classdesc Represents a SendMsg.
     * @implements ISendMsg
     * @constructor
     * @param {ISendMsg=} [properties] Properties to set
     */
    function SendMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendMsg channelId.
     * @member {number} channelId
     * @memberof SendMsg
     * @instance
     */
    SendMsg.prototype.channelId = 0;

    /**
     * SendMsg playerId.
     * @member {number} playerId
     * @memberof SendMsg
     * @instance
     */
    SendMsg.prototype.playerId = 0;

    /**
     * SendMsg message.
     * @member {string} message
     * @memberof SendMsg
     * @instance
     */
    SendMsg.prototype.message = "";

    /**
     * SendMsg voiceData.
     * @member {Uint8Array} voiceData
     * @memberof SendMsg
     * @instance
     */
    SendMsg.prototype.voiceData = $util.newBuffer([]);

    /**
     * SendMsg img.
     * @member {string} img
     * @memberof SendMsg
     * @instance
     */
    SendMsg.prototype.img = "";

    /**
     * Creates a new SendMsg instance using the specified properties.
     * @function create
     * @memberof SendMsg
     * @static
     * @param {ISendMsg=} [properties] Properties to set
     * @returns {SendMsg} SendMsg instance
     */
    SendMsg.create = function create(properties) {
        return new SendMsg(properties);
    };

    /**
     * Encodes the specified SendMsg message. Does not implicitly {@link SendMsg.verify|verify} messages.
     * @function encode
     * @memberof SendMsg
     * @static
     * @param {ISendMsg} message SendMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channelId);
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
        if (message.voiceData != null && Object.hasOwnProperty.call(message, "voiceData"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.voiceData);
        if (message.img != null && Object.hasOwnProperty.call(message, "img"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.img);
        return writer;
    };

    /**
     * Encodes the specified SendMsg message, length delimited. Does not implicitly {@link SendMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendMsg
     * @static
     * @param {ISendMsg} message SendMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendMsg message from the specified reader or buffer.
     * @function decode
     * @memberof SendMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendMsg} SendMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.channelId = reader.int32();
                    break;
                }
            case 2: {
                    message.playerId = reader.int32();
                    break;
                }
            case 3: {
                    message.message = reader.string();
                    break;
                }
            case 4: {
                    message.voiceData = reader.bytes();
                    break;
                }
            case 5: {
                    message.img = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SendMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendMsg} SendMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendMsg message.
     * @function verify
     * @memberof SendMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.channelId != null && message.hasOwnProperty("channelId"))
            if (!$util.isInteger(message.channelId))
                return "channelId: integer expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.voiceData != null && message.hasOwnProperty("voiceData"))
            if (!(message.voiceData && typeof message.voiceData.length === "number" || $util.isString(message.voiceData)))
                return "voiceData: buffer expected";
        if (message.img != null && message.hasOwnProperty("img"))
            if (!$util.isString(message.img))
                return "img: string expected";
        return null;
    };

    /**
     * Creates a SendMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendMsg} SendMsg
     */
    SendMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.SendMsg)
            return object;
        var message = new $root.SendMsg();
        if (object.channelId != null)
            message.channelId = object.channelId | 0;
        if (object.playerId != null)
            message.playerId = object.playerId | 0;
        if (object.message != null)
            message.message = String(object.message);
        if (object.voiceData != null)
            if (typeof object.voiceData === "string")
                $util.base64.decode(object.voiceData, message.voiceData = $util.newBuffer($util.base64.length(object.voiceData)), 0);
            else if (object.voiceData.length >= 0)
                message.voiceData = object.voiceData;
        if (object.img != null)
            message.img = String(object.img);
        return message;
    };

    /**
     * Creates a plain object from a SendMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendMsg
     * @static
     * @param {SendMsg} message SendMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.channelId = 0;
            object.playerId = 0;
            object.message = "";
            if (options.bytes === String)
                object.voiceData = "";
            else {
                object.voiceData = [];
                if (options.bytes !== Array)
                    object.voiceData = $util.newBuffer(object.voiceData);
            }
            object.img = "";
        }
        if (message.channelId != null && message.hasOwnProperty("channelId"))
            object.channelId = message.channelId;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.voiceData != null && message.hasOwnProperty("voiceData"))
            object.voiceData = options.bytes === String ? $util.base64.encode(message.voiceData, 0, message.voiceData.length) : options.bytes === Array ? Array.prototype.slice.call(message.voiceData) : message.voiceData;
        if (message.img != null && message.hasOwnProperty("img"))
            object.img = message.img;
        return object;
    };

    /**
     * Converts this SendMsg to JSON.
     * @function toJSON
     * @memberof SendMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SendMsg
     * @function getTypeUrl
     * @memberof SendMsg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SendMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SendMsg";
    };

    return SendMsg;
})();

module.exports = $root;
