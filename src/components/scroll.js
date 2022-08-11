import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{ overflowY: 'scroll', border: '3px solid black', height: '650px', padding: '10px', margin: '10px 0'}}>
            {props.children}
        </div>
    );
};

export default Scroll