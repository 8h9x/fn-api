import { httpRequest } from "../httpRequest";

export async function profileOperationRequest(accountId: bigint, profileOperation: ProfileOperation, profileId: ProfileId, payload?: object) {
    const { body, statusCode } = await httpRequest(`https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/game/v2/profile/${accountId}/client/${profileOperation}?profileId=${profileId}&rvn=-1`, {
        method: "POST",
        body: JSON.stringify(payload ?? {})
    });

    return { body, statusCode };
};

export type ProfileOperation = "CopyCosmeticLoadout" | "QueryProfile" | "QueryPublicProfile" | "SetCosmeticLockerSlot" | "SetHomebaseName";
export type ProfileId = "athena" | "campaign" | "collection_book_people0" | "collection_book_schematics0" | "collections" | "common_core" | "common_public" | "creative" | "metadata" | "outpost0" | "theater0";