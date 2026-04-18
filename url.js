const isDevelopment = process.env.NODE_ENV === "development";

export const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  (isDevelopment
    ? "http://localhost:5000"
    : "https://api.vaishakhimatrimony.com");
