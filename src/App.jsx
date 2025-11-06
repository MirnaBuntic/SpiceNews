import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home';
import Trond from './components/Articles/Trond';
import Lasse from './components/Articles/Lasse';
import Skjermtid from './components/Articles/Skjermtid';
import './styles/global.scss';
import { useEffect } from 'react';


export default function App() {

    useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };

    setVh();

    const handleResize = () => {
      setVh();
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trond" element={<Trond />} />
        <Route path="/lasse" element={<Lasse />} />
        <Route path="/skjermtid" element={<Skjermtid />} />
      </Routes>
    </Layout>
  )
}