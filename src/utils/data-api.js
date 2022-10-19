const BASE_URL = "localhost:5000/v1";

async function addUserData({
  date,
  firstName,
  lastName,
  age,
  gender,
  device,
  testType,
  totalErrorScore,
  comparisonResult,
  discriminantResult,
}) {
  const response = await fetch(`${BASE_URL}/new-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date,
      firstName,
      lastName,
      age,
      gender,
      device,
      testType,
      totalErrorScore,
      comparisonResult,
      discriminantResult,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

export { addUserData };
