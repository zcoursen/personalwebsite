import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({match}) => (
  <div>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/about`}>About</Link></li>
                <li><Link to={`/resume`}>Resume</Link></li>
                <li><Link to={`/contact`}>Contact</Link></li>

            </ul>
  </div>
);

export default Navigation;