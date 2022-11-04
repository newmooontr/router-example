
import './App.css';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import {Routes, Route, Navigate} from "react-router-dom";
import PersonDetail from './pages/PersonDetail';
import FullStack from './pages/FullStack';
import Aws from './pages/Aws';
import PrivateRouter from './pages/PrivateRouter';
import Login from './pages/Login';


function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/people' element={<People/>} />
        <Route path='/people/:id' element={<PersonDetail/>} />


        <Route path='/paths' element={<Paths/>} >
            <Route index element={<FullStack/>}/>
            {/* <Route path='fullstack' element={<FullStack/>}/> */}
            <Route path='aws' element={<Aws/>}/>
        </Route>

        <Route path='contact' element={<PrivateRouter/>}>
            <Route path='' element={<Contact/>} />
        </Route>

        <Route path='/login' element={<Login/>} />


        {/* <Route path='*' element={<NotFound/>} /> */}
        <Route path='*' element={<Navigate to="/"/>} />
      </Routes>

      <Footer/>
    
    </>
    
  );
}

export default App;
