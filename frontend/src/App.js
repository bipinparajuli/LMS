
import React,{Suspense} from "react"

import Admin from './Component/Admin/Admin';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Signin = React.lazy(()=> import( './Component/User/Signin')) ;
const Dashboard = React.lazy(()=> import( './Component/Admin/Dashboard/Dashboard')) ;
const AllBook = React.lazy(()=> import( './Component/Admin/AllBook/AllBook')) ;
const AllUser = React.lazy(()=> import( './Component/Admin/AllUser/AllUser')) ;
const AddBook = React.lazy(()=> import( './Component/Admin/Addbook/AddBook')) ;
const AddUser = React.lazy(()=> import( './Component/Admin/AddUser/AddUser')) ;
const IssueRetuenRequest = React.lazy(()=> import( './Component/Admin/IssueReturnRequest/IssueRetuenRequest')) ;
const AdminRoute = React.lazy(()=> import( './Component/auth/AdminRoutes')) ;
const UpdateBook = React.lazy(()=> import( './Component/Admin/UpdateBook/UpdateBook')) ;
const UpdateStudent = React.lazy(()=> import( './Component/Admin/UpdateStudent/UpdateStudent')) ;
const StudentHome = React.lazy(()=> import( './Component/Student/StudentHome')) ;


function App() {
  return (
    <div className="App">

      <ToastContainer />
<Route exact path="/" component={Signin} />

<Switch>
<Route exact path="/student/home" render={()=>( <Suspense fallback={<h1>Student Home loading . . .</h1>} > <StudentHome /> </Suspense> )}   />

<AdminRoute exact path="/dashboard" component={Dashboard}  />

<AdminRoute exact path="/allbook" component={AllBook}  />

<AdminRoute exact path="/alluser" component={AllUser}  />

<AdminRoute exact path="/adduser" component={AddUser}  />


<AdminRoute exact path="/addbook" component={AddBook}  />


<AdminRoute exact path="/issuebook" component={IssueRetuenRequest}  />

<AdminRoute exact path="/issuebook" component={IssueRetuenRequest}  />


<AdminRoute exact path="/admin/book/updatebook/:bookid" component={UpdateBook} />

<AdminRoute exact path="/admin/book/updatebook/:bookid" component={UpdateStudent} />


<AdminRoute exact path="/admin/book/updatebook/:bookid" component={UpdateBook} />

<AdminRoute exact path="/admin/student/updatestudent/:studentid" component={UpdateStudent} />
  </Switch>
    </div>
  );
}

export default App;
