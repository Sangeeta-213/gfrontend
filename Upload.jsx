// Upload.js
import React, { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    alert("File uploaded: " + data.file.filename);
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Upload;
