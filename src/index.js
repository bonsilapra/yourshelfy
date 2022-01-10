import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import './index.css'
import { MainPage } from './mainPage/MainPage'
import store from './app/store'
import { Provider } from 'react-redux'
import Footer from './commons/Footer';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <div className='page-container'>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="trips" element={<MainPage />} />
        {/* <Route path="trip/:id" element={<Trip />} /> 
        <Route path="peaks" element={<Peaks />} /> 
        <Route path="about" element={<About />} /> */}
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
      </div>
    <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)