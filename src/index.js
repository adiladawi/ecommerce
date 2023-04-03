import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/bootstrap.min.css'
import NotFound from "./screens/NotFoundScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './screens/HomeScreen'
import Product from './screens/ProductScreen';



const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} exact>
            <Route index element={<Home />} />
            <Route path='product/:id' element={<Product />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);