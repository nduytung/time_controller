const API_ENDPOINT = 'http://192.168.100.8:3001';

export const registerHandler = async (
  fullname,
  username,
  password,
  sex,
  email,
) => {
  const data = {fullname, username, password, sex, email};
  try {
    let res = await fetch(`${API_ENDPOINT}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let resolve = await res.json();
    console.log('info: ');
    console.log(resolve);
    return resolve;
  } catch (err) {
    console.log('ERROR GETTING API: ' + err);
  }
};

export const loginHandler = async (username, password) => {
  const data = {username, password};
  try {
    let res = await fetch(`${API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let resolve = await res.json();
    return resolve;
  } catch (err) {
    console.log('LOGIN ERR: ' + err);
  }
};

export const getAllTaskInfo = async userToken => {
  const newToken = JSON.stringify(userToken);
  try {
    let res = await fetch(`${API_ENDPOINT}/task/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${newToken}`,
      },
    });
    let resolve = await res.json();
    console.log(resolve);
    return resolve;
  } catch (err) {
    console.log('FETCH ERR: ' + err);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}/user/all`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log('GET USER ERR: ' + err);
  }
};

export const createNewTask = async (taskData, token) => {
  const newToken = JSON.stringify(token);
  console.log(taskData);
  try {
    const res = await fetch(`${API_ENDPOINT}/task/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${newToken}`,
      },
      body: JSON.stringify(taskData),
    });
    const data = await res.json();
    console.log('answer: ');
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const handleGetUserInfo = async token => {
  const newToken = JSON.stringify(token);
  try {
    const data = await fetch(`${API_ENDPOINT}/user/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${newToken}`,
      },
    });
    const res = await data.json();
    console.log(res);
    return res;
  } catch (err) {
    console.log('get API user info err: ' + err);
  }
};

export const changeUserInfo = async (userInfo, token) => {
  const newToken = JSON.stringify(token);

  try {
    const data = await fetch(`${API_ENDPOINT}/user/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userInfo),
    });
    const res = await data.json();
    return res;
  } catch (err) {
    console.log('change user info err: ' + err);
  }
};

export const handleDeleteTask = async (taskId, token) => {
  const newToken = JSON.stringify(token);
  try {
    const data = await fetch(`${API_ENDPOINT}/task/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({taskId}),
    });
    const res = await data.json();
    return res;
  } catch (err) {
    console.log('Delete task failed: ' + err);
  }
};

export const handleEditTask = async taskInfo => {
  try {
    const data = await fetch(`${API_ENDPOINT}/task/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskInfo),
    });
    const res = await data.json();
    return res;
  } catch (err) {
    console.log('edit task err: ' + err);
  }
};

export const setUserSetting = async (setting, token) => {
  const newToken = JSON.stringify(token);
  console.log(setting);
  try {
    const data = await fetch(`${API_ENDPOINT}/user/edit-time`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + newToken,
      },
      body: JSON.stringify(setting),
    });

    const res = await data.json();
    console.log(res);
    return res;
  } catch (err) {
    console.log('set setting err: ' + err);
  }
};

export const handleAddPomodoro = async taskId => {
  try {
    const data = await fetch(`${API_ENDPOINT}/update/pomodoro`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskId),
    });

    const res = await data.json();
    console.log(res);
    return res;
  } catch (err) {
    console.log('set pomodoro err: ' + err);
  }
};
