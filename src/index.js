import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import { MainPage } from './components/mainPage/MainPage';
import { Shelf } from './components/mainPage/Shelf';
import { NOShelf } from './components/mainPage/NOShelf';
import { ShoppingList } from './components/shoppingList/ShoppingList';
// import { GetListComp } from './components/shoppingList/GetListComp';
import { Products } from './components/products/Products';
import { About } from './components/about/About';
import store from './app/store';
import { Provider } from 'react-redux';
import Footer from './components/commons/Footer';
import Navigation from './components/commons/Navigation';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="shelf/:id" element={<Shelf />} />
        <Route path="NOshelf" element={<NOShelf />} />
        <Route path="products" element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="shoppingList" element={<ShoppingList />} />
        <Route path="about" element={<About />} />
        {/* <Route path="listComp" element={<GetListComp />} /> */}
        <Route
          path="*"
          element={
            <main style={{ paddingTop: "15rem", paddingBottom: "10rem" }}>
              <Alert variant="danger" style = {{textAlign: "center"}}> 
                Tu nic nie ma!
              </Alert>
            </main>
          }
        />
      </Routes>
    <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)