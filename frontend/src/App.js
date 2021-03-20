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
import AdminRoute from './auth/AdminRoutes'


function App() {
  return (
    <div className="App">
<Route exact path="/" component={Signin} />
<Navbar />

<Layout>
<Switch>

<AdminRoute exact path="/dashboard" component={Dashboard} />

<AdminRoute exact path="/allbook" component={AllBook} />

<AdminRoute exact path="/alluser" component={AllUser} />

<AdminRoute exact path="/issuebook" component={IssueRetuenRequest} />

<AdminRoute exact path="/addbook" component={AddBook} />

<AdminRoute exact path="/adduser" component={AddUser} />

  </Switch>
</Layout>
    </div>
  );
}

export default App;
