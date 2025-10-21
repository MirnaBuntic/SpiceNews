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

    const refreshScroll = () => ScrollTrigger.refresh();

    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", setVh);
      window.visualViewport.addEventListener("scroll", setVh);
    }

    window.addEventListener("resize", refreshScroll);
    window.addEventListener("orientationchange", refreshScroll);

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
      window.removeEventListener("resize", refreshScroll);
      window.removeEventListener("orientationchange", refreshScroll);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", setVh);
        window.visualViewport.removeEventListener("scroll", setVh);
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

