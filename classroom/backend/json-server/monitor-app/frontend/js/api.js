const domain = 'http://localhost:3000';

export async function read(resource) {
  const response = await fetch(`${domain}/${resource}`);
  return await response.json();
}

export async function create(resource, data) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${domain}/${resource}`, config);

  return await response.json();
}

export async function update(resource, data) {
  const config = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${domain}/${resource}`, config);

  return await response.json();
}

export async function remove(resource, data) {
  const config = {
    method: 'DELETE',
  };

  const response = await fetch(`${domain}/${resource}`, config);

  return response.ok;
}
