import React, { useState, useEffect } from 'react';
 
const certificateDashboardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};
 
const dashboardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '500px',
};
 
const textareaStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  overflowX: 'auto',
  marginRight: '700px',
  resize: 'none', // Disable textarea resizing
};
 
const CertificateDashboard = () => {
  const [certificate, setCertificate] = useState('');
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/getCaCertificate');
        const data = await response.text();
        setCertificate(data);
      } catch (error) {
        console.error('Error fetching certificate:', error);
      }
    };
 
    fetchData();
  }, []);
 
  return (
    <div style={{ ...certificateDashboardStyle }}>
      <div style={dashboardContainerStyle}>
        <textarea
          value={certificate}
          readOnly
          style={textareaStyle}
          placeholder="CA certificate"
        />
      </div>
    </div>
  );
};
 
export default function Second() {
  return <CertificateDashboard />;
}
 
