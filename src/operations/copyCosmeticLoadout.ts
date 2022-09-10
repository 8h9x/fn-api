import { profileOperationRequest } from "./profileOperationRequest";

export async function copyCosmeticLoadout(accountId: bigint, profileId: "athena" | "campaign", payload: CopyCosmeticLoadoutPayload) {
    return await profileOperationRequest(accountId, "CopyCosmeticLoadout", profileId, payload);
};

interface CopyCosmeticLoadoutPayload {
    optNewNameForTarget: string;
    sourceIndex: number;
    targetIndex: number;
};