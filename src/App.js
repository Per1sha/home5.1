import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import UsersList from './UserList';
import UserDEtails from './UserDEtails';

const App = () => {
  return (
   <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserDEtails />} />
      </Routes>

   </BrowserRouter>
  );
};

export default App;