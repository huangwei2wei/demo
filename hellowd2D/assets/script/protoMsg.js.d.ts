import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace protoMsg {
    // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace account. */
export namespace account {

    /** Properties of an AccountLoginMsg. */
    interface IAccountLoginMsg {

        /** AccountLoginMsg accountName */
        accountName?: (string|null);

        /** AccountLoginMsg passWord */
        passWord?: (string|null);

        /** AccountLoginMsg channel */
        channel?: (number|null);

        /** AccountLoginMsg clientModel */
        clientModel?: (string|null);

        /** AccountLoginMsg systemName */
        systemName?: (string|null);

        /** AccountLoginMsg systemVersion */
        systemVersion?: (string|null);

        /** AccountLoginMsg nickname */
        nickname?: (string|null);
    }

    /** Represents an AccountLoginMsg. */
    class AccountLoginMsg implements IAccountLoginMsg {

        /**
         * Constructs a new AccountLoginMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IAccountLoginMsg);

        /** AccountLoginMsg accountName. */
        public accountName: string;

        /** AccountLoginMsg passWord. */
        public passWord: string;

        /** AccountLoginMsg channel. */
        public channel: number;

        /** AccountLoginMsg clientModel. */
        public clientModel: string;

        /** AccountLoginMsg systemName. */
        public systemName: string;

        /** AccountLoginMsg systemVersion. */
        public systemVersion: string;

        /** AccountLoginMsg nickname. */
        public nickname: string;

        /**
         * Creates a new AccountLoginMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountLoginMsg instance
         */
        public static create(properties?: account.IAccountLoginMsg): account.AccountLoginMsg;

        /**
         * Encodes the specified AccountLoginMsg message. Does not implicitly {@link account.AccountLoginMsg.verify|verify} messages.
         * @param message AccountLoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IAccountLoginMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountLoginMsg message, length delimited. Does not implicitly {@link account.AccountLoginMsg.verify|verify} messages.
         * @param message AccountLoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IAccountLoginMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountLoginMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.AccountLoginMsg;

        /**
         * Decodes an AccountLoginMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.AccountLoginMsg;

        /**
         * Verifies an AccountLoginMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountLoginMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountLoginMsg
         */
        public static fromObject(object: { [k: string]: any }): account.AccountLoginMsg;

        /**
         * Creates a plain object from an AccountLoginMsg message. Also converts values to other types if specified.
         * @param message AccountLoginMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.AccountLoginMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountLoginMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountLoginMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoleLoginOkMsg. */
    interface IRoleLoginOkMsg {

        /** RoleLoginOkMsg playerId */
        playerId?: (number|null);

        /** RoleLoginOkMsg nickname */
        nickname?: (string|null);

        /** RoleLoginOkMsg lv */
        lv?: (number|null);

        /** RoleLoginOkMsg lvExp */
        lvExp?: (number|null);

        /** RoleLoginOkMsg vipLv */
        vipLv?: (number|null);

        /** RoleLoginOkMsg vipExp */
        vipExp?: (number|null);

        /** RoleLoginOkMsg gold */
        gold?: (number|null);

        /** RoleLoginOkMsg diamond */
        diamond?: (number|null);

        /** RoleLoginOkMsg roomCard */
        roomCard?: (number|null);

        /** RoleLoginOkMsg createTime */
        createTime?: (number|Long|null);
    }

    /** Represents a RoleLoginOkMsg. */
    class RoleLoginOkMsg implements IRoleLoginOkMsg {

        /**
         * Constructs a new RoleLoginOkMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IRoleLoginOkMsg);

        /** RoleLoginOkMsg playerId. */
        public playerId: number;

        /** RoleLoginOkMsg nickname. */
        public nickname: string;

        /** RoleLoginOkMsg lv. */
        public lv: number;

        /** RoleLoginOkMsg lvExp. */
        public lvExp: number;

        /** RoleLoginOkMsg vipLv. */
        public vipLv: number;

        /** RoleLoginOkMsg vipExp. */
        public vipExp: number;

        /** RoleLoginOkMsg gold. */
        public gold: number;

        /** RoleLoginOkMsg diamond. */
        public diamond: number;

        /** RoleLoginOkMsg roomCard. */
        public roomCard: number;

        /** RoleLoginOkMsg createTime. */
        public createTime: (number|Long);

        /**
         * Creates a new RoleLoginOkMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleLoginOkMsg instance
         */
        public static create(properties?: account.IRoleLoginOkMsg): account.RoleLoginOkMsg;

        /**
         * Encodes the specified RoleLoginOkMsg message. Does not implicitly {@link account.RoleLoginOkMsg.verify|verify} messages.
         * @param message RoleLoginOkMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IRoleLoginOkMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleLoginOkMsg message, length delimited. Does not implicitly {@link account.RoleLoginOkMsg.verify|verify} messages.
         * @param message RoleLoginOkMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IRoleLoginOkMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleLoginOkMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleLoginOkMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.RoleLoginOkMsg;

        /**
         * Decodes a RoleLoginOkMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleLoginOkMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.RoleLoginOkMsg;

        /**
         * Verifies a RoleLoginOkMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleLoginOkMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleLoginOkMsg
         */
        public static fromObject(object: { [k: string]: any }): account.RoleLoginOkMsg;

        /**
         * Creates a plain object from a RoleLoginOkMsg message. Also converts values to other types if specified.
         * @param message RoleLoginOkMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.RoleLoginOkMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleLoginOkMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoleLoginOkMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace playerCheckPoint. */
export namespace playerCheckPoint {

    /** Properties of a PointInfoReqMsg. */
    interface IPointInfoReqMsg {
    }

    /** Represents a PointInfoReqMsg. */
    class PointInfoReqMsg implements IPointInfoReqMsg {

        /**
         * Constructs a new PointInfoReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerCheckPoint.IPointInfoReqMsg);

        /**
         * Creates a new PointInfoReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointInfoReqMsg instance
         */
        public static create(properties?: playerCheckPoint.IPointInfoReqMsg): playerCheckPoint.PointInfoReqMsg;

        /**
         * Encodes the specified PointInfoReqMsg message. Does not implicitly {@link playerCheckPoint.PointInfoReqMsg.verify|verify} messages.
         * @param message PointInfoReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerCheckPoint.IPointInfoReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointInfoReqMsg message, length delimited. Does not implicitly {@link playerCheckPoint.PointInfoReqMsg.verify|verify} messages.
         * @param message PointInfoReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerCheckPoint.IPointInfoReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointInfoReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointInfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerCheckPoint.PointInfoReqMsg;

        /**
         * Decodes a PointInfoReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointInfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerCheckPoint.PointInfoReqMsg;

        /**
         * Verifies a PointInfoReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PointInfoReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PointInfoReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerCheckPoint.PointInfoReqMsg;

        /**
         * Creates a plain object from a PointInfoReqMsg message. Also converts values to other types if specified.
         * @param message PointInfoReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerCheckPoint.PointInfoReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PointInfoReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PointInfoReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PointInfoResMsg. */
    interface IPointInfoResMsg {

        /** PointInfoResMsg checkPoint */
        checkPoint?: (number|null);

        /** PointInfoResMsg onHookTime */
        onHookTime?: (number|null);

        /** PointInfoResMsg reward */
        reward?: (playerTask.IRewardInfoMsg[]|null);
    }

    /** Represents a PointInfoResMsg. */
    class PointInfoResMsg implements IPointInfoResMsg {

        /**
         * Constructs a new PointInfoResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerCheckPoint.IPointInfoResMsg);

        /** PointInfoResMsg checkPoint. */
        public checkPoint: number;

        /** PointInfoResMsg onHookTime. */
        public onHookTime: number;

        /** PointInfoResMsg reward. */
        public reward: playerTask.IRewardInfoMsg[];

        /**
         * Creates a new PointInfoResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointInfoResMsg instance
         */
        public static create(properties?: playerCheckPoint.IPointInfoResMsg): playerCheckPoint.PointInfoResMsg;

        /**
         * Encodes the specified PointInfoResMsg message. Does not implicitly {@link playerCheckPoint.PointInfoResMsg.verify|verify} messages.
         * @param message PointInfoResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerCheckPoint.IPointInfoResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointInfoResMsg message, length delimited. Does not implicitly {@link playerCheckPoint.PointInfoResMsg.verify|verify} messages.
         * @param message PointInfoResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerCheckPoint.IPointInfoResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointInfoResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointInfoResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerCheckPoint.PointInfoResMsg;

        /**
         * Decodes a PointInfoResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointInfoResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerCheckPoint.PointInfoResMsg;

        /**
         * Verifies a PointInfoResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PointInfoResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PointInfoResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerCheckPoint.PointInfoResMsg;

        /**
         * Creates a plain object from a PointInfoResMsg message. Also converts values to other types if specified.
         * @param message PointInfoResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerCheckPoint.PointInfoResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PointInfoResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PointInfoResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PointReqMsg. */
    interface IPointReqMsg {

        /** PointReqMsg id */
        id?: (number|null);

        /** PointReqMsg win */
        win?: (boolean|null);
    }

    /** Represents a PointReqMsg. */
    class PointReqMsg implements IPointReqMsg {

        /**
         * Constructs a new PointReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerCheckPoint.IPointReqMsg);

        /** PointReqMsg id. */
        public id: number;

        /** PointReqMsg win. */
        public win: boolean;

        /**
         * Creates a new PointReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointReqMsg instance
         */
        public static create(properties?: playerCheckPoint.IPointReqMsg): playerCheckPoint.PointReqMsg;

        /**
         * Encodes the specified PointReqMsg message. Does not implicitly {@link playerCheckPoint.PointReqMsg.verify|verify} messages.
         * @param message PointReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerCheckPoint.IPointReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointReqMsg message, length delimited. Does not implicitly {@link playerCheckPoint.PointReqMsg.verify|verify} messages.
         * @param message PointReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerCheckPoint.IPointReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerCheckPoint.PointReqMsg;

        /**
         * Decodes a PointReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerCheckPoint.PointReqMsg;

        /**
         * Verifies a PointReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PointReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PointReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerCheckPoint.PointReqMsg;

        /**
         * Creates a plain object from a PointReqMsg message. Also converts values to other types if specified.
         * @param message PointReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerCheckPoint.PointReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PointReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PointReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PointResMsg. */
    interface IPointResMsg {

        /** PointResMsg checkPoint */
        checkPoint?: (number|null);

        /** PointResMsg reward */
        reward?: (playerTask.IRewardInfoMsg[]|null);
    }

    /** Represents a PointResMsg. */
    class PointResMsg implements IPointResMsg {

        /**
         * Constructs a new PointResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerCheckPoint.IPointResMsg);

        /** PointResMsg checkPoint. */
        public checkPoint: number;

        /** PointResMsg reward. */
        public reward: playerTask.IRewardInfoMsg[];

        /**
         * Creates a new PointResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointResMsg instance
         */
        public static create(properties?: playerCheckPoint.IPointResMsg): playerCheckPoint.PointResMsg;

        /**
         * Encodes the specified PointResMsg message. Does not implicitly {@link playerCheckPoint.PointResMsg.verify|verify} messages.
         * @param message PointResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerCheckPoint.IPointResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointResMsg message, length delimited. Does not implicitly {@link playerCheckPoint.PointResMsg.verify|verify} messages.
         * @param message PointResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerCheckPoint.IPointResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerCheckPoint.PointResMsg;

        /**
         * Decodes a PointResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerCheckPoint.PointResMsg;

        /**
         * Verifies a PointResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PointResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PointResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerCheckPoint.PointResMsg;

        /**
         * Creates a plain object from a PointResMsg message. Also converts values to other types if specified.
         * @param message PointResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerCheckPoint.PointResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PointResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PointResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OnHookRewardsReqMsg. */
    interface IOnHookRewardsReqMsg {
    }

    /** Represents an OnHookRewardsReqMsg. */
    class OnHookRewardsReqMsg implements IOnHookRewardsReqMsg {

        /**
         * Constructs a new OnHookRewardsReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerCheckPoint.IOnHookRewardsReqMsg);

        /**
         * Creates a new OnHookRewardsReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OnHookRewardsReqMsg instance
         */
        public static create(properties?: playerCheckPoint.IOnHookRewardsReqMsg): playerCheckPoint.OnHookRewardsReqMsg;

        /**
         * Encodes the specified OnHookRewardsReqMsg message. Does not implicitly {@link playerCheckPoint.OnHookRewardsReqMsg.verify|verify} messages.
         * @param message OnHookRewardsReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerCheckPoint.IOnHookRewardsReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OnHookRewardsReqMsg message, length delimited. Does not implicitly {@link playerCheckPoint.OnHookRewardsReqMsg.verify|verify} messages.
         * @param message OnHookRewardsReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerCheckPoint.IOnHookRewardsReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OnHookRewardsReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OnHookRewardsReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerCheckPoint.OnHookRewardsReqMsg;

        /**
         * Decodes an OnHookRewardsReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OnHookRewardsReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerCheckPoint.OnHookRewardsReqMsg;

        /**
         * Verifies an OnHookRewardsReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OnHookRewardsReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OnHookRewardsReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerCheckPoint.OnHookRewardsReqMsg;

        /**
         * Creates a plain object from an OnHookRewardsReqMsg message. Also converts values to other types if specified.
         * @param message OnHookRewardsReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerCheckPoint.OnHookRewardsReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OnHookRewardsReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OnHookRewardsReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OnHookRewardsResMsg. */
    interface IOnHookRewardsResMsg {

        /** OnHookRewardsResMsg onHookTime */
        onHookTime?: (number|null);

        /** OnHookRewardsResMsg reward */
        reward?: (playerTask.IRewardInfoMsg[]|null);
    }

    /** Represents an OnHookRewardsResMsg. */
    class OnHookRewardsResMsg implements IOnHookRewardsResMsg {

        /**
         * Constructs a new OnHookRewardsResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerCheckPoint.IOnHookRewardsResMsg);

        /** OnHookRewardsResMsg onHookTime. */
        public onHookTime: number;

        /** OnHookRewardsResMsg reward. */
        public reward: playerTask.IRewardInfoMsg[];

        /**
         * Creates a new OnHookRewardsResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OnHookRewardsResMsg instance
         */
        public static create(properties?: playerCheckPoint.IOnHookRewardsResMsg): playerCheckPoint.OnHookRewardsResMsg;

        /**
         * Encodes the specified OnHookRewardsResMsg message. Does not implicitly {@link playerCheckPoint.OnHookRewardsResMsg.verify|verify} messages.
         * @param message OnHookRewardsResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerCheckPoint.IOnHookRewardsResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OnHookRewardsResMsg message, length delimited. Does not implicitly {@link playerCheckPoint.OnHookRewardsResMsg.verify|verify} messages.
         * @param message OnHookRewardsResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerCheckPoint.IOnHookRewardsResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OnHookRewardsResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OnHookRewardsResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerCheckPoint.OnHookRewardsResMsg;

        /**
         * Decodes an OnHookRewardsResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OnHookRewardsResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerCheckPoint.OnHookRewardsResMsg;

        /**
         * Verifies an OnHookRewardsResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OnHookRewardsResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OnHookRewardsResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerCheckPoint.OnHookRewardsResMsg;

        /**
         * Creates a plain object from an OnHookRewardsResMsg message. Also converts values to other types if specified.
         * @param message OnHookRewardsResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerCheckPoint.OnHookRewardsResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OnHookRewardsResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OnHookRewardsResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace playerTask. */
export namespace playerTask {

    /** Properties of a PlayerTaskListMsgReq. */
    interface IPlayerTaskListMsgReq {
    }

    /** Represents a PlayerTaskListMsgReq. */
    class PlayerTaskListMsgReq implements IPlayerTaskListMsgReq {

        /**
         * Constructs a new PlayerTaskListMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerTask.IPlayerTaskListMsgReq);

        /**
         * Creates a new PlayerTaskListMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerTaskListMsgReq instance
         */
        public static create(properties?: playerTask.IPlayerTaskListMsgReq): playerTask.PlayerTaskListMsgReq;

        /**
         * Encodes the specified PlayerTaskListMsgReq message. Does not implicitly {@link playerTask.PlayerTaskListMsgReq.verify|verify} messages.
         * @param message PlayerTaskListMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerTask.IPlayerTaskListMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerTaskListMsgReq message, length delimited. Does not implicitly {@link playerTask.PlayerTaskListMsgReq.verify|verify} messages.
         * @param message PlayerTaskListMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerTask.IPlayerTaskListMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerTaskListMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerTaskListMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask.PlayerTaskListMsgReq;

        /**
         * Decodes a PlayerTaskListMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerTaskListMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask.PlayerTaskListMsgReq;

        /**
         * Verifies a PlayerTaskListMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerTaskListMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerTaskListMsgReq
         */
        public static fromObject(object: { [k: string]: any }): playerTask.PlayerTaskListMsgReq;

        /**
         * Creates a plain object from a PlayerTaskListMsgReq message. Also converts values to other types if specified.
         * @param message PlayerTaskListMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerTask.PlayerTaskListMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerTaskListMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerTaskListMsgReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerTaskListMsgRes. */
    interface IPlayerTaskListMsgRes {

        /** PlayerTaskListMsgRes tasks */
        tasks?: (playerTask.ITaskInfoMsg[]|null);
    }

    /** Represents a PlayerTaskListMsgRes. */
    class PlayerTaskListMsgRes implements IPlayerTaskListMsgRes {

        /**
         * Constructs a new PlayerTaskListMsgRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerTask.IPlayerTaskListMsgRes);

        /** PlayerTaskListMsgRes tasks. */
        public tasks: playerTask.ITaskInfoMsg[];

        /**
         * Creates a new PlayerTaskListMsgRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerTaskListMsgRes instance
         */
        public static create(properties?: playerTask.IPlayerTaskListMsgRes): playerTask.PlayerTaskListMsgRes;

        /**
         * Encodes the specified PlayerTaskListMsgRes message. Does not implicitly {@link playerTask.PlayerTaskListMsgRes.verify|verify} messages.
         * @param message PlayerTaskListMsgRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerTask.IPlayerTaskListMsgRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerTaskListMsgRes message, length delimited. Does not implicitly {@link playerTask.PlayerTaskListMsgRes.verify|verify} messages.
         * @param message PlayerTaskListMsgRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerTask.IPlayerTaskListMsgRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerTaskListMsgRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerTaskListMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask.PlayerTaskListMsgRes;

        /**
         * Decodes a PlayerTaskListMsgRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerTaskListMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask.PlayerTaskListMsgRes;

        /**
         * Verifies a PlayerTaskListMsgRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerTaskListMsgRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerTaskListMsgRes
         */
        public static fromObject(object: { [k: string]: any }): playerTask.PlayerTaskListMsgRes;

        /**
         * Creates a plain object from a PlayerTaskListMsgRes message. Also converts values to other types if specified.
         * @param message PlayerTaskListMsgRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerTask.PlayerTaskListMsgRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerTaskListMsgRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerTaskListMsgRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an upTaskMsgRes. */
    interface IupTaskMsgRes {

        /** upTaskMsgRes playerTask */
        playerTask?: (playerTask.ITaskInfoMsg|null);
    }

    /** Represents an upTaskMsgRes. */
    class upTaskMsgRes implements IupTaskMsgRes {

        /**
         * Constructs a new upTaskMsgRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerTask.IupTaskMsgRes);

        /** upTaskMsgRes playerTask. */
        public playerTask?: (playerTask.ITaskInfoMsg|null);

        /**
         * Creates a new upTaskMsgRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns upTaskMsgRes instance
         */
        public static create(properties?: playerTask.IupTaskMsgRes): playerTask.upTaskMsgRes;

        /**
         * Encodes the specified upTaskMsgRes message. Does not implicitly {@link playerTask.upTaskMsgRes.verify|verify} messages.
         * @param message upTaskMsgRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerTask.IupTaskMsgRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified upTaskMsgRes message, length delimited. Does not implicitly {@link playerTask.upTaskMsgRes.verify|verify} messages.
         * @param message upTaskMsgRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerTask.IupTaskMsgRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an upTaskMsgRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns upTaskMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask.upTaskMsgRes;

        /**
         * Decodes an upTaskMsgRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns upTaskMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask.upTaskMsgRes;

        /**
         * Verifies an upTaskMsgRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an upTaskMsgRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns upTaskMsgRes
         */
        public static fromObject(object: { [k: string]: any }): playerTask.upTaskMsgRes;

        /**
         * Creates a plain object from an upTaskMsgRes message. Also converts values to other types if specified.
         * @param message upTaskMsgRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerTask.upTaskMsgRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this upTaskMsgRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for upTaskMsgRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TaskInfoMsg. */
    interface ITaskInfoMsg {

        /** TaskInfoMsg taskId */
        taskId?: (number|null);

        /** TaskInfoMsg taskType */
        taskType?: (number|null);

        /** TaskInfoMsg step */
        step?: (number|null);

        /** TaskInfoMsg taskName */
        taskName?: (string|null);

        /** TaskInfoMsg state */
        state?: (number|null);

        /** TaskInfoMsg process */
        process?: (number|null);

        /** TaskInfoMsg conditionNum */
        conditionNum?: (number|null);

        /** TaskInfoMsg rewards */
        rewards?: (playerTask.IRewardsMsg|null);
    }

    /** Represents a TaskInfoMsg. */
    class TaskInfoMsg implements ITaskInfoMsg {

        /**
         * Constructs a new TaskInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerTask.ITaskInfoMsg);

        /** TaskInfoMsg taskId. */
        public taskId: number;

        /** TaskInfoMsg taskType. */
        public taskType: number;

        /** TaskInfoMsg step. */
        public step: number;

        /** TaskInfoMsg taskName. */
        public taskName: string;

        /** TaskInfoMsg state. */
        public state: number;

        /** TaskInfoMsg process. */
        public process: number;

        /** TaskInfoMsg conditionNum. */
        public conditionNum: number;

        /** TaskInfoMsg rewards. */
        public rewards?: (playerTask.IRewardsMsg|null);

        /**
         * Creates a new TaskInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskInfoMsg instance
         */
        public static create(properties?: playerTask.ITaskInfoMsg): playerTask.TaskInfoMsg;

        /**
         * Encodes the specified TaskInfoMsg message. Does not implicitly {@link playerTask.TaskInfoMsg.verify|verify} messages.
         * @param message TaskInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerTask.ITaskInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskInfoMsg message, length delimited. Does not implicitly {@link playerTask.TaskInfoMsg.verify|verify} messages.
         * @param message TaskInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerTask.ITaskInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask.TaskInfoMsg;

        /**
         * Decodes a TaskInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask.TaskInfoMsg;

        /**
         * Verifies a TaskInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): playerTask.TaskInfoMsg;

        /**
         * Creates a plain object from a TaskInfoMsg message. Also converts values to other types if specified.
         * @param message TaskInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerTask.TaskInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TaskInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommitTaskMsgReq. */
    interface ICommitTaskMsgReq {

        /** CommitTaskMsgReq taskId */
        taskId?: (number|null);
    }

    /** Represents a CommitTaskMsgReq. */
    class CommitTaskMsgReq implements ICommitTaskMsgReq {

        /**
         * Constructs a new CommitTaskMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerTask.ICommitTaskMsgReq);

        /** CommitTaskMsgReq taskId. */
        public taskId: number;

        /**
         * Creates a new CommitTaskMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommitTaskMsgReq instance
         */
        public static create(properties?: playerTask.ICommitTaskMsgReq): playerTask.CommitTaskMsgReq;

        /**
         * Encodes the specified CommitTaskMsgReq message. Does not implicitly {@link playerTask.CommitTaskMsgReq.verify|verify} messages.
         * @param message CommitTaskMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerTask.ICommitTaskMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommitTaskMsgReq message, length delimited. Does not implicitly {@link playerTask.CommitTaskMsgReq.verify|verify} messages.
         * @param message CommitTaskMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerTask.ICommitTaskMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommitTaskMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommitTaskMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask.CommitTaskMsgReq;

        /**
         * Decodes a CommitTaskMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommitTaskMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask.CommitTaskMsgReq;

        /**
         * Verifies a CommitTaskMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommitTaskMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommitTaskMsgReq
         */
        public static fromObject(object: { [k: string]: any }): playerTask.CommitTaskMsgReq;

        /**
         * Creates a plain object from a CommitTaskMsgReq message. Also converts values to other types if specified.
         * @param message CommitTaskMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerTask.CommitTaskMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommitTaskMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommitTaskMsgReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommitTaskMsgRes. */
    interface ICommitTaskMsgRes {

        /** CommitTaskMsgRes reward */
        reward?: (playerTask.IRewardsMsg|null);
    }

    /** Represents a CommitTaskMsgRes. */
    class CommitTaskMsgRes implements ICommitTaskMsgRes {

        /**
         * Constructs a new CommitTaskMsgRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerTask.ICommitTaskMsgRes);

        /** CommitTaskMsgRes reward. */
        public reward?: (playerTask.IRewardsMsg|null);

        /**
         * Creates a new CommitTaskMsgRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommitTaskMsgRes instance
         */
        public static create(properties?: playerTask.ICommitTaskMsgRes): playerTask.CommitTaskMsgRes;

        /**
         * Encodes the specified CommitTaskMsgRes message. Does not implicitly {@link playerTask.CommitTaskMsgRes.verify|verify} messages.
         * @param message CommitTaskMsgRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerTask.ICommitTaskMsgRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommitTaskMsgRes message, length delimited. Does not implicitly {@link playerTask.CommitTaskMsgRes.verify|verify} messages.
         * @param message CommitTaskMsgRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerTask.ICommitTaskMsgRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommitTaskMsgRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommitTaskMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask.CommitTaskMsgRes;

        /**
         * Decodes a CommitTaskMsgRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommitTaskMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask.CommitTaskMsgRes;

        /**
         * Verifies a CommitTaskMsgRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommitTaskMsgRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommitTaskMsgRes
         */
        public static fromObject(object: { [k: string]: any }): playerTask.CommitTaskMsgRes;

        /**
         * Creates a plain object from a CommitTaskMsgRes message. Also converts values to other types if specified.
         * @param message CommitTaskMsgRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerTask.CommitTaskMsgRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommitTaskMsgRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommitTaskMsgRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RewardsMsg. */
    interface IRewardsMsg {

        /** RewardsMsg exp */
        exp?: (number|null);

        /** RewardsMsg diamond */
        diamond?: (number|null);

        /** RewardsMsg reward */
        reward?: (playerTask.IRewardInfoMsg[]|null);
    }

    /** Represents a RewardsMsg. */
    class RewardsMsg implements IRewardsMsg {

        /**
         * Constructs a new RewardsMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerTask.IRewardsMsg);

        /** RewardsMsg exp. */
        public exp: number;

        /** RewardsMsg diamond. */
        public diamond: number;

        /** RewardsMsg reward. */
        public reward: playerTask.IRewardInfoMsg[];

        /**
         * Creates a new RewardsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RewardsMsg instance
         */
        public static create(properties?: playerTask.IRewardsMsg): playerTask.RewardsMsg;

        /**
         * Encodes the specified RewardsMsg message. Does not implicitly {@link playerTask.RewardsMsg.verify|verify} messages.
         * @param message RewardsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerTask.IRewardsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RewardsMsg message, length delimited. Does not implicitly {@link playerTask.RewardsMsg.verify|verify} messages.
         * @param message RewardsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerTask.IRewardsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RewardsMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RewardsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask.RewardsMsg;

        /**
         * Decodes a RewardsMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RewardsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask.RewardsMsg;

        /**
         * Verifies a RewardsMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RewardsMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RewardsMsg
         */
        public static fromObject(object: { [k: string]: any }): playerTask.RewardsMsg;

        /**
         * Creates a plain object from a RewardsMsg message. Also converts values to other types if specified.
         * @param message RewardsMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerTask.RewardsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RewardsMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RewardsMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RewardInfoMsg. */
    interface IRewardInfoMsg {

        /** RewardInfoMsg type */
        type?: (number|null);

        /** RewardInfoMsg objId */
        objId?: (number|null);

        /** RewardInfoMsg num */
        num?: (number|null);
    }

    /** Represents a RewardInfoMsg. */
    class RewardInfoMsg implements IRewardInfoMsg {

        /**
         * Constructs a new RewardInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerTask.IRewardInfoMsg);

        /** RewardInfoMsg type. */
        public type: number;

        /** RewardInfoMsg objId. */
        public objId: number;

        /** RewardInfoMsg num. */
        public num: number;

        /**
         * Creates a new RewardInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RewardInfoMsg instance
         */
        public static create(properties?: playerTask.IRewardInfoMsg): playerTask.RewardInfoMsg;

        /**
         * Encodes the specified RewardInfoMsg message. Does not implicitly {@link playerTask.RewardInfoMsg.verify|verify} messages.
         * @param message RewardInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerTask.IRewardInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RewardInfoMsg message, length delimited. Does not implicitly {@link playerTask.RewardInfoMsg.verify|verify} messages.
         * @param message RewardInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerTask.IRewardInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RewardInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RewardInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTask.RewardInfoMsg;

        /**
         * Decodes a RewardInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RewardInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTask.RewardInfoMsg;

        /**
         * Verifies a RewardInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RewardInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RewardInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): playerTask.RewardInfoMsg;

        /**
         * Creates a plain object from a RewardInfoMsg message. Also converts values to other types if specified.
         * @param message RewardInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerTask.RewardInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RewardInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RewardInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace draw. */
export namespace draw {

    /** Properties of a DrawReqMsg. */
    interface IDrawReqMsg {
    }

    /** Represents a DrawReqMsg. */
    class DrawReqMsg implements IDrawReqMsg {

        /**
         * Constructs a new DrawReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: draw.IDrawReqMsg);

        /**
         * Creates a new DrawReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawReqMsg instance
         */
        public static create(properties?: draw.IDrawReqMsg): draw.DrawReqMsg;

        /**
         * Encodes the specified DrawReqMsg message. Does not implicitly {@link draw.DrawReqMsg.verify|verify} messages.
         * @param message DrawReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: draw.IDrawReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawReqMsg message, length delimited. Does not implicitly {@link draw.DrawReqMsg.verify|verify} messages.
         * @param message DrawReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: draw.IDrawReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): draw.DrawReqMsg;

        /**
         * Decodes a DrawReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): draw.DrawReqMsg;

        /**
         * Verifies a DrawReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawReqMsg
         */
        public static fromObject(object: { [k: string]: any }): draw.DrawReqMsg;

        /**
         * Creates a plain object from a DrawReqMsg message. Also converts values to other types if specified.
         * @param message DrawReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: draw.DrawReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DrawReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DrawResMsg. */
    interface IDrawResMsg {

        /** DrawResMsg draw */
        draw?: ({ [k: string]: number }|null);
    }

    /** Represents a DrawResMsg. */
    class DrawResMsg implements IDrawResMsg {

        /**
         * Constructs a new DrawResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: draw.IDrawResMsg);

        /** DrawResMsg draw. */
        public draw: { [k: string]: number };

        /**
         * Creates a new DrawResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawResMsg instance
         */
        public static create(properties?: draw.IDrawResMsg): draw.DrawResMsg;

        /**
         * Encodes the specified DrawResMsg message. Does not implicitly {@link draw.DrawResMsg.verify|verify} messages.
         * @param message DrawResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: draw.IDrawResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawResMsg message, length delimited. Does not implicitly {@link draw.DrawResMsg.verify|verify} messages.
         * @param message DrawResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: draw.IDrawResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): draw.DrawResMsg;

        /**
         * Decodes a DrawResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): draw.DrawResMsg;

        /**
         * Verifies a DrawResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawResMsg
         */
        public static fromObject(object: { [k: string]: any }): draw.DrawResMsg;

        /**
         * Creates a plain object from a DrawResMsg message. Also converts values to other types if specified.
         * @param message DrawResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: draw.DrawResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DrawResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DrawRandomReqMsg. */
    interface IDrawRandomReqMsg {

        /** DrawRandomReqMsg drawId */
        drawId?: (number|null);

        /** DrawRandomReqMsg num */
        num?: (number|null);
    }

    /** Represents a DrawRandomReqMsg. */
    class DrawRandomReqMsg implements IDrawRandomReqMsg {

        /**
         * Constructs a new DrawRandomReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: draw.IDrawRandomReqMsg);

        /** DrawRandomReqMsg drawId. */
        public drawId: number;

        /** DrawRandomReqMsg num. */
        public num: number;

        /**
         * Creates a new DrawRandomReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawRandomReqMsg instance
         */
        public static create(properties?: draw.IDrawRandomReqMsg): draw.DrawRandomReqMsg;

        /**
         * Encodes the specified DrawRandomReqMsg message. Does not implicitly {@link draw.DrawRandomReqMsg.verify|verify} messages.
         * @param message DrawRandomReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: draw.IDrawRandomReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawRandomReqMsg message, length delimited. Does not implicitly {@link draw.DrawRandomReqMsg.verify|verify} messages.
         * @param message DrawRandomReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: draw.IDrawRandomReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawRandomReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawRandomReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): draw.DrawRandomReqMsg;

        /**
         * Decodes a DrawRandomReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawRandomReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): draw.DrawRandomReqMsg;

        /**
         * Verifies a DrawRandomReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawRandomReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawRandomReqMsg
         */
        public static fromObject(object: { [k: string]: any }): draw.DrawRandomReqMsg;

        /**
         * Creates a plain object from a DrawRandomReqMsg message. Also converts values to other types if specified.
         * @param message DrawRandomReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: draw.DrawRandomReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawRandomReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DrawRandomReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DrawRandomResMsg. */
    interface IDrawRandomResMsg {

        /** DrawRandomResMsg reward */
        reward?: (playerTask.IRewardInfoMsg[]|null);
    }

    /** Represents a DrawRandomResMsg. */
    class DrawRandomResMsg implements IDrawRandomResMsg {

        /**
         * Constructs a new DrawRandomResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: draw.IDrawRandomResMsg);

        /** DrawRandomResMsg reward. */
        public reward: playerTask.IRewardInfoMsg[];

        /**
         * Creates a new DrawRandomResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawRandomResMsg instance
         */
        public static create(properties?: draw.IDrawRandomResMsg): draw.DrawRandomResMsg;

        /**
         * Encodes the specified DrawRandomResMsg message. Does not implicitly {@link draw.DrawRandomResMsg.verify|verify} messages.
         * @param message DrawRandomResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: draw.IDrawRandomResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawRandomResMsg message, length delimited. Does not implicitly {@link draw.DrawRandomResMsg.verify|verify} messages.
         * @param message DrawRandomResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: draw.IDrawRandomResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawRandomResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawRandomResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): draw.DrawRandomResMsg;

        /**
         * Decodes a DrawRandomResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawRandomResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): draw.DrawRandomResMsg;

        /**
         * Verifies a DrawRandomResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawRandomResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawRandomResMsg
         */
        public static fromObject(object: { [k: string]: any }): draw.DrawRandomResMsg;

        /**
         * Creates a plain object from a DrawRandomResMsg message. Also converts values to other types if specified.
         * @param message DrawRandomResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: draw.DrawRandomResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawRandomResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DrawRandomResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace error. */
export namespace error {

    /** Properties of an ErrorMsg. */
    interface IErrorMsg {

        /** ErrorMsg errorType */
        errorType?: (number|null);

        /** ErrorMsg errorSubType */
        errorSubType?: (number|null);

        /** ErrorMsg code */
        code?: (number|null);

        /** ErrorMsg msg */
        msg?: (string|null);
    }

    /** Represents an ErrorMsg. */
    class ErrorMsg implements IErrorMsg {

        /**
         * Constructs a new ErrorMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: error.IErrorMsg);

        /** ErrorMsg errorType. */
        public errorType: number;

        /** ErrorMsg errorSubType. */
        public errorSubType: number;

        /** ErrorMsg code. */
        public code: number;

        /** ErrorMsg msg. */
        public msg: string;

        /**
         * Creates a new ErrorMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorMsg instance
         */
        public static create(properties?: error.IErrorMsg): error.ErrorMsg;

        /**
         * Encodes the specified ErrorMsg message. Does not implicitly {@link error.ErrorMsg.verify|verify} messages.
         * @param message ErrorMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: error.IErrorMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorMsg message, length delimited. Does not implicitly {@link error.ErrorMsg.verify|verify} messages.
         * @param message ErrorMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: error.IErrorMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): error.ErrorMsg;

        /**
         * Decodes an ErrorMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): error.ErrorMsg;

        /**
         * Verifies an ErrorMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorMsg
         */
        public static fromObject(object: { [k: string]: any }): error.ErrorMsg;

        /**
         * Creates a plain object from an ErrorMsg message. Also converts values to other types if specified.
         * @param message ErrorMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: error.ErrorMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ErrorMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a HeartBeatMsg. */
export interface IHeartBeatMsg {

    /** HeartBeatMsg serviceTime */
    serviceTime?: (number|Long|null);
}

/** Represents a HeartBeatMsg. */
export class HeartBeatMsg implements IHeartBeatMsg {

    /**
     * Constructs a new HeartBeatMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartBeatMsg);

    /** HeartBeatMsg serviceTime. */
    public serviceTime: (number|Long);

    /**
     * Creates a new HeartBeatMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartBeatMsg instance
     */
    public static create(properties?: IHeartBeatMsg): HeartBeatMsg;

    /**
     * Encodes the specified HeartBeatMsg message. Does not implicitly {@link HeartBeatMsg.verify|verify} messages.
     * @param message HeartBeatMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartBeatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HeartBeatMsg message, length delimited. Does not implicitly {@link HeartBeatMsg.verify|verify} messages.
     * @param message HeartBeatMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartBeatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeartBeatMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartBeatMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeartBeatMsg;

    /**
     * Decodes a HeartBeatMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartBeatMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeartBeatMsg;

    /**
     * Verifies a HeartBeatMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HeartBeatMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartBeatMsg
     */
    public static fromObject(object: { [k: string]: any }): HeartBeatMsg;

    /**
     * Creates a plain object from a HeartBeatMsg message. Also converts values to other types if specified.
     * @param message HeartBeatMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HeartBeatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HeartBeatMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HeartBeatMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Namespace playerHero. */
export namespace playerHero {

    /** Properties of a GetHeroMsg. */
    interface IGetHeroMsg {
    }

    /** Represents a GetHeroMsg. */
    class GetHeroMsg implements IGetHeroMsg {

        /**
         * Constructs a new GetHeroMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IGetHeroMsg);

        /**
         * Creates a new GetHeroMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetHeroMsg instance
         */
        public static create(properties?: playerHero.IGetHeroMsg): playerHero.GetHeroMsg;

        /**
         * Encodes the specified GetHeroMsg message. Does not implicitly {@link playerHero.GetHeroMsg.verify|verify} messages.
         * @param message GetHeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IGetHeroMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetHeroMsg message, length delimited. Does not implicitly {@link playerHero.GetHeroMsg.verify|verify} messages.
         * @param message GetHeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IGetHeroMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetHeroMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.GetHeroMsg;

        /**
         * Decodes a GetHeroMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.GetHeroMsg;

        /**
         * Verifies a GetHeroMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetHeroMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetHeroMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.GetHeroMsg;

        /**
         * Creates a plain object from a GetHeroMsg message. Also converts values to other types if specified.
         * @param message GetHeroMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.GetHeroMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetHeroMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetHeroMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroListMsg. */
    interface IHeroListMsg {

        /** HeroListMsg heroList */
        heroList?: (playerHero.IHeroMsg[]|null);
    }

    /** Represents a HeroListMsg. */
    class HeroListMsg implements IHeroListMsg {

        /**
         * Constructs a new HeroListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroListMsg);

        /** HeroListMsg heroList. */
        public heroList: playerHero.IHeroMsg[];

        /**
         * Creates a new HeroListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroListMsg instance
         */
        public static create(properties?: playerHero.IHeroListMsg): playerHero.HeroListMsg;

        /**
         * Encodes the specified HeroListMsg message. Does not implicitly {@link playerHero.HeroListMsg.verify|verify} messages.
         * @param message HeroListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroListMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroListMsg message, length delimited. Does not implicitly {@link playerHero.HeroListMsg.verify|verify} messages.
         * @param message HeroListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroListMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroListMsg;

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroListMsg;

        /**
         * Verifies a HeroListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroListMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroListMsg;

        /**
         * Creates a plain object from a HeroListMsg message. Also converts values to other types if specified.
         * @param message HeroListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroListMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroListMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddHeroMsg. */
    interface IAddHeroMsg {

        /** AddHeroMsg heroMsg */
        heroMsg?: (playerHero.IHeroMsg[]|null);
    }

    /** Represents an AddHeroMsg. */
    class AddHeroMsg implements IAddHeroMsg {

        /**
         * Constructs a new AddHeroMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IAddHeroMsg);

        /** AddHeroMsg heroMsg. */
        public heroMsg: playerHero.IHeroMsg[];

        /**
         * Creates a new AddHeroMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddHeroMsg instance
         */
        public static create(properties?: playerHero.IAddHeroMsg): playerHero.AddHeroMsg;

        /**
         * Encodes the specified AddHeroMsg message. Does not implicitly {@link playerHero.AddHeroMsg.verify|verify} messages.
         * @param message AddHeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IAddHeroMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddHeroMsg message, length delimited. Does not implicitly {@link playerHero.AddHeroMsg.verify|verify} messages.
         * @param message AddHeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IAddHeroMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddHeroMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.AddHeroMsg;

        /**
         * Decodes an AddHeroMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.AddHeroMsg;

        /**
         * Verifies an AddHeroMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddHeroMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddHeroMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.AddHeroMsg;

        /**
         * Creates a plain object from an AddHeroMsg message. Also converts values to other types if specified.
         * @param message AddHeroMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.AddHeroMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddHeroMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddHeroMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DelHeroMsg. */
    interface IDelHeroMsg {

        /** DelHeroMsg id */
        id?: (number[]|null);
    }

    /** Represents a DelHeroMsg. */
    class DelHeroMsg implements IDelHeroMsg {

        /**
         * Constructs a new DelHeroMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IDelHeroMsg);

        /** DelHeroMsg id. */
        public id: number[];

        /**
         * Creates a new DelHeroMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelHeroMsg instance
         */
        public static create(properties?: playerHero.IDelHeroMsg): playerHero.DelHeroMsg;

        /**
         * Encodes the specified DelHeroMsg message. Does not implicitly {@link playerHero.DelHeroMsg.verify|verify} messages.
         * @param message DelHeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IDelHeroMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelHeroMsg message, length delimited. Does not implicitly {@link playerHero.DelHeroMsg.verify|verify} messages.
         * @param message DelHeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IDelHeroMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelHeroMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.DelHeroMsg;

        /**
         * Decodes a DelHeroMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelHeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.DelHeroMsg;

        /**
         * Verifies a DelHeroMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelHeroMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelHeroMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.DelHeroMsg;

        /**
         * Creates a plain object from a DelHeroMsg message. Also converts values to other types if specified.
         * @param message DelHeroMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.DelHeroMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelHeroMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DelHeroMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyAttrMsg. */
    interface INotifyAttrMsg {

        /** NotifyAttrMsg id */
        id?: (number|null);

        /** NotifyAttrMsg attrMsg */
        attrMsg?: (playerHero.IAttrMsg[]|null);
    }

    /** Represents a NotifyAttrMsg. */
    class NotifyAttrMsg implements INotifyAttrMsg {

        /**
         * Constructs a new NotifyAttrMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.INotifyAttrMsg);

        /** NotifyAttrMsg id. */
        public id: number;

        /** NotifyAttrMsg attrMsg. */
        public attrMsg: playerHero.IAttrMsg[];

        /**
         * Creates a new NotifyAttrMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyAttrMsg instance
         */
        public static create(properties?: playerHero.INotifyAttrMsg): playerHero.NotifyAttrMsg;

        /**
         * Encodes the specified NotifyAttrMsg message. Does not implicitly {@link playerHero.NotifyAttrMsg.verify|verify} messages.
         * @param message NotifyAttrMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.INotifyAttrMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyAttrMsg message, length delimited. Does not implicitly {@link playerHero.NotifyAttrMsg.verify|verify} messages.
         * @param message NotifyAttrMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.INotifyAttrMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyAttrMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyAttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.NotifyAttrMsg;

        /**
         * Decodes a NotifyAttrMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyAttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.NotifyAttrMsg;

        /**
         * Verifies a NotifyAttrMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyAttrMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyAttrMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.NotifyAttrMsg;

        /**
         * Creates a plain object from a NotifyAttrMsg message. Also converts values to other types if specified.
         * @param message NotifyAttrMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.NotifyAttrMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyAttrMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyAttrMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroUpLvReqMsg. */
    interface IHeroUpLvReqMsg {

        /** HeroUpLvReqMsg id */
        id?: (number|null);
    }

    /** Represents a HeroUpLvReqMsg. */
    class HeroUpLvReqMsg implements IHeroUpLvReqMsg {

        /**
         * Constructs a new HeroUpLvReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroUpLvReqMsg);

        /** HeroUpLvReqMsg id. */
        public id: number;

        /**
         * Creates a new HeroUpLvReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroUpLvReqMsg instance
         */
        public static create(properties?: playerHero.IHeroUpLvReqMsg): playerHero.HeroUpLvReqMsg;

        /**
         * Encodes the specified HeroUpLvReqMsg message. Does not implicitly {@link playerHero.HeroUpLvReqMsg.verify|verify} messages.
         * @param message HeroUpLvReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroUpLvReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroUpLvReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpLvReqMsg.verify|verify} messages.
         * @param message HeroUpLvReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroUpLvReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroUpLvReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpLvReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroUpLvReqMsg;

        /**
         * Decodes a HeroUpLvReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroUpLvReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroUpLvReqMsg;

        /**
         * Verifies a HeroUpLvReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroUpLvReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpLvReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroUpLvReqMsg;

        /**
         * Creates a plain object from a HeroUpLvReqMsg message. Also converts values to other types if specified.
         * @param message HeroUpLvReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroUpLvReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpLvReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroUpLvReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroUpLvResMsg. */
    interface IHeroUpLvResMsg {

        /** HeroUpLvResMsg hero */
        hero?: (playerHero.IHeroMsg|null);
    }

    /** Represents a HeroUpLvResMsg. */
    class HeroUpLvResMsg implements IHeroUpLvResMsg {

        /**
         * Constructs a new HeroUpLvResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroUpLvResMsg);

        /** HeroUpLvResMsg hero. */
        public hero?: (playerHero.IHeroMsg|null);

        /**
         * Creates a new HeroUpLvResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroUpLvResMsg instance
         */
        public static create(properties?: playerHero.IHeroUpLvResMsg): playerHero.HeroUpLvResMsg;

        /**
         * Encodes the specified HeroUpLvResMsg message. Does not implicitly {@link playerHero.HeroUpLvResMsg.verify|verify} messages.
         * @param message HeroUpLvResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroUpLvResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroUpLvResMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpLvResMsg.verify|verify} messages.
         * @param message HeroUpLvResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroUpLvResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroUpLvResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpLvResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroUpLvResMsg;

        /**
         * Decodes a HeroUpLvResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroUpLvResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroUpLvResMsg;

        /**
         * Verifies a HeroUpLvResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroUpLvResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpLvResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroUpLvResMsg;

        /**
         * Creates a plain object from a HeroUpLvResMsg message. Also converts values to other types if specified.
         * @param message HeroUpLvResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroUpLvResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpLvResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroUpLvResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroUpStarReqMsg. */
    interface IHeroUpStarReqMsg {

        /** HeroUpStarReqMsg id */
        id?: (number|null);

        /** HeroUpStarReqMsg useHeroId */
        useHeroId?: (number[]|null);
    }

    /** Represents a HeroUpStarReqMsg. */
    class HeroUpStarReqMsg implements IHeroUpStarReqMsg {

        /**
         * Constructs a new HeroUpStarReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroUpStarReqMsg);

        /** HeroUpStarReqMsg id. */
        public id: number;

        /** HeroUpStarReqMsg useHeroId. */
        public useHeroId: number[];

        /**
         * Creates a new HeroUpStarReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroUpStarReqMsg instance
         */
        public static create(properties?: playerHero.IHeroUpStarReqMsg): playerHero.HeroUpStarReqMsg;

        /**
         * Encodes the specified HeroUpStarReqMsg message. Does not implicitly {@link playerHero.HeroUpStarReqMsg.verify|verify} messages.
         * @param message HeroUpStarReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroUpStarReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroUpStarReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpStarReqMsg.verify|verify} messages.
         * @param message HeroUpStarReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroUpStarReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroUpStarReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpStarReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroUpStarReqMsg;

        /**
         * Decodes a HeroUpStarReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroUpStarReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroUpStarReqMsg;

        /**
         * Verifies a HeroUpStarReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroUpStarReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpStarReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroUpStarReqMsg;

        /**
         * Creates a plain object from a HeroUpStarReqMsg message. Also converts values to other types if specified.
         * @param message HeroUpStarReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroUpStarReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpStarReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroUpStarReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroUpStarResMsg. */
    interface IHeroUpStarResMsg {

        /** HeroUpStarResMsg hero */
        hero?: (playerHero.IHeroMsg|null);
    }

    /** Represents a HeroUpStarResMsg. */
    class HeroUpStarResMsg implements IHeroUpStarResMsg {

        /**
         * Constructs a new HeroUpStarResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroUpStarResMsg);

        /** HeroUpStarResMsg hero. */
        public hero?: (playerHero.IHeroMsg|null);

        /**
         * Creates a new HeroUpStarResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroUpStarResMsg instance
         */
        public static create(properties?: playerHero.IHeroUpStarResMsg): playerHero.HeroUpStarResMsg;

        /**
         * Encodes the specified HeroUpStarResMsg message. Does not implicitly {@link playerHero.HeroUpStarResMsg.verify|verify} messages.
         * @param message HeroUpStarResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroUpStarResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroUpStarResMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpStarResMsg.verify|verify} messages.
         * @param message HeroUpStarResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroUpStarResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroUpStarResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpStarResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroUpStarResMsg;

        /**
         * Decodes a HeroUpStarResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroUpStarResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroUpStarResMsg;

        /**
         * Verifies a HeroUpStarResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroUpStarResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpStarResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroUpStarResMsg;

        /**
         * Creates a plain object from a HeroUpStarResMsg message. Also converts values to other types if specified.
         * @param message HeroUpStarResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroUpStarResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpStarResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroUpStarResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroUpTalentReqMsg. */
    interface IHeroUpTalentReqMsg {

        /** HeroUpTalentReqMsg heroId */
        heroId?: (number|null);

        /** HeroUpTalentReqMsg talentId */
        talentId?: (number|null);
    }

    /** Represents a HeroUpTalentReqMsg. */
    class HeroUpTalentReqMsg implements IHeroUpTalentReqMsg {

        /**
         * Constructs a new HeroUpTalentReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroUpTalentReqMsg);

        /** HeroUpTalentReqMsg heroId. */
        public heroId: number;

        /** HeroUpTalentReqMsg talentId. */
        public talentId: number;

        /**
         * Creates a new HeroUpTalentReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroUpTalentReqMsg instance
         */
        public static create(properties?: playerHero.IHeroUpTalentReqMsg): playerHero.HeroUpTalentReqMsg;

        /**
         * Encodes the specified HeroUpTalentReqMsg message. Does not implicitly {@link playerHero.HeroUpTalentReqMsg.verify|verify} messages.
         * @param message HeroUpTalentReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroUpTalentReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroUpTalentReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpTalentReqMsg.verify|verify} messages.
         * @param message HeroUpTalentReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroUpTalentReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroUpTalentReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpTalentReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroUpTalentReqMsg;

        /**
         * Decodes a HeroUpTalentReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroUpTalentReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroUpTalentReqMsg;

        /**
         * Verifies a HeroUpTalentReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroUpTalentReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpTalentReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroUpTalentReqMsg;

        /**
         * Creates a plain object from a HeroUpTalentReqMsg message. Also converts values to other types if specified.
         * @param message HeroUpTalentReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroUpTalentReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpTalentReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroUpTalentReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroUpTalentResMsg. */
    interface IHeroUpTalentResMsg {

        /** HeroUpTalentResMsg hero */
        hero?: (playerHero.IHeroMsg|null);
    }

    /** Represents a HeroUpTalentResMsg. */
    class HeroUpTalentResMsg implements IHeroUpTalentResMsg {

        /**
         * Constructs a new HeroUpTalentResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroUpTalentResMsg);

        /** HeroUpTalentResMsg hero. */
        public hero?: (playerHero.IHeroMsg|null);

        /**
         * Creates a new HeroUpTalentResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroUpTalentResMsg instance
         */
        public static create(properties?: playerHero.IHeroUpTalentResMsg): playerHero.HeroUpTalentResMsg;

        /**
         * Encodes the specified HeroUpTalentResMsg message. Does not implicitly {@link playerHero.HeroUpTalentResMsg.verify|verify} messages.
         * @param message HeroUpTalentResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroUpTalentResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroUpTalentResMsg message, length delimited. Does not implicitly {@link playerHero.HeroUpTalentResMsg.verify|verify} messages.
         * @param message HeroUpTalentResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroUpTalentResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroUpTalentResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroUpTalentResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroUpTalentResMsg;

        /**
         * Decodes a HeroUpTalentResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroUpTalentResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroUpTalentResMsg;

        /**
         * Verifies a HeroUpTalentResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroUpTalentResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroUpTalentResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroUpTalentResMsg;

        /**
         * Creates a plain object from a HeroUpTalentResMsg message. Also converts values to other types if specified.
         * @param message HeroUpTalentResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroUpTalentResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroUpTalentResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroUpTalentResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroEquipWearReqMsg. */
    interface IHeroEquipWearReqMsg {

        /** HeroEquipWearReqMsg heroId */
        heroId?: (number|null);

        /** HeroEquipWearReqMsg equipId */
        equipId?: (number|null);
    }

    /** Represents a HeroEquipWearReqMsg. */
    class HeroEquipWearReqMsg implements IHeroEquipWearReqMsg {

        /**
         * Constructs a new HeroEquipWearReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroEquipWearReqMsg);

        /** HeroEquipWearReqMsg heroId. */
        public heroId: number;

        /** HeroEquipWearReqMsg equipId. */
        public equipId: number;

        /**
         * Creates a new HeroEquipWearReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroEquipWearReqMsg instance
         */
        public static create(properties?: playerHero.IHeroEquipWearReqMsg): playerHero.HeroEquipWearReqMsg;

        /**
         * Encodes the specified HeroEquipWearReqMsg message. Does not implicitly {@link playerHero.HeroEquipWearReqMsg.verify|verify} messages.
         * @param message HeroEquipWearReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroEquipWearReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroEquipWearReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipWearReqMsg.verify|verify} messages.
         * @param message HeroEquipWearReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroEquipWearReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroEquipWearReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipWearReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroEquipWearReqMsg;

        /**
         * Decodes a HeroEquipWearReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroEquipWearReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroEquipWearReqMsg;

        /**
         * Verifies a HeroEquipWearReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroEquipWearReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipWearReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroEquipWearReqMsg;

        /**
         * Creates a plain object from a HeroEquipWearReqMsg message. Also converts values to other types if specified.
         * @param message HeroEquipWearReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroEquipWearReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipWearReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroEquipWearReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroEquipWearResMsg. */
    interface IHeroEquipWearResMsg {

        /** HeroEquipWearResMsg HeroMsg */
        HeroMsg?: (playerHero.IHeroMsg|null);
    }

    /** Represents a HeroEquipWearResMsg. */
    class HeroEquipWearResMsg implements IHeroEquipWearResMsg {

        /**
         * Constructs a new HeroEquipWearResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroEquipWearResMsg);

        /** HeroEquipWearResMsg HeroMsg. */
        public HeroMsg?: (playerHero.IHeroMsg|null);

        /**
         * Creates a new HeroEquipWearResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroEquipWearResMsg instance
         */
        public static create(properties?: playerHero.IHeroEquipWearResMsg): playerHero.HeroEquipWearResMsg;

        /**
         * Encodes the specified HeroEquipWearResMsg message. Does not implicitly {@link playerHero.HeroEquipWearResMsg.verify|verify} messages.
         * @param message HeroEquipWearResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroEquipWearResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroEquipWearResMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipWearResMsg.verify|verify} messages.
         * @param message HeroEquipWearResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroEquipWearResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroEquipWearResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipWearResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroEquipWearResMsg;

        /**
         * Decodes a HeroEquipWearResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroEquipWearResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroEquipWearResMsg;

        /**
         * Verifies a HeroEquipWearResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroEquipWearResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipWearResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroEquipWearResMsg;

        /**
         * Creates a plain object from a HeroEquipWearResMsg message. Also converts values to other types if specified.
         * @param message HeroEquipWearResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroEquipWearResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipWearResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroEquipWearResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroEquipUpLvReqMsg. */
    interface IHeroEquipUpLvReqMsg {

        /** HeroEquipUpLvReqMsg heroId */
        heroId?: (number|null);

        /** HeroEquipUpLvReqMsg pos */
        pos?: (number|null);

        /** HeroEquipUpLvReqMsg useEquip */
        useEquip?: ({ [k: string]: number }|null);
    }

    /** Represents a HeroEquipUpLvReqMsg. */
    class HeroEquipUpLvReqMsg implements IHeroEquipUpLvReqMsg {

        /**
         * Constructs a new HeroEquipUpLvReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroEquipUpLvReqMsg);

        /** HeroEquipUpLvReqMsg heroId. */
        public heroId: number;

        /** HeroEquipUpLvReqMsg pos. */
        public pos: number;

        /** HeroEquipUpLvReqMsg useEquip. */
        public useEquip: { [k: string]: number };

        /**
         * Creates a new HeroEquipUpLvReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroEquipUpLvReqMsg instance
         */
        public static create(properties?: playerHero.IHeroEquipUpLvReqMsg): playerHero.HeroEquipUpLvReqMsg;

        /**
         * Encodes the specified HeroEquipUpLvReqMsg message. Does not implicitly {@link playerHero.HeroEquipUpLvReqMsg.verify|verify} messages.
         * @param message HeroEquipUpLvReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroEquipUpLvReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroEquipUpLvReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipUpLvReqMsg.verify|verify} messages.
         * @param message HeroEquipUpLvReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroEquipUpLvReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroEquipUpLvReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipUpLvReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroEquipUpLvReqMsg;

        /**
         * Decodes a HeroEquipUpLvReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroEquipUpLvReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroEquipUpLvReqMsg;

        /**
         * Verifies a HeroEquipUpLvReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroEquipUpLvReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipUpLvReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroEquipUpLvReqMsg;

        /**
         * Creates a plain object from a HeroEquipUpLvReqMsg message. Also converts values to other types if specified.
         * @param message HeroEquipUpLvReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroEquipUpLvReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipUpLvReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroEquipUpLvReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroEquipUpLvResMsg. */
    interface IHeroEquipUpLvResMsg {

        /** HeroEquipUpLvResMsg heroMsg */
        heroMsg?: (playerHero.IHeroMsg|null);
    }

    /** Represents a HeroEquipUpLvResMsg. */
    class HeroEquipUpLvResMsg implements IHeroEquipUpLvResMsg {

        /**
         * Constructs a new HeroEquipUpLvResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroEquipUpLvResMsg);

        /** HeroEquipUpLvResMsg heroMsg. */
        public heroMsg?: (playerHero.IHeroMsg|null);

        /**
         * Creates a new HeroEquipUpLvResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroEquipUpLvResMsg instance
         */
        public static create(properties?: playerHero.IHeroEquipUpLvResMsg): playerHero.HeroEquipUpLvResMsg;

        /**
         * Encodes the specified HeroEquipUpLvResMsg message. Does not implicitly {@link playerHero.HeroEquipUpLvResMsg.verify|verify} messages.
         * @param message HeroEquipUpLvResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroEquipUpLvResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroEquipUpLvResMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipUpLvResMsg.verify|verify} messages.
         * @param message HeroEquipUpLvResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroEquipUpLvResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroEquipUpLvResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipUpLvResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroEquipUpLvResMsg;

        /**
         * Decodes a HeroEquipUpLvResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroEquipUpLvResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroEquipUpLvResMsg;

        /**
         * Verifies a HeroEquipUpLvResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroEquipUpLvResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipUpLvResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroEquipUpLvResMsg;

        /**
         * Creates a plain object from a HeroEquipUpLvResMsg message. Also converts values to other types if specified.
         * @param message HeroEquipUpLvResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroEquipUpLvResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipUpLvResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroEquipUpLvResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroEquipUnloadReqMsg. */
    interface IHeroEquipUnloadReqMsg {

        /** HeroEquipUnloadReqMsg heroId */
        heroId?: (number|null);

        /** HeroEquipUnloadReqMsg pos */
        pos?: (number|null);
    }

    /** Represents a HeroEquipUnloadReqMsg. */
    class HeroEquipUnloadReqMsg implements IHeroEquipUnloadReqMsg {

        /**
         * Constructs a new HeroEquipUnloadReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroEquipUnloadReqMsg);

        /** HeroEquipUnloadReqMsg heroId. */
        public heroId: number;

        /** HeroEquipUnloadReqMsg pos. */
        public pos: number;

        /**
         * Creates a new HeroEquipUnloadReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroEquipUnloadReqMsg instance
         */
        public static create(properties?: playerHero.IHeroEquipUnloadReqMsg): playerHero.HeroEquipUnloadReqMsg;

        /**
         * Encodes the specified HeroEquipUnloadReqMsg message. Does not implicitly {@link playerHero.HeroEquipUnloadReqMsg.verify|verify} messages.
         * @param message HeroEquipUnloadReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroEquipUnloadReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroEquipUnloadReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipUnloadReqMsg.verify|verify} messages.
         * @param message HeroEquipUnloadReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroEquipUnloadReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroEquipUnloadReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipUnloadReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroEquipUnloadReqMsg;

        /**
         * Decodes a HeroEquipUnloadReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroEquipUnloadReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroEquipUnloadReqMsg;

        /**
         * Verifies a HeroEquipUnloadReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroEquipUnloadReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipUnloadReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroEquipUnloadReqMsg;

        /**
         * Creates a plain object from a HeroEquipUnloadReqMsg message. Also converts values to other types if specified.
         * @param message HeroEquipUnloadReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroEquipUnloadReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipUnloadReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroEquipUnloadReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroEquipUnloadResMsg. */
    interface IHeroEquipUnloadResMsg {

        /** HeroEquipUnloadResMsg heroMsg */
        heroMsg?: (playerHero.IHeroMsg|null);
    }

    /** Represents a HeroEquipUnloadResMsg. */
    class HeroEquipUnloadResMsg implements IHeroEquipUnloadResMsg {

        /**
         * Constructs a new HeroEquipUnloadResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroEquipUnloadResMsg);

        /** HeroEquipUnloadResMsg heroMsg. */
        public heroMsg?: (playerHero.IHeroMsg|null);

        /**
         * Creates a new HeroEquipUnloadResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroEquipUnloadResMsg instance
         */
        public static create(properties?: playerHero.IHeroEquipUnloadResMsg): playerHero.HeroEquipUnloadResMsg;

        /**
         * Encodes the specified HeroEquipUnloadResMsg message. Does not implicitly {@link playerHero.HeroEquipUnloadResMsg.verify|verify} messages.
         * @param message HeroEquipUnloadResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroEquipUnloadResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroEquipUnloadResMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipUnloadResMsg.verify|verify} messages.
         * @param message HeroEquipUnloadResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroEquipUnloadResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroEquipUnloadResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipUnloadResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroEquipUnloadResMsg;

        /**
         * Decodes a HeroEquipUnloadResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroEquipUnloadResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroEquipUnloadResMsg;

        /**
         * Verifies a HeroEquipUnloadResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroEquipUnloadResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipUnloadResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroEquipUnloadResMsg;

        /**
         * Creates a plain object from a HeroEquipUnloadResMsg message. Also converts values to other types if specified.
         * @param message HeroEquipUnloadResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroEquipUnloadResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipUnloadResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroEquipUnloadResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroEquipReplaceReqMsg. */
    interface IHeroEquipReplaceReqMsg {

        /** HeroEquipReplaceReqMsg targetHeroId */
        targetHeroId?: (number|null);

        /** HeroEquipReplaceReqMsg sourceHeroId */
        sourceHeroId?: (number|null);

        /** HeroEquipReplaceReqMsg pos */
        pos?: (number|null);
    }

    /** Represents a HeroEquipReplaceReqMsg. */
    class HeroEquipReplaceReqMsg implements IHeroEquipReplaceReqMsg {

        /**
         * Constructs a new HeroEquipReplaceReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroEquipReplaceReqMsg);

        /** HeroEquipReplaceReqMsg targetHeroId. */
        public targetHeroId: number;

        /** HeroEquipReplaceReqMsg sourceHeroId. */
        public sourceHeroId: number;

        /** HeroEquipReplaceReqMsg pos. */
        public pos: number;

        /**
         * Creates a new HeroEquipReplaceReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroEquipReplaceReqMsg instance
         */
        public static create(properties?: playerHero.IHeroEquipReplaceReqMsg): playerHero.HeroEquipReplaceReqMsg;

        /**
         * Encodes the specified HeroEquipReplaceReqMsg message. Does not implicitly {@link playerHero.HeroEquipReplaceReqMsg.verify|verify} messages.
         * @param message HeroEquipReplaceReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroEquipReplaceReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroEquipReplaceReqMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipReplaceReqMsg.verify|verify} messages.
         * @param message HeroEquipReplaceReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroEquipReplaceReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroEquipReplaceReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipReplaceReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroEquipReplaceReqMsg;

        /**
         * Decodes a HeroEquipReplaceReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroEquipReplaceReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroEquipReplaceReqMsg;

        /**
         * Verifies a HeroEquipReplaceReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroEquipReplaceReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipReplaceReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroEquipReplaceReqMsg;

        /**
         * Creates a plain object from a HeroEquipReplaceReqMsg message. Also converts values to other types if specified.
         * @param message HeroEquipReplaceReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroEquipReplaceReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipReplaceReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroEquipReplaceReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroEquipReplaceResMsg. */
    interface IHeroEquipReplaceResMsg {

        /** HeroEquipReplaceResMsg heroMsg */
        heroMsg?: (playerHero.IHeroMsg[]|null);
    }

    /** Represents a HeroEquipReplaceResMsg. */
    class HeroEquipReplaceResMsg implements IHeroEquipReplaceResMsg {

        /**
         * Constructs a new HeroEquipReplaceResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroEquipReplaceResMsg);

        /** HeroEquipReplaceResMsg heroMsg. */
        public heroMsg: playerHero.IHeroMsg[];

        /**
         * Creates a new HeroEquipReplaceResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroEquipReplaceResMsg instance
         */
        public static create(properties?: playerHero.IHeroEquipReplaceResMsg): playerHero.HeroEquipReplaceResMsg;

        /**
         * Encodes the specified HeroEquipReplaceResMsg message. Does not implicitly {@link playerHero.HeroEquipReplaceResMsg.verify|verify} messages.
         * @param message HeroEquipReplaceResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroEquipReplaceResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroEquipReplaceResMsg message, length delimited. Does not implicitly {@link playerHero.HeroEquipReplaceResMsg.verify|verify} messages.
         * @param message HeroEquipReplaceResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroEquipReplaceResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroEquipReplaceResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroEquipReplaceResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroEquipReplaceResMsg;

        /**
         * Decodes a HeroEquipReplaceResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroEquipReplaceResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroEquipReplaceResMsg;

        /**
         * Verifies a HeroEquipReplaceResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroEquipReplaceResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroEquipReplaceResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroEquipReplaceResMsg;

        /**
         * Creates a plain object from a HeroEquipReplaceResMsg message. Also converts values to other types if specified.
         * @param message HeroEquipReplaceResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroEquipReplaceResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroEquipReplaceResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroEquipReplaceResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroMsg. */
    interface IHeroMsg {

        /** HeroMsg id */
        id?: (number|null);

        /** HeroMsg heroId */
        heroId?: (number|null);

        /** HeroMsg lv */
        lv?: (number|null);

        /** HeroMsg star */
        star?: (number|null);

        /** HeroMsg quality */
        quality?: (number|null);

        /** HeroMsg attrMsg */
        attrMsg?: (playerHero.IAttrMsg[]|null);

        /** HeroMsg equipMsg */
        equipMsg?: (playerEquip.IEquipMsg[]|null);

        /** HeroMsg talent */
        talent?: ({ [k: string]: number }|null);
    }

    /** Represents a HeroMsg. */
    class HeroMsg implements IHeroMsg {

        /**
         * Constructs a new HeroMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IHeroMsg);

        /** HeroMsg id. */
        public id: number;

        /** HeroMsg heroId. */
        public heroId: number;

        /** HeroMsg lv. */
        public lv: number;

        /** HeroMsg star. */
        public star: number;

        /** HeroMsg quality. */
        public quality: number;

        /** HeroMsg attrMsg. */
        public attrMsg: playerHero.IAttrMsg[];

        /** HeroMsg equipMsg. */
        public equipMsg: playerEquip.IEquipMsg[];

        /** HeroMsg talent. */
        public talent: { [k: string]: number };

        /**
         * Creates a new HeroMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroMsg instance
         */
        public static create(properties?: playerHero.IHeroMsg): playerHero.HeroMsg;

        /**
         * Encodes the specified HeroMsg message. Does not implicitly {@link playerHero.HeroMsg.verify|verify} messages.
         * @param message HeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IHeroMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroMsg message, length delimited. Does not implicitly {@link playerHero.HeroMsg.verify|verify} messages.
         * @param message HeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IHeroMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.HeroMsg;

        /**
         * Decodes a HeroMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.HeroMsg;

        /**
         * Verifies a HeroMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.HeroMsg;

        /**
         * Creates a plain object from a HeroMsg message. Also converts values to other types if specified.
         * @param message HeroMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.HeroMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AttrMsg. */
    interface IAttrMsg {

        /** AttrMsg type */
        type?: (number|null);

        /** AttrMsg totalVal */
        totalVal?: (number|null);
    }

    /** Represents an AttrMsg. */
    class AttrMsg implements IAttrMsg {

        /**
         * Constructs a new AttrMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerHero.IAttrMsg);

        /** AttrMsg type. */
        public type: number;

        /** AttrMsg totalVal. */
        public totalVal: number;

        /**
         * Creates a new AttrMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttrMsg instance
         */
        public static create(properties?: playerHero.IAttrMsg): playerHero.AttrMsg;

        /**
         * Encodes the specified AttrMsg message. Does not implicitly {@link playerHero.AttrMsg.verify|verify} messages.
         * @param message AttrMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerHero.IAttrMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrMsg message, length delimited. Does not implicitly {@link playerHero.AttrMsg.verify|verify} messages.
         * @param message AttrMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerHero.IAttrMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerHero.AttrMsg;

        /**
         * Decodes an AttrMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerHero.AttrMsg;

        /**
         * Verifies an AttrMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttrMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttrMsg
         */
        public static fromObject(object: { [k: string]: any }): playerHero.AttrMsg;

        /**
         * Creates a plain object from an AttrMsg message. Also converts values to other types if specified.
         * @param message AttrMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerHero.AttrMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AttrMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace playerEquip. */
export namespace playerEquip {

    /** Properties of a GetEquipMsg. */
    interface IGetEquipMsg {
    }

    /** Represents a GetEquipMsg. */
    class GetEquipMsg implements IGetEquipMsg {

        /**
         * Constructs a new GetEquipMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerEquip.IGetEquipMsg);

        /**
         * Creates a new GetEquipMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEquipMsg instance
         */
        public static create(properties?: playerEquip.IGetEquipMsg): playerEquip.GetEquipMsg;

        /**
         * Encodes the specified GetEquipMsg message. Does not implicitly {@link playerEquip.GetEquipMsg.verify|verify} messages.
         * @param message GetEquipMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerEquip.IGetEquipMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEquipMsg message, length delimited. Does not implicitly {@link playerEquip.GetEquipMsg.verify|verify} messages.
         * @param message GetEquipMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerEquip.IGetEquipMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEquipMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerEquip.GetEquipMsg;

        /**
         * Decodes a GetEquipMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerEquip.GetEquipMsg;

        /**
         * Verifies a GetEquipMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEquipMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEquipMsg
         */
        public static fromObject(object: { [k: string]: any }): playerEquip.GetEquipMsg;

        /**
         * Creates a plain object from a GetEquipMsg message. Also converts values to other types if specified.
         * @param message GetEquipMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerEquip.GetEquipMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEquipMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetEquipMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EquipListMsg. */
    interface IEquipListMsg {

        /** EquipListMsg equipList */
        equipList?: (playerEquip.IEquipMsg[]|null);
    }

    /** Represents an EquipListMsg. */
    class EquipListMsg implements IEquipListMsg {

        /**
         * Constructs a new EquipListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerEquip.IEquipListMsg);

        /** EquipListMsg equipList. */
        public equipList: playerEquip.IEquipMsg[];

        /**
         * Creates a new EquipListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipListMsg instance
         */
        public static create(properties?: playerEquip.IEquipListMsg): playerEquip.EquipListMsg;

        /**
         * Encodes the specified EquipListMsg message. Does not implicitly {@link playerEquip.EquipListMsg.verify|verify} messages.
         * @param message EquipListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerEquip.IEquipListMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EquipListMsg message, length delimited. Does not implicitly {@link playerEquip.EquipListMsg.verify|verify} messages.
         * @param message EquipListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerEquip.IEquipListMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerEquip.EquipListMsg;

        /**
         * Decodes an EquipListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerEquip.EquipListMsg;

        /**
         * Verifies an EquipListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipListMsg
         */
        public static fromObject(object: { [k: string]: any }): playerEquip.EquipListMsg;

        /**
         * Creates a plain object from an EquipListMsg message. Also converts values to other types if specified.
         * @param message EquipListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerEquip.EquipListMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EquipListMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EquipMsg. */
    interface IEquipMsg {

        /** EquipMsg id */
        id?: (number|null);

        /** EquipMsg equipId */
        equipId?: (number|null);

        /** EquipMsg num */
        num?: (number|null);

        /** EquipMsg pos */
        pos?: (number|null);

        /** EquipMsg lv */
        lv?: (number|null);

        /** EquipMsg attrMsg */
        attrMsg?: (playerEquip.IAttrMsg[]|null);

        /** EquipMsg exp */
        exp?: (number|null);

        /** EquipMsg currExp */
        currExp?: (number|null);

        /** EquipMsg heroId */
        heroId?: (number|null);

        /** EquipMsg baseAttrMsg */
        baseAttrMsg?: (playerEquip.IAttrMsg[]|null);

        /** EquipMsg exclusiveAttrMsg */
        exclusiveAttrMsg?: (playerEquip.IAttrMsg[]|null);

        /** EquipMsg skillId */
        skillId?: (number[]|null);
    }

    /** Represents an EquipMsg. */
    class EquipMsg implements IEquipMsg {

        /**
         * Constructs a new EquipMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerEquip.IEquipMsg);

        /** EquipMsg id. */
        public id: number;

        /** EquipMsg equipId. */
        public equipId: number;

        /** EquipMsg num. */
        public num: number;

        /** EquipMsg pos. */
        public pos: number;

        /** EquipMsg lv. */
        public lv: number;

        /** EquipMsg attrMsg. */
        public attrMsg: playerEquip.IAttrMsg[];

        /** EquipMsg exp. */
        public exp: number;

        /** EquipMsg currExp. */
        public currExp: number;

        /** EquipMsg heroId. */
        public heroId: number;

        /** EquipMsg baseAttrMsg. */
        public baseAttrMsg: playerEquip.IAttrMsg[];

        /** EquipMsg exclusiveAttrMsg. */
        public exclusiveAttrMsg: playerEquip.IAttrMsg[];

        /** EquipMsg skillId. */
        public skillId: number[];

        /**
         * Creates a new EquipMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipMsg instance
         */
        public static create(properties?: playerEquip.IEquipMsg): playerEquip.EquipMsg;

        /**
         * Encodes the specified EquipMsg message. Does not implicitly {@link playerEquip.EquipMsg.verify|verify} messages.
         * @param message EquipMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerEquip.IEquipMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EquipMsg message, length delimited. Does not implicitly {@link playerEquip.EquipMsg.verify|verify} messages.
         * @param message EquipMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerEquip.IEquipMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerEquip.EquipMsg;

        /**
         * Decodes an EquipMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerEquip.EquipMsg;

        /**
         * Verifies an EquipMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipMsg
         */
        public static fromObject(object: { [k: string]: any }): playerEquip.EquipMsg;

        /**
         * Creates a plain object from an EquipMsg message. Also converts values to other types if specified.
         * @param message EquipMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerEquip.EquipMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EquipMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EquipAddNotifyMsg. */
    interface IEquipAddNotifyMsg {

        /** EquipAddNotifyMsg itemList */
        itemList?: (playerEquip.IEquipMsg[]|null);
    }

    /** Represents an EquipAddNotifyMsg. */
    class EquipAddNotifyMsg implements IEquipAddNotifyMsg {

        /**
         * Constructs a new EquipAddNotifyMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerEquip.IEquipAddNotifyMsg);

        /** EquipAddNotifyMsg itemList. */
        public itemList: playerEquip.IEquipMsg[];

        /**
         * Creates a new EquipAddNotifyMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipAddNotifyMsg instance
         */
        public static create(properties?: playerEquip.IEquipAddNotifyMsg): playerEquip.EquipAddNotifyMsg;

        /**
         * Encodes the specified EquipAddNotifyMsg message. Does not implicitly {@link playerEquip.EquipAddNotifyMsg.verify|verify} messages.
         * @param message EquipAddNotifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerEquip.IEquipAddNotifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EquipAddNotifyMsg message, length delimited. Does not implicitly {@link playerEquip.EquipAddNotifyMsg.verify|verify} messages.
         * @param message EquipAddNotifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerEquip.IEquipAddNotifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipAddNotifyMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipAddNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerEquip.EquipAddNotifyMsg;

        /**
         * Decodes an EquipAddNotifyMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipAddNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerEquip.EquipAddNotifyMsg;

        /**
         * Verifies an EquipAddNotifyMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipAddNotifyMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipAddNotifyMsg
         */
        public static fromObject(object: { [k: string]: any }): playerEquip.EquipAddNotifyMsg;

        /**
         * Creates a plain object from an EquipAddNotifyMsg message. Also converts values to other types if specified.
         * @param message EquipAddNotifyMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerEquip.EquipAddNotifyMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipAddNotifyMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EquipAddNotifyMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EquipDelNotifyMsg. */
    interface IEquipDelNotifyMsg {

        /** EquipDelNotifyMsg delEquip */
        delEquip?: ({ [k: string]: number }|null);
    }

    /** Represents an EquipDelNotifyMsg. */
    class EquipDelNotifyMsg implements IEquipDelNotifyMsg {

        /**
         * Constructs a new EquipDelNotifyMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerEquip.IEquipDelNotifyMsg);

        /** EquipDelNotifyMsg delEquip. */
        public delEquip: { [k: string]: number };

        /**
         * Creates a new EquipDelNotifyMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipDelNotifyMsg instance
         */
        public static create(properties?: playerEquip.IEquipDelNotifyMsg): playerEquip.EquipDelNotifyMsg;

        /**
         * Encodes the specified EquipDelNotifyMsg message. Does not implicitly {@link playerEquip.EquipDelNotifyMsg.verify|verify} messages.
         * @param message EquipDelNotifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerEquip.IEquipDelNotifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EquipDelNotifyMsg message, length delimited. Does not implicitly {@link playerEquip.EquipDelNotifyMsg.verify|verify} messages.
         * @param message EquipDelNotifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerEquip.IEquipDelNotifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipDelNotifyMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipDelNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerEquip.EquipDelNotifyMsg;

        /**
         * Decodes an EquipDelNotifyMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipDelNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerEquip.EquipDelNotifyMsg;

        /**
         * Verifies an EquipDelNotifyMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipDelNotifyMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipDelNotifyMsg
         */
        public static fromObject(object: { [k: string]: any }): playerEquip.EquipDelNotifyMsg;

        /**
         * Creates a plain object from an EquipDelNotifyMsg message. Also converts values to other types if specified.
         * @param message EquipDelNotifyMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerEquip.EquipDelNotifyMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipDelNotifyMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EquipDelNotifyMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AttrMsg. */
    interface IAttrMsg {

        /** AttrMsg type */
        type?: (number|null);

        /** AttrMsg totalVal */
        totalVal?: (number|null);
    }

    /** Represents an AttrMsg. */
    class AttrMsg implements IAttrMsg {

        /**
         * Constructs a new AttrMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerEquip.IAttrMsg);

        /** AttrMsg type. */
        public type: number;

        /** AttrMsg totalVal. */
        public totalVal: number;

        /**
         * Creates a new AttrMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttrMsg instance
         */
        public static create(properties?: playerEquip.IAttrMsg): playerEquip.AttrMsg;

        /**
         * Encodes the specified AttrMsg message. Does not implicitly {@link playerEquip.AttrMsg.verify|verify} messages.
         * @param message AttrMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerEquip.IAttrMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrMsg message, length delimited. Does not implicitly {@link playerEquip.AttrMsg.verify|verify} messages.
         * @param message AttrMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerEquip.IAttrMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerEquip.AttrMsg;

        /**
         * Decodes an AttrMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerEquip.AttrMsg;

        /**
         * Verifies an AttrMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttrMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttrMsg
         */
        public static fromObject(object: { [k: string]: any }): playerEquip.AttrMsg;

        /**
         * Creates a plain object from an AttrMsg message. Also converts values to other types if specified.
         * @param message AttrMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerEquip.AttrMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AttrMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a MessageMsg. */
export interface IMessageMsg {

    /** MessageMsg title */
    title?: (string|null);

    /** MessageMsg msg */
    msg?: (string|null);
}

/** Represents a MessageMsg. */
export class MessageMsg implements IMessageMsg {

    /**
     * Constructs a new MessageMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageMsg);

    /** MessageMsg title. */
    public title: string;

    /** MessageMsg msg. */
    public msg: string;

    /**
     * Creates a new MessageMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageMsg instance
     */
    public static create(properties?: IMessageMsg): MessageMsg;

    /**
     * Encodes the specified MessageMsg message. Does not implicitly {@link MessageMsg.verify|verify} messages.
     * @param message MessageMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MessageMsg message, length delimited. Does not implicitly {@link MessageMsg.verify|verify} messages.
     * @param message MessageMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessageMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageMsg;

    /**
     * Decodes a MessageMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageMsg;

    /**
     * Verifies a MessageMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MessageMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageMsg
     */
    public static fromObject(object: { [k: string]: any }): MessageMsg;

    /**
     * Creates a plain object from a MessageMsg message. Also converts values to other types if specified.
     * @param message MessageMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MessageMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MessageMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MessageMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Namespace player. */
export namespace player {

    /** Properties of a PlayerAttrUpdateMsg. */
    interface IPlayerAttrUpdateMsg {

        /** PlayerAttrUpdateMsg att */
        att?: (player.IAttrMsg[]|null);
    }

    /** Represents a PlayerAttrUpdateMsg. */
    class PlayerAttrUpdateMsg implements IPlayerAttrUpdateMsg {

        /**
         * Constructs a new PlayerAttrUpdateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: player.IPlayerAttrUpdateMsg);

        /** PlayerAttrUpdateMsg att. */
        public att: player.IAttrMsg[];

        /**
         * Creates a new PlayerAttrUpdateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerAttrUpdateMsg instance
         */
        public static create(properties?: player.IPlayerAttrUpdateMsg): player.PlayerAttrUpdateMsg;

        /**
         * Encodes the specified PlayerAttrUpdateMsg message. Does not implicitly {@link player.PlayerAttrUpdateMsg.verify|verify} messages.
         * @param message PlayerAttrUpdateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: player.IPlayerAttrUpdateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerAttrUpdateMsg message, length delimited. Does not implicitly {@link player.PlayerAttrUpdateMsg.verify|verify} messages.
         * @param message PlayerAttrUpdateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: player.IPlayerAttrUpdateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerAttrUpdateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerAttrUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): player.PlayerAttrUpdateMsg;

        /**
         * Decodes a PlayerAttrUpdateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerAttrUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): player.PlayerAttrUpdateMsg;

        /**
         * Verifies a PlayerAttrUpdateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerAttrUpdateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerAttrUpdateMsg
         */
        public static fromObject(object: { [k: string]: any }): player.PlayerAttrUpdateMsg;

        /**
         * Creates a plain object from a PlayerAttrUpdateMsg message. Also converts values to other types if specified.
         * @param message PlayerAttrUpdateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: player.PlayerAttrUpdateMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerAttrUpdateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerAttrUpdateMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AttrMsg. */
    interface IAttrMsg {

        /** AttrMsg type */
        type?: (number|null);

        /** AttrMsg totalVal */
        totalVal?: (number|null);
    }

    /** Represents an AttrMsg. */
    class AttrMsg implements IAttrMsg {

        /**
         * Constructs a new AttrMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: player.IAttrMsg);

        /** AttrMsg type. */
        public type: number;

        /** AttrMsg totalVal. */
        public totalVal: number;

        /**
         * Creates a new AttrMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttrMsg instance
         */
        public static create(properties?: player.IAttrMsg): player.AttrMsg;

        /**
         * Encodes the specified AttrMsg message. Does not implicitly {@link player.AttrMsg.verify|verify} messages.
         * @param message AttrMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: player.IAttrMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrMsg message, length delimited. Does not implicitly {@link player.AttrMsg.verify|verify} messages.
         * @param message AttrMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: player.IAttrMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): player.AttrMsg;

        /**
         * Decodes an AttrMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttrMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): player.AttrMsg;

        /**
         * Verifies an AttrMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttrMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttrMsg
         */
        public static fromObject(object: { [k: string]: any }): player.AttrMsg;

        /**
         * Creates a plain object from an AttrMsg message. Also converts values to other types if specified.
         * @param message AttrMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: player.AttrMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AttrMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace playerItem. */
export namespace playerItem {

    /** Properties of a GetItemMsg. */
    interface IGetItemMsg {
    }

    /** Represents a GetItemMsg. */
    class GetItemMsg implements IGetItemMsg {

        /**
         * Constructs a new GetItemMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerItem.IGetItemMsg);

        /**
         * Creates a new GetItemMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetItemMsg instance
         */
        public static create(properties?: playerItem.IGetItemMsg): playerItem.GetItemMsg;

        /**
         * Encodes the specified GetItemMsg message. Does not implicitly {@link playerItem.GetItemMsg.verify|verify} messages.
         * @param message GetItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerItem.IGetItemMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetItemMsg message, length delimited. Does not implicitly {@link playerItem.GetItemMsg.verify|verify} messages.
         * @param message GetItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerItem.IGetItemMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetItemMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerItem.GetItemMsg;

        /**
         * Decodes a GetItemMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerItem.GetItemMsg;

        /**
         * Verifies a GetItemMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetItemMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetItemMsg
         */
        public static fromObject(object: { [k: string]: any }): playerItem.GetItemMsg;

        /**
         * Creates a plain object from a GetItemMsg message. Also converts values to other types if specified.
         * @param message GetItemMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerItem.GetItemMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetItemMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetItemMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemListMsg. */
    interface IItemListMsg {

        /** ItemListMsg itemList */
        itemList?: (playerItem.IItemMsg[]|null);
    }

    /** Represents an ItemListMsg. */
    class ItemListMsg implements IItemListMsg {

        /**
         * Constructs a new ItemListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerItem.IItemListMsg);

        /** ItemListMsg itemList. */
        public itemList: playerItem.IItemMsg[];

        /**
         * Creates a new ItemListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemListMsg instance
         */
        public static create(properties?: playerItem.IItemListMsg): playerItem.ItemListMsg;

        /**
         * Encodes the specified ItemListMsg message. Does not implicitly {@link playerItem.ItemListMsg.verify|verify} messages.
         * @param message ItemListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerItem.IItemListMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemListMsg message, length delimited. Does not implicitly {@link playerItem.ItemListMsg.verify|verify} messages.
         * @param message ItemListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerItem.IItemListMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerItem.ItemListMsg;

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerItem.ItemListMsg;

        /**
         * Verifies an ItemListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemListMsg
         */
        public static fromObject(object: { [k: string]: any }): playerItem.ItemListMsg;

        /**
         * Creates a plain object from an ItemListMsg message. Also converts values to other types if specified.
         * @param message ItemListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerItem.ItemListMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemListMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemMsg. */
    interface IItemMsg {

        /** ItemMsg id */
        id?: (number|null);

        /** ItemMsg itemId */
        itemId?: (number|null);

        /** ItemMsg itemNum */
        itemNum?: (number|null);
    }

    /** Represents an ItemMsg. */
    class ItemMsg implements IItemMsg {

        /**
         * Constructs a new ItemMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerItem.IItemMsg);

        /** ItemMsg id. */
        public id: number;

        /** ItemMsg itemId. */
        public itemId: number;

        /** ItemMsg itemNum. */
        public itemNum: number;

        /**
         * Creates a new ItemMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemMsg instance
         */
        public static create(properties?: playerItem.IItemMsg): playerItem.ItemMsg;

        /**
         * Encodes the specified ItemMsg message. Does not implicitly {@link playerItem.ItemMsg.verify|verify} messages.
         * @param message ItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerItem.IItemMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemMsg message, length delimited. Does not implicitly {@link playerItem.ItemMsg.verify|verify} messages.
         * @param message ItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerItem.IItemMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerItem.ItemMsg;

        /**
         * Decodes an ItemMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerItem.ItemMsg;

        /**
         * Verifies an ItemMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemMsg
         */
        public static fromObject(object: { [k: string]: any }): playerItem.ItemMsg;

        /**
         * Creates a plain object from an ItemMsg message. Also converts values to other types if specified.
         * @param message ItemMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerItem.ItemMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ItemNotifyMsg. */
    interface IItemNotifyMsg {

        /** ItemNotifyMsg itemList */
        itemList?: (playerItem.IItemMsg[]|null);
    }

    /** Represents an ItemNotifyMsg. */
    class ItemNotifyMsg implements IItemNotifyMsg {

        /**
         * Constructs a new ItemNotifyMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerItem.IItemNotifyMsg);

        /** ItemNotifyMsg itemList. */
        public itemList: playerItem.IItemMsg[];

        /**
         * Creates a new ItemNotifyMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemNotifyMsg instance
         */
        public static create(properties?: playerItem.IItemNotifyMsg): playerItem.ItemNotifyMsg;

        /**
         * Encodes the specified ItemNotifyMsg message. Does not implicitly {@link playerItem.ItemNotifyMsg.verify|verify} messages.
         * @param message ItemNotifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerItem.IItemNotifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemNotifyMsg message, length delimited. Does not implicitly {@link playerItem.ItemNotifyMsg.verify|verify} messages.
         * @param message ItemNotifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerItem.IItemNotifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemNotifyMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerItem.ItemNotifyMsg;

        /**
         * Decodes an ItemNotifyMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemNotifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerItem.ItemNotifyMsg;

        /**
         * Verifies an ItemNotifyMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemNotifyMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemNotifyMsg
         */
        public static fromObject(object: { [k: string]: any }): playerItem.ItemNotifyMsg;

        /**
         * Creates a plain object from an ItemNotifyMsg message. Also converts values to other types if specified.
         * @param message ItemNotifyMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerItem.ItemNotifyMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemNotifyMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemNotifyMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserItemReqMsg. */
    interface IUserItemReqMsg {

        /** UserItemReqMsg itemId */
        itemId?: (number|null);

        /** UserItemReqMsg itemNum */
        itemNum?: (number|null);

        /** UserItemReqMsg selectIds */
        selectIds?: (number[]|null);
    }

    /** Represents a UserItemReqMsg. */
    class UserItemReqMsg implements IUserItemReqMsg {

        /**
         * Constructs a new UserItemReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerItem.IUserItemReqMsg);

        /** UserItemReqMsg itemId. */
        public itemId: number;

        /** UserItemReqMsg itemNum. */
        public itemNum: number;

        /** UserItemReqMsg selectIds. */
        public selectIds: number[];

        /**
         * Creates a new UserItemReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserItemReqMsg instance
         */
        public static create(properties?: playerItem.IUserItemReqMsg): playerItem.UserItemReqMsg;

        /**
         * Encodes the specified UserItemReqMsg message. Does not implicitly {@link playerItem.UserItemReqMsg.verify|verify} messages.
         * @param message UserItemReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerItem.IUserItemReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserItemReqMsg message, length delimited. Does not implicitly {@link playerItem.UserItemReqMsg.verify|verify} messages.
         * @param message UserItemReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerItem.IUserItemReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserItemReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserItemReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerItem.UserItemReqMsg;

        /**
         * Decodes a UserItemReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserItemReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerItem.UserItemReqMsg;

        /**
         * Verifies a UserItemReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserItemReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserItemReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerItem.UserItemReqMsg;

        /**
         * Creates a plain object from a UserItemReqMsg message. Also converts values to other types if specified.
         * @param message UserItemReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerItem.UserItemReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserItemReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserItemReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserItemResMsg. */
    interface IUserItemResMsg {

        /** UserItemResMsg reward */
        reward?: (playerTask.IRewardInfoMsg[]|null);
    }

    /** Represents a UserItemResMsg. */
    class UserItemResMsg implements IUserItemResMsg {

        /**
         * Constructs a new UserItemResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerItem.IUserItemResMsg);

        /** UserItemResMsg reward. */
        public reward: playerTask.IRewardInfoMsg[];

        /**
         * Creates a new UserItemResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserItemResMsg instance
         */
        public static create(properties?: playerItem.IUserItemResMsg): playerItem.UserItemResMsg;

        /**
         * Encodes the specified UserItemResMsg message. Does not implicitly {@link playerItem.UserItemResMsg.verify|verify} messages.
         * @param message UserItemResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerItem.IUserItemResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserItemResMsg message, length delimited. Does not implicitly {@link playerItem.UserItemResMsg.verify|verify} messages.
         * @param message UserItemResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerItem.IUserItemResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserItemResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerItem.UserItemResMsg;

        /**
         * Decodes a UserItemResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerItem.UserItemResMsg;

        /**
         * Verifies a UserItemResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserItemResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserItemResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerItem.UserItemResMsg;

        /**
         * Creates a plain object from a UserItemResMsg message. Also converts values to other types if specified.
         * @param message UserItemResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerItem.UserItemResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserItemResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserItemResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace playerShop. */
export namespace playerShop {

    /** Properties of a GetAllShopReqMsg. */
    interface IGetAllShopReqMsg {
    }

    /** Represents a GetAllShopReqMsg. */
    class GetAllShopReqMsg implements IGetAllShopReqMsg {

        /**
         * Constructs a new GetAllShopReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerShop.IGetAllShopReqMsg);

        /**
         * Creates a new GetAllShopReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllShopReqMsg instance
         */
        public static create(properties?: playerShop.IGetAllShopReqMsg): playerShop.GetAllShopReqMsg;

        /**
         * Encodes the specified GetAllShopReqMsg message. Does not implicitly {@link playerShop.GetAllShopReqMsg.verify|verify} messages.
         * @param message GetAllShopReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerShop.IGetAllShopReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAllShopReqMsg message, length delimited. Does not implicitly {@link playerShop.GetAllShopReqMsg.verify|verify} messages.
         * @param message GetAllShopReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerShop.IGetAllShopReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllShopReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllShopReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerShop.GetAllShopReqMsg;

        /**
         * Decodes a GetAllShopReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAllShopReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerShop.GetAllShopReqMsg;

        /**
         * Verifies a GetAllShopReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAllShopReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAllShopReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerShop.GetAllShopReqMsg;

        /**
         * Creates a plain object from a GetAllShopReqMsg message. Also converts values to other types if specified.
         * @param message GetAllShopReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerShop.GetAllShopReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAllShopReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetAllShopReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetAllShopResMsg. */
    interface IGetAllShopResMsg {

        /** GetAllShopResMsg shops */
        shops?: ({ [k: string]: playerShop.IShopMsg }|null);
    }

    /** Represents a GetAllShopResMsg. */
    class GetAllShopResMsg implements IGetAllShopResMsg {

        /**
         * Constructs a new GetAllShopResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerShop.IGetAllShopResMsg);

        /** GetAllShopResMsg shops. */
        public shops: { [k: string]: playerShop.IShopMsg };

        /**
         * Creates a new GetAllShopResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllShopResMsg instance
         */
        public static create(properties?: playerShop.IGetAllShopResMsg): playerShop.GetAllShopResMsg;

        /**
         * Encodes the specified GetAllShopResMsg message. Does not implicitly {@link playerShop.GetAllShopResMsg.verify|verify} messages.
         * @param message GetAllShopResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerShop.IGetAllShopResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAllShopResMsg message, length delimited. Does not implicitly {@link playerShop.GetAllShopResMsg.verify|verify} messages.
         * @param message GetAllShopResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerShop.IGetAllShopResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllShopResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllShopResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerShop.GetAllShopResMsg;

        /**
         * Decodes a GetAllShopResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAllShopResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerShop.GetAllShopResMsg;

        /**
         * Verifies a GetAllShopResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAllShopResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAllShopResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerShop.GetAllShopResMsg;

        /**
         * Creates a plain object from a GetAllShopResMsg message. Also converts values to other types if specified.
         * @param message GetAllShopResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerShop.GetAllShopResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAllShopResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetAllShopResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ShopMsg. */
    interface IShopMsg {

        /** ShopMsg shopInfos */
        shopInfos?: ({ [k: string]: playerShop.IShopInfoMsg }|null);
    }

    /** Represents a ShopMsg. */
    class ShopMsg implements IShopMsg {

        /**
         * Constructs a new ShopMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerShop.IShopMsg);

        /** ShopMsg shopInfos. */
        public shopInfos: { [k: string]: playerShop.IShopInfoMsg };

        /**
         * Creates a new ShopMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShopMsg instance
         */
        public static create(properties?: playerShop.IShopMsg): playerShop.ShopMsg;

        /**
         * Encodes the specified ShopMsg message. Does not implicitly {@link playerShop.ShopMsg.verify|verify} messages.
         * @param message ShopMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerShop.IShopMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShopMsg message, length delimited. Does not implicitly {@link playerShop.ShopMsg.verify|verify} messages.
         * @param message ShopMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerShop.IShopMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerShop.ShopMsg;

        /**
         * Decodes a ShopMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShopMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerShop.ShopMsg;

        /**
         * Verifies a ShopMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShopMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopMsg
         */
        public static fromObject(object: { [k: string]: any }): playerShop.ShopMsg;

        /**
         * Creates a plain object from a ShopMsg message. Also converts values to other types if specified.
         * @param message ShopMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerShop.ShopMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ShopMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ShopInfoMsg. */
    interface IShopInfoMsg {

        /** ShopInfoMsg shopType */
        shopType?: (number|null);

        /** ShopInfoMsg shopSubType */
        shopSubType?: (number|null);

        /** ShopInfoMsg continueTime */
        continueTime?: (number|Long|null);

        /** ShopInfoMsg products */
        products?: (playerShop.IProductsMsg[]|null);
    }

    /** Represents a ShopInfoMsg. */
    class ShopInfoMsg implements IShopInfoMsg {

        /**
         * Constructs a new ShopInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerShop.IShopInfoMsg);

        /** ShopInfoMsg shopType. */
        public shopType: number;

        /** ShopInfoMsg shopSubType. */
        public shopSubType: number;

        /** ShopInfoMsg continueTime. */
        public continueTime: (number|Long);

        /** ShopInfoMsg products. */
        public products: playerShop.IProductsMsg[];

        /**
         * Creates a new ShopInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShopInfoMsg instance
         */
        public static create(properties?: playerShop.IShopInfoMsg): playerShop.ShopInfoMsg;

        /**
         * Encodes the specified ShopInfoMsg message. Does not implicitly {@link playerShop.ShopInfoMsg.verify|verify} messages.
         * @param message ShopInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerShop.IShopInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShopInfoMsg message, length delimited. Does not implicitly {@link playerShop.ShopInfoMsg.verify|verify} messages.
         * @param message ShopInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerShop.IShopInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerShop.ShopInfoMsg;

        /**
         * Decodes a ShopInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShopInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerShop.ShopInfoMsg;

        /**
         * Verifies a ShopInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShopInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): playerShop.ShopInfoMsg;

        /**
         * Creates a plain object from a ShopInfoMsg message. Also converts values to other types if specified.
         * @param message ShopInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerShop.ShopInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ShopInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProductsMsg. */
    interface IProductsMsg {

        /** ProductsMsg id */
        id?: (number|null);

        /** ProductsMsg priceType */
        priceType?: (number|null);

        /** ProductsMsg priceObjId */
        priceObjId?: (number|null);

        /** ProductsMsg priceNum */
        priceNum?: (number|null);

        /** ProductsMsg currCount */
        currCount?: (number|null);

        /** ProductsMsg limitCount */
        limitCount?: (number|null);

        /** ProductsMsg name */
        name?: (string|null);

        /** ProductsMsg icon */
        icon?: (string|null);

        /** ProductsMsg reward */
        reward?: (playerShop.IProductMsg[]|null);
    }

    /** Represents a ProductsMsg. */
    class ProductsMsg implements IProductsMsg {

        /**
         * Constructs a new ProductsMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerShop.IProductsMsg);

        /** ProductsMsg id. */
        public id: number;

        /** ProductsMsg priceType. */
        public priceType: number;

        /** ProductsMsg priceObjId. */
        public priceObjId: number;

        /** ProductsMsg priceNum. */
        public priceNum: number;

        /** ProductsMsg currCount. */
        public currCount: number;

        /** ProductsMsg limitCount. */
        public limitCount: number;

        /** ProductsMsg name. */
        public name: string;

        /** ProductsMsg icon. */
        public icon: string;

        /** ProductsMsg reward. */
        public reward: playerShop.IProductMsg[];

        /**
         * Creates a new ProductsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductsMsg instance
         */
        public static create(properties?: playerShop.IProductsMsg): playerShop.ProductsMsg;

        /**
         * Encodes the specified ProductsMsg message. Does not implicitly {@link playerShop.ProductsMsg.verify|verify} messages.
         * @param message ProductsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerShop.IProductsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductsMsg message, length delimited. Does not implicitly {@link playerShop.ProductsMsg.verify|verify} messages.
         * @param message ProductsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerShop.IProductsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductsMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerShop.ProductsMsg;

        /**
         * Decodes a ProductsMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerShop.ProductsMsg;

        /**
         * Verifies a ProductsMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductsMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductsMsg
         */
        public static fromObject(object: { [k: string]: any }): playerShop.ProductsMsg;

        /**
         * Creates a plain object from a ProductsMsg message. Also converts values to other types if specified.
         * @param message ProductsMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerShop.ProductsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductsMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProductsMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProductMsg. */
    interface IProductMsg {

        /** ProductMsg type */
        type?: (number|null);

        /** ProductMsg objId */
        objId?: (number|null);

        /** ProductMsg num */
        num?: (number|null);
    }

    /** Represents a ProductMsg. */
    class ProductMsg implements IProductMsg {

        /**
         * Constructs a new ProductMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerShop.IProductMsg);

        /** ProductMsg type. */
        public type: number;

        /** ProductMsg objId. */
        public objId: number;

        /** ProductMsg num. */
        public num: number;

        /**
         * Creates a new ProductMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductMsg instance
         */
        public static create(properties?: playerShop.IProductMsg): playerShop.ProductMsg;

        /**
         * Encodes the specified ProductMsg message. Does not implicitly {@link playerShop.ProductMsg.verify|verify} messages.
         * @param message ProductMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerShop.IProductMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductMsg message, length delimited. Does not implicitly {@link playerShop.ProductMsg.verify|verify} messages.
         * @param message ProductMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerShop.IProductMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerShop.ProductMsg;

        /**
         * Decodes a ProductMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerShop.ProductMsg;

        /**
         * Verifies a ProductMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductMsg
         */
        public static fromObject(object: { [k: string]: any }): playerShop.ProductMsg;

        /**
         * Creates a plain object from a ProductMsg message. Also converts values to other types if specified.
         * @param message ProductMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerShop.ProductMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProductMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BuyReqMsg. */
    interface IBuyReqMsg {

        /** BuyReqMsg shopType */
        shopType?: (number|null);

        /** BuyReqMsg shopSubType */
        shopSubType?: (number|null);

        /** BuyReqMsg id */
        id?: (number|null);
    }

    /** Represents a BuyReqMsg. */
    class BuyReqMsg implements IBuyReqMsg {

        /**
         * Constructs a new BuyReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerShop.IBuyReqMsg);

        /** BuyReqMsg shopType. */
        public shopType: number;

        /** BuyReqMsg shopSubType. */
        public shopSubType: number;

        /** BuyReqMsg id. */
        public id: number;

        /**
         * Creates a new BuyReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyReqMsg instance
         */
        public static create(properties?: playerShop.IBuyReqMsg): playerShop.BuyReqMsg;

        /**
         * Encodes the specified BuyReqMsg message. Does not implicitly {@link playerShop.BuyReqMsg.verify|verify} messages.
         * @param message BuyReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerShop.IBuyReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuyReqMsg message, length delimited. Does not implicitly {@link playerShop.BuyReqMsg.verify|verify} messages.
         * @param message BuyReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerShop.IBuyReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuyReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerShop.BuyReqMsg;

        /**
         * Decodes a BuyReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerShop.BuyReqMsg;

        /**
         * Verifies a BuyReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuyReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuyReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerShop.BuyReqMsg;

        /**
         * Creates a plain object from a BuyReqMsg message. Also converts values to other types if specified.
         * @param message BuyReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerShop.BuyReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuyReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BuyReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BuyResMsg. */
    interface IBuyResMsg {

        /** BuyResMsg reward */
        reward?: (playerShop.IProductMsg[]|null);
    }

    /** Represents a BuyResMsg. */
    class BuyResMsg implements IBuyResMsg {

        /**
         * Constructs a new BuyResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerShop.IBuyResMsg);

        /** BuyResMsg reward. */
        public reward: playerShop.IProductMsg[];

        /**
         * Creates a new BuyResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyResMsg instance
         */
        public static create(properties?: playerShop.IBuyResMsg): playerShop.BuyResMsg;

        /**
         * Encodes the specified BuyResMsg message. Does not implicitly {@link playerShop.BuyResMsg.verify|verify} messages.
         * @param message BuyResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerShop.IBuyResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuyResMsg message, length delimited. Does not implicitly {@link playerShop.BuyResMsg.verify|verify} messages.
         * @param message BuyResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerShop.IBuyResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuyResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerShop.BuyResMsg;

        /**
         * Decodes a BuyResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerShop.BuyResMsg;

        /**
         * Verifies a BuyResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuyResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuyResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerShop.BuyResMsg;

        /**
         * Creates a plain object from a BuyResMsg message. Also converts values to other types if specified.
         * @param message BuyResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerShop.BuyResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuyResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BuyResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace playerSkill. */
export namespace playerSkill {

    /** Properties of an AllSkillReqMsg. */
    interface IAllSkillReqMsg {
    }

    /** Represents an AllSkillReqMsg. */
    class AllSkillReqMsg implements IAllSkillReqMsg {

        /**
         * Constructs a new AllSkillReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IAllSkillReqMsg);

        /**
         * Creates a new AllSkillReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllSkillReqMsg instance
         */
        public static create(properties?: playerSkill.IAllSkillReqMsg): playerSkill.AllSkillReqMsg;

        /**
         * Encodes the specified AllSkillReqMsg message. Does not implicitly {@link playerSkill.AllSkillReqMsg.verify|verify} messages.
         * @param message AllSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IAllSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AllSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.AllSkillReqMsg.verify|verify} messages.
         * @param message AllSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IAllSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllSkillReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.AllSkillReqMsg;

        /**
         * Decodes an AllSkillReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.AllSkillReqMsg;

        /**
         * Verifies an AllSkillReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AllSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AllSkillReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.AllSkillReqMsg;

        /**
         * Creates a plain object from an AllSkillReqMsg message. Also converts values to other types if specified.
         * @param message AllSkillReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.AllSkillReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AllSkillReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AllSkillReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AllSkillResMsg. */
    interface IAllSkillResMsg {

        /** AllSkillResMsg cultivateSkill */
        cultivateSkill?: ({ [k: string]: number }|null);

        /** AllSkillResMsg unCultivateSkill */
        unCultivateSkill?: ({ [k: string]: number }|null);
    }

    /** Represents an AllSkillResMsg. */
    class AllSkillResMsg implements IAllSkillResMsg {

        /**
         * Constructs a new AllSkillResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IAllSkillResMsg);

        /** AllSkillResMsg cultivateSkill. */
        public cultivateSkill: { [k: string]: number };

        /** AllSkillResMsg unCultivateSkill. */
        public unCultivateSkill: { [k: string]: number };

        /**
         * Creates a new AllSkillResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllSkillResMsg instance
         */
        public static create(properties?: playerSkill.IAllSkillResMsg): playerSkill.AllSkillResMsg;

        /**
         * Encodes the specified AllSkillResMsg message. Does not implicitly {@link playerSkill.AllSkillResMsg.verify|verify} messages.
         * @param message AllSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IAllSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AllSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.AllSkillResMsg.verify|verify} messages.
         * @param message AllSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IAllSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllSkillResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.AllSkillResMsg;

        /**
         * Decodes an AllSkillResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.AllSkillResMsg;

        /**
         * Verifies an AllSkillResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AllSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AllSkillResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.AllSkillResMsg;

        /**
         * Creates a plain object from an AllSkillResMsg message. Also converts values to other types if specified.
         * @param message AllSkillResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.AllSkillResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AllSkillResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AllSkillResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetSkillSetMsg. */
    interface IGetSkillSetMsg {
    }

    /** Represents a GetSkillSetMsg. */
    class GetSkillSetMsg implements IGetSkillSetMsg {

        /**
         * Constructs a new GetSkillSetMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IGetSkillSetMsg);

        /**
         * Creates a new GetSkillSetMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSkillSetMsg instance
         */
        public static create(properties?: playerSkill.IGetSkillSetMsg): playerSkill.GetSkillSetMsg;

        /**
         * Encodes the specified GetSkillSetMsg message. Does not implicitly {@link playerSkill.GetSkillSetMsg.verify|verify} messages.
         * @param message GetSkillSetMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IGetSkillSetMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSkillSetMsg message, length delimited. Does not implicitly {@link playerSkill.GetSkillSetMsg.verify|verify} messages.
         * @param message GetSkillSetMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IGetSkillSetMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSkillSetMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSkillSetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.GetSkillSetMsg;

        /**
         * Decodes a GetSkillSetMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSkillSetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.GetSkillSetMsg;

        /**
         * Verifies a GetSkillSetMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSkillSetMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSkillSetMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.GetSkillSetMsg;

        /**
         * Creates a plain object from a GetSkillSetMsg message. Also converts values to other types if specified.
         * @param message GetSkillSetMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.GetSkillSetMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSkillSetMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetSkillSetMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SkillSetMsg. */
    interface ISkillSetMsg {

        /** SkillSetMsg skillSet */
        skillSet?: (playerSkill.ISkillMsg[]|null);
    }

    /** Represents a SkillSetMsg. */
    class SkillSetMsg implements ISkillSetMsg {

        /**
         * Constructs a new SkillSetMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.ISkillSetMsg);

        /** SkillSetMsg skillSet. */
        public skillSet: playerSkill.ISkillMsg[];

        /**
         * Creates a new SkillSetMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillSetMsg instance
         */
        public static create(properties?: playerSkill.ISkillSetMsg): playerSkill.SkillSetMsg;

        /**
         * Encodes the specified SkillSetMsg message. Does not implicitly {@link playerSkill.SkillSetMsg.verify|verify} messages.
         * @param message SkillSetMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.ISkillSetMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SkillSetMsg message, length delimited. Does not implicitly {@link playerSkill.SkillSetMsg.verify|verify} messages.
         * @param message SkillSetMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.ISkillSetMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkillSetMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillSetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.SkillSetMsg;

        /**
         * Decodes a SkillSetMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillSetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.SkillSetMsg;

        /**
         * Verifies a SkillSetMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkillSetMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkillSetMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.SkillSetMsg;

        /**
         * Creates a plain object from a SkillSetMsg message. Also converts values to other types if specified.
         * @param message SkillSetMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.SkillSetMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkillSetMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SkillSetMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SkillMsg. */
    interface ISkillMsg {

        /** SkillMsg id */
        id?: (number|null);

        /** SkillMsg initiativeSkill */
        initiativeSkill?: ({ [k: string]: number }|null);

        /** SkillMsg passivitySkill */
        passivitySkill?: ({ [k: string]: number }|null);

        /** SkillMsg default */
        "default"?: (boolean|null);
    }

    /** Represents a SkillMsg. */
    class SkillMsg implements ISkillMsg {

        /**
         * Constructs a new SkillMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.ISkillMsg);

        /** SkillMsg id. */
        public id: number;

        /** SkillMsg initiativeSkill. */
        public initiativeSkill: { [k: string]: number };

        /** SkillMsg passivitySkill. */
        public passivitySkill: { [k: string]: number };

        /** SkillMsg default. */
        public default: boolean;

        /**
         * Creates a new SkillMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillMsg instance
         */
        public static create(properties?: playerSkill.ISkillMsg): playerSkill.SkillMsg;

        /**
         * Encodes the specified SkillMsg message. Does not implicitly {@link playerSkill.SkillMsg.verify|verify} messages.
         * @param message SkillMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.ISkillMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SkillMsg message, length delimited. Does not implicitly {@link playerSkill.SkillMsg.verify|verify} messages.
         * @param message SkillMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.ISkillMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkillMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.SkillMsg;

        /**
         * Decodes a SkillMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.SkillMsg;

        /**
         * Verifies a SkillMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkillMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkillMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.SkillMsg;

        /**
         * Creates a plain object from a SkillMsg message. Also converts values to other types if specified.
         * @param message SkillMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.SkillMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkillMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SkillMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddSkillReqMsg. */
    interface IAddSkillReqMsg {

        /** AddSkillReqMsg id */
        id?: (number|null);

        /** AddSkillReqMsg skillId */
        skillId?: (number|null);
    }

    /** Represents an AddSkillReqMsg. */
    class AddSkillReqMsg implements IAddSkillReqMsg {

        /**
         * Constructs a new AddSkillReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IAddSkillReqMsg);

        /** AddSkillReqMsg id. */
        public id: number;

        /** AddSkillReqMsg skillId. */
        public skillId: number;

        /**
         * Creates a new AddSkillReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddSkillReqMsg instance
         */
        public static create(properties?: playerSkill.IAddSkillReqMsg): playerSkill.AddSkillReqMsg;

        /**
         * Encodes the specified AddSkillReqMsg message. Does not implicitly {@link playerSkill.AddSkillReqMsg.verify|verify} messages.
         * @param message AddSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IAddSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.AddSkillReqMsg.verify|verify} messages.
         * @param message AddSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IAddSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddSkillReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.AddSkillReqMsg;

        /**
         * Decodes an AddSkillReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.AddSkillReqMsg;

        /**
         * Verifies an AddSkillReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddSkillReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.AddSkillReqMsg;

        /**
         * Creates a plain object from an AddSkillReqMsg message. Also converts values to other types if specified.
         * @param message AddSkillReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.AddSkillReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddSkillReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddSkillReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddSkillResMsg. */
    interface IAddSkillResMsg {

        /** AddSkillResMsg id */
        id?: (number|null);

        /** AddSkillResMsg skillId */
        skillId?: (number|null);
    }

    /** Represents an AddSkillResMsg. */
    class AddSkillResMsg implements IAddSkillResMsg {

        /**
         * Constructs a new AddSkillResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IAddSkillResMsg);

        /** AddSkillResMsg id. */
        public id: number;

        /** AddSkillResMsg skillId. */
        public skillId: number;

        /**
         * Creates a new AddSkillResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddSkillResMsg instance
         */
        public static create(properties?: playerSkill.IAddSkillResMsg): playerSkill.AddSkillResMsg;

        /**
         * Encodes the specified AddSkillResMsg message. Does not implicitly {@link playerSkill.AddSkillResMsg.verify|verify} messages.
         * @param message AddSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IAddSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.AddSkillResMsg.verify|verify} messages.
         * @param message AddSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IAddSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddSkillResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.AddSkillResMsg;

        /**
         * Decodes an AddSkillResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.AddSkillResMsg;

        /**
         * Verifies an AddSkillResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddSkillResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.AddSkillResMsg;

        /**
         * Creates a plain object from an AddSkillResMsg message. Also converts values to other types if specified.
         * @param message AddSkillResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.AddSkillResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddSkillResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddSkillResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DelSkillReqMsg. */
    interface IDelSkillReqMsg {

        /** DelSkillReqMsg id */
        id?: (number|null);

        /** DelSkillReqMsg skillId */
        skillId?: (number|null);
    }

    /** Represents a DelSkillReqMsg. */
    class DelSkillReqMsg implements IDelSkillReqMsg {

        /**
         * Constructs a new DelSkillReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IDelSkillReqMsg);

        /** DelSkillReqMsg id. */
        public id: number;

        /** DelSkillReqMsg skillId. */
        public skillId: number;

        /**
         * Creates a new DelSkillReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelSkillReqMsg instance
         */
        public static create(properties?: playerSkill.IDelSkillReqMsg): playerSkill.DelSkillReqMsg;

        /**
         * Encodes the specified DelSkillReqMsg message. Does not implicitly {@link playerSkill.DelSkillReqMsg.verify|verify} messages.
         * @param message DelSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IDelSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.DelSkillReqMsg.verify|verify} messages.
         * @param message DelSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IDelSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelSkillReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.DelSkillReqMsg;

        /**
         * Decodes a DelSkillReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.DelSkillReqMsg;

        /**
         * Verifies a DelSkillReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelSkillReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.DelSkillReqMsg;

        /**
         * Creates a plain object from a DelSkillReqMsg message. Also converts values to other types if specified.
         * @param message DelSkillReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.DelSkillReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelSkillReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DelSkillReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DelSkillResMsg. */
    interface IDelSkillResMsg {

        /** DelSkillResMsg id */
        id?: (number|null);

        /** DelSkillResMsg skillId */
        skillId?: (number|null);
    }

    /** Represents a DelSkillResMsg. */
    class DelSkillResMsg implements IDelSkillResMsg {

        /**
         * Constructs a new DelSkillResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IDelSkillResMsg);

        /** DelSkillResMsg id. */
        public id: number;

        /** DelSkillResMsg skillId. */
        public skillId: number;

        /**
         * Creates a new DelSkillResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelSkillResMsg instance
         */
        public static create(properties?: playerSkill.IDelSkillResMsg): playerSkill.DelSkillResMsg;

        /**
         * Encodes the specified DelSkillResMsg message. Does not implicitly {@link playerSkill.DelSkillResMsg.verify|verify} messages.
         * @param message DelSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IDelSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.DelSkillResMsg.verify|verify} messages.
         * @param message DelSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IDelSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelSkillResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.DelSkillResMsg;

        /**
         * Decodes a DelSkillResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.DelSkillResMsg;

        /**
         * Verifies a DelSkillResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelSkillResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.DelSkillResMsg;

        /**
         * Creates a plain object from a DelSkillResMsg message. Also converts values to other types if specified.
         * @param message DelSkillResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.DelSkillResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelSkillResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DelSkillResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpSkillReqMsg. */
    interface IUpSkillReqMsg {

        /** UpSkillReqMsg skillId */
        skillId?: (number|null);
    }

    /** Represents an UpSkillReqMsg. */
    class UpSkillReqMsg implements IUpSkillReqMsg {

        /**
         * Constructs a new UpSkillReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IUpSkillReqMsg);

        /** UpSkillReqMsg skillId. */
        public skillId: number;

        /**
         * Creates a new UpSkillReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpSkillReqMsg instance
         */
        public static create(properties?: playerSkill.IUpSkillReqMsg): playerSkill.UpSkillReqMsg;

        /**
         * Encodes the specified UpSkillReqMsg message. Does not implicitly {@link playerSkill.UpSkillReqMsg.verify|verify} messages.
         * @param message UpSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IUpSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.UpSkillReqMsg.verify|verify} messages.
         * @param message UpSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IUpSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpSkillReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.UpSkillReqMsg;

        /**
         * Decodes an UpSkillReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.UpSkillReqMsg;

        /**
         * Verifies an UpSkillReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpSkillReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.UpSkillReqMsg;

        /**
         * Creates a plain object from an UpSkillReqMsg message. Also converts values to other types if specified.
         * @param message UpSkillReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.UpSkillReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpSkillReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpSkillReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpSkillResMsg. */
    interface IUpSkillResMsg {

        /** UpSkillResMsg skillId */
        skillId?: (number|null);

        /** UpSkillResMsg skillLv */
        skillLv?: (number|null);
    }

    /** Represents an UpSkillResMsg. */
    class UpSkillResMsg implements IUpSkillResMsg {

        /**
         * Constructs a new UpSkillResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.IUpSkillResMsg);

        /** UpSkillResMsg skillId. */
        public skillId: number;

        /** UpSkillResMsg skillLv. */
        public skillLv: number;

        /**
         * Creates a new UpSkillResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpSkillResMsg instance
         */
        public static create(properties?: playerSkill.IUpSkillResMsg): playerSkill.UpSkillResMsg;

        /**
         * Encodes the specified UpSkillResMsg message. Does not implicitly {@link playerSkill.UpSkillResMsg.verify|verify} messages.
         * @param message UpSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.IUpSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.UpSkillResMsg.verify|verify} messages.
         * @param message UpSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.IUpSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpSkillResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.UpSkillResMsg;

        /**
         * Decodes an UpSkillResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.UpSkillResMsg;

        /**
         * Verifies an UpSkillResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpSkillResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.UpSkillResMsg;

        /**
         * Creates a plain object from an UpSkillResMsg message. Also converts values to other types if specified.
         * @param message UpSkillResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.UpSkillResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpSkillResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpSkillResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetDefaultReqMsg. */
    interface ISetDefaultReqMsg {

        /** SetDefaultReqMsg id */
        id?: (number|null);
    }

    /** Represents a SetDefaultReqMsg. */
    class SetDefaultReqMsg implements ISetDefaultReqMsg {

        /**
         * Constructs a new SetDefaultReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.ISetDefaultReqMsg);

        /** SetDefaultReqMsg id. */
        public id: number;

        /**
         * Creates a new SetDefaultReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetDefaultReqMsg instance
         */
        public static create(properties?: playerSkill.ISetDefaultReqMsg): playerSkill.SetDefaultReqMsg;

        /**
         * Encodes the specified SetDefaultReqMsg message. Does not implicitly {@link playerSkill.SetDefaultReqMsg.verify|verify} messages.
         * @param message SetDefaultReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.ISetDefaultReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetDefaultReqMsg message, length delimited. Does not implicitly {@link playerSkill.SetDefaultReqMsg.verify|verify} messages.
         * @param message SetDefaultReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.ISetDefaultReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetDefaultReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetDefaultReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.SetDefaultReqMsg;

        /**
         * Decodes a SetDefaultReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetDefaultReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.SetDefaultReqMsg;

        /**
         * Verifies a SetDefaultReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetDefaultReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetDefaultReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.SetDefaultReqMsg;

        /**
         * Creates a plain object from a SetDefaultReqMsg message. Also converts values to other types if specified.
         * @param message SetDefaultReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.SetDefaultReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetDefaultReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetDefaultReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetDefaultResMsg. */
    interface ISetDefaultResMsg {

        /** SetDefaultResMsg id */
        id?: (number|null);
    }

    /** Represents a SetDefaultResMsg. */
    class SetDefaultResMsg implements ISetDefaultResMsg {

        /**
         * Constructs a new SetDefaultResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.ISetDefaultResMsg);

        /** SetDefaultResMsg id. */
        public id: number;

        /**
         * Creates a new SetDefaultResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetDefaultResMsg instance
         */
        public static create(properties?: playerSkill.ISetDefaultResMsg): playerSkill.SetDefaultResMsg;

        /**
         * Encodes the specified SetDefaultResMsg message. Does not implicitly {@link playerSkill.SetDefaultResMsg.verify|verify} messages.
         * @param message SetDefaultResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.ISetDefaultResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetDefaultResMsg message, length delimited. Does not implicitly {@link playerSkill.SetDefaultResMsg.verify|verify} messages.
         * @param message SetDefaultResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.ISetDefaultResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetDefaultResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetDefaultResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.SetDefaultResMsg;

        /**
         * Decodes a SetDefaultResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetDefaultResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.SetDefaultResMsg;

        /**
         * Verifies a SetDefaultResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetDefaultResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetDefaultResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.SetDefaultResMsg;

        /**
         * Creates a plain object from a SetDefaultResMsg message. Also converts values to other types if specified.
         * @param message SetDefaultResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.SetDefaultResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetDefaultResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetDefaultResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CleanSkillReqMsg. */
    interface ICleanSkillReqMsg {

        /** CleanSkillReqMsg id */
        id?: (number|null);

        /** CleanSkillReqMsg type */
        type?: (number|null);
    }

    /** Represents a CleanSkillReqMsg. */
    class CleanSkillReqMsg implements ICleanSkillReqMsg {

        /**
         * Constructs a new CleanSkillReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.ICleanSkillReqMsg);

        /** CleanSkillReqMsg id. */
        public id: number;

        /** CleanSkillReqMsg type. */
        public type: number;

        /**
         * Creates a new CleanSkillReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CleanSkillReqMsg instance
         */
        public static create(properties?: playerSkill.ICleanSkillReqMsg): playerSkill.CleanSkillReqMsg;

        /**
         * Encodes the specified CleanSkillReqMsg message. Does not implicitly {@link playerSkill.CleanSkillReqMsg.verify|verify} messages.
         * @param message CleanSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.ICleanSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CleanSkillReqMsg message, length delimited. Does not implicitly {@link playerSkill.CleanSkillReqMsg.verify|verify} messages.
         * @param message CleanSkillReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.ICleanSkillReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CleanSkillReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CleanSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.CleanSkillReqMsg;

        /**
         * Decodes a CleanSkillReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CleanSkillReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.CleanSkillReqMsg;

        /**
         * Verifies a CleanSkillReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CleanSkillReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CleanSkillReqMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.CleanSkillReqMsg;

        /**
         * Creates a plain object from a CleanSkillReqMsg message. Also converts values to other types if specified.
         * @param message CleanSkillReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.CleanSkillReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CleanSkillReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CleanSkillReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CleanSkillResMsg. */
    interface ICleanSkillResMsg {

        /** CleanSkillResMsg skills */
        skills?: (playerSkill.ISkillMsg|null);
    }

    /** Represents a CleanSkillResMsg. */
    class CleanSkillResMsg implements ICleanSkillResMsg {

        /**
         * Constructs a new CleanSkillResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerSkill.ICleanSkillResMsg);

        /** CleanSkillResMsg skills. */
        public skills?: (playerSkill.ISkillMsg|null);

        /**
         * Creates a new CleanSkillResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CleanSkillResMsg instance
         */
        public static create(properties?: playerSkill.ICleanSkillResMsg): playerSkill.CleanSkillResMsg;

        /**
         * Encodes the specified CleanSkillResMsg message. Does not implicitly {@link playerSkill.CleanSkillResMsg.verify|verify} messages.
         * @param message CleanSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerSkill.ICleanSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CleanSkillResMsg message, length delimited. Does not implicitly {@link playerSkill.CleanSkillResMsg.verify|verify} messages.
         * @param message CleanSkillResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerSkill.ICleanSkillResMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CleanSkillResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CleanSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSkill.CleanSkillResMsg;

        /**
         * Decodes a CleanSkillResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CleanSkillResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSkill.CleanSkillResMsg;

        /**
         * Verifies a CleanSkillResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CleanSkillResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CleanSkillResMsg
         */
        public static fromObject(object: { [k: string]: any }): playerSkill.CleanSkillResMsg;

        /**
         * Creates a plain object from a CleanSkillResMsg message. Also converts values to other types if specified.
         * @param message CleanSkillResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerSkill.CleanSkillResMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CleanSkillResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CleanSkillResMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a ReceiveMsg. */
export interface IReceiveMsg {

    /** ReceiveMsg chatType */
    chatType?: (number|null);

    /** ReceiveMsg channelId */
    channelId?: (number|null);

    /** ReceiveMsg message */
    message?: (string|null);

    /** ReceiveMsg playerId */
    playerId?: (number|null);

    /** ReceiveMsg sendName */
    sendName?: (string|null);

    /** ReceiveMsg reveName */
    reveName?: (string|null);

    /** ReceiveMsg time */
    time?: (string|null);

    /** ReceiveMsg voiceData */
    voiceData?: (Uint8Array|null);

    /** ReceiveMsg img */
    img?: (string|null);
}

/** Represents a ReceiveMsg. */
export class ReceiveMsg implements IReceiveMsg {

    /**
     * Constructs a new ReceiveMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceiveMsg);

    /** ReceiveMsg chatType. */
    public chatType: number;

    /** ReceiveMsg channelId. */
    public channelId: number;

    /** ReceiveMsg message. */
    public message: string;

    /** ReceiveMsg playerId. */
    public playerId: number;

    /** ReceiveMsg sendName. */
    public sendName: string;

    /** ReceiveMsg reveName. */
    public reveName: string;

    /** ReceiveMsg time. */
    public time: string;

    /** ReceiveMsg voiceData. */
    public voiceData: Uint8Array;

    /** ReceiveMsg img. */
    public img: string;

    /**
     * Creates a new ReceiveMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReceiveMsg instance
     */
    public static create(properties?: IReceiveMsg): ReceiveMsg;

    /**
     * Encodes the specified ReceiveMsg message. Does not implicitly {@link ReceiveMsg.verify|verify} messages.
     * @param message ReceiveMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceiveMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReceiveMsg message, length delimited. Does not implicitly {@link ReceiveMsg.verify|verify} messages.
     * @param message ReceiveMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReceiveMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReceiveMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiveMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveMsg;

    /**
     * Decodes a ReceiveMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReceiveMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveMsg;

    /**
     * Verifies a ReceiveMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReceiveMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReceiveMsg
     */
    public static fromObject(object: { [k: string]: any }): ReceiveMsg;

    /**
     * Creates a plain object from a ReceiveMsg message. Also converts values to other types if specified.
     * @param message ReceiveMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReceiveMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReceiveMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReceiveMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RoleLoginMsg. */
export interface IRoleLoginMsg {

    /** RoleLoginMsg nickname */
    nickname?: (string|null);

    /** RoleLoginMsg clientModel */
    clientModel?: (string|null);

    /** RoleLoginMsg systemName */
    systemName?: (string|null);

    /** RoleLoginMsg systemVersion */
    systemVersion?: (string|null);
}

/** Represents a RoleLoginMsg. */
export class RoleLoginMsg implements IRoleLoginMsg {

    /**
     * Constructs a new RoleLoginMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoleLoginMsg);

    /** RoleLoginMsg nickname. */
    public nickname: string;

    /** RoleLoginMsg clientModel. */
    public clientModel: string;

    /** RoleLoginMsg systemName. */
    public systemName: string;

    /** RoleLoginMsg systemVersion. */
    public systemVersion: string;

    /**
     * Creates a new RoleLoginMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoleLoginMsg instance
     */
    public static create(properties?: IRoleLoginMsg): RoleLoginMsg;

    /**
     * Encodes the specified RoleLoginMsg message. Does not implicitly {@link RoleLoginMsg.verify|verify} messages.
     * @param message RoleLoginMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoleLoginMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoleLoginMsg message, length delimited. Does not implicitly {@link RoleLoginMsg.verify|verify} messages.
     * @param message RoleLoginMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoleLoginMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoleLoginMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoleLoginMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoleLoginMsg;

    /**
     * Decodes a RoleLoginMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoleLoginMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleLoginMsg;

    /**
     * Verifies a RoleLoginMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoleLoginMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoleLoginMsg
     */
    public static fromObject(object: { [k: string]: any }): RoleLoginMsg;

    /**
     * Creates a plain object from a RoleLoginMsg message. Also converts values to other types if specified.
     * @param message RoleLoginMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoleLoginMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoleLoginMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RoleLoginMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SendMsg. */
export interface ISendMsg {

    /** SendMsg channelId */
    channelId?: (number|null);

    /** SendMsg playerId */
    playerId?: (number|null);

    /** SendMsg message */
    message?: (string|null);

    /** SendMsg voiceData */
    voiceData?: (Uint8Array|null);

    /** SendMsg img */
    img?: (string|null);
}

/** Represents a SendMsg. */
export class SendMsg implements ISendMsg {

    /**
     * Constructs a new SendMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendMsg);

    /** SendMsg channelId. */
    public channelId: number;

    /** SendMsg playerId. */
    public playerId: number;

    /** SendMsg message. */
    public message: string;

    /** SendMsg voiceData. */
    public voiceData: Uint8Array;

    /** SendMsg img. */
    public img: string;

    /**
     * Creates a new SendMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendMsg instance
     */
    public static create(properties?: ISendMsg): SendMsg;

    /**
     * Encodes the specified SendMsg message. Does not implicitly {@link SendMsg.verify|verify} messages.
     * @param message SendMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendMsg message, length delimited. Does not implicitly {@link SendMsg.verify|verify} messages.
     * @param message SendMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendMsg;

    /**
     * Decodes a SendMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendMsg;

    /**
     * Verifies a SendMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendMsg
     */
    public static fromObject(object: { [k: string]: any }): SendMsg;

    /**
     * Creates a plain object from a SendMsg message. Also converts values to other types if specified.
     * @param message SendMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SendMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

}
export default protoMsg;
