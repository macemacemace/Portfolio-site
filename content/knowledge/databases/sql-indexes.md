---
title: "How SQL indexes work"
description: "What an index actually is, when it helps, and when it hurts."
date: "2026-07-09"
tags: [sql, postgresql, performance]
---

An index is a separate data structure (usually a **B-tree**) that lets the database find rows without scanning the whole table.

## When indexes help

- Columns used in `WHERE` clauses on large tables
- Columns used in `JOIN` conditions
- Columns used in `ORDER BY` (the index is already sorted)

```sql
CREATE INDEX idx_users_email ON users (email);

-- Now this uses an index scan instead of a sequential scan:
SELECT * FROM users WHERE email = 'martin@example.com';
```

## When they hurt

Every index must be updated on `INSERT`, `UPDATE` and `DELETE`, so writes get slower. Don't index everything — index what your queries actually filter on.

> Rule of thumb: use `EXPLAIN ANALYZE` to check what the query planner really does before and after adding an index.
