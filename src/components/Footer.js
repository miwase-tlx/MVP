import React from 'react';

function Footer() {
  return (
    <footer style={{
      marginTop: '20px',
      padding: '10px',
      borderTop: '1px solid #eee'
    }}>
      <p>This dashboard displays fictional trading data that can be modified for simulation purposes.</p>
      <p>The volumes, calculations, and rewards shown here are for demonstration only and do not represent actual exchange trading data or rewards.</p>
    </footer>
  );
}

export default Footer;