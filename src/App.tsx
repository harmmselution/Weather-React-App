import './styles/index.scss';
import { Home } from './pages/Home/Home';
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
    <Home/>
    </div>
    </div>
   </ThemeProvider>

  );
}

export default App;
