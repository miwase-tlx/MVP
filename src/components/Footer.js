import React from 'react';

function Footer() {
  return (
    <footer style={{
      marginTop: '20px',
      padding: '10px',
      borderTop: '1px solid #eee'
    }}>
      This dashboard shows indicative volume for each product, for relevant trading days start and stop at 8am UTC. 
      Note that the volumes shown on this page can lag behind actual trading volume, and are for indicative purposes only.
    </footer>
  );
}

export default Footer;