"use client";
import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from 'react';
import { Provider } from '../../interfaces';

interface initialStateType {
  error:boolean;
  loading:boolean;
  SortedPartners:Provider[];
  Partners: Provider[];
  starFilter:number;
  distanceFilter:number;
  serviceFilter:string;
}

const initialState = {
  error:false,
  loading:false,
  SortedPartners:[],
  Partners: [],
  starFilter:0,
  distanceFilter:0,
  serviceFilter:"",
} as initialStateType;

export const PartnerContext = createContext<initialStateType>(null!);
export const PartnerDispatchContext = createContext<Dispatch<any>>(null!);

export const PartnerProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(
    partnersReducer,
    initialState
  );

  return (
    <PartnerContext.Provider value={state}>
      <PartnerDispatchContext.Provider value={dispatch}>
        {children}
      </PartnerDispatchContext.Provider>
    </PartnerContext.Provider>
  );
}

export const PARTNER_ACTIONS = {
  GET_PARTNERS:'get partners',
  SET_SORTED_PARTNERS:'set partners',
  SET_LOADING:'set loading',
  SET_STAR_FILTER:'set star filter',
  SET_DISTANCE_FILTER:'set distance filter',
  SET_SERVICE_FILTER:'set service filter'
}

function partnersReducer(state: initialStateType, action: { type: string; payload: any; }) {
  switch (action.type) {
    case PARTNER_ACTIONS.GET_PARTNERS: {
      return { 
        ...state, 
        Partners: action.payload, 
        SortedPartners: action.payload,
        loading:false,
        error:false, 
      }
    }
    case PARTNER_ACTIONS.SET_LOADING: {
      return {
        ...state,
        loading:action.payload,
      }
    }
    case PARTNER_ACTIONS.SET_SORTED_PARTNERS: {
      return { 
        ...state,  
        SortedPartners: action.payload,
        loading:false,
        error:false, 
      }
    }
    case PARTNER_ACTIONS.SET_STAR_FILTER: {
      return { 
        ...state,  
        starFilter: action.payload,
      }
    }
    case PARTNER_ACTIONS.SET_DISTANCE_FILTER: {
      return { 
        ...state,  
        distanceFilter: action.payload,
      }
    }
    case PARTNER_ACTIONS.SET_SERVICE_FILTER: {
      return { 
        ...state,  
        serviceFilter: action.payload,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function usePartners() {
  return useContext(PartnerContext);
}

export function usePartnerDispatch() {
  return useContext(PartnerDispatchContext);
}
