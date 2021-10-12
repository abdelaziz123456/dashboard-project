
import  Home  from './pages/Home';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import UserList from './pages/UserList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from './pages/User';
import NewUser from './pages/newUser';
import productList from './pages/ProductList';
import Product from './pages/Product';
import NewProduct from './pages/newProduct';


function App() {
  return (
    <Router className="App">
    
     <Topbar/>
     <div className="container">
     <Sidebar/>
     
     
     <Route  path="/" component={Home}/>
    <Route  path="/dashboard-project" component={Home}/>
    <Route exact path="/users" component={UserList}/>
         
       <Route exact path="/user/:userId">
       <User/>
       </Route>
       <Route exact path="/newUser">
       <NewUser/>
       </Route>
       <Route exact path="/products" component={productList}/>
         
       <Route exact path="/product/:productId">
       <Product/>
       </Route>
       <Route exact path="/newProduct">
       <NewProduct/>
       </Route>
      
       
     

     </div>

    
    </Router>

  );
}

export default App;
