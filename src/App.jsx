import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './Pages/HomePage'
import DniPage from './Pages/Dni/DniPage'
import RucPage from './Pages/Ruc/RucPage'


function App() {
  return (
    <BrowserRouter>
     <Header />
    <Routes>
      <Route path='/peru-data-api/' element={<HomePage />} />
      <Route path='/peru-data-api/consultar-dni' element={<DniPage />} />
      <Route path='/peru-data-api/consultar-ruc' element={<RucPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;