import React from 'react';
import icon from '../../assets/svg/sprite.svg';

const MainNavbar = () => {
  return (
     <nav
        className="navbar shadow-sm py-2 ps-20 pe-12 d-flex justify-content-between align-items-center"
      >
        <h1 className="fs-6">Deals</h1>
        <div className="d-flex justify-content-center align-items-center">
          <form
            action=""
            className="border border-black-50 border-1 rounded-pill px-36 py-6 position-relative me-3"
          >
            <label
              htmlFor="search"
              className="position-absolute top-50 start-0 ms-4 translate-middle form-label"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#21232c"}}>
                <use xlinkHref={`${icon}#icon-magnifying-glass`}></use>
              </svg>
            </label>
            <input
              type="text"
              id="search"
              name="search"
              className="form-control border-0 ms-10 fs-6"
              placeholder="Search pipedrive"
            />
          </form>

          <div className="border border-black-50 border-1 rounded-circle p-10">
            <svg style={{width: "1.5em", height: "1.5em", fill: "#21232c"}}>
              <use xlinkHref={`${icon}#icon-plus`}></use>
            </svg>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="p-10">
            <svg style={{width: "1.25em", height: "1.25em", fill: "rgba(0, 0, 0, 0.7)"}}>
              <use xlinkHref={`${icon}#icon-puzzle`}></use>
            </svg>
          </div>
          <div className="p-10">
            <svg style={{width: "2em", height: "2em", fill: "rgba(0, 0, 0, 0.7)"}}>
              <use xlinkHref={`${icon}#icon-group_add`}></use>
            </svg>
          </div>
          <div className="p-10">
            <svg style={{width: "1.5em", height: "1.5em", fill: "rgba(0, 0, 0, 0.7)"}}>
              <use xlinkHref={`${icon}#icon-lamp`}></use>
            </svg>
          </div>
          <div className="p-10">
            <svg style={{width: "1.5em",  height: "1.5em", fill: "rgba(0, 0, 0, 0.7)"}}>
              <use xlinkHref={`${icon}#icon-help-circle`}></use>
            </svg>
          </div>
          <div className="p-10">
            <svg style={{width: "1.5em", height: "1.5em", fill: "rgba(0, 0, 0, 0.7)"}}>
              <use xlinkHref={`${icon}#icon-user`}></use>
            </svg>
          </div>
        </div>
      </nav>
  )
}

export default MainNavbar