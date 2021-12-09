const API_ENDPOINT = 'http://192.168.100.8:3001';
import {ToastAndroid} from 'react-native';

const handleErr = message => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
};

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
    if (resolve.success !== true) handleErr(resolve.message);
    return resolve;
  } catch (err) {
    handleErr(err);
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
    if (resolve.success !== true) handleErr(resolve.message);
    return resolve;
  } catch (err) {
    handleErr(err);
  }
};

export const getAllTaskInfo = async userToken => {
  try {
    let res = await fetch(`${API_ENDPOINT}/task/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });
    let resolve = await res.json();
    if (resolve.success !== true) handleErr(resolve.message);
    return resolve;
  } catch (err) {
    handleErr(err);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}/user/all`);
    const data = await res.json();
    if (data.success !== true) handleErr(data.message);
    return data;
  } catch (err) {
    handleErr(err);
  }
};

export const createNewTask = async (taskData, token) => {
  console.log(taskData);
  try {
    const res = await fetch(`${API_ENDPOINT}/task/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(taskData),
    });
    const data = await res.json();
    if (data.success !== true) handleErr(data.message);

    return data;
  } catch (err) {
    handleErr(err);
  }
};

export const handleGetUserInfo = async token => {
  try {
    const data = await fetch(`${API_ENDPOINT}/user/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await data.json();
    if (res.success !== true) handleErr(res.message);

    return res;
  } catch (err) {
    handleErr(err);
  }
};

export const changeUserInfo = async (userInfo, token) => {
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
    if (res.success !== true) handleErr(res.message);

    return res;
  } catch (err) {
    handleErr(err);
  }
};

export const handleDeleteTask = async (taskId, token) => {
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
    if (res.success !== true) handleErr(res.message);

    return res;
  } catch (err) {
    handleErr(err);
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
    if (res.success !== true) handleErr(res.message);

    return res;
  } catch (err) {
    handleErr(err);
  }
};

export const setUserSetting = async (setting, token) => {
  try {
    const data = await fetch(`${API_ENDPOINT}/user/edit-time`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + token,
      },
      body: JSON.stringify(setting),
    });

    const res = await data.json();
    if (res.success !== true) handleErr(res.message);

    return res;
  } catch (err) {
    handleErr(err);
  }
};

export const handleAddPomodoro = async (taskId, token) => {
  console.log(taskId);
  try {
    const data = await fetch(`${API_ENDPOINT}/task/update/pomodoro`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(taskId),
    });

    const res = await data.json();
    console.log(res);
    if (res.success !== true) handleErr(res.message);
    return res;
  } catch (err) {
    handleErr(err);
  }
};
