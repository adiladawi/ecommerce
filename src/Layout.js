import './styles/Layout.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { StrictMode } from 'react';



const Layout = () => {
  return (
    <StrictMode>
    <Header />
    <Outlet />
    <Footer />
    </StrictMode>
  )
};

export default Layout;
