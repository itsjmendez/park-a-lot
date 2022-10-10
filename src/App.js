import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Index';
import { Account } from './pages/Account/Index';
import { Login } from './pages/Login/Index';
import { Reservation } from './pages/Reservation/Index';
import { History } from './pages/History/Index';
import { Payments } from './pages/Payments/Index';
import { Subscription } from './pages/Subscription/Index';
import { Navbar } from './layouts/Navbar/Index';
import { Footer } from './layouts/Footer/Index';
import { SignUp } from './pages/Signup/Index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/history" element={<History />} />
        <Route path="login" element={<Login />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
