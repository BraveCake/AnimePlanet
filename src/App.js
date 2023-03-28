import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import Login from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';
import { useEffect } from 'react';
import { collection,onSnapshot } from 'firebase/firestore';
import db from './config/firebase';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() =>
  {
      console.log("hi");
      onSnapshot(collection(db, "projects"), (snapshot) => {
          console.log("use effect");
      dispatch({data:snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})),type:"LOAD"});

      })

  },[]
  
  );
  console.log("app.js");
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/project/:id' element={<ProjectDetails/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/newproject' element={<CreateProject/>} />
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
