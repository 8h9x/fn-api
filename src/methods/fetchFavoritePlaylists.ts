import { Client } from "../index.js";
import { httpRequest } from "../httpRequest.js";

export async function fetchFavoritePlaylists(client: Client) {
    const { body, statusCode } = await httpRequest(client, `https://fn-service-discovery-live-public.ogs.live.on.epicgames.com/api/v1/links/favorites/${client.accountId}`);
    return { body, statusCode };
};