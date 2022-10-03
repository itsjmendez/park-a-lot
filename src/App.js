import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Index';
import { Account } from './pages/Account/Index';
import { Login } from './pages/Login/Index';
import { Reservation } from './pages/Reservation/Index';
import { History } from './pages/History/Index';
import { Payments } from './pages/Payments/Index';
import { Subscription } from './pages/Subscription/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/history" element={<History />} />
        <Route path="login" element={<Login />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="subscription" element={<Subscription />} />
      </Routes>
    </div>
  );
}

export default App;
