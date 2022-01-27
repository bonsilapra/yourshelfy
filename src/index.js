import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import { PersistGate } from 'redux-persist/integration/react'
import MainPage from './components/mainPage/MainPage';
import { Shelf } from './components/mainPage/Shelf';
import { ShoppingList } from './components/shoppingList/ShoppingList';
// may be used instead of Modal
// import GetListComp from './components/shoppingList/GetListComp'; 
import Products from './components/products/Products';
import { About } from './components/about/About';
import configureStore from './app/store';
import { Provider } from 'react-redux';
import Footer from './components/commons/Footer';
import Navigation from './components/commons/Navigation';

const {store, persistor} = configureStore()


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="shelf/:id" element={<Shelf />} />
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
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)