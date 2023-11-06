import React, { useState } from 'react';
import axios from 'axios';
import Second from './Second';
import Cbatch from './Cbatch';
import MyTableComponent from './MyTablecomponent'; // Import MyTableComponent
import Dbatch from './Dbatch.js';
import GraphPage from './GraphPage';

const InputPage = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [batchSearchText, setBatchSearchText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [networkData, setNetworkData] = useState(null);
  const [isGraphBatchVisible, setGraphhBatchVisible] = useState(false);
  const [isDispatchBatchVisible, setDispatchBatchVisible] = useState(false);
  const [isViewBatchVisible, setViewBatchVisible] = useState(false);
  const [isCreateBatchVisible, setCreateBatchVisible] = useState(false);
  const [isViewBatchContentVisible, setViewBatchContentVisible] = useState(false);
  const [enrollOptionsVisible, setEnrollOptionsVisible] = useState(false);
  const [isTraceabilityVisible, setTraceabilityVisible] = useState(false);
  const [isCertificateVisible, setCertificateVisible] = useState(false);
  const [listResponse, setListResponse] = useState(''); // Added
  const [message, setMessage] = useState(''); // Added

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBatchSearchChange = (e) => {
    setBatchSearchText(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleEnrollClick = () => {
    setEnrollOptionsVisible(true);
  };

  const handleTraceabilityClick = () => {
    setTraceabilityVisible(true);
  };

  const handleCertificateClick = () => {
    setGraphhBatchVisible(false);
    setViewBatchVisible(false);
    setDispatchBatchVisible(false);
    setCreateBatchVisible(false);
    setCertificateVisible(true);
  };

  const handleDispatchBatchClick = () => {
    setGraphhBatchVisible(false);
    setDispatchBatchVisible(true);
    setViewBatchVisible(false);
    setCreateBatchVisible(false);
    setCertificateVisible(false);
  };
  const handleGraphBatchClick = () => {
    setGraphhBatchVisible(true);
    setDispatchBatchVisible(false);
    setViewBatchVisible(false);
    setCreateBatchVisible(false);
    setCertificateVisible(false);
  };

  const handleViewBatchClick = async () => {
    setGraphhBatchVisible(false);
    setDispatchBatchVisible(false);
    setViewBatchVisible(true);
    setCreateBatchVisible(false);
    setCertificateVisible(false);
    setViewBatchContentVisible(true); 

    try {
      const response = await axios.get('http://localhost:3000/listAll');
      const formattedListResponse = JSON.stringify(response.data.cars, null, 2);
      setListResponse(formattedListResponse);
      setMessage('List fetched successfully.');
    } catch (error) {
      console.error('Error fetching list:', error);
      setListResponse('Error fetching list.');
      setMessage('Error fetching list.');
    }
  };

  const handleCreateBatchClick = () => {
    setGraphhBatchVisible(false);
    setDispatchBatchVisible(false);
    setViewBatchVisible(false);
    setCreateBatchVisible(true);
    setCertificateVisible(false);
  };

  const lineStyle = {
    position: 'absolute',
  top: '57px',
  right: '10px',
  border: 'none',
  opacity: '0.1',
  borderTop: '1px solid black',
  width: '100%',
  };

  const blueBoxContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    backgroundColor: 'white',
    color: 'black',
    overflow: 'fixed',
    marginTop:'2px',
    height:'12px',
    marginLeft:'0px',
  };

  const leftImageStyle = {
    marginTop:'40px',
    width: '100px',
    height: '80px',
    borderRadius: '1px',
    marginRight: '100px',
  };

  const headerStyle = {
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: 'none',
  };

  const blueBoxStyle = {
    width: '220px',
    maxWidth: '105%', // Set a maximum width to prevent overflow
    height: '106vh',
    backgroundColor: 'navy',
    borderRadius: '1px',
    marginTop: '0px',
    marginLeft:'0px',
    overflowX: 'hidden', 
  };

  const imageContainerStyle = {
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '10px',
  };

  const topRightImageStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '100px',
    height: '50px',
  };
  
  const searchContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '200px',
    overflow: 'hidden',
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black' }}>
      <div style={headerStyle}>
        <div style={blueBoxContainerStyle}>
          <div style={blueBoxStyle}>
            <img
              src="https://www.gs1india.org/wp-content/uploads/2022/06/logo-600x402-1-600x402.png"
              alt="Image 1"
              style={leftImageStyle}
            />
            <img
              src="https://www.gs1india.org/wp-content/uploads/2022/05/data-kart-lock-402x188-1.png"
              alt="Top Right Image"
              style={topRightImageStyle}
            />
            <hr style={lineStyle} />

            <ul style={{ listStyle: 'none', padding: 30 }}>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', textDecoration: 'none', marginRight: '900px', fontWeight: 'bold' }} onClick={handleEnrollClick}>
                  Onboarding
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', textDecoration: 'none', marginLeft: '40px' }} onClick={handleEnrollClick}>
                  Register/Enroll
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', textDecoration: 'none', marginRight: '900px' }} onClick={handleEnrollClick}>
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', marginLeft: '30px' }} onClick={handleCertificateClick}>
                  View&nbsp;Certificate
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '1000', padding: '10px' }} onClick={handleEnrollClick}>
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', marginRight: '600px', fontWeight: 'bold' }} onClick={handleCertificateClick}>
                  Trace
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', marginLeft: '22px' }} onClick={handleCreateBatchClick}>
                  Create&nbsp;Batch
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '1000', padding: '10px' }} onClick={handleEnrollClick}>
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', marginLeft: '22px' }} onClick={handleViewBatchClick}>
                  View&nbsp;Batch
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none' }} onClick={handleEnrollClick}>
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', marginLeft: '20px' }} onClick={handleDispatchBatchClick}>
                  Dispatch&nbsp;Batch
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none' }} onClick={handleEnrollClick}>
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', marginLeft: '20px' }} onClick={handleGraphBatchClick}>
                  View&nbsp;Graph
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none' }} onClick={handleEnrollClick}>
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', fontWeight: 'bold' }} onClick={handleEnrollClick}>
                  BlockChain&nbsp;Events
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', marginLeft: '20px' }} onClick={handleEnrollClick}>
                  GetBatchHistory
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none' }} onClick={handleEnrollClick}>
                </a>
              </li>
              <li>
                <a href="#searchSection" style={{ color: 'white', fontWeight: '400', padding: '10px', textDecoration: 'none', marginLeft: '20px' }} onClick={handleEnrollClick}>
                  Blockchain&nbsp;Explorer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={searchContainerStyle}></div>
        {isDispatchBatchVisible && <Dbatch />}
        {isGraphBatchVisible && <GraphPage />}
        {isViewBatchVisible && isViewBatchContentVisible && (
          <MyTableComponent listResponse={listResponse} message={message} />
        )}
        {isCertificateVisible && <Second />}
        {isCreateBatchVisible && <Cbatch />}
      </div>
    </div>
  );
};

export default InputPage;
