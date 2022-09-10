import { request } from "undici";

export async function httpRequest(url: string, options?: HttpRequestOpts) {
    const { body, statusCode } = await request(url, {
        method: options?.method ?? "GET",
        headers: options?.headers ?? {},
        body: options?.body ?? null
    });
    return { body, statusCode };
};

interface HttpRequestOpts {
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: string;
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";