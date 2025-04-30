import React, { useState } from 'react';

export default function Projects() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [tag, setTag] = useState('');
  const [installed, setInstalled] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:8000/projects/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setUploadedFileName(file.name);
      alert('File uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert('Upload failed.');
    }
  };

  const handleTag = () => {
    alert(`Tag "${tag}" saved for ${uploadedFileName}`);
    // Optionally send to backend
  };

  const handleInstallToggle = () => {
    setInstalled(!installed);
    alert(`Marked as ${!installed ? 'Installed' : 'Not Installed'}`);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>📁 Upload & Tag Project</h2>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: 10 }}>
        Upload
      </button>

      {uploadedFileName && (
        <div style={{ marginTop: 20 }}>
          <p><strong>File:</strong> {uploadedFileName}</p>

          <label>
            Tag:
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              style={{ marginLeft: 10 }}
            />
          </label>
          <button onClick={handleTag} style={{ marginLeft: 10 }}>
            Save Tag
          </button>

          <div style={{ marginTop: 20 }}>
            <label>
              <input
                type="checkbox"
                checked={installed}
                onChange={handleInstallToggle}
              />
              {' '}Mark as Installed
            </label>
          </div>
        </div>
      )}
    </div>
  );
}