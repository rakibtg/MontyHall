export const API_PREFIX = "http://localhost:5500/api";

export default async ({ method = "get", endpoint = "", payload = {} }) => {
  const url = `${API_PREFIX}/${endpoint}`;
  const response = await fetch(url, {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
    },
    body: method.toLowerCase() === "get" ? null : JSON.stringify(payload),
  });
  return response.json();
};
