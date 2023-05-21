import React from 'react';
import FileUploader from './components/FileUploader';
import FileHandler from './components/FileHandler';

function App() {
  return (
    <div className="App">
      <h1>Files encrypter decrypter</h1>
      <FileUploader />
      <FileHandler/>
    </div>
  );
}

export default App;
