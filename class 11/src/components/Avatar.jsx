import React from 'react';

function Avatar(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
      <img src={props.src} alt={props.caption} style={{ width: '100%' }} />
      <p>{props.caption}</p>
    </div>
  );
}

export default Avatar;