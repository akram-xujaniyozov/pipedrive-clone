import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { toggle } from '../../store/modalJob';
import LoadingSpinner from '../SpinnerLoading/SpinnerLoading';

import FormInputs from './FormInputs';
import classes from './FormModal.module.scss';

const BackdropModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggle());
  };

  return <div className={classes.backdrop} onClick={closeModal}></div>;
};

const Form = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closeModal = () => {
    dispatch(toggle());
  };

  return (
    <div className={`${classes.modal} container-sm rounded bg-light-grey px-0`}>
      <div className="bg-light px-3 py-2 text-black shadow-sm my-6 d-flex justify-content-between align-items-center">
        <h5>New Create Job</h5>
        <button onClick={closeModal} type="button" className="btn btn-light fs-3 lh-1">
          &times;
        </button>
      </div>
      {isLoading ? <FormInputs /> : <LoadingSpinner />}
    </div>
  );
};

const FormModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackdropModal />, document.getElementById('root-backdrop'))}
      {ReactDOM.createPortal(<Form />, document.getElementById('root-form'))}
    </Fragment>
  );
};

export default FormModal;
