import { profileOperationRequest } from "./profileOperationRequest";

export async function setCosmeticLockerSlot(accountId: bigint, profileId: "athena" | "campaign", payload: SetCosmeticLockerSlotPayload) {
    return await profileOperationRequest(accountId, "SetCosmeticLockerSlot", profileId, payload);
};

interface SetCosmeticLockerSlotPayload {
    lockerItem: string;
    category: string;
    itemToSlot: string;
    slotIndex: number;
    variantUpdates: Array<unknown>;
    optLockerUseCountOverride: number;
};