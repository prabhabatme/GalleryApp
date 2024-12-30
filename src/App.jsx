
import './css/App.css';
import MovieCard from './components/moviecard'
import Home from './pages/Home';
import {Routes ,Route} from "react-router-dom"
import Favorite from './pages/Favorite';
import { MovieProvider } from './contexts/movieContext';
import NavBar from './components/NavBar';
function App() {

  const movieNumber =1;
  return (
   
<MovieProvider>
      <NavBar />
    <main className='main-ontent'>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/favorite" element={<Favorite />}></Route>
   
  </Routes>
  
 
   </main>
 </MovieProvider>
 
  )
}



export default App
