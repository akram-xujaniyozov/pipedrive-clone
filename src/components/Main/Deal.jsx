/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import DealDays from './DealDays';
import DealFeatures from './DealFeatures';

const Deal = () => {
  return (
    <div className="shadow-sm p-3">
      <DealFeatures />
      <DealDays />
      <div className="d-flex align-items-center justify-content-start">
        <span className="text-primary fs-12 fw-normal lead">Tampa</span>
        <span className="text-black-50 fs-5 mx-2">&rarr;</span>
        <span className="text-primary fs-12 fw-normal lead">New lead</span>
      </div>
    </div>
  );
};

export default Deal;
