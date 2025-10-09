import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home';
import Trond from './components/Articles/Trond';
import './styles/global.scss';


export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trond" element={<Trond />} />
      </Routes>
    </Layout>
  )
}

