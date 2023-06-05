/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import icon from '../../assets/svg/sprite.svg';

const MainPanelRight = () => {
  return (
    <div className="flex-grow-1 bg-light-grey p-4 d-flex flex-column">
      <div className="border-bottom border-1 border-black-50 d-flex justify-content-start bg-white">
        <a
          href="#"
          className="text-decoration-none fs-14 fw-bolder p-2 bg-light-primary border-bottom border-primary border-2 d-flex align-items-center">
          <svg
            className="me-2"
            style={{ width: '1.5em', height: '1.5em', fill: 'rgba(13, 110, 253, 0.7)' }}>
            <use xlinkHref={`${icon}#icon-note-list1`}></use>
          </svg>
          Notes
        </a>
        <a
          href="#"
          className="text-decoration-none fs-14 fw-bolder p-2 d-flex align-items-center text-black-50">
          <svg
            className="me-2"
            style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.5)' }}>
            <use xlinkHref={`${icon}#icon-calendar`}></use>
          </svg>
          Activity
        </a>
        <a
          href="#"
          className="text-decoration-none fs-14 fw-bolder p-2 d-flex align-items-center text-black-50">
          <svg
            className="me-2"
            style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.5)' }}>
            <use xlinkHref={`${icon}#icon-phone`}></use>
          </svg>
          Call
        </a>
        <a
          href="#"
          className="text-decoration-none fs-14 fw-bolder p-2 d-flex align-items-center text-black-50">
          <svg
            className="me-2"
            style={{ width: '1.5em', height: '1.5em', fill: 'rgba(10, 0, 0, 0.5)' }}>
            <use xlinkHref={`${icon}#icon-mail`}></use>
          </svg>
          Email
        </a>
        <a
          href="#"
          className="text-decoration-none fs-14 fw-bolder p-2 d-flex align-items-center text-black-50">
          <svg
            className="me-2"
            style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.5)' }}>
            <use xlinkHref={`${icon}#icon-attach_file`}></use>
          </svg>
          Files
        </a>
        <a
          href="#"
          className="text-decoration-none fs-14 fw-bolder p-2 d-flex align-items-center text-black-50">
          <svg
            className="me-2"
            style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.5)' }}>
            <use xlinkHref={`${icon}#icon-file-text2`}></use>
          </svg>
          Documents
        </a>
        <a
          href="#"
          className="text-decoration-none fs-14 fw-bolder p-2 d-flex align-items-center text-black-50">
          <svg
            className="me-2"
            style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.5)' }}>
            <use xlinkHref={`${icon}#icon-coin-dollar`}></use>
          </svg>
          Invoice
        </a>
      </div>
      <div className="shadow-sm p-20 bg-white">
        <p className="fs-6 text-black-50 mb-0 fw-bolder">Take a note, @name</p>
      </div>
      <div className="d-flex flex-column mt-4">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-start align-items-center">
            <h5>Focus</h5>
            <svg
              className="me-2"
              style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.5)' }}>
              <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
            </svg>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="fs-6 fw-bolder text-black-50">No focus items yet</p>
            <p className="w-50 text-center fs-6 fw-bolder text-black-50">
              Scheduled activities, pinned notes, email drafts and scheduled emails will appear
              here.
            </p>
            <p className="text-primary fw-bolder">
              <svg
                className="me-1"
                style={{ width: '1.2em', height: '1.2em', fill: 'rgba(13, 110, 253, 0.7)' }}>
                <use xlinkHref={`${icon}#icon-plus`}></use>
              </svg>
              Scheduled an activity
            </p>
          </div>
        </div>
        <div className="d-flex flex-column mt-10">
          <div className="d-flex justify-content-start align-items-center">
            <h5>History</h5>
            <svg
              className="me-2"
              style={{ width: '1.5em', height: '1.5em', fill: 'rgba(0, 0, 0, 0.5)' }}>
              <use xlinkHref={`${icon}#icon-cheveron-down`}></use>
            </svg>
          </div>
          <div className="py-12 d-flex justify-content-start me-12">
            <p className="fs-14 me-10 fw-bolder text-primary bg-light-primary t">All</p>
            <p className="fs-14 me-10 fw-bolder text-black">Notes (0)</p>
            <p className="fs-14 me-10 fw-bolder text-black">Activities</p>
            <p className="fs-14 me-10 fw-bolder text-black">Email (0)</p>
            <p className="fs-14 me-10 fw-bolder text-black">Files</p>
            <p className="fs-14 me-10 fw-bolder text-black">Documents</p>
            <p className="fs-14 me-10 fw-bolder text-black">Invoices</p>
            <p className="fs-14 me-10 fw-bolder text-black">Changelog</p>
          </div>
          <div className="d-flex">
            <div style={{ width: '1em', height: '1em' }} className="bg-white rounded-circle"></div>
            <div className="d-flex flex-column ms-4">
              <h4 className="text-black fs-6">Deal created</h4>
              <h5 className="text-black-50 fs-14">Today at 12:26 PM - Support (Web App)</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanelRight;
