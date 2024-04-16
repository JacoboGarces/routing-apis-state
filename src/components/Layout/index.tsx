import { ReactElement } from 'react';
import './style.css';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';

export const Layout = (): ReactElement => {
  return (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
  );
}