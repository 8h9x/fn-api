import { Client } from "../index.js";
import { httpRequest } from "../httpRequest.js";

export async function profileOperationRequest(client: Client, profileOperation: ProfileOperation, profileId: ProfileId, payload?: object) {
    const { body, statusCode } = await httpRequest(client, `https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/game/v2/profile/${client.accountId}/client/${profileOperation}?profileId=${profileId}&rvn=-1`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload ?? {}),
        authed: true
    });

    return { body, statusCode };
};

export type ProfileOperation = "ClaimLoginReward" | "CopyCosmeticLoadout" | "QueryProfile" | "QueryPublicProfile" | "SetCosmeticLockerSlot" | "SetHomebaseName";
export type ProfileId = "athena" | "campaign" | "collection_book_people0" | "collection_book_schematics0" | "collections" | "common_core" | "common_public" | "creative" | "metadata" | "outpost0" | "theater0";