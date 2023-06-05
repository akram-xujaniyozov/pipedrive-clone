/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';

import { toggle } from '../../store/modalJob';
import icon from '../../assets/svg/sprite.svg';

const DealFeatures = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggle());
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2 className="h4">Test Deal</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="me-3">
          <div className="btn-group border border-black-50 border-1">
            <button type="button" className="btn btn-white fw-normal">
              1 follower
            </button>
            <button
              type="button"
              className="btn btn-white dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"></button>
          </div>
        </div>
        <div className="me-3">
          <div className="btn-group">
            <button type="button" className="btn btn-success fw-bolder">
              Won
            </button>
            <button
              type="button"
              className="btn btn-success dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu px-2">
              <li>
                <a className="dropdown-item" href="#">
                  Duplicate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Merge
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Export as XLS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Convert to a lead
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Share feedback
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Learn more about beta
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Manage sidebar sections
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="d-flex justify-content-between">
                <a className="dropdown-item" href="#">
                  Manage apps' visibility
                </a>
                <svg style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                  <use xlinkHref={`${icon}#icon-arrow-up-right2`}></use>
                </svg>
              </li>
              <li onClick={openModal}>
                <a className="dropdown-item bg-primary rounded text-white p-2" href="#">
                  <span className="text-dark bg-warning py-2x px-3x fw-bolder d-inline-flex justify-content-center align-items-center lh-1 me-2">
                    w
                  </span>
                  NEW Create a job{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="me-3">
          <button className="btn btn-danger fw-bolder">Lost</button>
        </div>
        <div className="me-3">
          <div className="btn-group border border-black-50 border-1">
            <button type="button" className="btn btn-white fw-normal">
              <svg style={{ width: '1.25em', height: '1.25em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                <use xlinkHref={`${icon}#icon-grid`}></use>
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-white dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"></button>
          </div>
        </div>
        <div>
          <button className="btn btn-white fw-bolder border border-black-50 border-1">
            <svg style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.7)' }}>
              <use xlinkHref={`${icon}#icon-navigation-more`}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealFeatures;
