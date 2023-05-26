function client<T>(endpoint: string, customConfig?: RequestInit): Promise<T> {
  const config = {
    method: 'GET',
    ...customConfig,
  };
  // const URL = `${process.env.REACT_APP_API_URL}/${endpoint}`;
  const URL = `/api/${endpoint}`;
  console.log(URL);

  return fetchResource<T>(URL, config);
}

async function fetchResource<T>(
  endpoint: string,
  config: RequestInit
): Promise<T> {
  const response = await fetch(endpoint, config);

  const data = await response.json();

  if (response.ok) {
    return data;
  }

  return Promise.reject(data);
}

export { client };
