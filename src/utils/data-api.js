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

  localStorage.setItem("id", responseJson._id);

  if (response.status !== 201) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function getUserData(id) {
  const response = await fetch(`${BASE_URL}/user-data/${id}`);
  const responseJson = await response.json();

  if (response.status !== 200) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function createTestRoom({
  date,
  roomName,
  adminName,
  adminEmail,
  testPurpose,
  maxTES,
  roomInitial,
  testType,
}) {
  const data = JSON.stringify({
    date,
    roomName,
    adminName,
    adminEmail,
    testPurpose,
    maxTES,
    roomInitial,
    testType,
  });

  const response = await fetch(`${BASE_URL}/create-room`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  const responseJson = await response.json();

  localStorage.setItem("idGroup", responseJson._id);

  if (response.status !== 201) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: response };
}

async function getRoomData(idGroup) {
  const response = await fetch(`${BASE_URL}/room/${idGroup}`);
  const responseJson = await response.json();

  if (response.status !== 200) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function verifyCode(code) {
  const response = await fetch(`${BASE_URL}/verify-code/${code}`);
  const responseJson = await response.json();

  const isAdmin = responseJson.code.find((c) => c.key === code)._id === "01";

  localStorage.setItem("idGroup", responseJson._id);

  if (response.status !== 201) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: isAdmin };
}

async function addClientData({
  idGroup,
  date,
  fullName,
  age,
  gender,
  device,
  testType,
  totalErrorScore,
  comparisonResults,
  discriminantResults,
  status,
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
    status,
  });

  const response = await fetch(`${BASE_URL}/${idGroup}/client`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  const responseJson = await response.json();

  if (response.status !== 201) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function getClientsData(idGroup) {
  const response = await fetch(`${BASE_URL}/${idGroup}/admin`);
  const responseJson = await response.json();

  if (response.status !== 200) {
    alert(response.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

export {
  addUserData,
  getUserData,
  createTestRoom,
  getRoomData,
  verifyCode,
  addClientData,
  getClientsData,
};
