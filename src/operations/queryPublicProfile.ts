import { profileOperationRequest, ProfileId } from "./profileOperationRequest.js";

export async function queryPublicProfile(accountId: bigint) {
    return await profileOperationRequest(accountId, "QueryPublicProfile", "campaign");
};