import React, { useState } from 'react';
import './App.css';
import ModalLR from './components/modal/ModalLR';
import MyHeader from './components/myHeader/Myheader';

function App() {

  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <MyHeader visible={modal} setVisible={setModal} ></MyHeader>
      <ModalLR visible={modal} setVisible={setModal} ></ModalLR>
    </div>
  );
}

export default App;
