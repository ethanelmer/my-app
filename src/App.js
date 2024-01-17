import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router';
import './App.css';
import Layout from './Components/Layout';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Involvement';

function App() {
  return (
  <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path = '/involvement' element ={<Contact/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;

