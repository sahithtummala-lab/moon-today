export async function getMoonData() {
  const response = await fetch(
    "https://aa.usno.navy.mil/api/moon/phases/date?date=" +
      new Date().toISOString().split("T")[0]
  );

  if (!response.ok) {
    throw new Error("Failed to fetch moon data");
  }

  const data = await response.json();

  console.log("Moon API response:", data);

  return data;
}