
import React,{Suspense} from "react"

import Admin from './Component/Admin/Admin';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Component/Student/Profile/Profile";
import AllBooks from "./Component/Student/AllBooks";
import Mybooks from "./Component/Student/Mybooks";
import UpdateProfile from "./Component/Student/UpdateProfile/UpdateProfile";


const Signin = React.lazy(()=> import( './Component/User/Signin')) ;
const Dashboard = React.lazy(()=> import( './Component/Admin/Dashboard/Dashboard')) ;
const AllBook = React.lazy(()=> import( './Component/Admin/AllBook/AllBook')) ;
const AllUser = React.lazy(()=> import( './Component/Admin/AllUser/AllUser')) ;
const AddBook = React.lazy(()=> import( './Component/Admin/Addbook/AddBook')) ;
const AddUser = React.lazy(()=> import( './Component/Admin/AddUser/AddUser')) ;
const IssueRetuenRequest = React.lazy(()=> import( './Component/Admin/IssueReturnRequest/IssueRetuenRequest')) ;
const AdminRoute = React.lazy(()=> import( './Component/auth/AdminRoutes')) ;
const PrivateRoute = React.lazy(()=> import( './Component/auth/PrivateRoutes')) ;
const UpdateBook = React.lazy(()=> import( './Component/Admin/UpdateBook/UpdateBook')) ;
const UpdateStudent = React.lazy(()=> import( './Component/Admin/UpdateStudent/UpdateStudent')) ;
const StudentHome = React.lazy(()=> import( './Component/Student/StudentHome')) ;

function App() {
  return (
    <div className="App">

      <ToastContainer />
<Route exact path="/" component={Signin} />

<Switch>

<AdminRoute exact path="/dashboard" component={Dashboard}  />

<AdminRoute exact path="/allbook" component={AllBook}  />

<AdminRoute exact path="/alluser" component={AllUser}  />

<AdminRoute exact path="/adduser" component={AddUser}  />


<AdminRoute exact path="/addbook" component={AddBook}  />


<AdminRoute exact path="/issuebook" component={IssueRetuenRequest}  />

{/* <AdminRoute exact path="/issuebook" component={IssueRetuenRequest}  /> */}


<AdminRoute exact path="/admin/book/updatebook/:bookid" component={UpdateBook} />

<AdminRoute exact path="/admin/book/updatebook/:bookid" component={UpdateStudent} />

<AdminRoute exact path="/admin/book/updatebook/:bookid" component={UpdateBook} />

<AdminRoute exact path="/admin/student/updatestudent/:studentid" component={UpdateStudent} />

<PrivateRoute exact path="/student" component={Profile} />

<PrivateRoute exact path="/allbooks" component={AllBooks} />

<PrivateRoute exact path="/mybooklist" component={Mybooks} />

<PrivateRoute exact path="/updatestudentprofile" component={UpdateProfile} />

  </Switch>

    </div>
  );
}

export default App;
