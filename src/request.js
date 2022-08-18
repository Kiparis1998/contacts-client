export const hostname = 'https://contacts-api-learn.herokuapp.com/api/contacts';

export const request = async (url, method = 'GET', body = null) => {
  const data = await fetch(`${url}`, {
    method,
    body,
  });

  const result = await data.json();
  return result;
};
