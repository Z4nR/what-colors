const BASE_URL = "http://localhost:5000/v1";

async function addUserData({
  date,
  fullName,
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
    fullName,
    age,
    gender,
    device,
    testType,
    totalErrorScore,
    comparisonResults,
    discriminantResults,
  });

  const response = await fetch(`${BASE_URL}/new-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  const responseJson = await response.json();

  localStorage.setItem("id", responseJson);

  if (response.status !== 201) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: response };
}

async function getUserData(id) {
  const response = await fetch(`${BASE_URL}/user-data/${id}`);
  await response.json();

  if (response.status !== 201) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: response };
}

export { addUserData };
