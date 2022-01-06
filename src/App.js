import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import './components/style.css'
import RecipeList from './components/RecipeList';
import { useState } from 'react';
import Recipes from './components/Recipes';

function App() {
  const [food, setfood] = useState(false)
  const [item, setitem] = useState({})
  let itemData = (data) => {
    // console.log(data);
    setitem(data);
    setfood(true);
  }
  return (
    <div className="App">
      <Router>
        <div className='row'>
          <Navbar />
          <br />
          <div className='col col-md-4' style={{ float: 'left'}}>
            <RecipeList getData={itemData} />
          </div>
          <div className='col col-md-7' style={{ float: 'right'}} >
            {
              food ? <Recipes item={item} /> : <div className='home-msg mt-3'>
                
              </div>
            }
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
