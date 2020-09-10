export const API_PREFIX = "/api";

export const request = async ({
  method = "get",
  endpoint = "",
  payload = {},
}) => {
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
