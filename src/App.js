import { useState } from "react";
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
function App() {
  const [page, setPage] = useState('register')
  return (
    <div className="App">
      {page == 'login' ? <Login setPage={setPage} /> : <Register setPage={setPage} />}
    </div>
  )
}

export default App;
