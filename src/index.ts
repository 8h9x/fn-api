import { AUTH_CLIENTS } from "./consts";
import { authenticate } from "./auth/authenticate";

export async function createClient(options: CreateClientOpts): Promise<Client> {
    // const basicToken = Buffer.from(`${AUTH_CLIENTS.IOS.ID}:${AUTH_CLIENTS.IOS.SECRET}`).toString("base64");

    return {
        auths: new Map()
    } as Client;
};

export interface CreateClientOpts {
    auth: {
        type: "deviceAuth";
        value: DeviceAuth
    } | {
        type: "authorizationCode" | "exchangeCode" | "refreshToken";
        value: bigint;
    };
    handlers?: Partial<EventHandlers>;
};

export interface DeviceAuth {
    deviceId: bigint;
    accountId: bigint;
    secret: string;
};

export interface Client {
    accountId: bigint;
    auths: Map<unknown, unknown>;
};

export interface EventHandlers {
    ready: (client: Client) => unknown;
    tokenRefresh: (refreshData: unknown) => unknown;
};

export { httpRequest } from "./httpRequest";
export { profileOperationRequest, ProfileOperation, ProfileId } from "./operations/profileOperationRequest";
export { copyCosmeticLoadout } from "./operations/copyCosmeticLoadout";
export { queryProfile } from "./operations/queryProfile";
export { queryPublicProfile } from "./operations/queryPublicProfile";
export { setCosmeticLockerSlot } from "./operations/setCosmeticLockerSlot";
export { setHomebaseName } from "./operations/setHomebaseName";