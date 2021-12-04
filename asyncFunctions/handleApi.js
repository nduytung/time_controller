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
  try {
    let res = await fetch(`${API_ENDPOINT}/task/`, {
      method: 'GET',
      headers: {
        'Content-Type': `Bearer ${userToken}`,
      },
    });
    let resolve = await res.json();
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
