
import AdminDashboard from "./AdminDashboard"
import Login from "./Login"
import Signup from "./Signup"
import './index.css'
import { BrowserRouter,Routes,Route} from "react-router-dom"


function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin-dashboard' element={<AdminDashboard />}></Route>
      </Routes>
      </BrowserRouter>

    </div>

  
  )
}

export default App
