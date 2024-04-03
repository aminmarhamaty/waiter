import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Main from './Main';
import { Link, useLoaderData } from "react-router-dom";

function App() {
  return (
    <>

      <div className='home'>
        <div className='side'>
          <Main />
        </div>
        <div className='content'>
          <Outlet />
        </div>
      </div>

    </>
  );
}

export default App;
