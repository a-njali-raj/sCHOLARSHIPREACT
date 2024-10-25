import './App.css';
import Forgotpassword from './components/Forgotpassword';
import Login from './components/Login';
import Register from './components/Register';
import Resetpassword from './components/Resetpassword';
import Welcome from './components/Welcome';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import WelcomeForm from './components/WelcomeForm';



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
