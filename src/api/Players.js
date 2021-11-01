import Base from './Base';

const endpoint = `${Base.endpoint}/players`;

const get = async (id) => {
  const url = id ? `${endpoint}/${id}` : `${endpoint}`;

  return Base.request(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};

const create = async (playerData) => {
  const url = `${endpoint}`;

  return Base.request(url, {
    method: 'POST',
    body: JSON.stringify(playerData),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};

const update = async (id, playerData) => {
  const url = `${endpoint}/${id}/${Base.objToQueryString(playerData)}`;

  return Base.request(url, {
    method: 'PUT',
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};

const destroy = async (id) => {
  const url = `${endpoint}/${id}`;
  return Base.request(url, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
};

const Players = {
  get,
  create,
  update,
  destroy,
};

export default Players;
