const BASE_URL = "http://localhost:5000/v1";

async function addUserData({
  date,
  firstName,
  lastName,
  age,
  gender,
  device,
  testType,
  totalErrorScore,
  comparisonResults,
  discriminantResults,
}) {
  const data = JSON.stringify({
    date,
    firstName,
    lastName,
    age,
    gender,
    device,
    testType,
    totalErrorScore,
    comparisonResults,
    discriminantResults,
  });

  console.log(data);

  const response = await fetch(`${BASE_URL}/new-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  await response.json();

  if (response.status !== 201) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: response };
}

export { addUserData };
