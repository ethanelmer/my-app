import { HashRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router';
import './App.css';
import Layout from './Components/Layout';
import Portfolio from './Components/Portfolio';
import Involvement from './Components/Involvement';

function App() {
  return (
  <div className="App">
    
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path = '/Involvement' element ={<Involvement/>}>
        </Route>
      </Routes>
    </HashRouter>
  </div>);
}

export default App;

