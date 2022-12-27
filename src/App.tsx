import './styles/index.scss';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Route, Routes} from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { PopUp } from './pages/components/PopUp/PopUp';
import { ThemeProvider } from './provider/ThemeProvider';
function App() {

  return (
   <ThemeProvider>
   <div className="global">
   <PopUp/>
    <div className='container'>
      
    <Header/>
    <Routes>  
      <Route path="/" element={<Home/>}/>
      <Route path="/month-statistics" element={<MonthStatistics/>}/>
    </Routes>
    </div>
    </div>
   </ThemeProvider>

  );
}

export default App;
