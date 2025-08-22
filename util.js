// utils.js
export async function listFiles(token) {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='root'+in+parents`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
}

export async function uploadFile(token, file) {
  const metadata = {
    name: file.name,
    mimeType: file.type,
  };

  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('file', file);

  const res = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: form,
    }
  );
  return res.json();
}
