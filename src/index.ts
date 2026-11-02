import { fetchJson, getPostsByUser } from "./apiClient.js";
import type { User } from "./types.js";

// const user = await fetchJson<User>("https://jsonplaceholder.typicode.com/users/1");
// console.log(user.name);

// const users = await fetchJson<User[]>("https://jsonplaceholder.typicode.com/users");
// users.forEach(user => {
//     console.log(user.name);
// });

const posts = await getPostsByUser(1);

posts.forEach((post) => {
    console.log(post.title);
});