const API = "https://api.npoint.io/04045c1e2e27829626fc";

export async function getData() {
  const res = await fetch(API);
  return await res.json();
}
