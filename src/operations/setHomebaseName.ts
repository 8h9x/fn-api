import { profileOperationRequest } from "./profileOperationRequest";

export async function setHomebaseName(accountId: bigint, homebaseName: string) {
    return await profileOperationRequest(accountId, "SetHomebaseName", "common_public", { homebaseName });
};