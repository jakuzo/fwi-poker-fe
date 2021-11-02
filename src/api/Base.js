const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'http://44.225.53.153:3001'
    : 'http://localhost:3001';

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

const request = (url, options) => {
  console.log('BASE ENDPOINT: ', endpoint);
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
