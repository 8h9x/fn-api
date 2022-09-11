import { profileOperationRequest } from "./profileOperationRequest.js";

export async function setHomebaseName(accountId: bigint, homebaseName: string) {
    return await profileOperationRequest(accountId, "SetHomebaseName", "common_public", { homebaseName });
};