import React, { propTypes} from 'react';

import styles from './Nav.css';

const Nav = (props, context) => {
  return (
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/">Posts</a></li>
        <li><a href="/about">About</a></li>
      </ul>
  );
}

Nav.propTypes = {
};

export default Nav;