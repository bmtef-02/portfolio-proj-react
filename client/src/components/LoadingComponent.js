import React from 'react';

export const Loading = () => {
    return (
        <div className="d-flex mx-auto">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-light" />
            <p>Loading...</p>
        </div>
    );
};

