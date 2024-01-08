// Categories.jsx

import React from "react";

const Categories = () => {
  return (
    <div className=" py-4 px-40 rounded-md ">
      <div className="bg-blue-200 p-5 ">
        <h2 className="text-xl font-bold mb-4">Test Categories</h2>
        <ul className="list-disc pl-4">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          {/* Add more categories as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
