import { authenticate } from "./auth/authenticate.js";

export async function createClient(options: CreateClientOpts): Promise<Client> {
    const { body } = await authenticate(options);
    const data = await body.json();

    return {
        accountId: data.account_id,
        auths: new Map().set("IOS", data)
    };
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
    auths: Map<string, AccessResponse>;
};

export interface AccessResponse {
    access_token: string;
};

export interface EventHandlers {
    ready: (client: Client) => unknown;
    tokenRefresh: (refreshData: unknown) => unknown;
};

export { httpRequest } from "./httpRequest.js";
export { profileOperationRequest, ProfileOperation, ProfileId } from "./operations/profileOperationRequest.js";
export { copyCosmeticLoadout } from "./operations/copyCosmeticLoadout.js";
export { queryProfile } from "./operations/queryProfile.js";
export { queryPublicProfile } from "./operations/queryPublicProfile.js";
export { setCosmeticLockerSlot } from "./operations/setCosmeticLockerSlot.js";
export { setHomebaseName } from "./operations/setHomebaseName.js";