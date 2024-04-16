import { ReactElement, ReactNode, createContext, useReducer } from "react";

export const initialState: IState = {
  isUserLogged: false,
  customers: []
}
interface IAppContext {
  state: IState;
  dispatch: any
}
export const AppContext = createContext<IAppContext>({ state: initialState, dispatch: null });

interface IAppProviderProps {
  children: ReactNode;
}

interface IState {
  isUserLogged: boolean;
  customers: string[];
}

interface IAction {
  type: string;
  payload?: any;
}


export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'USER_LOGGED':
      return { ...state, isUserLogged: true };
    case 'CUSTOMERS_GOTTEN':
      return { ...state, customers: action.payload }
    default:
      return state;
  }
}

export const AppProvider = ({ children }: IAppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}