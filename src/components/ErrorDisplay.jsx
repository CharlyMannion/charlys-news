import React from 'react';

const ErrorDisplay = (props) => {
    return (
        <div className="error-display">
            <p>
                Error! Code: {props.status} {props.message}
            </p>
        </div>
    )
};

export default ErrorDisplay;