import './App.css';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Dashboard from './Pages/Dashboard/Dashboard'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import StudentList from './Pages/Student/StudentList';
import FacultyList from './Pages/Faculty/FacultyList';
import Home from './Pages/Home/Home';

const MainRouter = createBrowserRouter([
  {path:'',Component:Login},
  {path:'/login',Component:Login},
  {path:'/signup',Component:SignUp},
  {path:'/dashboard',Component:Dashboard,children:[
    {path:'',Component:Home},
    {path:'home',Component:Home},
    {path:'student',Component:StudentList},
    {path:'faculty',Component:FacultyList}
  ]}
])

function App() {
  return (
    <>
     <RouterProvider router={MainRouter}>

     </RouterProvider>
    </>
  );
}

export default App;
