import Main from './components/main';

import { fetchCurrencies } from "./redux/action";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import './App.css';


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('--------- in app');
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <>

      <Main />
      
    </>
  );
}


