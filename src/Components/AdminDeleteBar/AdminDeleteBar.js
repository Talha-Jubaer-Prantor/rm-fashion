import React from 'react';
import { Link } from 'react-router-dom';

const AdminDeleteBar = () => {
    return (
        <div>
            <div>
        <span>
          <Link to="/adminhome" className="btn btn-success">
              Create Post
          </Link>
        </span>
        <span>
          <Link to="/admindelete" className="btn btn-success">
              Delete Post
          </Link>
        </span>
        <span>
          <Link to="/adminsettings" className="btn btn-success">
              Settings
          </Link>
        </span>
      </div>


        </div>
    );
};

export default AdminDeleteBar;