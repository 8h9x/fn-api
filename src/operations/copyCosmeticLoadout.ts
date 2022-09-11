import { Client } from "../index.js";
import { profileOperationRequest } from "./profileOperationRequest.js";

export async function copyCosmeticLoadout(client: Client, profileId: "athena" | "campaign", payload: CopyCosmeticLoadoutPayload) {
    return await profileOperationRequest(client, "CopyCosmeticLoadout", profileId, payload);
};

interface CopyCosmeticLoadoutPayload {
    optNewNameForTarget: string;
    sourceIndex: number;
    targetIndex: number;
};