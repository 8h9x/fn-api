import { profileOperationRequest, ProfileId } from "./profileOperationRequest";

export async function queryPublicProfile(accountId: bigint) {
    return await profileOperationRequest(accountId, "QueryPublicProfile", "campaign");
};