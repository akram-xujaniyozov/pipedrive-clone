/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MainPanelLeft from './MainPanelLeft';
import MainPanelRight from './MainPanelRight';

const MainPanel = () => {
  return (
    <div className="d-flex">
      <MainPanelLeft />
      <MainPanelRight />
    </div>
  );
};

export default MainPanel;
