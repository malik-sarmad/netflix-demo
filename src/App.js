import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Layout from './Components/layout';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import Users from './Components/Users';
import Faq from './Components/Faq';
import Feature from './Components/Feature';
import Dashboard from './Components/dashboard';
import Movies from './Components/movie';
import { AdduserProvider } from './Components/adduserContext';



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AdduserProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/user' element={<Users />} />
            <Route path='/Faq' element ={<Faq/>}/>
            <Route path='/Featured' element={<Feature/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/movies' element={<Movies/>}/>

          </Routes>
        </AdduserProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
