import { Client } from "../index.js";
import { profileOperationRequest } from "./profileOperationRequest.js";

export async function queryPublicProfile(client: Client) {
    return await profileOperationRequest(client, "QueryPublicProfile", "campaign");
};