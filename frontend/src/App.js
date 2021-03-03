import Admin from './Admin/Admin';
import './App.css';
import Signin from './User/Signin';
import {BrowserRouter,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
<Signin />
    {/* <Admin /> */}
    </div>
  );
}

export default App;
