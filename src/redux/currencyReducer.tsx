import { CurrencyActions} from './action';

//specified types for initial state
type InitialState = {
    currencyList: string[],
    baseCurrency: string ,
    targetCurrency: string ,
    fromAmount: number,
    toAmount: number
};

const initialState: InitialState = {
    currencyList: [],
    baseCurrency: '',
    targetCurrency: '' ,
    fromAmount: 1,
    toAmount: 0
};

//set in state
export default function currencyReducer(state = initialState, action: CurrencyActions): InitialState {
    switch (action.type) {

        case "GET_CURRENCIES": {
            return {
                ...state,
                currencyList: action.payload.currencyList,
            }
        }


        case "GET_TARGET_CURRENCY": {
            return {
                ...state,
                targetCurrency: action.payload.targetCurrency                
            }
        }

        case "GET_BASE_CURRENCY": {
            return {
                ...state,
                baseCurrency: action.payload.baseCurrency,
            }
        }

        case "GET_FROM_AMOUNT": {
            return {
                ...state,
                fromAmount: action.payload.fromAmount,
            }
        }

        default:
            return state;
    }
}

export type rootState = ReturnType<typeof currencyReducer>