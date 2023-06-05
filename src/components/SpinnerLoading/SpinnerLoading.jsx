import React from 'react';
import classes from './SpinnerLoading.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={classes['spinner-container']}>
      <div className={classes['loading-spinner']}></div>
    </div>
  );
};

export default LoadingSpinner;
