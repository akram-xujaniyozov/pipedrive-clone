import React from 'react';
import { useSelector } from 'react-redux';

const MainPanelDetails = () => {
  const { jobDatas } = useSelector((state) => state.jobData);

  return (
    <div className="d-flex align-items-start mt-4 mx-auto">
      <div style={{ width: '40%' }} className="d-flex flex-column justify-content-center me-3">
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Address</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Job type</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Job source</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Job date</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Job start time</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Job end time</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize mb-0 text-end">Tampa</p>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Technician</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize mb-0 text-end">Miami</p>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Technician</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize mb-0 text-end">Orlando</p>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Technician</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize mb-0 text-end">Houston</p>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Technician</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize mb-0 text-end">Charlotte</p>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Technician</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize mb-0 text-end">Austin</p>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Technician</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Area</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Tags</p>
        </div>
        <div>
          <p className="text-secondary fs-6 fw-bolder text-capitalize text-end">Job comment</p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center flex-grow-1">
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1">
            {jobDatas ? jobDatas.address : `-`}
          </p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-1">
            {jobDatas ? jobDatas.jobType : `-`}
          </p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-1">-</p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-1">
            {jobDatas ? jobDatas.jobDate : `-`}
          </p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-1">
            {jobDatas ? jobDatas.jobStart : `-`}
          </p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-1">
            {jobDatas ? jobDatas.jobEnd : `-`}
          </p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-3">-</p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-4">-</p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-28">-</p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-28">-</p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-28">-</p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-28">-</p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-20">
            {jobDatas ? jobDatas.area : `-`}
          </p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-1">-</p>
        </div>
        <div>
          <p className="text-black fs-5 fw-bolder text-capitalize text-start lh-1 mt-1">-</p>
        </div>
      </div>
    </div>
  );
};

export default MainPanelDetails;
