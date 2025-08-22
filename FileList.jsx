import React, { useEffect, useState } from 'react';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/files')
      .then((res) => res.json())
      .then(setFiles);
  }, []);

  return (
    <ul>
      {files.map((f) => (
        <li key={f}>
          <a
            href={`http://localhost:5000/uploads/${f}`}
            target="_blank"
            rel="noreferrer"
          >
            {f}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FileList;
