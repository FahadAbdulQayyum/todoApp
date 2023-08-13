import './App.css';
import AppRoutes from './routes/appRoutes';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <AppRoutes/>
    </HashRouter>

    // <BrowserRouter>
    //   <AppRoutes/>
    // </BrowserRouter>
  );
}

export default App;
