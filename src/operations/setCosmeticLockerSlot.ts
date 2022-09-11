import { Client } from "../index.js";
import { profileOperationRequest } from "./profileOperationRequest.js";

export async function setCosmeticLockerSlot(client: Client, profileId: "athena" | "campaign", payload: SetCosmeticLockerSlotPayload) {
    return await profileOperationRequest(client, "SetCosmeticLockerSlot", profileId, payload);
};

interface SetCosmeticLockerSlotPayload {
    lockerItem: string;
    category: string;
    itemToSlot: string;
    slotIndex: number;
    variantUpdates: Array<unknown>;
    optLockerUseCountOverride: number;
};