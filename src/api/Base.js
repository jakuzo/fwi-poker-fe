const endpoint = 'http://localhost:3001';

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

const request = (url, options) => {
  const args = { ...options, mode: 'cors', headers };
  return fetch(url, args);
};

const objToQueryString = (obj) => {
  let queryString = '?';
  Object.keys(obj).forEach((key) => {
    queryString = queryString.concat(`${key}=${obj[`${key}`]}&`);
  });
  return queryString;
};

const Base = {
  request,
  headers,
  endpoint,
  objToQueryString,
};

export default Base;
