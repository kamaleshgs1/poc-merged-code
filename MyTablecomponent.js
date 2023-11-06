import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyTableComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [infoResponse, setInfoResponse] = useState('');
  const [listResponse, setListResponse] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/listAll');
        setListResponse(response.data.cars);
        setMessage('List of batch details fetched successfully.');
      } catch (error) {
        console.error('Error fetching batch list:', error);
        setListResponse([]);
        setMessage('Error fetching batch list.');
      }
    }

    fetchData();
  }, []); // The empty dependency array ensures this effect runs once on component mount

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getDetailsByID/${searchTerm}`);
      const formattedInfoResponse = JSON.stringify(response.data, null, 2);
      setInfoResponse(formattedInfoResponse);
      setMessage('Batch details fetched successfully.');
    } catch (error) {
      console.error('Error fetching batch details:', error);
      setInfoResponse('Error fetching batch details.');
      setMessage('Error fetching batch details.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <div style={{ padding: '30px', color: 'black', marginTop: '10px', marginRight: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter Batch ID"
            style={{ width: '200px', height: '22px', marginRight: '10px', marginTop: '50px' }}
          />
          <button
            style={{ backgroundColor: 'navy', color: 'white', width: '100px', height: '42px', marginTop: '50px' }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', marginRight: '10px' }}>
        <pre>{infoResponse}</pre>
        <table style={{ width: '100%', height: '200px' , marginRight:'550px'}} border={1}>
          <thead>
            <tr style={{ height: '40px' }}>
              <th style={{ backgroundColor: 'navy', color: 'white', fontWeight: 'normal' }}>BATCHID</th>
              <th style={{ backgroundColor: 'navy', color: 'white', fontWeight: 'normal' }}>BATCHNAME</th>
              <th style={{ backgroundColor: 'navy', color: 'white', fontWeight: 'normal' }}>CREATEDDATE</th>
              <th style={{ backgroundColor: 'navy', color: 'white', fontWeight: 'normal' }}>DESCRIPTION</th>
              <th style={{ backgroundColor: 'navy', color: 'white', fontWeight: 'normal' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {searchTerm === ''
              ? listResponse.map((batch, index) => (
                  <tr key={index}>
                    <td>{batch.BATCHID}</td>
                    <td>{batch.BATCHNAME}</td>
                    <td>{batch.CREATEDDATE}</td>
                    <td>{batch.DESCRIPTION}</td>
                    <td>{batch.STATUS}</td>
                  </tr>
                ))
              : listResponse
                  .filter((batch) => batch.BATCHID.toString() === searchTerm)
                  .map((batch, index) => (
                    <tr key={index}>
                      <td>{batch.BATCHID}</td>
                      <td>{batch.BATCHNAME}</td>
                      <td>{batch.CREATEDDATE}</td>
                      <td>{batch.DESCRIPTION}</td>
                      <td>{batch.STATUS}</td>
                    </tr>
                  ))}
          </tbody>
        </table>
        <pre>{message}</pre>
      </div>
    </div>
  );
};

export default MyTableComponent;
