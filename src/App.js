import { Link,Routes,Route} from 'react-router-dom';
import Productmng from './components/Productmng';
import Usermng from './components/Usermng';
import './App.css';
import Addproduct from './components/Addproduct';

function App() {
  return (
    <>
    <div className='container'>
      <div className='navbar'>
        <div className='logo'>
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>
              <i className="fa-solid fa-users"></i>
                User
              </Link>
            </li>
            <li>
              <Link to='product'>
              <i className="fa-solid fa-boxes-stacked"></i>
                Product
              </Link>
            </li>
            <li>
              <Link to='addproduct'>
              <i className="fa-solid fa-circle-plus"></i>
                 Product
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Usermng/>}/>
          <Route path='product' element={<Productmng/>}/>
          <Route path='addproduct' element={<Addproduct/>}/>
        </Routes>
        <footer >
          <div className='footer-content'>
            <p>2022 ,Admin</p>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}

export default App;
