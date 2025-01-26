# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a common hydration mismatch bug in Next.js 15's `app` directory when using server components with dynamic routes. The issue arises from inconsistencies in data fetched during server-side rendering and client-side hydration.

## Bug Description:
The bug is caused by a race condition, where the client fetches data after the server renders the page.  If the client's data differs from the server's, Next.js throws an error.