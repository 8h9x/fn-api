import { Client } from "../index.js";
import { profileOperationRequest } from "./profileOperationRequest.js";

export async function setHomebaseName(client: Client, homebaseName: string) {
    return await profileOperationRequest(client, "SetHomebaseName", "common_public", { homebaseName });
};