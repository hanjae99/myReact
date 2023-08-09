import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/articles/1">게시글1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Articles;
