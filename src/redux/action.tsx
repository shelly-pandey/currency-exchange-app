import { Dispatch } from 'redux';

//Currency type can be imported if needed in future
//import { Currency } from './types';


//type specified for getting all currencies
export type GetCurrenciesAction = {
    type: "GET_CURRENCIES",
    payload: {
        currencyList: string[]
    }
}

export function getCurrencies(currencyList: string[]): GetCurrenciesAction {
    currencyList = currencyList.map((currency) => {
        return currency[0];
        // return {label: currency[0].concat('-').concat(currency[1]), value: currency[0]}
    });
    //Added unsupported currency to check the error
    currencyList.push("KPW");

    return {
        type: "GET_CURRENCIES",
        payload: { currencyList }
    }
}

//fetching all supported currencies
export function fetchCurrencies() {
    return (dispatch: Dispatch) => {
        fetch("https://v6.exchangerate-api.com/v6/e18c387f56370f31b439c45d/codes")
            .then((response) => response.json())
            .then((data) => dispatch(getCurrencies(data.supported_codes)));
    };
}

//specified type for getting the currency (from)
type GetBaseCurrencyAction = {
    type: "GET_BASE_CURRENCY",
    payload: { baseCurrency: string }
}


export function getBaseCurrency(baseCurrency: string): GetBaseCurrencyAction {
    return {
        type: "GET_BASE_CURRENCY",
        payload: { baseCurrency }
    };
}

//specified type for getting the currency (to)
type GetTargetCurrencyAction = {
    type: "GET_TARGET_CURRENCY",
    payload: { targetCurrency: string }
}


export function getTargetCurrency(targetCurrency: string): GetTargetCurrencyAction {
    return {
        type: "GET_TARGET_CURRENCY",
        payload: { targetCurrency }
    };
}

//specified type for getting the Amount (from)
type GetFromAmountAction = {
    type: "GET_FROM_AMOUNT",
    payload: { fromAmount: number }
}

export function getFromAmount(fromAmount: number): GetFromAmountAction {
    return {
        type: "GET_FROM_AMOUNT",
        payload: { fromAmount }
    };
}

//specified type for getting the Amount (to)
type GetToAmountAction = {
    type: "GET_TO_AMOUNT",
    payload: { toAmount: number }
}

export function getToAmount(toAmount: number): GetToAmountAction {
    return {
        type: "GET_TO_AMOUNT",
        payload: { toAmount }
    };
}
//created union of actions
export type CurrencyActions = GetCurrenciesAction | GetTargetCurrencyAction | GetBaseCurrencyAction | GetFromAmountAction | GetToAmountAction;
