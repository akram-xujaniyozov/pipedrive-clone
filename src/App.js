import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import FormModal from './components/FormModal/FormModal';

function App() {
  const { showModal } = useSelector((state) => state.modal);
  return (
    <div className="container-fluid d-flex px-0">
      <Sidebar />
      <Main />
      {showModal && <FormModal />}
    </div>
  );
}

export default App;
