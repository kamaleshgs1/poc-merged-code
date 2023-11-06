import React from 'react';

const Dbatch = () => {
  return (
    <div style={{ position: 'relative' }}>
      <h1 style={{ color: 'black', marginTop: '90px', marginRight:'900px' }}>Dispatch&nbsp;Batch</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <div style={{ marginTop: '30px', marginRight: '200px' }}> {/* Adjusted marginTop here */}
          <div>
            <input
              padding='10px'
              type="text"
              id="status"
              name="status"
              style={{ height: '600', width: '400px', padding: '80px', marginTop: '20px' }}
            />
          </div>
        </div>
      </div>
      <button
        style={{
          marginTop: '1px',
          marginLeft: '450px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: 'navy',
          color: 'white',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Dbatch;
