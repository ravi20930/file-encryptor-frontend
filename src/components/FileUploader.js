import React, { useState, useRef } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    try {
      await axios.post('http://localhost:3000/upload-multiple', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Files uploaded successfully');
      setSelectedFiles([]);
      fileInputRef.current.value = ''; // Clear the file selector
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileSelect} ref={fileInputRef} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
