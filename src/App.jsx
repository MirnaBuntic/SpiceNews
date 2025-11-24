import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/home';
import Trond from './components/Articles/Trond';
import Lasse from './components/Articles/Lasse';
import Skjermtid from './components/Articles/Skjermtid';
import Sjømann from './components/Articles/Sjømann';
import ScrollToTop from './components/ScrollToTop';

import './styles/global.scss';




export default function App() {

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trond" element={<Trond />} />
        <Route path="/lasse" element={<Lasse />} />
        <Route path="/skjermtid" element={<Skjermtid />} />
        <Route path="/sjømann" element={<Sjømann />} />
      </Routes>
    </Layout>
  )
}