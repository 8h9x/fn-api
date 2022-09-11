import { profileOperationRequest, ProfileId } from "./profileOperationRequest.js";

export async function queryProfile(accountId: bigint, profileId: ProfileId) {
    return await profileOperationRequest(accountId, "QueryProfile", profileId);
};