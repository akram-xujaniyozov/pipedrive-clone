import React, { Fragment, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { collectData } from '../../store/createJob';
import icon from '../../assets/svg/sprite.svg';

const FormInputs = () => {
  const dispatch = useDispatch();

  const addressRef = useRef();
  const jobTypeRef = useRef();
  const jobDateRef = useRef();
  const jobStartRef = useRef();
  const jobEndRef = useRef();
  const areaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobDatas = {
      address: addressRef.current.value,
      jobType: jobTypeRef.current.value,
      jobDate: jobDateRef.current.value,
      jobStart: jobStartRef.current.value,
      jobEnd: jobEndRef.current.value,
      area: areaRef.current.value,
    };

    dispatch(collectData(jobDatas));
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row px-28 mt-3">
          <div className="col shadow-sm p-3 bg-white me-3 rounded">
            <h5 className="mb-12 text-black-50">Client Details</h5>
            <div className="mb-12 d-flex">
              <input
                type="text"
                name="fname"
                id="fname"
                className="form-control form-control-sm font-monospace me-3 w-50 fw-bolder p-10"
                placeholder="First Name"
                autoComplete="off"
              />
              <input
                type="text"
                name="lname"
                id="lname"
                className="form-control form-control-sm font-monospace w-50 fw-bolder p-10"
                placeholder="Last Name"
                autoComplete="off"
              />
            </div>
            <div className="mb-12">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="form-control form-contol-sm font-monospace fw-bolder p-10"
                autoComplete="off"
              />
            </div>
            <div className="mb-12">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email optional"
                className="form-control form-contol-sm font-monospace fw-bolder p-10"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col shadow-sm p-3 bg-white rounded">
            <h5 className="mb-12 text-black-50">Job Details</h5>
            <div className="mb-12 d-flex">
              <div className="input-group">
                <input
                  ref={jobTypeRef}
                  type="text"
                  name="job-type"
                  id="job-type"
                  className="form-control form-control-sm font-monospace  w-50 fw-bolder p-10"
                  placeholder="Job Type"
                  autoComplete="off"
                />
                <span className="input-group-text me-3 bg-white">
                  <svg style={{ width: '1.25em', height: '1.25em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                    <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
                  </svg>
                </span>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="job-source"
                  id="job-source"
                  className="form-control form-control-sm font-monospace w-50 fw-bolder p-10"
                  placeholder="Job source"
                  autoComplete="off"
                />
                <span className="input-group-text bg-white">
                  <svg style={{ width: '1.25em', height: '1.25em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                    <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
                  </svg>
                </span>
              </div>
            </div>
            <div className="form-floating mt-3">
              <textarea
                className="form-control fs-12"
                style={{ height: '100px' }}
                placeholder="Leave a comment here"
                id="job-description"></textarea>
              <label htmlFor="job-description" className="font-monospace">
                Job description (optional)
              </label>
            </div>
          </div>
        </div>
        <div className="row shadow-sm px-28 py-3">
          <div className="col shadow-sm p-3 bg-white rounded me-3">
            <h5 className="mb-12 text-black-50">Service location</h5>
            <div className="mb-12">
              <input
                ref={addressRef}
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="form-control form-contol-sm font-monospace fw-bolder p-10"
                autoComplete="off"
              />
            </div>
            <div className="mb-12">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="form-control form-contol-sm font-monospace fw-bolder p-10"
                autoComplete="off"
              />
            </div>
            <div className="mb-12">
              <input
                type="state"
                name="state"
                id="state"
                placeholder="State"
                className="form-control form-contol-sm font-monospace fw-bolder p-10"
                autoComplete="off"
              />
            </div>
            <div className="mb-12 d-flex">
              <div className="input-group me-3">
                <input
                  type="number"
                  name="zipcode"
                  id="zipcode"
                  className="form-control form-control-sm font-monospace  w-50 fw-bolder p-10"
                  placeholder="Zip code"
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <input
                  ref={areaRef}
                  type="text"
                  name="area"
                  id="area"
                  className="form-control form-control-sm font-monospace w-50 fw-bolder p-10"
                  placeholder="Area"
                  autoComplete="off"
                />
                <span className="input-group-text bg-white">
                  <svg style={{ width: '1.25em', height: '1.25em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                    <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="col shadow-sm p-3 bg-white rounded">
            <div className="mb-12">
              <input
                ref={jobDateRef}
                type="date"
                name="date"
                id="date"
                className="form-control form-control-sm font-monospace fw-bolder p-10"
                placeholder="Start date"
                autoComplete="off"
              />
            </div>
            <div className="mb-12 d-flex">
              <input
                ref={jobStartRef}
                type="time"
                name="start-time"
                id="start-time"
                className="form-control form-control-sm w-50 me-3 font-monospace fw-bolder p-10"
                placeholder="Start time"
                autoComplete="off"
              />
              <input
                ref={jobEndRef}
                type="time"
                name="end-date"
                id="end-date"
                className="form-control form-control-sm w-50  font-monospace fw-bolder p-10"
                placeholder="End time"
                autoComplete="off"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="test"
                id="test"
                className="form-control form-control-sm font-monospace fw-bolder p-10"
                placeholder="Test"
                autoComplete="off"
              />
              <span className="input-group-text bg-white">
                <svg style={{ width: '1.25em', height: '1.25em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                  <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 pb-12 text-center">
          <button
            type="submit"
            className="btn btn-warning text-black fs-5 fw-bolder rounded-pill me-20">
            Create Job
          </button>
          <button className="btn btn-secondary text-black fs-5 fw-bolder rounded-pill">
            Save Info
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default FormInputs;
