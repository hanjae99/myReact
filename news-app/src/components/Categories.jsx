import React from "react";
import "./Categories.css";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = () => {
  return (
    <div className="categoriesBlock">
      {categories.map((c) => (
        <div key={c.name} className="category">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : undefined
            } /* NavLink 는 active 클래스를 만듦(내장함수 isActive 로 판별) */
            to={c.name === "all" ? "/" : "/" + c.name}
          >
            {c.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Categories;
