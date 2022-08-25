import CampsitesDirectoryPage from '../src/pages/CampsitesDirectoryPage';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
    
  );
}

export default App;
