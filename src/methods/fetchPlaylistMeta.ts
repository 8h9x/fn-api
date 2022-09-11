import { Client } from "../index.js";
import { httpRequest } from "../httpRequest.js";

export async function fetchPlaylistMeta(client: Client, playlistId: string) {
    const { body, statusCode } = await httpRequest(client, `https://links-public-service-live.ol.epicgames.com/links/api/fn/mnemonic/${playlistId}`, { authed: true });
    return { body, statusCode };
};