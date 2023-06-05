/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';

import { toggle } from '../../store/modalJob';

import icon from '../../assets/svg/sprite.svg';
import MainPanelDetails from './MainPanelDetails';

const MainPanelLeft = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggle());
  };

  return (
    <div style={{ width: '30%' }} className="shadow-sm">
      <div className="p-4 pt-0 shadow-sm">
        <div className="d-flex justify-content-between align-items-center lh-1 bg-light-primary border border-top-0 border-primary border-1 p-10 rounded-bottom">
          <div className="d-flex justify-content-center align-items-center">
            <span className="fs-14 fw-normal">Is this panel useful?</span>
            <span className="ms-3">
              <svg
                style={{
                  width: '1em',
                  height: '1em',
                  fill: 'rgba(0, 0, 0, 0.7)',
                  transform: 'rotate(180deg)',
                }}>
                <use xlinkHref={`${icon}#icon-thumbs-down`}></use>
              </svg>
            </span>
            <span className="ms-3">
              <svg style={{ width: '1em', height: '1em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                <use xlinkHref={`${icon}#icon-thumbs-down`}></use>
              </svg>
            </span>
          </div>
          <div className="fs-3">&times;</div>
        </div>
      </div>
      <div className="shadow-sm p-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-start align-items-center ms-2">
              <svg style={{ width: '1.75em', height: '1.75em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
              </svg>
            </div>
            <div className="d-flex justify-content-start align-items-center bg-light-grey p-1 ms-2">
              <svg style={{ width: '0.7em', height: '0.7em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                <use xlinkHref={`${icon}#icon-calendar`}></use>
              </svg>
            </div>
            <h4 className="h5 d-flex justify-content-start align-items-center ms-2">test</h4>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <svg style={{ width: '1.2em', height: '1.2em', fill: 'rgba(0, 0, 0, 0.7)' }}>
              <use xlinkHref={`${icon}#icon-reload`}></use>
            </svg>
            <svg
              className="ms-10"
              style={{ width: '1.2em', height: '1.2em', fill: 'rgba(0, 0, 0, 0.7)' }}>
              <use xlinkHref={`${icon}#icon-navigation-more`}></use>
            </svg>
          </div>
        </div>
        <div className="mt-12">
          <div className="btn-group">
            <button type="button" className="btn btn-success fw-bolder">
              Test
            </button>
            <button
              type="button"
              className="btn btn-success dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shadow-sm p-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-start align-items-center ms-2">
              <svg style={{ width: '1.75em', height: '1.75em', fill: 'rgba(0, 0, 0, 0.7)' }}>
                <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
              </svg>
            </div>
            <div className="text-dark bg-warning py-2x px-3x fw-bolder d-inline-flex justify-content-center align-items-center lh-1 ms-2">
              w
            </div>
            <h4 className="h5 d-flex justify-content-start align-items-center ms-2">Workiz</h4>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <svg style={{ width: '1.2em', height: '1.2em', fill: 'rgba(0, 0, 0, 0.7)' }}>
              <use xlinkHref={`${icon}#icon-reload`}></use>
            </svg>
            <svg
              className="ms-10"
              style={{ width: '1.2em', height: '1.2em', fill: 'rgba(0, 0, 0, 0.7)' }}>
              <use xlinkHref={`${icon}#icon-navigation-more`}></use>
            </svg>
          </div>
        </div>
        <div className="mt-12">
          <div className="btn-group">
            <button onClick={openModal} type="button" className="btn btn-success fw-bolder">
              New Create a job
            </button>
            <button
              type="button"
              className="btn btn-success dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shadow-sm p-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-start align-items-center ms-2">
              <svg
                style={{
                  width: '1.75em',
                  height: '1.75em',
                  fill: 'rgba(0, 0, 0, 0.7)',
                  transform: 'rotate(180deg)',
                }}>
                <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
              </svg>
            </div>
            <h4 className="h5 d-flex justify-content-start align-items-center ms-2">Details</h4>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <svg style={{ width: '1.75em', height: '1.75em', fill: 'rgba(0, 0, 0, 0.7)' }}>
              <use xlinkHref={`${icon}#icon-pen-angled`}></use>
            </svg>
            <svg
              className="ms-10"
              style={{ width: '1.2em', height: '1.2em', fill: 'rgba(0, 0, 0, 0.7)' }}>
              <use xlinkHref={`${icon}#icon-navigation-more`}></use>
            </svg>
          </div>
        </div>
        <MainPanelDetails />
      </div>
    </div>
  );
};

export default MainPanelLeft;
