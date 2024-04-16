import { ReactElement } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Header = (): ReactElement => {
  return <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/auth'>Auth</Link></li>
  </ul>
}