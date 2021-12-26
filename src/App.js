import './App.css';
import Counter from './components/counter';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Products } from './components/products';
import { Home } from './components/home';
import { Cart } from './components/cart';

function App() {
  return (

    <div>
      <Router>
        <div className="header">
          {/* <Header/> */}
        </div>
        <div className="menu">
          <div className="menu-container"> 
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/products'>Products</Link></div>
            <div><Link to='/cart'>cart</Link></div>
            <div><Link to='./login'>Login</Link></div>
          </div>
        </div>
        <div className="content">
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route  path='/products' element={<Products/>}></Route>
              <Route  path='/cart' element={<Cart/>}></Route>
          </Routes>
        </div>
        <div className="footer">Footer</div>
      </Router>
    </div>
  );
}

export default App;
