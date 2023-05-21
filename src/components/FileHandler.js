import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const BASE_BACKEND_URL= process.env.REACT_APP_BACKEND_URL;

const FileHandler = () => {
  const [encryptedFiles, setEncryptedFiles] = useState([]);
  const [decryptedFiles, setDecryptedFiles] = useState([]);

  const handleFetchEncrypted = async () => {
    try {
      const response = await axios.get(`${BASE_BACKEND_URL}/fetch-encrypted`);
      setEncryptedFiles(response.data.files);
      console.log('Encrypted files:', response.data.files);
    } catch (error) {
      console.error('Error fetching encrypted files:', error);
    }
  };
  const handleFetchDecrypted = async () => {
    try {
      const response = await axios.get(`${BASE_BACKEND_URL}/fetch-decrypted`);
      const decryptedFiles = response.data.files;
      setDecryptedFiles(decryptedFiles);
    } catch (error) {
      console.error('Error fetching decrypted files:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_BACKEND_URL}/delete`);
      console.log('Files deleted successfully');
      setDecryptedFiles([]);
    } catch (error) {
      console.error('Error deleting files:', error);
    }
  };

  const handleDecryptAll = async () => {
    try {
      await axios.post(`${BASE_BACKEND_URL}/decrypt-all`);
      console.log('Files decrypted successfully');
    } catch (error) {
      console.error('Error decrypting files:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete all decrypted</button>
      <button onClick={handleDecryptAll}>Decrypt All</button>
      <button onClick={handleFetchEncrypted}>Fetch Encrypted</button>
      <button onClick={handleFetchDecrypted}>Fetch Decrypted</button>
      <div>
        <h2>Encrypted Files:</h2>
        {encryptedFiles.map((file, index) => (
          <p key={index}>{file}</p>
        ))}
      </div>
      <div>
        <h2>Decrypted Files:</h2>
        {decryptedFiles.map((file, index) => (
          <p key={index}>{file}</p>
        ))}
      </div>
    </div>
  );
};

export default FileHandler;
