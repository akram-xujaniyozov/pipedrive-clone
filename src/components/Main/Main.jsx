/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';

import MainNavbar from './MainNavbar';
import Deal from './Deal';
import MainPanel from './MainPanel';

const Main = () => {
  return (
    <Fragment>
      <main className="flex-grow-1">
        <MainNavbar />
        <Deal />
        <MainPanel />
      </main>
    </Fragment>
  );
};

export default Main;
