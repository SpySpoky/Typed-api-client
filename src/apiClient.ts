import type { User, Post } from "./types.js";

export async function getUser(id: number): Promise<User> {
    return fetchJson<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export async function getUsers(): Promise<User[]> {
    return fetchJson<User[]>("https://jsonplaceholder.typicode.com/users");
}

export async function fetchJson<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data: unknown = await response.json();

    return data as T;    
}

export async function getPostsByUser(userId: number): Promise<Post[]> {
    return fetchJson<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
}