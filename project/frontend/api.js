// Shared JSON transport. Callers supply an agreed endpoint and optional JSON body.
window.HobbyLink = window.HobbyLink || {};
window.HobbyLink.request = async function request(path, { method = 'GET', body, signal } = {}) {
  const headers = { Accept: 'application/json' };
  const options = { method, headers, signal };
  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(body);
  }

  const response = await fetch(path, options);
  if (!response.ok) {
    const error = new Error(`Request failed (HTTP ${response.status})`);
    error.status = response.status;
    throw error;
  }

  const content = await response.text();
  return content ? JSON.parse(content) : null;
};
