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
import UpdateBook from './Admin/UpdateBook/UpdateBook';
import UpdateStudent from './Admin/UpdateStudent/UpdateStudent';
import StudentHome from './Student/StudentHome';

function App() {
  return (
    <div className="App">
<Route exact path="/" component={Signin} />

<Switch>
<Route exact path="/student/home" component={StudentHome} />

<AdminRoute exact path="/dashboard" component={Dashboard} />

<AdminRoute exact path="/allbook" component={AllBook} />

<AdminRoute exact path="/alluser" component={AllUser} />

<AdminRoute exact path="/issuebook" component={IssueRetuenRequest} />

<AdminRoute exact path="/addbook" component={AddBook} />

<AdminRoute exact path="/adduser" component={AddUser} />

<AdminRoute exact path="/admin/book/updatebook/:bookid" component={UpdateBook} />

<AdminRoute exact path="/admin/student/updatestudent/:studentid" component={UpdateStudent} />

  </Switch>
    </div>
  );
}

export default App;
