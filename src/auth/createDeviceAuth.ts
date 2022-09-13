import { Client } from "../index.js";
import { httpRequest } from "../httpRequest.js";

export async function createDeviceAuth(client: Client) {
    const { body, statusCode } = await httpRequest(client, `https://account-public-service-prod.ol.epicgames.com/account/api/public/account/${client.accountId}/deviceAuth`, { method: "POST" });
    return { body, statusCode };
};