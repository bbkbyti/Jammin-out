
import { Route } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AlbumsList from './components/AlbumsList'
import AlbumDetail from "./components/AlbumDetail";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route exact path="/">Home</Route>
      <Route exact path="/all-albums">
      <AlbumsList />
      </Route>
      <Route path="/albums/:id">
       <AlbumDetail />
      </Route>


      

      <Footer />
      
    </div>
  );
}

export default App;
