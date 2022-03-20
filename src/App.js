import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/Loader';
import Home from './pages/home/Home';


function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [])

  return (
    <div className="App">
      {
        isLoading ? (<Loader />) : (
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        )
      }
    </div>
  );
}

export default App;
