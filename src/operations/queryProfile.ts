import { Client } from "../index.js";
import { profileOperationRequest, ProfileId } from "./profileOperationRequest.js";

export async function queryProfile(client: Client, profileId: ProfileId) {
    return await profileOperationRequest(client, "QueryProfile", profileId);
};