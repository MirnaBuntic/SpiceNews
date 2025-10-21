import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home';
import Trond from './components/Articles/Trond';
import './styles/global.scss';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  useEffect(() => {

    const setVh = () => {
      const vh = window.visualViewport
        ? window.visualViewport.height * 0.01
        : window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();

    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", setVh);
    }

    const refreshST = () => ScrollTrigger.refresh();
    ScrollTrigger.refresh(); 
    window.addEventListener("resize", refreshST);
    window.addEventListener("orientationchange", refreshST);

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
      window.removeEventListener("resize", refreshST);
      window.removeEventListener("orientationchange", refreshST);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", setVh);
      }
    };

  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trond" element={<Trond />} />
      </Routes>
    </Layout>
  )
}

