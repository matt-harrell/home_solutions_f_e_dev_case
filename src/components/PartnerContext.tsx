"use client";
import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from 'react';
import { Provider } from '../../interfaces';

interface initialStateType {
  Partners: Provider[];
}

const initialState = {
  Partners: [],
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
}

function partnersReducer(state: initialStateType, action: { type: string; payload: any; }) {
  switch (action.type) {
    case PARTNER_ACTIONS.GET_PARTNERS: {
      return { ...state, Partners: action.payload }
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
