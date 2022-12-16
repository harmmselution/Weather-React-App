import React from 'react';
import './styles/index.scss';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Route, Routes} from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { PopUp } from './pages/components/PopUp/PopUp';
function App() {
  return (
   <div className="global">
   {/* <PopUp/> */}
    <div className='container'>
      
    <Header/>
    <Routes>  
      <Route path="/" element={<Home/>}/>
      <Route path="/month-statistics" element={<MonthStatistics/>}/>
    </Routes>
    </div>

   </div>

  

  );
}

export default App;
