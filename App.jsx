import React from 'react';

import './App.css';

import Upload from "./gdrivecl/Upload";
import FileList from "./gdrivecl/FileList";

function App() {
  return (
    <div className="container">
      <h1>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"
          alt="Google Drive Icon"
          style={{ width: 32, marginRight: 10 }}
        />
        Google Drive Clone
      </h1>

      <Upload />

      <hr />

      <FileList />
    </div>
  );
}

export default App;



