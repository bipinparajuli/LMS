
import React,{Suspense} from "react"

import Admin from './Admin/Admin';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Signin = React.lazy(()=> import( './User/Signin')) ;
const Dashboard = React.lazy(()=> import( './Admin/Dashboard/Dashboard')) ;
const AllBook = React.lazy(()=> import( './Admin/AllBook/AllBook')) ;
const AllUser = React.lazy(()=> import( './Admin/AllUser/AllUser')) ;
const AddBook = React.lazy(()=> import( './Admin/Addbook/AddBook')) ;
const AddUser = React.lazy(()=> import( './Admin/AddUser/AddUser')) ;
const IssueRetuenRequest = React.lazy(()=> import( './Admin/IssueReturnRequest/IssueRetuenRequest')) ;
const AdminRoute = React.lazy(()=> import( './auth/AdminRoutes')) ;
const UpdateBook = React.lazy(()=> import( './Admin/UpdateBook/UpdateBook')) ;
const UpdateStudent = React.lazy(()=> import( './Admin/UpdateStudent/UpdateStudent')) ;
const StudentHome = React.lazy(()=> import( './Student/StudentHome')) ;



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
