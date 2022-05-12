import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from '../redux/currencyReducer';
import configData from '../config.json';


import { getBaseCurrency, getFromAmount, getTargetCurrency } from "../redux/action";

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';



export default function Main() {
  const dispatch = useDispatch();

  //getting from state by useSelector
  const currencies = useSelector((state: rootState) => state.currencyList);
  let baseCurrency = useSelector((state: rootState) => state.baseCurrency);
  let targetCurrency = useSelector((state: rootState) => state.targetCurrency);
  let fromAmount = useSelector((state: rootState) => state.fromAmount);
  const [toAmount, setToAmount] = useState();
  const [error, setError] = useState('');
  

  //fetching the conversion result . 
  useEffect(() => {
    if (fromAmount && baseCurrency && targetCurrency) {
      let url = configData.GET_EXCHANGE_RATE_URL.concat(baseCurrency).concat("/").concat(targetCurrency).concat("/").concat(fromAmount.toString());
      console.log(url);
      fetch(url)
        .then((response) => {
          if (response.ok) { return response.json(); }

          else {
            setToAmount(undefined);
            response.text()
              .then(errorResponse => {
                console.log(' error ' + errorResponse);
                //setError(errorResponse)
                setError('unsupported currency')
              })
          }

        })
        .then((data) => { 
          setError(''); 
          data && setToAmount(data.conversion_result)
         })
        .catch((error) => {
          console.log('****************** ' + error)
        });
    }
  // dipatching all rows .Any changes in a row will reflect in the output
  }, [dispatch, fromAmount, baseCurrency, targetCurrency]);



  const handleChangeBaseCurrency = useCallback((event: any, value: any) => {
    if(!value) {setToAmount(undefined)}
    dispatch(getBaseCurrency(value));
  }, [dispatch]
  );

  const handleChangeTargetCurrency = useCallback((event: any, value: any) => {
    if(!value) {setToAmount(undefined)}
    dispatch(getTargetCurrency(value));
  }, [dispatch]
  );

  const handleChangeAmount = useCallback((event: any) => {
    if(!event.target.value) {setToAmount(undefined)}
    dispatch(getFromAmount(event.target.value));
  }, [dispatch]
  );

  //material ui used for searchable select.
  return (
    <div className="form">
      <h1>Currency Converter</h1>
      
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="from-amount" label="Amount" variant="outlined" value={fromAmount} onChange={handleChangeAmount} />
      </Box>

      <Box sx={{ minWidth: 220 }}>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Autocomplete
            disablePortal
            id="base-currency"
            options={currencies}
            sx={{ width: 300 }}
            onChange={handleChangeBaseCurrency}
            renderInput={(currency) => <TextField {...currency} label="Select currency from..." />}
          />

        </FormControl>
      </Box>
      
      <Box sx={{ minWidth: 220 }}>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Autocomplete
            disablePortal
            id="target-currency"
            options={currencies}
            sx={{ width: 300 }}

            onChange={handleChangeTargetCurrency}
            renderInput={(currency) => <TextField {...currency} label="Convert to..." />}
          />
        </FormControl>
      </Box>
      <svg className="bounce" data-testid=""><ArrowDropDownCircleIcon fontSize="small"/></svg>

      <Box component="form" sx={{ m: 1, width: '25ch' }} >
        Output:  {toAmount}  <div className="error"> {error}</div>
      </Box>

    </div>

  );
}

