import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import UserList from './Component/UserList';
import Navbar from './Component/Navbar';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/updateuser';


function App() {

  return(

    <div className='xyz'>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/ulist" element={<UserList />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/edit/:id" element={<UpdateUser/>} />
     </Routes>
    </div>
  );

}

export default App;
