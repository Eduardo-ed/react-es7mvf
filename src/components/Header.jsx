import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../data/MenuItems';

import './header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <body>
        
        <h1>Header</h1>
        
        <nav>
          <ul>
            {MenuItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </body>
    );
  }

}
export default Header;