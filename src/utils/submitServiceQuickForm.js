export async function submitServiceQuickForm(payload) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/service-quick-form`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || data.error || "Failed to submit request");
  }

  return data;
}
