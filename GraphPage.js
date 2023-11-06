import React, { useState } from 'react';
import Graph from './Graph'; // Make sure you import the correct Graph component
import axios from 'axios';

import './CustomGraph.css'; // Make sure your CSS file exists and contains appropriate styles

const GraphPage = () => {
  const [traceInput, setTraceInput] = useState('');
  const [showGraph, setShowGraph] = useState(false);
  const [sampleTraceData, setSampleTraceData] = useState(null);
  const [message, setMessage] = useState('');

  const handleTrace = async () => {
    try {
      if (traceInput) {
        //setMessage('Tracing in progress...');
        setShowGraph(true);

        // Replace the URL with the actual endpoint to fetch trace data
        const response = await axios.get('http://localhost:3000/trace');

        setSampleTraceData(response.data);

        //setMessage('Tracing completed.');
      } else {
        setMessage('Please enter a valid ID for tracing.');
      }
    } catch (error) {
      console.error('Error during tracing:', error);
      setMessage('Error during tracing.');
    }
  };

  return (
    <div className="graph-page-container">
      <div className="input-container">
        <input
          type="text"
          id="traceInput"
          name="traceInput"
          value={traceInput}
          onChange={(e) => setTraceInput(e.target.value)}
          placeholder="Enter ID for tracing"
        />
        <button className="trace-button" onClick={handleTrace}>
          Trace
        </button>
      </div>
      {showGraph && sampleTraceData && <Graph data={sampleTraceData} />}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default GraphPage;
