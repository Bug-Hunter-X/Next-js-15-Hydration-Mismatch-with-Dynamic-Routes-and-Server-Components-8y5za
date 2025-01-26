In Next.js 15, an uncommon bug can occur when using the `app` directory and server components with dynamic routes.  If you're fetching data within a server component using `fetch` or similar, and that data is used to conditionally render components, you might encounter hydration mismatches. This happens because the client-side hydration process might receive different data than what the server rendered initially, leading to unexpected behavior or errors. This is particularly problematic if the conditional rendering is based on data that might change rapidly or unpredictably.