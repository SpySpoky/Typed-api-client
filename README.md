# Typed API Client — TypeScript

A lightweight API client built with **TypeScript and Node.js** to practice generics, asynchronous programming, and strongly typed API responses.

This is a learning project using the public JSONPlaceholder REST API.

## Features

- Fetch a single user by ID
- Fetch a list of users
- Fetch posts belonging to a specific user
- Reusable generic `fetchJson<T>()` function
- HTTP status checking and basic error handling
- TypeScript interfaces for API response structures

## Tech Stack

- TypeScript
- Node.js
- Fetch API
- tsx
- JSONPlaceholder API

## Project Structure

```text
typed-api-client/
├── src/
│   ├── index.ts
│   ├── apiClient.ts
│   └── types.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

```bash
git clone https://github.com/SpySpoky/typed-api-client.git
cd typed-api-client
npm install
```

## Running the Project

```bash
npm run dev
```

To check types:

```bash
npm run typecheck
```

To build and run the compiled JavaScript:

```bash
npm run build
npm start
```

## Example Usage

```typescript
import { getUser, getUsers, getPostsByUser } from "./apiClient.js";

const user = await getUser(1);
console.log(user.name);

const users = await getUsers();
users.forEach(user => console.log(user.name));

const posts = await getPostsByUser(1);
posts.forEach(post => console.log(post.title));
```

## Generic API Client

```typescript
export async function fetchJson<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const data: unknown = await response.json();

    return data as T;
}
```

The generic function can be reused for different expected response types, reducing duplicated HTTP request logic.

## TypeScript Concepts Practiced

- Interfaces and type aliases
- Generics (`<T>`)
- `Promise<T>` and `async/await`
- Type-only imports
- Union of expected data shapes
- `unknown` and type assertions
- Typed HTTP responses

## Limitations

- API responses are asserted to the expected TypeScript types without runtime schema validation.
- Basic HTTP error handling is implemented, but custom error classes are not included.
- This is a console-based learning project, not a production-ready API client.

## Author

[SpySpoky](https://github.com/SpySpoky)