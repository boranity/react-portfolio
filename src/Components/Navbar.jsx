import './Navbar.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


export default function Navbars() {
  return (
    <div className="nav">
      <Link to="/">
        <a>Home</a>
      </Link>

      <Link to="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
}
  