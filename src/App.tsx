import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import Main from './components/main';
import Footer from './components/footer';
import { fetchCurrencies } from "./redux/action";

import './App.css';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <>
      <Main />
      <Footer />
    </>
  );
}


