---
title: "The Node.js event loop"
description: "Why Node can handle thousands of connections on a single thread."
date: "2026-07-08"
tags: [nodejs, async]
---

Node.js runs JavaScript on a **single thread**, but I/O (network, disk) is delegated to the OS. The event loop is the mechanism that picks up finished I/O and runs your callbacks.

## The key idea

```js
console.log("1");

setTimeout(() => console.log("3"), 0);

Promise.resolve().then(() => console.log("2"));

console.log("1.5");
// Output: 1, 1.5, 2, 3
```

- Synchronous code runs first, to completion.
- **Microtasks** (promise callbacks) run after the current script, before timers.
- **Macrotasks** (timers, I/O callbacks) run in later phases of the loop.

## Why it matters for backend work

Blocking the event loop (heavy CPU work, sync file reads) blocks *every* request. For CPU-heavy tasks, use worker threads or a queue.
