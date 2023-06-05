import React, {Fragment} from 'react';
import logo from '../../assets/pipedrive-logo.png';
import icon from '../../assets/svg/sprite.svg';

const Sidebar = () => {
  return (
    <Fragment>
       <aside className="bg-blue-violet min-vh-100">
        <nav className="d-flex flex-column mt-2" style={{width: "3.5em"}}>
          <div className="p-6">
            <a
              href="/"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
              
            >
              <img
                src={logo}
                alt="pipedrive-logo"
                className="img-fluid"
                style={{width: "1.75em"}}
              />
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-target`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10 bg-light-violet rounded"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-coin-dollar`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-clipboard-checked`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10 border-bottom border-light-violet border-2"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-bullhorn`}></use>
              </svg>
            </a>
          </div>

          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-mail`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-calendar`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-contact_phone`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-stats-dots`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-box`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-shop`}></use>
              </svg>
            </a>
          </div>
          <div className="p-6">
            <a
              href="#"
              className="text-decoration-none w-100 d-flex justify-content-center align-items-center p-10"
            >
              <svg style={{width: "1.5em", height: "1.5em", fill: "#fff"}}>
                <use xlinkHref={`${icon}#icon-navigation-more`}></use>
              </svg>
            </a>
          </div>
        </nav>
      </aside>
    </Fragment>
  )
}

export default Sidebar