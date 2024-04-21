import React from'react';

const StatelessComponent = (props) => {
    return (
      <div>
        <h2>Stateless Component</h2>
        <p>Received Props: {props.message}</p>
      </div>
    );
  };

  export default StatelessComponent;