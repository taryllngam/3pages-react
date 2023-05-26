import './App.css';
import SignupForm from './pages/create-profile';
import Profile from './pages/profile/profile';
import Welcome from './pages/Welcome-page/Welcome';
import Edit from './pages/edit-profile/Edit'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route path='/sign' element={<SignupForm />} />;
          <Route path='/profile' element={<Profile />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
