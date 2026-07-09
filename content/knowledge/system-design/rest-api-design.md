---
title: "REST API design basics"
description: "Conventions that make an API predictable and pleasant to use."
date: "2026-07-07"
tags: [api, rest, http]
---

## Resources, not actions

URLs name *things*; HTTP methods are the *verbs*.

| Method | URL | Meaning |
| --- | --- | --- |
| GET | `/users` | List users |
| GET | `/users/42` | Get one user |
| POST | `/users` | Create a user |
| PATCH | `/users/42` | Update part of a user |
| DELETE | `/users/42` | Delete a user |

## Status codes that matter

- `200` OK, `201` Created, `204` No Content
- `400` bad input, `401` not logged in, `403` logged in but not allowed, `404` not found
- `500` — your bug, not the client's

## Small habits

- Version the API: `/api/v1/...`
- Paginate list endpoints from day one.
- Return errors in a consistent shape: `{ "error": { "code": ..., "message": ... } }`
