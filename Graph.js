import React, { useState } from 'react';
import Graph from 'react-graph-vis';
import './CustomGraph.css'; // Import the CSS file

const CustomGraph = ({ data }) => {
  const uniqueNodes = {};
  const graphNodes = [];
  const graphEdges = [];
  const uniqueEdges = {};
  let senderCounts = {};
  let receiverCounts = {};

  // Process data to create unique nodes and edges
  data.cars.forEach((car, index) => {
    const senderID = car.Record.SenderID;
    const receiverID = car.Record.ReceiverID;

    if (!uniqueNodes[senderID]) {
      uniqueNodes[senderID] = true;
      graphNodes.push({
        id: `node-${senderID}`,
        label: senderID,
        color: '#cb8782',
        shape: 'box',
        data: car.Record,
      });
    }

    if (!uniqueNodes[receiverID]) {
      uniqueNodes[receiverID] = true;
      graphNodes.push({
        id: `node-${receiverID}`,
        label: receiverID,
        color: '#cb8782',
        shape: 'box',
        data: car.Record,
      });
    }

    const edgeKey = `edge-${senderID}-${receiverID}`;
    if (!uniqueEdges[edgeKey]) {
      uniqueEdges[edgeKey] = true;
      graphEdges.push({
        id: edgeKey,
        from: `node-${senderID}`,
        to: `node-${receiverID}`,
        label: car.Record.status,
        smooth: {
          enabled: true,
        },
        color: '#Be3a25',
      });
    }

    // Calculate sender and receiver counts
    if (senderID.includes('Farmer')) {
      senderCounts[senderID] = (senderCounts[senderID] || 0) + 1;
    }
    if (receiverID === 'FPO') {
      receiverCounts[receiverID] = (receiverCounts[receiverID] || 0) + 1;
    }
  });

  const graph = {
    nodes: graphNodes,
    edges: graphEdges,
  };

  const options = {
    nodes: {
      chosen: {
        borderColor: 'EAC215',
      },
      fixed: {
        x: true, // Prevent nodes from moving horizontally
        y: true, // Prevent nodes from moving vertically
      },
    },
    layout: {
      hierarchical: {
        direction: 'UD', // Change the direction if needed (UD for top to bottom)
        nodeSpacing: 150, 
      },
    },
    edges: {
      color: '#000000',
    },
    height: '600px',
    width: '100%',
    interaction: {
      dragView: false,
      navigationButtons: true,
      keyboard: false,
      zoomView: false,
    },
    physics: {
      enabled: false,
    },
  };

  const [selectedNodeData, setSelectedNodeData] = useState(null);

  const events = {
    selectNode: function (event) {
      const selectedNodeId = event.nodes[0];
      const selectedNode = graphNodes.find((node) => node.id === selectedNodeId);
      if (selectedNode) {
        setSelectedNodeData(selectedNode.data);
      }
    }
  };

  return (
    <div className="graph-container">
      <div className="details-panel">
        <div>
          <h3>Selected Node Data:</h3>
          <p>SenderID: {selectedNodeData ? selectedNodeData.SenderID : 'N/A'}</p>
          <p>Location: {selectedNodeData ? selectedNodeData.location : 'N/A'}</p>
          <p>AnimalType: {selectedNodeData ? selectedNodeData.AnimalType : 'N/A'}</p>
          <p>Quantity: {selectedNodeData ? selectedNodeData.Quantity : 'N/A'}</p>
        </div>
        <div className="counts-panel">
          <h3>Counts:</h3>
          {Object.keys(senderCounts).map((senderID) => (
            <p key={senderID}>Farmers ({senderID}): {senderCounts[senderID]}</p>
          ))}
          {Object.keys(receiverCounts).map((receiverID) => (
            <p key={receiverID}>FPO ({receiverID}): {receiverCounts[receiverID]}</p>
          ))}
        </div>
      </div>
      <div className="graph-panel">
        <Graph graph={graph} options={options} events={events} />
      </div>
    </div>
  );
};

export default CustomGraph;
