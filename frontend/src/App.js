import Admin from './Admin/Admin';
import './App.css';
import Signin from './User/Signin';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Layout from './Layout/Layout';
import { Dashboard } from './Admin/Dashboard/Dashboard';
import Navbar from './UI/Navbar/Navbar';
import AllBook from './Admin/AllBook/AllBook';
import AllUser from './Admin/AllUser/AllUser';
import IssueRetuenRequest from './Admin/IssueReturnRequest/IssueRetuenRequest';
import AddBook from './Admin/Addbook/AddBook'
import AddUser from './Admin/AddUser/AddUser'

function App() {
  return (
    <div className="App">
      <Navbar />
<Layout>
  <Switch>
<Route exact path="/" component={Dashboard} />

<Route exact path="/allbook" component={AllBook} />

<Route exact path="/alluser" component={AllUser} />

<Route exact path="/issuebook" component={IssueRetuenRequest} />

<Route exact path="/addbook" component={AddBook} />

<Route exact path="/adduser" component={AddUser} />

  </Switch>
</Layout>
    </div>
  );
}

export default App;
