import { AUTH_CLIENTS } from "../consts.js";
import { CreateClientOpts, Client } from "../index.js";
import { httpRequest } from "../httpRequest.js";

export async function authenticate(options: CreateClientOpts) {
    const basicToken = Buffer.from(`${AUTH_CLIENTS.IOS.ID}:${AUTH_CLIENTS.IOS.SECRET}`).toString("base64");

    const { body, statusCode } = await httpRequest({} as Client, "https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${basicToken}`
        },
        body: `grant_type=authorization_code&code=${options.auth.value.toString(16)}`,
        authed: false
    });

    return { body, statusCode };
};