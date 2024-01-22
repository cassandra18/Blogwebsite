import React from 'react';
import { Link } from 'react-router-dom';


const Categories: React.FC = () => {

return (
<>
    <div>
      <ul>
        <li>
          <Link to="/all-blogs">All</Link>
        </li>
        <li>
          <Link to="/startups">StartUs</Link>
        </li>
        <li>
          <Link to="/security">Security</Link>
        </li>
        <li>
          <Link to="/ai">AI</Link>
        </li>
        <li>
          <Link to="/apps">Apps</Link>
        </li><li>
          <Link to="/tech">Tech</Link>
        </li>
      </ul>
    </div>
</>
)
};

export default Categories;