const BASE_URL = "localhost:5000/v1";

async function login({ firstName, lastName, email, gender, device, testType }) {
  const response = await fetch(`${BASE_URL}/new-user-individual`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      gender,
      device,
      testType,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

export { login };
