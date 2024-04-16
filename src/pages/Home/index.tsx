import { ReactElement } from 'react';
import { useCustomers } from '../../hooks/useCustomers';
import './style.css';

export const Home = (): ReactElement => {
  const {customers} = useCustomers();

  return <section>
    <h1>Home</h1>

    <ul>
      {customers.map((customer) => <li key={customer}>{customer}</li>)}
    </ul>
  </section>
}