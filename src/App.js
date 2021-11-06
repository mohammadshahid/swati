import React from 'react';

import {
  BrowserRouter,
  Switch,
  Routes,
  Route
} from "react-router-dom";
import HeadNavbar from './layout/Navbar';
import TopNav from './layout/TopNav';
import Banner from './layout/Banner';
import Product from './layout/Product';
import ProductDetail from './layout/ProductDetail';
import './App.scss';

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <TopNav />
    //     <HeadNavbar />
    //     <Switch>
    //       <Redirect exact from="/" to="/product" />
    //       <Route path="/product">
    //         <Banner />
    //       </Route>
    //     </Switch>
    //   </Router>
      
    //   {/* <Banner /> */}
    // </div>

    <BrowserRouter>
    <div className="App">
        <TopNav />
        <HeadNavbar />
        <Routes>
          <Route path='/' element={<Banner />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='product/:sku' element={<ProductDetail />}></Route>
        </Routes>    
    </div>
    </BrowserRouter>
  );
}

export default App;
