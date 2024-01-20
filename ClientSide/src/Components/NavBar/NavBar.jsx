import React from 'react';

const CategoryItem = ({ category, setSelectedCategory }) => (
  <li className="relative group">
    <a
      href="#"
      className="text-blue-gray-700 hover:text-pink-500 py-2 px-4 inline-block"
      onClick={() => setSelectedCategory(category._id)}
    >
      {`${category.name}(${category.productCount})`}
    </a>
    {category.children && (
      <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white text-blue-gray-700 group-hover:block z-10">
        {renderNestedChildren(category.children, setSelectedCategory)}
      </ul>
    )}
  </li>
);

const renderNestedChildren = (children, setSelectedCategory) => {
  return children.map((child) => (
    <li
      key={child._id}
      className="py-1 px-4 bg-blue-gray-800 group-hover:bg-pink-800"
    >
      <a
        href="#"
        className="block hover:text-pink-500"
        onClick={() => setSelectedCategory(child._id)}
      >
        {`${child.name}(${child.productCount})`}
      </a>
      {child.children && (
        <ul className="mt-1">
          {renderNestedChildren(child.children, setSelectedCategory)}
        </ul>
      )}
    </li>
  ));
};

const Navbar = ({ categories, setSelectedCategory }) => {
  return (
    <nav className="bg-pink-800 p-4 text-white">
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li key={category._id}>
            <CategoryItem
              category={category}
              setSelectedCategory={setSelectedCategory}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
