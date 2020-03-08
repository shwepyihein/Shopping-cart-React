import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar';
import ProductList from './componets/ProductList';
import Detail from './componets/Detail';
import Cart from './componets/Cart/Cart'
import Default from './componets/Default';
import Modal from './componets/Modal'

class App extends React.Component{
  render(){
    return(
     
      <React.Fragment>
        <Navbar>        </Navbar>
        <Switch>
          <Route exact path="/" Component={ProductList}><ProductList/></Route>
          <Route path="/details" Component={Detail}><Detail/></Route>
          <Route path="/cart" Component={Cart}><Cart/></Route>          
          <Route  Component={Default}><Default/></Route>
        </Switch>
        <Modal/>
      </React.Fragment>
    )
  }
}

export default App;
