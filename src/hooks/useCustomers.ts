import { useContext, useEffect } from "react";
import { getCustomers } from "../core/services/customer.service";
import { AppContext } from "../state/AppContext";

export const useCustomers = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getCustomers()
      .then((customers) => {
        dispatch({ type: 'CUSTOMERS_GOTTEN', payload: customers })
      });
  }, []);

  return { customers: state.customers };
}