import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserDetail from './component/UserDetail';
import Home from './component/Home';

   function App() {
  

    return (

      <div className="App">
  

        {/* USING ROUTES FOR NAVIGATE  */}
        <Routes>

          <Route path='/' element = { <Home />} />

          <Route path='/users' element = { <Home />} />

          <Route path='/users/:id' element = { <UserDetail />} />

        </Routes>


       
  
      
      </div>
    );
  }
  

export default App;
