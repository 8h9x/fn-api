import { AUTH_CLIENTS } from "../consts.js";
import { Client } from "../index.js";
import { httpRequest } from "../httpRequest.js";

export async function generateClientCredentials() {
    const basicToken = Buffer.from(`${AUTH_CLIENTS.IOS.ID}:${AUTH_CLIENTS.IOS.SECRET}`).toString("base64");

    const { body, statusCode } = await httpRequest({} as Client, "https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${basicToken}`
        },
        body: "grant_type=client_credentials",
        authed: false
    });

    return { body, statusCode };
};