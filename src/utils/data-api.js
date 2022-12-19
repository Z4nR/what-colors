const BASE_URL = "https://fm100-backend.cyclic.app/v1";

async function addUserData({
  date,
  fullName,
  age,
  gender,
  device,
  testType,
  totalErrorScore,
  errorScoreStatus,
  colorBlindType,
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
    errorScoreStatus,
    colorBlindType,
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
  adminEmail,
  maxTES,
  roomInitial,
  testType,
  device,
}) {
  const data = JSON.stringify({
    date,
    roomName,
    adminEmail,
    maxTES,
    roomInitial,
    testType,
    device,
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
  localStorage.setItem("roomInitial", responseJson.roomInitial);

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

async function deleteRoom(idGroup) {
  const response = await fetch(`${BASE_URL}/delete-room/${idGroup}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
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
  errorScoreStatus,
  colorBlindType,
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
    errorScoreStatus,
    colorBlindType,
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

async function getArticle() {
  const response = await fetch(`${BASE_URL}/article/show-article`);
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
  deleteRoom,
  addClientData,
  getClientsData,
  getArticle,
};
