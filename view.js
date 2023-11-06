import React from 'react';

const View = () => {
  return (
    <div>
      <h1>View Component</h1>
      {/* Add your view code here */}
      <textarea
        value={certificate}
        readOnly
        rows={20} // Increased rows for more height
        cols={50} // Adjusted cols
        placeholder="CA certificate"
      />
    </div>
  );
}

export default View;
