import './App.css';
import Forgotpassword from './components/Forgopasswordpage/Forgotpassword';
import Login from './components/Loginpage/Login';
import Register from './components/Registerpage/Register';
import Resetpassword from './components/Resetpasswordpage/Resetpassword';
import Welcome from './components/Welcomepage/Welcome';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import WelcomeForm from './components/Welcomeformpage/WelcomeForm';



function App() {
  return(
 <div>
  <Router>
<Routes>

<Route path='/'element={<Welcome/>}/>
<Route path='/login'element={<Login/>}/>
<Route path='/register'element={<Register/>}/>
<Route path='/forgotpassword'element={<Forgotpassword/>}/>
<Route path='/resetpassword'element={<Resetpassword/>}/>
<Route path='/welcomeform'element={<WelcomeForm/>}/>
</Routes>
  </Router>

 </div>
  );

}

export default App;
