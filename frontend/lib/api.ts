const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function request(path: string, options: RequestInit = {}) {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });

    const isEmpty = response.status === 204;
    const data = isEmpty ? null : await response.json();

    if (!response.ok) {
        throw new Error(data?.message || "Something went wrong");
    }

    return data;
}

export const api = {
    get: (path: string) => request(path),
    post: (path: string, body: unknown) =>
        request(path, { method: "POST", body: JSON.stringify(body) }),
    put: (path: string, body: unknown) =>
        request(path, { method: "PUT", body: JSON.stringify(body) }),
    delete: (path: string) => request(path, { method: "DELETE" }),
};