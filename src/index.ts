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
        value: string;
    };
    events?: Partial<EventHandlers>;
};

export interface DeviceAuth {
    deviceId: string;
    accountId: string;
    secret: string;
};

export interface Client {
    accountId: string;
    auths: Map<string, AccessResponse>;
};

export interface AccessResponse {
    access_token: string;
};

export interface EventHandlers {
    tokenRefresh: (refreshData: unknown) => unknown;
};

export * as consts from "./consts.js";
export { httpRequest } from "./httpRequest.js";

export { authenticate } from "./auth/authenticate.js";
export { createDeviceAuth } from "./auth/createDeviceAuth.js";
export { generateClientCredentials } from "./auth/generateClientCredentials.js";

export { fetchFavoritePlaylists } from "./methods/fetchFavoritePlaylists.js";
export { fetchPlaylistMeta } from "./methods/fetchPlaylistMeta.js";

export { profileOperationRequest, ProfileId } from "./operations/profileOperationRequest.js";
export { claimLoginReward } from "./operations/claimLoginReward.js";
export { copyCosmeticLoadout } from "./operations/copyCosmeticLoadout.js";
export { queryProfile } from "./operations/queryProfile.js";
export { queryPublicProfile } from "./operations/queryPublicProfile.js";
export { setCosmeticLockerSlot } from "./operations/setCosmeticLockerSlot.js";
export { setHomebaseName } from "./operations/setHomebaseName.js";