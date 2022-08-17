import { MantineProvider } from '@mantine/core';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <MantineProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MantineProvider>
    </div>
  );
};

export default App;
