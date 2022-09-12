import { Client } from "../index.js";
import { profileOperationRequest } from "./profileOperationRequest.js";

export async function claimLoginReward(client: Client) {
    return await profileOperationRequest(client, "ClaimLoginReward", "campaign");
};