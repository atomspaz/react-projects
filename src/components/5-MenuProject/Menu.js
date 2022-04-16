import React, { useState } from "react";
import MenuItems from "./MenuItems";
import items from "./data";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const key = { key: "value" };

  return (
    <section className="container">
      <div>
        <h2>5. Menu Project</h2>
      </div>
      <MenuItems items={menuItems} test={key} />
    </section>
  );
};

export default Menu;
