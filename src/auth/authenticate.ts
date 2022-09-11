import { httpRequest } from "../httpRequest";

export async function authenticate() {
    return await httpRequest("https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token", {
        method: "POST"
    });
};