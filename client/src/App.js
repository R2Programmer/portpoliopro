import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
function App() {
  return (
    <div className="App">
      <ToastContainer/>
    <PortfolioContainer/>
    </div>
  );
}
export default App;
