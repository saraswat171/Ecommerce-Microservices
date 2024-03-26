import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebarlayout from './layouts/SidebarLayout';
import { useRoutes } from 'react-router-dom';
import routes from './routes/Routes';

function App() {
  const content = useRoutes(routes);
  return (
    <>
      {content}
    </>
  );
}

export default App;
